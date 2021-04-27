import{css,html,SectionPElementDsc}from"../../../../../components/adaptive-ui.js";const ListElementStyles=css`
    .card {
        widht:100%;
        padding:16px;
        border-radius:3px;
    }
    .name {
        color: #174A84;
        font-weight:bold;
        font-size:22px;
        font-family:Lato;
    }
    ul {
        width:100%;
        padding-left:5px;
        margin-top:10px;
    }
    li {
        color: #174A84;
        font-family:Lato;
    }
`;var listElementCss={ListElementStyles:ListElementStyles};class ListElement extends SectionPElementDsc{static get styles(){return[ListElementStyles,css`
              :host {
              display: block;
            }
          `]}constructor(){super()}render(){return html`
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
        <div class="card">
            <h2 class="name">${this.e.name}</h2>
            <ul>
              ${this.rows.map(row=>html`<li>${row[0]}:&emsp;${row[1]}</li>`)}
            </ul>
        </div>
    `}static get is(){return"list-element"}}customElements.define(ListElement.is,ListElement);var listElement={ListElement:ListElement};export{listElementCss as $listElementCss,listElement as $listElement,ListElementStyles,ListElement};