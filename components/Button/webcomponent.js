import {html, render} from "lit-html";
import classNames from "classnames";

const css = require("!raw-loader!./index.css");

class PhotonButton extends HTMLElement {
  static get observedAttributes() {
    return ["type", "size"];
  }

  render = ({ type, size }) => html`
    <style type="text/css">
      ${css}
    </style>
    <button class="${classNames([
      "button",
      type && `button--${type}`,
      size && `button--${size}`,
    ])}"><slot></slot></button>
  `;

  get props() {
    return PhotonButton.observedAttributes.reduce(
      (acc, name) => ({
        ...acc,
        [name]: this.getAttribute(name)
      }),
      {}
    );
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    render(this.render(this.props), this.shadow);
  }

  connectedCallback() {
    console.log("CONNECTED");
  }

  disconnectedCallback() {
    console.log("DISCONNECTED");
  }

  adoptedCallback() {
    console.log("ADOPTED");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    render(this.render(this.props), this.shadow);
  }

  // <photon-button tooltip="foo">Label</photon-button>

}

customElements.define("photon-button", PhotonButton);
