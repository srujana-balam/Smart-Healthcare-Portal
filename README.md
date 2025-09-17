Phase 2: Org Setup & Configuration (Healthcare Project)
Create a New Lightning App
•	App Manager → New Lightning App.
•	Smart Healthcare CRM
•	 “A Salesforce solution for Patient Engagement & Appointment Management.”
 
Custom Objects
1.	Patient__c 
2.	Appointment__c
3.	Visit__c
4.	Prescription__c
5.	Provider__c (Doctors)
6.	Notification_Log__c
 
 
 
Custom Fields
1. Appointment__c
2.	Appointment_Start__c (Date/Time)
3.	Appointment_End__c (Date/Time)
4.	Status__c (Picklist: Scheduled, Completed, Cancelled)
5.	Patient__c (Lookup → Patient/Contact)
6. Provider__c (Lookup → Provider__c)
7.	Reason_for_Visit__c (Text Area)
 
 
 Tabs for Custom Objects
 1. Appointments
 2. Notification logs
 3. Prescriptions
 4. Providers
 5. Visits
