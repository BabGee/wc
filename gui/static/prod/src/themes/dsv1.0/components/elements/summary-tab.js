import{dataSourceMixin,utilsMixin,BaseElement,html}from"../../../../components/adaptive-ui.js";const SummaryTabBase=class extends utilsMixin(dataSourceMixin(BaseElement)){static get is(){return"summary-tab"}static get properties(){return{service:String,color:String,icon:String,params:Object,currentData:Object}}dscDataName(){return this.e.defaultValue}dataResponseType(){return Symbol.for("DATA")}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{// self.cols = dsc.cols;
// self.rows = dsc.rows;
// self.groups = dsc.groups;
self.currentGroups=self.groups;// self.data = dsc.data;
self.currentData=self.data;self.loading=!1})}_computeData(index){return this.data[index]}_rowsOrColumns(cData){if(cData===void 0){return}return cData.length}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=SummaryTabBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=loader.pl.paramsCopy();self.maxlength=pElement.max;self.loader=this.loadData()}};var summaryTab={SummaryTabBase:SummaryTabBase};class SummaryTab extends SummaryTabBase{render(){return html`
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
        <style>
        .column {
            display: block;
            flex-basis: 0;
            flex-grow: 1;
            flex-shrink: 1;
            padding: 1.75rem;
            padding-right: 2rem;
        }
        .summary-p{
            background-color: var(--app-default-color);
            color: #fff;
            padding: 0.5rem;
            border-radius: 0.2rem;
        }
        .summary-info{
            font-weight: normal!important;
            margin-bottom: 15px;
        }
        </style>

    <section>
    ${!this._rowsOrColumns(this.rows)?html`
        <div class="columns has-text-weight-bold is-size-6">

            ${this.groups.map((group,groupIndex)=>html`

             ${this._computeData(groupIndex).map(item=>html`
             
                <div class="column">
                    <p class="summary-info">${item.count}</p>
                    <p class="summary-info">${item.description}</p>
                    <p class="summary-info">${item.kind}</p>
                    <p class="summary-info">${item.type}</p>
                    <p class="summary-p ">${item.name}</p>
                </div>
            
             
             `)}
            
                   
            
            `)}
    
    
    
         </div>
    `:html`
    
    `}
        
    </section>
        
        `}static get is(){return"summary-tab"}_computeData(index){return this.data[index]}_rowsOrColumns(cData){if(cData===void 0){return}return cData.length}onLoadData(dsc){super.onLoadData(dsc)}}customElements.define(SummaryTab.is,SummaryTab);export{summaryTab as $summaryTab,SummaryTabBase};