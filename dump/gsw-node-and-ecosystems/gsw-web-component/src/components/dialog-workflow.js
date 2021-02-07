export default class DialogWorkflow extends HTMLElement {
    connectedCallback() {
        this._onDialogClosed = this._onDialogClosed.bind(this);
        this.addEventListener("dialog-closed", this._onDialogClosed);
    }

    get dialogs() {
        return Array.from(this.querySelectorAll("one-dialog"));
    }

    _onDialogClosed(event) {
        const dialogClosed = event.target;
        const dialogClosedIndex = this.dialogs.indexOf(dialogClosed);
        const nextDialogIndex =
            dialogClosedIndex < this.dialogs.length - 1
                ? dialogClosedIndex + 1
                : -1;
        if (nextDialogIndex !== -1) {
            this.dialogs[nextDialogIndex].open = true;
        }
    }
}
customElements.define("dialog-workflow", DialogWorkflow);
