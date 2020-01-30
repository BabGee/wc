import{html,SectionPElementDsc}from"../../../../components/adaptive-ui.js";class DescriptionBox extends SectionPElementDsc{render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
        <style>
        .descriptionBox{
            width: 100%;
            padding: 10px;
            background: #fff;
        }
        /* .descriptionBox button{
            background: transparent;
            border: none;
            cursor: pointer;
        } */
        .descriptionBox__tabs{
            width: 28%;
            top: 0;
            right: 0;
            border-right: 1px solid #e0e7ef;
            position: relative;
        }
        .descriptionBox__item{
            padding: 10px 60px 10px 20px;
            min-height: 74px;
            border-bottom: 1px solid #ffffff;
            cursor: pointer;
            position: relative;
        }
        .descriptionBox__item:hover{
            background-color: #e0e7ef;
            border-right: 3px solid var(--app-accent-color);
        }
        .bodTItle{
            font-weight: 500;
            line-height: 18px;
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
            background-color: var(--app-accent-color);
            color: #fff;
            border-right: 3px solid var(--app-primary-color);
        }
        .li-active:hover {
            background-color: var(--app-primary-color);
            color: #fff;
            border-right: 3px solid var(--app-accent-color);
        }

        @media screen and (max-width: 800px) {
            .descriptionBox__tabs {
                display: none;
            }
            .tab_drawer_heading {
                background-color: #ccc;
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
            }
            
        }
        </style>
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
                            <h4 class="has-text-weight-bold">${this._getTitle(slide[1])}</h4>
                        </div>
                        <div class="boxSubtitle">
                            <p>${this._getSubTitle(slide[1])}</p>
                        </div>
                    </div>
                    <div class="columns data">
                        <div class="column is-three-quarters">
                            <div class="content">
                                <h1>${this._getTitle(slide[1])}</h1>
                                <p>${slide[2]}</p>
                            </div>
                        </div>
                        <div class="column">
                            <img src="/media/${slide[3]}" alt="image-${slide[3]}"/>
                        </div>
                    </div>
                </div>
                `)}

            </div>
                       
        </div>

        `}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.loader.then(dsc=>{let contents=this.shadowRoot.querySelectorAll(".content-container"),lists=this.shadowRoot.querySelectorAll(".descriptionBox__item");contents[0].style.display="block";//to show the first content block by default
lists[0].classList.add("active")})}_getSubTitle(text){let[title,subTitle]=text.split("|");return subTitle}_getTitle(text){let[title,subTitle]=text.split("|");return title}static get is(){return"description-box"}openTab(index,tabName){let contents=this.shadowRoot.querySelectorAll(".content-container"),lists=this.shadowRoot.querySelectorAll(".descriptionBox__item");contents.forEach(content=>{content.style.display="none"});lists.forEach(list=>{list.classList.remove("li-active")});this.shadowRoot.querySelector("#"+tabName).style.display="block";this.shadowRoot.querySelector("#li-"+index).classList.add("li-active")}}customElements.define(DescriptionBox.is,DescriptionBox);