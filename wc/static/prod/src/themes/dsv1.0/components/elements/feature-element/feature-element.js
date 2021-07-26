import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const FeatureElementStyles=css`


.ii__features{
    margin-bottom:50px;
  }
  .feature-button{
    width:50%;
    margin-top:20px;
    background-color: var(--app-primary-color);
    color:#fff;
    transition:width ease-in .3s
  }

  .feature-button:hover{
    width:100%;
    background-color: var(--app-primary-color);
    color:#fff;
   
  }
  .feature-button:focus{
    width:50%;
    background-color: var(--app-primary-color);
    color:#fff;
    border-color: var(--app-primary-color);
   
  }
  .btn{
    display:flex;
    width:100%;
    justify-content:flex-start;
  }
  .feature-title{
    font-size:20px
  }
`;var featureElementCss={FeatureElementStyles:FeatureElementStyles};class FeatureElement extends SectionPElementDsc{static get styles(){return[FeatureElementStyles,css`
        :host {
          display: block;
        }
      `]}constructor(){super()}render(){return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

    <div class="ii__features">
    ${this.rows.map(slide=>html`
    <div class="columns">
        <div class="column">
            <img src="/media/${slide[3]}"  width="250px" height="50px" alt="feature image">
        </div>
        <div class="column">
            <div class="feature-container">
                <h1 class="feature-title has-text-weight-bold">${this._getTitle(slide[1])}</h1>
                <p class=""style="color: #7b7b7b; font-weight: normal; font-size: 14px;">${slide[2]}</p>
                <div class="btn">
                
                  <button class="button feature-button" style=" background-color: var(--app-primary-color); color: #fff" data-name=${this._getLink(slide[1])} @click="${this.openLink}">Get Started</button>

                </div>
                    
            </div>
        </div>
    </div>
    `)}
        
    </div>
        `}static get is(){return"feature-element"}static get properties(){return{}}openLink(event){let link=event.target.getAttribute("data-name");window.open(link,"_blank")}_getTitle(text){let[title,link]=text.split("|");return title}_getLink(text){let[title,link]=text.split("|");return link}}customElements.define(FeatureElement.is,FeatureElement);var featureElement={FeatureElement:FeatureElement};export{featureElementCss as $featureElementCss,featureElement as $featureElement,FeatureElementStyles,FeatureElement};