import{html$1 as html,Polymer,utilsMixin,SerializableElement,css,html as html$1}from"../../../../../components/adaptive-ui.js";const template=html`
<iron-iconset-svg size="24" name="swatch">
<svg><defs>
<g id="format-color-fill"><path d="M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z"></path><path fill-opacity=".36" d="M0 20h24v4H0z"></path></g>
</defs></svg>
</iron-iconset-svg>
`;template.setAttribute("style","display: none;");document.head.appendChild(template.content);Polymer({_template:html`
    <style>
      :host {
        display: inline-block;
        position: relative;
      }

      :host(:focus) {
        outline: none;
      }

      .color {
        box-sizing: border-box;
        width: var(--paper-swatch-picker-color-size, 20px);
        height: var(--paper-swatch-picker-color-size, 20px);
        display: inline-block;
        padding: 0;
        margin: 0;
        cursor: pointer;
        font-size: 0;
        position: relative;
      }

      /* If we just scale the paper-item when hovering, this will end up
       * adding scrollbars to the paper-listbox that are hard to get rid of.
       * An easy workaround is to use an :after pseudo element instead. */
      .color:after {
        @apply --layout-fit;
        background: currentColor;
        content: '';
        -webkit-transition: -webkit-transform 0.2s;
        transition: transform .2s;
        z-index: 0;
      }

      .color:hover:after, .color:focus:after {
        -webkit-transform: scale(1.3, 1.3);
        transform: scale(1.3, 1.3);
        outline: none;
        z-index: 1;
      }

      paper-icon-button {
        @apply --paper-swatch-picker-icon;
      }

      paper-item {
        margin: 0;
        padding: 0;
        min-height: 0;

        --paper-item-focused-before: {
          opacity: 0;
        };
      }

      paper-listbox {
        padding: 0;
        font-size: 0;
        overflow: hidden;
        @apply --layout-vertical;
        @apply --layout-wrap;
      }
    </style>

    <paper-menu-button vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]">
      <paper-icon-button id="iconButton" icon="[[icon]]" slot="dropdown-trigger" class="dropdown-trigger" alt="color picker" noink\$="[[noink]]">
      </paper-icon-button>
      <paper-listbox slot="dropdown-content" class="dropdown-content" id="container">
        <template is="dom-repeat" items="[[colorList]]">
          <paper-item class="color">[[item]]</paper-item>
        </template>
      </paper-listbox>
    </paper-menu-button>
`,is:"paper-swatch-picker",hostAttributes:{tabindex:0},listeners:{"paper-dropdown-open":"_onOpen","iron-select":"_onColorTap"},properties:{color:{type:String,notify:!0,observer:"_colorChanged"},colorList:{type:Array,value:function(){return this.defaultColors()},observer:"_colorListChanged"},columnCount:{type:Number,value:18,observer:"_columnCountChanged"},horizontalAlign:{type:String,value:"left",reflectToAttribute:!0},verticalAlign:{type:String,value:"top",reflectToAttribute:!0},icon:{type:String,value:"swatch:format-color-fill"},noink:{type:Boolean}},attached:function(){this._renderedColors=!1;this._updateSize()},defaultColors:function(){return["#ffebee","#ffcdd2","#ef9a9a","#e57373","#ef5350","#f44336","#e53935","#d32f2f","#c62828","#b71c1c","#fce4ec","#f8bbd0","#f48fb1","#f06292","#ec407a","#e91e63","#d81b60","#c2185b","#ad1457","#880e4f","#f3e5f5","#e1bee7","#ce93d8","#ba68c8","#ab47bc","#9c27b0","#8e24aa","#7b1fa2","#6a1b9a","#4a148c","#ede7f6","#d1c4e9","#b39ddb","#9575cd","#7e57c2","#673ab7","#5e35b1","#512da8","#4527a0","#311b92","#e8eaf6","#c5cae9","#9fa8da","#7986cb","#5c6bc0","#3f51b5","#3949ab","#303f9f","#283593","#1a237e","#e3f2fd","#bbdefb","#90caf9","#64b5f6","#42a5f5","#2196f3","#1e88e5","#1976d2","#1565c0","#0d47a1","#e1f5fe","#b3e5fc","#81d4fa","#4fc3f7","#29b6f6","#03a9f4","#039be5","#0288d1","#0277bd","#01579b","#e0f7fa","#b2ebf2","#80deea","#4dd0e1","#26c6da","#00bcd4","#00acc1","#0097a7","#00838f","#006064","#e0f2f1","#b2dfdb","#80cbc4","#4db6ac","#26a69a","#009688","#00897b","#00796b","#00695c","#004d40","#e8f5e9","#c8e6c9","#a5d6a7","#81c784","#66bb6a","#4caf50","#43a047","#388e3c","#2e7d32","#1b5e20","#f1f8e9","#dcedc8","#c5e1a5","#aed581","#9ccc65","#8bc34a","#7cb342","#689f38","#558b2f","#33691e","#f9fbe7","#f0f4c3","#e6ee9c","#dce775","#d4e157","#cddc39","#c0ca33","#afb42b","#9e9d24","#827717","#fffde7","#fff9c4","#fff59d","#fff176","#ffee58","#ffeb3b","#fdd835","#fbc02d","#f9a825","#f57f17","#fff8e1","#ffecb3","#ffe082","#ffd54f","#ffca28","#ffc107","#ffb300","#ffa000","#ff8f00","#ff6f00","#fff3e0","#ffe0b2","#ffcc80","#ffb74d","#ffa726","#ff9800","#fb8c00","#f57c00","#ef6c00","#e65100","#fbe9e7","#ffccbc","#ffab91","#ff8a65","#ff7043","#ff5722","#f4511e","#e64a19","#d84315","#bf360c","#efebe9","#d7ccc8","#bcaaa4","#a1887f","#8d6e63","#795548","#6d4c41","#5d4037","#4e342e","#3e2723","#fafafa","#f5f5f5","#eeeeee","#e0e0e0","#bdbdbd","#9e9e9e","#757575","#616161","#424242","#212121"]},_onOpen:function(){if(this._renderedColors)return;for(var colorBoxes=this.$.container.querySelectorAll(".color"),i=0;i<colorBoxes.length;i++){colorBoxes[i].style.color=colorBoxes[i].innerHTML}this._renderedColors=!0},_addOverflowClass:function(){this.$.container.toggleClass("opened",!0)},_removeOverflowClass:function(){this.$.container.toggleClass("opened",!1)},_onColorTap:function(event){var item=event.detail.item,color=item.style.color;this.color=-1===color.indexOf("rgb")?color:this._rgbToHex(color);this.fire("color-picker-selected",{color:this.color})},_colorChanged:function(){this.$.iconButton.style.color=this.color},_colorListChanged:function(){if(this.color&&""!==this.color&&-1===this.colorList.indexOf(this.color)&&-1===this.colorList.indexOf((this.color+"").toLowerCase())){this.color=this.colorList[0]}this._updateSize()},_columnCountChanged:function(){this._updateSize()},_rgbToHex:function(rgb){var split=rgb.split("(")[1].split(")")[0].split(",");if(3!=split.length)return"";var bin=split[0]<<16|split[1]<<8|split[2];return function(h){return"#"+Array(7-h.length).join("0")+h}(bin.toString(16).toLowerCase())},_updateSize:function(){var sizeOfAColorDiv=this.getComputedStyleValue("--paper-swatch-picker-color-size");if(!sizeOfAColorDiv||""==sizeOfAColorDiv){sizeOfAColorDiv=20}else{sizeOfAColorDiv=sizeOfAColorDiv.replace("px","")}var rowCount=Math.ceil(this.colorList.length/this.columnCount);this.$.container.style.height=rowCount*sizeOfAColorDiv+"px";this.$.container.style.width=this.columnCount*sizeOfAColorDiv+"px";this._renderedColors=!1}});const ColorInputBase=class extends utilsMixin(SerializableElement){static get is(){return"color-input"}static get properties(){return{title:String,icon:String,params:{type:Object,value:{}},columnSize:{type:Array}}}getName(){return this.e.formName}validate(){if(this.e.required&&!this.getValue()){return new this.Validation(!1,"invalid")}return new this.Validation(!0,"valid")}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}init(pElement,loader){super.init(pElement,loader);const self=this;self.title=ColorInputBase.toTitleCase(pElement.name);this.value=pElement.defaultValue||"#212121"}};var colorInput={ColorInputBase:ColorInputBase};const ColorInputStyles=css`

`;var colorInputCss={ColorInputStyles:ColorInputStyles};class ColorInput extends ColorInputBase{createRenderRoot(){return this}renderDefault(){return html$1`
           
           <div class="column">
 <div class="field">
 ${this.title} 
        <paper-swatch-picker id="input" color="${this.value}"></paper-swatch-picker>
        </div>
        </div>
        `}static get properties(){return{}}getInput(){return this.qs("#input")}getValue(){return this.getInput().color}valid(){}invalid(){}firstUpdated(changedProperties){super.firstUpdated(changedProperties)}}customElements.define(ColorInput.is,ColorInput);export{colorInput as $colorInput,colorInputCss as $colorInputCss,ColorInputBase,ColorInputStyles};