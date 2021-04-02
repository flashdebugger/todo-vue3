export class XUsername extends HTMLElement {
  connectedCallback() {
    this.innerText = 'flashdebugger';
  }
}

customElements.define('x-username', XUsername);
