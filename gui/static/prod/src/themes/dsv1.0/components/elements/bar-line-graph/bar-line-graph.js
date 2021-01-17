import{dataSourceMixin,BaseElement,utilsMixin,css,html,scaleBand,scaleLinear,select,axisBottom,axisLeft,max,event,line}from"../../../../../components/adaptive-ui.js";const BarLineGraphBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super();this.chartTheme={margin:{top:35,right:145,bottom:35,left:45},barsColors:"#23d160",tickColor:"#aeaeae",pathColor:"#aeaeae",gridColor:"#aeaeae",barTitleColor:"#23d160",lineColor:"steelblue"}}static get is(){return"bar-line-graph"}static get properties(){return{chartTheme:Object}}barLineGraph(selector,props,data){var _Mathfloor=Math.floor;const{margin,width,height,barsColors,tickColor,pathColor,gridColor,barTitleColor,lineColor}=props,innerWidth=width-margin.left-margin.right,innerHeight=height-margin.top-margin.bottom,globalStyle=getComputedStyle(document.body),x=scaleBand().rangeRound([0,innerWidth]).padding(.1),y=scaleLinear().range([innerHeight-margin.bottom-17,0]),svg=select(selector);let chart=svg.selectAll("svg").data([null]);chart=chart.enter().append("svg").merge(svg).attr("viewBox",`0,0, ${innerWidth}, ${innerHeight}`);chart.append("text").attr("x",0).attr("y",margin.top/2).attr("text-anchor","start").style("font-size","18px").attr("fill","#4c6072").text("Bar Graph");let g=chart.selectAll("g").data([null]);g=g.enter().append("g").merge(g).attr("transform",`translate(${margin.left}, ${margin.top})`);const xAxis=axisBottom(x),yAxis=axisLeft(y).ticks(5).tickSizeInner(-innerWidth).tickSizeOuter(0).tickPadding(10);x.domain(data.map(function(d){return d[0]}));y.domain([0,max(data,function(d){return d[4]})]);let xAxisG=g.selectAll(".x axis").data([null]);xAxisG=xAxisG.enter().append("g").attr("class","x axis").merge(xAxisG).attr("transform",`translate(0, ${innerHeight-margin.bottom-17})`);let yAxisG=g.selectAll("y axis").data([null]);yAxisG=yAxisG.enter().append("g").attr("class","y axis").merge(yAxisG);xAxisG.call(xAxis);xAxisG.selectAll(".tick text").attr("fill",tickColor);xAxisG.selectAll(".tick line").attr("stroke",pathColor);xAxisG.select(".domain").attr("stroke","transparent");yAxisG.call(yAxis);yAxisG.selectAll(".tick text").attr("fill",tickColor);yAxisG.selectAll(".tick line").attr("stroke",pathColor);yAxisG.select(".domain").attr("stroke","transparent");const tooltip=select(this.qs("#tooltip")),line$$1=line().x(d=>x(d[0])).y(d=>y(d[4]));let bar=g.selectAll("rect").data([null]);bar=bar.data(data).enter().append("rect").merge(bar);bar.attr("y",()=>y(0)).attr("x",d=>x(d[0])).attr("height",()=>innerHeight-margin.bottom-17-y(0)).attr("width",x.bandwidth()).attr("fill",globalStyle.getPropertyValue("--app-default-color")).on("mouseenter",d=>{innerHeight-y(d[4]);tooltip.style("opacity",1);tooltip.style("left",event.pageX-50+"px").style("top",event.pageY-70+"px").html(`<b>Value</b>: ${_Mathfloor(d[4])}`)}).on("mouseleave",()=>tooltip.style("opacity",0));bar.append("text").attr("class","value").attr("dy",".35em").attr("x",d=>x(d[0])).attr("y",d=>y(d[4])-17).attr("fill",barTitleColor).style("z-index","9999").text(d=>_Mathfloor(d[4]));chart.selectAll("rect").transition().duration(800).attr("y",d=>y(d[4])).attr("height",d=>innerHeight-margin.bottom-17-y(d[4])).delay((d,i)=>{return 100*i});chart.append("path").datum(data).attr("fill","none").attr("stroke",lineColor).attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("stroke-width",1.5).attr("d",line$$1)}initBarLineGraph(dsc){const rows=dsc.rows,cont=this.qs("#chart");this.barLineGraph(cont,Object.assign({},this.chartTheme,{width:this.qs("#container").clientWidth,height:400}),rows)}firstUpdated(changedProperties){super.firstUpdated(changedProperties);let self=this;this.loader.then(dsc=>{self.initBarLineGraph(dsc)})}dscDataName(){return this.e.defaultValue}init(pElement,loader){super.init(pElement,loader);var self=this;self.loader=this.loadData()}};var barLineGraph={BarLineGraphBase:BarLineGraphBase};const BarLineGraphStyles=css`
.chart-container{
    background-color: #fff;
    width: 100%;
    height: auto;
    border-radius: 6px;
    padding: 24px;
}
`;var barLineGraphCss={BarLineGraphStyles:BarLineGraphStyles};class BarLineGraph extends BarLineGraphBase{static get styles(){return[BarLineGraphStyles,css` 
                :host{
                    disply: block;
                }
                `]}render(){return html`
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
            `}}customElements.define(BarLineGraph.is,BarLineGraph);export{barLineGraph as $barLineGraph,barLineGraphCss as $barLineGraphCss,BarLineGraphBase,BarLineGraphStyles};