import{dataSourceMixin,utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const SummaryBoxesBase=class extends utilsMixin(dataSourceMixin(BaseElement)){static get is(){return"summary-boxes"}static get properties(){return{service:String,color:String,icon:String,params:Object,currentData:Object}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(()=>{self.currentGroups=self.groups;self.currentData=self.data;self.loading=!1})}_computeData(index){return this.data[index]}_rowsOrColumns(cData){if(cData===void 0){return}return cData.length}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=SummaryBoxesBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=loader.pl.paramsCopy();self.maxlength=pElement.max;self.loader=this.loadData()}};var summaryBoxes={SummaryBoxesBase:SummaryBoxesBase};const SummaryBoxesStyles=css`
@media screen and (max-width: 775px){
    .column{
        width: 100%;
        max-width: 100%;
    }
}
.column{
    width: 100%;
}
.column:last-child{
  
    
}
.title {
    font-size: 1.4em;
    font-weight: 400;
    padding-bottom: 24px;
    padding-top: 8px;
    padding-left: 3px;
}

.summary-wrapper{
    width: 100%;
    background: #fff;
    border: 1px solid #ebebed;
    border-radius: 10px;
    padding: 30px;
}
.summary-details{
    width: 100%;
}
.summary-details h1{
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: #141821;
}
.summary-details p, .summary-details h1{
    margin: 0;
}
.summary-details p.currency{
    font-size: 12px;
    font-weight: bold;
}
.summary-details p.summary-type{
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.5;
    letter-spacing: normal;
    color: #858997;
}
.chart {
    background: white;
    padding: 0px 20px 20px 29px;       
    position: relative;
    left: -30px;
}

`;var summaryBoxesCss={SummaryBoxesStyles:SummaryBoxesStyles};class SummaryBoxes extends SummaryBoxesBase{static get styles(){return[SummaryBoxesStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="summary-content">
        
            ${this.loading?html`
            <loader-element></loader-element>
            `:html`
            ${!this._rowsOrColumns(this.rows)?html`

                    ${0==this.groups.length?html`

                    <empty-view 
                    message="${this.e.details.empty_message}"
                    gateway="${this.e.details.gateway}"
            
                    ></empty-view>
            
                    `:html`

                    ${this.groups.map((group,groupIndex)=>html`
                    <div class="row">
                       <div class="col-md-12 group-summary">
                           <h1 class="title">${group}</h1>
                       </div>
                   </div>

                   ${0==this.data.length?html`

                   <empty-view 
                   message="${this.e.details.empty_message}"
                   gateway="${this.e.details.gateway}"
           
                   ></empty-view>
           
                   `:html`

                   <div class="columns is-multiline container-group-${groupIndex}">
                   ${this._computeData(groupIndex).map(item=>html`
                       <div class="column is-one-quarter column-group-${groupIndex}">
                           <div class="summary-wrapper">
                               <div class="graph">
                                   <svg viewBox="0 0 230 100" class="chart">
                                       <polyline
                                           fill="none"
                                           stroke="#23d160"
                                           stroke-width="5"
                                           points="
                                           00,90
                                           60,70
                                           90,90
                                           140,10
                                           160,80
                                           180,60
                                           200,100
                                           "
                                       />
                                       
                                   </svg>
       
                               </div>
                               <div class="summary-details">
                                   <p class="currency is-text-7 has-text-justified has-text-uppercase">KES</p>
                                   <h1 class="title has-text-justified">${item.count}</h1>
                                   <p class="summary-type has-text-justified has-text-capitalized">${item.description}</p>
                                   <p class="summary-type has-text-justified has-text-capitalized">${item.kind}</p>
                                   <p class="summary-type has-text-justified has-text-capitalized">${item.type}</p>
                                   <p class="summary-type has-text-justified has-text-capitalized">${item.name}</p>
                               </div>
                           </div>
                       </div>
                   
                   `)}
                   </div>
                   
                   
                   `}   


                  
                    
                    `)}
                    
                    
                    `}
            
          
            `:html`
            
              <div class="row">
                <div class="col-md-12">
                    <h1 style="text-align: center;">${this.title}</h1>
                </div>
              </div>
              
              ${this.rows.map(item=>html`
                <div class="column">
                    <div class="summary-wrapper">
                        <div class="graph">
                        <!-- <img src="../../../../../images/web/Screenshot.png" alt="profile image"> -->
                        </div>
                        <div class="summary-details">
                            <p class="currency is-text-7 has-text-justified has-text-uppercase">KES</p>
                            <h1 class="title has-text-justified">${item.count}</h1>
                            <p class="summary-type has-text-justified has-text-capitalized">${item.name}</p>
                        </div>
                    </div>
                </div>
            `)}
              
            `}
            `}
            
        </div>`}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this;this.loader.then(()=>{const columns=this.shadowRoot.querySelectorAll(".column-group-0");console.log("number of columns are:",columns.length)})}_computeData(index){return this.data[index]}_rowsOrColumns(cData){if(cData===void 0){return}return cData.length}onLoadData(dsc){super.onLoadData(dsc)}}customElements.define(SummaryBoxes.is,SummaryBoxes);export{summaryBoxes as $summaryBoxes,summaryBoxesCss as $summaryBoxesCss,SummaryBoxesBase,SummaryBoxesStyles};