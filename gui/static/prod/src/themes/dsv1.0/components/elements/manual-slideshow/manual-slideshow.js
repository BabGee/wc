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
    max-width: 100%;
    height: 574px;
    width: 100%;
    position: relative;
    margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
  height: inherit;
  width: 100%;
}

img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  background-color: var(--app-default-color);
}
.dots-container{
    text-align: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: var(--app-secondary-color);}

/* Caption text */
.text {
  display: none;
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  right: 27px;
  width: auto;
  max-width: 20%;
  right:18px;
  bottom:111px;
  text-align: left;
  max-height: 250px;
  border-radius: 12px;
  //filter: brightness(100%);
  background-color: var(--app-secondary-color);
  border-radius: 12px;

}

.text:after {
  content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	width: 0;
	height: 0;
	border: 28px solid transparent;
	border-top-color:  var(--app-secondary-color);
	border-bottom: 0;
	border-left: 0;
	margin-left: -14px;
	margin-bottom: -28px;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 14px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
  background-color: var(--app-secondary-color);
  border-radius: 4px;
  font-weight: 700;
}

/* The dots/bullets/indicators */
.dot {
  cursor:pointer;
  border-radius: 50%;
  width: 18px;
  height: 18px;
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
  animation-duration: 1.5s;
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
  from {opacity: .4; transform:translateX(600px);}
  to {opacity: 1; transform:translateX(0px);}
}

@keyframes fade {
  from {opacity: .4; transform:translateX(600px);}
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

`;var manualSlideshowCss={ManualSlideShowStyles:ManualSlideShowStyles};class ManualSlideshow extends ManualSlideshowBase{static get styles(){return[ManualSlideShowStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`

    <!-- Slideshow container -->
    <h1>${this.e.name}</h1>
    <h4>${this.e.details.sub_title}</h4>
   
        <div class="slideshow-container">

                <!-- Full-width images with number and caption text -->

                ${this.rows.map((slide,index)=>html` 

                    <div class="mySlides fade">
                      <div class="numbertext">${index+1}/${this.rows.length}</div>
                      <img src="/media/${slide[3]}" alt="${slide[1]}" style="width:100%">
                      <div id="pop-text-${index}" class="text pop-up">${this.checkNewLine(slide[2],index)}</div> 
                    </div>

	              `)}  


                <!-- Next and previous buttons -->
                <a class="prev" move="-1" @click="${this.moveSlide}">&#10094;</a>
                <a class="next" move="1" @click="${this.moveSlide}">&#10095;</a>

                <!-- The dots/circles -->
                <div class="dots-container">
                  ${this.rows.map((slide,index)=>html`
                    <span class="dot" @click="${this.currentSlide}" currentSlide="${index+1}"></span>

                  `)}
                </div>
          </div>
               

               
`}constructor(){super();this.slideIndex=1}static get properties(){return{slideIndex:Number}}static get is(){return"manual-slideshow"}checkNewLine(text,index){if(text.includes("<br/>")||text.includes("<b>")){this.loader.then(()=>{let pop=this.shadowRoot.querySelector("#pop-text-"+index);pop.innerHTML=text})}else{return text}}moveSlide(e){let moveValue=parseInt(e.target.getAttribute("move"));console.log("move value",moveValue);this.showSlides(this.slideIndex+=moveValue)}currentSlide(e){let currentSlideValue=parseInt(e.target.getAttribute("currentSlide"));this.showSlides(this.slideIndex=currentSlideValue)}showSlides(n){var i;let slides=this.shadowRoot.querySelectorAll(".mySlides"),captions=this.shadowRoot.querySelectorAll(".text"),dots=this.shadowRoot.querySelectorAll(".dot");if(n>slides.length){this.slideIndex=1}if(1>n){this.slideIndex=slides.length}for(i=0;i<slides.length;i++){slides[i].style.display="none"}for(i=0;i<slides.length;i++){captions[i].style.display="none"}for(i=0;i<dots.length;i++){dots[i].className=dots[i].className.replace(" active","")}slides[this.slideIndex-1].style.display="block";if(0==this.slideIndex-1){captions[this.slideIndex-1].style.display="none"}else{captions[this.slideIndex-1].style.display="block"}dots[this.slideIndex-1].className+=" active"}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{self.showSlides(self.slideIndex)})}}customElements.define(ManualSlideshow.is,ManualSlideshow);export{manualSlideshow as $manualSlideshow,manualSlideshowCss as $manualSlideshowCss,ManualSlideshowBase,ManualSlideShowStyles};