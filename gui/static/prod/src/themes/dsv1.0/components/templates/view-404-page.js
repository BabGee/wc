import{html}from"../../../../../node_modules/lit-element/lit-element.js";import{View404Base}from"../../../../components/templates/view-404.js";import"../snack-bar.js";class View404Page extends View404Base{render(){return html`
      
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>The page you're looking for doesn't seem to exist. Head back
           <a href="/">home</a> and try again?
        </p>
      </section>
      <snack-bar id="snack-bar" ?active="${this._snackbarOpened}"  context="${this._snackbarContext}"> ${this._snackbarTitle} ${this._snackbarMessage}</snack-bar>

    `}}window.customElements.define(View404Page.is,View404Page);