import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const HeroElement4Styles=css`

.hero-container{
    max-width: 100%;
    height: 100vh;
    min-height: 0;
    margin-bottom: 9px;
    padding-right: 24px;
    padding-bottom: 25px;
    padding-left: 24px;
    padding-top: 0px;
    background-color: #fff!important;
    margin-top:10px;
    display:flex!important;
    justify-content:center!important;
    align-items:center!important;
}

.circle{
    position: absolute;
    background-color:  var(--app-secondary-color);
    width:500px;
    height:500px;
    border-radius:50%;
    top: -45px;
    left: -175px;

}

.circle2{
    position: absolute;
    background-color:  var(--app-secondary-color);
    width:500px;
    height:500px;
    border-radius:50%;
    right: -443px;
    top: 151px;

}
img{
    position: absolute;
    width: 600px;
    left: 1px;
}
.container{
    display:flex!important;
    justify-content:center!important;
    align-items:center!important;

}
.hero-column{
    margin-right:144px!important;
}
.hero-container::before, .row::before{
    display: table;
    content: " ";
    grid-column-start: 1;
    grid-row-start: 1;
    grid-column-end: 2;
    grid-row-end: 2;
}
.row{
    margin-left: -10px;
    margin-right: -10px;
    margin-top: 42px;
}
.c-title-xl {
    margin-top: 8px;
    margin-bottom: 18px;
    color: var(--app-default-color)!important;;
    font-size: 65px;
    font-weight: bold;
    line-height: 58px;
    letter-spacing: .22px;
}
.c-paragraph {
    font-size: 15px;
    line-height: 20px;
    font-weight: 600;
    letter-spacing: .15px;
}
.str-btn {
    border-radius: 5px!important;
    width: 170px!important;
    height: 3em!important;
    background-color: var(--app-secondary-color)!important;
    color: #fff!important;
    margin-top: 20px;
    border: none!important;
    font-weight: bold;
}

.str-btn:hover {
    background-color: var(--app-default-color)!important;
    color: var(--app-secondary-color)!important;
    border 3px!important soild!important  var(--app-secondary-color)!important;


}

/*animations*/

.animate1{
    opacity:0;
    transform:translateX(-40px);
    transition:0.7s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateX(0px);

}
.animate2{
    opacity:0;
    transform:translateX(-40px);
    transition:1s all ease-in-out;
}
.animate2-appear{
    opacity: 1;
    transform:translateX(0px);


}




@media screen and (max-width: 1216px) {
    .circle{
        width: 400px;
        height: 400px

    }
    .circle2{
        width: 400px;
        height: 400px;
        right: -370px;
 
    }
 
    img{

        width: 500px;
        
    }
   
}
@media screen and (max-width: 980px) {
    .circle{
        width: 400px;
        height: 400px

    }
    .circle2{
        width: 400px;
        height: 400px;
        right: -390px;
 
    }
 
    img{

        width: 400px;
        
    }
   

}
@media screen and (max-width: 850px) {

    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        

    }
    .circle2{
 
    }
 
    img{
        width: 350px;
    }

}
@media screen and (max-width: 770px) {
    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        top: -30px;
        left: -145px;
        height: 400px;
        width: 400px;

    }
    .circle2{
 
    }
 
    img{
        position:relative;
        width: 350px;
        
    }
}
@media screen and (max-width: 768px) {
    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        top: -93px;
        left: -191px;
        height: 350px;
        width: 350px;

    }
    .circle2{
 
    }
 
    img{
        position:relative;
        width: 350px;
        
    }
}

@media screen and (max-width: 684px) {
    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        top: -38px;
        left: -162px;
        height: 300px;
        width: 300px;

    }
    .circle2{
 
    }
 
    img{
        position:relative;
        width: 350px;
        
    }
}
@media screen and (max-width: 572px) {
    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        top: -55px;
        left: -162px;
        height: 300px;
        width: 300px;

    }
    .circle2{
 
    }
 
    img{
        position:relative;
        width: 350px;
        
    }
}
@media screen and (max-width: 514px) {
    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        top: -30px;
        left: -145px;
        height: 250px;
        width: 250px;

    }
    .circle2{
 
    }
 
    img{
        position:relative;
        width: 400px;
        
    }
}

@media screen and (max-width: 411px) {
    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        top: -169px;
        left: -145px;
        height: 250px;
        width: 250px;

    }
    .circle2{
 
    }
 
    img{
        position: absolute;
        top: -117px;
        width: 500px;
        
    }

    .c-title-xl {
        font-size: 60px;
        line-height: 66px;
    }
}
@media screen and (max-width: 414px) {
    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        top: -177px;
        left: -162px;
        height: 250px;
        width: 250px;

    }
    .circle2{
 
    }
 
    img{
        position: absolute;
        top: -116px;
        left: -14px;
        
    }

    .c-title-xl {
        font-size: 50px;
    }
}

@media screen and (max-width: 360px) {
    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        width: 250px;
        left: -150px;
        height: 250px;
        top: -178px;

    }
    .circle2{
 
    }
 
    img{
        position: absolute;
        top: -84px;
        width: 500px;
        
    }

    .c-title-xl {
        font-size: 51px!important;
    }
}

@media screen and (max-width: 320px) {
    .container{
        display:flex!important;
        flex-direction:column;
    }

    .circle{
        top: -111px;
        left: -145px;
        height: 200px;
        width: 200px;

    }
    .circle2{
 
    }
 
    img{
        position: absolute;
        top: -67px;
        width: 500px;
        left: -28px;
        
    }

    .c-title-xl {
        font-size: 50px !important;
    }
}


`;var heroElement4Css={HeroElement4Styles:HeroElement4Styles};class HeroElement4 extends SectionPElementDsc{static get styles(){return[HeroElement4Styles,css`
            :host {
              display: block;
            }
          `]}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{window.addEventListener("scroll",()=>{self.scrollAppear()})})}scrollAppear(){const self=this;let contentContainer=self.shadowRoot.querySelector(".hero-container"),image=self.shadowRoot.getElementById("animateImage"),content=self.shadowRoot.getElementById("animate2"),contentStartPosition=contentContainer.getBoundingClientRect().top,screenPosition=window.innerHeight/2;if(contentStartPosition<screenPosition){image.classList.add("animate1-appear");content.classList.add("animate2-appear")}}render(){return html`
     
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="hero-container">
            <div class="container"style="top: -120px;">
                <div class="columns row">
                <div class="circle2"></div>
                    <div  class="column hero-column">
                        <div class="hero-iso-image">
                        <div class="circle"></div>
                            <div id="animateImage" class="animate1">
                                <img  src="${this.e.details.hero_image_src}" />
                            </div>
                        </div>
                    </div>
                    <div id="animate2" class="column animate2">
                        <h1 class="c-title-xl">${this.e.name}</h1>
                        <p class="c-paragraph">${this.e.defaultValue}</p>
                        <a href="${this.e.details.path}" class="button str-btn">${this.e.details.button_title}</a>
                    </div>
                </div>
            </div
        </div>
        `}static get is(){return`hero-element-4`}}customElements.define(HeroElement4.is,HeroElement4);export{heroElement4Css as $heroElement$4Css,HeroElement4Styles};