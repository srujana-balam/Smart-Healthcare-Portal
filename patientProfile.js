import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';

export default class PatientProfile extends NavigationMixin(LightningElement) {
    @api recordId;

    handleBookAppointment() {
        const defaultValues = encodeDefaultFieldValues({ 'Patient__c': this.recordId });
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: { objectApiName: 'Appointment__c', actionName: 'new' },
            state: { defaultFieldValues: defaultValues }
        });
    }
}
