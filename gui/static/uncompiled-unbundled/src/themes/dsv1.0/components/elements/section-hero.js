import { html } from "../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementBase } from "../../../../elements/base/section-pelement.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

class SectionHero extends SectionPElementBase {
  renderDefault() {
    return html`
    <style>
.lead {
    font-size: 18px;
    font-weight: 400;
}
/*top background*/
.intro-header { 
    /* padding-top: 50px; If you're making other pages, make sure there is 50px of padding to make sure the navbar doesn't overlap content! */
    /* padding-bottom: 50px; */
    text-align: center;
    background: url('https://40.media.tumblr.com/1b916597d3e174399cb7adadddb66ede/tumblr_nt5uk4psl31ud7rr3o1_1280.jpg') no-repeat center center fixed;
    background-size: cover;
    height: 505px;
}
.bg-overlay {
  background:rgba(0,0,0, 0.6);
  height: 505px;
}

.intro-message {
    position: relative;
    padding-top: 20%;
    padding-bottom: 20%;
}
/*Big header*/
.intro-message > h1 {
    margin-top: -50px;
    /* text-shadow: 2px 1px 2px #000; */
    font-size: 5em;
    color: rgba(255, 255, 255, 1);
}

.intro-divider {
    width: 400px;
    border-top: 1px solid #f8f8f8;
    border-bottom: 1px solid #fff;
}
/*small header*/
.intro-message > h3 {
    /* text-shadow: 1px 1px 1px rgba(0,0,0,0.6); */
  color: #fff;
}
/*line*/
hr.intro-divider {
  border: 1px outset rgba(255, 255, 255, 0.2);
  box-shadow: 1px 1px 1px rgba(0,0,0,0.6);
  width: 100%;
}
/* social buttons */
.btn {
  display: inline-block;
  color: #000;
  border: 2px outset rgba(0, 0, 0, 0.9);
  background: #C0C0C0;
  text-shadow: 1px 1px 1px rgba(0,0,0, 20);
  box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
  letter-spacing: 2px;
  transition: 0.2s;
}

.btn:hover {
	color: #fff;
  border: 2px outset rgba(0, 0, 0, 0.9);
  background: rgba(0,0,0, 0.9);
  transform:scale(1.1);
  transition: 0.2s;
  text-shadow: 1px 1px 1px rgba(0,0,0, 20);
  box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
  letter-spacing: 2px;
}
.button-cta a{
  background: #23d160;
  color: #fff;
  margin-top: 40px;
}

    </style>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.css" type="text/css"/>

    <a name="home"></a>
    <div class="intro-header">
      <div class="bg-overlay">
        <div class="container">
  

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>This is header text</h1>
                        <h3>Where Awesomeness Is Brought To Life.</h3>
                        <!-- <hr class="intro-divider"> -->
                        <!-- <div class="$1"></div> -->
                        <div class="button-cta">
                            <a href="#" class="button is-rounded button-borderd is-info">Get started</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!-- /.container -->
      </div>
    </div>
        `;
  }

  static get is() {
    return 'section-hero';
  }

  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
  }

  init(pElement, loader) {
    super.init(pElement, loader);
  }

}

customElements.define(SectionHero.is, SectionHero);