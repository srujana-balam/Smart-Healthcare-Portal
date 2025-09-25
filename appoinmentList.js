import { LightningElement, api, track } from 'lwc';
import getUpcomingAppointmentsForProvider from '@salesforce/apex/AppointmentController.getUpcomingAppointmentsForProvider';
import getAppointmentsByPatient from '@salesforce/apex/AppointmentController.getAppointmentsByPatient';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class AppointmentList extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    @track rows;
    @track error;

    columns = [
        { label: 'Patient', fieldName: 'patientName', type: 'text' },
        { label: 'Provider', fieldName: 'providerName', type: 'text' },
        { label: 'Start', fieldName: 'start', type: 'date' },
        { label: 'End', fieldName: 'end', type: 'date' },
        { label: 'Status', fieldName: 'status', type: 'text' }
    ];

    connectedCallback() { this.loadData(); }

    loadData() {
        if (this.objectApiName === 'Provider__c') {
            getUpcomingAppointmentsForProvider({ providerId: this.recordId })
                .then(res => { this.rows = this._format(res); this.error = undefined; })
                .catch(err => { this.error = err; this.rows = undefined; });
        } else if (this.objectApiName === 'Contact') {
            getAppointmentsByPatient({ contactId: this.recordId })
                .then(res => { this.rows = this._format(res); this.error = undefined; })
                .catch(err => { this.error = err; this.rows = undefined; });
        }
    }

    _format(appts) {
        return appts.map(a => ({
            id: a.Id,
            patientName: a.Patient__r ? a.Patient__r.Name : '',
            providerName: a.Provider__r ? a.Provider__r.Name : '',
            start: a.Appointment_Start__c,
            end: a.Appointment_End__c,
            status: a.Status__c
        }));
    }

    handleNewAppointment() {
        let defaults = {};
        if (this.objectApiName === 'Provider__c') defaults['Provider__c'] = this.recordId;
        if (this.objectApiName === 'Contact') defaults['Patient__c'] = this.recordId;
        const defaultValues = encodeDefaultFieldValues(defaults);
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: { objectApiName: 'Appointment__c', actionName: 'new' },
            state: { defaultFieldValues: defaultValues }
        });
    }

    // ✅ Add this getter
    get errorMessage() {
        if (this.error) {
            return this.error.body ? this.error.body.message : this.error;
        }
        return '';
    }
}
