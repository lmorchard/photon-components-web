import {html} from "lit-html";
import {BaseElement} from "../../lib/webcomponents";
import classNames from "classnames";

const css = require("!css-loader!./index.css").toString();

class PhotonButton extends BaseElement {
  static get observedAttributes() {
    return ["onClick", "type", "size"];
  }

  template({ type, size }) {
    const className = classNames([
      "button",
      type && `button--${type}`,
      size && `button--${size}`,
    ]);
    return html`
      <style>
        ${css}
      </style>
      <button @click=${this.props.onClick} class="${className}">
        <slot></slot>
      </button>
    `;
  }
}

customElements.define("photon-button", PhotonButton);
