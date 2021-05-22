import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const TileElement2Styles=css`
/* Services Section */
.columns {
    padding:60px;
}
.column{
    position: relative;
}
.ii__tile-head{
    display: flex;
    width:32%;
    align-items: center;
    margin:5px;
    // justify-content: center;
}
.ii__tile-body {
    width:68%;
}
.ii__tile-head img{
    object-fit: contain;
}
// .tile-cont:last-child{
//     width: 100%!important;
// }
img {
    object-fit: cover;  
}
.ii__section{
    padding-top: 80px;
    padding-bottom: 80px;
}
.ii__title-contaner{
    margin-bottom: 86px;
}
.ii__tile{
    display: flex;
    margin-right: auto;
    margin-left: auto;
    color: #a8a9b7;
    min-height:240px;
    padding: 20px 10px 20px 10px;
    background-color: #fff;
    height: auto;
}
.ii__tile:hover{
    width: 100%;
    transform: scale(1);
    box-shadow: 0px 5px 11px 0 rgba(0, 0, 0, .5);
}
.ii__title-small{
    margin-top: 10px;
    margin-bottom: 10px;
    color: #000;
    font-size: 22px;
    line-height: 30px;
    font-weight: 600;
    font-weight: 600;
    letter-spacing: 0.15px;
}
.row-reverse {
    flex-direction:row-reverse;
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
    width: 100%;
    height: 100%;
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
  .image-column {
      display:flex;
    align-items:center;
  } 
  #center-image {
    object-fit:contain;
  }
  /*animations*/

.animate1{
    opacity:0;
    transform:translateY(40px);
    transition:1s all ease-in-out;
}
.animate1-appear{
    opacity: 1;
    transform:translateY(0px);

}
@media screen and (max-width: 415px){ 

    .columns {
        padding:40px;
    }
}
`;var tileElement2Css={TileElement2Styles:TileElement2Styles};class TileElement2 extends SectionPElementDsc{constructor(){super()}static get styles(){return[TileElement2Styles,css`
        :host {
          display: block;
        }
      `]}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    
    <div class="columns animate1" id="service">
      <div class="column">
        ${this.rows.map((slide,index)=>{if(0===index%2){return html`
              <div class="ii__tile row-reverse">
                <div class="ii__tile-head">
                  <img src="/media/${slide[3]}"  alt="${slide[1]} image"/> 
                </div>
                <div class="ii__tile-body">
                  <h3 class="ii_title ii__title-small is-size-6 has-text-weight-bold">
                    ${slide[1]}
                  </h3>
                  <p class="ii__paragraph" style="color: #7b7b7b; font-weight: normal; font-size: 14px;">${slide[2]}</p>
                </div>
              </div>
            `}})}
      </div>
      <div class="column image-column">
        <img id="center-image" src="${this.e.details.center_image}"/>
      </div>
      <div class="column">
        ${this.rows.map((slide,index)=>{if(0!==index%2){return html`
              <div class="ii__tile">
                <div class="ii__tile-head">
                  <img src="/media/${slide[3]}"  alt="${slide[1]} image"/> 
                </div>
                <div class="ii__tile-body">
                    <h3 class="ii_title ii__title-small is-size-6 has-text-weight-bold">
                    ${slide[1]}
                    </h3>
                    <p class="ii__paragraph" style="color: #7b7b7b; font-weight: normal; font-size: 14px;">${slide[2]}</p>
                </div>
              </div>
            `}})}
      </div>
    </div>
        `}static get is(){return"tile-element-2"}static get properties(){return{}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{const allP=this.shadowRoot.querySelectorAll(".ii__paragraph");allP.forEach(p=>{let productLink=p.getAttribute("data-name");if(240<p.innerText.length){self.addReadMore(p,productLink)}});window.addEventListener("scroll",()=>{self.scrollAppear()})})}scrollAppear(){const self=this;let content=self.shadowRoot.getElementById("service"),contentStartPosition=content.getBoundingClientRect().top,screenPosition=window.innerHeight/1.4;if(contentStartPosition<screenPosition){content.classList.add("animate1-appear")}}addReadMore(paragraph){let excessText=paragraph.innerText.substr(240,paragraph.innerText.length),splitText=paragraph.innerText.slice(0,240);paragraph.innerText=splitText;let lessTextnode=document.createTextNode("...Show less"),lessP=document.createElement("p"),lessNode=document.createElement("span"),textnode=document.createTextNode("...Read more"),morenode=document.createElement("span");morenode.className="read_more";morenode.appendChild(textnode);paragraph.appendChild(morenode);lessNode.className="show_less";lessNode.appendChild(lessTextnode);lessP.appendChild(lessNode);morenode.addEventListener("click",()=>{paragraph.innerText=splitText+excessText;paragraph.appendChild(lessP)});lessNode.addEventListener("click",()=>{paragraph.innerText=splitText;paragraph.appendChild(morenode)})}}customElements.define(TileElement2.is,TileElement2);var tileElement2={TileElement2:TileElement2};export{tileElement2Css as $tileElement$2Css,tileElement2 as $tileElement$2,TileElement2Styles,TileElement2};