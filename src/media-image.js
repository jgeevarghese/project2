
import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";


export class mediaImage extends DDD {

  static get tag() {
    return 'media-image';
  }

  constructor() {
    super();
    this.opened = false;
    this.imageSrc = "";
    this.imageAltText = "";
    this.description = "";
    this.addEventListener("click", this.openDialog);
  }

  static get styles() {
    return css`
    img {
    border: solid 2px var(--ddd-theme-default-keystoneYellow) ;
    border-radius: 8px;
    cursor: pointer;
    transition: all ease-in .3s;
    display: inherit;
    margin: 32px 0;
    transition: all .3s ease-in;
    height: 200px;
    width: auto;
    }
    img:hover {
      transform: translate(8px,-8px);
      box-shadow: -8px 8px var(--ddd-theme-default-keystoneYellow)
    }



    `;
  }

  openDialog(e){
    const evt = new CustomEvent("media-clicked", {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: {
      opened: true,
      invokedBy: this.invokedBy,
      },
      });
    this.dispatchEvent(evt);
  }

  render() {
    return html`
    <div class="image">
      <img src="${this.imageSrc}" alt="${this.imageAltText}">
      <div class="desccription">${this.description}</div>
    </div>
    `;
  }

  static get properties() {
    return {
      opened: {type: Boolean},
      imageSrc: {type: String},
      imageAltText: {type: String},
      description: {type: String},
    };
  }
}

globalThis.customElements.define(mediaImage.tag, mediaImage);
