import{utilsMixin,SerializableElement,css,html}from"../../../../../components/adaptive-ui.js";const StaticTagInputBase=class extends utilsMixin(SerializableElement){static get is(){return"static-tag-input"}static get properties(){return{title:{type:String,value:""},focused:{type:Boolean,value:!1},tags:{type:Array,value:[]},data:{type:Array}}}getName(){return this.e.formName}invalid(){}valid(){return!0}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this}_tagsChanged(){console.log("tags changed")}_onFocus(){if(this.qs("#filter").focused){this.focused=!0}}_debug1(){const self=this;self.focused=!1}getValue(){if(!this.tags){return""}return this.tags.join(",")}validate(){if((this.e.required||this.required)&&!this.getValue()){return!1}return!0}_computeLabel(tagId,dataFromApi){if(tagId===void 0||dataFromApi===void 0){return}const tag=dataFromApi.filter(function(item){return item.id==tagId})[0];if(tag){return tag.name}}select(evt){const institutionItem=evt.currentTarget,itemId=institutionItem.getAttribute("id");this.add(institutionItem.dataName)}add(tag){if(null===this.tags){this.tags=[]}var tagIndex=this.tags.indexOf(tag);if(-1===tagIndex){this.push("tags",tag)}}remove(tag){if(null===this.tags){return}var tagIndex=this.tags.indexOf(tag);if(-1<tagIndex){this.tags.splice(tagIndex,1);this.qs("#suggestions").selectedValues=[]}}_onTagRemoveTapped(e){e.preventDefault();this.remove(e.currentTarget.tag)}filter(){this;this.data=[]}_onInput(){this.filter(this.$.filter.value)}init(pElement,loader){super.init(pElement,loader);var self=this;this.params={};this.params.data_name=pElement.defaultValue;self.title=StaticTagInputBase.toTitleCase(pElement.name);this.required=pElement.min&&0<pElement.min;self.data=JSON.parse(pElement.kind)||[];this.tags=[];const t=[];for(let i=0;i<self.data.length;i++){if(self.data[i].selected){t.push(self.data[i].id)}}this.tags=t}};var staticTagInput={StaticTagInputBase:StaticTagInputBase};const StaticTagInputStyles=css`
:host {
    display: block;
}
[hidden] {
    display: none !important;
}

input {
    text-transform: lowercase;
    height: 36px;
    width: auto !important;
    padding-left: 0.5em;
}

iron-icon {
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;
    color: var(--disabled-text-color);
}

.iron-selected {
    background-color: var(--app-default-color);
}

paper-input {

    max-width: 40%;
    margin: auto;

    /* Label and underline color when the input is not focused
    --paper-input-container-color: red;

     Label and underline color when the input is focused
    --paper-input-container-focus-color: blue;

     Label and underline color when the input is invalid
    --paper-input-container-invalid-color: green;

     Input foreground color
    --paper-input-container-input-color: black;*/


    --paper-input-container-input-color: black;


    --paper-input-container: {
        padding: 8px 0 8px 0;
    };
    --paper-input-container-label: {
        padding: 5px;
    };
    --paper-input-container-label-focus: {
        color:#D81B60;
        padding: 0;
    };
    --paper-input-container-label-floating: {
        padding: 0;
    };
    --paper-input-container-input: {
        padding: 8px;
        border: 1px solid var(--divider-color, #b6b6b6);
        border-radius: 4px;
        background: #FFFFFF;
    };
    --paper-input-container-underline: {
        display: none;
    };
    --paper-input-container-underline-focus: {
        display: none;
    };
    --paper-input-container-underline-disabled: {
        display: none;
    } ;


}

@media screen and (max-width: 1400px) {

    paper-input {

        min-width: 60%;
        margin: auto;
    }

}


@media screen and (max-width: 1200px) {

    paper-input {

        min-width: 60%;
        margin: auto;
    }

}
@media screen and (max-width: 850px) {

    paper-input {

        min-width: 80%;
        margin: auto;
    }

}
@media screen and (max-width: 750px) {

    paper-input {

        min-width: 90%;
        margin: auto;
    }

}
@media screen and (max-width: 580px) {

    paper-input {

        min-width: 100%;
        margin: auto;
    }

}
paper-input.no-underline {
    --paper-input-container-underline: {
        display: none;
    };
    --paper-input-container-underline-focus: {
        display: none;
    };
    --paper-input-container-underline-disabled: {
        display: none;
    };
}
input{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

iron-icon, div[suffix] {
    color: #54667a;
    margin-right: 12px;
}
`;var staticTagInputCss={StaticTagInputStyles:StaticTagInputStyles};class StaticTagInput extends StaticTagInputBase{static get styles(){return[StaticTagInputStyles,css`
        :host {
          display: block;
        }
      `]}renderDefault(){return html`
         <div>
           
                ${this.tags.map(tag=>html`<paper-item style="display: inline-block;">${this._computeLabel(tag,this.data)}
                        <iron-icon icon="icons:cancel" .tag="${tag}" @tap="${this._onTagRemoveTapped}"></iron-icon></paper-item>`)}
                </div>
            
            <paper-input label="${this.title}"
                     @focused-changed="${this._onFocus}"
                     placeholder="${this.title} ..."
                     
                     id="filter">
                     <!-- todo value="{{q}}">-->
           
        </paper-input>

        <!--<template is="dom-if" if="[[focused]]">-->
        <paper-listbox id="suggestions" 
                       multi 
                       ?hidden="${!this.focused}"
                       attr-for-selected="id"
                       .selectedValues="${this.tags}"
                       @iron-select="${this._debug1}"
                       @iron-deselect="${this._debug1}">
                       ${this.data.map(item=>html`<paper-item id="${item.id}" data-name="${item.name}">${item.name}</paper-item>`)}
        </paper-listbox>
        <!--</template>-->
`}invalid(){}valid(){return!0}firstUpdated(changedProperties){super.firstUpdated(changedProperties);this}_onFocus(){if(this.qs("#filter").focused){this.focused=!0}}_debug1(){const self=this;self.focused=!1}getValue(){if(!this.tags){return""}return this.tags.join(",")}_computeLabel(tagId,dataFromApi){if(tagId===void 0||dataFromApi===void 0){return}const tag=dataFromApi.filter(function(item){return item.id==tagId})[0];if(tag){return tag.name}}select(evt){const institutionItem=evt.currentTarget,itemId=institutionItem.getAttribute("id");this.add(institutionItem.dataName)}remove(tag){if(null===this.tags){return}var tagIndex=this.tags.indexOf(tag);if(-1<tagIndex){this.tags.splice(tagIndex,1);this.qs("#suggestions").selectedValues=[]}}_onTagRemoveTapped(e){e.preventDefault();this.remove(e.currentTarget.tag)}_onInput(){this.filter(this.$.filter.value)}}window.customElements.define(StaticTagInput.is,StaticTagInput);export{staticTagInput as $staticTagInput,staticTagInputCss as $staticTagInputCss,StaticTagInputBase,StaticTagInputStyles};