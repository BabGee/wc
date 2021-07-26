import{BaseElement,dataSourceMixin,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const ManualSlideshowBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super();this.slideIndex=1}static get is(){return"manual-slideshow"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,q:{type:String,value:""},title:String,maxlength:Number,required:Boolean,rows:{type:Object,value:[]},params:{type:Object,value:""},slideIndex:Number}}dscDataName(){return this.dataName}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{self.cols=dsc.cols;self.rows=dsc.rows;self.q="";self.groups=dsc.groups;self.currentGroups=self.groups;self.data=dsc.data;self.currentData=self.data;if(0<Object.keys(self.rows).length){self.dropdownValue=self.rows[0][0]}})}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.title=ManualSlideshowBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=self.pl.paramsCopy();self.dataName=pElement.defaultValue;self.maxlength=pElement.max;self.loader=this.loadData()}};var manualSlideshow={ManualSlideshowBase:ManualSlideshowBase};const ManualSlideShowStyles=css`

h1{
    margin-block-start: 4px;
    margin-block-end: 4px;
}
h4{
  margin-block-start: 4px;
  margin-block-end: 12px;
}

  /* Slideshow container */
  .slideshow-container {
    display: flex;
    flex-direction: column;
    height: 820px;
    align-items: center;
    position: relative;
    margin: auto;
    padding:12px;
  }

  .slides {
    height:inherit;
    wwidth:100%;
  }
  .slide {
    display:flex;
    flex-direction:column;
    position:relative;
    height:100%;
    justify-content:space-evenly;
  }
  .title {
    margin:5px;
  }
  .image {
    width:100%;
    object-fit:contain;
    max-height:500px;
  }
  .content {
    display:flex;
    align-items:flex-start;
  }
  .page-number {
    position:absolute;
    top:0;
    right:0;
  }
  .bottom-bar {
    display:flex;
    justify-content:center;
    position:relative;
  }
  .navigator {
    display: flex;
    position: absolute;
    right: 0px;
    bottom: 0px;
    margin:12px;
  }

  .captions {
    display:flex;
    height:fit-content;
    max-height:120px;
    overflow:auto;
    align-items:center;
    flex-wrap:wrap;
    justify-content:space-evenly;
    margin:5px;
  }
  .caption {
    display:flex;
    flex-direction:column;
    max-width:300px;
    margin:5px;
  }
  .caption-title {
    color:blue;
    margin:0;
  }
  .caption-desc{
    margin:0;
  }

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  border:1px solid black;
  border-radius:50%;
  margin-right:7px;
}
.dots-container{
    text-align: center;
    width: fit-content;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: var(--app-secondary-color);}

/* Caption text */
.text {
  display: none;
}

/* Number text (1/3 etc) */
.numbertext {
  color: black;
  font-size: 14px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
  right:0;
  margin:16px;
  border-radius: 4px;
  font-weight: 700;
}

/* The dots/bullets/indicators */
.dot {
  cursor:pointer;
  border-radius: 3px;
  width: 18px;
  height: 7px;
  margin: 0 2px;
  display: inline-block;
  transition: background-color 1.2s ease;
  background-color: #bbb;



}

.active, .dot:hover {
  background-color: var(--app-secondary-color);
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.0s;
  transition:1.5s all ease-in-out;
}

.pop-up {
  -webkit-animation-name: pop-up;
  -webkit-animation-duration: 1.5s;
  animation-name: pop-up;
  animation-duration: 2.5s;
  transition:2.5s all ease-in-out;

}

@-webkit-keyframes fade {
  from {opacity: .4; transform:translateX(50px);}
  to {opacity: 1; transform:translateX(0px);}
}

@keyframes fade {
  from {opacity: .4; transform:translateX(50px);}
  to {opacity: 1; transform:translateX(0px);}
}

@-webkit-keyframes pop-up {
  from {opacity: .4; transform: translateX(500px); filter: brightness(25%);}
  top {opacity: 1; transform: translateY(0px); filter: brightness(100%);}

}
@keyframes pop-up {
  from {opacity: .4; top: 490px; transform: translateX(500px); filter: brightness(25%);}
  top {opacity: 1; transform: translateY(0px); filter: brightness(100%);}
}

@media screen and (max-width: 684px) {
  img{
    
    object-fit: contain;
  }
  .dots-container{
    bottom:95px;

  }

}


@media screen and (max-width: 360px) {
  .slideshow-container {
    height:540px;
  }
  .numbertext {
    margin:0;
  }
  
  .dot{
    width:10px;
    height:10px;
  }
  .navigator {
    position:static;
    margin:5px 0 0 0;
  }

}

@media screen and (max-width: 414px) {
  .slideshow-container {
    height:540px;
  }
  .numbertext {
    margin:0;
  }

  .dot{
    width:10px;
    height:10px;
  }
  .navigator {
    position:static;
    margin:5px 0 0 0;
  }

}
@media screen and (max-width: 540px) {
  .dot{
      width:10px;
      height:10px;
    }
  }
`;var manualSlideshowCss={ManualSlideShowStyles:ManualSlideShowStyles};class ManualSlideshow extends ManualSlideshowBase{static get styles(){return[ManualSlideShowStyles,css`
          :host {
            display: block;
          }
        `]}renderDefault(){return html`
        <!-- Slideshow container -->
        <div class="slideshow-container">
          <h1 style="align-self:flex-start;">${this.e.name}</h1>
          <h4 style="align-self:flex-start;">${this.e.details.sub_title}</h4>
          
          <!-- Full-width images with number and caption text -->
          <div class="slides">
            ${this.rows.map((slide,index)=>html` 
              <div class="slide fade">
                <div class="numbertext">${index+1}/${this.rows.length}</div>
                <h3 class="title">${slide[1]}</h3>
                <img class="image" src="/media/${slide[3]}" alt="${slide[1]}"/> 
                <div class="captions text">
                  ${this.getCaptions(slide[2]).map(caption=>html`
                      <div class="caption">
                        <h3 class="caption-title">${caption.title}</h3>
                        <h3 class="caption-desc">${caption.desc}</h3>
                      </div>
                    `)}
                </div>
              </div>
            `)}
          </div>

          <!-- The dots/circles -->
          <div class="dots-container">
            ${this.rows.map((slide,index)=>html`
              <span class="dot" @click="${this.currentSlide}" currentSlide="${index+1}"></span>
            `)}
          </div>

          <div class="navigator">
            <div class="prev">
              <iron-icon class="iron-icon " style="width:28px !important;height: 28px !important;" icon="chevron-left" move="-1"; @click=${this.moveSlide}></iron-icon>
            </div>
            <div class="next">
              <iron-icon class="iron-icon" style="width:28px !important;height: 28px !important;" icon="chevron-right" move="1"; @click=${this.moveSlide}></iron-icon>
            </div>
          </div>
      </div>       
    `}constructor(){super();this.slideIndex=1}static get properties(){return{slideIndex:Number}}static get is(){return"manual-slideshow"}getCaptions(content){let captions=[];const breakTextSeparator=text=>text.split("<br/>"),textExtractor=text=>{const title=text.match(/<b>(.*?)<\/b>/)[1];let desc=text.match(/:(.*)/)[1];if(" "===desc[0]){desc=desc.substr(1)}return{title:title,desc:desc}};if(content.includes("<br/>")||content.includes("<b>")){captions=breakTextSeparator(content).map(item=>textExtractor(item))}else{captions=[{desc:content}]}return captions}checkNewLine(text,index){if(text.includes("<br/>")||text.includes("<b>")){this.loader.then(()=>{let pop=this.shadowRoot.querySelector("#pop-text-"+index);pop.innerHTML=text})}else{return text}}moveSlide(e){let moveValue=parseInt(e.target.getAttribute("move"));console.log("move value",moveValue);this.showSlides(this.slideIndex+=moveValue)}currentSlide(e){let currentSlideValue=parseInt(e.target.getAttribute("currentSlide"));this.showSlides(this.slideIndex=currentSlideValue)}showSlides(n){var i;let slides=this.shadowRoot.querySelectorAll(".slide"),captions=this.shadowRoot.querySelectorAll(".text"),dots=this.shadowRoot.querySelectorAll(".dot");if(n>slides.length){this.slideIndex=1}if(1>n){this.slideIndex=slides.length}for(i=0;i<slides.length;i++){slides[i].style.display="none"}for(i=0;i<slides.length;i++){captions[i].style.display="none"}for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","")}slides[this.slideIndex-1].style.display="flex";if(0==this.slideIndex-1){captions[this.slideIndex-1].style.display="none"}else{captions[this.slideIndex-1].style.display="flex"}dots[this.slideIndex-1].className+=" active"}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{self.showSlides(self.slideIndex)})}}customElements.define(ManualSlideshow.is,ManualSlideshow);export{manualSlideshow as $manualSlideshow,manualSlideshowCss as $manualSlideshowCss,ManualSlideshowBase,ManualSlideShowStyles};