export default class OneDialog extends HTMLElement {
    constructor() {
        super();
        this.close = this.close.bind(this);
        this._watchEscape = this._watchEscape.bind(this);
    }

    // static get observedAttributes() {
    //     return ["open"];
    // }

    // attributeChangedCallback(attrName, oldValue, newValue) {
    //     if (newValue !== oldValue) {
    //         this[attrName] = this.hasAttribute(attrName);
    //     }
    // }

    connectedCallback() {
        const template = document.getElementById("one-dialog");
        const node = document.importNode(template.content, true);
        this.appendChild(node);

        const id = this.getAttribute("id");
        const titleEl = this.querySelector("#title");
        titleEl.innerHTML = `${titleEl.innerHTML} - Step ${id}`;

        this.querySelector("button").addEventListener("click", this.close);
        this.querySelector(".overlay").addEventListener("click", this.close);
    }

    disconnectedCallback() {
        this.querySelector("button").removeEventListener("click", this.close);
        this.querySelector(".overlay").removeEventListener("click", this.close);
    }

    get open() {
        return this.hasAttribute("open");
    }

    set open(isOpen) {
        const wrapper = this.querySelector(".wrapper");
        wrapper.classList.toggle("open", isOpen);
        wrapper.setAttribute("aria-hidden", !isOpen);

        if (isOpen) {
            this._wasFocused = document.activeElement;
            this.setAttribute("open", "");
            document.addEventListener("keydown", this._watchEscape);
            this.focus();
            this.querySelector("button").focus();
        } else {
            this._wasFocused &&
                this._wasFocused.focus &&
                this._wasFocused.focus();
            this.removeAttribute("open");
            document.removeEventListener("keydown", this._watchEscape);
            this.close();
        }
    }

    close() {
        if (!this.open) {
            return;
        }
        this.open = false;
        const closeEvent = new CustomEvent("dialog-closed", { bubbles: true });
        this.dispatchEvent(closeEvent);
    }

    _watchEscape(event) {
        if (event.key === "Escape") {
            this.close();
        }
    }
}
customElements.define("one-dialog", OneDialog);
