import{css,html,DropdownSelectBase,RENDER_M_SIDE_BY_SIDE}from"../../../../components/adaptive-ui.js";class DropdownSelect extends DropdownSelectBase{static get styles(){return css`
    .main-container {
      padding: 16px;
    }
      .ss-main {
  position: relative;
  display: inline-block;
  user-select: none;
  color: #666666;
  width: 100%; }
  .ss-main .ss-single-selected {
    display: flex;
    cursor: pointer;
    width: 100%;
    height: 30px;
    padding: 6px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    background-color: #ffffff;
    outline: 0;
    box-sizing: border-box;
    transition: background-color .2s; }
    .ss-main .ss-single-selected.ss-disabled {
      background-color: #dcdee2;
      cursor: not-allowed; }
    .ss-main .ss-single-selected.ss-open-above {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px; }
    .ss-main .ss-single-selected.ss-open-below {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px; }
    .ss-main .ss-single-selected .placeholder {
      display: flex;
      flex: 1 1 100%;
      align-items: center;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      text-align: left;
      width: calc(100% - 30px);
      line-height: 1em;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none; }
      .ss-main .ss-single-selected .placeholder * {
        display: flex;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: auto; }
      .ss-main .ss-single-selected .placeholder .ss-disabled {
        color: #dedede; }
    .ss-main .ss-single-selected .ss-deselect {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 0 1 auto;
      margin: 0 6px 0 6px;
      font-weight: bold; }
      .ss-main .ss-single-selected .ss-deselect.ss-hide {
        display: none; }
    .ss-main .ss-single-selected .ss-arrow {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 0 1 auto;
      margin: 0 6px 0 6px; }
      .ss-main .ss-single-selected .ss-arrow span {
        border: solid #666666;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 3px;
        transition: transform .2s, margin .2s; }
        .ss-main .ss-single-selected .ss-arrow span.arrow-up {
          transform: rotate(-135deg);
          margin: 3px 0 0 0; }
        .ss-main .ss-single-selected .ss-arrow span.arrow-down {
          transform: rotate(45deg);
          margin: -3px 0 0 0; }
  .ss-main .ss-multi-selected {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    min-height: 30px;
    width: 100%;
    padding: 0 0 0 3px;
    border: 1px solid #dcdee2;
    border-radius: 4px;
    background-color: #ffffff;
    outline: 0;
    box-sizing: border-box;
    transition: background-color .2s; }
    .ss-main .ss-multi-selected.ss-disabled {
      background-color: #dcdee2;
      cursor: not-allowed; }
      .ss-main .ss-multi-selected.ss-disabled .ss-values .ss-disabled {
        color: #666666; }
      .ss-main .ss-multi-selected.ss-disabled .ss-values .ss-value .ss-value-delete {
        cursor: not-allowed; }
    .ss-main .ss-multi-selected.ss-open-above {
      border-top-left-radius: 0px;
      border-top-right-radius: 0px; }
    .ss-main .ss-multi-selected.ss-open-below {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px; }
    .ss-main .ss-multi-selected .ss-values {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      flex: 1 1 100%;
      width: calc(100% - 30px); }
      .ss-main .ss-multi-selected .ss-values .ss-disabled {
        display: flex;
        padding: 4px 5px;
        margin: 2px 0px;
        line-height: 1em;
        align-items: center;
        width: 100%;
        color: #dedede;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; }

@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0; }
  100% {
    transform: scale(1);
    opacity: 1; } }

@keyframes scaleOut {
  0% {
    transform: scale(1);
    opacity: 1; }
  100% {
    transform: scale(0);
    opacity: 0; } }
      .ss-main .ss-multi-selected .ss-values .ss-value {
        display: flex;
        user-select: none;
        align-items: center;
        font-size: 12px;
        padding: 3px 5px;
        margin: 3px 5px 3px 0px;
        color: #ffffff;
        background-color: #5897fb;
        border-radius: 4px;
        animation-name: scaleIn;
        animation-duration: .2s;
        animation-timing-function: ease-out;
        animation-fill-mode: both; }
        .ss-main .ss-multi-selected .ss-values .ss-value.ss-out {
          animation-name: scaleOut;
          animation-duration: .2s;
          animation-timing-function: ease-out; }
        .ss-main .ss-multi-selected .ss-values .ss-value .ss-value-delete {
          margin: 0 0 0 5px;
          cursor: pointer; }
    .ss-main .ss-multi-selected .ss-add {
      display: flex;
      flex: 0 1 3px;
      margin: 9px 12px 0 5px; }
      .ss-main .ss-multi-selected .ss-add .ss-plus {
        display: flex;
        justify-content: center;
        align-items: center;
        background: #666666;
        position: relative;
        height: 10px;
        width: 2px;
        transition: transform .2s; }
        .ss-main .ss-multi-selected .ss-add .ss-plus:after {
          background: #666666;
          content: "";
          position: absolute;
          height: 2px;
          width: 10px;
          left: -4px;
          top: 4px; }
        .ss-main .ss-multi-selected .ss-add .ss-plus.ss-cross {
          transform: rotate(45deg); }
  .ss-main .ss-content {
    position: absolute;
    width: 100%;
    margin: -1px 0 0 0;
    box-sizing: border-box;
    border: solid 1px #dcdee2;
    z-index: 1010;
    background-color: #ffffff;
    transform-origin: center top;
    transition: transform .2s, opacity .2s;
    opacity: 0;
    transform: scaleY(0); }
    .ss-main .ss-content.ss-open {
      display: block;
      opacity: 1;
      transform: scaleY(1); }
    .ss-main .ss-content .ss-search {
      display: flex;
      flex-direction: row;
      padding: 8px 8px 6px 8px; }
      .ss-main .ss-content .ss-search.ss-hide {
        height: 0px;
        opacity: 0;
        padding: 0px 0px 0px 0px;
        margin: 0px 0px 0px 0px; }
        .ss-main .ss-content .ss-search.ss-hide input {
          height: 0px;
          opacity: 0;
          padding: 0px 0px 0px 0px;
          margin: 0px 0px 0px 0px; }
      .ss-main .ss-content .ss-search input {
        display: inline-flex;
        font-size: inherit;
        line-height: inherit;
        flex: 1 1 auto;
        width: 100%;
        min-width: 0px;
        height: 30px;
        padding: 6px 8px;
        margin: 0;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        background-color: #ffffff;
        outline: 0;
        text-align: left;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -webkit-appearance: textfield; }
        .ss-main .ss-content .ss-search input::placeholder {
          color: #8a8a8a;
          vertical-align: middle; }
        .ss-main .ss-content .ss-search input:focus {
          box-shadow: 0 0 5px #5897fb; }
      .ss-main .ss-content .ss-search .ss-addable {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 22px;
        font-weight: bold;
        flex: 0 0 30px;
        height: 30px;
        margin: 0 0 0 8px;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        box-sizing: border-box; }
    .ss-main .ss-content .ss-addable {
      padding-top: 0px; }
    .ss-main .ss-content .ss-list {
      max-height: 200px;
      overflow-x: hidden;
      overflow-y: auto;
      text-align: left; }
      .ss-main .ss-content .ss-list .ss-optgroup .ss-optgroup-label {
        padding: 6px 10px 6px 10px;
        font-weight: bold; }
      .ss-main .ss-content .ss-list .ss-optgroup .ss-option {
        padding: 6px 6px 6px 25px; }
      .ss-main .ss-content .ss-list .ss-optgroup-label-selectable {
        cursor: pointer; }
        .ss-main .ss-content .ss-list .ss-optgroup-label-selectable:hover {
          color: #ffffff;
          background-color: #5897fb; }
      .ss-main .ss-content .ss-list .ss-option {
        padding: 6px 10px 6px 10px;
        cursor: pointer;
        user-select: none; }
        .ss-main .ss-content .ss-list .ss-option * {
          display: inline-block; }
        .ss-main .ss-content .ss-list .ss-option:hover, .ss-main .ss-content .ss-list .ss-option.ss-highlighted {
          color: #ffffff;
          background-color: #5897fb; }
        .ss-main .ss-content .ss-list .ss-option.ss-disabled {
          cursor: not-allowed;
          color: #dedede;
          background-color: #ffffff; }
        .ss-main .ss-content .ss-list .ss-option:not(.ss-disabled).ss-option-selected {
          color: #666666;
          background-color: rgba(88, 151, 251, 0.1); }
        .ss-main .ss-content .ss-list .ss-option.ss-hide {
          display: none; }
        .ss-main .ss-content .ss-list .ss-option .ss-search-highlight {
          background-color: #fffb8c; }
    `}constructor(){super();this.contentOpen=!1;this.selected=null}renderDefault(){if(this.renderMode===RENDER_M_SIDE_BY_SIDE){return html`
        RENDER_M_SIDE_BY_SIDE not supported
      `}else{return html`

      <style>        
        #warning-text{
          display:none;
        }
      </style>

    <div class="main-container">
      <div class="ss-main">
      
        <div class="ss-single-selected ${this.contentOpen?"ss-open-below":""}" @click="${this._onMultiSelectContainerClick}">
          <span class="placeholder">${this.getSelected(this.selected)}</span>
          <span class="ss-deselect ss-plus" @click="${this._onDeselectClick}">x</span>
          <!--arrow container-->
          <span class="ss-arrow">
                <!--arrow icons-->
               <span class="${this.contentOpen?"arrow-up":"arrow-down"}"></span>        
          </span>
        </div>
        
        <div class="ss-content ${this.contentOpen?"ss-open":""}">
              <!--container -->
              <div class="ss-search">
                  <!--input-->
                  <input 
                    type="search" 
                    placeholder="Enter Search" 
                    tabindex="0" 
                    aria-label="Enter Search"
                    @click=${this._onSearchInputClick}"  
                    @keyup=${this._onSearchKeyUp}" 
                    @focus=${this._onSearchFocus}">
            </div>
        
            <!--list-->
            <div class="ss-list">
            
            ${this.loading?html`
                 <div class="ss-option ss-disabled" >Searching options ... </div>
            `:html`            
                ${this.selectOptions(this.rows).length?html`
                    ${this.selectOptions(this.rows).map(option=>html`
                      <div class="ss-option ${option.selected?"ss-option-selected":""}" 
                            data-value="${option.value}" 
                            @click="${this._onOptionClick}">${option.label}</div>
                      `)}
                `:html`
                    <div class="ss-option ss-disabled" >No Results</div>
                `}
            `}
            </div>
    </div>
</div>
</div>

<p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>

`}}static get properties(){return{icon:String,title:String,q:{type:String,value:""},// slim
contentOpen:{type:Boolean},options:{type:Array}}}getValue(){return this.selected}valid(validation){const warningText=this.shadowRoot.querySelector("#warning-text");warningText.style.display="none"}invalid(validation){const warningText=this.shadowRoot.querySelector("#warning-text");warningText.style.display="block"}getOption(value){const o=this.rows.find(function(element){return element[0]==value});if(o){return{label:o[1],value:o[0],selected:this.selected==o.value}}}// used fro multi select
getSelections(){const ss=this.selections.map(s=>this.getOption(s));console.log(ss);return ss}// used fro single select
getSelected(){const title="Select a "+this.title;if(this.selected){const option=this.getOption(this.selected);return option?option.label:title}return title}/**
     * adds a property 'selected=true' to options that have been selected
     *
     * @return {Array}
     */selectOptions(){const options=[];for(var i=0;i<this.rows.length;i++){const item=this.rows[i],option={value:item[0],label:item[1]};option.selected=this.selected==option.value;options.push(option)}return options}_onMultiSelectContainerClick(e){e.preventDefault();e.stopPropagation();this.contentOpen?this.close():this.open()}_onDeselectClick(e){e.stopPropagation();const item=e.currentTarget.dataset.value;// remove animation is set by adding class ss-out
// TODO e.currentTarget.parentElement.classList.add('ss-out');
// remove item from selections
var filteredAry=this.selections.filter(e=>e!=item);console.log(filteredAry);this.selections=filteredAry}_onSearchInputClick(evt){evt.stopPropagation()}_onSearchKeyUp(e){const searchValue=e.target.value;this.updateParams("q",searchValue)}_onSearchFocus(e){// todo slim.js 342
this.open()}_onOptionClick(e){e.preventDefault();// todo this event should not reach up to document
e.stopPropagation();const selected=e.currentTarget.dataset.value;console.log(selected);this.selected=selected;this.close()}open(){if(this.contentOpen){return}this.contentOpen=!0}close(){if(!this.contentOpen){return}this.contentOpen=!1}firstUpdated(){const self=this;this.loader.then(dsc=>{});// TODO #307 Test whether this event listener is automatically detached when this component is detached
document.addEventListener("click",function(e){// TODO this doesn't work
if(!self.shadowRoot.contains(e.currentTarget)){self.close()}else{console.log(e.target);console.log(self.contains(e.target))}})}}customElements.define(DropdownSelect.is,DropdownSelect);