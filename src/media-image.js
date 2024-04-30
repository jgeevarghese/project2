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
    this.caption = "";
    this.addEventListener("click", this.openDialog);
  }

  static get styles() {
    return css`
    
    .image-block {
      background-color: var(--ddd-theme-default-limestoneMaxLight);
      height: auto;
      width: 87%;
      border: solid var(--ddd-theme-default-limestoneLight);
      border-radius: var(--ddd-radius-md);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding: 5%;
      
    } 
    img {
    border: solid 2px var(--ddd-theme-default-potentialMidnight) ;
    border-radius: var(--ddd-radius-md);
    cursor: pointer;
    transition: all ease-in .3s;
    transition: all .3s ease-in;
    height: auto;
    width: 80%;
    padding: var(--ddd-spacing-2);
    background-color: var(--ddd-theme-default-alertUrgent);
    
    }
    img:hover {
      transform: translate(8px,-8px);
      box-shadow: -8px 8px #000
    }
    .hide {
      display: none;
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
    <div class="image-block">
      <img class="image" src="${this.imageSrc}" alt="${this.imageAltText}">
      <p class="caption ${this.opened ? "hide" : ""}">${this.caption}</p>
    </div>
    `;
  }

  static get properties() {
    return {
      opened: {type: Boolean},
      imageSrc: {type: String},
      imageAltText: {type: String},
      caption: {type: String},
    };
  }
}

globalThis.customElements.define(mediaImage.tag, mediaImage);