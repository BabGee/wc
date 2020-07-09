import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const DescriptionBoxStyles=css`
.main-container{
    background: #fff!important;
}
.data{
    flex-direction: column;
}
.descriptionBox{
    width: 80%;
    margin:0 auto;
    padding: 10px;
    background: #fff!important;
}
/* .descriptionBox button{
    background: transparent!important;
    border: none;
    cursor: pointer;
} */
.descriptionBox__tabs{
    width: 28%;
    top: 0;
    right: 0;
    order: 2;
    border-left: 1px solid var(--app-secondary-color)!important;
    position: relative;
}
.my-content{
    order:2;
    width:50%;
}
.content{
    width:100%;
}
.image-container{
    width: 100%;
    margin-right:0px;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
    display: flex;
    justify-content: center;
}
.image-container img{
    width: 50%;
}
.descriptionBox__item{
    padding: 10px 60px 10px 20px;
    min-height: 74px;
    border-bottom: 1px solid #ffffff!important;
    cursor: pointer;
    position: relative;
}
.descriptionBox__item:hover{
    background-color: var(--app-secondary-color)!important;
    border-left: 3px solid var(--app-default-color);
    color: #fff!important;
}
.bodTItle{
    font-weight: 500;
    line-height: 18px;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}
.content h1, .content h4{
    text-align: center;
}
.my-content{
    width: 100%!important;
}
.content h1, 
.content p{
    text-align: center;
    animation: fadein 2s;
    -moz-animation: fadein 2s; /* Firefox */
    -webkit-animation: fadein 2s; /* Safari and Chrome */
    -o-animation: fadein 2s; /* Opera */
}
.content p {
    text-align: start;

}
.descriptionBox__content{
    padding: 20px;
    width: 100%;
}
.descriptionBox__content .content-container{
    width: inherit;
    display: none;
}   
.tab_drawer_heading{
    display: none;
}
.li-active {
    background-color: var(--app-secondary-color)!important;
    color: #fff!important;
    border-left: 3px solid var(--app-default-color)!important;
}
.li-active:hover {
    background-color: var(--app-secondary-color)!important;
    color:#fff!important;
    border-left: 3px solid var(--app-default-color)!important;
}

@media screen and (max-width: 800px) {
    .descriptionBox__tabs {
        display: none;
    }
    .tab_drawer_heading {
        background: var(--app-secondary-color)!important;
        color: #fff;
        margin: 0;
        padding: 10px 40px;
        display: block;
        cursor: pointer;
        user-select: none;
    }
    .descriptionBox__content .content-container{
        width: inherit;
        display: block;
    } 
    .data{
        display: none;
        flex-direction: column;
        padding: 20px 4px;
    }
    .content h1{
        font-size: 16px;
    }
    .image-container img{
        width: 100%;
    }
    .content p {
        text-align: center;
    
    }
    
}

@keyframes fadein {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity:0;
    }
    to {
        opacity: 1;
    }
}

`;var descriptionBoxCss={DescriptionBoxStyles:DescriptionBoxStyles};class DescriptionBox extends SectionPElementDsc{static get styles(){return[DescriptionBoxStyles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
    <div class="main-container">
        <div class="descriptionBox is-flex">
       
                
                <div class="descriptionBox__tabs">
                <ul>
                ${this.rows.map((slide,index)=>html`
                    <li id="li-${index}" class="descriptionBox__item" data-item="" @click="${()=>this.openTab(index,"content-"+index)}">
                        <div class="boxTitle">
                            <h4 class="has-text-weight-bold">${this._getTitle(slide[1])}</h4>
                        </div>
                        <div class="boxSubtitle">
                            <p>${this._getSubTitle(slide[1])}</p>
                        </div>
                    </li>
                    `)}
                </ul>

            </div>

            <div class="descriptionBox__content">
            ${this.rows.map((slide,index)=>html`
                <div class="content-container" id="content-${index}">
                    <div class="tab_drawer_heading">
                        <div class="boxTitle">
                            <h4 class="has-text-weight-bold is-centered">${this._getTitle(slide[1])}</h4>
                        </div>
                        <div class="boxSubtitle">
                            <p>${this._getSubTitle(slide[1])}</p>
                        </div>
                    </div>
                    <div class="columns is-flex data">
                        <div class="my-content column is-three-quarters">
                            <div class="content">
                                <h1>${this._getTitle(slide[1])}</h1>
                                <p>${slide[2]}</p>
                            </div>
                        </div>
                        <div class="image-container column">
                            <img class="fade-in one" src="/media/${slide[3]}" alt=" ${this._getTitle(slide[1])} image}"/>
                        </div>
                    </div>
                </div>
                `)}

            </div>
                       
        </div>
    </div>

        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.loader.then(()=>{let contents=this.shadowRoot.querySelectorAll(".content-container"),lists=this.shadowRoot.querySelectorAll(".descriptionBox__item");contents[0].style.display="block";lists[0].classList.add("active")})}_getSubTitle(text){let[title,subTitle]=text.split("|");return subTitle}_getTitle(text){let[title,subTitle]=text.split("|");return title}static get is(){return"description-box"}openTab(index,tabName){let contents=this.shadowRoot.querySelectorAll(".content-container"),lists=this.shadowRoot.querySelectorAll(".descriptionBox__item");contents.forEach(content=>{content.style.display="none"});lists.forEach(list=>{list.classList.remove("li-active")});this.shadowRoot.querySelector("#"+tabName).style.display="block";this.shadowRoot.querySelector("#li-"+index).classList.add("li-active")}}customElements.define(DescriptionBox.is,DescriptionBox);export{descriptionBoxCss as $descriptionBoxCss,DescriptionBoxStyles};