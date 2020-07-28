import{dataSourceMixin,BaseElement,utilsMixin,css,html,scaleOrdinal,arc,pie,select,easeLinear,interpolate}from"../../../../../components/adaptive-ui.js";const DonutPieChartBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super();this.chartTheme={margin:{top:35,right:145,bottom:35,left:45},colors:[]}}static get properties(){return{chartTheme:Object}}static get is(){return"donut-pie-chart"}initDonutPieChart(dsc){const rows=dsc.rows,data=dsc.data,cols=dsc.cols,cont=this.qs("#chart");let margin={top:20,right:20,bottom:20,left:20},width=cont.clientWidth-margin.right-margin.left,height=400-margin.top-margin.bottom,radius=width/4;var color=scaleOrdinal().range(["#f6511d","#7fb800"]);const arc$$1=arc().outerRadius(radius).innerRadius(radius-20),pie$$1=pie().sort(null).value(d=>d[9]),svg=select(cont).append("svg").attr("width",width).attr("height",height).append("g").attr("transform","translate("+width/2+","+height/2+")");svg.append("text").attr("x",0).attr("y",margin.top/2).attr("text-anchor","start").style("font-size","18px").attr("fill","#4c6072");const g=svg.selectAll(this.qs(".arc")).data(pie$$1(rows)).enter().append("g").attr("class","arc");g.append("path").attr("d",arc$$1).style("fill",d=>color(d.data[9])).transition().ease(easeLinear).duration(1e3).attrTween("d",function(b){b.innerRadius=0;var i=interpolate({startAngle:0,endAngle:0},b);return function(t){return arc$$1(i(t))}});console.table(data)}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);let self=this;this.loader.then(dsc=>{self.initDonutPieChart(dsc)})}init(pElement,loader){super.init(pElement,loader);var self=this;self.loader=this.loadData()}};var donutPieChart={DonutPieChartBase:DonutPieChartBase};const DonutPieChartStyles=css`
.chart-container{
    width: 100%;
    height: auto;
    background-color: #fff;
    border-radius: 6px;
}
.chart-header{
    width: 100%;
    padding: 24px;
}
.chart-header .title{
    font-size: 18px;
    color: #4c6072;
    text-transform: initial;
}
.chart-body{
    padding: 24px;
}
.tooltip {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    padding: 0.6em 1em;
    background: #fff;
    /* text-align: center; */
    /* border: 1px solid #ddd; */
    box-shadow: 0 6px 8px rgba(52, 73, 94, .2), 0 1px 1px rgba(52, 73, 94, 0.1);
    z-index: 10;
    transition: all 0.2s ease-out;
    pointer-events: none;
}
.tooltip:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 12px;
    height: 12px;
    background: white;
    border: 1px solid #ddd;
    border-top-color: transparent;
    border-left-color: transparent;
    transform: translate(-50%, 50%) rotate(45deg);
    transform-origin: center center;
    z-index: 10;
}
`;var donutPieChartCss={DonutPieChartStyles:DonutPieChartStyles};class DonutPieChart extends DonutPieChartBase{static get styles(){return[DonutPieChartStyles,css` 
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
        `}}customElements.define(DonutPieChart.is,DonutPieChart);export{donutPieChart as $donutPieChart,donutPieChartCss as $donutPieChartCss,DonutPieChartBase,DonutPieChartStyles};