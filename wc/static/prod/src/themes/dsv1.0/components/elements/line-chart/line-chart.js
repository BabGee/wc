import{dataSourceMixin,utilsMixin,BaseElement,select,scaleTime,scaleLinear,extent,max,axisLeft,axisBottom,timeDay,timeFormat,line,css,html}from"../../../../../components/adaptive-ui.js";const LineChartBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super();this.chartTheme={margin:{top:35,right:145,bottom:35,left:45},barsColors:"#23d160",tickColor:"#aeaeae",pathColor:"#aeaeae",gridColor:"#aeaeae",barTitleColor:"#23d160",lineColor:"steelblue"}}static get is(){return"line-chart"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,title:String,maxlength:Number,pattern:String,q:{type:String,value:""},dropdownValue:Object,rows:{value:[]},params:{type:Object,value:""},columnSize:{type:Array},chartTheme:{type:Object}}}plotData(data){[].forEach.call(data,function(inst,i){[].forEach.call(Object.keys(inst),function(y){if(!isNaN(data[i][y]))data[i][y]=+data[i][y]})});return data}initLineChart(dsc){const cont=this.qs("#chart"),data=dsc.data,rows=dsc.rows;console.table(rows);const width=960,height=500,adj=30,svg=select(cont).append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","-"+adj+" -"+adj+" "+(width+3*adj)+" "+(height+3*adj)).style("padding",5).style("margin",5).classed("svg-content",!0),xScale=scaleTime().range([0,width]),yScale=scaleLinear().rangeRound([height,0]);xScale.domain(extent(rows,function(d){return new Date(d[0])}));yScale.domain([0,max(rows,function(d){return+d[4]})]).range([height,0]);const yaxis=axisLeft().scale(yScale),xaxis=axisBottom().ticks(timeDay.every(1)).tickFormat(timeFormat("%b %d")).scale(xScale),line$$1=line().x(d=>xScale(new Date(d[0]))).y(d=>yScale(d[4]));svg.append("g").attr("class","axis").attr("transform","translate(0,"+height+")").call(xaxis);svg.append("g").attr("class","axis").call(yaxis).append("text").attr("transform","rotate(-90)").attr("dy",".75em").attr("y",6).style("text-anchor","end");svg.append("path").datum(rows).attr("fill","none").attr("stroke","#23d160").attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("stroke-width",1.5).attr("d",line$$1)}getValue(){const select$$1=this.shadowRoot.querySelector("#input");this.multilineValue=select$$1.value;return this.lineValue}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()){return!1}return!0}_dataJoined(data){const self=this;return data.filter(function(item,index){if(0===index||self.cols.length&&"href"===self.cols[index].type){return!1}return!0}).join(" ")}dscDataName(){return this.dataName}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{self.initLineChart(dsc)})}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_computeItems(rows,q){const filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}}return filtered_items}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.icon=pElement.icon;self.service=pElement.service;self.params=self.pl.paramsCopy();self.dataName=pElement.defaultValue;self.dropdownValue=+pElement.kind;self.maxlength=pElement.max;self.loader=this.loadData()}};var lineChart={LineChartBase:LineChartBase};const LineChartStyles=css`
  body {
    font: 10px sans-serif;
  }
  .chart-container{
    background-color: #fff;
    width: 100%;
    height: auto;
    border-radius: 6px;
    padding: 24px;
}
`;var lineChartCss={LineChartStyles:LineChartStyles};class LineChart extends LineChartBase{static get styles(){return[LineChartStyles,css`
      :host{
        display: block;
      }
      `]}constructor(){super()}renderDefault(){if(this.rows===void 0||this.q===void 0){return html``}return html`
<script src="http://d3js.org/d3.v3.min.js"></script>
   <!-- <div class="column">
 <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
 <label class="form-label">${this.e.name}</label>
   <div class="select is-fullwidth">
  <select id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
    ${this._computeItems(this.rows,this.q).map(data=>html`<option value="${data[0]}">${this._dataJoined(data)}</option>`)}
  </select>
</div>
  </div>
  </div> -->

  <div class="column">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>
    <div class="chart-container" id="container">
        <!-- <div class="chart-header">
            <div class="columns">
            <div class="column">
                <div class="heading">
                <h1 class="title">chart title</h1>
                </div>
            </div>
            <div class="column"></div>
            </div>
        </div> -->


        <div class="tooltip" id="tooltip"></div>
        <div class="chart-body">
            <div id="chart"></div>
            <!-- <div class="bin-input">
            <p>
                <label># bins</label>
                <input type="number" min="1" max="100" step="30" value="20" id="nBin">
            </p>
            </div> -->
        </div>
    </div>
  </div>
  
  `}}customElements.define(LineChart.is,LineChart);export{lineChart as $lineChart,lineChartCss as $lineChartCss,LineChartBase,LineChartStyles};