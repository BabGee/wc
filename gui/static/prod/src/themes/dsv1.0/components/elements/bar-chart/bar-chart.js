import{utilsMixin,dataSourceMixin,BaseElement,scaleBand,scaleLinear,select,axisBottom,axisLeft,max,event,css,html}from"../../../../../components/adaptive-ui.js";const BarChartBase=class extends utilsMixin(dataSourceMixin(BaseElement)){static get is(){return"bar-chart"}constructor(){super();this.title="";this.chartTheme={margin:{top:35,right:145,bottom:35,left:45},barsColors:"#23d160",tickColor:"#aeaeae",pathColor:"#aeaeae",gridColor:"#aeaeae",barTitleColor:"#23d160"}}static get properties(){return{title:String,chartTheme:Object}}barChart(selector,props,data){var _Mathfloor=Math.floor;const{margin,width,height,barsColors,tickColor,pathColor,gridColor,barTitleColor}=props,innerWidth=width-margin.left-margin.right,innerHeight=height-margin.top-margin.bottom,x=scaleBand().rangeRound([0,innerWidth]).padding(.1),y=scaleLinear().range([innerHeight-margin.bottom-17,0]),svg=select(selector);let chart=svg.selectAll("svg").data([null]);chart=chart.enter().append("svg").merge(svg).attr("viewBox",`0,0, ${innerWidth}, ${innerHeight}`);chart.append("text").attr("x",0).attr("y",margin.top/2).attr("text-anchor","start").style("font-size","18px").attr("fill","#4c6072").text("Bar Graph");let g=chart.selectAll("g").data([null]);g=g.enter().append("g").merge(g).attr("transform",`translate(${margin.left}, ${margin.top})`);const xAxis=axisBottom(x),yAxis=axisLeft(y).ticks(5).tickSizeInner(-innerWidth).tickSizeOuter(0).tickPadding(10);x.domain(data.map(function(d){return d[0]}));y.domain([0,max(data,function(d){return d[4]})]);let xAxisG=g.selectAll(".x axis").data([null]);xAxisG=xAxisG.enter().append("g").attr("class","x axis").merge(xAxisG).attr("transform",`translate(0, ${innerHeight-margin.bottom-17})`);let yAxisG=g.selectAll("y axis").data([null]);yAxisG=yAxisG.enter().append("g").attr("class","y axis").merge(yAxisG);xAxisG.call(xAxis);xAxisG.selectAll(".tick text").attr("fill",tickColor);xAxisG.selectAll(".tick line").attr("stroke",pathColor);xAxisG.select(".domain").attr("stroke","transparent");yAxisG.call(yAxis);yAxisG.selectAll(".tick text").attr("fill",tickColor);yAxisG.selectAll(".tick line").attr("stroke",pathColor);yAxisG.select(".domain").attr("stroke","transparent");const tooltip=select(this.qs("#tooltip"));let bar=g.selectAll("rect").data([null]);bar=bar.data(data).enter().append("rect").merge(bar);bar.attr("y",()=>y(0)).attr("x",d=>x(d[0])).attr("height",()=>innerHeight-margin.bottom-17-y(0)).attr("width",x.bandwidth()).attr("fill",barsColors).on("mouseenter",d=>{innerHeight-y(d[4]);tooltip.style("opacity",1);tooltip.style("left",event.pageX-50+"px").style("top",event.pageY-70+"px").html(`<b>Value</b>: ${_Mathfloor(d[4])}`)}).on("mouseleave",()=>tooltip.style("opacity",0));bar.append("text").attr("class","value").attr("dy",".35em").attr("x",d=>x(d[0])).attr("y",d=>y(d[4])-17).attr("fill",barTitleColor).style("z-index","9999").text(d=>_Mathfloor(d[4]));chart.selectAll("rect").transition().duration(800).attr("y",d=>y(d[4])).attr("height",d=>innerHeight-margin.bottom-17-y(d[4])).delay((d,i)=>{return 100*i})}initBarChart(dsc){const rows=dsc.rows,data=dsc.data,cont=this.qs("#chart");this.barChart(cont,Object.assign({},this.chartTheme,{width:this.qs("#container").clientWidth,height:400}),rows)}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);let self=this;this.loader.then(dsc=>{self.initBarChart(dsc)})}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=BarChartBase.toTitleCase(pElement.name);self.loader=this.loadData()}};var barChart={BarChartBase:BarChartBase};const BarChartStyles=css`
#chart {
    background-color: #ddd;
    }

    rect.positive {
    fill: steelblue;
    }

    rect.negative {
    fill: darkorange;
    }

    .axis text {
    font: 10px sans-serif;
    fill: black;
    }

    .axis.y text {
    text-anchor: end;
    }
`;var barChartCss={BarChartStyles:BarChartStyles};class BarChart extends BarChartBase{constructor(){super()}static get styles(){return[BarChartStyles,css` 
            :host{
                disply: block;
            }
            `]}renderDefault(){return html`  
        <script src="https://d3js.org/d3.v4.min.js"></script>
       
            <div id="container">
            <div id="chart"></div>
            </div>`}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}customElements.define(BarChart.is,BarChart);export{barChart as $barChart,barChartCss as $barChartCss,BarChartBase,BarChartStyles};