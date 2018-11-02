import {html, render} from "lit-html";
import classNames from "classnames";

const css = require("!raw-loader!./index.css");

class PhotonButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.render();
  }

  static get observedAttributes() {
    return ["type", "size"];
  }

  template = ({ type, size }) => html`
    <style>
      ${css}
    </style>
    <button class="${classNames([
      "button",
      type && `button--${type}`,
      size && `button--${size}`,
    ])}"><slot></slot></button>
  `;

  render() {
    render(this.template(this.props), this.shadow);
  }

  get props() {
    return PhotonButton.observedAttributes.reduce(
      (acc, name) => ({
        ...acc,
        [name]: this.getAttribute(name)
      }),
      {}
    );
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
    this.render();
  }

  // <photon-button tooltip="foo">Label</photon-button>

}

customElements.define("photon-button", PhotonButton);
