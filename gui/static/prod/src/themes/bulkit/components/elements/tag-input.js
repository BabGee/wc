import{html,TagInputBase,SharedStyles}from"../../../../components/adaptive-ui.js";class TagInput extends TagInputBase{renderDefault(){return html`
${SharedStyles}
    <style>
      .tagify {
          --tag-bg: #E5E5E5;
          --tag-hover: #D3E2E2;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: start;
          -webkit-align-items: flex-start;
          -ms-flex-align: start;
          align-items: flex-start;
          -webkit-flex-wrap: wrap;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          border: 1px solid #ddd;
          padding: 0;
          cursor: text;
          position: relative;
          -webkit-transition: .1s;
          -o-transition: .1s;
          transition: .1s
      }
      
      @-webkit-keyframes tags--bump {
          30% {
              -webkit-transform: scale(1.2);
              transform: scale(1.2)
          }
      }
      
      @keyframes tags--bump {
          30% {
              -webkit-transform: scale(1.2);
              transform: scale(1.2)
          }
      }
      
      .tagify:hover {
          border-color: #ccc
      }
      
      .tagify.tagify--focus {
          border-color: #85c8ea
      }
      
      .tagify[readonly] {
          cursor: default
      }
      
      .tagify[readonly] > .tagify__input {
          visibility: hidden;
          width: 0;
          margin: 5px 0
      }
      
      .tagify[readonly] .tagify__tag__removeBtn {
          display: none
      }
      
      .tagify[readonly] .tagify__tag > div {
          padding: .3em .5em
      }
      
      .tagify[readonly] .tagify__tag > div::before {
          background: -webkit-linear-gradient(45deg, #d6d6d6 25%, transparent 25%, transparent 50%, #d6d6d6 50%, #d6d6d6 75%, transparent 75%, transparent) 0/5px 5px;
          background: -o-linear-gradient(45deg, #d6d6d6 25%, transparent 25%, transparent 50%, #d6d6d6 50%, #d6d6d6 75%, transparent 75%, transparent) 0/5px 5px;
          background: linear-gradient(45deg, #d6d6d6 25%, transparent 25%, transparent 50%, #d6d6d6 50%, #d6d6d6 75%, transparent 75%, transparent) 0/5px 5px;
          -webkit-box-shadow: none;
          box-shadow: none
      }
      
      .tagify + input, .tagify + textarea {
          border: 0;
          display: none
      }
      
      .tagify__tag {
          display: inline-block;
          margin: 5px 0 5px 5px;
          position: relative;
          z-index: 1;
          cursor: default;
          -webkit-transition: .13s ease-out;
          -o-transition: .13s ease-out;
          transition: .13s ease-out
      }
      
      .tagify__tag.tagify--editable > div::before {
          -webkit-box-shadow: 0 0 0 2px #d3e2e2 inset !important;
          box-shadow: 0 0 0 2px #d3e2e2 inset !important;
          -webkit-box-shadow: 0 0 0 2px var(--tag-hover) inset !important;
          box-shadow: 0 0 0 2px var(--tag-hover) inset !important
      }
      
      .tagify__tag.tagify--editable.tagify--invalid > div::before {
          -webkit-box-shadow: 0 0 0 2px #d39494 inset !important;
          box-shadow: 0 0 0 2px #d39494 inset !important
      }
      
      .tagify__tag > div {
          vertical-align: top;
          position: relative;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          max-width: 100%;
          padding: .3em .5em;
          color: #000;
          border-radius: 3px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-transition: .13s ease-out;
          -o-transition: .13s ease-out;
          transition: .13s ease-out;
          padding-right: 1.5em
      }
      
      .tagify__tag > div > * {
          white-space: nowrap;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          display: inline-block;
          vertical-align: top
      }
      
      .tagify__tag > div > [contenteditable] {
          outline: 0
      }
      
      .tagify__tag > div::before {
          content: '';
          position: absolute;
          border-radius: inherit;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          -webkit-box-shadow: 0 0 0 16px #e5e5e5 inset;
          box-shadow: 0 0 0 16px #e5e5e5 inset;
          -webkit-box-shadow: 0 0 0 16px var(--tag-bg) inset;
          box-shadow: 0 0 0 16px var(--tag-bg) inset;
          z-index: -1;
          pointer-events: none;
          -webkit-transition: 120ms ease;
          -o-transition: 120ms ease;
          transition: 120ms ease;
          -webkit-animation: .3s tags--bump 1 ease-out;
          animation: .3s tags--bump 1 ease-out
      }
      
      .tagify__tag:hover:not([readonly]) div::before {
          top: -2px;
          right: -2px;
          bottom: -2px;
          left: -2px;
          -webkit-box-shadow: 0 0 0 16px #d3e2e2 inset;
          box-shadow: 0 0 0 16px #d3e2e2 inset;
          -webkit-box-shadow: 0 0 0 16px var(--tag-hover) inset;
          box-shadow: 0 0 0 16px var(--tag-hover) inset
      }
      
      .tagify__tag.tagify--noAnim {
          -webkit-animation: none;
          animation: none
      }
      
      .tagify__tag.tagify--hide {
          width: 0 !important;
          padding-left: 0;
          padding-right: 0;
          margin-left: 0;
          margin-right: 0;
          opacity: 0;
          -webkit-transform: scale(0);
          -ms-transform: scale(0);
          transform: scale(0);
          -webkit-transition: .3s;
          -o-transition: .3s;
          transition: .3s;
          pointer-events: none
      }
      
      .tagify__tag.tagify--mark div::before {
          -webkit-animation: none;
          animation: none
      }
      
      .tagify__tag.tagify--notAllowed div > span {
          opacity: .5
      }
      
      .tagify__tag.tagify--notAllowed div::before {
          -webkit-box-shadow: 0 0 0 20px rgba(211, 148, 148, .44) inset !important;
          box-shadow: 0 0 0 20px rgba(211, 148, 148, .44) inset !important;
          -webkit-transition: .2s;
          -o-transition: .2s;
          transition: .2s
      }
      
      .tagify__tag[readonly] .tagify__tag__removeBtn {
          display: none
      }
      
      .tagify__tag[readonly] > div {
          padding: .3em .5em
      }
      
      .tagify__tag[readonly] > div::before {
          background: -webkit-linear-gradient(45deg, #d6d6d6 25%, transparent 25%, transparent 50%, #d6d6d6 50%, #d6d6d6 75%, transparent 75%, transparent) 0/5px 5px;
          background: -o-linear-gradient(45deg, #d6d6d6 25%, transparent 25%, transparent 50%, #d6d6d6 50%, #d6d6d6 75%, transparent 75%, transparent) 0/5px 5px;
          background: linear-gradient(45deg, #d6d6d6 25%, transparent 25%, transparent 50%, #d6d6d6 50%, #d6d6d6 75%, transparent 75%, transparent) 0/5px 5px;
          -webkit-box-shadow: none;
          box-shadow: none
      }
      
      .tagify__tag__removeBtn {
          font: 14px/16px Serif;
          width: 14px;
          height: 14px;
          text-align: center;
          border-radius: 50px;
          position: absolute;
          z-index: 1;
          right: calc(.5em - 2px);
          top: 50%;
          cursor: pointer;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          -webkit-transition: .2s ease-out;
          -o-transition: .2s ease-out;
          transition: .2s ease-out
      }
      
      .tagify__tag__removeBtn::after {
          content: "\\00D7"
      }
      
      .tagify__tag__removeBtn:hover {
          color: #fff;
          background: #c77777
      }
      
      .tagify__tag__removeBtn:hover + div > span {
          opacity: .5
      }
      
      .tagify__tag__removeBtn:hover + div::before {
          -webkit-box-shadow: 0 0 0 20px rgba(211, 148, 148, .3) inset !important;
          box-shadow: 0 0 0 20px rgba(211, 148, 148, .3) inset !important;
          -webkit-transition: .2s;
          -o-transition: .2s;
          transition: .2s
      }
      
      .tagify__input {
          display: block;
          min-width: 110px;
          margin: 5px;
          padding: .3em .5em;
          position: relative
      }
      
      .tagify__input:empty::before {
          -webkit-transition: .2s ease-out;
          -o-transition: .2s ease-out;
          transition: .2s ease-out;
          opacity: .5;
          -webkit-transform: none;
          -ms-transform: none;
          transform: none
      }
      
      .tagify__input:focus {
          outline: 0
      }
      
      .tagify__input:focus::before {
          -webkit-transition: .2s ease-out;
          -o-transition: .2s ease-out;
          transition: .2s ease-out;
          opacity: 0;
          -webkit-transform: translatex(6px);
          -ms-transform: translatex(6px);
          transform: translatex(6px)
      }
      
      @supports (-moz-appearance:none) {
          .tagify__input:focus::before {
              display: none
          }
      }
      
      .tagify__input:focus:empty::before {
          -webkit-transition: .2s ease-out;
          -o-transition: .2s ease-out;
          transition: .2s ease-out;
          opacity: .3;
          -webkit-transform: none;
          -ms-transform: none;
          transform: none
      }
      
      @supports (-moz-appearance:none) {
          .tagify__input:focus:empty::before {
              display: inline-block
          }
      }
      
      .tagify__input::before {
          content: attr(data-placeholder);
          line-height: 1.8;
          position: absolute;
          top: 0;
          z-index: 1;
          color: #000;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0
      }
      
      @supports (-moz-appearance:none) {
          .tagify__input::before {
              line-height: inherit;
              position: relative
          }
      }
      
      .tagify__input::after {
          content: attr(data-suggest);
          color: #000;
          opacity: .3;
          pointer-events: none
      }
      
      .tagify__input .tagify__tag {
          margin: 0 2.5px
      }
      
      .tagify__input .tagify__tag > div {
          padding-top: 0;
          padding-bottom: 0
      }
      
      .tagify__input .tagify__tag > div::before {
          top: -3px;
          bottom: -3px
      }
      
      .tagify__input .tagify__tag:hover:not([readonly]) > div::before {
          top: -3px;
          bottom: -3px;
          left: 0;
          right: 0
      }
      
      .tagify--mix .tagify__input {
          padding: 5px;
          margin: 0;
          width: 100%;
          height: 100%
      }
      
      .tagify__dropdown {
          position: absolute;
          z-index: 999;
          background: #fff;
          max-height: 300px;
          overflow: auto;
          border: 1px solid #85c8ea;
          -webkit-box-shadow: 0 2px 4px -2px rgba(0, 0, 0, .2);
          box-shadow: 0 2px 4px -2px rgba(0, 0, 0, .2);
          -webkit-box-sizing: border-box;
          box-sizing: border-box
      }
      
      .tagify__dropdown__item {
          -webkit-box-sizing: inherit;
          box-sizing: inherit;
          padding: .35em .6em;
          margin: 2px;
          cursor: pointer;
          border-radius: 3px;
          position: relative
      }
      
      .tagify__dropdown__item--active {
          background: #e5e5e5
      }
      
      .tagify__dropdown__item:active {
          background: #f2f2f2
      }
    </style>
    
    <style>
    
    .tagify__dropdown.extra-properties .tagify__dropdown__item > img{
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    transform: scale(.75);
    margin-right: 5px;
    border-radius: 2px;
    transition: .12s ease-out;
}

.tagify__dropdown.extra-properties .tagify__dropdown__item:hover > img{
    transform: none;
    margin-right: 12px;
}

.tagify.countries .tagify__input{ min-width:175px; }

.tagify.countries tag{ white-space:nowrap; }
.tagify.countries tag img{
    display: inline-block;
    vertical-align: middle;
    height: 16px;
    margin-right: 3px;
    border-radius: 2px;
}
</style>
    
 <div class="column">
<div class="field" style="margin-top: 2px">
<div class="control  ">
    <input id="input" class="countries " placeholder="Write Some ${this.title} ...">
    </div></div></div>
    `}constructor(){super();this.isIE=window.document.documentMode;this.TEXTS={empty:"empty",exceed:"number of tags exceeded",pattern:"pattern mismatch",duplicate:"already exists",notAllowed:"not allowed"};this.DEFAULTS={delimiters:",",pattern:null,maxTags:1/0,callbacks:{},addTagOnBlur:!0,duplicates:!1,whitelist:[],blacklist:[],enforceWhitelist:!1,keepInvalidTags:!1,autoComplete:!0,mixTagsAllowedAfter:/,|\.|\:|\s/,backspace:!0,skipInvalid:!1,transformTag:()=>{},dropdown:{classname:"",enabled:2,maxItems:10,itemTemplate:"",fuzzySearch:!0}};this.templates={wrapper(input,settings){return`<tags class="tagify ${settings.mode?"tagify--mix":""} ${input.className}"
                          ${settings.readonly?"readonly aria-readonly=\"true\"":"aria-haspopup=\"true\" aria-expanded=\"false\""}
                          role="tagslist">
                <span contenteditable data-placeholder="${input.placeholder||"&#8203;"}" aria-placeholder="${input.placeholder||""}"
                      class="tagify__input"
                      role="textbox"
                      aria-multiline="false"></span>
            </tags>`},tag(v,tagData){return`<tag title='${tagData.title||v}'
                         contenteditable='false'
                         spellcheck='false'
                         class='tagify__tag ${tagData.class?tagData.class:""}'
                         ${this.getAttributes(tagData)}>
                <x title='' class='tagify__tag__removeBtn' role='button' aria-label='remove tag'></x>
                <div>
                    <span class='tagify__tag-text'>${v}</span>
                </div>
            </tag>`},dropdownItem(item){var sanitizedValue=(item.value||item).replace(/`|'/g,"&#39;");return`<div ${this.getAttributes(item)}
                         class='tagify__dropdown__item ${item.class?item.class:""}'
                         tabindex="0"
                         role="menuitem"
                         aria-labelledby="dropdown-label">${sanitizedValue}</div>`}};this.customEventsList=["click","add","remove","invalid","input","edit"];this.state={};this.value=[];this.listeners={};this.DOM={};this.events={customBinding(){this.customEventsList.forEach(name=>{this.on(name,this.settings.callbacks[name])})},binding(bindUnbind=!0){var _CB=this.events.callbacks,_CBR,action=bindUnbind?"addEventListener":"removeEventListener";if(bindUnbind&&!this.listeners.main){this.DOM.input.addEventListener(this.isIE?"keydown":"input",_CB[this.isIE?"onInputIE":"onInput"].bind(this));if(this.settings.isJQueryPlugin){$(this.DOM.originalInput).on("tagify.removeAllTags",this.removeAllTags.bind(this))}}_CBR=this.listeners.main=this.listeners.main||{paste:["input",_CB.onPaste.bind(this)],focus:["input",_CB.onFocusBlur.bind(this)],blur:["input",_CB.onFocusBlur.bind(this)],keydown:["input",_CB.onKeydown.bind(this)],click:["scope",_CB.onClickScope.bind(this)],dblclick:["scope",_CB.onDoubleClickScope.bind(this)]};for(var eventName in _CBR){this.DOM[_CBR[eventName][0]][action](eventName,_CBR[eventName][1])}},callbacks:{onFocusBlur(e){var s=e.target.textContent.trim();if("mix"==this.settings.mode)return;if("focus"==e.type){this.DOM.scope.classList.add("tagify--focus");if(0===this.settings.dropdown.enabled){this.dropdown.show.call(this)}}else if("blur"==e.type){this.DOM.scope.classList.remove("tagify--focus");s&&this.settings.addTagOnBlur&&this.addTags(s,!0).length}else{this.DOM.input.removeAttribute("style");this.dropdown.hide.call(this)}},onKeydown(e){var s=e.target.textContent,lastTag,tags;if("mix"==this.settings.mode){switch(e.key){case"Backspace":var values=[];tags=this.DOM.input.children;setTimeout(()=>{[].forEach.call(tags,tagElm=>values.push(tagElm.getAttribute("value")));this.value=this.value.filter(d=>-1!=values.indexOf(d.value))},20);break;case"Enter":e.preventDefault();}return!0}switch(e.key){case"Backspace":if(""==s||8203==s.charCodeAt(0)){lastTag=this.DOM.scope.querySelectorAll("tag:not(.tagify--hide):not([readonly])");lastTag=lastTag[lastTag.length-1];if(!0===this.settings.backspace){this.removeTag(lastTag)}else if("edit"==this.settings.backspace){this.editTag(lastTag)}}break;case"Esc":case"Escape":this.input.set.call(this);e.target.blur();break;case"ArrowRight":case"Tab":if(!s)return!0;case"Enter":e.preventDefault();this.addTags(this.input.value,!0);}},onInput(e){var value=this.input.normalize.call(this),showSuggestions=value.length>=this.settings.dropdown.enabled;if("mix"==this.settings.mode){return this.events.callbacks.onMixTagsInput.call(this,e)}if(!value){this.input.set.call(this,"");return}if(this.input.value==value)return;this.input.set.call(this,value,!1);this.trigger("input",value);if(-1!=value.search(this.settings.delimiters)){if(this.addTags(value).length){this.input.set.call(this)}}else if(0<=this.settings.dropdown.enabled){this.dropdown[showSuggestions?"show":"hide"].call(this,value)}},onMixTagsInput(){var sel,range,split,tag,showSuggestions;if(this.maxTagsReached()){return!0}if(window.getSelection){sel=window.getSelection();if(0<sel.rangeCount){range=sel.getRangeAt(0).cloneRange();range.collapse(!0);range.setStart(window.getSelection().focusNode,0);split=range.toString().split(this.settings.mixTagsAllowedAfter);tag=split[split.length-1].match(this.settings.pattern);if(tag){this.state.tag={prefix:tag[0],value:tag.input.split(tag[0])[1]};tag=this.state.tag;showSuggestions=this.state.tag.value.length>=this.settings.dropdown.enabled}}}this.update2();this.trigger("input",this.extend({},this.state.tag,{textContent:this.DOM.input.textContent}));if(this.state.tag){this.dropdown[showSuggestions?"show":"hide"].call(this,this.state.tag.value)}},onInputIE(e){var _this=this;setTimeout(function(){_this.events.callbacks.onInput.call(_this,e)})},onPaste(){},onClickScope(e){var tagElm=e.target.closest("tag"),tagElmIdx;if("TAGS"==e.target.tagName){this.DOM.input.focus()}else if("X"==e.target.tagName){this.removeTag(e.target.parentNode)}else if(tagElm){tagElmIdx=this.getNodeIndex(tagElm);this.trigger("click",{tag:tagElm,index:tagElmIdx,data:this.value[tagElmIdx]})}},onEditTagInput(editableElm){var tagElm=editableElm.closest("tag"),tagElmIdx=this.getNodeIndex(tagElm),value=this.input.normalize(editableElm),isValid=value.toLowerCase()==editableElm.originalValue.toLowerCase()||this.validateTag(value);tagElm.classList.toggle("tagify--invalid",!0!==isValid);tagElm.isValid=isValid;this.trigger("input",{tag:tagElm,index:tagElmIdx,data:this.extend({},this.value[tagElmIdx],{newValue:value})})},onEditTagBlur(editableElm){var tagElm=editableElm.closest("tag"),tagElmIdx=this.getNodeIndex(tagElm),value=this.input.normalize(editableElm)||editableElm.originalValue,hasChanged=this.input.normalize(editableElm)!=editableElm.originalValue,isValid=tagElm.isValid,tagData={...this.value[tagElmIdx],value},clone;if(hasChanged){this.settings.transformTag.call(this,tagData);isValid=this.validateTag(tagData.value)}if(isValid!==void 0&&!0!==isValid){return}editableElm.textContent=tagData.value;this.value[tagElmIdx].value=tagData.value;this.update2();clone=editableElm.cloneNode(!0);clone.removeAttribute("contenteditable");tagElm.title=tagData.value;tagElm.classList.remove("tagify--editable");editableElm.parentNode.replaceChild(clone,editableElm);this.trigger("edit",{tag:tagElm,index:tagElmIdx,data:this.value[tagElmIdx]})},onEditTagkeydown(e){switch(e.key){case"Esc":case"Escape":e.target.textContent=e.target.originalValue;case"Enter":case"Tab":e.preventDefault();e.target.blur();}},onDoubleClickScope(e){var tagElm=e.target.closest("tag"),_s=this.settings;if("mix"!=_s.mode&&!_s.readonly&&!_s.enforceWhitelist&&tagElm&&!tagElm.classList.contains("tagify--editable")&&!tagElm.hasAttribute("readonly")){this.editTag(tagElm)}}}};this.input={value:"",set(s="",updateDOM=!0){this.input.value=s;if(updateDOM)this.DOM.input.innerHTML=s;if(!s)this.dropdown.hide.call(this);if(2>s.length)this.input.autocomplete.suggest.call(this,"");this.input.validate.call(this)},setRangeAtStartEnd(start=!1,node){var range,selection;if(!document.createRange)return;range=document.createRange();range.selectNodeContents(node||this.DOM.input);range.collapse(start);selection=window.getSelection();selection.removeAllRanges();selection.addRange(range)},validate(){var isValid=!this.input.value||this.validateTag.call(this,this.input.value);this.DOM.input.classList.toggle("tagify__input--invalid",!0!==isValid)},normalize(node=this.DOM.input){var v=node.innerText;if("settings"in this&&this.settings.delimiters){v=v.replace(/(?:\r\n|\r|\n)/g,this.settings.delimiters.source.charAt(1))}v=v.replace(/\s/g," ").replace(/^\s+/,"");return v},autocomplete:{suggest(s){if(!s||!this.input.value){this.DOM.input.removeAttribute("data-suggest")}else{this.DOM.input.setAttribute("data-suggest",s.substring(this.input.value.length))}},set(s){var dataSuggest=this.DOM.input.getAttribute("data-suggest"),suggestion=s||(dataSuggest?this.input.value+dataSuggest:null);if(suggestion){this.input.set.call(this,suggestion);this.input.autocomplete.suggest.call(this,"");this.dropdown.hide.call(this);this.input.setRangeAtStartEnd.call(this);return!0}return!1}}};this.dropdown={init(){this.DOM.dropdown=this.dropdown.build.call(this)},build(){var className=`tagify__dropdown ${this.settings.dropdown.classname}`.trim();return this.parseHTML(`<div class="${className}" role="menu"></div>`)},show(value){var listHTML;if(!this.settings.whitelist.length)return;this.suggestedListItems=this.dropdown.filterListItems.call(this,value);if(!this.suggestedListItems.length){this.input.autocomplete.suggest.call(this);this.dropdown.hide.call(this);return}listHTML=this.dropdown.createListHTML.call(this,this.suggestedListItems);this.DOM.dropdown.innerHTML=this.minify(listHTML);this.settings.enforceWhitelist&&this.dropdown.highlightOption.call(this,this.DOM.dropdown.querySelector(".tagify__dropdown__item"));this.dropdown.position.call(this);this.DOM.scope.setAttribute("aria-expanded",!0);if(!this.DOM.dropdown.parentNode!=document.body){document.body.appendChild(this.DOM.dropdown);this.events.binding.call(this,!1);this.dropdown.events.binding.call(this)}},hide(){if(!this.DOM.dropdown||this.DOM.dropdown.parentNode!=document.body)return;document.body.removeChild(this.DOM.dropdown);this.DOM.scope.setAttribute("aria-expanded",!1);window.removeEventListener("resize",this.dropdown.position);this.dropdown.events.binding.call(this,!1);this.events.binding.call(this)},position(){var rect=this.DOM.scope.getBoundingClientRect();this.DOM.dropdown.style.cssText="position:absolute;background:white;left: "+(rect.left+window.pageXOffset)+"px;                                                top: "+(rect.top+rect.height-1+window.pageYOffset)+"px;                                                width: "+rect.width+"px"},events:{binding(bindUnbind=!0){var _CBR=this.listeners.dropdown=this.listeners.dropdown||{position:this.dropdown.position.bind(this),onKeyDown:this.dropdown.events.callbacks.onKeyDown.bind(this),onMouseOver:this.dropdown.events.callbacks.onMouseOver.bind(this),onClick:this.dropdown.events.callbacks.onClick.bind(this)},action=bindUnbind?"addEventListener":"removeEventListener";window[action]("resize",_CBR.position);window[action]("keydown",_CBR.onKeyDown);window[action]("mousedown",_CBR.onClick);this.DOM.dropdown[action]("mouseover",_CBR.onMouseOver)},callbacks:{onKeyDown(e){var activeListElm=this.DOM.dropdown.querySelector("[class$='--active']"),selectedElm=activeListElm||this.DOM.dropdown.children[0],newValue="";switch(e.key){case"ArrowDown":case"ArrowUp":case"Down":case"Up":e.preventDefault();if(selectedElm){selectedElm=selectedElm[("ArrowUp"==e.key||"Up"==e.key?"previous":"next")+"ElementSibling"]}if(!selectedElm){selectedElm=this.DOM.dropdown.children["ArrowUp"==e.key||"Up"==e.key?this.DOM.dropdown.children.length-1:0]}this.dropdown.highlightOption.call(this,selectedElm,!0);break;case"Escape":case"Esc":this.dropdown.hide.call(this);break;case"ArrowRight":case"Tab":e.preventDefault();if(!this.input.autocomplete.set.call(this,selectedElm?selectedElm.textContent:null)){return!1}case"Enter":if(activeListElm){e.preventDefault();newValue=this.suggestedListItems[this.getNodeIndex(activeListElm)]||this.input.value;this.addTags([newValue],!0);this.dropdown.hide.call(this);return!1}}},onMouseOver(e){if(e.target.className.includes("__item")){this.dropdown.highlightOption.call(this,e.target)}},onClick(e){var onClickOutside=()=>this.dropdown.hide.call(this),value,listItemElm;if(0!=e.button||e.target==this.DOM.dropdown)return;if(e.target==document.documentElement)return onClickOutside();listItemElm=[e.target,e.target.parentNode].filter(a=>a.className.includes("tagify__dropdown__item"))[0];if(listItemElm){value=this.suggestedListItems[this.getNodeIndex(listItemElm)]||this.input.value;this.addTags([value],!0);this.dropdown.hide.call(this);setTimeout(()=>this.DOM.input.focus(),100)}else{onClickOutside()}}}},highlightOption(elm,adjustScroll){if(!elm)return;var className="tagify__dropdown__item--active",value;this.DOM.dropdown.querySelectorAll("[class$='--active']").forEach(activeElm=>{activeElm.classList.remove(className);activeElm.removeAttribute("aria-selected")});elm.classList.add(className);elm.setAttribute("aria-selected",!0);if(adjustScroll){elm.parentNode.scrollTop=elm.clientHeight+elm.offsetTop-elm.parentNode.clientHeight}if(this.settings.autoComplete&&!this.settings.dropdown.fuzzySearch){value=this.suggestedListItems[this.getNodeIndex(elm)].value||this.input.value;this.input.autocomplete.suggest.call(this,value)}},filterListItems(value){var list=[],whitelist=this.settings.whitelist,suggestionsCount=this.settings.dropdown.maxItems||1/0,whitelistItem,valueIsInWhitelist,whitelistItemValueIndex,searchBy,isDuplicate,i=0;if(!value){return whitelist.filter(item=>-1==this.isTagDuplicate(item.value||item)).slice(0,suggestionsCount)}for(;i<whitelist.length;i++){whitelistItem=whitelist[i]instanceof Object?whitelist[i]:{value:whitelist[i]};searchBy=((whitelistItem.searchBy||"")+" "+whitelistItem.value).toLowerCase();whitelistItemValueIndex=searchBy.indexOf(value.toLowerCase());valueIsInWhitelist=this.settings.dropdown.fuzzySearch?0<=whitelistItemValueIndex:0==whitelistItemValueIndex;isDuplicate=!this.settings.duplicates&&-1<this.isTagDuplicate(whitelistItem.value);if(valueIsInWhitelist&&!isDuplicate&&suggestionsCount--){list.push(whitelistItem)}if(0==suggestionsCount)break}return list},createListHTML(list){var getItem=this.settings.templates.dropdownItem.bind(this);return list.map(getItem).join("")}}}valid(){}invalid(){}getValue(){const input=this.qs("#input");if(input.value){const values=JSON.parse(input.value),value=values.map(item=>item.code).join(",");return value}}firstUpdated(changedProperties){super.firstUpdated(changedProperties);const self=this;this.limit=1e3;this.loadData().then(()=>{const wl=this.rows.map(item=>{return{value:item[1],code:item[0]}});self.settings.whitelist=wl});const input=this.qs("#input");this.applySettings(input,{delimiters:null,templates:{tag:function(v,tagData){try{return`<tag title='${v}' contenteditable='false' spellcheck="false" class='tagify__tag ${tagData.class?tagData.class:""}' ${this.getAttributes(tagData)}>
                        <x title='remove tag' class='tagify__tag__removeBtn'></x>
                        <div>
                            <span class='tagify__tag-text'>${v}</span>
                        </div>
                    </tag>`}catch(err){}}},enforceWhitelist:!0,whitelist:[],dropdown:{enabled:0,classname:"extra-properties",itemTemplate:function(tagData){try{return`<div class='tagify__dropdown__item ${tagData.class?tagData.class:""}'>
                            <img onerror="this.style.visibility = 'hidden'"
                                 src='https://lipis.github.io/flag-icon-css/flags/4x3/${tagData.code.toLowerCase()}.svg'>
                            <span>${tagData.value}</span>
                        </div>`}catch(err){}}},mapValueToProp:"code"});this.EventDispatcher(this);this.build(input);this.loadOriginalValues();this.events.customBinding.call(this);this.events.binding.call(this);input.autofocus&&this.DOM.input.focus()}applySettings(input,settings){var attr__whitelist=input.getAttribute("data-whitelist"),attr__blacklist=input.getAttribute("data-blacklist");this.DEFAULTS.templates=this.templates;this.DEFAULTS.dropdown.itemTemplate=this.templates.dropdownItem;this.settings=this.extend({},this.DEFAULTS,settings);this.settings.readonly=input.hasAttribute("readonly");if(this.isIE){this.settings.autoComplete=!1}if(attr__blacklist){attr__blacklist=attr__blacklist.split(this.settings.delimiters);if(attr__blacklist instanceof Array){this.settings.blacklist=attr__blacklist}}if(attr__whitelist){attr__whitelist=attr__whitelist.split(this.settings.delimiters);if(attr__whitelist instanceof Array){this.settings.whitelist=attr__whitelist}}if(input.pattern){try{this.settings.pattern=new RegExp(input.pattern)}catch(e){}}if(this.settings&&this.settings.delimiters){try{this.settings.delimiters=new RegExp("["+this.settings.delimiters+"]","g")}catch(e){}}}parseHTML(s){var parser=new DOMParser,node=parser.parseFromString(s.trim(),"text/html");return node.body.firstElementChild}escapeHTML(s){var text=document.createTextNode(s),p=document.createElement("p");p.appendChild(text);return p.innerHTML}build(input){var that=this,DOM=this.DOM,template=this.settings.templates.wrapper(input,this.settings);DOM.originalInput=input;DOM.scope=this.parseHTML(template);DOM.input=DOM.scope.querySelector("[contenteditable]");input.parentNode.insertBefore(DOM.scope,input);if(0<=this.settings.dropdown.enabled){this.dropdown.init.call(this)}}destroy(){this.DOM.scope.parentNode.removeChild(this.DOM.scope);this.dropdown.hide.call(this)}loadOriginalValues(value=this.DOM.originalInput.value){if(!value)return;this.removeAllTags();try{value=JSON.parse(value)}catch(err){}if("mix"==this.settings.mode){this.parseMixTags(value)}else{this.addTags(value).forEach(tag=>{tag&&tag.classList.add("tagify--noAnim")})}}extend(o,o1,o2){if(!(o instanceof Object))o={};copy(o,o1);if(o2){copy(o,o2)}function isObject(obj){var type=Object.prototype.toString.call(obj).split(" ")[1].slice(0,-1);return obj===Object(obj)&&"Array"!=type&&"Function"!=type&&"RegExp"!=type&&"HTMLUnknownElement"!=type}function copy(a,b){for(var key in b){if(b.hasOwnProperty(key)){if(isObject(b[key])){if(!isObject(a[key])){a[key]=Object.assign({},b[key])}else{copy(a[key],b[key])}}else{a[key]=b[key]}}}}return o}EventDispatcher(instance){var target=document.createTextNode("");this.off=function(name,cb){if(cb){target.removeEventListener.call(target,name,cb)}return this};this.on=function(name,cb){if(cb){target.addEventListener.call(target,name,cb)}return this};this.trigger=function(eventName,data){var e;if(!eventName)return;if(instance.settings.isJQueryPlugin){$(instance.DOM.originalInput).triggerHandler(eventName,[data])}else{try{e=new CustomEvent(eventName,{detail:data})}catch(err){console.warn(err)}target.dispatchEvent(e)}}}editTag(tagElm){var editableElm=tagElm.querySelector(".tagify__tag-text"),_CB=this.events.callbacks;if(!editableElm){console.warn("Cannot find element in Tag template: ",".tagify__tag-text");return}tagElm.classList.add("tagify--editable");editableElm.originalValue=editableElm.textContent;editableElm.setAttribute("contenteditable",!0);editableElm.addEventListener("blur",_CB.onEditTagBlur.bind(this,editableElm));editableElm.addEventListener("input",_CB.onEditTagInput.bind(this,editableElm));editableElm.addEventListener("keydown",e=>_CB.onEditTagkeydown.call(this,e));editableElm.focus()}getNodeIndex(node){var index=0;if(node){while(node=node.previousElementSibling){index++}}return index}isTagDuplicate(s){return this.value.findIndex(item=>s.trim()===item.value)}getTagIndexByValue(value){var result=[];this.DOM.scope.querySelectorAll("tag").forEach((tagElm,i)=>{if(tagElm.textContent.trim().toLowerCase()==value.toLowerCase()){result.push(i)}});return result}getTagElmByValue(value){var tagIdx=this.getTagIndexByValue(value)[0];return this.DOM.scope.querySelectorAll("tag")[tagIdx]}markTagByValue(value,tagElm){tagElm=tagElm||this.getTagElmByValue(value);if(tagElm){tagElm.classList.add("tagify--mark");return tagElm}return!1}isTagBlacklisted(v){v=v.toLowerCase().trim();return this.settings.blacklist.filter(x=>v==x.toLowerCase()).length}isTagWhitelisted(v){return this.settings.whitelist.some(item=>{if((item.value||item).toLowerCase()===v.toLowerCase()){return!0}})}validateTag(s){var value=s.trim(),result=!0;if(!value){result=this.TEXTS.empty}else if(this.settings.pattern&&!this.settings.pattern.test(value)){result=this.TEXTS.pattern}else if(!this.settings.duplicates&&-1!==this.isTagDuplicate(value)){result=this.TEXTS.duplicate}else if(this.isTagBlacklisted(value)||this.settings.enforceWhitelist&&!this.isTagWhitelisted(value)){result=this.TEXTS.notAllowed}return result}maxTagsReached(){if(this.value.length>=this.settings.maxTags){return this.TEXTS.exceed}return!1}normalizeTags(tagsItems){var{whitelist,delimiters,mode}=this.settings,whitelistWithProps=whitelist?whitelist[0]instanceof Object:!1,isCollection=tagsItems instanceof Array&&tagsItems[0]instanceof Object&&"value"in tagsItems[0],temp=[];if(isCollection){return tagsItems}if("number"==typeof tagsItems){tagsItems=tagsItems.toString()}if("string"==typeof tagsItems){if(!tagsItems.trim())return[];tagsItems=tagsItems.split(delimiters).filter(n=>n).map(v=>({value:v.trim()}))}else if(tagsItems instanceof Array){tagsItems=tagsItems.map(v=>({value:v.trim()}))}if(whitelistWithProps){tagsItems.forEach(tag=>{var matchObj=whitelist.filter(WL_item=>WL_item.value.toLowerCase()==tag.value.toLowerCase());if(matchObj[0]){temp.push(matchObj[0])}else if("mix"!=mode){temp.push(tag)}});return temp}return tagsItems}parseMixTags(s){s.split(this.settings.mixTagsAllowedAfter).filter(item=>item.match(this.settings.pattern)).forEach(tag=>{var value=tag.replace(this.settings.pattern,""),tagData;if(this.isTagWhitelisted(value)&&!this.settings.duplicates&&-1==this.isTagDuplicate(value)){tagData=this.normalizeTags.call(this,value)[0];s=this.replaceMixStringWithTag(s,tag,tagData).s}});this.DOM.input.innerHTML=s;this.update2();return s}replaceMixStringWithTag(s,tag,tagData,tagElm){if(tagData&&s&&-1!=s.indexOf(tag)){tagElm=this.createTagElem(tagData);this.value.push(tagData);s=s.replace(tag,tagElm.outerHTML+"&#8288;")}return{s,tagElm}}addMixTag(tagData){if(!tagData||!this.state.tag)return;var tag=this.state.tag.prefix+this.state.tag.value,iter=document.createNodeIterator(this.DOM.input,NodeFilter.SHOW_TEXT),textnode,tagElm,idx,maxLoops=100,replacedNode;while(textnode=iter.nextNode()){if(!maxLoops--)break;if(textnode.nodeType===Node.TEXT_NODE){idx=textnode.nodeValue.indexOf(tag);if(-1==idx)continue;replacedNode=textnode.splitText(idx);tagElm=this.createTagElem(tagData);replacedNode.nodeValue=replacedNode.nodeValue.replace(tag,"");textnode.parentNode.insertBefore(tagElm,replacedNode);tagElm.insertAdjacentHTML("afterend","&#8288;")}}if(tagElm){this.value.push(tagData);this.update2();this.trigger("add",this.extend({},{index:this.value.length,tag:tagElm},tagData))}this.state.tag=null}addTags(tagsItems,clearInput,skipInvalid=this.settings.skipInvalid){var tagElems=[];if(!tagsItems||!tagsItems.length){console.warn("[addTags]","no tags to add:",tagsItems);return tagElems}tagsItems=this.normalizeTags.call(this,tagsItems);if("mix"==this.settings.mode){return this.addMixTag(tagsItems[0])}this.DOM.input.removeAttribute("style");tagsItems.forEach(tagData=>{var tagValidation,tagElm,tagElmParams={};tagData=Object.assign({},tagData);this.settings.transformTag.call(this,tagData);tagValidation=this.maxTagsReached()||this.validateTag.call(this,tagData.value);if(!0!==tagValidation){if(skipInvalid){return}tagElmParams["aria-invalid"]=!0;tagElmParams.class=(tagData.class||"")+" tagify--notAllowed";tagElmParams.title=tagValidation;this.markTagByValue(tagData.value);this.trigger("invalid",{data:tagData,index:this.value.length,message:tagValidation})}tagElmParams.role="tag";if(tagData.readonly){tagElmParams["aria-readonly"]=!0}tagElm=this.createTagElem(this.extend({},tagData,tagElmParams));tagElems.push(tagElm);appendTag.call(this,tagElm);if(!0===tagValidation){this.value.push(tagData);this.update2();this.DOM.scope.classList.toggle("hasMaxTags",this.value.length>=this.settings.maxTags);this.trigger("add",{tag:tagElm,index:this.value.length-1,data:tagData})}else if(!this.settings.keepInvalidTags){setTimeout(()=>{this.removeTag(tagElm,!0)},1e3)}});if(tagsItems.length&&clearInput){this.input.set.call(this)}function appendTag(tagElm){var insertBeforeNode=this.DOM.scope.lastElementChild;if(insertBeforeNode===this.DOM.input){this.DOM.scope.insertBefore(tagElm,insertBeforeNode)}else{this.DOM.scope.appendChild(tagElm)}}return tagElems}minify(html$$1){return html$$1.replace(/>[\r\n ]+</g,"><")}createTagElem(tagData){var tagElm,v=this.escapeHTML(tagData.value),template=this.settings.templates.tag.call(this,v,tagData);if(this.settings.readonly){tagData.readonly=!0}template=this.minify(template);tagElm=this.parseHTML(template);return tagElm}removeTag(tagElm,silent,tranDuration=250){if(!tagElm)return;if("string"==typeof tagElm){tagElm=this.getTagElmByValue(tagElm)}if(!(tagElm instanceof HTMLElement)){return}var tagData,tagIdx=this.getNodeIndex(tagElm);if(tranDuration&&10<tranDuration)animation();else removeNode();if(!silent){tagData=this.value.splice(tagIdx,1)[0];this.update2();this.trigger("remove",{tag:tagElm,index:tagIdx,data:tagData})}function animation(){tagElm.style.width=parseFloat(window.getComputedStyle(tagElm).width)+"px";document.body.clientTop;tagElm.classList.add("tagify--hide");setTimeout(removeNode,400)}function removeNode(){if(!tagElm.parentNode)return;tagElm.parentNode.removeChild(tagElm)}}removeAllTags(){this.value=[];this.update2();Array.prototype.slice.call(this.DOM.scope.querySelectorAll("tag")).forEach(elm=>elm.parentNode.removeChild(elm))}getAttributes(data){if("[object Object]"!=Object.prototype.toString.call(data)){return""}var keys=Object.keys(data),s="",propName,i;for(i=keys.length;i--;){propName=keys[i];if("class"!=propName&&data.hasOwnProperty(propName)){s+=" "+propName+(data[propName]?`="${data[propName]}"`:"")}}return s}update2(){this.DOM.originalInput.value="mix"==this.settings.mode?this.DOM.input.textContent:JSON.stringify(this.value)}_onFocus(){if(this.qs("#filter").focused){this.focused=!0}}remove(tag){if(null===this.tags){return}var tagIndex=this.tags.indexOf(tag);if(-1<tagIndex){this.tags.splice(tagIndex,1);this.qs("#suggestions").selectedValues=[]}}_onTagRemoveTapped(e){e.preventDefault();this.remove(e.currentTarget.tag)}_computeLabel(tagId,dataFromApi){if(tagId===void 0||dataFromApi===void 0){return}const tag=dataFromApi.filter(function(item){return item.id==tagId})[0];return tag.name}init(pElement,loader){super.init(pElement,loader)}}window.customElements.define(TagInput.is,TagInput);