import{css,html,TemplateSelectorBase}from"../../../../../components/adaptive-ui.js";const TemplateSelectorStyle=css`
    #template-selector-container {
        position:relative;
    }
    .content-container {
        display:flex;
        justify-content:space-between;
        padding:7px 25px 7px 25px;
        align-items:center;
        border: 1px solid rgb(183, 181, 181);
        border-radius:6px;
        height:fit-content;
        
    }
    .title-label {
        font-size: 16px;
        width: 100%;
        font-weight: normal;
        color: rgb(1, 50, 67);
        letter-spacing: 0.5px;
        pointer-events: none;
        transition: all 0.3s ease 0s;
    }
    .selected-template-label {
        display:none;
        width:fit-content;
        margin:0;
        font-size:14px;
        transition: all 0.4s ease 0s;
    }
    .templates {
        display:flex;
        flex-direction:column;
        max-height:0;
        align-items:center;
        margin: 10px 10px 0 10px;
        overflow-y:auto;
    }
    .arrow {
        position:relative;
        content: '';
        width: 10px;
        height: 10px;
        border-left: 2px solid #4a4a4a;
        border-bottom: 2px solid #4a4a4a;
        border-right: 2px solid transparent;
        border-top: 2px solid transparent;
        transform: rotate(-45deg);
        right:0;
    }
    .arrow-up {
        transform: rotate(135deg);
        transition:all 0.4s ease-in-out;
    }
    .arrow-down {
        transform: rotate(-45deg);
        transition:all 0.4s ease-in-out;
    }
    .show-templates {
        max-height:300px;
        transition:all 0.4s ease-in-out;
    }
    .hide-templates {
        max-height:0;
        transition:all 0.4s ease-in-out;
    }
    .template {
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        height:150px;
        margin:5px;
    }   
    .template:hover {
        cursor:pointer;
    }
    .template:active {   
        margin-right:8px;
        margin-left:8px;
        transition: all 0.17s ease-out;
    }
    .template-name {
        padding-left:7px;
    }
    .template-image {
        height:130px;
        width:100%;
        object-fit:contain;
        border: 1px solid rgb(183, 181, 181);
        border-radius: 6px;
        padding:3px;
    }
    .selected {
        border-color:var(--app-secondary-color);
    }
    .is-arrow-danger {
        border-color:rgb(255, 56, 96)!important;
    }
    .is-arrow-success{
        border-color: #23d160 !important;
    }  
    .lbl-danger{
        color: #ff2b56;
    }
    .cont-danger{
        border: 2px solid #ff2b56;
    }
    .lbl-success{
        color: #23d160 !important;
    }
    .cont-success{
        border: 2px solid #23d160;
    }
    #warning-text{
        display:none;
    }
`;var templateSelectorCss={TemplateSelectorStyle:TemplateSelectorStyle};class TemplateSelector extends TemplateSelectorBase{static get styles(){return[TemplateSelectorStyle,css`
              :host {
              display: block;
            }
          `]}static get properties(){return{selectedTemplate:String,value:String,isTemplatesOpen:Boolean}}constructor(){super();this.isTemplatesOpen=!1;this.selectedTemplate=null;this.value=null}firstUpdated(){document.addEventListener("click",e=>this.outsideClickHandler(e))}templatesVisibility(){const templates=this.shadowRoot.querySelector(".templates"),arrow=this.shadowRoot.querySelector(".arrow");if(this.isTemplatesOpen){arrow.classList.remove("arrow-up");arrow.classList.add("arrow-down");templates.classList.remove("show-templates");templates.classList.add("hide-templates")}else{arrow.classList.add("arrow-up");arrow.classList.remove("arrow-down");templates.classList.remove("hide-templates");templates.classList.add("show-templates")}this.isTemplatesOpen=!this.isTemplatesOpen}outsideClickHandler(e){const templates=this.shadowRoot.querySelector(".templates"),foundObject=e.composedPath().find(object=>"template-selector-container"===object.id),foundClass=Object.values(templates.classList).find(c=>"show-templates"===c);if(!foundObject&&foundClass){this.templatesVisibility()}}getSelectedTemplate(template){const o=this.rows.find(element=>element[0]===template[0]);if(o){this.selectedTemplate={label:o[1],value:o[0]};this.value=this.selectedTemplate.value;this.moveLabel();this.templatesVisibility();this.showSelectedTemplate()}}showSelectedTemplate(){const selectedLabelTemplate=this.shadowRoot.querySelector(".selected-template-label");selectedLabelTemplate.style.display="flex"}checkSelectedTemplate(template){if(this.selectedTemplate){return template[0]===this.selectedTemplate.value?!0:!1}}templateClickHandler(template){this.getSelectedTemplate(template)}moveLabel(){const titleLabel=this.shadowRoot.querySelector(".title-label");titleLabel.style.position="absolute";titleLabel.style.top=-7+"px";titleLabel.style.left=18+"px";titleLabel.style.fontSize=12+"px";titleLabel.style.fontWeight=700}valid(){const label=this.shadowRoot.querySelector(".title-label"),cont=this.shadowRoot.querySelector(".content-container"),selectedLabelTemplate=this.shadowRoot.querySelector(".selected-template-label"),warningText=this.shadowRoot.querySelector("#warning-text");label.classList.remove("lbl-danger");label.classList.add("lbl-success");selectedLabelTemplate.classList.add("lbl-success");selectedLabelTemplate.classList.remove("lbl-danger");cont.classList.remove("cont-danger");cont.classList.add("cont-success");warningText.style.display="none";setTimeout(()=>{label.classList.remove("lbl-success");selectedLabelTemplate.classList.remove("lbl-success");cont.classList.remove("cont-success")},3e3)}invalid(){const label=this.shadowRoot.querySelector(".title-label"),cont=this.shadowRoot.querySelector(".content-container"),selectedLabelTemplate=this.shadowRoot.querySelector(".selected-template-label"),warningText=this.shadowRoot.querySelector("#warning-text");label.classList.remove("lbl-success");label.classList.add("lbl-danger");selectedLabelTemplate.classList.remove("lbl-success");selectedLabelTemplate.classList.add("lbl-danger");cont.classList.remove("cont-success");cont.classList.add("cont-danger");warningText.style.display="block"}getValue(){return this.value}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div id="template-selector-container" class="column">           
            <div class="content-container" @click=${()=>!this.templatesVisibility()}>
              <h4 class="title-label">${this.e.name}</h4>
              <h4 class="selected-template-label">${this.selectedTemplate?this.selectedTemplate.label:""}</h4>
              <div class="arrow"></div>
            </div>
            <ul class="templates">
              ${this.rows.map(template=>html`
                  <li class="template" @click=${()=>this.templateClickHandler(template)}>
                    <h3 class="template-name">${template[1]}</h3>
                    <img class="template-image ${this.checkSelectedTemplate(template)?"selected":""}" src="/media/${template[3]}"/>
                  </li>
                `)}
            </ul>
            <p id="warning-text" style="color:#ff3860;">${this.e.name} required</p>
        </div>
    `}}customElements.define(TemplateSelector.is,TemplateSelector);var templateSelector={TemplateSelector:TemplateSelector};export{templateSelectorCss as $templateSelectorCss,templateSelector as $templateSelector,TemplateSelectorStyle,TemplateSelector};