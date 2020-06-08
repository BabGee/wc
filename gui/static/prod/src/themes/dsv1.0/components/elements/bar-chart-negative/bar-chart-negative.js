import{utilsMixin,dataSourceMixin,SerializableElement,scaleLinear,extent,scaleBand,max,axisBottom,axisLeft,select,json,css,html}from"../../../../../components/adaptive-ui.js";const BarChartNegativeBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){static get is(){return"bar-chart-negative"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,title:String,maxlength:Number,pattern:String,q:{type:String,value:""},barchartnegativeValue:Object,rows:{value:[]},params:{type:Object,value:""},columnSize:{type:Array}}}initBarChartNegative(){document.addEventListener("DOMContentLoaded",()=>{});json("data.json",function(data){console.log(data[0]);render("#chart",{width:500,height:300,margin:{top:20,right:20,bottom:30,left:40}},data[0])})}getValue(){const select$$1=this.shadowRoot.querySelector("#input");this.multilineValue=select$$1.value;return this.lineValue}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()){return!1}return!0}_dataJoined(data){const self=this;return data.filter(function(item,index){if(0===index||self.cols.length&&"href"===self.cols[index].type){return!1}return!0}).join(" ")}dscDataName(){return this.dataName}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{self.rows;self.initBarChartNegative(dsc)})}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_computeItems(rows,q){const filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}}return filtered_items}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.title=BarChartNegative.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=self.pl.paramsCopy();self.dataName=pElement.defaultValue;self.barchartnegativeValue=+pElement.kind;self.maxlength=pElement.max;self.loader=this.loadData()}};var barChartNegative={BarChartNegativeBase:BarChartNegativeBase};const BarChartNegativeStyles=css`
option{
    font-size: 18px;
    }
`;var barChartNegativeCss={BarChartNegativeStyles:BarChartNegativeStyles};class BarChartNegative$1 extends BarChartNegativeBase{constructor(){super()}static get styles(){return[BarChartNegativeStyles,css`
      :host{
        display: block;
      }
      `]}renderDefault(){if(this.rows===void 0||this.q===void 0){return html``}return html`
    <div class="column">
    <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
    <label class="form-label">${this.e.name}</label>
    <div class="select is-fullwidth">
    <select id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
    ${this._computeItems(this.rows,this.q).map(data=>html`<option value="${data[0]}">${this._dataJoined(data)}</option>`)}
    </select>
    </div>
    </div>
    </div>`}}customElements.define(BarChartNegative$1.is,BarChartNegative$1);export{barChartNegative as $barChartNegative,barChartNegativeCss as $barChartNegativeCss,BarChartNegativeBase,BarChartNegativeStyles};