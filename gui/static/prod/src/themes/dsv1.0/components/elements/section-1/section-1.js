import { html, css } from "../../../../../../node_modules/lit-element/lit-element.js";
import { SectionPElementBase } from "../../../../../elements/base/section-pelement.js";
import { Section1Styles } from "./section-1-css.js";

class SectionPElement1 extends SectionPElementBase {
  static get styles() {
    return [Section1Styles, css`
            :host {
              display: block;
            }
          `];
  }

  renderDefault() {
    return html`
      
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
            <div class="hero landing-banner">
                <div class="heading">
                    <div class="landing-subtitle">
                        <p class="is-capitalized has-text-centered" style="color: #fff">vocibus facilis</p>
                    </div>
                    <div class="main-title">
                        <h1 class="title has-text-centered">Mentitum commune erroribus scripserit</h1>
                    </div>
                </div>
                <div class="main-lander-cta">
                    <a class="landing-btn center">Learn more</a>
                </div>

                <div class="main-media">
                    <div class="container">
                        <video controls class="video">
                            <source src="devstories.webm" 
                                    type='video/webm;codecs="vp8, vorbis"' />
                            <source src="devstories.mp4" 
                                    type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
                            <track src="devstories-en.vtt" label="English subtitles" 
                                    kind="subtitles" srclang="en" default></track>
                        </video>
                    </div>
                </div>
            </div>
        `;
  }

  static get is() {
    return 'section-1';
  }

}

customElements.define(SectionPElement1.is, SectionPElement1);