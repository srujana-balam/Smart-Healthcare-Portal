import { LightningElement, track } from 'lwc';
import getPatients from '@salesforce/apex/SmartHealthcareFhirService.getPatients';

export default class DrugSearch extends LightningElement {
    @track patients;
    @track error;

    fetchPatients() {
        getPatients()
            .then(result => {
                this.patients = result;
                this.error = undefined;
            })
            .catch(error => {
                this.error = error.body ? error.body.message : error.message;
                this.patients = undefined;
            });
    }
}
