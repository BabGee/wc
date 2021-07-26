import{utilsMixin,dataSourceMixin,mqttMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const PosCartBase=class extends utilsMixin(mqttMixin(dataSourceMixin(BaseElement))){static get is(){return"pos-cart"}static get properties(){return{icon:String,target:String,data_name:String,service:String,params:{type:Object,value:{}},color:String,_postl:Object,inline:{type:Object,value:function(){return this}},sums:Object,loading:{type:Boolean,value:!1},title:String,maxlength:Number,pattern:String,required:Boolean,multi:Boolean,cart_items:String,col_sums:Array,currentData:{type:Array,notify:!0}}}static get behaviors(){return[MqttBehavior]}getName(){return this.e.formName}getValue(){return this.cart_items}validate(){return!0}_getImagePath(url){return this.media_url+url}dscDataName(){return this.data_name}repeatObject(item){var items=[];if("object"==typeof item){var count=0;for(var x in item){items.push([count,x,item[x]]);count++}}return items}computeTarget(){return this.target}computeParams(link){return JSON.stringify(link.params)}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this;this;this.loader.then(()=>{})}mergeParams(obj1,obj2){var obj3={};for(var attrname in obj2){obj3[attrname]=obj2[attrname]}for(var attrname in obj1){obj3[attrname]=obj1[attrname]}return obj3}onMqttMessage(message){var self=this;console.log("pos cart on-mqtt-message");var payload=JSON.parse(message.payloadString);console.info(payload);for(var i=0,action;i<payload.action.length;i++){action=payload.action[i];if("REPLACE"==action){self.cols=payload.cols;self.rows=payload.rows;const items=[],itemIds=[],sums={},config=document.querySelector("switch-config");for(var i=0;i<self.rows.length;i++){for(var item={},itemLinks=[],j=0;j<self.cols.length;j++){if("number"==self.cols[j].type){if(!sums[self.cols[j].value]){sums[self.cols[j].value]={name:self.cols[j].label,value:0}}sums[self.cols[j].value].value+=parseInt(self.rows[i][j])}if("href"==self.cols[j].type){var links=self.cols[j].links;for(var link in links){var linkObject=links[link],linkProcessed={};linkProcessed.service=linkObject.service;linkProcessed.icon=linkObject.icon;linkProcessed.params={};for(var linkParamKey in linkObject.params){var linkParam=linkObject.params[linkParamKey];linkProcessed.params[linkParamKey]=item[linkParam]}var endpoint=config.protocol+"//"+config.hostname+"/"+linkProcessed.service+"/?",params_string=Object.keys(linkProcessed.params).map(function(k){return encodeURIComponent(k)+"="+encodeURIComponent(linkProcessed.params[k])}).join("&");endpoint=endpoint+params_string;linkProcessed.fullUrl=endpoint;itemLinks.push(linkProcessed)}}else{item[self.cols[j].label]=self.rows[i][j]}}item.inline=itemLinks;items.push(item);itemIds.push(item.id)}self.currentData=items;self.col_sums=Object.values(sums);self.cart_items=itemIds.join(",")}else if("COMPARE"==action){}else if("APPEND"==action){}}}init(pElement,loader){super.init(pElement,loader);var self=this;self.title=PosCartBase.toTitleCase(pElement.name);self.icon=pElement.icon;self.service=pElement.service;self.params=loader.pl.params;self.data_name=pElement.defaultValue;self.maxlength=pElement.max;self.loader=this.loadData()}};var posCart={PosCartBase:PosCartBase};const PosCartStyles=css`


`;var posCartCss={PosCartStyles:PosCartStyles};class PosCart extends PosCartBase{constructor(){super()}static get styles(){return[PosCartStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
        <paper-toolbar class="toolbar" id="paper_toolbar">
            <paper-item class="flex">
                <iron-icon icon="[[icon]]" prefix></iron-icon>
                [[title]]
            </paper-item>
            <paper-menu-button class="flex-one">
                <paper-listbox on-iron-select="typeFilter" class="dropdown-content">
                    <template is="dom-repeat" items="[[ repeatObject(groups) ]]" as="group" index-as="idx">
                        <paper-item>[[group.2]]</paper-item>
                    </template>
                </paper-listbox>
                <paper-icon-button icon="icons:filter-list"
                                   title="Filter"
                                   class="dropdown-trigger"
                                   noink>
                </paper-icon-button>

            </paper-menu-button>

        </paper-toolbar>
        <div id="">
            <div class="shopping-cart">

                <div class="column-labels">
                    <!--todo Not displaying -->
                    <!-- <label class="product-image">Image</label> -->
                    <label class="product-details">Product</label>
                    <label class="product-quantity">Quantity</label>
                    <label class="product-price">Price</label>
                    <label class="product-line-price">Total</label>
                    <!-- <label class="product-removal">Remove</label> -->
                </div>

                <template is="dom-repeat" items="[[ currentData ]]" as="product" index-as="idx">
                    <div class="product">
                        <div class="pro_cat">
                            <div class="product-image">
                                <img src="/media/[[product.image]]">
                            </div>
                            <div class="product-details">
                                <div class="product-title">[[product.name]]</div>
                                <p class="product-description">[[product.kind]]</p>
                            </div>
                            <div style="clear:both"></div>
                        </div>
                        <template is="dom-repeat"
                                  items="[[product.inline]]"
                                  index-as="ifp"
                                  as="inlineForm">
                            <inline-elements-list
                                    class="product-details"
                                    service="[[inlineForm.service]]"
                                    params="[[inlineForm.params]]">
                            </inline-elements-list>
                        </template>
                        <div class="product-price">[[product.price]]</div>
                        <div class="product-line-price">[[product.total]]</div>
                    </div>
                </template>
                <div class="pay_details">
                    <h3>Payment Details</h3>
                    <div>
                        <template is="dom-repeat"
                                  items="[[col_sums]]"
                                  index-as="ifs"
                                  class="pay_in_box"
                                  as="sum">

                            <div class="last_bor_none"><span class="fl">[[sum.name]]</span><span class="fr">[[sum.value]]</span><div class="cb"></div></div><br/>
                        </template>
                    </div>
                </div>
                <div class="cb"></div>

            </div>
            <template is="dom-if" if="[[!currentData.length]]">
                <h3 style="text-align: center;">No [[title]] Items</h3>
            </template>
        </div>

        
        `}}customElements.define(PosCart.is,PosCart);export{posCart as $posCart,posCartCss as $posCartCss,PosCartBase,PosCartStyles};