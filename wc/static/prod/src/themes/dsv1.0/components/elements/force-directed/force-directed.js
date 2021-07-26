import{utilsMixin,dataSourceMixin,SerializableElement,scale,layout,select,json,ascending,max,selectAll,css,html}from"../../../../../components/adaptive-ui.js";const ForceDirectedBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){static get is(){return"force-directed"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,title:String,maxlength:Number,pattern:String,q:{type:String,value:""},forcedirectedValue:Object,rows:{value:[]},params:{type:Object,value:""},columnSize:{type:Array}}}initForceDirected(){var width=960,height=500,x_center=width/2,y_center=height/2,radius=(height-2*100)/2,n_elements;function index_to_rad(index){return 2*Math.PI*index/n_elements}var color=scale.category20(),force=layout.force().charge(-120).linkDistance(30).size([width,height]),x_scale=scale.linear().domain([0,1]).range([x_center,x_center+radius]),y_scale=scale.linear().domain([0,1]).range([y_center,y_center+radius]),svg=select("body").append("svg").attr("width",width).attr("height",height);json("data.json",function(error,graph){if(error)throw error;graph.nodes=graph.nodes.sort(function(a,b){return ascending(a.group,b.group)});n_elements=graph.nodes.length;force.nodes(graph.nodes).links(graph.links).start();var max_value=max(graph.links,function(d){return d.value}),link=svg.selectAll(".link").data(graph.links).enter().append("line").attr("class","link").style("opacity",function(d){return .2+.8*d.value/max_value}),node=svg.selectAll(".node").data(graph.nodes).enter().append("circle").attr("class","node").attr("r",5).style("fill",function(d){return color(d.group)}).call(force.drag);node.append("title").text(function(d){return d.name});force.on("tick",function(){link.attr("x1",function(d){return d.source.x}).attr("y1",function(d){return d.source.y}).attr("x2",function(d){return d.target.x}).attr("y2",function(d){return d.target.y});node.attr("cx",function(d){return d.x}).attr("cy",function(d){return d.y})})});selectAll("#controls input[name=mode]").on("change",function(){var _Mathcos=Math.cos,_Mathsin=Math.sin;if("circle"==this.value){force.stop();var circles=svg.selectAll("circle")[0];svg.selectAll("circle").data().forEach(function(d,i){d.x_resume=circles[i].cx.animVal.value;d.y_resume=circles[i].cy.animVal.value});svg.selectAll("line").transition().duration(1e3).attr("x1",function(d){return x_scale(_Mathsin(index_to_rad(d.source.index)))}).attr("x2",function(d){return x_scale(_Mathsin(index_to_rad(d.target.index)))}).attr("y1",function(d){return y_scale(_Mathcos(index_to_rad(d.source.index)))}).attr("y2",function(d){return y_scale(_Mathcos(index_to_rad(d.target.index)))});svg.selectAll("circle").transition().duration(1e3).attr("cx",function(d,i){return x_scale(_Mathsin(index_to_rad(i)))}).attr("cy",function(d,i){return y_scale(_Mathcos(index_to_rad(i)))})}else{svg.selectAll("line").transition().duration(1e3).attr("x1",function(d){return d.source.x_resume}).attr("y1",function(d){return d.source.y_resume}).attr("x2",function(d){return d.target.x_resume}).attr("y2",function(d){return d.target.y_resume});svg.selectAll("circle").transition().duration(1e3).attr("cx",function(d){return d.x_resume}).attr("cy",function(d){return d.y_resume});setTimeout(function(){force.resume()},1e3)}})}getValue(){const select$$1=this.shadowRoot.querySelector("#input");this.forcedirectedValue=select$$1.value;return this.forcedirectedValue}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()){return!1}return!0}_dataJoined(data){const self=this;return data.filter(function(item,index){if(0===index||self.cols.length&&"href"===self.cols[index].type){return!1}return!0}).join(" ")}dscDataName(){return this.dataName}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loader.then(dsc=>{dsc.rows;self.initForceDirected(dsc)})}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_computeItems(rows,q){const filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}}return filtered_items}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.title=ForceDirectedBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=self.pl.paramsCopy();self.dataName=pElement.defaultValue;self.forcedirectedValue=+pElement.kind;self.maxlength=pElement.max;self.loader=this.loadData()}};var forceDirected={ForceDirectedBase:ForceDirectedBase};const ForceDirectedStyles=css`
.link {
    fill: none;
    stroke: #b3b3b3;
    stroke-width: 1.5px;
  }
  
  circle {
    fill: #f9f9f9;
    stroke: #2a7fff;
    stroke-width: 2px;
  }
  
  text {
    font: 10px sans-serif;
    pointer-events: none;
    text-shadow: 0 1px 0 #fff, 1px 0 0 #fff, 0 -1px 0 #fff, -1px 0 0 #fff;
  }
  option{
   font-size: 18px;
   }

`;var forceDirectedCss={ForceDirectedStyles:ForceDirectedStyles};class ForceDirected extends ForceDirectedBase{static get styles(){return[ForceDirectedStyles,css`
        :host {
          display: block;
        }
      `]}constructor(){super()}renderDefault(){if(this.rows===void 0||this.q===void 0){return html``}return html`

<h2>Force Directed Graph</h2>
<div id="main-content"> </div>
   <div class="column">
  <script src="https://d3js.org/d3.v3.min.js"></script>
 <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
 <label class="form-label">${this.e.name}</label>
   <div class="select is-fullwidth">
  <select id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
    ${this._computeItems(this.rows,this.q).map(data=>html`<option value="${data[0]}">${this._dataJoined(data)}</option>`)}
  </select>
</div>
  </div>
  </div>`}}customElements.define(ForceDirected.is,ForceDirected);export{forceDirected as $forceDirected,forceDirectedCss as $forceDirectedCss,ForceDirectedBase,ForceDirectedStyles};