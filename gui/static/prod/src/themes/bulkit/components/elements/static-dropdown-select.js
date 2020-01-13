import{html,SharedStyles,StaticDropdownSelectBase}from"../../../../components/adaptive-ui.js";class StaticDropdownSelect extends StaticDropdownSelectBase{renderDefault(){return html`
 ${SharedStyles}
 <link href="https://cdnjs.cloudflare.com/ajax/libs/slim-select/1.23.0/slimselect.min.css" rel="stylesheet"/>

  <style>
 option{
 font-size: 18px;
 }
</style>
<div class="column">
    <div class="field" style="margin-top: 10px; margin-bottom: 10px;">
        <label class="form-label">
        <span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>${this.e.name}
        </label>
        <div id="select-section" class="select is-fullwidth">
            <select id="input" @mouseover='${()=>this.mouseover()}'  @click='${()=>this.optionCount()}' style="text-indent: 20px;padding: 0px; border-radius: 4px;">
                <option data-placeholder="true" value="" disabled hidden ?selected="${!this.dropdownValue}">${this.e.name}</option>    
                ${this.data.map(item=>html`<option value="${item.id}" ?selected="${this.dropdownValue===item.id}">${item.name}</option>`)}
            </select>
        </div>
    </div>
</div>
`}constructor(){super()}mouseover(){const normalSelect=this.shadowRoot.querySelector("#input"),options=normalSelect.querySelectorAll("option");//check first if options is greater than 10 inorder to prevent normal dropdown
if(10<options.length){normalSelect.addEventListener("mousedown",function(e){e.preventDefault();//to prevent normal drop down from occuring
})}}optionCount(){const items=this.shadowRoot.querySelector("#input").querySelectorAll("option");10<items.length?this.showFilter():console.log("items is less than 10")}showFilter(){console.log("showing filter");const selectSection=this.shadowRoot.querySelector("#select-section");selectSection.classList.remove("select");//to remove bulma dropdown arrow
const slim=new SlimSelect({select:this.shadowRoot.querySelector("#input"),placeholder:this.e.name,showContent:"down",allowDeselect:!0,closeOnSelect:!0,onChange:()=>{slim.close()},deselectLabel:"<span style=\"color: #1c5a6b; text-shadow: -0.5px -1px 8px #00c8ff;\">x</span>"});slim.open();//get slimSelect search input
let searchInput=this.shadowRoot.querySelector(".ss-search").querySelector("input");searchInput.addEventListener("click",function(event){event.stopPropagation()})}getValue(){const select=this.shadowRoot.querySelector("#input");this.dropdownValue=select.value;return this.dropdownValue}valid(validation){}invalid(validation){}}customElements.define(StaticDropdownSelect.is,StaticDropdownSelect);