import { LitElement, html, css } from 'lit';
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class playList extends DDD {

  static get tag() {
    return 'play-list';
  }

  constructor() {
    super();
    this.currentSlideIndex = 0;
    this.slideArray = [];
    this.visible = false;
  }

  static get styles() {
    return css`
      .playList{
        height: 100%;
        width: auto;

        display: flex;
        flex-direction: column;
        background-color: color-mix(in srgb, black 50%, #00000000); 


        z-index: 100000;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      .blah{
        height: 80%;
        width: 80%;

        padding-top: 32px;
      }

      .flex-row{
        flex-direction: row;
      }

      

    `;
  }


firstUpdated(){
  const mediaImage = document.querySelectorAll("media-image");
  const selectedImage = "";

  
  mediaImage.forEach(img => {
    this.slideArray.push(img.getAttribute("imageSrc"));
    this.requestUpdate();
  })
  console.log(this.slideArray);


  document.addEventListener("media-clicked", (e) =>{
    var clickedURL = e.target.attributes[0].nodeValue;
    var index = this.slideArray.indexOf(clickedURL);

    if(index != -1){
      this.currentSlideIndex = index;
    }
    
    this.visible = true;
  });
}

  previousSlide() {
    this.currentSlideIndex -= 1;

    if(this.currentSlideIndex == -1){
      this.currentSlideIndex = this.slideArray.length - 1;
    }

  }

  nextSlide() {
    this.currentSlideIndex += 1;

    if(this.currentSlideIndex == this.slideArray.length){
      this.currentSlideIndex = 0;
    }
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
  }

  closeWindow(){
    this.visible = false;
  }

  render() {
    if(!this.visible) return html``;

    return html`
    <div class="background">
      <dialog class="playList">
        <button class="exitButton" @click="${this.closeWindow}">x</button>
        <div class='flex-row'>
          <button @click="${this.previousSlide}"> Previous </button>
          <img class="blah" src="${this.slideArray[this.currentSlideIndex]}" alt="Italian Trulli">
          <button @click="${this.nextSlide}"> Next </button>
        </div>
      </dialog>
      </div>
      `;
  }

  static get properties() {
    return {
      currentSlideIndex: {type: Number},
      slideArray: {type: Array}, 
      visible: {type: Boolean, Reflect: true}, 
    };
  }
}

globalThis.customElements.define(playList.tag, playList);