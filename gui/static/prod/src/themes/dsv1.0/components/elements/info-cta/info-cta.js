import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const InfoCtaStyles=css`
.main-container{
    width: 100%;
    min-height:500px;
    position:relative;
    align-items: center;
}
.cont{
    align-items: center;
}

.columnsw{
        width: 100%!important;
        position: absolute!important;
        top: 12%!important;
        left: 6%!important; 
}
p{
    font-size: 24px;
    font-weight: 400;
    margin-top: 12px;
}
.title{
    font-size: 77px!important;
    color: var(--app-default-color)!important;
    font-weight: 600!important;
    line-height: 1.125!important;
    font-family: Segoe UI!important;
}

.info-btn{
    margin-right: 20px;
    position: relative;
    top: 35px;
    right: 33%;
    left: 0;
}
.btn{
    color: #fff!important;
    border-radius: 60px;
    background: var(--app-secondary-color)!important;
    border-color: transparent!important;
    cursor:pointer!important;

    width: 19em !important;
    height: 4em !important;
    font-style: normal!important;
    font-weight: 700 !important;
    font-size: 24px;
}
btn:hover{
    background: var(--app-default-color)!important;
    color: #fff!important;
}

a:hover {
    background: var(--app-default-color)!important;
    color: var(--app-secondary-color)!important;
    border: 4px solid  var(--app-secondary-color)!important;
    
}
.screen-shot{
    position: relative;
    top: -10px;
    right: 8%;

    opacity:0;
    transform:translateX(40px);
    transition:0.7s all ease-in-out;
}
img {
    width:200px;
    height:400px;
}
/* Animations */
.content-container{
    opacity:0;
    transform:translateY(20px);
    transition:0.7s all ease-in-out;

}
.animate1-appear{
    opacity: 1;
    transform:translateY(0px);


}
.animate2-appear{
    opacity: 1;
    transform:translateX(0px);

}
@media screen and (max-width: 769px) {
    .main-container{
        width: 100%;
        min-height: 900px;
    }
    .mipay-info-cta{
        width: 100%;
        min-height: 900px;
    }
    .content-container{
        width: 100%;
    }
    .info-btn{
        right: 0;
        left: 20%;
        top: 30px!important;
    }

    .screen-shot{
        top: 77px!important;
        width: 100%;
        display: flex;
        justify-content: center;
        left: 0;
    }
    .columnsw{
        top: 10% !important;
    }
    p{
        margin-top:0px;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .cont h1{
        font-size: 35px!important;
        text-align: center;
        width: 100%;
    }
    .btn{
        width: 10em !important;
        height: 3em !important;
    }
    .info-btn{
        right: 0;
        width: 100%;
        left: 0;
        justify-content: center;
        display: flex;
    }
    
    
}

`;var infoCtaCss={InfoCtaStyles:InfoCtaStyles};class InfoCta extends SectionPElementDsc{static get styles(){return[InfoCtaStyles,css`
            :host {
              display: block;
            }
          `]}static get is(){return"info-cta"}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{window.addEventListener("scroll",()=>{self.scrollAppear()})})}scrollAppear(){const self=this;let contentContainer=self.shadowRoot.getElementById("animate1"),screenShotContainer=self.shadowRoot.getElementById("animate2"),contentStartPosition=contentContainer.getBoundingClientRect().top,screenPosition=window.innerHeight/1.6;if(contentStartPosition<screenPosition){contentContainer.classList.add("animate1-appear");screenShotContainer.classList.add("animate2-appear")}}render(){return html`

        <style>
        .mipay-info-cta{
            width: 100%;
            min-height:500px;
            align-items: center;
            display: flex;
            max-width: inherit;
        
            position: absolute;
            opacity:1.50;
            /* The image used */
            background-image: url("${this.e.details.bg_image}");
            background-position:center;
            background-size:cover;
            background-repeat:no-repeat;
            background-attachment:fixed;
        
            box-shadow: 0px 3px 6px #00000029;
            opacity: 0.68;
            filter: blur(7px);
            
        
        }
        </style>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

        <div class="main-container is-flex" data-aos="fade-right">
            <div class="mipay-info-cta"></div>
            <div class="container">
                <div class="columns">
                    <div class="column is-three-quarters cont is-flex">
                        <div id="animate1" class="content-container">
                            <div class="heading">
                                <h1 class="title">${this.e.name}</h1>
                            </div>
                            <p>${this.e.defaultValue}</p>

                            <div class="info-btn">
                                <a href="${this.e.details.path}" target="_blank" class="button btn">${this.e.details.button_title}</a>
                            </div>
                        </div>
                    </div>
                    <div class="column is-one-third">
                        <div id="animate2" class="screen-shot">
                            <img src="${this.e.details.screen_shot}" />
                        </div> 
                    </div>
                </div>
            </div>
        </div>

       

        `}}customElements.define(InfoCta.is,InfoCta);export{infoCtaCss as $infoCtaCss,InfoCtaStyles};