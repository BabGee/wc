import{utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const SummaryTabBase=class extends utilsMixin(BaseElement){static get is(){return"summary-tab"}static get properties(){return{service:String,color:String,icon:String,params:Object,currentData:Object}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=SummaryTabBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=loader.pl.paramsCopy();self.maxlength=pElement.max}};var summaryTab={SummaryTabBase:SummaryTabBase};const SummaryTabStyles=css`
.columns {
    display: flex!important;
    flex-direction: column!important;
}
.group {
    display: flex!important;
    flex-direction: row!important;
    
}
h1{
    font-size: 18px!important;
    font-weight: 500!important;
    padding-left: 29px!important;
}
.column {
    display:flex;
}
.details {
    display: flex;
    justify-content:space-between;
    align-items:center;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 1.75rem;
    padding-right: 2rem;
    border:1px solid grey;
    border-radius:4px;
}
.block {
    margin-bottom:0;
}
.summary-p{
    color:white;
}
.summary-info{
    color:white;
    font-weight: normal!important;
    margin-bottom: 15px;
}

@media screen and (max-width:720px) {
    .group {
        display: flex!important;
        flex-direction: column!important;
        
    }
}




`;var summaryTabCss={SummaryTabStyles:SummaryTabStyles};class SummaryTab extends SummaryTabBase{static get styles(){return[SummaryTabStyles,css`
            :host {
              display: block;
            }
          `]}render(){return html`
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        

    <section>
    
        <div class="columns has-text-weight-bold is-size-6">

            ${this.getGroupTitles(JSON.parse(this.e.defaultValue)).map(groupTitle=>html`
                <div class="group-title">
                  <h1>${groupTitle}</h1>
                </div>
            
              <div class="group">
             ${this._getSubGroupTitles(groupTitle).map(subTitle=>html`
             
                <div class="column">
                  <div class="details" style="background-color:hsl(${this.hueGenerator()},50%,50%)">
                    <div>
                      <p class="summary-p ">${subTitle}</p>
                      <p class="summary-info">${this._getSubtitleValue(groupTitle,subTitle)}</p>
                    </div>
                    <iron-icon class="iron-icon" style="width:50px !important;height: 50px !important; color: white!important;" icon="${this.e.icon}"></iron-icon>
                  </div> 
                </div>
            
             
             `)}
            </div>
            
            
            `)}
           
    
    
    
        
    </section>
        
        `}static get is(){return"summary-tab"}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}getGroupTitles(mainObject){return Object.keys(mainObject)}_getSubGroupTitles(objectKeyTitle){let obj=JSON.parse(this.e.defaultValue),subtilesObject=obj[objectKeyTitle],subTitles=Object.keys(subtilesObject);return subTitles}_getSubtitleValue(objectKeyTitle,subTitleKey){let obj=JSON.parse(this.e.defaultValue),subtilesObject=obj[objectKeyTitle],subTitlesValue=subtilesObject[subTitleKey];return subTitlesValue}hueGenerator(){let hue=360*Math.random();if(38<=hue&&103>=hue||169<=hue&&189>=hue){this.hueGenerator()}return hue}}customElements.define(SummaryTab.is,SummaryTab);export{summaryTab as $summaryTab,summaryTabCss as $summaryTabCss,SummaryTabBase,SummaryTabStyles};