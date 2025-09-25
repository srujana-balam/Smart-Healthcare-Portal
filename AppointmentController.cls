public with sharing class AppointmentController {
    @AuraEnabled(cacheable=true)
    public static List<Appointment__c> getUpcomingAppointmentsForProvider(Id providerId) {
        if(providerId == null) return new List<Appointment__c>();
        return [
            SELECT Id, Name, Appointment_Start__c, Appointment_End__c, Status__c,
                   Patient__c, Patient__r.Name
            FROM Appointment__c
            WHERE Provider__c = :providerId
              AND Appointment_Start__c >= :System.now()
            ORDER BY Appointment_Start__c
            LIMIT 50
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Appointment__c> getAppointmentsByPatient(Id contactId) {
        if(contactId == null) return new List<Appointment__c>();
        return [
            SELECT Id, Name, Appointment_Start__c, Appointment_End__c, Status__c,
                   Provider__c, Provider__r.Name
            FROM Appointment__c
            WHERE Patient__c = :contactId
            ORDER BY Appointment_Start__c
            LIMIT 50
        ];
    }
}
