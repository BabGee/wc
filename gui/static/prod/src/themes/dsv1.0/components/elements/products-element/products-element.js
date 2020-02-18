import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const ProductsElementStyles=css`

.ii__product{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    position: relative;
    color: #4a4a4a;
  }
  .ii__product:hover{
    box-shadow: 1px 1px 11px 0 hsla(0, 0%, 79.2%, 0.5);
  }
  .ii__product-logo{
    width: 95px;
    height: 95px;
    background: var(--app-accent-color);
    border-radius: 50%;
    margin: 0 auto;
    
  }
  .ii__product-logo img{
    width: 75%;
    position: relative;
    top: 30%;
    left: 16%;
  }
  .read_more{
    color:var(--app-accent-color);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .show_less{
    color:var(--app-accent-color);
    font-weight:bolder;
    cursor:pointer;
    
  }
  .is-custom-color{
    background-color: var(--app-accent-color);
    color: #fff;
  }
  .ii__content{
    margin-top:10px;
  }

`;var productsElementCss={ProductsElementStyles:ProductsElementStyles};class ProductsElement extends SectionPElementDsc{static get styles(){return[ProductsElementStyles,css`
        :host {
          display: block;
        }
      `]}constructor(){super()}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <style>
     
    </style>
    <div id="id" class="columns is-multiline">
    ${this.rows.map((slide,index)=>html` 
     
    <div class="column">
       
          <div  class="ii__product">
            <div class="ii__product-logo">
            <img src="/media/${slide[3]}" alt="products logo">
            </div>
            <div class="ii__content">
              <h3 class="is-size-6 ii__title has-text-weight-bold has-text-centered">${this._getTitle(slide[1])}</h3>
              <p id="paragraph-${index}" data-name="${this._getLink(slide[1])}" class="ii__paragraph has-text-centered is-size-7">${slide[2]}</p>
            </div>
          </div>
        
      </div>

    
    `)}
    </div>
        `}static get is(){return"products-element"}static get properties(){return{}}_getLink(text){let[title,link]=text.split("|");return link}_getTitle(text){let[title,link]=text.split("|");return title}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.loader.then(()=>{const allP=this.shadowRoot.querySelectorAll(".ii__paragraph");allP.forEach(p=>{let productLink=p.getAttribute("data-name");if(80<p.innerText.length){this.addReadMore(p,productLink)}else{this.addGetStarted(p,productLink)}})})}addReadMore(paragraph,productLink){let excessText=paragraph.innerText.substr(80,paragraph.innerText.length),splitText=paragraph.innerText.slice(0,80);paragraph.innerText=splitText;let lessTextnode=document.createTextNode("...Show less"),lessP=document.createElement("p"),lessNode=document.createElement("span"),textnode=document.createTextNode("...Read more"),morenode=document.createElement("span");morenode.className="read_more";morenode.appendChild(textnode);paragraph.appendChild(morenode);lessNode.className="show_less";lessNode.appendChild(lessTextnode);lessP.appendChild(lessNode);morenode.addEventListener("click",()=>{paragraph.innerText=splitText+excessText;paragraph.appendChild(lessP);this.addGetStarted(paragraph,productLink)});lessNode.addEventListener("click",()=>{paragraph.innerText=splitText;paragraph.appendChild(morenode)})}addGetStarted(paragraph,productLink){let newLine=document.createElement("p"),span=document.createElement("span"),a=document.createElement("a"),textnode=document.createTextNode("Get Started");span.className="tag is-custom-color is-normal";span.style.backgroundColor="var(--app-accent-color)";span.style.marginTop="8px";a.href=productLink;a.target="_blank";a.style.color="#fff";a.appendChild(textnode);span.appendChild(a);newLine.appendChild(span);paragraph.appendChild(newLine)}}customElements.define(ProductsElement.is,ProductsElement);var productsElement={ProductsElement:ProductsElement};export{productsElementCss as $productsElementCss,productsElement as $productsElement,ProductsElementStyles,ProductsElement};