import{BaseElement,serviceCallMixin,utilsMixin,adaptiveUiMixin,css,html}from"../../../../../components/adaptive-ui.js";const NavbarDefaultBase=class extends adaptiveUiMixin(utilsMixin(serviceCallMixin(BaseElement))){static get is(){return"navbar-default"}constructor(){super();this.menuGroups=[]}static get properties(){return{menuGroups:Array}}shopping(evt){evt.preventDefault();var self=this;const navigateTo=evt.currentTarget.dataset.href;window.history.replaceState("Dialog","Dialog",navigateTo);if(window.preloads[navigateTo]&&window.preloads[navigateTo].res){self.pl._dialog.apply(self.pl,[window.preloads[navigateTo].res,{service:window.preloads[navigateTo].service,params:this.serviceCallParams()}])}else{self.pl._dialog(window.preloads[navigateTo].service,this.serviceCallParams())}}parseMenus(){const menuGroups=[],menus=JSON.parse(this.e.defaultValue);for(const key in menus){if(menus.hasOwnProperty(key)){const menu=menus[key],title=Object.keys(menu)[0],menuGroup={title:title,items:[]},menuItemsWrapper=menu[title],itemsOrder=Object.keys(menuItemsWrapper);for(let index=0;index<itemsOrder.length;index++){const itemKey=itemsOrder[index],item=menuItemsWrapper[itemKey];menuGroup.items.push({title:item[0],icon:item[1],service:item[3],route:item[2]})}menuGroups.push(menuGroup)}}this.menuGroups=menuGroups}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}serviceCallParams(){return this.params}loadService(service,navigateTo){if(window.preloads[navigateTo]&&window.preloads[navigateTo].res){if(window.location.pathname===navigateTo){this.pl._dialog.apply(this.pl,[window.preloads[navigateTo].res,{service:service,params:this.serviceCallParams()}])}}else{this.callService(service).then(res=>{window.preloads[navigateTo]={res:res.serviceCommands.get_section,service:service};if(window.location.pathname===navigateTo){this.pl._dialog.apply(this.pl,[window.preloads[navigateTo].res,{service:service,params:this.serviceCallParams()}])}}).catch(err=>console.log(err))}}init(pElement,loader){super.init(pElement,loader);var self=this;this.parseMenus();self.params=loader.pl.paramsCopy();const au=document.querySelector("adaptive-ui"),basePath=au.getAttribute("path");this.basePath=basePath;if(!window.paths){window.paths={}}if(!window.preloads){window.preloads={}}for(const menuGroupIndex in this.menuGroups){const menuGroup=this.menuGroups[menuGroupIndex];for(const menuGroupItemIndex in menuGroup.items){const menuGroupItem=menuGroup.items[menuGroupItemIndex],key=`/${basePath}/${menuGroupItem.route}/`;self.loadService(menuGroupItem.service,key)}}}};var navbarDefault={NavbarDefaultBase:NavbarDefaultBase};const NavbarDefaultStyles=css`
nav {
    font-size: 16px;
}

a figure img#user-pic{
    border: solid 3px #157cf8;
}

.bind-box {
    margin-bottom: 1.5rem;
    background-color: white;
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    color: #4a4a4a;
    display: block;
    padding: 1.25rem 4.5rem;

}
.menu-link-image{
    text-align: center;
    color: white;
    font-size: 12px;
    font-weight: 300;
}
.menu-link-image-label {
    position: absolute;
    top: 10px;
    left: -4px;
    background-color:#3273dc;
    padding: 3px 5px;
}

#site-name {
    font-size: 25px;
}    

#section2 .navbar .navbar-menu .navbar-start a, #section11 .navbar .navbar-menu a, #section12 .block .level a {
    color: #d4d3d3;
}
#section2 .navbar .navbar-menu .navbar-start a:hover, #section11 .navbar .navbar-menu a:hover, #section12 .block .level a:hover {
    color: #4a4a4a;
}
#section2 .navbar .navbar-menu .navbar-start a.is-active, #section11 .navbar .navbar-menu a.is-active, #section12 .block .level a.is-active {
    color: #4a4a4a;
}
#section2 div.block nav.level div.level-left p {
    padding:0 10px;
}
#section2 .tabs a {
    align-items: center;
    border-bottom-color: #fff;
    border-bottom-style: solid;
    border-bottom-width: 4px;
    color: #4a4a4a;
    font-weight: 500;
    display: flex;
    justify-content: center;
    margin-bottom: -1px;
    padding: 0.5em 1em;
    vertical-align: top;
}
#section2 .tabs li.is-active a {
    border-bottom-color: #3273dc;
}
`;var navbarDefaultCss={NavbarDefaultStyles:NavbarDefaultStyles};class NavbarDefault extends NavbarDefaultBase{constructor(){super();this.activeMenuGroup=0}static get styles(){return[NavbarDefaultStyles,css`
      :host{
        display: block;
      }
      `]}renderDefault(){return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">

      <div id="section2" class="bind-box">
        <nav class="navbar">
          <div class="navbar-menu">
            <div class="navbar-start">
            ${this.menuGroups.map((menuGroup,menuGroupIndex)=>html`
              <a class="navbar-item ${menuGroupIndex==this.activeMenuGroup?"is-active":""}"  
                    @click=${this._setActiveMenuGroup} 
                    data-group=${menuGroupIndex} >${menuGroup.title}</a>

            `)}
            </div>
          </div>
          <div id="site-name" class="navbar-brand has-text-weight-semibold">
            <a class="navbar-item" href="#">
              <img src="${this.gateway.logo}" width="112" height="28">
            </a>
          </div>
          <div class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item has-dropdown is-active">
                <a class="navbar-item">
                  Patrick Lawrence
                </a>
                <a class="navbar-link">
                  <figure class="image is-32x32">
                    <img id="user-pic" class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
                  </figure>
                </a>
                <!-- <div class="navbar-dropdown">
                  <a class="navbar-item">
                    Settings
                  </a>
                  <a class="navbar-item is-active">
                    More...
                  </a>
                  <hr class="navbar-divider">
                  <div class="navbar-item">
                    Logout
                  </div>
                </div> -->
              </div>
            </div>
          </div>
        </nav>
        <hr class="navbar-divider" clear="all">

        <div class="block">
          <nav class="level">
          <!-- left side -->
            <div class="level-left">
              <div class="tabs">
                <ul>
                ${this.menuGroupItems(this.activeMenuGroup).map(menu=>html`
                  <li> 
                    <a 
                      class="New-products"
                      data-href="/${this.basePath}/${menu.route}/" 
                      @click=${this.shopping}>${menu.title}</a></li>
                  `)}

                </ul>
              </div>
            </div>
            <!-- right side -->
            <div class="level-right">
              <div class="level-item">
                <div class="field">
                  <p class="control">
                    <span class="icon">
                      <i class="fas fa-search"></i>
                    </span>
                    <span class="icon">
                      <i class="fas fa-heart"></i>
                    </span>
                    <span class="icon">
                      <i class="fas fa-shopping-cart"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>`}static get styles(){return css`
    :host {
 
    }
    
    `}_setActiveMenuGroup(evt){this.activeMenuGroup=evt.currentTarget.dataset.group}menuGroupItems(index){return this.menuGroups[index].items}static get properties(){return{activeMenuGroup:Number}}}customElements.define(NavbarDefault.is,NavbarDefault);export{navbarDefault as $navbarDefault,navbarDefaultCss as $navbarDefaultCss,NavbarDefaultBase,NavbarDefaultStyles};