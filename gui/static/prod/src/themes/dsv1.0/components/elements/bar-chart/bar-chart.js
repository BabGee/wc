import{mqttMixin,dataSourceMixin,utilsMixin,SerializableElement,scaleBand,scaleLinear,select,axisBottom,axisLeft,max,event,css,html}from"../../../../../components/adaptive-ui.js";const BarChartBase=class extends utilsMixin(dataSourceMixin(mqttMixin(SerializableElement))){static get is(){return"bar-chart"}constructor(){super();this.title="";this.chartTheme={margin:{top:35,right:145,bottom:35,left:45},barsColors:"#23d160",tickColor:"#aeaeae",pathColor:"#aeaeae",gridColor:"#aeaeae",barTitleColor:"#23d160"}}static get is(){return"bar-chart"}static get properties(){return{title:String,chartTheme:Object}}barChart(selector,props,data){var _Mathfloor=Math.floor;const{margin,width,height,barsColors,tickColor,pathColor,gridColor,barTitleColor}=props,innerWidth=width-margin.left-margin.right,innerHeight=height-margin.top-margin.bottom,globalStyle=getComputedStyle(document.body),x=scaleBand().rangeRound([0,innerWidth]).padding(.1),y=scaleLinear().range([innerHeight-margin.bottom-17,0]),svg=select(selector);let chart=svg.selectAll("svg").data([null]);chart=chart.enter().append("svg").merge(svg).attr("viewBox",`0,0, ${innerWidth}, ${innerHeight}`);chart.append("text").attr("x",0).attr("y",margin.top/2).attr("text-anchor","start").style("font-size","18px").attr("fill","#4c6072").text("Bar Graph");let g=chart.selectAll("g").data([null]);g=g.enter().append("g").merge(g).attr("transform",`translate(${margin.left}, ${margin.top})`);const xAxis=axisBottom(x),yAxis=axisLeft(y).ticks(5).tickSizeInner(-innerWidth).tickSizeOuter(0).tickPadding(10);x.domain(data.map(function(d){return d[0]}));y.domain([0,max(data,function(d){return d[4]})]);let xAxisG=g.selectAll(".x axis").data([null]);xAxisG=xAxisG.enter().append("g").attr("class","x axis").merge(xAxisG).attr("transform",`translate(0, ${innerHeight-margin.bottom-17})`);let yAxisG=g.selectAll("y axis").data([null]);yAxisG=yAxisG.enter().append("g").attr("class","y axis").merge(yAxisG);xAxisG.call(xAxis);xAxisG.selectAll(".tick text").attr("fill",tickColor);xAxisG.selectAll(".tick line").attr("stroke",pathColor);xAxisG.select(".domain").attr("stroke","transparent");yAxisG.call(yAxis);yAxisG.selectAll(".tick text").attr("fill",tickColor);yAxisG.selectAll(".tick line").attr("stroke",pathColor);yAxisG.select(".domain").attr("stroke","transparent");const tooltip=select(this.qs("#tooltip"));let bar=g.selectAll("rect").data([null]);bar=bar.data(data).enter().append("rect").merge(bar);bar.attr("y",()=>y(0)).attr("x",d=>x(d[0])).attr("height",()=>innerHeight-margin.bottom-17-y(0)).attr("width",x.bandwidth()).attr("fill",globalStyle.getPropertyValue("--app-default-color")).on("mouseenter",d=>{innerHeight-y(d[4]);tooltip.style("opacity",1);tooltip.style("left",event.pageX-50+"px").style("top",event.pageY-70+"px").html(`<b>Value</b>: ${_Mathfloor(d[4])}`)}).on("mouseleave",()=>tooltip.style("opacity",0));bar.append("text").attr("class","value").attr("dy",".35em").attr("x",d=>x(d[0])).attr("y",d=>y(d[4])-17).attr("fill",barTitleColor).style("z-index","9999").text(d=>_Mathfloor(d[4]));chart.selectAll("rect").transition().duration(800).attr("y",d=>y(d[4])).attr("height",d=>innerHeight-margin.bottom-17-y(d[4])).delay((d,i)=>{return 100*i})}initBarChart(dsc){const rows=dsc.rows,data=dsc.data,cont=this.qs("#chart");this.barChart(cont,Object.assign({},this.chartTheme,{width:this.qs(".chart_container-card").clientWidth,height:400}),rows)}dscDataName(){return this.e.defaultValue}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;if(self.e.kind){try{self.register(self,self.e.kind)}catch(e){console.error(e)}}this.loader.then(dsc=>{self.initBarChart(dsc)})}onMqttMessage(message){super.onMqttMessage(message);var self=this;console.log("datalist on-mqtt-message");var payload=JSON.parse(message.payloadString);console.info(payload);self.parseResponseIntoProperties(payload)}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=this.e.required||pElement.min&&0<pElement.min;self.params=loader.pl.paramsCopy();self.loader=this.loadData()}};var barChart={BarChartBase:BarChartBase};const BarChartStyles=css`
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
`;var barChartCss={BarChartStyles:BarChartStyles};const ChartUIStyles=css`
    .chart_container {
        margin-bottom: 1.875em;
        border-radius: 5px;
        padding: 0;
        border: 0 solid transparent;
        -webkit-box-shadow: 0 0 20px rgba(0,0,0,.08);
        box-shadow: 0 0 20px rgba(0,0,0,.08);
        padding: 25px;
    }
    .chart_container-card{
        position: relative;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(0,0,0,.125);
        border-radius: .25rem;
    }
    .chart-title{
        font-family: Lato;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #4c6072;
    }
    .chart-label-text{
        margin: 0 0 0 5px;
        font-family: Lato;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: 0.4px;
        color: #333333;
    }
`;var chartUiStyles={ChartUIStyles:ChartUIStyles};const ChartStyleMixin=BaseClass=>class extends BaseClass{static get styles(){return[ChartUIStyles,css`
                :host {
                display: block;
                }
            `]}renderDefault(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">      
        <div class="chart_container-card chart_container">
            <div id="chart"></div>
        </div>

        `}static get properties(){return{icon:Boolean,rounded:Boolean,large:Boolean,size:String,color:String}}constructor(){super();this.icon=!1;this.rounded=!1;this.large=!1;this.size=32;this.color="#0040bf";this.type="";this.addEventListener("click",this._onAction.bind(this))}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}_onAction(){switch(this.action){case ACTION_SERVICE_CALL:this.pl._dialog(this.e.service,this.params);break;case ACTION_LINK_WINDOW:break;case ACTION_SUBMIT:default:this.pl.submitForm();}}};var chartStyleMixin={ChartStyleMixin:ChartStyleMixin};class BarChart extends ChartStyleMixin(BarChartBase){}customElements.define(BarChart.is,BarChart);export{barChart as $barChart,barChartCss as $barChartCss,chartStyleMixin as $chartStyleMixin,chartUiStyles as $chartUiStyles,BarChartBase,BarChartStyles,ChartStyleMixin,ChartUIStyles};