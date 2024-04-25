import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class playList extends DDD {

  static get tag() {
    return 'play-list';
  }

  constructor() {
    super();
    this.playListItems = [];
  
  }

  static get styles() {
    return css`

    `;
  }


  render() {
    return html`
      <dialog class="playList">
        <button class="exitButton">x</button>
        <div>
          <button class="leftButton"> < </button>
          <img class="blah" src="https://help.figma.com/hc/article_attachments/20650187664151" alt="Italian Trulli" hieght="300px" width="300px">
          <button class="rightButton"> > </button>
        </div>
      </dialog>
      `;
  }

  static get properties() {
    return {
      playListItems: {type: Array},

    };
  }
}

globalThis.customElements.define(playList.tag, playList);