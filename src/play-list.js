import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class playList extends DDD {

  static get tag() {
    return 'play-list';
  }

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();

  }

  static get styles() {
    return css`

    `;
  }

  render() {
    return html`
    
      `;
  }


}

globalThis.customElements.define(playList.tag, playList);