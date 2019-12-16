import{css,html}from"../../../../node_modules/lit-element/lit-element.js";import{EListBase}from"../../../components/e-list.js";import{register}from"../register.js";class EList extends EListBase{static get is(){return"e-list"}static get properties(){return{oe:Array}}render(){return html`
    
    <style>
    element-loader{
      padding-top: 2px;
      padding-bottom: 10px;
      margin:0px;
      display: block;
    }
    .invalid-e-l{
        border: 1px solid red;
    }
    </style>
    <div class="columns is-multiline">
    
    ${this.oe.map(el=>html`
    <element-loader
        class="column is-block ${this._gridClasses(el)}"
        id="${el.id}"
        .element="${el}"
        .pl="${this}"></element-loader>  
    `)}
    </div>
    `}elementLoaders(){return this.shadowRoot.querySelectorAll("element-loader")}_gridClasses(el){const grid=super._gridClasses(el),grids=grid.split("|");try{return`is-${Math.floor(+(grids[0]/2))}`}catch(e){return"is-12"}}}register(EList);