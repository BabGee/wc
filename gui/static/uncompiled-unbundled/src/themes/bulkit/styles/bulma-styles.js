import { html } from "../../../../node_modules/lit-element/lit-element.js";
export const BULMA_STYLES = html`
<style>

/*! bulma.io v0.3.2 | MIT License | github.com/jgthms/bulma */
@-webkit-keyframes spinAround {
    from {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
    to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg)
    }
}

@keyframes spinAround {
    from {
        -webkit-transform: rotate(0);
        transform: rotate(0)
    }
    to {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg)
    }
}

/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */
blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul {
    margin: 0;
    padding: 0
}

h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-weight: 400
}

ul {
    list-style: none
}

button, input, select, textarea {
    margin: 0
}

html {
    box-sizing: border-box
}

* {
    box-sizing: border-box;
}

:after, :before {
    box-sizing: border-box;
}

audio, embed, img, object, video {
    height: auto;
    max-width: 100%
}

iframe {
    border: 0
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

td, th {
    padding: 0;
    text-align: left
}

html {
    background-color: #fff;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-rendering: optimizeLegibility
}

article, aside, figure, footer, header, hgroup, section {
    display: block
}

body, button, input, select, textarea {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
}

code, pre {
    -moz-osx-font-smoothing: auto;
    -webkit-font-smoothing: auto;
    font-family: Inconsolata, Consolas, Monaco, monospace
}

body {
    color: #4a4a4a;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5
}

a {
    color: #00d1b2;
    cursor: pointer;
    text-decoration: none;
    -webkit-transition: none 86ms ease-out;
    transition: none 86ms ease-out
}

a:hover {
    color: #363636
}

code {
    background-color: #f5f5f5;
    color: #ff3860;
    font-size: .8em;
    font-weight: 400;
    padding: .25em .5em .25em
}

hr {
    background-color: #dbdbdb;
    border: none;
    display: block;
    height: 1px;
    margin: 1.5rem 0
}

img {
    max-width: 100%
}

input[type=checkbox], input[type=radio] {
    vertical-align: baseline
}

small {
    font-size: .8em
}

span {
    font-style: inherit;
    font-weight: inherit
}

strong {
    color: #363636;
    font-weight: 700
}

pre { /*background-color:#f5f5f5*/;
    color: #4a4a4a; /*font-size:.8em*/;
    white-space: pre;
    word-wrap: normal
}

pre code {
    background: 0 0;
    color: inherit;
    display: block; /*font-size:1.4em;*/
    overflow-x: auto;
    padding: 1.25rem 1.5rem
}

table {
    width: 100%
}

table td, table th {
    text-align: left;
    vertical-align: top
}

table th {
    color: #363636
}

.is-block {
    display: block
}

@media screen and (max-width: 768px) {
    .is-block-mobile {
        display: block !important
    }
}

@media screen and (min-width: 769px) {
    .is-block-tablet {
        display: block !important
    }
}

@media screen and (min-width: 769px) and (max-width: 999px) {
    .is-block-tablet-only {
        display: block !important
    }
}

@media screen and (max-width: 999px) {
    .is-block-touch {
        display: block !important
    }
}

@media screen and (min-width: 1000px) {
    .is-block-desktop {
        display: block !important
    }
}

@media screen and (min-width: 1000px) and (max-width: 1191px) {
    .is-block-desktop-only {
        display: block !important
    }
}

@media screen and (min-width: 1192px) {
    .is-block-widescreen {
        display: block !important
    }
}

.is-flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

@media screen and (max-width: 768px) {
    .is-flex-mobile {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important
    }
}

@media screen and (min-width: 769px) {
    .is-flex-tablet {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important
    }
}

@media screen and (min-width: 769px) and (max-width: 999px) {
    .is-flex-tablet-only {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important
    }
}

@media screen and (max-width: 999px) {
    .is-flex-touch {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important
    }
}

@media screen and (min-width: 1000px) {
    .is-flex-desktop {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important
    }
}

@media screen and (min-width: 1000px) and (max-width: 1191px) {
    .is-flex-desktop-only {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important
    }
}

@media screen and (min-width: 1192px) {
    .is-flex-widescreen {
        display: -webkit-box !important;
        display: -ms-flexbox !important;
        display: flex !important
    }
}

.is-inline {
    display: inline
}

@media screen and (max-width: 768px) {
    .is-inline-mobile {
        display: inline !important
    }
}

@media screen and (min-width: 769px) {
    .is-inline-tablet {
        display: inline !important
    }
}

@media screen and (min-width: 769px) and (max-width: 999px) {
    .is-inline-tablet-only {
        display: inline !important
    }
}

@media screen and (max-width: 999px) {
    .is-inline-touch {
        display: inline !important
    }
}

@media screen and (min-width: 1000px) {
    .is-inline-desktop {
        display: inline !important
    }
}

@media screen and (min-width: 1000px) and (max-width: 1191px) {
    .is-inline-desktop-only {
        display: inline !important
    }
}

@media screen and (min-width: 1192px) {
    .is-inline-widescreen {
        display: inline !important
    }
}

.is-inline-block {
    display: inline-block
}

@media screen and (max-width: 768px) {
    .is-inline-block-mobile {
        display: inline-block !important
    }
}

@media screen and (min-width: 769px) {
    .is-inline-block-tablet {
        display: inline-block !important
    }
}

@media screen and (min-width: 769px) and (max-width: 999px) {
    .is-inline-block-tablet-only {
        display: inline-block !important
    }
}

@media screen and (max-width: 999px) {
    .is-inline-block-touch {
        display: inline-block !important
    }
}

@media screen and (min-width: 1000px) {
    .is-inline-block-desktop {
        display: inline-block !important
    }
}

@media screen and (min-width: 1000px) and (max-width: 1191px) {
    .is-inline-block-desktop-only {
        display: inline-block !important
    }
}

@media screen and (min-width: 1192px) {
    .is-inline-block-widescreen {
        display: inline-block !important
    }
}

.is-inline-flex {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex
}

@media screen and (max-width: 768px) {
    .is-inline-flex-mobile {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}

@media screen and (min-width: 769px) {
    .is-inline-flex-tablet {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}

@media screen and (min-width: 769px) and (max-width: 999px) {
    .is-inline-flex-tablet-only {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}

@media screen and (max-width: 999px) {
    .is-inline-flex-touch {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}

@media screen and (min-width: 1000px) {
    .is-inline-flex-desktop {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}

@media screen and (min-width: 1000px) and (max-width: 1191px) {
    .is-inline-flex-desktop-only {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}

@media screen and (min-width: 1192px) {
    .is-inline-flex-widescreen {
        display: -webkit-inline-box !important;
        display: -ms-inline-flexbox !important;
        display: inline-flex !important
    }
}

.is-clearfix:after {
    clear: both;
    content: " ";
    display: table
}

.is-pulled-left {
    float: left
}

.is-pulled-right {
    float: right
}

.is-clipped {
    overflow: hidden !important
}

.is-overlay {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0
}

.has-text-centered {
    text-align: center
}

.has-text-left {
    text-align: left
}

.has-text-right {
    text-align: right
}

.is-hidden {
    display: none !important
}

@media screen and (max-width: 768px) {
    .is-hidden-mobile {
        display: none !important
    }
}

@media screen and (min-width: 769px) {
    .is-hidden-tablet {
        display: none !important
    }
}

@media screen and (min-width: 769px) and (max-width: 999px) {
    .is-hidden-tablet-only {
        display: none !important
    }
}

@media screen and (max-width: 999px) {
    .is-hidden-touch {
        display: none !important
    }
}

@media screen and (min-width: 1000px) {
    .is-hidden-desktop {
        display: none !important
    }
}

@media screen and (min-width: 1000px) and (max-width: 1191px) {
    .is-hidden-desktop-only {
        display: none !important
    }
}

@media screen and (min-width: 1192px) {
    .is-hidden-widescreen {
        display: none !important
    }
}

.is-disabled {
    pointer-events: none
}

.is-marginless {
    margin: 0 !important
}

.is-paddingless {
    padding: 0 !important
}

.is-unselectable {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.box {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
    display: block;
    padding: 1.25rem 1.25rem 40px;
    margin-left: 40px;
    margin-right:40px;
    margin-bottom: 40px;
}

.box:not(:last-child) {
    margin-bottom: 1.5rem
}

a.box:focus, a.box:hover {
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px #00d1b2
}

a.box:active {
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2), 0 0 0 1px #00d1b2
}

.button {
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 1rem;
    height: 2.285em;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 1.5;
    padding-left: .75em;
    padding-right: .75em;
    position: relative;
    vertical-align: top;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    color: #363636;
    cursor: pointer;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: .75em;
    padding-right: .75em;
    text-align: center;
    white-space: nowrap
}

.button.is-active, .button.is-focused, .button:active, .button:focus {
    outline: 0
}

.button.is-disabled, .button[disabled] {
    pointer-events: none
}

.button strong {
    color: inherit
}

.button .icon:first-child:not(:last-child) {
    margin-left: -.25rem;
    margin-right: .5rem
}

.button .icon:last-child:not(:first-child) {
    margin-left: .5rem;
    margin-right: -.25rem
}

.button .icon:first-child:last-child {
    margin-left: calc(-1px + -.25rem);
    margin-right: calc(-1px + -.25rem)
}

.button .icon.is-small:first-child:not(:last-child) {
    margin-left: 0
}

.button .icon.is-small:last-child:not(:first-child) {
    margin-right: 0
}

.button .icon.is-small:first-child:last-child {
    margin-left: calc(-1px + 0rem);
    margin-right: calc(-1px + 0rem)
}

.button .icon.is-medium:first-child:not(:last-child) {
    margin-left: -.5rem
}

.button .icon.is-medium:last-child:not(:first-child) {
    margin-right: -.5rem
}

.button .icon.is-medium:first-child:last-child {
    margin-left: calc(-1px + -.5rem);
    margin-right: calc(-1px + -.5rem)
}

.button .icon.is-large:first-child:not(:last-child) {
    margin-left: -1rem
}

.button .icon.is-large:last-child:not(:first-child) {
    margin-right: -1rem
}

.button .icon.is-large:first-child:last-child {
    margin-left: calc(-1px + -1rem);
    margin-right: calc(-1px + -1rem)
}

.button.is-hovered, .button:hover {
    border-color: #b5b5b5;
    color: #363636
}

.button.is-focused, .button:focus {
    border-color: #00d1b2;
    box-shadow: 0 0 .5em rgba(0, 209, 178, .25);
    color: #363636
}

.button.is-active, .button:active {
    border-color: #4a4a4a;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: #363636
}

.button.is-link {
    background-color: transparent;
    border-color: transparent;
    color: #4a4a4a;
    text-decoration: underline
}

.button.is-link.is-active, .button.is-link.is-focused, .button.is-link.is-hovered, .button.is-link:active, .button.is-link:focus, .button.is-link:hover {
    background-color: #f5f5f5;
    color: #363636
}

.button.is-white {
    background-color: #fff;
    border-color: transparent;
    color: #0a0a0a
}

.button.is-white.is-hovered, .button.is-white:hover {
    background-color: #f9f9f9;
    border-color: transparent;
    color: #0a0a0a
}

.button.is-white.is-focused, .button.is-white:focus {
    border-color: transparent;
    box-shadow: 0 0 .5em rgba(255, 255, 255, .25);
    color: #0a0a0a
}

.button.is-white.is-active, .button.is-white:active {
    background-color: #f2f2f2;
    border-color: transparent;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: #0a0a0a
}

.button.is-white.is-inverted {
    background-color: #0a0a0a;
    color: #fff
}

.button.is-white.is-inverted:hover {
    background-color: #000
}

.button.is-white.is-loading:after {
    border-color: transparent transparent #0a0a0a #0a0a0a !important
}

.button.is-white.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
}

.button.is-white.is-outlined:focus, .button.is-white.is-outlined:hover {
    background-color: #fff;
    border-color: #fff;
    color: #0a0a0a
}

.button.is-white.is-outlined.is-loading:after {
    border-color: transparent transparent #fff #fff !important
}

.button.is-white.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #0a0a0a;
    color: #0a0a0a
}

.button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined:hover {
    background-color: #0a0a0a;
    color: #fff
}

.button.is-black {
    background-color: #0a0a0a;
    border-color: transparent;
    color: #fff
}

.button.is-black.is-hovered, .button.is-black:hover {
    background-color: #040404;
    border-color: transparent;
    color: #fff
}

.button.is-black.is-focused, .button.is-black:focus {
    border-color: transparent;
    box-shadow: 0 0 .5em rgba(10, 10, 10, .25);
    color: #fff
}

.button.is-black.is-active, .button.is-black:active {
    background-color: #000;
    border-color: transparent;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: #fff
}

.button.is-black.is-inverted {
    background-color: #fff;
    color: #0a0a0a
}

.button.is-black.is-inverted:hover {
    background-color: #f2f2f2
}

.button.is-black.is-loading:after {
    border-color: transparent transparent #fff #fff !important
}

.button.is-black.is-outlined {
    background-color: transparent;
    border-color: #0a0a0a;
    color: #0a0a0a
}

.button.is-black.is-outlined:focus, .button.is-black.is-outlined:hover {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    color: #fff
}

.button.is-black.is-outlined.is-loading:after {
    border-color: transparent transparent #0a0a0a #0a0a0a !important
}

.button.is-black.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
}

.button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #0a0a0a
}

.button.is-light {
    background-color: #f5f5f5;
    border-color: transparent;
    color: #363636
}

.button.is-light.is-hovered, .button.is-light:hover {
    background-color: #eee;
    border-color: transparent;
    color: #363636
}

.button.is-light.is-focused, .button.is-light:focus {
    border-color: transparent;
    box-shadow: 0 0 .5em rgba(245, 245, 245, .25);
    color: #363636
}

.button.is-light.is-active, .button.is-light:active {
    background-color: #e8e8e8;
    border-color: transparent;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: #363636
}

.button.is-light.is-inverted {
    background-color: #363636;
    color: #f5f5f5
}

.button.is-light.is-inverted:hover {
    background-color: #292929
}

.button.is-light.is-loading:after {
    border-color: transparent transparent #363636 #363636 !important
}

.button.is-light.is-outlined {
    background-color: transparent;
    border-color: #f5f5f5;
    color: #f5f5f5
}

.button.is-light.is-outlined:focus, .button.is-light.is-outlined:hover {
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: #363636
}

.button.is-light.is-outlined.is-loading:after {
    border-color: transparent transparent #f5f5f5 #f5f5f5 !important
}

.button.is-light.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #363636;
    color: #363636
}

.button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined:hover {
    background-color: #363636;
    color: #f5f5f5
}

.button.is-dark {
    background-color: #363636;
    border-color: transparent;
    color: #f5f5f5
}

.button.is-dark.is-hovered, .button.is-dark:hover {
    background-color: #2f2f2f;
    border-color: transparent;
    color: #f5f5f5
}

.button.is-dark.is-focused, .button.is-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 .5em rgba(54, 54, 54, .25);
    color: #f5f5f5
}

.button.is-dark.is-active, .button.is-dark:active {
    background-color: #292929;
    border-color: transparent;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: #f5f5f5
}

.button.is-dark.is-inverted {
    background-color: #f5f5f5;
    color: #363636
}

.button.is-dark.is-inverted:hover {
    background-color: #e8e8e8
}

.button.is-dark.is-loading:after {
    border-color: transparent transparent #f5f5f5 #f5f5f5 !important
}

.button.is-dark.is-outlined {
    background-color: transparent;
    border-color: #363636;
    color: #363636
}

.button.is-dark.is-outlined:focus, .button.is-dark.is-outlined:hover {
    background-color: #363636;
    border-color: #363636;
    color: #f5f5f5
}

.button.is-dark.is-outlined.is-loading:after {
    border-color: transparent transparent #363636 #363636 !important
}

.button.is-dark.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #f5f5f5;
    color: #f5f5f5
}

.button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined:hover {
    background-color: #f5f5f5;
    color: #363636
}

.button.is-primary {
    background-color: #00d1b2;
    border-color: transparent;
    color: #fff
}

.button.is-primary.is-hovered, .button.is-primary:hover {
    background-color: #00c4a7;
    border-color: transparent;
    color: #fff
}

.button.is-primary.is-focused, .button.is-primary:focus {
    border-color: transparent;
    box-shadow: 0 0 .5em rgba(0, 209, 178, .25);
    color: #fff
}

.button.is-primary.is-active, .button.is-primary:active {
    background-color: #00b89c;
    border-color: transparent;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: #fff
}

.button.is-primary.is-inverted {
    background-color: #fff;
    color: #00d1b2
}

.button.is-primary.is-inverted:hover {
    background-color: #f2f2f2
}

.button.is-primary.is-loading:after {
    border-color: transparent transparent #fff #fff !important
}

.button.is-primary.is-outlined {
    background-color: transparent;
    border-color: #00d1b2;
    color: #00d1b2
}

.button.is-primary.is-outlined:focus, .button.is-primary.is-outlined:hover {
    background-color: #00d1b2;
    border-color: #00d1b2;
    color: #fff
}

.button.is-primary.is-outlined.is-loading:after {
    border-color: transparent transparent #00d1b2 #00d1b2 !important
}

.button.is-primary.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
}

.button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #00d1b2
}

.button.is-info {
    background-color: #3273dc;
    border-color: transparent;
    color: #fff
}

.button.is-info.is-hovered, .button.is-info:hover {
    background-color: #276cda;
    border-color: transparent;
    color: #fff
}

.button.is-info.is-focused, .button.is-info:focus {
    border-color: transparent;
    box-shadow: 0 0 .5em rgba(50, 115, 220, .25);
    color: #fff
}

.button.is-info.is-active, .button.is-info:active {
    background-color: #2366d1;
    border-color: transparent;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: #fff
}

.button.is-info.is-inverted {
    background-color: #fff;
    color: #3273dc
}

.button.is-info.is-inverted:hover {
    background-color: #f2f2f2
}

.button.is-info.is-loading:after {
    border-color: transparent transparent #fff #fff !important
}

.button.is-info.is-outlined {
    background-color: transparent;
    border-color: #3273dc;
    color: #3273dc
}

.button.is-info.is-outlined:focus, .button.is-info.is-outlined:hover {
    background-color: #3273dc;
    border-color: #3273dc;
    color: #fff
}

.button.is-info.is-outlined.is-loading:after {
    border-color: transparent transparent #3273dc #3273dc !important
}

.button.is-info.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
}

.button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #3273dc
}

.button.is-success {
    background-color: #23d160;
    border-color: transparent;
    color: #fff
}

.button.is-success.is-hovered, .button.is-success:hover {
    background-color: #22c65b;
    border-color: transparent;
    color: #fff
}

.button.is-success.is-focused, .button.is-success:focus {
    border-color: transparent;
    box-shadow: 0 0 .5em rgba(35, 209, 96, .25);
    color: #fff
}

.button.is-success.is-active, .button.is-success:active {
    background-color: #20bc56;
    border-color: transparent;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: #fff
}

.button.is-success.is-inverted {
    background-color: #fff;
    color: #23d160
}

.button.is-success.is-inverted:hover {
    background-color: #f2f2f2
}

.button.is-success.is-loading:after {
    border-color: transparent transparent #fff #fff !important
}

.button.is-success.is-outlined {
    background-color: transparent;
    border-color: #23d160;
    color: #23d160
}

.button.is-success.is-outlined:focus, .button.is-success.is-outlined:hover {
    background-color: #23d160;
    border-color: #23d160;
    color: #fff
}

.button.is-success.is-outlined.is-loading:after {
    border-color: transparent transparent #23d160 #23d160 !important
}

.button.is-success.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
}

.button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #23d160
}

.button.is-warning {
    background-color: #ffdd57;
    border-color: transparent;
    color: rgba(0, 0, 0, .7)
}

.button.is-warning.is-hovered, .button.is-warning:hover {
    background-color: #ffdb4a;
    border-color: transparent;
    color: rgba(0, 0, 0, .7)
}

.button.is-warning.is-focused, .button.is-warning:focus {
    border-color: transparent;
    box-shadow: 0 0 .5em rgba(255, 221, 87, .25);
    color: rgba(0, 0, 0, .7)
}

.button.is-warning.is-active, .button.is-warning:active {
    background-color: #ffd83d;
    border-color: transparent;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: rgba(0, 0, 0, .7)
}

.button.is-warning.is-inverted {
    background-color: rgba(0, 0, 0, .7);
    color: #ffdd57
}

.button.is-warning.is-inverted:hover {
    background-color: rgba(0, 0, 0, .7)
}

.button.is-warning.is-loading:after {
    border-color: transparent transparent rgba(0, 0, 0, .7) rgba(0, 0, 0, .7) !important
}

.button.is-warning.is-outlined {
    background-color: transparent;
    border-color: #ffdd57;
    color: #ffdd57
}

.button.is-warning.is-outlined:focus, .button.is-warning.is-outlined:hover {
    background-color: #ffdd57;
    border-color: #ffdd57;
    color: rgba(0, 0, 0, .7)
}

.button.is-warning.is-outlined.is-loading:after {
    border-color: transparent transparent #ffdd57 #ffdd57 !important
}

.button.is-warning.is-inverted.is-outlined {
    background-color: transparent;
    border-color: rgba(0, 0, 0, .7);
    color: rgba(0, 0, 0, .7)
}

.button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined:hover {
    background-color: rgba(0, 0, 0, .7);
    color: #ffdd57
}

.button.is-danger {
    background-color: #ff3860;
    border-color: transparent;
    color: #fff
}

.button.is-danger.is-hovered, .button.is-danger:hover {
    background-color: #ff2b56;
    border-color: transparent;
    color: #fff
}

.button.is-danger.is-focused, .button.is-danger:focus {
    border-color: transparent;
    box-shadow: 0 0 .5em rgba(255, 56, 96, .25);
    color: #fff
}

.button.is-danger.is-active, .button.is-danger:active {
    background-color: #ff1f4b;
    border-color: transparent;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2);
    color: #fff
}

.button.is-danger.is-inverted {
    background-color: #fff;
    color: #ff3860
}

.button.is-danger.is-inverted:hover {
    background-color: #f2f2f2
}

.button.is-danger.is-loading:after {
    border-color: transparent transparent #fff #fff !important
}

.button.is-danger.is-outlined {
    background-color: transparent;
    border-color: #ff3860;
    color: #ff3860
}

.button.is-danger.is-outlined:focus, .button.is-danger.is-outlined:hover {
    background-color: #ff3860;
    border-color: #ff3860;
    color: #fff
}

.button.is-danger.is-outlined.is-loading:after {
    border-color: transparent transparent #ff3860 #ff3860 !important
}

.button.is-danger.is-inverted.is-outlined {
    background-color: transparent;
    border-color: #fff;
    color: #fff
}

.button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined:hover {
    background-color: #fff;
    color: #ff3860
}

.button.is-small {
    border-radius: 2px;
    font-size: .75rem
}

.button.is-small .icon:first-child:not(:last-child) {
    margin-left: -.375rem;
    margin-right: .375rem
}

.button.is-small .icon:last-child:not(:first-child) {
    margin-left: .375rem;
    margin-right: -.375rem
}

.button.is-small .icon:first-child:last-child {
    margin-left: calc(-1px + -.375rem);
    margin-right: calc(-1px + -.375rem)
}

.button.is-small .icon.is-small:first-child:not(:last-child) {
    margin-left: -.125rem
}

.button.is-small .icon.is-small:last-child:not(:first-child) {
    margin-right: -.125rem
}

.button.is-small .icon.is-small:first-child:last-child {
    margin-left: calc(-1px + -.125rem);
    margin-right: calc(-1px + -.125rem)
}

.button.is-small .icon.is-medium:first-child:not(:last-child) {
    margin-left: -.625rem
}

.button.is-small .icon.is-medium:last-child:not(:first-child) {
    margin-right: -.625rem
}

.button.is-small .icon.is-medium:first-child:last-child {
    margin-left: calc(-1px + -.625rem);
    margin-right: calc(-1px + -.625rem)
}

.button.is-small .icon.is-large:first-child:not(:last-child) {
    margin-left: -1.125rem
}

.button.is-small .icon.is-large:last-child:not(:first-child) {
    margin-right: -1.125rem
}

.button.is-small .icon.is-large:first-child:last-child {
    margin-left: calc(-1px + -1.125rem);
    margin-right: calc(-1px + -1.125rem)
}

.button.is-medium {
    font-size: 1.25rem
}

.button.is-medium .icon:first-child:not(:last-child) {
    margin-left: -.125rem;
    margin-right: .625rem
}

.button.is-medium .icon:last-child:not(:first-child) {
    margin-left: .625rem;
    margin-right: -.125rem
}

.button.is-medium .icon:first-child:last-child {
    margin-left: calc(-1px + -.125rem);
    margin-right: calc(-1px + -.125rem)
}

.button.is-medium .icon.is-small:first-child:not(:last-child) {
    margin-left: .125rem
}

.button.is-medium .icon.is-small:last-child:not(:first-child) {
    margin-right: .125rem
}

.button.is-medium .icon.is-small:first-child:last-child {
    margin-left: calc(-1px + .125rem);
    margin-right: calc(-1px + .125rem)
}

.button.is-medium .icon.is-medium:first-child:not(:last-child) {
    margin-left: -.375rem
}

.button.is-medium .icon.is-medium:last-child:not(:first-child) {
    margin-right: -.375rem
}

.button.is-medium .icon.is-medium:first-child:last-child {
    margin-left: calc(-1px + -.375rem);
    margin-right: calc(-1px + -.375rem)
}

.button.is-medium .icon.is-large:first-child:not(:last-child) {
    margin-left: -.875rem
}

.button.is-medium .icon.is-large:last-child:not(:first-child) {
    margin-right: -.875rem
}

.button.is-medium .icon.is-large:first-child:last-child {
    margin-left: calc(-1px + -.875rem);
    margin-right: calc(-1px + -.875rem)
}

.button.is-large {
    font-size: 1.5rem
}

.button.is-large .icon:first-child:not(:last-child) {
    margin-left: 0;
    margin-right: .75rem
}

.button.is-large .icon:last-child:not(:first-child) {
    margin-left: .75rem;
    margin-right: 0
}

.button.is-large .icon:first-child:last-child {
    margin-left: calc(-1px + 0rem);
    margin-right: calc(-1px + 0rem)
}

.button.is-large .icon.is-small:first-child:not(:last-child) {
    margin-left: .25rem
}

.button.is-large .icon.is-small:last-child:not(:first-child) {
    margin-right: .25rem
}

.button.is-large .icon.is-small:first-child:last-child {
    margin-left: calc(-1px + .25rem);
    margin-right: calc(-1px + .25rem)
}

.button.is-large .icon.is-medium:first-child:not(:last-child) {
    margin-left: -.25rem
}

.button.is-large .icon.is-medium:last-child:not(:first-child) {
    margin-right: -.25rem
}

.button.is-large .icon.is-medium:first-child:last-child {
    margin-left: calc(-1px + -.25rem);
    margin-right: calc(-1px + -.25rem)
}

.button.is-large .icon.is-large:first-child:not(:last-child) {
    margin-left: -.75rem
}

.button.is-large .icon.is-large:last-child:not(:first-child) {
    margin-right: -.75rem
}

.button.is-large .icon.is-large:first-child:last-child {
    margin-left: calc(-1px + -.75rem);
    margin-right: calc(-1px + -.75rem)
}

.button.is-disabled, .button[disabled] {
    opacity: .5
}

.button.is-fullwidth {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%
}

.button.is-loading {
    color: transparent !important;
    pointer-events: none
}

.button.is-loading:after {
    -webkit-animation: spinAround .5s infinite linear;
    animation: spinAround .5s infinite linear;
    border: 2px solid #dbdbdb;
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1rem;
    position: relative;
    width: 1rem;
    left: 50%;
    margin-left: -8px;
    margin-top: -8px;
    position: absolute;
    top: 50%;
    position: absolute !important
}

.content {
     color: #7a7b7c;
    font-size: 12px;
}

.content:not(:last-child) {
    margin-bottom: 1.5rem
}

.content li + li {
    margin-top: .25em
}

.content blockquote:not(:last-child), .content ol:not(:last-child), .content p:not(:last-child), .content table:not(:last-child), .content ul:not(:last-child) {
    margin-bottom: 1em
}

.content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
    color: #363636;
    font-weight: 400;
    line-height: 1.125
}

.content h1 {
    font-size: 2em;
    margin-bottom: .5em
}

.content h1:not(:first-child) {
    margin-top: 1em
}

.content h2 {
    font-size: 1.75em;
    margin-bottom: .5714em
}

.content h2:not(:first-child) {
    margin-top: 1.1428em
}

.content h3 {
    font-size: 1.5em;
    margin-bottom: .6666em
}

.content h3:not(:first-child) {
    margin-top: 1.3333em
}

.content h4 {
    font-size: 1.25em;
    margin-bottom: .8em
}

.content h5 {
    font-size: 1.125em;
    margin-bottom: .8888em
}

.content h6 {
    font-size: 1em;
    margin-bottom: 1em
}

.content blockquote {
    background-color: #f5f5f5;
    border-left: 5px solid #dbdbdb;
    padding: 1.25em 1.5em
}

.content ol {
    list-style: decimal outside;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 1em
}

.content ul {
    list-style: disc outside;
    margin-left: 2em;
    margin-right: 2em;
    margin-top: 1em
}

.content ul ul {
    list-style-type: circle;
    margin-top: .5em
}

.content ul ul ul {
    list-style-type: square
}

.content table {
    width: 100%
}

.content table td, .content table th {
    border: 1px solid #dbdbdb;
    border-width: 0 0 1px;
    padding: .5em .75em;
    vertical-align: top
}

.content table th {
    color: #363636;
    text-align: left
}

.content table tr:hover {
    background-color: #f5f5f5
}

.content table thead td, .content table thead th {
    border-width: 0 0 2px;
    color: #363636
}

.content table tfoot td, .content table tfoot th {
    border-width: 2px 0 0;
    color: #363636
}

.content table tbody tr:last-child td, .content table tbody tr:last-child th {
    border-bottom-width: 0
}

.content.is-small {
    font-size: .75rem
}

.content.is-medium {
    font-size: 1.25rem
}

.content.is-large {
    font-size: 1.5rem
}

.input, .textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 1rem;
    height: 2.285em;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 1.5;
    padding-left: .75em;
    padding-right: .75em;
    position: relative;
    vertical-align: top;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    color: #363636;
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .1);
    max-width: 100%;
    width: 100%
}

.input.is-active, .input.is-focused, .input:active, .input:focus, .textarea.is-active, .textarea.is-focused, .textarea:active, .textarea:focus {
    outline: 0
}

.input.is-disabled, .input[disabled], .textarea.is-disabled, .textarea[disabled] {
    pointer-events: none
}

.input.is-hovered, .input:hover, .textarea.is-hovered, .textarea:hover {
    border-color: #b5b5b5
}

.input.is-active, .input.is-focused, .input:active, .input:focus, .textarea.is-active, .textarea.is-focused, .textarea:active, .textarea:focus {
    border-color: #00d1b2
}

.input.is-disabled, .input[disabled], .textarea.is-disabled, .textarea[disabled] {
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    box-shadow: none;
    color: #7a7a7a
}

.input.is-disabled::-moz-placeholder, .input[disabled]::-moz-placeholder, .textarea.is-disabled::-moz-placeholder, .textarea[disabled]::-moz-placeholder {
    color: rgba(54, 54, 54, .3)
}

.input.is-disabled::-webkit-input-placeholder, .input[disabled]::-webkit-input-placeholder, .textarea.is-disabled::-webkit-input-placeholder, .textarea[disabled]::-webkit-input-placeholder {
    color: rgba(54, 54, 54, .3)
}

.input.is-disabled:-moz-placeholder, .input[disabled]:-moz-placeholder, .textarea.is-disabled:-moz-placeholder, .textarea[disabled]:-moz-placeholder {
    color: rgba(54, 54, 54, .3)
}

.input.is-disabled:-ms-input-placeholder, .input[disabled]:-ms-input-placeholder, .textarea.is-disabled:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder {
    color: rgba(54, 54, 54, .3)
}

.input[type=search], .textarea[type=search] {
    border-radius: 290486px
}

.input.is-white, .textarea.is-white {
    border-color: #fff
}

.input.is-black, .textarea.is-black {
    border-color: #0a0a0a
}

.input.is-light, .textarea.is-light {
    border-color: #f5f5f5
}

.input.is-dark, .textarea.is-dark {
    border-color: #363636
}

.input.is-primary, .textarea.is-primary {
    border-color: #00d1b2
}

.input.is-info, .textarea.is-info {
    border-color: #3273dc
}

.input.is-success, .textarea.is-success {
    border-color: #23d160
}

.input.is-warning, .textarea.is-warning {
    border-color: #ffdd57
}

.input.is-danger, .textarea.is-danger {
    border-color: #ff3860
}

.input.is-small, .textarea.is-small {
    border-radius: 2px;
    font-size: .75rem
}

.input.is-medium, .textarea.is-medium {
    font-size: 1.25rem
}

.input.is-large, .textarea.is-large {
    font-size: 1.5rem
}

.input.is-fullwidth, .textarea.is-fullwidth {
    display: block;
    width: 100%
}

.input.is-inline, .textarea.is-inline {
    display: inline;
    width: auto
}

.textarea {
    display: block;
    line-height: 1.25;
    max-height: 600px;
    max-width: 100%;
    min-height: 120px;
    min-width: 100%;
    padding: 10px;
    resize: vertical
}

.checkbox, .radio {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    position: relative;
    vertical-align: top
}

.checkbox input, .radio input {
    cursor: pointer;
    margin-right: .5em
}

.checkbox:hover, .radio:hover {
    color: #363636
}

.checkbox.is-disabled, .radio.is-disabled {
    color: #7a7a7a;
    pointer-events: none
}

.checkbox.is-disabled input, .radio.is-disabled input {
    pointer-events: none
}

.radio + .radio {
    margin-left: .5em
}

.select {
    display: inline-block;
    height: 2.5em;
    position: relative;
    vertical-align: top
}

.select:after {
    border: 1px solid #00d1b2;
    border-right: 0;
    border-top: 0;
    content: " ";
    display: block;
    height: .5em;
    pointer-events: none;
    position: absolute;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    width: .5em;
    margin-top: -.375em;
    right: 1.125em;
    top: 50%;
    z-index: 4
}

.select select {
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 1rem;
    height: 2.285em;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 1.5;
    padding-left: .75em;
    padding-right: .75em;
    position: relative;
    vertical-align: top;
    background-color: #fff;
    border: 1px solid #dbdbdb;
    color: #363636;
    cursor: pointer;
    display: block;
    font-size: 1em;
    outline: 0;
    padding-right: 2.5em
}

.select select.is-active, .select select.is-focused, .select select:active, .select select:focus {
    outline: 0
}

.select select.is-disabled, .select select[disabled] {
    pointer-events: none
}

.select select.is-hovered, .select select:hover {
    border-color: #b5b5b5
}

.select select.is-active, .select select.is-focused, .select select:active, .select select:focus {
    border-color: #00d1b2
}

.select select.is-disabled, .select select[disabled] {
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    box-shadow: none;
    color: #7a7a7a
}

.select select.is-disabled::-moz-placeholder, .select select[disabled]::-moz-placeholder {
    color: rgba(54, 54, 54, .3)
}

.select select.is-disabled::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder {
    color: rgba(54, 54, 54, .3)
}

.select select.is-disabled:-moz-placeholder, .select select[disabled]:-moz-placeholder {
    color: rgba(54, 54, 54, .3)
}

.select select.is-disabled:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder {
    color: rgba(54, 54, 54, .3)
}

.select select:hover {
    border-color: #b5b5b5
}

.select select::ms-expand {
    display: none
}

.select:hover:after {
    border-color: #363636
}

.select.is-small {
    border-radius: 2px;
    font-size: .75rem
}

.select.is-medium {
    font-size: 1.25rem
}

.select.is-large {
    font-size: 1.5rem
}

.select.is-fullwidth {
    width: 100%
}

.select.is-fullwidth select {
    width: 100%
}

.label {
    color: #363636;
    display: block;
    font-weight: 700
}

.label:not(:last-child) {
    margin-bottom: .5em
}

.help {
    display: block;
    font-size: .75rem;
    margin-top: 5px
}

.help.is-white {
    color: #fff
}

.help.is-black {
    color: #0a0a0a
}

.help.is-light {
    color: #f5f5f5
}

.help.is-dark {
    color: #363636
}

.help.is-primary {
    color: #00d1b2
}

.help.is-info {
    color: #3273dc
}

.help.is-success {
    color: #23d160
}

.help.is-warning {
    color: #ffdd57
}

.help.is-danger {
    color: #ff3860
}

@media screen and (max-width: 768px) {
    .control-label {
        margin-bottom: .5em
    }
}

@media screen and (min-width: 769px) {
    .control-label {
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        margin-right: 1.5em;
        padding-top: .5em;
        text-align: right
    }
}

.control {
    position: relative;
    text-align: left
}

.control:not(:last-child) {
    margin-bottom: .75rem
}

.control.has-addons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.control.has-addons .button, .control.has-addons .input, .control.has-addons .select {
    border-radius: 0;
    margin-right: -1px;
    width: auto
}

.control.has-addons .button:hover, .control.has-addons .input:hover, .control.has-addons .select:hover {
    z-index: 2
}

.control.has-addons .button:active, .control.has-addons .button:focus, .control.has-addons .input:active, .control.has-addons .input:focus, .control.has-addons .select:active, .control.has-addons .select:focus {
    z-index: 3
}

.control.has-addons .button:first-child, .control.has-addons .input:first-child, .control.has-addons .select:first-child {
    border-radius: 3px 0 0 3px
}

.control.has-addons .button:first-child select, .control.has-addons .input:first-child select, .control.has-addons .select:first-child select {
    border-radius: 3px 0 0 3px
}

.control.has-addons .button:last-child, .control.has-addons .input:last-child, .control.has-addons .select:last-child {
    border-radius: 0 3px 3px 0
}

.control.has-addons .button:last-child select, .control.has-addons .input:last-child select, .control.has-addons .select:last-child select {
    border-radius: 0 3px 3px 0
}

.control.has-addons .button.is-expanded, .control.has-addons .input.is-expanded, .control.has-addons .select.is-expanded {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.control.has-addons .select select:hover {
    z-index: 2
}

.control.has-addons .select select:active, .control.has-addons .select select:focus {
    z-index: 3
}

.control.has-addons.has-addons-centered {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.control.has-addons.has-addons-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.control.has-addons.has-addons-fullwidth .button, .control.has-addons.has-addons-fullwidth .input, .control.has-addons.has-addons-fullwidth .select {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.control.has-icon .icon {
    color: #dbdbdb;
    pointer-events: none;
    position: absolute;
    top: 1.25rem;
    z-index: 4
}

.control.has-icon .input:focus + .icon {
    color: #7a7a7a
}

.control.has-icon .input.is-small + .icon {
    top: .9375rem
}

.control.has-icon .input.is-medium + .icon {
    top: 1.5625rem
}

.control.has-icon .input.is-large + .icon {
    top: 1.875rem
}

.control.has-icon:not(.has-icon-right) .icon {
    left: 1.25rem;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.control.has-icon:not(.has-icon-right) .input {
    padding-left: 2.5em
}

.control.has-icon:not(.has-icon-right) .input.is-small + .icon {
    left: .9375rem
}

.control.has-icon:not(.has-icon-right) .input.is-medium + .icon {
    left: 1.5625rem
}

.control.has-icon:not(.has-icon-right) .input.is-large + .icon {
    left: 1.875rem
}

.control.has-icon.has-icon-right .icon {
    right: 1.25rem;
    -webkit-transform: translateX(50%) translateY(-50%);
    transform: translateX(50%) translateY(-50%)
}

.control.has-icon.has-icon-right .input {
    padding-right: 2.5em
}

.control.has-icon.has-icon-right .input.is-small + .icon {
    right: .9375rem
}

.control.has-icon.has-icon-right .input.is-medium + .icon {
    right: 1.5625rem
}

.control.has-icon.has-icon-right .input.is-large + .icon {
    right: 1.875rem
}

.control.is-grouped {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.control.is-grouped > .control {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.control.is-grouped > .control:not(:last-child) {
    margin-bottom: 0;
    margin-right: .75rem
}

.control.is-grouped > .control.is-expanded {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1
}

.control.is-grouped.is-grouped-centered {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.control.is-grouped.is-grouped-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

@media screen and (min-width: 769px) {
    .control.is-horizontal {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .control.is-horizontal > .control {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-preferred-size: 0;
        flex-basis: 0;
        -webkit-box-flex: 5;
        -ms-flex-positive: 5;
        flex-grow: 5;
        -ms-flex-negative: 1;
        flex-shrink: 1
    }
}

.control.is-loading:after {
    -webkit-animation: spinAround .5s infinite linear;
    animation: spinAround .5s infinite linear;
    border: 2px solid #dbdbdb;
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1rem;
    position: relative;
    width: 1rem;
    position: absolute !important;
    right: .75em;
    top: .75em
}

.icon {
    display: inline-block;
    font-size: 21px;
    height: 1.5rem;
    line-height: 1.5rem;
    text-align: center;
    vertical-align: top;
    width: 1.5rem
}

.icon .fa {
    font-size: inherit;
    line-height: inherit
}

.icon.is-small {
    display: inline-block;
    font-size: 14px;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    vertical-align: top;
    width: 1rem
}

.icon.is-medium {
    display: inline-block;
    font-size: 28px;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    vertical-align: top;
    width: 2rem
}

.icon.is-large {
    display: inline-block;
    font-size: 42px;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    vertical-align: top;
    width: 3rem
}

.image {
    display: block;
    position: relative
}

.image img {
    display: block;
    height: auto;
    width: 100%
}

.image.is-16by9 img, .image.is-1by1 img, .image.is-2by1 img, .image.is-3by2 img, .image.is-4by3 img, .image.is-square img {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%
}

.image.is-1by1, .image.is-square {
    padding-top: 100%
}

.image.is-4by3 {
    padding-top: 75%
}

.image.is-3by2 {
    padding-top: 66.6666%
}

.image.is-16by9 {
    padding-top: 56.25%
}

.image.is-2by1 {
    padding-top: 50%
}

.image.is-16x16 {
    height: 16px;
    width: 16px
}

.image.is-24x24 {
    height: 24px;
    width: 24px
}

.image.is-32x32 {
    height: 32px;
    width: 32px
}

.image.is-48x48 {
    height: 48px;
    width: 48px
}

.image.is-64x64 {
    height: 64px;
    width: 64px
}

.image.is-96x96 {
    height: 96px;
    width: 96px
}

.image.is-128x128 {
    height: 128px;
    width: 128px
}

.notification {
    background-color: #f5f5f5;
    border-radius: 3px;
    padding: 1.25rem 2.5rem 1.25rem 1.5rem;
    position: relative
}

.notification:not(:last-child) {
    margin-bottom: 1.5rem
}

.notification code, .notification pre {
    background: #fff
}

.notification pre code {
    background: 0 0
}

.notification .delete {
    position: absolute;
    right: .5em;
    top: .5em
}

.notification .content, .notification .subtitle, .notification .title {
    color: inherit
}

.notification.is-white {
    background-color: #fff;
    color: #0a0a0a
}

.notification.is-black {
    background-color: #0a0a0a;
    color: #fff
}

.notification.is-light {
    background-color: #f5f5f5;
    color: #363636
}

.notification.is-dark {
    background-color: #363636;
    color: #f5f5f5
}

.notification.is-primary {
    background-color: #00d1b2;
    color: #fff
}

.notification.is-info {
    background-color: #3273dc;
    color: #fff
}

.notification.is-success {
    background-color: #23d160;
    color: #fff
}

.notification.is-warning {
    background-color: #ffdd57;
    color: rgba(0, 0, 0, .7)
}

.notification.is-danger {
    background-color: #ff3860;
    color: #fff
}

.progress {
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    border-radius: 290486px;
    display: block;
    height: 1rem;
    overflow: hidden;
    padding: 0;
    width: 100%
}

.progress:not(:last-child) {
    margin-bottom: 1.5rem
}

.progress::-webkit-progress-bar {
    background-color: #dbdbdb
}

.progress::-webkit-progress-value {
    background-color: #4a4a4a
}

.progress::-moz-progress-bar {
    background-color: #4a4a4a
}

.progress.is-white::-webkit-progress-value {
    background-color: #fff
}

.progress.is-white::-moz-progress-bar {
    background-color: #fff
}

.progress.is-black::-webkit-progress-value {
    background-color: #0a0a0a
}

.progress.is-black::-moz-progress-bar {
    background-color: #0a0a0a
}

.progress.is-light::-webkit-progress-value {
    background-color: #f5f5f5
}

.progress.is-light::-moz-progress-bar {
    background-color: #f5f5f5
}

.progress.is-dark::-webkit-progress-value {
    background-color: #363636
}

.progress.is-dark::-moz-progress-bar {
    background-color: #363636
}

.progress.is-primary::-webkit-progress-value {
    background-color: #3986C3
}

.progress.is-primary::-moz-progress-bar {
    background-color: #3986C3
}

.progress.is-info::-webkit-progress-value {
    background-color: #3273dc
}

.progress.is-info::-moz-progress-bar {
    background-color: #3273dc
}

.progress.is-success::-webkit-progress-value {
    background-color: #15CA6E
}

.progress.is-success::-moz-progress-bar {
    background-color: #15CA6E
}

.progress.is-warning::-webkit-progress-value {
    background-color: #ffdd57
}

.progress.is-warning::-moz-progress-bar {
    background-color: #ffdd57
}

.progress.is-danger::-webkit-progress-value {
    background-color: #ff3860
}

.progress.is-danger::-moz-progress-bar {
    background-color: #ff3860
}

.progress.is-small {
    height: .75rem
}

.progress.is-medium {
    height: 1.25rem
}

.progress.is-large {
    height: 1.5rem
}

.table {
    background-color: #fff;
    color: #363636;
    margin-bottom: 1.5rem;
    width: 100%
}

.table td, .table th {
    border: 1px solid #dbdbdb;
    border-width: 0 0 1px;
    padding: .5em .75em;
    vertical-align: top
}

.table td.is-narrow, .table th.is-narrow {
    white-space: nowrap;
    width: 1%
}

.table th {
    color: #363636;
    text-align: left
}

.table tr:hover {
    background-color: #fafafa
}

.table thead td, .table thead th {
    border-width: 0 0 2px;
    color: #7a7a7a
}

.table tfoot td, .table tfoot th {
    border-width: 2px 0 0;
    color: #7a7a7a
}

.table tbody tr:last-child td, .table tbody tr:last-child th {
    border-bottom-width: 0
}

.table.is-bordered td, .table.is-bordered th {
    border-width: 1px
}

.table.is-bordered tr:last-child td, .table.is-bordered tr:last-child th {
    border-bottom-width: 1px
}

.table.is-narrow td, .table.is-narrow th {
    padding: .25em .5em
}

.table.is-striped tbody tr:nth-child(even) {
    background-color: #fafafa
}

.table.is-striped tbody tr:nth-child(even):hover {
    background-color: #f5f5f5
}

.tag {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 290486px;
    color: #4a4a4a;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: .75rem;
    height: 2em;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    line-height: 1.5;
    padding-left: .875em;
    padding-right: .875em;
    vertical-align: top;
    white-space: nowrap
}

.tag .delete {
    margin-left: .25em;
    margin-right: -.5em
}

.tag.is-white {
    background-color: #fff;
    color: #0a0a0a
}

.tag.is-black {
    background-color: #0a0a0a;
    color: #fff
}

.tag.is-light {
    background-color: #f5f5f5;
    color: #363636
}

.tag.is-dark {
    background-color: #363636;
    color: #f5f5f5
}

.tag.is-primary {
    background-color: #00d1b2;
    color: #fff
}

.tag.is-info {
    background-color: #3273dc;
    color: #fff
}

.tag.is-success {
    background-color: #23d160;
    color: #fff
}

.tag.is-warning {
    background-color: #ffdd57;
    color: rgba(0, 0, 0, .7)
}

.tag.is-danger {
    background-color: #ff3860;
    color: #fff
}

.tag.is-medium {
    font-size: 1rem
}

.tag.is-large {
    font-size: 1.25rem
}

.subtitle, .title {
    word-break: break-word
}

.subtitle:not(:last-child), .title:not(:last-child) {
    margin-bottom: 1.5rem
}

.subtitle em, .subtitle span, .title em, .title span {
    font-weight: 300
}

.subtitle strong, .title strong {
    font-weight: 500
}

.subtitle .tag, .title .tag {
    vertical-align: middle
}

.title {
    color: #363636;
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.125
}

.title strong {
    color: inherit
}

.title + .highlight {
    margin-top: -.75rem
}

.title + .subtitle {
    margin-top: -1.25rem
}

.title.is-1 {
    font-size: 3.5rem
}

.title.is-2 {
    font-size: 2.75rem
}

.title.is-3 {
    font-size: 2rem
}

.title.is-4 {
    font-size: 1.5rem
}

.title.is-5 {
    font-size: 1.25rem
}

.title.is-6 {
    font-size: 14px
}

.subtitle {
    color: #4a4a4a;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.25
}

.subtitle strong {
    color: #363636
}

.subtitle + .title {
    margin-top: -1.5rem
}

.subtitle.is-1 {
    font-size: 3.5rem
}

.subtitle.is-2 {
    font-size: 2.75rem
}

.subtitle.is-3 {
    font-size: 2rem
}

.subtitle.is-4 {
    font-size: 1.5rem
}

.subtitle.is-5 {
    font-size: 1.25rem
}

.subtitle.is-6 {
    font-size: 14px
}

.block:not(:last-child) {
    margin-bottom: 1.5rem
}

.container {
    position: relative
}

@media screen and (min-width: 1000px) {
    .container {
        margin: 0 auto;
        max-width: 960px
    }

    .container.is-fluid {
        margin: 0 20px;
        max-width: none
    }
}

@media screen and (min-width: 1192px) {
    .container {
        max-width: 1152px
    }
}

.delete {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: rgba(10, 10, 10, .2);
    border: none;
    border-radius: 290486px;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    height: 20px;
    outline: 0;
    position: relative;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    vertical-align: top;
    width: 20px
}

.delete:after, .delete:before {
    background-color: #fff;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.delete:before {
    height: 2px;
    width: 50%
}

.delete:after {
    height: 50%;
    width: 2px
}

.delete:focus, .delete:hover {
    background-color: rgba(10, 10, 10, .3)
}

.delete:active {
    background-color: rgba(10, 10, 10, .4)
}

.delete.is-small {
    height: 14px;
    width: 14px
}

.delete.is-medium {
    height: 26px;
    width: 26px
}

.delete.is-large {
    height: 30px;
    width: 30px
}

.fa {
    font-size: 21px;
    text-align: center;
    vertical-align: top
}

.heading {
    display: block;
    font-size: 11px;
    letter-spacing: 1px;
    margin-bottom: 5px;
    text-transform: uppercase
}

.highlight {
    font-weight: 400;
    max-width: 100%;
    overflow: hidden;
    padding: 0
}

.highlight:not(:last-child) {
    margin-bottom: 1.5rem
}

.highlight pre {
    overflow: auto;
    max-width: 100%;
    font-size: 1.3em;
}

.loader {
    -webkit-animation: spinAround .5s infinite linear;
    animation: spinAround .5s infinite linear;
    border: 2px solid #dbdbdb;
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1rem;
    position: relative;
    width: 1rem
}

.number {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #f5f5f5;
    border-radius: 290486px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 1.25rem;
    height: 2em;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 1.5rem;
    min-width: 2.5em;
    padding: .25rem .5rem;
    text-align: center;
    vertical-align: top
}

.card-header {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    box-shadow: 0 1px 2px rgba(10, 10, 10, .1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.card-header-title {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #363636;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    font-weight: 700;
    padding: .75rem
}

.card-header-icon {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: .75rem
}

.card-image {
    display: block;
    position: relative
}

.card-content {
    padding: 1.5rem
}

.card-content .title + .subtitle {
    margin-top: -1.5rem
}

.card-footer {
    border-top: 1px solid #dbdbdb;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.card-footer-item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: .75rem
}

.card-footer-item:not(:last-child) {
    border-right: 1px solid #dbdbdb
}

.card {
    background-color: #fff;
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
    color: #4a4a4a;
    max-width: 100%;
    position: relative
}

.card .media:not(:last-child) {
    margin-bottom: .75rem
}

.level-item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.level-item .subtitle, .level-item .title {
    margin-bottom: 0
}

@media screen and (max-width: 768px) {
    .level-item:not(:last-child) {
        margin-bottom: .75rem
    }
}

.level-left, .level-right {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.level-left .level-item:not(:last-child), .level-right .level-item:not(:last-child) {
    margin-right: .75rem
}

.level-left .level-item.is-flexible, .level-right .level-item.is-flexible {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

.level-left {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

@media screen and (max-width: 768px) {
    .level-left + .level-right {
        margin-top: 1.5rem
    }
}

@media screen and (min-width: 769px) {
    .level-left {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

.level-right {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

@media screen and (min-width: 769px) {
    .level-right {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

.level {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.level:not(:last-child) {
    margin-bottom: 1.5rem
}

.level code {
    border-radius: 3px
}

.level img {
    display: inline-block;
    vertical-align: top
}

.level.is-mobile {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.level.is-mobile > .level-item:not(:last-child) {
    margin-bottom: 0
}

.level.is-mobile > .level-item:not(.is-narrow) {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1
}

@media screen and (min-width: 769px) {
    .level {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .level > .level-item:not(.is-narrow) {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1
    }
}

.media-left, .media-right {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.media-left {
    margin-right: 1rem
}

.media-right {
    margin-left: 1rem
}

.media-content {
    -ms-flex-preferred-size: auto;
    flex-basis: auto;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    text-align: left
}

.media {
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: left
}

.media .content:not(:last-child) {
    margin-bottom: .75rem
}

.media .media {
    border-top: 1px solid rgba(219, 219, 219, .5);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: .75rem
}

.media .media .content:not(:last-child), .media .media .control:not(:last-child) {
    margin-bottom: .5rem
}

.media .media .media {
    padding-top: .5rem
}

.media .media .media + .media {
    margin-top: .5rem
}

.media + .media {
    border-top: 1px solid rgba(219, 219, 219, .5);
    margin-top: 1rem;
    padding-top: 1rem
}

.media.is-large + .media {
    margin-top: 1.5rem;
    padding-top: 1.5rem
}

.menu {
    font-size: 1rem
}

.menu-list {
    line-height: 1.25
}

.menu-list a {
    border-radius: 2px;
    color: #4a4a4a;
    display: block;
    padding: .5em .75em
}

.menu-list a:hover {
    background-color: #f5f5f5;
    color: #00d1b2
}

.menu-list a.is-active {
    background-color: #00d1b2;
    color: #fff
}

.menu-list li ul {
    border-left: 1px solid #dbdbdb;
    margin: .75em;
    padding-left: .75em
}

.menu-label {
    color: #7a7a7a;
    font-size: .8em;
    letter-spacing: .1em;
    text-transform: uppercase
}

.menu-label:not(:first-child) {
    margin-top: 1em
}

.menu-label:not(:last-child) {
    margin-bottom: 1em
}

.message {
    background-color: #f5f5f5;
    border-radius: 3px;
    font-size: 1rem
}

.message:not(:last-child) {
    margin-bottom: 1.5rem
}

.message.is-white {
    background-color: #fff
}

.message.is-white .message-header {
    background-color: #fff;
    color: #0a0a0a
}

.message.is-white .message-body {
    border-color: #fff;
    color: #4d4d4d
}

.message.is-black {
    background-color: #fafafa
}

.message.is-black .message-header {
    background-color: #0a0a0a;
    color: #fff
}

.message.is-black .message-body {
    border-color: #0a0a0a;
    color: #090909
}

.message.is-light {
    background-color: #fafafa
}

.message.is-light .message-header {
    background-color: #f5f5f5;
    color: #363636
}

.message.is-light .message-body {
    border-color: #f5f5f5;
    color: #505050
}

.message.is-dark {
    background-color: #fafafa
}

.message.is-dark .message-header {
    background-color: #363636;
    color: #f5f5f5
}

.message.is-dark .message-body {
    border-color: #363636;
    color: #2a2a2a
}

.message.is-primary {
    background-color: #f5fffd
}

.message.is-primary .message-header {
    background-color: #00d1b2;
    color: #fff
}

.message.is-primary .message-body {
    border-color: #00d1b2;
    color: #021310
}

.message.is-info {
    background-color: #f6f9fe
}

.message.is-info .message-header {
    background-color: #3273dc;
    color: #fff
}

.message.is-info .message-body {
    border-color: #3273dc;
    color: #22509a
}

.message.is-success {
    background-color: #f6fef9
}

.message.is-success .message-header {
    background-color: #23d160;
    color: #fff
}

.message.is-success .message-body {
    border-color: #23d160;
    color: #0e301a
}

.message.is-warning {
    background-color: #fffdf5
}

.message.is-warning .message-header {
    background-color: #ffdd57;
    color: rgba(0, 0, 0, .7)
}

.message.is-warning .message-body {
    border-color: #ffdd57;
    color: #3b3108
}

.message.is-danger {
    background-color: #fff5f7
}

.message.is-danger .message-header {
    background-color: #ff3860;
    color: #fff
}

.message.is-danger .message-body {
    border-color: #ff3860;
    color: #cd0930
}

.message-header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #4a4a4a;
    border-radius: 3px 3px 0 0;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    line-height: 1.25;
    padding: .5em .75em;
    position: relative
}

.message-header a, .message-header strong {
    color: inherit
}

.message-header a {
    text-decoration: underline
}

.message-header .delete {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    margin-left: .75em
}

.message-header + .message-body {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none
}

.message-body {
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    color: #4a4a4a;
    padding: 1em 1.25em
}

.message-body a, .message-body strong {
    color: inherit
}

.message-body a {
    text-decoration: underline
}

.message-body code, .message-body pre {
    background: #fff
}

.message-body pre code {
    background: 0 0
}

.modal-background {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(10, 10, 10, .86)
}

.modal-card, .modal-content {
    margin: 0 20px;
    max-height: calc(100vh - 160px);
    overflow: auto;
    position: relative;
    width: 100%
}

@media screen and (min-width: 769px) {
    .modal-card, .modal-content {
        margin: 0 auto;
        max-height: calc(100vh - 40px);
        width: 640px
    }
}

.modal-close {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background-color: rgba(10, 10, 10, .2);
    border: none;
    border-radius: 290486px;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    height: 20px;
    outline: 0;
    position: relative;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center;
    vertical-align: top;
    width: 20px;
    background: 0 0;
    height: 40px;
    position: fixed;
    right: 20px;
    top: 20px;
    width: 40px
}

.modal-close:after, .modal-close:before {
    background-color: #fff;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%)
}

.modal-close:before {
    height: 2px;
    width: 50%
}

.modal-close:after {
    height: 50%;
    width: 2px
}

.modal-close:focus, .modal-close:hover {
    background-color: rgba(10, 10, 10, .3)
}

.modal-close:active {
    background-color: rgba(10, 10, 10, .4)
}

.modal-close.is-small {
    height: 14px;
    width: 14px
}

.modal-close.is-medium {
    height: 26px;
    width: 26px
}

.modal-close.is-large {
    height: 30px;
    width: 30px
}

.modal-card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    max-height: calc(100vh - 40px);
    overflow: hidden
}

.modal-card-foot, .modal-card-head {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #f5f5f5;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding: 20px;
    position: relative
}

.modal-card-head {
    border-bottom: 1px solid #dbdbdb;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px
}

.modal-card-title {
    color: #363636;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 1.5rem;
    line-height: 1
}

.modal-card-foot {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top: 1px solid #dbdbdb
}

.modal-card-foot .button:not(:last-child) {
    margin-right: 10px
}

.modal-card-body {
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    overflow: auto;
    padding: 20px
}

.modal {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    overflow: hidden;
    position: fixed;
    z-index: 1986
}

.modal.is-active {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.nav-toggle {
    cursor: pointer;
    display: block;
    height: 3.5rem;
    position: relative;
    width: 3.5rem
}

.nav-toggle span {
    background-color: #4a4a4a;
    display: block;
    height: 1px;
    left: 50%;
    margin-left: -7px;
    position: absolute;
    top: 50%;
    -webkit-transition: none 86ms ease-out;
    transition: none 86ms ease-out;
    -webkit-transition-property: background, left, opacity, -webkit-transform;
    transition-property: background, left, opacity, -webkit-transform;
    transition-property: background, left, opacity, transform;
    transition-property: background, left, opacity, transform, -webkit-transform;
    width: 15px
}

.nav-toggle span:nth-child(1) {
    margin-top: -6px
}

.nav-toggle span:nth-child(2) {
    margin-top: -1px
}

.nav-toggle span:nth-child(3) {
    margin-top: 4px
}

.nav-toggle:hover {
    background-color: #f5f5f5
}

.nav-toggle.is-active span {
    background-color: #00d1b2
}

.nav-toggle.is-active span:nth-child(1) {
    margin-left: -5px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: left top;
    transform-origin: left top
}

.nav-toggle.is-active span:nth-child(2) {
    opacity: 0
}

.nav-toggle.is-active span:nth-child(3) {
    margin-left: -5px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom
}

@media screen and (min-width: 769px) {
    .nav-toggle {
        display: none
    }
}

.nav-item {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 1rem;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: .5rem .75rem
}

.nav-item a {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.nav-item img {
    max-height: 42px
}

.nav-item .button + .button {
    margin-left: .75rem
}

.nav-item .tag:first-child:not(:last-child) {
    margin-right: .5rem
}

.nav-item .tag:last-child:not(:first-child) {
    margin-left: .5rem
}

@media screen and (max-width: 768px) {
    .nav-item {
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start
    }
}

.nav-item a, a.nav-item {
    color: #FFFFFF;
    font-size: 16px;
    font-weight:500;
}

.nav-item a:hover, a.nav-item:hover {
    color: #363636
}

.nav-item a.is-active, a.nav-item.is-active {
    color: #363636
}

.nav-item a.is-tab, a.nav-item.is-tab {
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    padding-bottom: calc(.5rem - 1px);
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: calc(.5rem - 1px)
}

.nav-item a.is-tab:hover, a.nav-item.is-tab:hover {
    border-bottom-color: #00d1b2;
    border-top-color: transparent
}

.nav-item a.is-tab.is-active, a.nav-item.is-tab.is-active {
    border-bottom: 3px solid #00d1b2;
    color: #00d1b2;
    padding-bottom: calc(.5rem - 3px)
}

@media screen and (min-width: 1000px) {
    .nav-item a.is-brand, a.nav-item.is-brand {
        padding-left: 0
    }
}

@media screen and (max-width: 768px) {
    .nav-menu {
        background-color: #fff;
        box-shadow: 0 4px 7px rgba(10, 10, 10, .1);
        left: 0;
        display: none;
        right: 0;
        top: 100%;
        position: absolute
    }

    .nav-menu .nav-item {
        border-top: 1px solid rgba(219, 219, 219, .5);
        padding: .75rem
    }

    .nav-menu.is-active {
        display: block
    }
}

@media screen and (min-width: 769px) and (max-width: 999px) {
    .nav-menu {
        padding-right: 1.5rem
    }
}

.nav-left, .nav-right {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.nav-left {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap
}

.nav-center {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto
}

.nav-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

@media screen and (min-width: 769px) {
    .nav-right {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

.nav {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 3.5rem;
    position: relative;
    text-align: center;
    z-index: 800
}

.nav > .container {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 3.5rem;
    width: 100%
}

.nav.has-shadow {
    box-shadow: 0 2px 3px rgba(10, 10, 10, .1)
}
             nav  .subNav ul {
                display: none;
                 position: absolute;
                 background-color: #f9f9f9;
                 min-width: 160px;
                 box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                 z-index: 1;
            }
            nav  .subNav ul a {
                float: none;
                color: #777;
                padding: 12px 16px;
                text-decoration: none;
                text-align: center;
                display: block;
            }
                nav  .subNav ul a:hover {
                color: var(--app-default-color);
            }
            nav  .subNav:hover ul{
                display: block;
                
            }
            nav  .subNav ul li {
                display: block;
                text-align: left;
    margin: 3px 10px;
    color: #777;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
            }
            nav  .subNav ul li:hover {
                display: block;
                background: #e6ebee;
                cursor: pointer;
                
            }
            nav  .drop ul li a {
                line-height: 25px;
                text-align: center;
                color: #333;
            }
            .subNav{
                margin-top: 12px;
            }
             .toolbar{
               width: 100%;
            }
            .drop{
            background-color: white;
            border-radius: 10px;
                border: 1px solid #ededed;
                -webkit-box-shadow: 0 3px 10px 4px rgba(0,0,0,0.04);
    -moz-box-shadow: 0 3px 10px 4px rgba(0,0,0,0.04);
    box-shadow: 0 3px 10px 4px rgba(0,0,0,0.04);
            }
.pagination, .pagination-list {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center
}

.pagination-ellipsis, .pagination-link, .pagination-next, .pagination-previous {
    -moz-appearance: none;
    -webkit-appearance: none;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: none;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-size: 1rem;
    height: 2.285em;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    line-height: 1.5;
    padding-left: .75em;
    padding-right: .75em;
    position: relative;
    vertical-align: top;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: .875rem;
    padding-left: .5em;
    padding-right: .5em;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center
}

.pagination-ellipsis.is-active, .pagination-ellipsis.is-focused, .pagination-ellipsis:active, .pagination-ellipsis:focus, .pagination-link.is-active, .pagination-link.is-focused, .pagination-link:active, .pagination-link:focus, .pagination-next.is-active, .pagination-next.is-focused, .pagination-next:active, .pagination-next:focus, .pagination-previous.is-active, .pagination-previous.is-focused, .pagination-previous:active, .pagination-previous:focus {
    outline: 0
}

.pagination-ellipsis.is-disabled, .pagination-ellipsis[disabled], .pagination-link.is-disabled, .pagination-link[disabled], .pagination-next.is-disabled, .pagination-next[disabled], .pagination-previous.is-disabled, .pagination-previous[disabled] {
    pointer-events: none
}

.pagination-link, .pagination-next, .pagination-previous {
    border: 1px solid #dbdbdb;
    min-width: 2.5em
}

.pagination-link:hover, .pagination-next:hover, .pagination-previous:hover {
    border-color: #b5b5b5;
    color: #363636
}

.pagination-link:focus, .pagination-next:focus, .pagination-previous:focus {
    border-color: #00d1b2
}

.pagination-link:active, .pagination-next:active, .pagination-previous:active {
    box-shadow: inset 0 1px 2px rgba(10, 10, 10, .2)
}

.pagination-link.is-disabled, .pagination-link[disabled], .pagination-next.is-disabled, .pagination-next[disabled], .pagination-previous.is-disabled, .pagination-previous[disabled] {
    background: #dbdbdb;
    color: #7a7a7a;
    opacity: .5;
    pointer-events: none
}

.pagination-next, .pagination-previous {
    padding-left: .75em;
    padding-right: .75em
}

.pagination-link.is-current {
    background-color: #00d1b2;
    border-color: #00d1b2;
    color: #fff
}

.pagination-ellipsis {
    color: #b5b5b5;
    pointer-events: none
}

.pagination-list li:not(:first-child) {
    margin-left: .375rem
}

@media screen and (max-width: 768px) {
    .pagination {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .pagination-next, .pagination-previous {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
        width: calc(50% - .375rem)
    }

    .pagination-next {
        margin-left: .75rem
    }

    .pagination-list {
        margin-top: .75rem
    }

    .pagination-list li {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1
    }
}

@media screen and (min-width: 769px) {
    .pagination-list {
        -webkit-box-flex: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        -ms-flex-negative: 1;
        flex-shrink: 1;
        -webkit-box-pack: start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .pagination-next, .pagination-previous {
        margin-left: .75rem
    }

    .pagination-previous {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .pagination-next {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }

    .pagination {
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between
    }

    .pagination.is-centered .pagination-previous {
        margin-left: 0;
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .pagination.is-centered .pagination-list {
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2
    }

    .pagination.is-centered .pagination-next {
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }

    .pagination.is-right .pagination-previous {
        margin-left: 0;
        -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
        order: 1
    }

    .pagination.is-right .pagination-next {
        -webkit-box-ordinal-group: 3;
        -ms-flex-order: 2;
        order: 2;
        margin-right: .75rem
    }

    .pagination.is-right .pagination-list {
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-box-ordinal-group: 4;
        -ms-flex-order: 3;
        order: 3
    }
}

.panel {
    font-size: 1rem
}

.panel:not(:last-child) {
    margin-bottom: 1.5rem
}

.panel-block, .panel-heading, .panel-tabs {
    border-bottom: 1px solid #dbdbdb;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb
}

.panel-block:first-child, .panel-heading:first-child, .panel-tabs:first-child {
    border-top: 1px solid #dbdbdb
}

.panel-heading {
    background-color: #f5f5f5;
    border-radius: 3px 3px 0 0;
    color: #363636;
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.25;
    padding: .5em .75em
}

.panel-tabs {
    -webkit-box-align: end;
    -ms-flex-align: end;
    align-items: flex-end;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: .875em;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.panel-tabs a {
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: -1px;
    padding: .5em
}

.panel-tabs a.is-active {
    border-bottom-color: #4a4a4a;
    color: #363636
}

.panel-list a {
    color: #4a4a4a
}

.panel-list a:hover {
    color: #00d1b2
}

.panel-block {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #363636;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    padding: .5em .75em
}

.panel-block input[type=checkbox] {
    margin-right: .75em
}

.panel-block > .control {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    width: 100%
}

.panel-block.is-active {
    border-left-color: #00d1b2;
    color: #363636
}

.panel-block.is-active .panel-icon {
    color: #00d1b2
}

a.panel-block, label.panel-block {
    cursor: pointer
}

a.panel-block:hover, label.panel-block:hover {
    background-color: #f5f5f5
}

.panel-icon {
    display: inline-block;
    font-size: 14px;
    height: 1em;
    line-height: 1em;
    text-align: center;
    vertical-align: top;
    width: 1em;
    color: #7a7a7a;
    margin-right: .75em
}

.panel-icon .fa {
    font-size: inherit;
    line-height: inherit
}

.tabs {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 1rem;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap
}

.tabs:not(:last-child) {
    margin-bottom: 1.5rem
}

.tabs a {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: -1px;
    padding-left: 36px;
    padding-right: 36px;
    padding-bottom: 18px;
    vertical-align: top;
    font-weight:700;
}

.tabs a:hover {
    border-color: #00d1b2;
    color: #cfd4d7;
    
    
}
.tabs li:hover {
    border-color: #00d1b2;
     background-color: #ffffff8c;
    color: #cfd4d7;
    
    
}
.tabs li.is-active {
    border-color: #00d1b2;
     background-color: #ffffff8c;
    color: #cfd4d7;
    
    
}
.tabs li {
    display: block
}

.tabs li.is-active a {
    border-bottom-color: #00d1b2;
    color: #00d1b2
}

.tabs ul {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start
}

.tabs ul.is-left {
    padding-right: .75em
}

.tabs ul.is-center {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding-left: .75em;
    padding-right: .75em
}

.tabs ul.is-right {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-left: .75em
}

.tabs .icon:first-child {
    margin-right: .5em
}

.tabs .icon:last-child {
    margin-left: .5em
}

.tabs.is-centered ul {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.tabs.is-right ul {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end
}

.tabs.is-boxed a {
    border: 1px solid transparent;
    border-radius: 3px 3px 0 0
}

.tabs.is-boxed a:hover {
    background-color: #f5f5f5;
    border-bottom-color: #dbdbdb
}

.tabs.is-boxed li.is-active a {
    background-color: #fff;
    border-color: #dbdbdb;
    border-bottom-color: transparent !important
}

.tabs.is-fullwidth li {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.tabs.is-toggle a {
    border: 1px solid #dbdbdb;
    margin-bottom: 0;
    position: relative
}

.tabs.is-toggle a:hover {
    background-color: #f5f5f5;
    border-color: #b5b5b5;
    z-index: 2
}

.tabs.is-toggle li + li {
    margin-left: -1px
}

.tabs.is-toggle li:first-child a {
    border-radius: 3px 0 0 3px
}

.tabs.is-toggle li:last-child a {
    border-radius: 0 3px 3px 0
}

.tabs.is-toggle li.is-active a {
    background-color: #00d1b2;
    border-color: #00d1b2;
    color: #fff;
    z-index: 1
}

.tabs.is-toggle ul {
    border-bottom: none
}

.tabs.is-small {
    font-size: .75rem
}

.tabs.is-medium {
    font-size: 1.25rem
}

.tabs.is-large {
    font-size: 1.5rem
}

/* todo there is a direct copy of this in shared-styles.js */
.column {
    display: block;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    padding: .75rem
}

.columns.is-mobile > .column.is-narrow {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none
}

.columns.is-mobile > .column.is-full {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 100%
}

.columns.is-mobile > .column.is-three-quarters {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 75%
}

.columns.is-mobile > .column.is-two-thirds {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 66.6666%
}

.columns.is-mobile > .column.is-half {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 50%
}

.columns.is-mobile > .column.is-one-third {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 33.3333%
}

.columns.is-mobile > .column.is-one-quarter {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 25%
}

.columns.is-mobile > .column.is-offset-three-quarters {
    margin-left: 75%
}

.columns.is-mobile > .column.is-offset-two-thirds {
    margin-left: 66.6666%
}

.columns.is-mobile > .column.is-offset-half {
    margin-left: 50%
}

.columns.is-mobile > .column.is-offset-one-third {
    margin-left: 33.3333%
}

.columns.is-mobile > .column.is-offset-one-quarter {
    margin-left: 25%
}

.columns.is-mobile > .column.is-1 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 8.33333%
}

.columns.is-mobile > .column.is-offset-1 {
    margin-left: 8.33333%
}

.columns.is-mobile > .column.is-2 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 16.66667%
}

.columns.is-mobile > .column.is-offset-2 {
    margin-left: 16.66667%
}

.columns.is-mobile > .column.is-3 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 25%
}

.columns.is-mobile > .column.is-offset-3 {
    margin-left: 25%
}

.columns.is-mobile > .column.is-4 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 33.33333%
}

.columns.is-mobile > .column.is-offset-4 {
    margin-left: 33.33333%
}

.columns.is-mobile > .column.is-5 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 41.66667%
}

.columns.is-mobile > .column.is-offset-5 {
    margin-left: 41.66667%
}

.columns.is-mobile > .column.is-6 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 50%
}

.columns.is-mobile > .column.is-offset-6 {
    margin-left: 50%
}

.columns.is-mobile > .column.is-7 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 58.33333%
}

.columns.is-mobile > .column.is-offset-7 {
    margin-left: 58.33333%
}

.columns.is-mobile > .column.is-8 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 66.66667%
}

.columns.is-mobile > .column.is-offset-8 {
    margin-left: 66.66667%
}

.columns.is-mobile > .column.is-9 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 75%
}

.columns.is-mobile > .column.is-offset-9 {
    margin-left: 75%
}

.columns.is-mobile > .column.is-10 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 83.33333%
}

.columns.is-mobile > .column.is-offset-10 {
    margin-left: 83.33333%
}

.columns.is-mobile > .column.is-11 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 91.66667%
}

.columns.is-mobile > .column.is-offset-11 {
    margin-left: 91.66667%
}

.columns.is-mobile > .column.is-12 {
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    width: 100%
}

.columns.is-mobile > .column.is-offset-12 {
    margin-left: 100%
}

@media screen and (max-width: 768px) {
    .column.is-narrow-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none
    }

    .column.is-full-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 100%
    }

    .column.is-three-quarters-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 75%
    }

    .column.is-two-thirds-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 66.6666%
    }

    .column.is-half-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 50%
    }

    .column.is-one-third-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.3333%
    }

    .column.is-one-quarter-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 25%
    }

    .column.is-offset-three-quarters-mobile {
        margin-left: 75%
    }

    .column.is-offset-two-thirds-mobile {
        margin-left: 66.6666%
    }

    .column.is-offset-half-mobile {
        margin-left: 50%
    }

    .column.is-offset-one-third-mobile {
        margin-left: 33.3333%
    }

    .column.is-offset-one-quarter-mobile {
        margin-left: 25%
    }

    .column.is-1-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 8.33333%
    }

    .column.is-offset-1-mobile {
        margin-left: 8.33333%
    }

    .column.is-2-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 16.66667%
    }

    .column.is-offset-2-mobile {
        margin-left: 16.66667%
    }

    .column.is-3-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 25%
    }

    .column.is-offset-3-mobile {
        margin-left: 25%
    }

    .column.is-4-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.33333%
    }

    .column.is-offset-4-mobile {
        margin-left: 33.33333%
    }

    .column.is-5-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 41.66667%
    }

    .column.is-offset-5-mobile {
        margin-left: 41.66667%
    }

    .column.is-6-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 50%
    }

    .column.is-offset-6-mobile {
        margin-left: 50%
    }

    .column.is-7-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 58.33333%
    }

    .column.is-offset-7-mobile {
        margin-left: 58.33333%
    }

    .column.is-8-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 66.66667%
    }

    .column.is-offset-8-mobile {
        margin-left: 66.66667%
    }

    .column.is-9-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 75%
    }

    .column.is-offset-9-mobile {
        margin-left: 75%
    }

    .column.is-10-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 83.33333%
    }

    .column.is-offset-10-mobile {
        margin-left: 83.33333%
    }

    .column.is-11-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 91.66667%
    }

    .column.is-offset-11-mobile {
        margin-left: 91.66667%
    }

    .column.is-12-mobile {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 100%
    }

    .column.is-offset-12-mobile {
        margin-left: 100%
    }
}

@media screen and (min-width: 769px) {
    .column.is-narrow, .column.is-narrow-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none
    }

    .column.is-full, .column.is-full-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 100%
    }

    .column.is-three-quarters, .column.is-three-quarters-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 75%
    }

    .column.is-two-thirds, .column.is-two-thirds-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 66.6666%
    }

    .column.is-half, .column.is-half-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 50%
    }

    .column.is-one-third, .column.is-one-third-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.3333%
    }

    .column.is-one-quarter, .column.is-one-quarter-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 25%
    }

    .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {
        margin-left: 75%
    }

    .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {
        margin-left: 66.6666%
    }

    .column.is-offset-half, .column.is-offset-half-tablet {
        margin-left: 50%
    }

    .column.is-offset-one-third, .column.is-offset-one-third-tablet {
        margin-left: 33.3333%
    }

    .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {
        margin-left: 25%
    }

    .column.is-1, .column.is-1-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 8.33333%
    }

    .column.is-offset-1, .column.is-offset-1-tablet {
        margin-left: 8.33333%
    }

    .column.is-2, .column.is-2-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 16.66667%
    }

    .column.is-offset-2, .column.is-offset-2-tablet {
        margin-left: 16.66667%
    }

    .column.is-3, .column.is-3-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 25%
    }

    .column.is-offset-3, .column.is-offset-3-tablet {
        margin-left: 25%
    }

    .column.is-4, .column.is-4-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.33333%
    }

    .column.is-offset-4, .column.is-offset-4-tablet {
        margin-left: 33.33333%
    }

    .column.is-5, .column.is-5-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 41.66667%
    }

    .column.is-offset-5, .column.is-offset-5-tablet {
        margin-left: 41.66667%
    }

    .column.is-6, .column.is-6-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 50%
    }

    .column.is-offset-6, .column.is-offset-6-tablet {
        margin-left: 50%
    }

    .column.is-7, .column.is-7-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 58.33333%
    }

    .column.is-offset-7, .column.is-offset-7-tablet {
        margin-left: 58.33333%
    }

    .column.is-8, .column.is-8-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 66.66667%
    }

    .column.is-offset-8, .column.is-offset-8-tablet {
        margin-left: 66.66667%
    }

    .column.is-9, .column.is-9-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 75%
    }

    .column.is-offset-9, .column.is-offset-9-tablet {
        margin-left: 75%
    }

    .column.is-10, .column.is-10-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 83.33333%
    }

    .column.is-offset-10, .column.is-offset-10-tablet {
        margin-left: 83.33333%
    }

    .column.is-11, .column.is-11-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 91.66667%
    }

    .column.is-offset-11, .column.is-offset-11-tablet {
        margin-left: 91.66667%
    }

    .column.is-12, .column.is-12-tablet {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 100%
    }

    .column.is-offset-12, .column.is-offset-12-tablet {
        margin-left: 100%
    }
}

@media screen and (min-width: 1000px) {
    .column.is-narrow-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none
    }

    .column.is-full-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 100%
    }

    .column.is-three-quarters-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 75%
    }

    .column.is-two-thirds-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 66.6666%
    }

    .column.is-half-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 50%
    }

    .column.is-one-third-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.3333%
    }

    .column.is-one-quarter-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 25%
    }

    .column.is-offset-three-quarters-desktop {
        margin-left: 75%
    }

    .column.is-offset-two-thirds-desktop {
        margin-left: 66.6666%
    }

    .column.is-offset-half-desktop {
        margin-left: 50%
    }

    .column.is-offset-one-third-desktop {
        margin-left: 33.3333%
    }

    .column.is-offset-one-quarter-desktop {
        margin-left: 25%
    }

    .column.is-1-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 8.33333%
    }

    .column.is-offset-1-desktop {
        margin-left: 8.33333%
    }

    .column.is-2-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 16.66667%
    }

    .column.is-offset-2-desktop {
        margin-left: 16.66667%
    }

    .column.is-3-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 25%
    }

    .column.is-offset-3-desktop {
        margin-left: 25%
    }

    .column.is-4-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.33333%
    }

    .column.is-offset-4-desktop {
        margin-left: 33.33333%
    }

    .column.is-5-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 41.66667%
    }

    .column.is-offset-5-desktop {
        margin-left: 41.66667%
    }

    .column.is-6-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 50%
    }

    .column.is-offset-6-desktop {
        margin-left: 50%
    }

    .column.is-7-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 58.33333%
    }

    .column.is-offset-7-desktop {
        margin-left: 58.33333%
    }

    .column.is-8-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 66.66667%
    }

    .column.is-offset-8-desktop {
        margin-left: 66.66667%
    }

    .column.is-9-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 75%
    }

    .column.is-offset-9-desktop {
        margin-left: 75%
    }

    .column.is-10-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 83.33333%
    }

    .column.is-offset-10-desktop {
        margin-left: 83.33333%
    }

    .column.is-11-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 91.66667%
    }

    .column.is-offset-11-desktop {
        margin-left: 91.66667%
    }

    .column.is-12-desktop {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 100%
    }

    .column.is-offset-12-desktop {
        margin-left: 100%
    }
}

@media screen and (min-width: 1192px) {
    .column.is-narrow-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none
    }

    .column.is-full-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 100%
    }

    .column.is-three-quarters-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 75%
    }

    .column.is-two-thirds-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 66.6666%
    }

    .column.is-half-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 50%
    }

    .column.is-one-third-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.3333%
    }

    .column.is-one-quarter-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 25%
    }

    .column.is-offset-three-quarters-widescreen {
        margin-left: 75%
    }

    .column.is-offset-two-thirds-widescreen {
        margin-left: 66.6666%
    }

    .column.is-offset-half-widescreen {
        margin-left: 50%
    }

    .column.is-offset-one-third-widescreen {
        margin-left: 33.3333%
    }

    .column.is-offset-one-quarter-widescreen {
        margin-left: 25%
    }

    .column.is-1-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 8.33333%
    }

    .column.is-offset-1-widescreen {
        margin-left: 8.33333%
    }

    .column.is-2-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 16.66667%
    }

    .column.is-offset-2-widescreen {
        margin-left: 16.66667%
    }

    .column.is-3-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 25%
    }

    .column.is-offset-3-widescreen {
        margin-left: 25%
    }

    .column.is-4-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.33333%
    }

    .column.is-offset-4-widescreen {
        margin-left: 33.33333%
    }

    .column.is-5-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 41.66667%
    }

    .column.is-offset-5-widescreen {
        margin-left: 41.66667%
    }

    .column.is-6-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 50%
    }

    .column.is-offset-6-widescreen {
        margin-left: 50%
    }

    .column.is-7-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 58.33333%
    }

    .column.is-offset-7-widescreen {
        margin-left: 58.33333%
    }

    .column.is-8-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 66.66667%
    }

    .column.is-offset-8-widescreen {
        margin-left: 66.66667%
    }

    .column.is-9-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 75%
    }

    .column.is-offset-9-widescreen {
        margin-left: 75%
    }

    .column.is-10-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 83.33333%
    }

    .column.is-offset-10-widescreen {
        margin-left: 83.33333%
    }

    .column.is-11-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 91.66667%
    }

    .column.is-offset-11-widescreen {
        margin-left: 91.66667%
    }

    .column.is-12-widescreen {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 100%
    }

    .column.is-offset-12-widescreen {
        margin-left: 100%
    }
}

.columns {
    margin-left: -.75rem;
    margin-right: -.75rem;
    margin-top: -.75rem
}

.columns:last-child {
    margin-bottom: -.75rem
}

.columns:not(:last-child) {
    margin-bottom: .75rem
}

.columns.is-centered {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center
}

.columns.is-gapless {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0
}

.columns.is-gapless:last-child {
    margin-bottom: 0
}

.columns.is-gapless:not(:last-child) {
    margin-bottom: 1.5rem
}

.columns.is-gapless > .column {
    margin: 0;
    padding: 0
}

@media screen and (min-width: 769px) {
    .columns.is-grid {
        -ms-flex-wrap: wrap;
        flex-wrap: wrap
    }

    .columns.is-grid > .column {
        max-width: 33.3333%;
        padding: .75rem;
        width: 33.3333%
    }

    .columns.is-grid > .column + .column {
        margin-left: 0
    }
}

.columns.is-mobile {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.columns.is-multiline {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.columns.is-vcentered {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
}

@media screen and (min-width: 769px) {
    .columns:not(.is-desktop) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

@media screen and (min-width: 1000px) {
    .columns.is-desktop {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }
}

.tile {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    display: block;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1;
    min-height: -webkit-min-content;
    min-height: -moz-min-content;
    min-height: min-content
}

.tile.is-ancestor {
    margin-left: -.75rem;
    margin-right: -.75rem;
    margin-top: -.75rem
}

.tile.is-ancestor:last-child {
    margin-bottom: -.75rem
}

.tile.is-ancestor:not(:last-child) {
    margin-bottom: .75rem
}

.tile.is-child {
    margin: 0 !important
}

.tile.is-parent {
    padding: .75rem
}

.tile.is-vertical {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column
}

.tile.is-vertical > .tile.is-child:not(:last-child) {
    margin-bottom: 1.5rem !important
}

@media screen and (min-width: 769px) {
    .tile:not(.is-child) {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .tile.is-1 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 8.33333%
    }

    .tile.is-2 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 16.66667%
    }

    .tile.is-3 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 25%
    }

    .tile.is-4 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 33.33333%
    }

    .tile.is-5 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 41.66667%
    }

    .tile.is-6 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 50%
    }

    .tile.is-7 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 58.33333%
    }

    .tile.is-8 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 66.66667%
    }

    .tile.is-9 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 75%
    }

    .tile.is-10 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 83.33333%
    }

    .tile.is-11 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 91.66667%
    }

    .tile.is-12 {
        -webkit-box-flex: 0;
        -ms-flex: none;
        flex: none;
        width: 100%
    }
}

.hero-video {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden
}

.hero-video video {
    left: 50%;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    top: 50%;
    -webkit-transform: translate3d(-50%, -50%, 0);
    transform: translate3d(-50%, -50%, 0)
}

.hero-video.is-transparent {
    opacity: .3
}

@media screen and (max-width: 768px) {
    .hero-video {
        display: none
    }
}

.hero-buttons {
    margin-top: 1.5rem
}

@media screen and (max-width: 768px) {
    .hero-buttons .button {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex
    }

    .hero-buttons .button:not(:last-child) {
        margin-bottom: .75rem
    }
}

@media screen and (min-width: 769px) {
    .hero-buttons {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center
    }

    .hero-buttons .button:not(:last-child) {
        margin-right: 1.5rem
    }
}

.hero-foot, .hero-head {
    -webkit-box-flex: 0;
    -ms-flex-positive: 0;
    flex-grow: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0
}

.hero-body {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    padding: 3rem 1.5rem
}

@media screen and (min-width: 1192px) {
    .hero-body {
        padding-left: 0;
        padding-right: 0
    }
}

.hero {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.hero .nav {
    background: 0 0;
    box-shadow: 0 1px 0 rgba(219, 219, 219, .3)
}

.hero .tabs ul {
    border-bottom: none
}

.hero.is-white {
    background-color: #fff;
    color: #0a0a0a
}

.hero.is-white a, .hero.is-white strong {
    color: inherit
}

.hero.is-white .title {
    color: #0a0a0a
}

.hero.is-white .subtitle {
    color: rgba(10, 10, 10, .9)
}

.hero.is-white .subtitle a, .hero.is-white .subtitle strong {
    color: #0a0a0a
}

.hero.is-white .nav {
    box-shadow: 0 1px 0 rgba(10, 10, 10, .2)
}

@media screen and (max-width: 768px) {
    .hero.is-white .nav-menu {
        background-color: #fff
    }
}

.hero.is-white .nav-item a:not(.button), .hero.is-white a.nav-item {
    color: rgba(10, 10, 10, .7)
}

.hero.is-white .nav-item a:not(.button).is-active, .hero.is-white .nav-item a:not(.button):hover, .hero.is-white a.nav-item.is-active, .hero.is-white a.nav-item:hover {
    color: #0a0a0a
}

.hero.is-white .tabs a {
    color: #0a0a0a;
    opacity: .9
}

.hero.is-white .tabs a:hover {
    opacity: 1
}

.hero.is-white .tabs li.is-active a {
    opacity: 1
}

.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {
    color: #0a0a0a
}

.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, .1)
}

.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {
    background-color: #0a0a0a;
    border-color: #0a0a0a;
    color: #fff
}

.hero.is-white.is-bold {
    background-image: -webkit-linear-gradient(309deg, #e6e6e6 0, #fff 71%, #fff 100%);
    background-image: linear-gradient(141deg, #e6e6e6 0, #fff 71%, #fff 100%)
}

@media screen and (max-width: 768px) {
    .hero.is-white .nav-toggle span {
        background-color: #0a0a0a
    }

    .hero.is-white .nav-toggle:hover {
        background-color: rgba(10, 10, 10, .1)
    }

    .hero.is-white .nav-toggle.is-active span {
        background-color: #0a0a0a
    }

    .hero.is-white .nav-menu .nav-item {
        border-top-color: rgba(10, 10, 10, .2)
    }
}

.hero.is-black {
    background-color: #0a0a0a;
    color: #fff
}

.hero.is-black a, .hero.is-black strong {
    color: inherit
}

.hero.is-black .title {
    color: #fff
}

.hero.is-black .subtitle {
    color: rgba(255, 255, 255, .9)
}

.hero.is-black .subtitle a, .hero.is-black .subtitle strong {
    color: #fff
}

.hero.is-black .nav {
    box-shadow: 0 1px 0 rgba(255, 255, 255, .2)
}

@media screen and (max-width: 768px) {
    .hero.is-black .nav-menu {
        background-color: #0a0a0a
    }
}

.hero.is-black .nav-item a:not(.button), .hero.is-black a.nav-item {
    color: rgba(255, 255, 255, .7)
}

.hero.is-black .nav-item a:not(.button).is-active, .hero.is-black .nav-item a:not(.button):hover, .hero.is-black a.nav-item.is-active, .hero.is-black a.nav-item:hover {
    color: #fff
}

.hero.is-black .tabs a {
    color: #fff;
    opacity: .9
}

.hero.is-black .tabs a:hover {
    opacity: 1
}

.hero.is-black .tabs li.is-active a {
    opacity: 1
}

.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {
    color: #fff
}

.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, .1)
}

.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #0a0a0a
}

.hero.is-black.is-bold {
    background-image: -webkit-linear-gradient(309deg, #000 0, #0a0a0a 71%, #181616 100%);
    background-image: linear-gradient(141deg, #000 0, #0a0a0a 71%, #181616 100%)
}

@media screen and (max-width: 768px) {
    .hero.is-black .nav-toggle span {
        background-color: #fff
    }

    .hero.is-black .nav-toggle:hover {
        background-color: rgba(10, 10, 10, .1)
    }

    .hero.is-black .nav-toggle.is-active span {
        background-color: #fff
    }

    .hero.is-black .nav-menu .nav-item {
        border-top-color: rgba(255, 255, 255, .2)
    }
}

.hero.is-light {
    background-color: #f5f5f5;
    color: #363636
}

.hero.is-light a, .hero.is-light strong {
    color: inherit
}

.hero.is-light .title {
    color: #363636
}

.hero.is-light .subtitle {
    color: rgba(54, 54, 54, .9)
}

.hero.is-light .subtitle a, .hero.is-light .subtitle strong {
    color: #363636
}

.hero.is-light .nav {
    box-shadow: 0 1px 0 rgba(54, 54, 54, .2)
}

@media screen and (max-width: 768px) {
    .hero.is-light .nav-menu {
        background-color: #f5f5f5
    }
}

.hero.is-light .nav-item a:not(.button), .hero.is-light a.nav-item {
    color: rgba(54, 54, 54, .7)
}

.hero.is-light .nav-item a:not(.button).is-active, .hero.is-light .nav-item a:not(.button):hover, .hero.is-light a.nav-item.is-active, .hero.is-light a.nav-item:hover {
    color: #363636
}

.hero.is-light .tabs a {
    color: #363636;
    opacity: .9
}

.hero.is-light .tabs a:hover {
    opacity: 1
}

.hero.is-light .tabs li.is-active a {
    opacity: 1
}

.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {
    color: #363636
}

.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, .1)
}

.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {
    background-color: #363636;
    border-color: #363636;
    color: #f5f5f5
}

.hero.is-light.is-bold {
    background-image: -webkit-linear-gradient(309deg, #dfd8d8 0, #f5f5f5 71%, #fff 100%);
    background-image: linear-gradient(141deg, #dfd8d8 0, #f5f5f5 71%, #fff 100%)
}

@media screen and (max-width: 768px) {
    .hero.is-light .nav-toggle span {
        background-color: #363636
    }

    .hero.is-light .nav-toggle:hover {
        background-color: rgba(10, 10, 10, .1)
    }

    .hero.is-light .nav-toggle.is-active span {
        background-color: #363636
    }

    .hero.is-light .nav-menu .nav-item {
        border-top-color: rgba(54, 54, 54, .2)
    }
}

.hero.is-dark {
    background-color: #363636;
    color: #f5f5f5
}

.hero.is-dark a, .hero.is-dark strong {
    color: inherit
}

.hero.is-dark .title {
    color: #f5f5f5
}

.hero.is-dark .subtitle {
    color: rgba(245, 245, 245, .9)
}

.hero.is-dark .subtitle a, .hero.is-dark .subtitle strong {
    color: #f5f5f5
}

.hero.is-dark .nav {
    box-shadow: 0 1px 0 rgba(245, 245, 245, .2)
}

@media screen and (max-width: 768px) {
    .hero.is-dark .nav-menu {
        background-color: #363636
    }
}

.hero.is-dark .nav-item a:not(.button), .hero.is-dark a.nav-item {
    color: rgba(245, 245, 245, .7)
}

.hero.is-dark .nav-item a:not(.button).is-active, .hero.is-dark .nav-item a:not(.button):hover, .hero.is-dark a.nav-item.is-active, .hero.is-dark a.nav-item:hover {
    color: #f5f5f5
}

.hero.is-dark .tabs a {
    color: #f5f5f5;
    opacity: .9
}

.hero.is-dark .tabs a:hover {
    opacity: 1
}

.hero.is-dark .tabs li.is-active a {
    opacity: 1
}

.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {
    color: #f5f5f5
}

.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, .1)
}

.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {
    background-color: #f5f5f5;
    border-color: #f5f5f5;
    color: #363636
}

.hero.is-dark.is-bold {
    background-image: -webkit-linear-gradient(309deg, #1f1919 0, #363636 71%, #463f3f 100%);
    background-image: linear-gradient(141deg, #1f1919 0, #363636 71%, #463f3f 100%)
}

@media screen and (max-width: 768px) {
    .hero.is-dark .nav-toggle span {
        background-color: #f5f5f5
    }

    .hero.is-dark .nav-toggle:hover {
        background-color: rgba(10, 10, 10, .1)
    }

    .hero.is-dark .nav-toggle.is-active span {
        background-color: #f5f5f5
    }

    .hero.is-dark .nav-menu .nav-item {
        border-top-color: rgba(245, 245, 245, .2)
    }
}

.hero.is-primary {
    background-color: #00d1b2;
    color: #fff
}

.hero.is-primary a, .hero.is-primary strong {
    color: inherit
}

.hero.is-primary .title {
    color: #fff
}

.hero.is-primary .subtitle {
    color: rgba(255, 255, 255, .9)
}

.hero.is-primary .subtitle a, .hero.is-primary .subtitle strong {
    color: #fff
}

.hero.is-primary .nav {
    box-shadow: 0 1px 0 rgba(255, 255, 255, .2)
}

@media screen and (max-width: 768px) {
    .hero.is-primary .nav-menu {
        background-color: #00d1b2
    }
}

.hero.is-primary .nav-item a:not(.button), .hero.is-primary a.nav-item {
    color: rgba(255, 255, 255, .7)
}

.hero.is-primary .nav-item a:not(.button).is-active, .hero.is-primary .nav-item a:not(.button):hover, .hero.is-primary a.nav-item.is-active, .hero.is-primary a.nav-item:hover {
    color: #fff
}

.hero.is-primary .tabs a {
    color: #fff;
    opacity: .9
}

.hero.is-primary .tabs a:hover {
    opacity: 1
}

.hero.is-primary .tabs li.is-active a {
    opacity: 1
}

.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {
    color: #fff
}

.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, .1)
}

.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #00d1b2
}

.hero.is-primary.is-bold {
    background-image: -webkit-linear-gradient(309deg, #009e6c 0, #00d1b2 71%, #00e7eb 100%);
    background-image: linear-gradient(141deg, #009e6c 0, #00d1b2 71%, #00e7eb 100%)
}

@media screen and (max-width: 768px) {
    .hero.is-primary .nav-toggle span {
        background-color: #fff
    }

    .hero.is-primary .nav-toggle:hover {
        background-color: rgba(10, 10, 10, .1)
    }

    .hero.is-primary .nav-toggle.is-active span {
        background-color: #fff
    }

    .hero.is-primary .nav-menu .nav-item {
        border-top-color: rgba(255, 255, 255, .2)
    }
}

.hero.is-info {
    background-color: #3273dc;
    color: #fff
}

.hero.is-info a, .hero.is-info strong {
    color: inherit
}

.hero.is-info .title {
    color: #fff
}

.hero.is-info .subtitle {
    color: rgba(255, 255, 255, .9)
}

.hero.is-info .subtitle a, .hero.is-info .subtitle strong {
    color: #fff
}

.hero.is-info .nav {
    box-shadow: 0 1px 0 rgba(255, 255, 255, .2)
}

@media screen and (max-width: 768px) {
    .hero.is-info .nav-menu {
        background-color: #3273dc
    }
}

.hero.is-info .nav-item a:not(.button), .hero.is-info a.nav-item {
    color: rgba(255, 255, 255, .7)
}

.hero.is-info .nav-item a:not(.button).is-active, .hero.is-info .nav-item a:not(.button):hover, .hero.is-info a.nav-item.is-active, .hero.is-info a.nav-item:hover {
    color: #fff
}

.hero.is-info .tabs a {
    color: #fff;
    opacity: .9
}

.hero.is-info .tabs a:hover {
    opacity: 1
}

.hero.is-info .tabs li.is-active a {
    opacity: 1
}

.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {
    color: #fff
}

.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, .1)
}

.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #3273dc
}

.hero.is-info.is-bold {
    background-image: -webkit-linear-gradient(309deg, #1577c6 0, #3273dc 71%, #4366e5 100%);
    background-image: linear-gradient(141deg, #1577c6 0, #3273dc 71%, #4366e5 100%)
}

@media screen and (max-width: 768px) {
    .hero.is-info .nav-toggle span {
        background-color: #fff
    }

    .hero.is-info .nav-toggle:hover {
        background-color: rgba(10, 10, 10, .1)
    }

    .hero.is-info .nav-toggle.is-active span {
        background-color: #fff
    }

    .hero.is-info .nav-menu .nav-item {
        border-top-color: rgba(255, 255, 255, .2)
    }
}

.hero.is-success {
    background-color: #23d160;
    color: #fff
}

.hero.is-success a, .hero.is-success strong {
    color: inherit
}

.hero.is-success .title {
    color: #fff
}

.hero.is-success .subtitle {
    color: rgba(255, 255, 255, .9)
}

.hero.is-success .subtitle a, .hero.is-success .subtitle strong {
    color: #fff
}

.hero.is-success .nav {
    box-shadow: 0 1px 0 rgba(255, 255, 255, .2)
}

@media screen and (max-width: 768px) {
    .hero.is-success .nav-menu {
        background-color: #23d160
    }
}

.hero.is-success .nav-item a:not(.button), .hero.is-success a.nav-item {
    color: rgba(255, 255, 255, .7)
}

.hero.is-success .nav-item a:not(.button).is-active, .hero.is-success .nav-item a:not(.button):hover, .hero.is-success a.nav-item.is-active, .hero.is-success a.nav-item:hover {
    color: #fff
}

.hero.is-success .tabs a {
    color: #fff;
    opacity: .9
}

.hero.is-success .tabs a:hover {
    opacity: 1
}

.hero.is-success .tabs li.is-active a {
    opacity: 1
}

.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {
    color: #fff
}

.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, .1)
}

.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #23d160
}

.hero.is-success.is-bold {
    background-image: -webkit-linear-gradient(309deg, #12af2f 0, #23d160 71%, #2ce28a 100%);
    background-image: linear-gradient(141deg, #12af2f 0, #23d160 71%, #2ce28a 100%)
}

@media screen and (max-width: 768px) {
    .hero.is-success .nav-toggle span {
        background-color: #fff
    }

    .hero.is-success .nav-toggle:hover {
        background-color: rgba(10, 10, 10, .1)
    }

    .hero.is-success .nav-toggle.is-active span {
        background-color: #fff
    }

    .hero.is-success .nav-menu .nav-item {
        border-top-color: rgba(255, 255, 255, .2)
    }
}

.hero.is-warning {
    background-color: #ffdd57;
    color: rgba(0, 0, 0, .7)
}

.hero.is-warning a, .hero.is-warning strong {
    color: inherit
}

.hero.is-warning .title {
    color: rgba(0, 0, 0, .7)
}

.hero.is-warning .subtitle {
    color: rgba(0, 0, 0, .9)
}

.hero.is-warning .subtitle a, .hero.is-warning .subtitle strong {
    color: rgba(0, 0, 0, .7)
}

.hero.is-warning .nav {
    box-shadow: 0 1px 0 rgba(0, 0, 0, .2)
}

@media screen and (max-width: 768px) {
    .hero.is-warning .nav-menu {
        background-color: #ffdd57
    }
}

.hero.is-warning .nav-item a:not(.button), .hero.is-warning a.nav-item {
    color: rgba(0, 0, 0, .7)
}

.hero.is-warning .nav-item a:not(.button).is-active, .hero.is-warning .nav-item a:not(.button):hover, .hero.is-warning a.nav-item.is-active, .hero.is-warning a.nav-item:hover {
    color: rgba(0, 0, 0, .7)
}

.hero.is-warning .tabs a {
    color: rgba(0, 0, 0, .7);
    opacity: .9
}

.hero.is-warning .tabs a:hover {
    opacity: 1
}

.hero.is-warning .tabs li.is-active a {
    opacity: 1
}

.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {
    color: rgba(0, 0, 0, .7)
}

.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, .1)
}

.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {
    background-color: rgba(0, 0, 0, .7);
    border-color: rgba(0, 0, 0, .7);
    color: #ffdd57
}

.hero.is-warning.is-bold {
    background-image: -webkit-linear-gradient(309deg, #ffaf24 0, #ffdd57 71%, #fffa70 100%);
    background-image: linear-gradient(141deg, #ffaf24 0, #ffdd57 71%, #fffa70 100%)
}

@media screen and (max-width: 768px) {
    .hero.is-warning .nav-toggle span {
        background-color: rgba(0, 0, 0, .7)
    }

    .hero.is-warning .nav-toggle:hover {
        background-color: rgba(10, 10, 10, .1)
    }

    .hero.is-warning .nav-toggle.is-active span {
        background-color: rgba(0, 0, 0, .7)
    }

    .hero.is-warning .nav-menu .nav-item {
        border-top-color: rgba(0, 0, 0, .2)
    }
}

.hero.is-danger {
    background-color: #ff3860;
    color: #fff
}

.hero.is-danger a, .hero.is-danger strong {
    color: inherit
}

.hero.is-danger .title {
    color: #fff
}

.hero.is-danger .subtitle {
    color: rgba(255, 255, 255, .9)
}

.hero.is-danger .subtitle a, .hero.is-danger .subtitle strong {
    color: #fff
}

.hero.is-danger .nav {
    box-shadow: 0 1px 0 rgba(255, 255, 255, .2)
}

@media screen and (max-width: 768px) {
    .hero.is-danger .nav-menu {
        background-color: #ff3860
    }
}

.hero.is-danger .nav-item a:not(.button), .hero.is-danger a.nav-item {
    color: rgba(255, 255, 255, .7)
}

.hero.is-danger .nav-item a:not(.button).is-active, .hero.is-danger .nav-item a:not(.button):hover, .hero.is-danger a.nav-item.is-active, .hero.is-danger a.nav-item:hover {
    color: #fff
}

.hero.is-danger .tabs a {
    color: #fff;
    opacity: .9
}

.hero.is-danger .tabs a:hover {
    opacity: 1
}

.hero.is-danger .tabs li.is-active a {
    opacity: 1
}

.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {
    color: #fff
}

.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {
    background-color: rgba(10, 10, 10, .1)
}

.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {
    background-color: #fff;
    border-color: #fff;
    color: #ff3860
}

.hero.is-danger.is-bold {
    background-image: -webkit-linear-gradient(309deg, #ff0561 0, #ff3860 71%, #ff5257 100%);
    background-image: linear-gradient(141deg, #ff0561 0, #ff3860 71%, #ff5257 100%)
}

@media screen and (max-width: 768px) {
    .hero.is-danger .nav-toggle span {
        background-color: #fff
    }

    .hero.is-danger .nav-toggle:hover {
        background-color: rgba(10, 10, 10, .1)
    }

    .hero.is-danger .nav-toggle.is-active span {
        background-color: #fff
    }

    .hero.is-danger .nav-menu .nav-item {
        border-top-color: rgba(255, 255, 255, .2)
    }
}

@media screen and (min-width: 769px) {
    .hero.is-medium .hero-body {
        padding-bottom: 9rem;
        padding-top: 9rem
    }
}

@media screen and (min-width: 769px) {
    .hero.is-large .hero-body {
        padding-bottom: 18rem;
        padding-top: 18rem
    }
}

.hero.is-fullheight {
    min-height: 100vh
}

.hero.is-fullheight .hero-body {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex
}

.hero.is-fullheight .hero-body > .container {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-negative: 1;
    flex-shrink: 1
}

.section {
    background-color: #fff;
    padding: 3rem 1.5rem
}

@media screen and (min-width: 1000px) {
    .section.is-medium {
        padding: 9rem 1.5rem
    }

    .section.is-large {
        padding: 18rem 1.5rem
    }
}

.footer {
    background-color: #f5f5f5;
    padding: 3rem 1.5rem 6rem
}
.menu-fab {
    position: fixed;
    right: 5px;
    top: 8px;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 50%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 901;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04);
    transition: all .4s;
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
    opacity: 1;
    font-size: 22px;
}
</style>`;