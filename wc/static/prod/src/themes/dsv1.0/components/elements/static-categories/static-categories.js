import{dataSourceMixin,utilsMixin,BaseElement,css,html}from"../../../../../components/adaptive-ui.js";const StaticCategoriesBase=class extends utilsMixin(dataSourceMixin(BaseElement)){constructor(){super();this.currentData=[]}static get is(){return"static-categories"}static get properties(){return{icon:String,params:{type:Object,value:{}},currentData:Array,title:String,required:Boolean,variable:String,menu_open:Boolean}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this.loader.then(dsc=>{for(var objs={},d=0,itemT;d<dsc.data.length;d++){itemT=dsc.data[d];if(!objs[itemT.category]){objs[itemT.category]=[]}var toPush={name:itemT.group,href:itemT.links};objs[itemT.category].push(toPush)}this.currentData=this._toArray(objs)})}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog("PRODUCTS",dataAction.params);console.log("load service dialog")}_followLink(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}dscDataName(){return this.e.defaultValue}_toArray(obj){return Object.keys(obj).map(function(key){return{name:key,value:obj[key]}})}init(pElement,loader){super.init(pElement,loader);var self=this;self.required=pElement.required||pElement.min&&0<pElement.min;self.icon=pElement.icon;self.title=StaticCategoriesBase.toTitleCase(pElement.name);self.params=loader.pl.paramsCopy();self.menu_open=!1;this.loader=this.loadData()}};var staticCategories={StaticCategoriesBase:StaticCategoriesBase};const StaticCategoriesStyles=css`
.wrapper{
    display: flex;
    flex-wrap: wrap;
    }
.card {
    background-color: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    }
.dropContain{
    padding: 40px;
}
.text-content{
    overflow: hidden;
    text-overflow: ellipsis;
}
.hover{
    display: none;
    color: white;
    background-color:#4D4C4B;
    padding:10px;
}
.text-content:hover + .hover{
    display:inline-table;
}
`;var staticCategoriesCss={StaticCategoriesStyles:StaticCategoriesStyles};class StaticCategories extends StaticCategoriesBase{static get styles(){return[StaticCategoriesStyles,css`
            :host {
              display: block;
            }
          `]}renderDefault(){return html`					      

        
        <!-- Features section -->
        <section>
            <div class="card">

                <div>
                    <h2 class="title section-title has-text-centered dark-text">
                        Shop Categories
                    </h2>
                </div>

                <div>
                    <div class="wrapper is-vcentered has-text-centered">
                              ${this.currentData.map(item=>html` 
						 
                        <!-- Icon box -->
                        <div class="column is-3">
                            <div class="square-icon-box rounded secondary is-drop" >
                                <div class="icon-box-wrapper">
                                    <div class="icon-box">
                                        <i><iron-icon icon="icons:shopping-cart"></iron-icon></i>
                                       
                                    </div>
                                </div>
                                <div class="box-title">
                                
                                    <div class="button btn-align has-icon-right is-white is-drop">  ${item.name} 
    <div class="dropContain">
        <div class="dropOut">
        
            <ul>
            ${item.value.map(sub=>html`
                <li><iron-icon icon="icons:shopping-cart"></iron-icon><a  .dataLink="${sub.href[0]}"  @click="${this._followLink}"><div class="text-content">${sub.name}</div><div class="hover">${sub.name}</div></a></li>
                 `)}
            </ul>
        </div>
    </div>
</div>
                                </div>
                            </div>
         
                        </div>
                            `)}
                    </div>
                </div>

            </div>
        </section> 
        <!-- /Features section -->
        `}constructor(){super()}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}customElements.define(StaticCategories.is,StaticCategories);export{staticCategories as $staticCategories,staticCategoriesCss as $staticCategoriesCss,StaticCategoriesBase,StaticCategoriesStyles};