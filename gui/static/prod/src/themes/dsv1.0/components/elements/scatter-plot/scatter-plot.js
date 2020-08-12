import{dataSourceMixin,BaseElement,utilsMixin,css,html,select}from"../../../../../components/adaptive-ui.js";const ScatterPlotBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super()}static get is(){return"scatter-plot"}initScatterPlot(dsc){console.log(dsc)}firstUpdated(changedProperties){super.firstUpdated(changedProperties);let self=this;this.loader.then(dsc=>{self.initScatterPlot(dsc)})}dscDataName(){return this.e.defaultValue}init(pElement,loader){super.init(pElement,loader);var self=this;self.loader=this.loadData()}};var scatterPlot={ScatterPlotBase:ScatterPlotBase};const ScatterPlotStyles=css`

`;var scatterPlotCss={ScatterPlotStyles:ScatterPlotStyles};class ScatterPlot extends ScatterPlotBase{static get styles(){return[ScatterPlotStyles,css` 
            :host{
                disply: block;
            }
            `]}render(){var margin={top:10,right:30,bottom:40,left:50},width=520-margin.left-margin.right,height=520-margin.top-margin.bottom,svg=select(this.qs(".chart")).append("svg").attr("width",width+margin.left+margin.right).attr("height",height+margin.top+margin.bottom).append("g").attr("transform","translate("+margin.left+","+margin.top+")");return html`
        <div class="chart"></div>
        `}}customElements.define(ScatterPlot.is,ScatterPlot);export{scatterPlot as $scatterPlot,scatterPlotCss as $scatterPlotCss,ScatterPlotBase,ScatterPlotStyles};