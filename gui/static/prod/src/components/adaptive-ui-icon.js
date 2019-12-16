import{LitElement,html}from"../../node_modules/lit-element/lit-element.js";import{directive}from"../../node_modules/lit-html/lit-html.js";import{Logger}from"../core/logger.js";const _DEFAULT_ICONSET="icons",resolvePromise=directive(promise=>part=>{Promise.resolve(promise).then(resolvedValue=>{part.setValue(resolvedValue);part.commit()})});class AdaptiveUiIcon extends LitElement{render(){return html`
        <svg viewBox="0 0 24 24" 
             preserveAspectRatio="xMidYMid meet" 
             focusable="false" 
             style="pointer-events: none; display: block; width: 100%; height: 100%;">
             <g>${resolvePromise(this._iconChanged(this.icon))}</g>
        </svg>
    <style>
      :host {
        /* @apply --layout-inline;*/
        display:flex;
        align-items: center;
        /* @apply --layout-center-center; */
        justify-content: center;
        
        position: relative;
        vertical-align: middle;
        fill: var(--adaptive-ui-icon-fill-color, rgb(255, 255, 255););
        stroke: var(--adaptive-ui-icon-stroke-color, none);
        width: var(--adaptive-ui-icon-width, 24px);
        height: var(--adaptive-ui-icon-height, 24px);
        /* @apply --iron-icon; */
      }

      :host([hidden]) {
        display: none;
      }
    </style>
    `}static get properties(){return{icon:{type:String},theme:{type:String},src:{type:String}}}firstUpdated(){this._iconChanged(this.icon)}_iconChanged(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||_DEFAULT_ICONSET;return this._updateIcon()}_usesIconset(){return this.icon||!this.src}_updateIcon(){return new Promise(resolve=>{if(this._usesIconset()){if(""===this._iconName){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName){const moduleSpecifier=`../themes/${window.THEME}/icons/${this._iconsetName}.js`;Logger.i.debug("loading module:"+moduleSpecifier);import(moduleSpecifier).then(module=>{if(this._iconName)resolve(module.icons[this._iconName])})}}})}}customElements.define("adaptive-ui-icon",AdaptiveUiIcon);