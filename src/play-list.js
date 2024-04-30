import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class PlayList extends DDD {

  static get tag() {
    return 'play-list';
  }

  constructor() {
    super();
    this.currentSlideIndex = 0;
    this.slideArray = [];
    this.showSlideshow = false;
    this.slideshowImages = [];
  }

  static get styles() {
    return css`
     
    `;
  }

  firstUpdated() {
    const mediaImages = this.shadowRoot.querySelectorAll("media-image");
    mediaImages.forEach(img => {
      this.slideArray.push(img.getAttribute("imageSrc"));
    });
  }

  handleImageClick(imageSrc) {
    this.slideshowImages = [...this.slideArray];
    this.currentSlideIndex = this.slideshowImages.indexOf(imageSrc);
    this.showSlideshow = true;
  }

  closeSlideshow() {
    this.showSlideshow = false;
    this.slideshowImages = [];
  }

  previousSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slideshowImages.length) % this.slideshowImages.length;
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideshowImages.length;
  }

  render() {
    return html`
      <dialog class="playList" ?open="${this.showSlideshow}" @click="${this.closeSlideshow}">
        <button class="exitButton">x</button>
        <div>
          <button @click="${this.previousSlide}"> < </button>
          <img class="preview" src="${this.slideshowImages[this.currentSlideIndex]}" alt="Slide" height="300px" width="300px">
          <button @click="${this.nextSlide}"> > </button>
        </div>
      </dialog>
      <div>
        ${this.slideArray.map(imageSrc => html`
          <img class="previewImage" src="${imageSrc}" alt="Preview Image" @click="${() => this.handleImageClick(imageSrc)}">
        `)}
      </div>
      `;
  }

  static get properties() {
    return {
      currentSlideIndex: { type: Number },
      slideArray: { type: Array },
      showSlideshow: { type: Boolean },
      slideshowImages: { type: Array }
    };
  }
}

customElements.define(PlayList.tag, PlayList);
