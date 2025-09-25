public with sharing class SmartHealthcareFhirService {
    @AuraEnabled(cacheable=true)
    public static String getPatients() {
        String endpoint = 'https://hapi.fhir.org/baseR4/Patient?_count=20';
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        req.setHeader('Accept', 'application/fhir+json');
        req.setTimeout(60000); // 60s

        try {
            HttpResponse res = http.send(req);
            Integer sc = res.getStatusCode();
            if (sc >= 200 && sc < 300) {
                return res.getBody(); // return raw JSON string to LWC
            } else {
                // return a readable error to LWC
                throw new AuraHandledException('FHIR call failed: ' + sc + ' - ' + res.getStatus());
            }
        } catch (System.CalloutException ex) {
            throw new AuraHandledException('Callout error: ' + ex.getMessage());
        }
    }
}
