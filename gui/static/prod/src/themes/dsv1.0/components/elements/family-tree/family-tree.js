import{utilsMixin,dataSourceMixin,SerializableElement,tree,select,json,hierarchy,css,html}from"../../../../../components/adaptive-ui.js";const FamilyTreeBase=class extends utilsMixin(dataSourceMixin(SerializableElement)){static get is(){return"family-tree"}static get properties(){return{icon:String,dataName:{type:String,value:""},service:String,title:String,maxlength:Number,pattern:String,q:{type:String,value:""},dropdownValue:Object,rows:{value:[]},params:{type:Object,value:""},columnSize:{type:Array}}}initFamilyTree(){const margin={top:0,right:320,bottom:0,left:0},fullWidth=960,fullHeight=500,width=fullWidth-margin.left-margin.right,height=fullHeight-margin.top-margin.bottom,tree$$1=tree().separation((a,b)=>a.parent===b.parent?1:.5).size([height,width]),svg=select("body").append("svg").attr("width",fullWidth).attr("height",fullHeight),g=svg.append("g").attr("transform",`translate(${margin.left},${margin.top})`);g.append("text").text("d3.tree - A Family Tree").attr("class","title").attr("x",50).attr("y",50);const elbow=d=>{return`M${d.source.y},${d.source.x}H${d.target.y},V${d.target.x}${d.target.children?"":"h"+margin.right}`};json("data.json",(err,json$$1)=>{if(err)throw err;const nodes=hierarchy(json$$1,d=>d.parents),treeNodes=tree$$1(nodes),link=g.selectAll(".link").data(treeNodes.links()).enter().append("path").attr("class","link").attr("d",elbow),node=g.selectAll(".node").data(treeNodes.descendants()).enter().append("g").attr("class","node").attr("transform",d=>`translate(${d.y},${d.x})`);node.append("text").attr("class","name").attr("x",8).attr("y",-6).text(d=>`${d.data.name}`);node.append("text").attr("x",8).attr("y",8).attr("dy",".71em").attr("class","about lifespan").text(d=>`${d.data.born} - ${d.data.died}`);node.append("text").attr("class","about location").attr("x",8).attr("y",8).attr("dy","1.86em").text(d=>`${d.data.location}`)})}getValue(){const select$$1=this.shadowRoot.querySelector("#input");this.barChartValue=select$$1.value;return this.barValue}getName(){const el=this.e.formName.split("=");return el[0]}validate(){if(this.e.required&&!this.getValue()){return!1}return!0}_dataJoined(data){const self=this;return data.filter(function(item,index){if(0===index||self.cols.length&&"href"===self.cols[index].type){return!1}return!0}).join(" ")}dscDataName(){return this.dataName}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.loadData(function(dsc){rows.dsc;self.initFamilyTree(dsc)})}_computeItemsCount(rows){return rows.length}_shouldFilter(items){var b=this._computeItemsCount(items);return 10<b}_computeItems(rows,q){const filtered_items=[];for(let i=0;i<rows.length;i++){const item=rows[i];if(q){var query=q.toLowerCase(),name=item[1].toLowerCase();if(-1!==name.indexOf(query)){filtered_items.push(item)}}else{filtered_items.push(item)}}return filtered_items}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.min&&0<pElement.min;self.title=FamilyTreeBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=self.pl.paramsCopy();self.dataName=pElement.defaultValue;self.familyTreeValue=+pElement.kind;self.maxlength=pElement.max}};var familyTree={FamilyTreeBase:FamilyTreeBase};const FamilyTreeStyles=css`
body { margin:0;position:fixed;top:0;right:0;bottom:0;left:0; }
text {
	font-family: "Helvetica Neue", Helvetica, sans-serif;
}

.title {
	font-size: larger;
  text-align: center;
}

.name {
	font-weight: bold;
}

.about {
	fill: #777;
	font-size: smaller;
}

.lifespan {
	fill: #2c5;
}

.link {
	fill: none;
	stroke: #000;
	shape-rendering: crispEdges;
}

.node {
	fill: blue;
}
option{
 font-size: 18px;
 }

`;var familyTreeCss={FamilyTreeStyles:FamilyTreeStyles};class FamilyTree extends FamilyTreeBase{static get styles(){return[FamilyTreeStyles,css`
        :host {
          display: block;
        }
      `]}constructor(){super()}renderDefault(){if(this.rows===void 0||this.q===void 0){return html``}return html`

<script src="https://d3js.org/d3.v4.min.js"></script>
   <div class="column">
 <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
 <label class="form-label">${this.e.name}</label>
   <div class="select is-fullwidth">
  <select id="input" style="text-indent: 20px;padding: 0px; border-radius: 4px;">
    ${this._computeItems(this.rows,this.q).map(data=>html`<option value="${data[0]}">${this._dataJoined(data)}</option>`)}
  </select>
</div>
  </div>
  </div>`}}customElements.define(FamilyTree.is,FamilyTree);export{familyTree as $familyTree,familyTreeCss as $familyTreeCss,FamilyTreeBase,FamilyTreeStyles};