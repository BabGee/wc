import{dataSourceMixin,utilsMixin,SerializableElement,scaleBand,scaleLinear,select,axisBottom,axisLeft,max,event,line,css,html}from"../../../../../components/adaptive-ui.js";const LineChartBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){constructor(){super();this.chartTheme={margin:{top:35,right:145,bottom:35,left:45},barsColors:"#23d160",tickColor:"#aeaeae",pathColor:"#aeaeae",gridColor:"#aeaeae",barTitleColor:"#23d160",lineColor:"steelblue"}}static get is(){return"line-chart"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,title:String,maxlength:Number,pattern:String,q:{type:String,value:""},dropdownValue:Object,rows:{value:[]},params:{type:Object,value:""},columnSize:{type:Array},chartTheme:{type:Object}}}plotData(data){[].forEach.call(data,function(inst,i){[].forEach.call(Object.keys(inst),function(y){if(!isNaN(data[i][y]))data[i][y]=+data[i][y]})});return data}lineGraph(selector,props,data){const{margin,width,height,barsColors,tickColor,pathColor,gridColor,barTitleColor,lineColor}=props,innerWidth=width-margin.left-margin.right,innerHeight=height-margin.top-margin.bottom,x=scaleBand().rangeRound([0,innerWidth]).padding(.1),y=scaleLinear().range([innerHeight-margin.bottom-17,0]),svg=select(selector);let chart=svg.selectAll("svg").data([null]);chart=chart.enter().append("svg").merge(svg).attr("viewBox",`0,0, ${innerWidth}, ${innerHeight}`);chart.append("text").attr("x",0).attr("y",margin.top/2).attr("text-anchor","start").style("font-size","18px").attr("fill","#4c6072").text("Bar Graph");let g=chart.selectAll("g").data([null]);g=g.enter().append("g").merge(g).attr("transform",`translate(${margin.left}, ${margin.top})`);const xAxis=axisBottom(x),yAxis=axisLeft(y).ticks(10).tickSizeInner(-innerWidth).tickSizeOuter(0).tickPadding(10);x.domain(data.map(function(d){return d[0]}));y.domain([0,max(data,function(d){return d[4]})]);let xAxisG=g.selectAll(".x axis").data([null]);xAxisG=xAxisG.enter().append("g").attr("class","x axis").merge(xAxisG).attr("transform",`translate(0, ${innerHeight-margin.bottom-17})`);let yAxisG=g.selectAll("y axis").data([null]);yAxisG=yAxisG.enter().append("g").attr("class","y axis").merge(yAxisG);xAxisG.call(xAxis);xAxisG.selectAll(".tick text").attr("fill",tickColor);xAxisG.selectAll(".tick line").attr("stroke",pathColor);xAxisG.select(".domain").attr("stroke","transparent");yAxisG.call(yAxis);yAxisG.selectAll(".tick text").attr("fill",tickColor);yAxisG.selectAll(".tick line").attr("stroke",pathColor);yAxisG.select(".domain").attr("stroke","transparent");const tooltip=select(this.qs("#tooltip")),line$$1=line().x(d=>x(d[0])).y(d=>y(d[4]));chart.append("path").datum(data).attr("fill","none").attr("stroke",lineColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("stroke-width",1.5).attr("d",line$$1)}initLineChart(dsc){const cont=this.qs("#chart"),data=dsc.data,rows=dsc.rows;this.lineGraph(cont,Object.assign({},this.chartTheme,{width:this.qs("#container").clientWidth,height:400}),rows)}getValue(){const select$$1=this.shadowRoot.querySelector("#input");this.multilineValue=select$$1.value;return this.lineValue}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()){return!1}return!0}_dataJoined(data){const self=this;return data.filter(function(item,index){if(0===index||self.cols.length&&"href"===self.cols[index].type){return!1}return!0}).join(" ")}dscDataName(){return this.dataName}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{self.initLineChart(dsc)})}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_computeItems(rows,q){const filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}}return filtered_items}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.icon=pElement.icon;self.service=pElement.service;self.params=self.pl.paramsCopy();self.dataName=pElement.defaultValue;self.dropdownValue=+pElement.kind;self.maxlength=pElement.max;self.loader=this.loadData()}};var lineChart={LineChartBase:LineChartBase};const LineChartStyles=css`
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