import { LightningElement } from 'lwc';

export default class PreviewModalPopup extends LightningElement {
    handleShowModal() {
        //const modal = this.template.querySelector("c-modal-Pop-Up");
        const modal = this.template.querySelector("c-datatable-Lwc");
        modal.show();
      }
}