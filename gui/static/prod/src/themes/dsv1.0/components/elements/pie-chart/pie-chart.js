import{utilsMixin,dataSourceMixin,SerializableElement,scale,svg$1 as svg,layout,select,json,css,html}from"../../../../../components/adaptive-ui.js";const PieChartBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){static get is(){return"pie-chart"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,title:String,maxlength:Number,pattern:String,q:{type:String,value:""},pieChartValue:Object,rows:{value:[]},params:{type:Object,value:""},columnSize:{type:Array}}}initPieChart(){var width=960,height=500,color=scale.ordinal().range(["#96c497","#a58799","#9588a4","#6b486b","#559f95","#d0473e","#ff1d00"]),arc=svg.arc().outerRadius(500/2-10).innerRadius(0),pie=layout.pie().sort(null).value(function(d){return d.ratio}),svg$$1=select("body").append("svg").attr("width",width).attr("height",height).append("g").attr("transform","translate("+width/2+","+height/2+")");json("data.json",function(error,data){node=data.data[0].rows[0].floorratio;var g=svg$$1.selectAll(".arc").data(pie(node)).enter().append("g").attr("class","arc");g.append("path").attr("d",arc).style("fill",function(d){return color(d.data.floor)});g.append("text").attr("transform",function(d){return"translate("+arc.centroid(d)+")"}).attr("dy",".35em").style("text-anchor","middle").text(function(d){return d.data.floor})})}getValue(){const select$$1=this.shadowRoot.querySelector("#input");this.pieChartValue=select$$1.value;return this.pieChartValue}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()){return!1}return!0}_dataJoined(data){const self=this;return data.filter(function(item,index){if(0===index||self.cols.length&&"href"===self.cols[index].type){return!1}return!0}).join(" ")}dscDataName(){return this.dataName}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{rows.dsc;self.initPieChart(dsc)})}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_computeItems(rows,q){const filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}}return filtered_items}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.title=PieChartBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=self.pl.paramsCopy();self.dataName=pElement.defaultValue;self.pieChartValue=+pElement.kind;self.maxlength=pElement.max;self.loader=this.loadData()}};var pieChart={PieChartBase:PieChartBase};const PieChartStyles=css`
body {
    font: 10px sans-serif;
  }
  
  .arc path {
    stroke: #fff;}
   option{
   font-size: 18px;
   }
`;var pieChartCss={PieChartStyles:PieChartStyles};class PieChart extends PieChartBase{static get styles(){return[PieChartStyles,css`
      :host{
        display: block;
      }
      `]}constructor(){super()}renderDefault(){if(this.rows===void 0||this.q===void 0){return html``}return html`
 
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js"></script>
   <div class="column">
 <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
 <label class="form-label">${this.e.name}</label>
   <div class="select is-fullwidth">
  <select id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
    ${this._computeItems(this.rows,this.q).map(data=>html`<option value="${data[0]}">${this._dataJoined(data)}</option>`)}
  </select>
</div>
  </div>
  </div>`}}customElements.define(PieChart.is,PieChart);export{pieChart as $pieChart,pieChartCss as $pieChartCss,PieChartBase,PieChartStyles};