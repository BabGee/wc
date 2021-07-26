import{css,html,BaseElement}from"../../../../../components/adaptive-ui.js";const RedirectElementStyles=css`
.text-container{
    padding:60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.info-block{
    text-align:center;
}
.space-bottom {
    margin-bottom:16px;
}
.login {
    color:var(--app-accent-color)!important;
    text-decoration:underline!important;
    transition: 1.0s;
}
.register {
    
    color:var(--app-secondary-color)!important;
    text-decoration:underline!important;
    transition: 1.0s;

}

.login:hover{
    text-decoration:none!important;
    color:var(--app-secondary-color)!important;


}
.register:hover{
    text-decoration:none!important;
    color:var(--app-accent-color)!important;


}

.card{
    width: 30%;
    padding: 40px;
    background: #fff;
    border-radius: 10px;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);


    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}

.card:hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.image-block{
    width: 30%;
}

.or-block{
    width:22%;
}
hr{
    margin: 1.8rem 0!important;
}

hr.solid{
    border-top: 1px dashed #000!important;
}
.or-block p {
    text-align:center;
}

@media screen and (max-width: 1349px){

    .card{

        width: 50%;

    }
    
    
}

  @media screen and (max-width: 853px){
    .card{

        width: 70%;

    }
    
}

@media screen and (max-width: 640px){
    .card{

        width: 75%;

    }
    
}

@media screen and (max-width: 591px){
    .card{

        width: 100%;

    }
    
}

`;var redirectElementCss={RedirectElementStyles:RedirectElementStyles};class RedirectElement extends BaseElement{static get styles(){return[RedirectElementStyles,css` 
                :host{
                    disply: block;
                }
                `]}render(){return html`
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            <div class="text-container">
              <div class="card">

                     <div class="image-block">
                        <img src="${this.getImage()}" alt="gateway-logo" />
                     </div>
                    <div class="info-block space-bottom content is-medium">

                        <p >${this.e.name}</p>
                    
                    </div>
                    <div class="title-block space-bottom">
                        <h2 class="title is-1"><a class="login" href="${this.getLink(this.e.defaultValue)}">${this.getText(this.e.defaultValue)}</a></h2>
                    </div>
                    <div class="or-block content is-medium">
                        <hr class="solid">
                            <p>or</p>
                        <hr class="solid">
                    </div>

                    <div class="title-block2 space-bottom">
                        <h2 class="title is-1"><a class="register" href="${this.getLink(this.e.kind)}">${this.getText(this.e.kind)}</a></h2>
                    </div>
              </div>
               
            </div>
            `}static get is(){return"redirect-element"}getText(text){if(null!=text||text!=void 0){let[title,link]=text.split("|");return title}else{return""}}getLink(text){if(null!=text||text!=void 0){let[title,link]=text.split("|");return link}else{return""}}getImage(){let image=this.e.details.logo;if(image!=void 0){return image}else{image="https://interintel.co.ke/media/upc_institution_logo/Interintel_Logo_1.png";return image}}}customElements.define(RedirectElement.is,RedirectElement);export{redirectElementCss as $redirectElementCss,RedirectElementStyles};