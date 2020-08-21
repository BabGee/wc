import{dataSourceMixin,BaseElement,utilsMixin,css,html}from"../../../../../components/adaptive-ui.js";const BarChartBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super()}static get is(){return"bar-chart"}dscDataName(){return this.e.defaultValue}init(pElement,loader){super.init(pElement,loader);var self=this;self.loader=this.loadData()}};var barChart={BarChartBase:BarChartBase};const BarChartStyles=css`

    `;var barChartCss={BarChartStyles:BarChartStyles};class BarChart extends BarChartBase{static get styles(){return[BarChartStyles,css` 
            :host{
                disply: block;
            }
            `]}render(){return html`BarChart is working fine`}}customElements.define(BarChart.is,BarChart);export{barChart as $barChart,barChartCss as $barChartCss,BarChartBase,BarChartStyles};