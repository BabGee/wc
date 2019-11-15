import{html,View404Base,SharedStyles}from"../../../../components/adaptive-ui.js";class View404Page extends View404Base{render(){return html`
      ${SharedStyles}
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>The page you're looking for doesn't seem to exist. Head back
           <a href="/">home</a> and try again?
        </p>
      </section>
    `}}window.customElements.define(View404Page.is,View404Page);