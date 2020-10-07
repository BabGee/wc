import{utilsMixin,dataSourceMixin,BaseElement,scaleBand,scaleLinear,select,axisBottom,axisLeft,max,css,html}from"../../../../../components/adaptive-ui.js";const BarChartBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super();this.title=""}static get is(){return"bar-chart"}static get properties(){return{title:String}}initBarChart(dsc){let margin={top:35,right:145,bottom:35,left:45},width=960-margin.left-margin.right,height=560-margin.top-margin.bottom;var x=scaleBand().rangeRound([0,width]).padding(.1),y=scaleLinear().range([height,0]),chart=select(this.qs("#chart")).append("svg").attr("width",width+margin.left+margin.right).attr("height",height+margin.top+margin.bottom).append("g").attr("transform","translate("+margin.left+","+margin.top+")"),xAxis=axisBottom(x),yAxis=axisLeft(y),data=dsc.data,cols=dsc.cols,rows=dsc.rows;x.domain(rows.map(function(d){return d[1]}));y.domain([0,max(rows,function(d){return d[4]})]);var vis=select(this.qs("#container")).append("svg:svg").attr("width",width).attr("height",height),bar=chart.selectAll("g").data(rows).enter();bar.append("rect").attr("y",function(d){return y(d[0])}).attr("x",function(d){return x(d[1])}).attr("height",function(){return height-y(0)}).attr("width",x.bandwidth());chart.append("g").attr("class","x axis").attr("transform","translate(0,"+height+")").call(xAxis);chart.append("g").attr("class","y axis").call(yAxis).append("text").attr("transform","rotate(-90)").attr("y",6).attr("dy",".71em").style("text-anchor","end").text("responses")}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);let self=this;this.loader.then(dsc=>{self.initBarChart(dsc)})}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=BarChartBase.toTitleCase(pElement.name);self.loader=this.loadData()}};var barChart={BarChartBase:BarChartBase};const BarChartStyles=css`
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