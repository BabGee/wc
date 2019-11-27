import{html,format,parse,SharedStyles,DateElementBase}from"../../../../components/adaptive-ui.js";class DateElement extends DateElementBase{renderDefault(){return html`
 ${SharedStyles}
  <style>
 #input{
 text-indent: 20px;
 }
</style>
  <div class="column " >
        <div class="field">
            <label class="form-label">
            <span><iron-icon icon=${this.e.icon||"icons:input"}></iron-icon></span>${this.e.name}
            </label>
            <div class="control  has-icons-left">
                <input class="input"  
                    name=${this.e.name} 
                    id="input"
                    type="date"   
                    placeholder=${this.e.name} 
                    required=${this.required} minlength=${this.e.min}  maxlength=${this.e.max}>
                <span class="icon is-left">
                <iron-icon icon=${this.e.icon||"icons:date-range"}></iron-icon>                   
                </span>

            </div>
        </div>
    </div>
        `}static get properties(){return{label:{type:String,value:"Choose Date"},required:Boolean,datestring:{type:String,value:""}}}getInput(){const picker=this.qs("#input");return picker}getValue(){const pickerDate=this.getInput().valueAsDate;if(pickerDate){const outputTokens=this.e.details.output_format||this.e.kind;try{return format(pickerDate,outputTokens)}catch(exception){console.warn(`[DEPRECATED] ${this.e.name} invalid tokens ${outputTokens}, fall back to dd/MM/yyyy`,exception);return format(pickerDate,"dd/MM/yyyy")}}}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties);if(this.e.required&&!this.e.defaultValue){this.getInput().valueAsDate=new Date}if(this.e.defaultValue){const date=parse(this.e.defaultValue,this.e.details.input_format,new Date);this.getInput().valueAsDate=new Date(new Date(date.getTime()+Math.abs(6e4*date.getTimezoneOffset())))}}}customElements.define(DateElement.is,DateElement);