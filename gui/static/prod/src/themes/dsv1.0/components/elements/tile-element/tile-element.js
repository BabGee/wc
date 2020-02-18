import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const TileElementStyles=css`
/* Services Section */
.ii__section{
    padding-top: 80px;
    padding-bottom: 80px;
}
.ii__title-contaner{
    margin-bottom: 86px;
}
.ii__tile{
    margin-right: auto;
    margin-bottom: 28px;
    margin-left: auto;
    color: #a8a9b7;
    padding: 20px;
    background-color: #fff;
    border-radius: 6px;
    height: auto;
    box-shadow: 1px 1px 11px 0 hsla(0, 0%, 79.2%, 0.5);
}
.ii__tile:hover{
    box-shadow: 1px 1px 11px 0 hsla(0, 0%, 79.2%, 0.5);
}
.ii__title-small{
    margin-top: 0px;
    margin-bottom: 10px;
    color: #000;
    font-size: 22px;
    line-height: 30px;
    font-weight: 600;
    font-weight: 600;
    letter-spacing: 0.15px;
}
.ii__s-imge{
    width: 100%;   
    height: 110px;
    margin-bottom: 30px;
    position: relative;
}
.ii__s-imge img{
    /* width: 50%; */
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    left: 30%;
    max-width: 100%;
    max-height: 100%;
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
`;var tileElementCss={TileElementStyles:TileElementStyles};class TileElement extends SectionPElementDsc{constructor(){super()}static get styles(){return[TileElementStyles,css`
        :host {
          display: block;
        }
      `]}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    
    <div class="columns" id="service">
        ${this.rows.map(slide=>html` 
            <div class="column">
            <div class="ii__tile">
                <div class="ii__tile-head">
                <img src="/media/${slide[3]}"  alt="services image"/>
                </div>
                <div class="ii__tile-body">
                    <h3 class="ii_title ii__title-small is-size-6 has-text-weight-bold has-text-centered">
                    ${slide[1]}
                    </h3>
                    <p class="ii__paragraph" style="color: #7b7b7b; font-weight: normal; font-size: 14px;">${slide[2]}</p>
                </div>
                </div>
            </div>
        `)} 
    </div>
        `}static get is(){return"tile-element"}static get properties(){return{}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.loader.then(()=>{const allP=this.shadowRoot.querySelectorAll(".ii__paragraph");allP.forEach(p=>{let productLink=p.getAttribute("data-name");if(240<p.innerText.length){this.addReadMore(p,productLink)}else{this.addGetStarted(p,productLink)}})})}addReadMore(paragraph){let excessText=paragraph.innerText.substr(240,paragraph.innerText.length),splitText=paragraph.innerText.slice(0,240);paragraph.innerText=splitText;let lessTextnode=document.createTextNode("...Show less"),lessP=document.createElement("p"),lessNode=document.createElement("span"),textnode=document.createTextNode("...Read more"),morenode=document.createElement("span");morenode.className="read_more";morenode.appendChild(textnode);paragraph.appendChild(morenode);lessNode.className="show_less";lessNode.appendChild(lessTextnode);lessP.appendChild(lessNode);morenode.addEventListener("click",()=>{paragraph.innerText=splitText+excessText;paragraph.appendChild(lessP)});lessNode.addEventListener("click",()=>{paragraph.innerText=splitText;paragraph.appendChild(morenode)})}}customElements.define(TileElement.is,TileElement);var tileElement={TileElement:TileElement};export{tileElementCss as $tileElementCss,tileElement as $tileElement,TileElementStyles,TileElement};