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
       Appointment__c
•	Appointment_Start__c (Date/Time)
•	Appointment_End__c (Date/Time)
•	Status__c (Picklist: Scheduled, Completed, Cancelled)
•	Patient__c (Lookup → Patient/Contact)
•	Provider__c (Lookup → Provider__c)
•	Reason_for_Visit__c (Text Area)
 
 
 Tabs for Custom Objects
 Appointments
 Notification logs
 Prescriptions
 Providers
 Visits
