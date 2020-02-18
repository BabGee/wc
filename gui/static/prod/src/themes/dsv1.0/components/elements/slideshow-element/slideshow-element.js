import{BaseElement,dataSourceMixin,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const SlideshowElementBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super();this.slideIndex=0;this.filtered_items=[];this.rows=[]}static get is(){return"slideshow-element"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,q:{type:String,value:""},title:String,maxlength:Number,dropdownValue:Object,pattern:String,required:Boolean,filtered_items:{type:Object,value:[]},rows:{type:Object,value:[]},params:{type:Object,value:""},slideIndex:{type:Number,value:0}}}dscDataName(){return this.dataName}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{self.cols=dsc.cols;self.rows=dsc.rows;self.q="";self.groups=dsc.groups;self.currentGroups=self.groups;self.data=dsc.data;self.currentData=self.data;if(0<Object.keys(self.rows).length){self.dropdownValue=self.rows[0][0]}})}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.title=SlideshowElementBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=self.pl.paramsCopy();self.dataName=pElement.defaultValue;self.maxlength=pElement.max;self.loader=this.loadData()}};var slideshowElement={SlideshowElementBase:SlideshowElementBase};const SlideShowStyles=css`
body, html{
    width: 100%;
    height: 100%;	
    margin: 0;
    overflow-X: hidden;/* optional */
}

#i1, #i2, #i3, #i4, #i5{ display: none;}

.slider-wrapper{
    margin: 0 auto;
    position: relative;
    height: 0;
    padding-bottom: 38%;
  user-select: none;
    background-color: #1c1c1c;
    border-radius:10px ; 
}

.slider-wrapper .slide_img{
    position: absolute;
    width: 100%;;
    height: 100%;
    margin-top: -21px;
}
.slider-wrapper .slide_img img{
    width: inherit;
    height: inherit;
}

 .prev, .next{
    width: 12%;
    height: inherit;
    position: absolute;
    top:0; 
    color:rgba(244, 244, 244,.9);
    z-index: 99;
    transition: .45s;
    cursor: pointer;
    text-align: center;
}

.next{right:0;}
.prev{left:0;}

label span{
    position: absolute;
    font-size: 50pt;
    top: 50%;
     transform: translateY(-50%);
}

.prev:hover, .next:hover{
    transition: .3s;
    background-color: rgba(88, 88, 89,.8);
    color: #ffffff; 
}

.slider-wrapper #nav_slide{
width: 100%;
bottom: 12%;
height: 11px;
position: absolute;
text-align: center;
z-index: 10;
cursor: default;
}

#nav_slide .dots{
top: -5px;
width: 18px;
height: 18px;
margin: 0 4px;
position: relative;
border-radius: 100%;
display: inline-block;
background-color: rgba(0, 0, 0, 0.6);
transition: .4s;
}

#nav_slide .dots:hover {
cursor: pointer;
background-color: rgba(255, 255, 255, 0.9);
transition: .25s
}

.slide_img{z-index: -1;}

#i0:checked ~ #slide_0  ,
#i1:checked ~ #slide_1  ,
#i2:checked ~ #slide_2 ,
#i3:checked ~ #slide_3  ,
#i4:checked ~ #slide_4 
{z-index: 9; animation: scroll 1s ease-in-out;}

#i0:checked  ~  #nav_slide #dot0,
#i1:checked  ~  #nav_slide #dot1,
#i2:checked  ~  #nav_slide #dot2,
#i3:checked  ~  #nav_slide #dot3,
#i4:checked  ~  #nav_slide #dot4
{ background-color: rgba(255,255,255,.9);}

@keyframes scroll{
0%{	opacity:.4;}
100%{opacity:1;}
}		

/* .yt{
margin: 0 auto;
margin-top: 50px;
position: relative;
width: 150px;
height:50px;
border: outset #2c2c2c 4px;
border-radius: 10px;
text-align: center;
font-size: 30pt;
transition: .5s;
}

.yt a{
text-decoration: none;
color: #4c4c4c;
transition: .5s;
}

.yt:hover{
background: #4c4c4c;
transition: .3s;
}

.yt:hover a{
color: #fff;
transition: .3s;
}
*/
@media screen and (max-width: 685px){
.slider-wrapper{
    border: none;
    width: 100%;
    height: 0;
    padding-bottom: 55%; 
}	

label span { font-size: 50pt; }

.prev, .next{
    width: 15%;
}	
#nav_slide .dots{
    width: 12px;
    height: 12px;
}
}
@media screen  and(min-width: 970px){
.me{ display: none;}
}
.checkbox{
margin: 0px;
visibility: hidden;
}
`;var slideshowElementCss={SlideShowStyles:SlideShowStyles};class SlideshowElement extends SlideshowElementBase{static get styles(){return[SlideShowStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`

<div class="slider-wrapper">

	${this.rows.map((slide,index)=>html` 
	<input class ="checkbox" type="radio" id="i${index}" name="images" ?checked=${0===index} />

	`)}  

	    ${this.rows.map((slide,index)=>html`   
	<div class="slide_img" id="slide_${index}">			
			
			<img src="/media/${slide[3]}">
			
				<label class="prev" for="i${index-1}"><span>&#x2039;</span></label>
				<label class="next" for="i${index+1}"><span>&#x203a;</span></label>	
		
	</div>
    `)}  

	<div id="nav_slide">
	      ${this.rows.map((slide,index)=>html` 
		<label for="i${index}" class="dots" id="dot${index}"></label>
		 `)}  
	</div>
		
</div>`}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}onLoadData(){this.showSlidesAuto()}showSlidesAuto(){var i=0,self=this;function Move(){if(i===self.rows.length-1){i=0;self.shadowRoot.querySelector("#i"+i).checked=!0;return}i=i%self.rows.length+1;self.shadowRoot.querySelector("#i"+i).checked=!0}setInterval(Move,3e3)}}customElements.define(SlideshowElement.is,SlideshowElement);export{slideshowElement as $slideshowElement,slideshowElementCss as $slideshowElementCss,SlideshowElementBase,SlideShowStyles};