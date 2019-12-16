import{Command}from"./command.js";import{format,parseISO}from"../../../../node_modules/date-fns/esm/index.js";import{DatalistColumn}from"./dsc/datalist-column.js";import{Logger}from"../../logger.js";export class DataSource extends Command{constructor(dataSourceResponse,config){super(dataSourceResponse,config)}parse(config={}){this._parsePayload(this.commandResponse,config.responseType)}linkParams(paramsConfig,item){const params={};for(var linkParamKey in paramsConfig){var linkParam=paramsConfig[linkParamKey];params[linkParamKey]=item[linkParam]}return params}_parsePayload(payload,responseType){const self=this;self.cols=payload.cols;self.groups=payload.groups;if(payload.row_count){self.totalElements=payload.row_count}else{Logger.i.switchConfiguration("Datalist response without row_count")}const maxId=payload.max_id,minId=payload.min_id;if(responseType===Symbol.for("LIST")){self.rows=payload.rows;for(var items=[],i=0;i<self.rows.length;i++){for(var item={},itemLinks=[],j=0;j<self.cols.length;j++){const col=self.cols[j];if("href"===col.type){if("links"in col){Logger.i.switchConfiguration(`DSC query should be updated to use [Datalist Link Query] instead of [Links and Link params]`,this)}else{const linkString=self.rows[i][j];let linkParts={};try{linkParts=JSON.parse(linkString)}catch(e){console.error(e);continue}const linkProcessed={service:linkParts.service,icon:linkParts.icon,title:col.label,params:this.linkParams(linkParts.params,item)};itemLinks.push(linkProcessed)}}else if("datetime"===col.type){item[col.label]=self.rows[i][j]?format(parseISO(self.rows[i][j]),"MMM dd yyyy, h:mm:ss a"):""}else if("date"===col.type){item[col.label]=self.rows[i][j]?format(parseISO(self.rows[i][j]),"MMM dd yyyy"):""}else{item[col.label]=self.rows[i][j]}}item.links=itemLinks;if(!("id"in item)){if("index"in item){item.id=item.index}}items.push(item)}self.data=items;const columns=[];let processedActions=!1;if(self.selectable){const datalistColumnS=new DatalistColumn;datalistColumnS.header="";columns.push(datalistColumnS)}self.cols.forEach(function(col){const datalistColumn=new DatalistColumn;datalistColumn.type=col.type;if("href"===col.type){if(!processedActions){datalistColumn.header="";datalistColumn.actions=!0;columns.push(datalistColumn);processedActions=!0}}else{datalistColumn.header=col.label;datalistColumn.filter="search_filters"in col&&col.search_filters;datalistColumn.date="date_filters"in col;datalistColumn.property=col.label;datalistColumn.propertyPath=col.value;datalistColumn.choices=datalistColumn.date?"date_filters"in col&&col.date_filters:"list_filters"in col&&col.list_filters;columns.push(datalistColumn)}});self.columns=columns}else if(responseType===Symbol.for("DATA")){self.data=payload.data;self.groups=payload.groups}else if(responseType===Symbol.for("LINES")){Logger.i.incompleteDev("Data source response type - LINES ")}else{throw new DOMException("[Critical Error] unknown dataResponseType ")}}}