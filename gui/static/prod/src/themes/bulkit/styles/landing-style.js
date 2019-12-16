import{html}from"../../../../node_modules/lit-element/lit-element.js";export const LANDING_STYLES=html`
<style>
/*! core.scss | Bulkit | CSS Ninja */


/*! themes/_colors.scss | Bulkit | CSS Ninja */


/*! themes/_mixins.scss | Bulkit | CSS Ninja */


/*! themes/_main.scss | Bulkit | CSS Ninja */

.pageloader {
    background-color: var(--app-default-color);
    background: linear-gradient(to top, var(--app-default-color), var(--app-default-color)) !important
}

.hero.is-theme-secondary,
.section.is-theme-secondary {
    background-color: var(--app-default-color);
    background: linear-gradient(to right, var(--app-default-color), var(--app-default-color));
    background: linear-gradient(to top, var(--app-default-color), var(--app-default-color))
}

.hero.is-theme-secondary .title,
.section.is-theme-secondary .title {
    color: #fff
}

.hero.is-theme-secondary .subtitle,
.section.is-theme-secondary .subtitle {
    color: #fff
}


/*! _navbar.scss | Bulkit | CSS Ninja */

.nav-item.is-tab {
    border-top: none !important
}

.navbar-placeholder {
    z-index: 999
}

.fixed-navbar-wrapper {
    width: 100%;
    height: 4.6rem;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
    z-index: 9;
    transition: all 0.3s
}

.navbar-wrapper {
    width: 100%;
    height: 4.6rem;
    background: #fff;
    position: static;
    top: 0;
    left: 0;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
    z-index: 20;
    transition: all 0.6s
}

.navbar-wrapper.navbar-fade,
.navbar-wrapper.navbar-minimal {
    background-color: transparent;
    box-shadow: none
}

.navbar-wrapper.navbar-fade .hero-head,
.navbar-wrapper.navbar-minimal .hero-head {
    background-color: transparent;
    box-shadow: inherit
}

.navbar-wrapper.navbar-fade .hero-head .nav,
.navbar-wrapper.navbar-minimal .hero-head .nav {
    box-shadow: none
}

.fixed-navbar-wrapper.nav-reverse .menu-toggle .rotate i,
.navbar-wrapper.nav-reverse .menu-toggle .rotate i {
    background: #fff
}

.fixed-navbar-wrapper.nav-reverse .hero-head,
.navbar-wrapper.nav-reverse .hero-head {
    background: transparent
}

.fixed-navbar-wrapper.nav-reverse .nav-item.is-tab,
.navbar-wrapper.nav-reverse .nav-item.is-tab {
    color: #fff
}

.fixed-navbar-wrapper.nav-reverse .nav-item.is-tab.is-active,
.navbar-wrapper.nav-reverse .nav-item.is-tab.is-active {
    border-bottom-color: #fff !important;
    color: #fcfcfc !important
}

.fixed-navbar-wrapper.nav-reverse .nav-item.is-tab i,
.navbar-wrapper.nav-reverse .nav-item.is-tab i {
    color: #fff !important
}

.fixed-navbar-wrapper.nav-reverse .nav-item.is-tab:hover,
.navbar-wrapper.nav-reverse .nav-item.is-tab:hover {
    border-bottom-color: #fff;
    color: #fcfcfc
}

.fixed-navbar-wrapper.nav-reverse .nav-icon.is-active-light i,
.navbar-wrapper.nav-reverse .nav-icon.is-active-light i {
    color: #fff !important
}

.fixed-navbar-wrapper.nav-reverse .nav-icon.nav-inner.is-active-light:hover i,
.navbar-wrapper.nav-reverse .nav-icon.nav-inner.is-active-light:hover i {
    color: #fcfcfc !important
}

.fixed-navbar-wrapper.nav-reverse .nav .nav-item.is-tab.nav-icon:hover i,
.navbar-wrapper.nav-reverse .nav .nav-item.is-tab.nav-icon:hover i {
    color: #fcfcfc !important
}

.fixed-navbar-wrapper.nav-reverse .nav-toggle span,
.navbar-wrapper.nav-reverse .nav-toggle span {
    background-color: #fff
}

.fixed-navbar-wrapper.nav-reverse .nav-toggle:hover,
.navbar-wrapper.nav-reverse .nav-toggle:hover {
    background-color: transparent
}

.fixed-navbar-wrapper.nav-reverse.nav-primary,
.navbar-wrapper.nav-reverse.nav-primary {
    background: var(--app-default-color)
}

.fixed-navbar-wrapper.nav-reverse.nav-secondary,
.navbar-wrapper.nav-reverse.nav-secondary {
    background: var(--app-default-color)
}

.fixed-navbar-wrapper.nav-reverse.nav-dark,
.navbar-wrapper.nav-reverse.nav-dark {
    background: #344258
}

.fixed-navbar-wrapper.nav-reverse.nav-blue,
.navbar-wrapper.nav-reverse.nav-blue {
    background: #039BE5
}

.fixed-navbar-wrapper.nav-reverse.nav-green,
.navbar-wrapper.nav-reverse.nav-green {
    background: #00b289
}

.fixed-navbar-wrapper.nav-reverse.nav-orange,
.navbar-wrapper.nav-reverse.nav-orange {
    background: #eda514
}

.fixed-navbar-wrapper.nav-reverse.nav-red,
.navbar-wrapper.nav-reverse.nav-red {
    background: #FF7273
}

.navbar-wrapper.navbar-sticky {
    width: 100%;
    height: 4.6rem;
    background: #fff;
    position: fixed;
    top: 0;
    left: 0;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12);
    z-index: 9;
    transition: all 0.3s
}

.navbar-wrapper.navbar-sticky.navbar-fade {
    background-color: transparent !important;
    box-shadow: none !important
}

.navbar-wrapper.navbar-sticky.navbar-fade .hero-head {
    background-color: transparent !important;
    box-shadow: inherit
}

.navbar-wrapper.navbar-sticky.navbar-fade .hero-head .nav {
    box-shadow: none !important
}

.navbar-fade.navbar-light .nav-item.is-tab,
.navbar-minimal.navbar-light .nav-item.is-tab {
    color: #fff
}

.navbar-fade.navbar-light .nav-item.is-tab.is-active,
.navbar-minimal.navbar-light .nav-item.is-tab.is-active {
    border-bottom-color: #fff !important;
    color: #fcfcfc !important
}

.navbar-fade.navbar-light .nav-item.is-tab i,
.navbar-minimal.navbar-light .nav-item.is-tab i {
    color: #fff !important
}

.navbar-fade.navbar-light .nav-item.is-tab:hover,
.navbar-minimal.navbar-light .nav-item.is-tab:hover {
    border-bottom-color: #fff;
    color: #fcfcfc
}

.navbar-fade.navbar-light .nav-icon.is-active-light i,
.navbar-minimal.navbar-light .nav-icon.is-active-light i {
    color: #fff !important
}

.navbar-fade.navbar-light .nav-icon.nav-inne.is-active-light:hover i,
.navbar-minimal.navbar-light .nav-icon.nav-inne.is-active-light:hover i {
    color: #fcfcfc !important
}

.navbar-fade.navbar-light .nav-item .menu-toggle .icon-box-toggle span i,
.navbar-minimal.navbar-light .nav-item .menu-toggle .icon-box-toggle span i {
    background: #fff !important
}

.navbar-fade.navbar-light .nav-toggle span,
.navbar-minimal.navbar-light .nav-toggle span {
    background-color: #fff
}

.navbar-fade.navbar-light .nav-toggle:hover,
.navbar-minimal.navbar-light .nav-toggle:hover {
    background-color: transparent
}

.nav .container {
    min-height: 4rem
}

.nav .container.big {
    min-height: 4.6rem
}

.nav .nav-item.is-tab:hover {
    border-bottom-color: var(--app-default-color)
}

.nav .nav-item.is-tab.is-active {
    border-bottom: 1px solid var(--app-default-color) !important;
    color: var(--app-default-color) !important
}

.nav .nav-item.is-tab.nav-icon {
    border-bottom: none !important
}

.nav .nav-item.is-tab.nav-icon i {
    color: #A9ABAC;
    font-size: 20px
}

.nav .nav-item.is-tab.nav-icon:hover i {
    color: var(--app-default-color) !important
}

.nav .nav-item.is-tab.nav-icon.is-active {
    border-bottom: 1px solid transparent !important
}

.nav .nav-item.is-tab.nav-icon.is-active i {
    color: var(--app-default-color) !important;
    font-size: 20px
}

.nav .nav-item.is-menu-mobile {
    display: none
}

.nav .nav-toggle {
    width: 64px;
    height: 64px
}

.nav .nav-toggle span {
    background-color: #FFFFFF;
    width: 20px !important
}

.nav .nav-toggle.is-active span {
    background-color: #FFFFFF;
}

.nav .nav-toggle span:nth-child(1) {
    margin-top: -5px !important
}

.nav .nav-toggle span:nth-child(2) {
    margin-top: 1px !important
}

.nav .nav-toggle span:nth-child(3) {
    margin-top: 7px !important
}

.nav .nav-toggle:hover {
    background-color: transparent !important
}

.nav .nav-toggle.is-active span:nth-child(3) {
    margin-top: 9px !important
}

.nav .nav-toggle:active,
.nav .nav-toggle:focus {
    outline: none !important
}

.hero-head {
    background: #fff
}

.hero-head.has-shadow {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12)
}

.account {
    position: relative;
    right: 20px;
    top: 5px;
    margin-left: 30px
}

.account .nav-item {
    border-bottom: 1px solid transparent !important
}

.account img.account-avatar {
    max-height: 40px;
    border-radius: 50px;
    border: 1px solid #EFF4F7
}

.account div a {
    color: #66676b !important
}

.account div a i {
    position: relative;
    top: 3px;
    left: 10px;
    font-size: 7px !important;
    color: #66676b
}

.account .dropOut ul {
    margin-left: 0 !important
}

.scroll-nav-wrapper {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.12)
}

.scroll-nav-wrapper .tabs {
    background: #fff
}

.scroll-nav-wrapper .tabs a {
    padding-bottom: 0;
    padding-top: 0;
    border-bottom-color: transparent
}

.scroll-nav-wrapper .tabs ul {
    border-bottom: none
}

.scroll-nav-wrapper .tabs ul li a {
    color: #A9ABAC
}

.scroll-nav-wrapper .tabs ul li:hover a {
    color: var(--app-default-color);
    border-bottom-color: var(--app-default-color)
}

.scroll-nav-wrapper .tabs ul li.is-active a {
    color: var(--app-default-color);
    border-bottom: 2px solid var(--app-default-color)
}

.scroll-nav-wrapper .tabs ul li a.there {
    color: var(--app-default-color);
    border-bottom: 2px solid var(--app-default-color)
}

.menu-toggle {
    font-size: 20px;
    color: #666;
    line-height: 48px;
    text-align: center;
    background: transparent;
    display: block;
    width: 24px;
    height: 26px;
    cursor: pointer;
    padding: 0;
    margin: 0 14px;
    transition: opacity 0.4s;
    opacity: 1;
    position: relative;
    top: 2px
}

.menu-toggle .icon-box-toggle {
    height: 100%;
    width: 100%;
    background: tranparent;
    position: relative;
    display: block
}

.menu-toggle .icon-box-toggle.active>span.rotate {
    -webkit-transform: rotate(90deg);
    -moz-transform: translate(0px, 0px) rotate(90deg);
    -ms-transform: translate(0px, 0px) rotate(90deg);
    -o-transform: translate(0px, 0px) rotate(90deg);
    transform: translate(0px, 0px) rotate(90deg)
}

.menu-toggle .icon-box-toggle.active>span>i.icon-line-center {
    visibility: hidden;
    width: 1px;
    height: 3px;
    left: 70%
}

.menu-toggle .icon-box-toggle.active>span>i.icon-line-bottom {
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transform: rotate(135deg);
    -moz-transform: translate(0px, 0px) rotate(135deg);
    -ms-transform: translate(0px, 0px) rotate(135deg);
    -o-transform: translate(0px, 0px) rotate(135deg);
    transform: translate(0px, 0px) rotate(135deg)
}

.menu-toggle .icon-box-toggle.active>span>i.icon-line-top {
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transform: rotate(45deg);
    -moz-transform: translate(0px, 0px) rotate(45deg);
    -ms-transform: translate(0px, 0px) rotate(45deg);
    -o-transform: translate(0px, 0px) rotate(45deg);
    transform: translate(0px, 0px) rotate(45deg)
}

.menu-toggle .icon-line-center {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #A9ABAC;
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease
}

.menu-toggle .icon-line-top {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #A9ABAC;
    margin: -3px 0 0 -10px;
    left: 50%;
    top: 30%;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease
}

.menu-toggle .icon-line-bottom {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #A9ABAC;
    margin: 1.5px 0 0 -10px;
    left: 50%;
    top: 60%;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease
}


/*! _animations.scss | Bulkit | CSS Ninja */

.animated {
    animation-duration: 0.5s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.5s;
    -webkit-animation-fill-mode: both
}

@-webkit-keyframes translateLeft {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

@keyframes translateLeft {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

.translateLeft {
    -webkit-animation-name: translateLeft;
    animation-name: translateLeft;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-transition: all 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transition: all 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06)
}

@-webkit-keyframes translateDown {
    from {
        -webkit-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

@keyframes translateDown {
    from {
        -webkit-transform: translate3d(0, -100px, 0);
        transform: translate3d(0, -100px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

.translateDown {
    -webkit-animation-name: translateDown;
    animation-name: translateDown;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-transition: all 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transition: all 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06)
}

@-webkit-keyframes translateUp {
    from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

@keyframes translateUp {
    from {
        -webkit-transform: translate3d(0, 100%, 0);
        transform: translate3d(0, 100%, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0)
    }
}

.translateUp {
    -webkit-animation-name: translateUp;
    animation-name: translateUp;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-transition: all 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transition: all 500ms cubic-bezier(0.755, 0.05, 0.855, 0.06)
}

@-webkit-keyframes fadeIn {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
}

@keyframes fadeIn {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
}

.fadeIn {
    opacity: 0;
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn
}

@-webkit-keyframes fadeInLeft {
    from {
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
        opacity: 0
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

@keyframes fadeInLeft {
    from {
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
        opacity: 0
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

.preFadeInLeft {
    opacity: 0
}

.fadeInLeft {
    opacity: 0;
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft
}

@-webkit-keyframes fadeInRight {
    from {
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
        opacity: 0
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

@keyframes fadeInRight {
    from {
        -webkit-transform: translate3d(-20px, 0, 0);
        transform: translate3d(-20px, 0, 0);
        opacity: 0
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

.preFadeInRight {
    opacity: 0
}

.fadeInRight {
    opacity: 0;
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight
}

@-webkit-keyframes fadeInUp {
    from {
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

@keyframes fadeInUp {
    from {
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

.preFadeInUp {
    opacity: 0
}

.fadeInUp {
    opacity: 0;
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp
}

@-webkit-keyframes fadeInDown {
    from {
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

@keyframes fadeInDown {
    from {
        -webkit-transform: translate3d(0, -20px, 0);
        transform: translate3d(0, -20px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1
    }
}

.preFadeInDown {
    opacity: 0
}

.fadeInDown {
    opacity: 0;
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown
}

@-webkit-keyframes fadeOutUp {
    from {
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 0
    }
}

@keyframes fadeOutUp {
    from {
        -webkit-transform: translate3d(0, 20px, 0);
        transform: translate3d(0, 20px, 0)
    }
    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 0
    }
}

.preFadeOutUp {
    opacity: 1
}

.fadeOutUp {
    opacity: 1;
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp
}

@-webkit-keyframes levitate {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -webkit-transform: translate(0, 10px);
        transform: translate(0, 10px)
    }
    to {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}

@keyframes levitate {
    from {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
    50% {
        -webkit-transform: translate(0, 10px);
        transform: translate(0, 10px)
    }
    to {
        -webkit-transform: translate(0, 0);
        transform: translate(0, 0)
    }
}

.levitate {
    -webkit-animation-name: levitate;
    animation-name: levitate;
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out
}

@-webkit-keyframes gelatine {
    from,
    to {
        -webkit-transform: scale(1, 1)
    }
    25% {
        -webkit-transform: scale(0.9, 1.1)
    }
    50% {
        -webkit-transform: scale(1.1, 0.9)
    }
    75% {
        -webkit-transform: scale(0.95, 1.05)
    }
}

@keyframes gelatine {
    from,
    to {
        transform: scale(1, 1)
    }
    25% {
        transform: scale(0.9, 1.1)
    }
    50% {
        transform: scale(1.1, 0.9)
    }
    75% {
        transform: scale(0.95, 1.05)
    }
}

.gelatine {
    -webkit-animation: gelatine 0.6s;
    animation: gelatine 0.6s;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

@-webkit-keyframes unzoom {
    from,
    to {
        -webkit-transform: scale(1, 0)
    }
    25% {
        -webkit-transform: scale(0.9, 1.1)
    }
    50% {
        -webkit-transform: scale(1.1, 0)
    }
}

@keyframes unzoom {
    from,
    to {
        transform: scale(1, 0)
    }
    25% {
        transform: scale(0.9, 1.1)
    }
    50% {
        transform: scale(1.1, 0)
    }
}

.unzoom {
    -webkit-animation: unzoom 0.7s;
    animation: unzoom 0.7s;
    -webkit-animation-duration: 0.6s;
    animation-duration: 0.6s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both
}

@-webkit-keyframes dotPulse {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
    100% {
        -webkit-transform: scale(1.8);
        transform: scale(1.8);
        opacity: 0
    }
}

@keyframes dotPulse {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 1
    }
    100% {
        -webkit-transform: scale(1.8);
        transform: scale(1.8);
        opacity: 0
    }
}

@-webkit-keyframes entrance {
    from {
        -webkit-transform: scale(0)
    }
    25% {
        -webkit-transform: scale(1.05)
    }
    50% {
        -webkit-transform: scale(0.95)
    }
    75% {
        -webkit-transform: scale(1.05)
    }
    to {
        -webkit-transform: none
    }
}

@keyframes entrance {
    from {
        transform: scale(0)
    }
    25% {
        transform: scale(1.05)
    }
    50% {
        transform: scale(0.95)
    }
    75% {
        transform: scale(1.05)
    }
    to {
        transform: none
    }
}

.entrance {
    -webkit-animation: entrance 0.8s;
    animation: entrance 0.8s
}

@-webkit-keyframes scaleIn {
    from {
        -webkit-transform: scale(0)
    }
    to {
        -webkit-transform: scale(1)
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
}

.scaleIn {
    -webkit-animation: scaleIn 0.5s;
    animation: scaleIn 0.5s;
    -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1)
}

@-webkit-keyframes scaleInCircle {
    from {
        -webkit-transform: scale(0)
    }
    to {
        -webkit-transform: scale(7)
    }
}

@keyframes scaleInCircle {
    from {
        transform: scale(0)
    }
    to {
        transform: scale(7)
    }
}

.scaleInCircle {
    -webkit-animation: scaleInCircle 0.6s;
    animation: scaleInCircle 0.6s;
    -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1)
}

@-webkit-keyframes scaleOut {
    from {
        -webkit-transform: scale(1)
    }
    to {
        -webkit-transform: scale(0)
    }
}

@keyframes scaleOut {
    from {
        transform: scale(1)
    }
    to {
        transform: scale(0)
    }
}

.scaleOut {
    -webkit-animation: scaleOut 0.6s;
    animation: scaleOut 0.6s
}

.delay-1 {
    animation-delay: .25s
}

.delay-2 {
    animation-delay: .5s
}

.delay-3 {
    animation-delay: .75s
}

.delay-4 {
    animation-delay: 1s
}

.delay-5 {
    animation-delay: 1.25s
}

.delay-6 {
    animation-delay: 1.5s
}

.delay-7 {
    animation-delay: 1.75s
}

.delay-8 {
    animation-delay: 2.25s
}

.delay-9 {
    animation-delay: 2.5s
}

.delay-10 {
    animation-delay: 2.75s
}

.delay-11 {
    animation-delay: 3s
}


/*! _navigation.scss | Bulkit | CSS Ninja */

.side-navigation-menu {
    display: flex;
    justify-content: flex-start;
    background: #344258;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 300px;
    overflow: hidden;
    transform: translateX(-301px);
    -webkit-transition: width .05s linear;
    transition: width .05s linear;
    transition: transform 0.3s;
    z-index: 1000
}

.side-navigation-menu.is-active {
    transform: translateX(0)
}

.side-navigation-menu .category-menu-wrapper {
    height: 100%;
    position: relative;
    width: 80px;
    background: var(--app-default-color)
}

.side-navigation-menu .category-menu-wrapper ul.categories li {
    height: 60px
}

.side-navigation-menu .category-menu-wrapper ul.categories li.square-logo {
    display: flex;
    justify-content: center;
    align-items: center
}

.side-navigation-menu .category-menu-wrapper ul.categories li.square-logo img {
    max-height: 28px
}

.side-navigation-menu .category-menu-wrapper ul.categories li.category-link {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer
}

.side-navigation-menu .category-menu-wrapper ul.categories li.category-link i {
    font-size: 20px;
    color: #fff
}

.side-navigation-menu .category-menu-wrapper ul.categories li.category-link:hover {
    background: #7200e6
}

.side-navigation-menu .category-menu-wrapper ul.categories li.is-active {
    background: #60c
}

.side-navigation-menu .category-menu-wrapper .author {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%
}

.side-navigation-menu .category-menu-wrapper .author li {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative
}

.side-navigation-menu .category-menu-wrapper .author a {
    position: relative;
    z-index: 4
}

.side-navigation-menu .category-menu-wrapper .author .main-menu-author {
    width: 48px;
    height: 48px;
    border-radius: 100px;
    margin: 0 auto;
    margin-bottom: 10px;
    transform: scale(1);
    transition: transform .4s
}

.side-navigation-menu .category-menu-wrapper .author .main-menu-author:hover {
    transform: scale(1.1)
}

.side-navigation-menu .navigation-menu-wrapper {
    height: 100%;
    width: 100%;
    position: relative
}

.side-navigation-menu .navigation-menu-wrapper ul.navigation-menu {
    height: 100%;
    margin: 0;
    padding: 0;
    max-width: 400px;
    list-style: none;
    list-style-type: none;
    overflow: auto
}

.side-navigation-menu .navigation-menu-wrapper ul.navigation-menu::-webkit-scrollbar {
    width: 10px
}

.side-navigation-menu .navigation-menu-wrapper ul.navigation-menu::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1)
}

.side-navigation-menu .navigation-menu-wrapper .navigation-menu-header {
    height: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    padding-left: 25px;
    text-transform: uppercase;
    font-weight: 300;
    color: #fcfcfc;
    letter-spacing: 3px;
    font-size: 92%
}

.side-navigation-menu .navigation-menu-wrapper .navigation-menu-header .menu-toggle .icon-box-toggle span i {
    background: #fff
}

.side-navigation-menu .navigation-menu-wrapper .navigation-menu-header .navigation-close {
    opacity: 0
}

.side-navigation-menu .navigation-menu-wrapper .navigation-menu li a span {
    margin-right: 20px;
    color: #fff;
    font-size: 22px
}

.side-navigation-menu .navigation-menu-wrapper .navigation-menu li a {
    padding: 18px 25px;
    display: block;
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center
}

.side-navigation-menu .navigation-menu-wrapper .navigation-menu li a.is-submenu {
    padding: 12px 25px
}

.side-navigation-menu .navigation-menu-wrapper .navigation-menu li a.parent-link {
    height: 60px !important
}

.side-navigation-menu .navigation-menu-wrapper .navigation-menu li a:hover {
    background: #3d4e68
}

.side-navigation-menu .navigation-menu-wrapper li.has-children.active-section a.parent-link {
    color: #a54dff !important
}

.side-navigation-menu .navigation-menu-wrapper li.has-children.active-section a.parent-link span,
.side-navigation-menu .navigation-menu-wrapper li.has-children.active-section a.parent-link span:after {
    color: #a54dff !important
}

.side-navigation-menu .navigation-menu-wrapper li.has-children ul {
    padding: 0px
}

.side-navigation-menu .navigation-menu-wrapper li.has-children ul li a.is-submenu {
    background-color: #2b3648;
    padding-left: 62px !important;
    font-size: 95%
}

.side-navigation-menu .navigation-menu-wrapper li.has-children ul li a.is-submenu:hover,
.side-navigation-menu .navigation-menu-wrapper li.has-children ul li a.is-submenu.is-active {
    color: var(--app-default-color)
}

.side-navigation-menu .navigation-menu-wrapper li.has-children ul li a:hover {
    color: #fff;
    padding-left: 42px
}

.side-navigation-menu .navigation-menu-wrapper li.has-children,
.side-navigation-menu .navigation-menu-wrapper li {
    position: relative
}

.side-navigation-menu .navigation-menu-wrapper .has-children span::after {
    position: absolute;
    right: 30px;
    content: "\\E315";
    color: #fff;
    transition: all .5s;
    font-size: 90%;
    padding-top: 2px
}

.side-navigation-menu .navigation-menu-wrapper li.active.has-children span::after {
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
}

.side-navigation-menu .navigation-menu-wrapper li.active.has-children {
    background: #3d4e68
}

.side-navigation-menu .navigation-menu-wrapper .navigation-menu .has-children>ul {
    display: none
}


/*! _sections.scss | Bulkit | CSS Ninja */

.section.section-light-grey {
    background-color: #EFF4F7
}

.section.section-feature-grey {
    background-color: #fbfbfb
}

.section.section-header-grey {
    background-color: #F5F9FC
}

.section.section-feature-grey-accent {
    background-color: #efefef
}

.section.section-primary {
    background-color: var(--app-default-color)
}

.section.section-secondary {
    background-color: var(--app-default-color)
}

.section.has-border-bottom {
    border-bottom: 1px solid #ededed
}

.section.has-border-top {
    border-top: 1px solid #ededed
}

.section.is-relative {
    position: relative
}

.section.is-cover {
    background-size: cover !important
}

.section.no-margin {
    margin: 0 !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important
}

.section.section-half {
    height: 75vh !important
}

.section.is-skewed-sm {
    transform: skew(0deg, -3deg) translate(0, -45px);
    padding-top: 140px
}

.section .container {
    z-index: 1
}

.section .container.is-reverse-skewed-sm {
    transform: skew(0deg, 3deg) translate(0, 45px)
}

.section .container.slanted-container {
    margin-top: -100px
}

.section .content-wrapper {
    padding-top: 40px
}

.section .bottom-spacer {
    padding-bottom: 200px
}

.section .section-title-wrapper {
    position: relative;
    padding: 40px 20px
}

.section .section-title-wrapper .bg-number,
.section .section-title-wrapper .bg-symbol {
    position: absolute;
    text-align: center;
    font-weight: bolder;
    top: -18px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    font-size: 160px;
    z-index: 0;
    opacity: 0.1;
    color: #34495e;
    width: 160px;
    height: 160px;
    line-height: 160px
}

.section .section-title-wrapper .bg-number .material-icons,
.section .section-title-wrapper .bg-symbol .material-icons {
    font-size: 12rem
}

.section .section-title-wrapper .top-subtitle {
    text-transform: uppercase;
    color: var(--app-default-color);
    ;
    font-weight: 700;
    font-size: 1.05rem
}

.section .section-title-wrapper .icon-subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center
}

.section .section-title-wrapper .icon-subtitle.is-one i {
    margin: 10px 5px 0 5px;
    font-size: 2.2rem;
    color: var(--app-default-color)
}

.section .section-title-wrapper .icon-subtitle.is-many i {
    margin: 10px 5px 0 5px;
    font-size: 1.4rem;
    color: var(--app-default-color)
}

.section .title.section-title {
    font-size: 2.7rem;
    color: #A9ABAC;
    font-weight: bold;
    
}

.section .title.section-subtitle {
    font-size: 2.3rem;
    color: #A9ABAC
}

.section .title.quick-feature {
    font-size: 2.7rem;
    color: #444F60;
    position: relative
}

.section .title.quick-feature .bg-number,
.section .title.quick-feature .bg-symbol {
    position: absolute;
    font-weight: bolder;
    top: -100px;
    left: 40px;
    font-size: 14rem;
    z-index: 0;
    opacity: 0.1;
    color: #34495e
}

.section .title.feature-title {
    font-weight: 600;
    color: #444F60;
    font-size: 2.2rem
}

.section .icon-subtitle i {
    font-size: 2.4rem;
    color: var(--app-default-color)
}

.section .detailed-feature-subtitle {
    text-transform: uppercase;
    
    font-size: 15px;
    color: #A9ABAC;
    font-weight: 600
}

.section .title-divider {
    margin: 10px 0;
    width: 80px;
    height: 5px;
    background: var(--app-default-color)
}

.section .title-divider.is-right {
    margin-left: auto
}

.section .title-divider.is-centered {
    margin: 0 auto
}

.section h2.feature-headline {
    color: var(--app-default-color) !important;
    line-height: 1.2;
    padding: 5px 0;
    margin-bottom: 0 !important
}

.section .section-feature-description {
    color: #878787
}

.section .media.icon-box {
    border-top: none !important
}

.section .media.icon-box .media-content .content p span.icon-box-title {
    color: #444F60;
    font-size: 1.2rem;
    font-weight: 600
}

.section .media.icon-box .media-content .content p span.icon-box-text {
    color: #A9ABAC;
    font-size: 1.1rem;
    font-weight: 400
}

.section .flex-wrapper {
    display: flex;
    align-content: center;
    align-items: center
}

.section .flex-wrapper.flex-center {
    justify-content: center
}

.section .flex-wrapper.flex-start {
    justify-content: flex-start
}

.section .flex-wrapper.flex-end {
    justify-content: flex-end
}

.section .flex-wrapper img {
    width: 23%
}

.content.content-flex,
.content-flex {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center
}

.content.content-flex.center-flex,
.content-flex.center-flex {
    justify-content: center !important
}

.divider {
    display: table;
    white-space: nowrap;
    margin-top: 20px;
    padding: 0 20px
}

.divider .before-divider,
.divider .after-divider {
    display: table-cell;
    width: 50%;
    border-bottom: 1px solid #ededed;
    transform: translateY(-50%);
    color: #34495e
}

.divider .children {
    padding: 0 20px;
    font-size: 14px;
    color: #cecece
}


/*! _hero.scss | Bulkit | CSS Ninja */

.hero.is-relative {
    position: relative
}

.hero.is-cover {
    background-size: cover !important
}

.hero.is-theme-primary {
    background-color: var(--app-default-color)
}

.hero.is-theme-primary .title {
    color: #fff
}

.hero.is-theme-primary .subtitle {
    color: #fff
}

.hero.is-theme-secondary {
    background-color: var(--app-default-color)
}

.hero.is-theme-secondary .title {
    color: #fff
}

.hero.is-theme-secondary .subtitle {
    color: #fff
}

.hero.is-theme-accent {
    background-color: var(--app-default-color)
}

.hero.is-theme-accent .title {
    color: #fff
}

.hero.is-theme-accent .subtitle {
    color: #fff
}

.hero.is-theme-info {
    background-color: #039BE5
}

.hero.is-theme-info .title {
    color: #fff
}

.hero.is-theme-info .subtitle {
    color: #fff
}

.hero.is-theme-success {
    background-color: #00b289
}

.hero.is-theme-success .title {
    color: #fff
}

.hero.is-theme-success .subtitle {
    color: #fff
}

.hero.is-theme-warning {
    background-color: #eda514
}

.hero.is-theme-warning .title {
    color: #fff
}

.hero.is-theme-warning .subtitle {
    color: #fff
}

.hero.is-theme-danger {
    background-color: #FF7273
}

.hero.is-theme-danger .title {
    color: #fff
}

.hero.is-theme-danger .subtitle {
    color: #fff
}

.hero.is-feature-grey {
    background-color: #fbfbfb
}

.hero.is-feature-grey .title {
    color: #444F60
}

.hero.is-feature-grey .subtitle {
    color: #444F60
}

.hero.is-light-grey {
    background-color: var(--app-default-color);
}

.hero.is-light-grey .title.dark {
    color: #444F60
}

.hero.is-light-grey .title.theme {
    color: var(--app-default-color)
}

.hero.is-light-grey .subtitle {
    margin-top: 0 !important;
    padding-right: 20%;
    line-height: 1.6 !important
}

.hero.is-coal {
    background-color: #444
}

.hero.is-coal .title {
    color: #fff
}

.hero.is-coal .subtitle {
    color: #fff
}

.hero-body {
    background-size: cover !important;
    background-repeat: no-repeat !important
}

.hero-body .title.main-title {
    color: #fff;
    z-index: 999;
    font-size: 3.5rem
}

.hero-body .title.big-title {
    color: #444F60;
    z-index: 999;
    font-size: 4rem
}

.hero-body .title.page-title {
    font-size: 3.5rem
}

.hero-body .title.medium-title {
    font-size: 2.5rem
}

.hero-body .title.small-title {
    font-size: 2rem
}

.hero-body .subtitle.page-subtitle {
    font-size: 1.8rem
}

.hero-body .clients-small {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    padding: 15px 0
}

.hero-body .clients-small img {
    height: 42px;
    margin: 0 5px
}

.hero-body .clients-small.centered {
    justify-content: center !important
}

.hero-body.is-relative {
    position: relative
}

.hero-foot img.partner-logo {
    height: 70px !important
}

.parallax-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #333;
    opacity: 0.4
}


/*! _footer.scss | Bulkit | CSS Ninja */

footer.footer-dark {
    background: #444F60;
    color: #fff;
    bottom: 0;
    width: 100%;
}

footer.footer-dark .columns {
    padding-top: 30px;
    padding-bottom: 30px
}

footer.footer-dark .footer-logo {
    padding: 10px 0
}

footer.footer-dark .footer-logo img {
    height: 25px
}

footer.footer-dark .footer-column .footer-header {
    padding: 10px 0
}

footer.footer-dark .footer-column .footer-header h3 {
    
    font-weight: 400;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0 !important;
    color: #EFF4F7
}

footer.footer-dark .footer-column ul.link-list {
    line-height: 30px;
    font-size: 1rem
}

footer.footer-dark .footer-column ul.link-list a {
    color: #98a9c3;
    font-weight: 400;
    transition: all 0.5s
}

footer.footer-dark .footer-column ul.link-list:hover {
    color: #fcfcfc
}

footer.footer-dark .footer-column .level-item .icon {
    color: var(--app-default-color);
    transition: all 0.5s
}

footer.footer-dark .footer-column .level-item .icon:hover {
    color: #fcfcfc
}

footer.footer-dark .footer-column .copyright {
    padding: 10px 0
}

footer.footer-light {
    background: #fff;
    color: #444F60;
    position: relative
}

footer.footer-light .columns {
    padding-top: 30px;
    padding-bottom: 30px
}

footer.footer-light .footer-logo {
    padding: 10px 0
}

footer.footer-light .footer-logo img {
    height: 25px
}

footer.footer-light .footer-column .footer-header {
    padding: 10px 0
}

footer.footer-light .footer-column .footer-header h3 {
    
    font-weight: 400;
    font-size: 1.1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0 !important;
    color: #444F60
}

footer.footer-light .footer-column ul.link-list {
    line-height: 30px;
    font-size: 1rem
}

footer.footer-light .footer-column ul.link-list a {
    color: #98a9c3;
    font-weight: 400;
    transition: all 0.5s
}

footer.footer-light .footer-column ul.link-list:hover {
    color: var(--app-default-color)
}

footer.footer-light .footer-column .level-item .icon {
    color: #34495e;
    transition: all 0.5s
}

footer.footer-light .footer-column .level-item .icon:hover {
    color: var(--app-default-color)
}

footer.footer-light .footer-column .copyright {
    padding: 10px 0
}

@media (max-width: 768px) {
    .footer-columns.is-flex-mobile {
        flex-wrap: wrap !important
    }
}

footer.footer-light-left {
    padding: 5rem 1.5rem !important
}

footer.footer-light-left .footer-nav-right {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center
}

footer.footer-light-left .footer-nav-right .footer-nav-link {
    margin: 0 10px;
    padding: 20px 0;
    color: #444F60 !important;
    border-bottom: 2px solid transparent
}

footer.footer-light-left .footer-nav-right .footer-nav-link:hover {
    color: #34495e !important;
    border-bottom: 2px solid #34495e
}

footer.footer-light-left .footer-nav-right .footer-nav-link.is-active {
    color: var(--app-default-color) !important;
    border-bottom: 2px solid var(--app-default-color) !important
}

footer.footer-light-left .level-item .icon {
    color: #cecece;
    transition: all 0.5s
}

footer.footer-light-left .level-item .icon:hover {
    color: var(--app-default-color)
}

footer.footer-light-left .moto {
    color: #34495e
}

@media (max-width: 768px) {
    .footer-nav-right {
        margin-top: 0 !important
    }
}

footer.footer-dark-left {
    padding: 5rem 1.5rem !important;
    background: #444F60
}

footer.footer-dark-left .footer-nav-right {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    align-items: center
}

footer.footer-dark-left .footer-nav-right .footer-nav-link {
    margin: 0 10px;
    padding: 20px 0;
    color: #fff !important;
    border-bottom: 2px solid transparent
}

footer.footer-dark-left .footer-nav-right .footer-nav-link:hover {
    color: #fcfcfc !important;
    border-bottom: 2px solid #fff
}

footer.footer-dark-left .footer-nav-right .footer-nav-link.is-active {
    color: var(--app-default-color) !important;
    border-bottom: 2px solid var(--app-default-color) !important
}

footer.footer-dark-left .level-item .icon {
    color: #fff;
    transition: all 0.5s
}

footer.footer-dark-left .level-item .icon:hover {
    color: var(--app-default-color)
}

footer.footer-dark-left .moto {
    color: #fff
}

footer.footer-light-medium {
    padding-bottom: 10rem !important;
    padding-top: 8rem !important;
    background: #fff
}

footer.footer-light-medium .social-links {
    display: flex;
    justify-content: flex-start;
    align-items: center
}

footer.footer-light-medium .social-links a {
    color: #A9ABAC;
    margin: 0 5px
}

footer.footer-light-medium .social-links a:hover {
    color: var(--app-default-color)
}

footer.footer-light-medium .footer-description {
    color: #A9ABAC
}

footer.footer-light-medium .footer-column {
    padding-top: 20px
}

footer.footer-light-medium .footer-column .column-header {
    ;
    text-transform: uppercase;
    color: #444F60;
    font-size: 1rem;
    font-weight: 700;
    margin: 10px 0
}

footer.footer-light-medium .footer-column .column-item {
    padding-bottom: 10px
}

footer.footer-light-medium .footer-column .column-item a {
    color: #A9ABAC
}

footer.footer-light-medium .footer-column .column-item a:hover {
    color: var(--app-default-color)
}

footer.footer-light-medium .moto {
    color: #34495e
}

footer.footer-light-medium .small-footer-logo {
    height: 28px
}


/*! _pageloader.scss | Bulkit | CSS Ninja */

.pageloader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--app-default-color);
    z-index: 999998;
    transition: -webkit-transform 0.35s ease-out;
    transition: transform 0.35s ease-out;
    transition: transform 0.35s ease-out, -webkit-transform 0.35s ease-out;
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    will-change: transform
}

.pageloader.is-active {
    -webkit-transform: translateY(0);
    transform: translateY(0)
}

.pageloader::after,
.pageloader::before {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    border-radius: 100%;
    content: "";
    z-index: 999999
}

.pageloader::after {
    margin-top: -100px;
    margin-left: -100px;
    width: 200px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.5);
    border: 3px solid rgba(255, 255, 255, 0.75);
    -webkit-animation: page-loader-inner 1.5s infinite ease-out;
    animation: page-loader-inner 1.5s infinite ease-out
}

.pageloader::before {
    margin-top: -30px;
    margin-left: -30px;
    width: 60px;
    height: 60px;
    background-color: #fff;
    -webkit-animation: page-loader-outer 1.5s infinite ease-in;
    animation: page-loader-outer 1.5s infinite ease-in
}

@-webkit-keyframes page-loader-inner {
    0%,
    40% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

@keyframes page-loader-inner {
    0%,
    40% {
        -webkit-transform: scale(0);
        transform: scale(0)
    }
    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0
    }
}

@-webkit-keyframes page-loader-outer {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    100%,
    40% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0
    }
}

@keyframes page-loader-outer {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1)
    }
    100%,
    40% {
        -webkit-transform: scale(0);
        transform: scale(0);
        opacity: 0
    }
}

.infraloader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    z-index: -1;
    opacity: 0;
    transition: opacity .35s
}

.infraloader.is-active {
    opacity: 1;
    z-index: 999997
}


/*! _buttons.scss | Bulkit | CSS Ninja */

.button {
    transition: all 0.5s
}

.button.button-signup {
    padding: 22px 40px !important
}

.button.button-signup.btn-outlined.is-bold {
    border-width: 2px;
    font-weight: 600
}

.button.button-cta {
    padding: 22px 40px !important
}

.button.button-cta.btn-outlined.is-bold {
    border-width: 2px;
    font-weight: 600
}

.button.no-lh {
    line-height: 0 !important
}

.button.button-action {
    padding: 25px 40px !important
}

.button.btn-align {
    padding: 3px 13px 6px 13px
}

.button.btn-align-md {
    padding: 5px 15px 18px 15px
}

.button.btn-align-lg {
    padding: 6px 15px 18px 15px
}

.button.btn-upper {
    text-transform: uppercase
}

.button.rounded {
    border-radius: 500px
}

.button.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(0, 0, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important;
    opacity: 0.8
}

.button.is-raised {
    box-shadow: 0 14px 26px -12px rgba(0, 0, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2) !important
}

.button.btn-fade:hover {
    opacity: 0.6
}

.button.btn-outlined {
    background: transparent
}

.button.btn-outlined.light-btn {
    border-color: #fff;
    color: #fff
}

.button.btn-outlined.light-btn:hover {
    background-color: #fff;
    color: #444F60
}

.button.btn-outlined.is-bold {
    border-width: 2px;
    font-weight: 600
}

.button.btn-padding {
    padding: 6px 13px 16px 13px !important
}

.button.default-btn {
    color: #cecece !important
}

.button.is-link {
    text-decoration: none !important
}

.button.has-icon-right i {
    padding-left: 8px
}

.button:focus {
    border-color: #ccc
}

.button i {
    position: relative;
    top: 1px;
    padding-right: 8px
}

.button.has-icon i {
    position: relative;
    margin-right: 5px;
    font-size: 1.7rem
}

.button.is-fullwidth {
    display: block !important;
    width: 100% !important;
    text-align: center !important
}

.button.btn-square {
    width: 45px;
    height: 45px;
    text-align: center !important;
    display: block
}

.button.btn-square.is-small {
    width: 36px;
    height: 36px
}

.button.btn-square.is-medium {
    width: 55px;
    height: 55px
}

.button.btn-square.is-large {
    width: 64px;
    height: 64px
}

.button.btn-square i {
    top: 5px;
    font-size: 21px;
    padding: 0 !important
}

.button.btn-square.is-small i {
    top: 4px;
    font-size: 18px
}

.button.btn-square.is-medium i {
    font-size: 28px
}

.button.btn-square.is-large i {
    top: 7px;
    font-size: 32px
}

.button.is-link.btn-more {
    text-decoration: none !important
}

.button.is-link.color-primary i {
    font-size: 9px;
    margin-left: 10px;
    position: relative;
    top: 2px;
    color: var(--app-default-color) !important;
    transition: all 0.5s
}

.button.is-link:hover i {
    transform: translate(10px, 0)
}

.button.primary-btn {
    outline: none;
    border-color: var(--app-default-color);
    background-color: var(--app-default-color);
    color: #fff;
    transition: all 0.5s
}

.button.primary-btn:hover {
    color: #fff
}

.button.primary-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important;
    opacity: 0.9 0.5
}

.button.primary-btn.btn-outlined {
    border-color: var(--app-default-color);
    color: var(--app-default-color);
    background-color: transparent
}

.button.primary-btn.btn-outlined:hover {
    color: #fff;
    background-color: var(--app-default-color)
}

.button.primary-btn:focus {
    border-color: var(--app-default-color)
}

.button.secondary-btn {
    outline: none;
    border-color: var(--app-default-color);
    background-color: var(--app-default-color);
    color: #fff;
    transition: all 0.5s
}

.button.secondary-btn:hover {
    color: #fff
}

.button.secondary-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(103, 58, 183, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 58, 183, 0.2) !important;
    opacity: 0.95
}

.button.secondary-btn.btn-outlined {
    border-color: var(--app-default-color);
    color: var(--app-default-color);
    background-color: transparent
}

.button.secondary-btn.btn-outlined:hover {
    color: #fff;
    background-color: var(--app-default-color)
}

.button.secondary-btn:focus {
    border-color: var(--app-default-color)
}

.button.accent-btn {
    outline: none;
    border-color: var(--app-default-color);
    background-color: var(--app-default-color);
    color: #fff;
    transition: all 0.5s
}

.button.accent-btn:hover {
    color: #fff
}

.button.accent-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important;
    opacity: 0.8
}

.button.accent-btn.btn-outlined {
    border-color: var(--app-default-color);
    color: var(--app-default-color);
    background-color: transparent
}

.button.accent-btn.btn-outlined:hover {
    color: #fff;
    background-color: var(--app-default-color)
}

.button.accent-btn:focus {
    border-color: var(--app-default-color)
}

.button.success-btn {
    outline: none;
    border-color: #00b289;
    background-color: #00b289;
    color: #fff;
    transition: all 0.5s
}

.button.success-btn:hover {
    color: #fff
}

.button.success-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(0, 178, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 178, 137, 0.2) !important;
    opacity: 0.8
}

.button.success-btn.btn-outlined {
    border-color: #00b289;
    color: #00b289;
    background-color: transparent
}

.button.success-btn.btn-outlined:hover {
    color: #fff;
    background-color: #00b289
}

.button.success-btn:focus {
    border-color: #00b289
}

.button.warning-btn {
    outline: none;
    border-color: #eda514;
    background-color: #eda514;
    color: #fff;
    transition: all 0.5s
}

.button.warning-btn:hover {
    color: #fff
}

.button.warning-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(237, 165, 20, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(237, 165, 20, 0.2) !important;
    opacity: 0.8
}

.button.warning-btn.btn-outlined {
    border-color: #eda514;
    color: #eda514;
    background-color: transparent
}

.button.warning-btn.btn-outlined:hover {
    color: #fff;
    background-color: #eda514
}

.button.warning-btn:focus {
    border-color: #eda514
}

.button.danger-btn {
    outline: none;
    border-color: #FF7273;
    background-color: #FF7273;
    color: #fff;
    transition: all 0.5s
}

.button.danger-btn:hover {
    color: #fff
}

.button.danger-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(255, 114, 115, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 114, 115, 0.2) !important;
    opacity: 0.8
}

.button.danger-btn.btn-outlined {
    border-color: #FF7273;
    color: #FF7273;
    background-color: transparent
}

.button.danger-btn.btn-outlined:hover {
    color: #fff;
    background-color: #FF7273
}

.button.danger-btn:focus {
    border-color: #FF7273
}

.button.info-btn {
    outline: none;
    border-color: #039BE5;
    background-color: #039BE5;
    color: #fff;
    transition: all 0.5s
}

.button.info-btn:hover {
    color: #fff
}

.button.info-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(3, 155, 229, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(3, 155, 229, 0.2) !important;
    opacity: 0.8
}

.button.info-btn.btn-outlined {
    border-color: #039BE5;
    color: #039BE5;
    background-color: transparent
}

.button.info-btn.btn-outlined:hover {
    color: #fff;
    background-color: #039BE5
}

.button.info-btn:focus {
    border-color: #039BE5
}

.button.social-btn {
    color: #fff
}

.button.social-btn.facebook {
    background-color: #3B5998
}

.button.social-btn.twitter {
    background-color: #1dcaff
}

.button.social-btn.linkedin {
    background-color: #007bb6
}

.button.social-btn.tumblr {
    background-color: #35465c
}

.button.social-btn.github {
    background-color: #444
}

.button.social-btn.icon-solo i.fa {
    top: 12px !important
}

.ripple {
    overflow: hidden
}

.ripple-effect {
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background: white;
    animation: ripple-animation 2s
}

@keyframes ripple-animation {
    from {
        transform: scale(1);
        opacity: 0.4
    }
    to {
        transform: scale(100);
        opacity: 0
    }
}


/*! _cards.scss | Bulkit | CSS Ninja */

.feature-card {
    width: 300px;
    height: 320px;
    background-color: #fff;
    border-radius: 3px;
    margin: 0 auto;
    transition: all 0.6s
}

.feature-card.card-md {
    height: 350px
}

.feature-card.card-lg {
    height: 400px
}

.feature-card.card-shadow {
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18) !important
}

.feature-card.hover-inset:hover {
    box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px;
    cursor: pointer
}

.feature-card.light-bordered {
    border: 1px solid #e5e5e5 !important
}

.feature-card .card-title h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #444F60
}

.feature-card .card-icon img {
    height: 140px;
    margin-top: 20px
}

.feature-card .card-img img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px
}

.feature-card .card-action {
    margin-top: 40px
}

.feature-card .card-feature-description {
    padding: 5px 30px !important
}

.feature-card .card-feature-description span {
    color: #878787;
    margin-top: 20px
}

.feature-card .card-img-description {
    padding-bottom: 10px
}

.feature-card .card-img-description span {
    color: #878787;
    margin-top: 20px
}

.feature-card .bookmark i {
    font-size: 1.4rem;
    color: #A9ABAC;
    position: relative;
    top: 3px;
    margin-right: 10px
}

.feature-card .bookmark i:hover {
    color: var(--app-default-color)
}

.flex-card {
    position: relative;
    background-color: #fff;
    border: 1px solid #fcfcfc;
    border-radius: 0.1875rem;
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 100%;
    margin-bottom: 20px;
    transition: all 0.5s
}

.flex-card .flex-card-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    border-bottom: 1px solid #ededed;
    padding: 10px 15px
}

.flex-card .flex-card-header .header-avatar {
    max-height: 45px
}

.flex-card .flex-card-header .header-avatar img {
    height: 45px;
    border-radius: 100px
}

.flex-card .flex-card-header .header-info {
    margin: 0 10px
}

.flex-card .flex-card-header .header-info .header-title {
    font-size: 1.2rem
}

.flex-card .flex-card-header .header-info .header-subtitle {
    font-size: 0.9rem;
    color: #A9ABAC
}

.flex-card .flex-card-header .header-control {
    margin-right: 10px
}

.flex-card .flex-card-header .header-control i {
    font-size: 0.8rem;
    color: #A9ABAC
}

.flex-card .flex-card-header .header-control:hover i {
    color: var(--app-default-color)
}

.flex-card .flex-card-header.primary {
    background: var(--app-default-color)
}

.flex-card .flex-card-header.primary .header-info div,
.flex-card .flex-card-header.primary .header-control i {
    color: #fff !important
}

.flex-card .flex-card-header.secondary {
    background: var(--app-default-color)
}

.flex-card .flex-card-header.secondary .header-info div,
.flex-card .flex-card-header.secondary .header-control i {
    color: #fff !important
}

.flex-card .flex-card-header.accent {
    background: var(--app-default-color)
}

.flex-card .flex-card-header.accent .header-info div,
.flex-card .flex-card-header.accent .header-control i {
    color: #fff !important
}

.flex-card .card-body {
    padding: 30px 30px
}

.flex-card .card-body.is-small {
    padding: 20px 20px
}

.flex-card .card-body.is-large {
    padding: 40px 40px
}

.flex-card h3.card-title {
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 22px;
    line-height: 30px;
    text-decoration: none
}

.flex-card .card-description {
    line-height: 24px;
    cursor: default;
    color: #777;
    font-size: 16px
}

.flex-card.primary-card {
    background: var(--app-default-color)
}

.flex-card.primary-card .content,
.flex-card.primary-card .content h2 {
    color: #fff !important
}

.flex-card.secondary-card {
    background: var(--app-default-color)
}

.flex-card.secondary-card .content,
.flex-card.secondary-card .content h2 {
    color: #fff !important
}

.flex-card.accent-card {
    background: var(--app-default-color)
}

.flex-card.accent-card .content,
.flex-card.accent-card .content h2 {
    color: #fff !important
}

.flex-card.card-overflow {
    overflow: visible !important
}

.flex-card.light-bordered {
    border: 1px solid #e5e5e5 !important
}

.flex-card.simple-shadow {
    box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06)
}

.flex-card.light-raised {
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04)
}

.flex-card.raised {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2)
}

.flex-card.hover-raised:hover {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer
}

.flex-card.hover-inset:hover {
    box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px;
    cursor: pointer
}

.flex-card .tabs {
    padding: 15px 0.7rem
}

.flex-card .navtab-content {
    min-height: 190px
}

.flex-card .navtab-content p {
    padding: 0 0.8rem 20px
}

.flex-card.icon-card {
    box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
    transition: inherit;
    margin-bottom: 0
}

.flex-card.icon-card img {
    max-height: 80px
}

.flex-card.icon-card .icon-card-text {
    font-size: 1.1rem;
    color: #A9ABAC
}

.flex-card.icon-card-hover {
    height: 170px;
    padding: 20px 20px 10px 130px;
    border-radius: 8px;
    box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.04);
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
    text-align: left;
    background-color: #fff
}

.flex-card.icon-card-hover:hover {
    box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.1);
    -webkit-transform: translate(0, -10px);
    -ms-transform: translate(0, -10px);
    transform: translate(0, -10px)
}

.flex-card.icon-card-hover.first-card {
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(../images/illustrations/icons/landing-v1/chrono.svg);
    background-position: 0 0, -80px 20px;
    background-size: auto, 200px;
    background-repeat: repeat, no-repeat;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease
}

.flex-card.icon-card-hover.first-card:hover {
    background-image: linear-gradient(180deg, transparent, transparent), url(../images/illustrations/icons/landing-v1/chrono.svg);
    background-position: 0 0, -80px -25px;
    background-size: auto, 200px;
    background-repeat: repeat, no-repeat
}

.flex-card.icon-card-hover.second-card {
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(../images/illustrations/icons/landing-v1/tablet-dots.svg);
    background-position: 0 0, -80px 20px;
    background-size: auto, 200px;
    background-repeat: repeat, no-repeat;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease
}

.flex-card.icon-card-hover.second-card:hover {
    background-image: linear-gradient(180deg, transparent, transparent), url(../images/illustrations/icons/landing-v1/tablet-dots.svg);
    background-position: 0 0, -80px -25px;
    background-size: auto, 200px;
    background-repeat: repeat, no-repeat
}

.flex-card.icon-card-hover.third-card {
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(../images/illustrations/icons/landing-v1/cog.svg);
    background-position: 0 0, -80px 20px;
    background-size: auto, 200px;
    background-repeat: repeat, no-repeat;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease
}

.flex-card.icon-card-hover.third-card:hover {
    background-image: linear-gradient(180deg, transparent, transparent), url(../images/illustrations/icons/landing-v1/cog.svg);
    background-position: 0 0, -80px -25px;
    background-size: auto, 200px;
    background-repeat: repeat, no-repeat
}

.flex-card.icon-card-hover.fourth-card {
    background-image: linear-gradient(180deg, rgba(255, 255, 255, 0.65), rgba(255, 255, 255, 0.65)), url(../images/illustrations/icons/landing-v1/plane.svg);
    background-position: 0 0, -80px 20px;
    background-size: auto, 200px;
    background-repeat: repeat, no-repeat;
    -webkit-transition: all 350ms ease;
    transition: all 350ms ease
}

.flex-card.icon-card-hover.fourth-card:hover {
    background-image: linear-gradient(180deg, transparent, transparent), url(../images/illustrations/icons/landing-v1/plane.svg);
    background-position: 0 0, -80px -25px;
    background-size: auto, 200px;
    background-repeat: repeat, no-repeat
}

.flex-card.testimonial-card .testimonial-title {
    color: var(--app-default-color);
    font-weight: 500;
    padding: 5px 0
}

.flex-card.testimonial-card .testimonial-text {
    color: #34495e;
    font-size: 0.9rem;
    font-style: italic;
    padding: 5px 0
}

.flex-card.testimonial-card .user-id {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    padding: 5px 0
}

.flex-card.testimonial-card .user-id img {
    height: 50px;
    border-radius: 100px
}

.flex-card.testimonial-card .user-id .info {
    padding: 0 10px
}

.flex-card.testimonial-card .user-id .info .name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #444F60
}

.flex-card.testimonial-card .user-id .info .position {
    font-size: 0.9rem;
    color: #cecece
}

.flex-card .navigation-tabs.outlined-pills .tabs.tabs-header.primary {
    background-color: var(--app-default-color)
}

.flex-card .navigation-tabs.outlined-pills .tabs.tabs-header.secondary {
    background-color: var(--app-default-color)
}

.flex-card .navigation-tabs.outlined-pills .tabs.tabs-header.accent {
    background-color: var(--app-default-color)
}

.flex-card .navigation-tabs.outlined-pills .tabs.tabs-header ul li a {
    color: #f2f2f2
}

.flex-card .navigation-tabs.outlined-pills .tabs.tabs-header ul li.is-active a {
    color: #fff;
    border: 1px solid #fff;
    border-bottom-color: #fff !important
}

.flex-card .icon-group {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center
}

.flex-card .icon-group img {
    height: 60px
}

.flex-card .icon-group span {
    font-size: 20px;
    margin-left: 20px;
    color: #34495e;
    transition: all 0.5s
}

.flex-card .icon-group span:hover {
    transform: translate(10px, 0)
}

.flex-card.auth-card {
    padding: 0px 40px 20px 40px
}

.flex-card.auth-card .auth-card-header {
    height: 5rem;
    width: 100%;
    position: relative;
    top: -2.5rem;
    left: auto !important;
    right: auto !important;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center
}

.flex-card.auth-card .auth-card-header img {
    max-height: 30px
}

.flex-card.auth-card .auth-card-header.header-primary {
    background-color: var(--app-default-color);
    color: #fff;
    box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important
}

.flex-card.auth-card .auth-card-header.header-secondary {
    background-color: var(--app-default-color);
    color: #fff;
    box-shadow: 0 14px 26px -12px rgba(103, 58, 183, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 58, 183, 0.2) !important
}

.flex-card.auth-card .auth-card-header.header-accent {
    background-color: var(--app-default-color);
    color: #fff;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.flex-card .card-content {
    position: relative;
    padding: 1rem !important
}

.flex-card .card-content .bottom-avatar img {
    height: 50px;
    border-radius: 100px;
    position: absolute;
    right: 0;
    bottom: 0
}

.floating-circle {
    width: 100px;
    height: 100px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 22px;
    border-radius: 50px;
    background-color: #fff;
    box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06)
}

.floating-circle img {
    width: 60px;
    position: relative;
    left: 20px
}

.event-card {
    overflow: hidden;
    width: 100%;
    height: 320px;
    display: inline-block;
    position: relative;
    background-color: #fff;
    transition: box-shadow 300ms ease-in;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid #ededed;
    border-radius: 20px;
}

.event-card:hover {
    box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.1)
}

.event-card .card-date {
    position: absolute;
    top: 0;
    right: 0;
    background-color: var(--app-default-color);
    z-index: 1
}

.event-card .card-date .date {
    padding: 0 10px
}

.event-card .card-date .date .day {
    font-size: 2.7rem;
    color: #fff;
    font-weight: bold
}

.event-card .card-date .date .month {
    font-weight: 500;
    color: #fff
}

.img-container {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0
}

.img-container img {
    height: 100%;
    width: 100%;
    object-fit: cover
}

.card-text {
    bottom: -40%;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #fff;
    transition: all 450ms cubic-bezier(0.6, 0.06, 0.34, 0.61)
}

@media (max-width: 768px) {
    .card-text {
        bottom: -71%
    }
}

@media (min-width: 768px) {
    .card-text {
        bottom: -55%
    }
}

@media (min-width: 1024px) {
    .card-text {
        bottom: -64%
    }
}

@media (min-width: 1420px) {
    .card-text {
        bottom: -70%
    }
}

.card-text.is-clicked,
.event-card:hover .card-text {
    bottom: 0%
}

.card-text .button.is-link i {
    font-size: 10px !important;
    transition: all 0.5s !important;
    margin-left: 20px;
    top: 2px
}

.card-text .text.text-container {
    padding: 20px 30px
}

.card-text .text.text-container .text-header .text-subtitle {
    color: var(--app-default-color);
    
}

.card-text .text.text-title {
    
    font-size: 1.15em;
    margin-bottom: .25em;
    font-weight: bold;
    text-transform: uppercase
}

.card-text .text.text-details:before {
    content: "";
    display: block;
    width: 30%;
    height: 1px;
    background-color: #ddd;
    margin: 30px 0
}

.card-text .text.text-description {
    line-height: 1.4em
}

.card-text .text.text-link {
    text-decoration: none;
    margin-top: 1em;
    display: inline-block;
    color: var(--app-default-color)
}

.card-text .text.text-link:hover {
    color: #b266ff
}

.card.card-shadow {
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18) !important
}

.card .image {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px
}

.card img {
    display: block
}

.card.ressource-card {
    position: relative
}

.card.ressource-card .ressource-avatar img {
    position: absolute;
    top: 15px;
    right: 15px;
    height: 60px;
    width: 60px;
    border-radius: 1000px
}

.card.ressource-card .card-image {
    position: relative
}

.card.ressource-card .card-image figure {
    overflow: hidden
}

.card.ressource-card .card-image figure.zoomOut img {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out
}

.card.ressource-card .card-image figure.zoomIn img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out
}

.card.ressource-card .card-image .card-image-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(68, 79, 96, 0.6);
    z-index: 1
}

.card.ressource-card .card-image .card-image-overlay.primary {
    background: var(--app-default-color);
    opacity: 0.6
}

.card.ressource-card .card-image .card-image-overlay.secondary {
    background: var(--app-default-color);
    opacity: 0.6
}

.card.ressource-card .card-image .card-image-overlay.accent {
    background: var(--app-default-color);
    opacity: 0.6
}

.card.ressource-card .card-content .media-content a {
    
    font-size: 16px;
    color: #444F60
}

.card.ressource-card .card-content .media-content a:hover {
    color: var(--app-default-color)
}

.card.ressource-card .card-content .media-content p {
    
    font-weight: 700;
    color: #34495e
}

.card.ressource-card .avatar-rounded img {
    border-radius: 50px !important
}

.card.ressource-card:hover .card-image figure.zoomOut img {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0.8
}

.card.ressource-card:hover .card-image figure.zoomIn img {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
    opacity: 0.8
}

.card.card-floating-wide,
.card.card-floating-boxed {
    margin: 4%;
    border-radius: 6px
}

.card.card-floating-wide .title,
.card.card-floating-boxed .title {
    margin: 0 !important;
    padding: 10px 0
}

.card.card-floating-wide .subtitle,
.card.card-floating-boxed .subtitle {
    font-size: 0.9rem;
    color: #A9ABAC;
    margin: 0 !important
}

.card.card-floating-wide .card-image figure img {
    display: block;
    transform: scale(1.08);
    border-radius: 6px;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
}

.card.card-floating-boxed .title {
    margin-top: -10%
}

.card.card-floating-boxed .card-image figure img {
    display: block;
    transform: scale(0.94);
    border-radius: 6px;
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-top: -10%
}

.card.card-floating-boxed .card-content {
    margin-top: -50px
}

.media-card {
    min-height: 260px
}

.media-card .media-card-image {
    height: 100% !important;
    min-height: 260px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%
}

.media-card .mcard-content {
    padding: 20px
}

.media-card .mcard-content .mcard-title {
    line-height: 1.2 !important;
    font-size: 20px !important;
    font-weight: 600;
    color: #444F60
}

.media-card .mcard-content .mcard-title a {
    color: #444F60
}

.media-card .mcard-content .mcard-description {
    line-height: 1.4 !important;
    max-height: 4.2em !important;
    margin-top: 7px;
    color: #34495e
}

.media-card .mcard-controls {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    padding: 20px;
    position: absolute;
    bottom: 0 !important;
    width: 100%
}

.media-card .mcard-controls .mcard-avatar img {
    height: 40px;
    width: 40px;
    border-radius: 250px
}

.media-card .mcard-controls .mcard-info {
    margin-left: 15px
}

.media-card .mcard-controls .mcard-info span {
    font-size: 14px;
    line-height: 1.4
}

.media-card .mcard-controls .mcard-info div span {
    font-size: 12px;
    line-height: 1.2;
    color: #A9ABAC
}

.media-card .mcard-controls .mcard-info div i {
    font-size: 4px;
    position: relative;
    color: #34495e;
    top: 11px;
    margin: 0 5px
}

.media-card .mcard-controls .mcard-actions i {
    position: relative;
    top: 5px;
    color: #A9ABAC;
    cursor: pointer
}

.media-card .mcard-controls .mcard-actions i:hover {
    color: var(--app-default-color)
}

.media-card .content-column {
    position: relative
}


/*! _boxes.scss | Bulkit | CSS Ninja */

.icon-box .box-icon {
    color: #cecece;
    font-size: 2.8rem;
    margin-bottom: 1rem
}

.icon-box .box-title {
    color: #444F60;
    margin-bottom: 10px;
    font-weight: 500
}

.icon-box .box-text {
    color: #A9ABAC;
    font-size: 13px
}

.icon-box.primary .box-icon {
    color: var(--app-default-color)
}

.icon-box.primary .box-title {
    color: var(--app-default-color)
}

.icon-box.secondary .box-icon {
    color: var(--app-default-color)
}

.icon-box.secondary .box-title {
    color: var(--app-default-color)
}

.icon-box.accent .box-icon {
    color: var(--app-default-color)
}

.icon-box.accent .box-title {
    color: var(--app-default-color)
}

.icon-box.info .box-icon {
    color: #039BE5
}

.icon-box.info .box-title {
    color: #039BE5
}

.icon-box.success .box-icon {
    color: #00b289
}

.icon-box.success .box-title {
    color: #00b289
}

.icon-box.warning .box-icon {
    color: #eda514
}

.icon-box.warning .box-title {
    color: #eda514
}

.icon-box.danger .box-icon {
    color: #FF7273
}

.icon-box.danger .box-title {
    color: #FF7273
}

.icon-box.compact .box-icon {
    color: #fff;
    font-size: 3rem;
    font-weight: bolder;
    transform: rotate(45deg)
}

.icon-box.compact .box-icon i {
    padding: 1.4rem;
    background: var(--app-default-color);
    border-radius: 5px
}

.icon-box.compact .box-text {
    padding: 0 40px 0 40px
}

.diamond-box {
    text-align: center
}

.diamond-box .diamond-wrapper {
    display: flex;
    justify-content: center;
    align-items: center
}

.diamond-box .diamond {
    width: 60px;
    height: 60px;
    background-color: #34495e;
    position: relative;
    border-radius: 4px;
    transform: rotate(45deg);
    margin-bottom: 1.5rem
}

.diamond-box .diamond i {
    font-size: 36px;
    position: absolute;
    color: #fff;
    left: 11px;
    top: 10px;
    transform: rotate(-45deg)
}

.diamond-box .box-title {
    color: #444F60;
    margin-bottom: 10px;
    font-weight: 500
}

.diamond-box .box-text {
    color: #A9ABAC;
    font-size: 13px
}

.diamond-box.primary .diamond {
    background-color: var(--app-default-color);
    box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important
}

.diamond-box.primary .box-title {
    color: var(--app-default-color)
}

.diamond-box.secondary .diamond {
    background-color: var(--app-default-color);
    box-shadow: 0 14px 26px -12px rgba(103, 58, 183, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 58, 183, 0.2) !important
}

.diamond-box.secondary .box-title {
    color: var(--app-default-color)
}

.diamond-box.accent .diamond {
    background-color: var(--app-default-color);
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.diamond-box.accent .box-title {
    color: var(--app-default-color)
}

.diamond-box.info .diamond {
    background-color: #039BE5;
    box-shadow: 0 14px 26px -12px rgba(3, 155, 229, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(3, 155, 229, 0.2) !important
}

.diamond-box.info .box-title {
    color: #039BE5
}

.diamond-box.success .diamond {
    background-color: #00b289;
    box-shadow: 0 14px 26px -12px rgba(0, 178, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 178, 137, 0.2) !important
}

.diamond-box.success .box-title {
    color: #00b289
}

.diamond-box.warning .diamond {
    background-color: #eda514;
    box-shadow: 0 14px 26px -12px rgba(237, 165, 20, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(237, 165, 20, 0.2) !important
}

.diamond-box.warning .box-title {
    color: #eda514
}

.diamond-box.danger .diamond {
    background-color: #FF7273;
    box-shadow: 0 14px 26px -12px rgba(255, 114, 115, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 114, 115, 0.2) !important
}

.diamond-box.danger .box-title {
    color: #FF7273
}

.square-icon-box {
    text-align: center
}

.square-icon-box:hover .icon-box-wrapper .icon-box:after {
    transform: scale(1)
}

.square-icon-box.rounded .icon-box {
    border-radius: 100px !important
}

.square-icon-box.rounded .icon-box:after {
    border-radius: 100px !important
}

.square-icon-box .icon-box-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px
}

.square-icon-box .icon-box-wrapper .icon-box {
    width: 60px;
    height: 60px;
    background-color: #34495e;
    position: relative;
    border-radius: 4px;
    cursor: pointer
}

.square-icon-box .icon-box-wrapper .icon-box i {
    font-size: 28px;
    position: absolute;
    color: #fff;
    left: 18px;
    top: 9px
}

.square-icon-box .icon-box-wrapper .icon-box:after {
    width: 76px;
    height: 76px;
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: -8px;
    left: -8px;
    opacity: 0.8;
    border-radius: 4px;
    transform: scale(0.8);
    transition: all 0.3s
}

.square-icon-box .box-title {
    color: #444F60;
    padding: 5px;
    font-weight: 500
}

.square-icon-box .box-text {
    color: #A9ABAC;
    padding: 0 10px;
    font-size: 13px
}

.square-icon-box.primary .icon-box {
    background-color: var(--app-default-color);
    box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important
}

.square-icon-box.primary .icon-box:after {
    border: 2px solid var(--app-default-color)
}

.square-icon-box.primary .box-title {
    color: var(--app-default-color)
}

.square-icon-box.secondary .icon-box {
    background-color: var(--app-default-color);
    box-shadow: 0 14px 26px -12px rgba(103, 58, 183, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 58, 183, 0.2) !important
}

.square-icon-box.secondary .icon-box:after {
    border: 2px solid var(--app-default-color)
}

.square-icon-box.secondary .box-title {
    color: var(--app-default-color)
}

.square-icon-box.accent .icon-box {
    background-color: var(--app-default-color);
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.square-icon-box.accent .icon-box:after {
    border: 2px solid var(--app-default-color)
}

.square-icon-box.accent .box-title {
    color: var(--app-default-color)
}

.square-icon-box.info .icon-box {
    background-color: #039BE5;
    box-shadow: 0 14px 26px -12px rgba(3, 155, 229, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(3, 155, 229, 0.2) !important
}

.square-icon-box.info .icon-box:after {
    border: 2px solid #039BE5
}

.square-icon-box.info .box-title {
    color: #039BE5
}

.square-icon-box.success .icon-box {
    background-color: #00b289;
    box-shadow: 0 14px 26px -12px rgba(0, 178, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 178, 137, 0.2) !important
}

.square-icon-box.success .icon-box:after {
    border: 2px solid #00b289
}

.square-icon-box.success .box-title {
    color: #00b289
}

.square-icon-box.warning .icon-box {
    background-color: #eda514;
    box-shadow: 0 14px 26px -12px rgba(237, 165, 20, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(237, 165, 20, 0.2) !important
}

.square-icon-box.warning .icon-box:after {
    border: 2px solid #eda514
}

.square-icon-box.warning .box-title {
    color: #eda514
}

.square-icon-box.danger .icon-box {
    background-color: #FF7273;
    box-shadow: 0 14px 26px -12px rgba(255, 114, 115, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 114, 115, 0.2) !important
}

.square-icon-box.danger .icon-box:after {
    border: 2px solid #FF7273
}

.square-icon-box.danger .box-title {
    color: #FF7273
}

.shadow-icon-box span {
    display: block;
    position: absolute;
    height: 75px;
    width: 75px;
    color: #fff;
    text-shadow: #19a2d3 1px 1px, #19a2d3 2px 2px, #19a2d3 3px 3px, #19a2d3 4px 4px, #19a2d3 5px 5px, #19a2d3 6px 6px, #19a2d3 7px 7px, #19a2d3 8px 8px, #19a2d3 9px 9px, #19a2d3 10px 10px, #19a2d3 11px 11px, #19a2d3 12px 12px, #19a2d3 13px 13px, #19a2d3 14px 14px, #19a2d3 15px 15px, #19a2d3 16px 16px, #19a2d3 17px 17px, #19a2d3 18px 18px, #19a2d3 19px 19px, #19a2d3 20px 20px, #19a2d3 21px 21px, #19a2d3 22px 22px, #19a2d3 23px 23px, #19a2d3 24px 24px, #19a2d3 25px 25px, #19a2d3 26px 26px, #19a2d3 27px 27px, #19a2d3 28px 28px, #19a2d3 29px 29px, #19a2d3 30px 30px, #19a2d3 31px 31px, #19a2d3 32px 32px, #19a2d3 33px 33px, #19a2d3 34px 34px, #19a2d3 35px 35px, #19a2d3 36px 36px, #19a2d3 37px 37px, #19a2d3 38px 38px, #19a2d3 39px 39px, #19a2d3 40px 40px, #19a2d3 41px 41px, #19a2d3 42px 42px, #19a2d3 43px 43px, #19a2d3 44px 44px, #19a2d3 45px 45px, #19a2d3 46px 46px, #19a2d3 47px 47px, #19a2d3 48px 48px, #19a2d3 49px 49px, #19a2d3 50px 50px, #19a2d3 51px 51px, #19a2d3 52px 52px, #19a2d3 53px 53px, #19a2d3 54px 54px, #19a2d3 55px 55px, #19a2d3 56px 56px, #19a2d3 57px 57px, #19a2d3 58px 58px, #19a2d3 59px 59px, #19a2d3 60px 60px, #19a2d3 61px 61px, #19a2d3 62px 62px, #19a2d3 63px 63px, #19a2d3 64px 64px, #19a2d3 65px 65px, #19a2d3 66px 66px, #19a2d3 67px 67px, #19a2d3 68px 68px, #19a2d3 69px 69px, #19a2d3 70px 70px, #19a2d3 71px 71px, #19a2d3 72px 72px, #19a2d3 73px 73px, #19a2d3 74px 74px, #19a2d3 75px 75px
}

.shadow-icon-box {
    position: relative;
    text-align: center;
    overflow: hidden;
    margin: 0 auto;
    width: 75px;
    height: 75px;
    font-size: 25px;
    line-height: 75px;
    background-color: var(--app-default-color);
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    border-radius: 10px;
    -webkit-box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important;
    -moz-box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important;
    -ms-box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important;
    box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important
}

.shadow-icon-box.rounded {
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    -ms-border-radius: 100px;
    border-radius: 100px
}

.shadow-icon-box.is-secondary {
    background-color: var(--app-default-color);
    -webkit-box-shadow: 0 14px 26px -12px rgba(103, 58, 183, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 58, 183, 0.2) !important;
    -moz-box-shadow: 0 14px 26px -12px rgba(103, 58, 183, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 58, 183, 0.2) !important;
    -ms-box-shadow: 0 14px 26px -12px rgba(103, 58, 183, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 58, 183, 0.2) !important;
    box-shadow: 0 14px 26px -12px rgba(103, 58, 183, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 58, 183, 0.2) !important
}

.shadow-icon-box.is-secondary span {
    text-shadow: #5900b3 1px 1px, #5900b3 2px 2px, #5900b3 3px 3px, #5900b3 4px 4px, #5900b3 5px 5px, #5900b3 6px 6px, #5900b3 7px 7px, #5900b3 8px 8px, #5900b3 9px 9px, #5900b3 10px 10px, #5900b3 11px 11px, #5900b3 12px 12px, #5900b3 13px 13px, #5900b3 14px 14px, #5900b3 15px 15px, #5900b3 16px 16px, #5900b3 17px 17px, #5900b3 18px 18px, #5900b3 19px 19px, #5900b3 20px 20px, #5900b3 21px 21px, #5900b3 22px 22px, #5900b3 23px 23px, #5900b3 24px 24px, #5900b3 25px 25px, #5900b3 26px 26px, #5900b3 27px 27px, #5900b3 28px 28px, #5900b3 29px 29px, #5900b3 30px 30px, #5900b3 31px 31px, #5900b3 32px 32px, #5900b3 33px 33px, #5900b3 34px 34px, #5900b3 35px 35px, #5900b3 36px 36px, #5900b3 37px 37px, #5900b3 38px 38px, #5900b3 39px 39px, #5900b3 40px 40px, #5900b3 41px 41px, #5900b3 42px 42px, #5900b3 43px 43px, #5900b3 44px 44px, #5900b3 45px 45px, #5900b3 46px 46px, #5900b3 47px 47px, #5900b3 48px 48px, #5900b3 49px 49px, #5900b3 50px 50px, #5900b3 51px 51px, #5900b3 52px 52px, #5900b3 53px 53px, #5900b3 54px 54px, #5900b3 55px 55px, #5900b3 56px 56px, #5900b3 57px 57px, #5900b3 58px 58px, #5900b3 59px 59px, #5900b3 60px 60px, #5900b3 61px 61px, #5900b3 62px 62px, #5900b3 63px 63px, #5900b3 64px 64px, #5900b3 65px 65px, #5900b3 66px 66px, #5900b3 67px 67px, #5900b3 68px 68px, #5900b3 69px 69px, #5900b3 70px 70px, #5900b3 71px 71px, #5900b3 72px 72px, #5900b3 73px 73px, #5900b3 74px 74px, #5900b3 75px 75px
}

.shadow-icon-box.is-accent {
    background-color: var(--app-default-color);
    -webkit-box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important;
    -moz-box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important;
    -ms-box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.shadow-icon-box.is-accent span {
    text-shadow: #5900b3 1px 1px, #5900b3 2px 2px, #5900b3 3px 3px, #5900b3 4px 4px, #5900b3 5px 5px, #5900b3 6px 6px, #5900b3 7px 7px, #5900b3 8px 8px, #5900b3 9px 9px, #5900b3 10px 10px, #5900b3 11px 11px, #5900b3 12px 12px, #5900b3 13px 13px, #5900b3 14px 14px, #5900b3 15px 15px, #5900b3 16px 16px, #5900b3 17px 17px, #5900b3 18px 18px, #5900b3 19px 19px, #5900b3 20px 20px, #5900b3 21px 21px, #5900b3 22px 22px, #5900b3 23px 23px, #5900b3 24px 24px, #5900b3 25px 25px, #5900b3 26px 26px, #5900b3 27px 27px, #5900b3 28px 28px, #5900b3 29px 29px, #5900b3 30px 30px, #5900b3 31px 31px, #5900b3 32px 32px, #5900b3 33px 33px, #5900b3 34px 34px, #5900b3 35px 35px, #5900b3 36px 36px, #5900b3 37px 37px, #5900b3 38px 38px, #5900b3 39px 39px, #5900b3 40px 40px, #5900b3 41px 41px, #5900b3 42px 42px, #5900b3 43px 43px, #5900b3 44px 44px, #5900b3 45px 45px, #5900b3 46px 46px, #5900b3 47px 47px, #5900b3 48px 48px, #5900b3 49px 49px, #5900b3 50px 50px, #5900b3 51px 51px, #5900b3 52px 52px, #5900b3 53px 53px, #5900b3 54px 54px, #5900b3 55px 55px, #5900b3 56px 56px, #5900b3 57px 57px, #5900b3 58px 58px, #5900b3 59px 59px, #5900b3 60px 60px, #5900b3 61px 61px, #5900b3 62px 62px, #5900b3 63px 63px, #5900b3 64px 64px, #5900b3 65px 65px, #5900b3 66px 66px, #5900b3 67px 67px, #5900b3 68px 68px, #5900b3 69px 69px, #5900b3 70px 70px, #5900b3 71px 71px, #5900b3 72px 72px, #5900b3 73px 73px, #5900b3 74px 74px, #5900b3 75px 75px
}

.shadow-icon-box.is-info {
    background-color: #039BE5;
    -webkit-box-shadow: 0 14px 26px -12px rgba(3, 155, 229, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(3, 155, 229, 0.2) !important;
    -moz-box-shadow: 0 14px 26px -12px rgba(3, 155, 229, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(3, 155, 229, 0.2) !important;
    -ms-box-shadow: 0 14px 26px -12px rgba(3, 155, 229, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(3, 155, 229, 0.2) !important;
    box-shadow: 0 14px 26px -12px rgba(3, 155, 229, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(3, 155, 229, 0.2) !important
}

.shadow-icon-box.is-info span {
    text-shadow: #026899 1px 1px, #026899 2px 2px, #026899 3px 3px, #026899 4px 4px, #026899 5px 5px, #026899 6px 6px, #026899 7px 7px, #026899 8px 8px, #026899 9px 9px, #026899 10px 10px, #026899 11px 11px, #026899 12px 12px, #026899 13px 13px, #026899 14px 14px, #026899 15px 15px, #026899 16px 16px, #026899 17px 17px, #026899 18px 18px, #026899 19px 19px, #026899 20px 20px, #026899 21px 21px, #026899 22px 22px, #026899 23px 23px, #026899 24px 24px, #026899 25px 25px, #026899 26px 26px, #026899 27px 27px, #026899 28px 28px, #026899 29px 29px, #026899 30px 30px, #026899 31px 31px, #026899 32px 32px, #026899 33px 33px, #026899 34px 34px, #026899 35px 35px, #026899 36px 36px, #026899 37px 37px, #026899 38px 38px, #026899 39px 39px, #026899 40px 40px, #026899 41px 41px, #026899 42px 42px, #026899 43px 43px, #026899 44px 44px, #026899 45px 45px, #026899 46px 46px, #026899 47px 47px, #026899 48px 48px, #026899 49px 49px, #026899 50px 50px, #026899 51px 51px, #026899 52px 52px, #026899 53px 53px, #026899 54px 54px, #026899 55px 55px, #026899 56px 56px, #026899 57px 57px, #026899 58px 58px, #026899 59px 59px, #026899 60px 60px, #026899 61px 61px, #026899 62px 62px, #026899 63px 63px, #026899 64px 64px, #026899 65px 65px, #026899 66px 66px, #026899 67px 67px, #026899 68px 68px, #026899 69px 69px, #026899 70px 70px, #026899 71px 71px, #026899 72px 72px, #026899 73px 73px, #026899 74px 74px, #026899 75px 75px
}

.shadow-icon-box.is-success {
    background-color: #00b289;
    -webkit-box-shadow: 0 14px 26px -12px rgba(0, 178, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 178, 137, 0.2) !important;
    -moz-box-shadow: 0 14px 26px -12px rgba(0, 178, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 178, 137, 0.2) !important;
    -ms-box-shadow: 0 14px 26px -12px rgba(0, 178, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 178, 137, 0.2) !important;
    box-shadow: 0 14px 26px -12px rgba(0, 178, 137, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 178, 137, 0.2) !important
}

.shadow-icon-box.is-success span {
    text-shadow: #00664e 1px 1px, #00664e 2px 2px, #00664e 3px 3px, #00664e 4px 4px, #00664e 5px 5px, #00664e 6px 6px, #00664e 7px 7px, #00664e 8px 8px, #00664e 9px 9px, #00664e 10px 10px, #00664e 11px 11px, #00664e 12px 12px, #00664e 13px 13px, #00664e 14px 14px, #00664e 15px 15px, #00664e 16px 16px, #00664e 17px 17px, #00664e 18px 18px, #00664e 19px 19px, #00664e 20px 20px, #00664e 21px 21px, #00664e 22px 22px, #00664e 23px 23px, #00664e 24px 24px, #00664e 25px 25px, #00664e 26px 26px, #00664e 27px 27px, #00664e 28px 28px, #00664e 29px 29px, #00664e 30px 30px, #00664e 31px 31px, #00664e 32px 32px, #00664e 33px 33px, #00664e 34px 34px, #00664e 35px 35px, #00664e 36px 36px, #00664e 37px 37px, #00664e 38px 38px, #00664e 39px 39px, #00664e 40px 40px, #00664e 41px 41px, #00664e 42px 42px, #00664e 43px 43px, #00664e 44px 44px, #00664e 45px 45px, #00664e 46px 46px, #00664e 47px 47px, #00664e 48px 48px, #00664e 49px 49px, #00664e 50px 50px, #00664e 51px 51px, #00664e 52px 52px, #00664e 53px 53px, #00664e 54px 54px, #00664e 55px 55px, #00664e 56px 56px, #00664e 57px 57px, #00664e 58px 58px, #00664e 59px 59px, #00664e 60px 60px, #00664e 61px 61px, #00664e 62px 62px, #00664e 63px 63px, #00664e 64px 64px, #00664e 65px 65px, #00664e 66px 66px, #00664e 67px 67px, #00664e 68px 68px, #00664e 69px 69px, #00664e 70px 70px, #00664e 71px 71px, #00664e 72px 72px, #00664e 73px 73px, #00664e 74px 74px, #00664e 75px 75px
}

.shadow-icon-box.is-warning {
    background-color: #eda514;
    -webkit-box-shadow: 0 14px 26px -12px rgba(237, 165, 20, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(237, 165, 20, 0.2) !important;
    -moz-box-shadow: 0 14px 26px -12px rgba(237, 165, 20, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(237, 165, 20, 0.2) !important;
    -ms-box-shadow: 0 14px 26px -12px rgba(237, 165, 20, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(237, 165, 20, 0.2) !important;
    box-shadow: 0 14px 26px -12px rgba(237, 165, 20, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(237, 165, 20, 0.2) !important
}

.shadow-icon-box.is-warning span {
    text-shadow: #a8740d 1px 1px, #a8740d 2px 2px, #a8740d 3px 3px, #a8740d 4px 4px, #a8740d 5px 5px, #a8740d 6px 6px, #a8740d 7px 7px, #a8740d 8px 8px, #a8740d 9px 9px, #a8740d 10px 10px, #a8740d 11px 11px, #a8740d 12px 12px, #a8740d 13px 13px, #a8740d 14px 14px, #a8740d 15px 15px, #a8740d 16px 16px, #a8740d 17px 17px, #a8740d 18px 18px, #a8740d 19px 19px, #a8740d 20px 20px, #a8740d 21px 21px, #a8740d 22px 22px, #a8740d 23px 23px, #a8740d 24px 24px, #a8740d 25px 25px, #a8740d 26px 26px, #a8740d 27px 27px, #a8740d 28px 28px, #a8740d 29px 29px, #a8740d 30px 30px, #a8740d 31px 31px, #a8740d 32px 32px, #a8740d 33px 33px, #a8740d 34px 34px, #a8740d 35px 35px, #a8740d 36px 36px, #a8740d 37px 37px, #a8740d 38px 38px, #a8740d 39px 39px, #a8740d 40px 40px, #a8740d 41px 41px, #a8740d 42px 42px, #a8740d 43px 43px, #a8740d 44px 44px, #a8740d 45px 45px, #a8740d 46px 46px, #a8740d 47px 47px, #a8740d 48px 48px, #a8740d 49px 49px, #a8740d 50px 50px, #a8740d 51px 51px, #a8740d 52px 52px, #a8740d 53px 53px, #a8740d 54px 54px, #a8740d 55px 55px, #a8740d 56px 56px, #a8740d 57px 57px, #a8740d 58px 58px, #a8740d 59px 59px, #a8740d 60px 60px, #a8740d 61px 61px, #a8740d 62px 62px, #a8740d 63px 63px, #a8740d 64px 64px, #a8740d 65px 65px, #a8740d 66px 66px, #a8740d 67px 67px, #a8740d 68px 68px, #a8740d 69px 69px, #a8740d 70px 70px, #a8740d 71px 71px, #a8740d 72px 72px, #a8740d 73px 73px, #a8740d 74px 74px, #a8740d 75px 75px
}

.shadow-icon-box.is-danger {
    background-color: #FF7273;
    -webkit-box-shadow: 0 14px 26px -12px rgba(255, 114, 115, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 114, 115, 0.2) !important;
    -moz-box-shadow: 0 14px 26px -12px rgba(255, 114, 115, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 114, 115, 0.2) !important;
    -ms-box-shadow: 0 14px 26px -12px rgba(255, 114, 115, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 114, 115, 0.2) !important;
    box-shadow: 0 14px 26px -12px rgba(255, 114, 115, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 114, 115, 0.2) !important
}

.shadow-icon-box.is-danger span {
    text-shadow: #ff2627 1px 1px, #ff2627 2px 2px, #ff2627 3px 3px, #ff2627 4px 4px, #ff2627 5px 5px, #ff2627 6px 6px, #ff2627 7px 7px, #ff2627 8px 8px, #ff2627 9px 9px, #ff2627 10px 10px, #ff2627 11px 11px, #ff2627 12px 12px, #ff2627 13px 13px, #ff2627 14px 14px, #ff2627 15px 15px, #ff2627 16px 16px, #ff2627 17px 17px, #ff2627 18px 18px, #ff2627 19px 19px, #ff2627 20px 20px, #ff2627 21px 21px, #ff2627 22px 22px, #ff2627 23px 23px, #ff2627 24px 24px, #ff2627 25px 25px, #ff2627 26px 26px, #ff2627 27px 27px, #ff2627 28px 28px, #ff2627 29px 29px, #ff2627 30px 30px, #ff2627 31px 31px, #ff2627 32px 32px, #ff2627 33px 33px, #ff2627 34px 34px, #ff2627 35px 35px, #ff2627 36px 36px, #ff2627 37px 37px, #ff2627 38px 38px, #ff2627 39px 39px, #ff2627 40px 40px, #ff2627 41px 41px, #ff2627 42px 42px, #ff2627 43px 43px, #ff2627 44px 44px, #ff2627 45px 45px, #ff2627 46px 46px, #ff2627 47px 47px, #ff2627 48px 48px, #ff2627 49px 49px, #ff2627 50px 50px, #ff2627 51px 51px, #ff2627 52px 52px, #ff2627 53px 53px, #ff2627 54px 54px, #ff2627 55px 55px, #ff2627 56px 56px, #ff2627 57px 57px, #ff2627 58px 58px, #ff2627 59px 59px, #ff2627 60px 60px, #ff2627 61px 61px, #ff2627 62px 62px, #ff2627 63px 63px, #ff2627 64px 64px, #ff2627 65px 65px, #ff2627 66px 66px, #ff2627 67px 67px, #ff2627 68px 68px, #ff2627 69px 69px, #ff2627 70px 70px, #ff2627 71px 71px, #ff2627 72px 72px, #ff2627 73px 73px, #ff2627 74px 74px, #ff2627 75px 75px
}

.shadow-title {
    padding-top: 10px;
    color: #444F60;
    font-weight: 500
}

.shadow-text {
    color: #A9ABAC;
    font-size: 13px
}

.simple-counter {
    position: relative
}

.simple-counter .counter-number {
    font-size: 3rem;
    color: #444F60;
    z-index: 99
}

.simple-counter .counter-number.is-bold {
    font-weight: 700 !important
}

.simple-counter .counter-text {
    text-transform: uppercase;
    ;
    font-size: 1rem;
    font-weight: 900;
    color: var(--app-default-color) !important
}

.simple-counter .background-icon {
    position: absolute;
    font-size: 5rem;
    top: -10px !important;
    left: 0;
    right: 0;
    color: #34495e;
    opacity: 0.1;
    z-index: 0
}

.card-counter .flex-card {
    padding: 20px;
    overflow: visible
}

.card-counter .flex-card:hover .round-icon i {
    transform: rotate(360deg) scale(1.05);
    background: var(--app-default-color);
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.card-counter .flex-card:hover .counter-text {
    color: var(--app-default-color)
}

.card-counter .round-icon i {
    font-size: 2rem;
    padding: 22px;
    color: #fff;
    background: var(--app-default-color);
    box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important;
    border-radius: 100px;
    margin-top: -40px;
    transition: all 0.4s
}

.card-counter .counter-number {
    font-weight: bolder;
    font-size: 2.6rem;
    color: #444F60
}

.card-counter .counter-text {
    color: var(--app-default-color);
    font-weight: 600;
    transition: all 0.4s;
    font-size: 1.1rem
}

.icon-counter .counter-icon i {
    font-size: 3.4rem;
    color: var(--app-default-color)
}

.icon-counter .counter-number {
    font-weight: bolder;
    font-size: 3rem;
    color: #444F60
}

.icon-counter .counter-text {
    color: var(--app-default-color);
    font-size: 1.1rem;
    font-weight: 600;
    transition: all 0.4s
}

.parallax-counter .counter-icon i {
    font-size: 3.4rem;
    color: #fff
}

.parallax-counter .counter-number {
    font-weight: bolder;
    font-size: 3rem;
    color: #fff
}

.parallax-counter .counter-text {
    color: #fff;
    ;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0 10px;
    transition: all 0.4s
}

.team-classic .team-member {
    position: relative
}

.team-classic .team-member img {
    height: 100%;
    width: 100%;
    display: block
}

.team-classic .team-member .item-overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    transition: all 0.5s;
    overflow: hidden
}

.team-classic .team-member .item-overlay .overlay-quote {
    opacity: 0;
    opacity: 0;
    color: #fff;
    position: absolute;
    top: 55%;
    left: 0;
    padding: 5%;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    transform: translateY(100%);
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s
}

.team-classic .team-member .item-overlay .overlay-quote .quote-text i {
    font-size: 18px
}

.team-classic .team-member .item-overlay .overlay-quote .social-links {
    padding: 20px 0;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s
}

.team-classic .team-member .item-overlay .overlay-quote .social-links span a {
    margin: 0 10px 0 10px;
    color: #fff
}

.team-classic .team-member .item-overlay .overlay-quote .social-links span a:hover {
    opacity: 1
}

.team-classic .team-member .item-overlay .overlay-quote .social-links span a i {
    font-size: 1.4em;
    padding: 15px;
    border-radius: 100px;
    border: 2px dashed #fff;
    transition: all 0.1
}

.team-classic .team-member .item-overlay .overlay-quote .social-links span:first-child a i:hover {
    background: #1dcaff;
    border: 2px solid #1dcaff
}

.team-classic .team-member .item-overlay .overlay-quote .social-links span:nth-child(2) a i:hover {
    background: #007bb6;
    border: 2px solid #007bb6
}

.team-classic .team-member .item-overlay .overlay-quote .social-links span:last-child a i:hover {
    background: #ea4c89;
    border: 2px solid #ea4c89
}

.team-classic .team-member:hover .item-overlay {
    background: rgba(0, 0, 0, 0.7)
}

.team-classic .team-member:hover .overlay-quote {
    opacity: 1;
    transform: translateY(-100%)
}

.team-classic .member-name {
    ;
    text-transform: uppercase;
    font-size: 1.3rem
}

.team-classic .member-name .last-name {
    font-weight: bolder;
    
}

.team-classic .member-name .position {
    font-size: 0.9rem;
    color: var(--app-default-color);
    
}

.team-classic.circled .social-links span:first-child a i:hover {
    background: none !important;
    border: 2px solid #1dcaff;
    color: #1dcaff
}

.team-classic.circled .social-links span:nth-child(2) a i:hover {
    background: none !important;
    border: 2px solid #007bb6;
    color: #007bb6
}

.team-classic.circled .social-links span:last-child a i:hover {
    background: none !important;
    border: 2px solid #ea4c89;
    color: #ea4c89
}

.team-classic.squared .social-links span a i {
    border-radius: 3px !important
}

.team-classic.squared .social-links span:first-child a i:hover {
    background: none !important;
    border: 2px solid #1dcaff;
    color: #1dcaff
}

.team-classic.squared .social-links span:nth-child(2) a i:hover {
    background: none !important;
    border: 2px solid #007bb6;
    color: #007bb6
}

.team-classic.squared .social-links span:last-child a i:hover {
    background: none !important;
    border: 2px solid #ea4c89;
    color: #ea4c89
}

.modern-team {
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start
}

.modern-team .modern-team-item .item-wrapper {
    position: relative
}

.modern-team .modern-team-item .item-img {
    position: relative;
    overflow: hidden
}

.modern-team .modern-team-item .item-img:before {
    content: "";
    background-color: rgba(72, 27, 174, 0.7);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2
}

.modern-team .modern-team-item .item-img .member-avatar {
    display: block;
    max-width: 100%;
    position: relative;
    z-index: 1
}

.modern-team .modern-team-item .overlay-wrapper {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    opacity: 0;
    will-change: opacity;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3
}

.modern-team .modern-team-item .overlay-wrapper .social {
    box-sizing: border-box;
    width: 42px;
    height: 42px;
    padding: 10px;
    background-color: #fff;
    border-radius: 100%;
    margin: 5px;
    position: relative;
    display: inline-block;
    vertical-align: middle
}

.modern-team .modern-team-item .overlay-wrapper .social i {
    position: relative;
    font-size: 1.6rem
}

.modern-team .modern-team-item .member-info {
    padding: 10px 20px
}

.modern-team .modern-team-item .member-info .member-name {
    ;
    font-size: 1.2em;
    margin-top: 0;
    margin-bottom: 0;
    text-transform: uppercase
}

.modern-team .modern-team-item .member-info .member-name strong {
    
}

.modern-team .modern-team-item .member-info .member-position {
    display: block;
    margin: .5em 0;
    ;
    font-size: .8em;
    text-transform: uppercase;
    color: var(--app-default-color)
}

.modern-team .modern-team-item:hover .overlay-wrapper {
    opacity: 1;
    height: 100%;
    transition: opacity 0.4s cubic-bezier(0.71, 0.05, 0.29, 0.9) 0.2s
}

.modern-team .modern-team-item.circle-mask .item-img:before {
    width: 0;
    height: 0;
    padding: 25%;
    border-radius: 50%;
    transition: transform .3s ease, opacity .3s ease-out;
    will-change: opacity, transform;
    opacity: 0;
    transform: translate(-50%, -50%) scale(0)
}

.modern-team .modern-team-item.circle-mask:hover .item-img:before {
    opacity: 1;
    transform: translate(-50%, -50%) scale(4);
    transition-duration: .6s
}

.modern-team .modern-team-item.curtain-mask .item-img:before {
    width: 100%;
    height: 100%;
    opacity: 0;
    -webkit-clip-path: polygon(50% 10%, 15% 90%, 85% 90%);
    clip-path: polygon(50% 10%, 15% 90%, 85% 90%);
    transition-property: transform, opacity;
    transition-duration: .2s, .4s;
    transition-delay: .4s, 0s;
    transition-timing-function: ease-out;
    will-change: transform, opacity;
    transform: translate(-50%, -50%) scale(1)
}

.modern-team .modern-team-item.curtain-mask:hover .item-img:before {
    opacity: 1;
    transform: translate(-50%, -50%) scale(5);
    transition-delay: .1s, 0s;
    transition-duration: .4s
}

.modern-team .modern-team-item.zoom-effect .member-avatar {
    transition: transform 0.4s cubic-bezier(0.71, 0.05, 0.29, 0.9);
    will-change: transform;
    transform: scale(1)
}

.modern-team .modern-team-item.zoom-effect:hover .member-avatar {
    transform: scale(1.2)
}

.modern-team .modern-team-item.rotate-zoom-effect .member-avatar {
    transition: transform 0.4s cubic-bezier(0.71, 0.05, 0.29, 0.9);
    will-change: transform;
    transform: scale(1) rotate(0)
}

.modern-team .modern-team-item.rotate-zoom-effect:hover .member-avatar {
    transform: scale(1.2) rotate(5deg)
}

.modern-team .modern-team-item.zoom-slide-effect .member-avatar {
    transition: transform 0.4s cubic-bezier(0.71, 0.05, 0.29, 0.9);
    will-change: transform;
    transform: scale(1) translate(0, 0)
}

.modern-team .modern-team-item.zoom-slide-effect:hover .member-avatar {
    transform: scale(1.2) translate(4%, 4%)
}

.card-team .card-team-item {
    text-align: center;
    height: 270px
}

.card-team .card-team-item .flex-card {
    height: 270px;
    margin-bottom: 0;
    border-radius: 0
}

.card-team .card-team-item .flex-card:hover {
    transform: scale(1.05);
    z-index: 1000
}

.card-team .card-team-item .team-avatar {
    width: 100%
}

.card-team .card-team-item .team-avatar img {
    width: 70px;
    height: 70px;
    border-radius: 100px
}

.card-team .card-team-item .member-id .name {
    
    margin-top: 15px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #444F60
}

.card-team .card-team-item .member-id .position {
    ;
    text-transform: uppercase;
    margin-top: 5px;
    font-size: .8rem;
    font-weight: 400;
    color: var(--app-default-color)
}

.card-team .card-team-item .card-social-links {
    padding-top: 35px;
    margin-bottom: 20px
}

.card-team .card-team-item .card-social-links a {
    color: #34495e;
    margin: 0 10px 0 10px
}

.card-team .card-team-item .card-social-links a:nth-child(2) i {
    transition-delay: 0.05s
}

.card-team .card-team-item .card-social-links a:last-child i {
    transition-delay: 0.10s
}

.card-team .card-team-item .card-social-links a:hover {
    color: var(--app-default-color)
}

.card-team .card-team-item .card-social-links a i {
    font-size: 1.3rem;
    transform: translateY(300px);
    -ms-transition: all 0.35s;
    -moz-transition: all 0.35s;
    -webkit-transition: all 0.35s;
    transition: all 0.35s
}

.card-team .card-team-item:hover .card-social-links a i {
    transform: translateY(0)
}

.flip-boxes .flip-box {
    perspective: 500px;
    min-height: 300px;
    cursor: pointer
}

.flip-boxes .flip-box-wrapper {
    position: relative;
    transition: all .5s ease-in-out;
    transform-style: preserve-3d;
    border: 1px solid #ededed;
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2)
}

.flip-boxes .flip-box-wrapper div {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background: #fff
}

.flip-boxes .flip-box-wrapper .front {
    z-index: 2;
    background-color: #fff;
    backface-visibility: hidden;
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2)
}

.flip-boxes .flip-box-wrapper .front img {
    height: 100%;
    width: 100%;
    display: block
}

.flip-boxes .flip-box-wrapper .back {
    z-index: 1;
    background: #fff;
    opacity: 1;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2)
}

.flip-boxes .flip-box-wrapper .back .flip-name {
    background: #fff;
    position: absolute;
    top: -22rem !important;
    left: 0;
    min-height: 25px;
    font-size: 1.4rem;
    text-transform: uppercase
}

.flip-boxes .flip-box-wrapper .back .flip-name span {
    font-size: 0.9rem;
    text-transform: uppercase;
    color: var(--app-default-color)
}

.flip-boxes .flip-box-wrapper .back .flip-social {
    position: absolute;
    top: -16rem
}

.flip-boxes .flip-box-wrapper .back .flip-social a {
    color: #34495e;
    font-size: 1.4rem;
    margin: 0 10px 0 10px
}

.flip-boxes .flip-box-wrapper .back .flip-social a:hover {
    color: var(--app-default-color)
}

.flip-boxes .flip-box-wrapper:hover {
    transform: rotateY(180deg)
}

.grid-clients .client {
    max-height: 70px
}

.grid-clients.three-grid .column:nth-child(2),
.grid-clients.three-grid .column:nth-child(3) {
    border-right: 1px solid #ededed
}

.grid-clients.three-grid .is-separator {
    border-top: 1px solid #ededed
}

.grid-clients.four-grid .column:nth-child(2),
.grid-clients.four-grid .column:nth-child(3) {
    border-right: 1px solid #ededed
}

.grid-clients.four-grid .column:nth-child(5) {
    border-left: 1px solid #ededed
}

.grid-clients.four-grid .is-separator {
    border-top: 1px solid #ededed
}

.grid-clients.five-grid .column:nth-child(2),
.grid-clients.five-grid .column:nth-child(3),
.grid-clients.five-grid .column:nth-child(4) {
    border-right: 1px solid #ededed
}

.grid-clients.five-grid .column:nth-child(5),
.grid-clients.five-grid .column:nth-child(6) {
    border-left: 1px solid #ededed
}

.grid-clients.five-grid .is-separator {
    border-top: 1px solid #ededed
}

.grid-clients a {
    display: flex;
    justify-content: center
}

.image-carousel {
    text-align: center;
    max-width: 950px;
    margin: 0 auto
}

.image-carousel:hover .slick-custom {
    opacity: 1
}

.image-carousel .carousel-item {
    margin: 0 20px
}

.image-carousel .image-wrapper {
    position: relative
}

.image-carousel .image-wrapper .stack-logo {
    max-height: 130px
}

.image-carousel .slick-custom {
    opacity: 0
}

.image-carousel .slick-custom.is-prev {
    left: -4%
}

.image-carousel .slick-custom.is-next {
    right: -4%
}

.image-carousel .slick-dots {
    bottom: -60px !important
}

.image-carousel .slick-prev:before,
.image-carousel .slick-next:before {
    color: #34495e
}

.multiple-image-carousel {
    text-align: center;
    max-width: 950px;
    margin: 0 auto
}

.multiple-image-carousel:hover .slick-custom {
    opacity: 1
}

.multiple-image-carousel .carousel-item {
    margin: 0 20px
}

.multiple-image-carousel .image-wrapper {
    position: relative
}

.multiple-image-carousel .image-wrapper .stack-logo {
    max-height: 130px;
    margin: 0 auto
}

.multiple-image-carousel .slick-custom {
    opacity: 0;
    top: 35px
}

.multiple-image-carousel .slick-dots {
    bottom: -60px !important
}

.multiple-image-carousel .slick-prev:before,
.multiple-image-carousel .slick-next:before {
    color: #34495e
}

.single-image-carousel {
    text-align: center;
    max-width: 650px;
    margin: 0 auto
}

.single-image-carousel:hover .slick-custom {
    opacity: 1
}

.single-image-carousel .carousel-item {
    margin: 0 20px
}

.single-image-carousel .image-wrapper {
    position: relative
}

.single-image-carousel .image-wrapper:hover .caption {
    transform: translateY(0)
}

.single-image-carousel .image-wrapper img {
    width: 100%;
    height: 100%;
    min-height: 400px
}

.single-image-carousel .image-wrapper .caption {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 0;
    z-index: 99;
    padding: 20px;
    background: rgba(0, 0, 0, 0.8);
    transform: translateY(120%);
    transition: transform 0.4s
}

.single-image-carousel .image-wrapper .caption span {
    color: white;
    font-size: 1.1rem
}

.single-image-carousel .slick-custom {
    opacity: 0
}

.single-image-carousel .slick-dots {
    bottom: -60px !important
}

.single-image-carousel .slick-prev:before,
.single-image-carousel .slick-next:before {
    color: #34495e
}

.slick-custom {
    position: absolute;
    top: 41%;
    border: 1px solid #ededed;
    width: 50px;
    height: 50px;
    background: #fff;
    border-radius: 100px;
    cursor: pointer;
    color: #444F60;
    transition: all 0.3s;
    z-index: 999
}

.slick-custom i {
    position: relative;
    top: 14px
}

.slick-custom:hover {
    transform: rotate(360deg);
    background: var(--app-default-color);
    border: 1px solid var(--app-default-color);
    color: #fff;
    box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important
}

.slick-custom.is-prev {
    left: -6px
}

.slick-custom.is-prev i {
    left: 10px
}

.slick-custom.is-next {
    right: -6px
}

.slick-custom.is-next i {
    left: 12px
}


/*! _tabs.scss | Bulkit | CSS Ninja */

.tabs-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%
}

.tabs-nav .tabs-container {
    overflow: hidden;
    width: 100%
}

.tabs-nav .tabs-container .tab-content {
    padding: 28px 33px;
    position: relative;
    z-index: 10;
    display: inline-block;
    width: 100%
}

.tabs-nav .tabs-container .tab-content p:last-child {
    margin-bottom: 0
}

.tabs-nav .tabs-container.type-2 {
    border-radius: 3px
}

.tabs-nav .tabs-container.type-1 .tab-content {
    border: none;
    border-top: 1px solid #e0e0e0;
    padding: 30px 0 0 0
}

.tabs-nav li {
    float: left;
    line-height: 45px;
    padding: 0;
    margin-right: 4px;
    position: relative;
    z-index: 12
}

.tabs-nav li.active .tab-reviews {
    color: #fff
}

.tabs-nav li a,
.tabs-nav tab-reviews {
    -webkit-transition: all 0.25s ease-in-out;
    transition: all 0.25s ease-in-out
}

.tabs-nav li a {
    border-bottom: 2px solid transparent;
    color: #333;
    display: inline-block;
    outline: none;
    padding: 7px 15px;
    text-decoration: none;
    font-size: 15px;
    z-index: 11;
    position: relative;
    margin-bottom: -1px
}

.tabs-nav li a:hover {
    border-color: #66676b
}

.tabs-nav li a:hover,
.tabs-nav li.active a {
    border-color: var(--app-default-color);
    color: var(--app-default-color) !important;
    z-index: 11
}

.tabs-nav li a i {
    padding-right: 5px;
    font-size: 16px;
    top: 1px;
    position: relative
}

.navigation-tabs {
    overflow: hidden
}

.navigation-tabs .navtab-content {
    display: none;
    padding: 15px;
    min-height: 190px
}

.navigation-tabs .navtab-content.navtab-modal {
    max-height: 350px;
    overflow: auto
}

.navigation-tabs .navtab-content.is-active {
    display: block
}

.navigation-tabs.animated-tabs .navtab-content {
    animation-name: fadeInLeft;
    animation-duration: 0.5s
}

.navigation-tabs.translated-tabs .navtab-content {
    animation-name: translateLeft;
    animation-duration: 0.5s
}

.navigation-tabs.simple-tabs .tabs ul li a {
    color: #A9ABAC
}

.navigation-tabs.simple-tabs .tabs ul li:hover a {
    border-bottom-color: var(--app-default-color)
}

.navigation-tabs.simple-tabs .tabs ul li.is-active a {
    color: #444F60;
    border-bottom: 2px solid var(--app-default-color)
}

.navigation-tabs.simple-tabs .tabs ul li.is-active a .icon i {
    color: var(--app-default-color)
}

.navigation-tabs.boxed-tabs .tabs ul li a {
    color: #A9ABAC
}

.navigation-tabs.boxed-tabs .tabs ul li.is-active a {
    color: var(--app-default-color)
}

.navigation-tabs.outlined-pills.rounded-pills .tabs ul li.is-active a {
    border-radius: 100px
}

.navigation-tabs.outlined-pills .tabs ul {
    border-bottom: 1px transparent !important
}

.navigation-tabs.outlined-pills .tabs a {
    border: 1px transparent
}

.navigation-tabs.outlined-pills .tabs ul li a {
    color: #A9ABAC;
    margin-bottom: 5px
}

.navigation-tabs.outlined-pills .tabs ul li.is-active a {
    color: var(--app-default-color);
    border: 1px solid var(--app-default-color);
    border-bottom-color: var(--app-default-color) !important;
    border-radius: 3px
}

.navigation-tabs.full-pills.rounded .tabs ul li.is-active a {
    border-radius: 100px !important
}

.navigation-tabs.full-pills .tabs ul {
    border-bottom: 1px transparent !important;
    padding-bottom: 10px
}

.navigation-tabs.full-pills .tabs a {
    border: 1px transparent
}

.navigation-tabs.full-pills .tabs ul li a {
    color: #A9ABAC;
    margin-bottom: 5px
}

.navigation-tabs.full-pills.primary .tabs ul li.is-active a {
    color: #fff;
    border: 1px solid var(--app-default-color);
    background-color: var(--app-default-color);
    border-radius: 3px;
    box-shadow: 0 14px 26px -12px rgba(79, 193, 234, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(79, 193, 234, 0.2) !important
}

.navigation-tabs.full-pills.secondary .tabs ul li.is-active a {
    color: #fff;
    border: 1px solid var(--app-default-color);
    background-color: var(--app-default-color);
    border-radius: 3px;
    box-shadow: 0 14px 26px -12px rgba(103, 58, 183, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(103, 58, 183, 0.2) !important
}

.navigation-tabs.full-pills.accent .tabs ul li.is-active a {
    color: #fff;
    border: 1px solid var(--app-default-color);
    background-color: var(--app-default-color);
    border-radius: 3px;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.navigation-tabs.square-pills.circle-pills .tabs ul li a {
    border-radius: 30px
}

.navigation-tabs.square-pills .tabs ul {
    padding: 20px
}

.navigation-tabs.square-pills .tabs ul li a {
    padding: 0 15.5px;
    text-align: center;
    height: 60px;
    width: 60px;
    border-radius: 3px;
    font-weight: 400;
    color: #9a9a9a;
    margin-right: 19px;
    background-color: rgba(222, 222, 222, 0.3);
    border-bottom: 1px solid transparent;
    transition: all 0.5s
}

.navigation-tabs.square-pills .tabs ul li a:hover {
    border-bottom: 1px solid transparent
}

.navigation-tabs.square-pills .tabs ul li a i {
    display: block;
    font-size: 18px
}

.navigation-tabs.square-pills .tabs ul li.is-active a {
    background-color: var(--app-default-color);
    color: #fff;
    box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.18)
}

.tabs.partner-tabs ul {
    border-bottom: 1px transparent !important
}

.tab-reviews {
    color: #aaa
}


/*! _testimonials.scss | Bulkit | CSS Ninja */

.testimonials,
.demo {
    position: relative;
    width: 100%;
    display: block;
    box-sizing: border-box
}

.testimonials .testimonial-item,
.demo .testimonial-item {
    margin: 40px;
    outline: none !important
}

.testimonials .testimonial-item .testimonial-avatar,
.demo .testimonial-item .testimonial-avatar {
    display: flex;
    justify-content: center
}

.testimonials .testimonial-item .testimonial-avatar img,
.demo .testimonial-item .testimonial-avatar img {
    border-radius: 100px;
    width: 75px;
    height: 75px;
    position: relative;
    top: -40px
}

.testimonials .testimonial-item .testimonial-name,
.demo .testimonial-item .testimonial-name {
    text-align: center
}

.testimonials .testimonial-item .testimonial-name h3,
.demo .testimonial-item .testimonial-name h3 {
    
    font-size: 18px;
    color: var(--app-default-color);
    position: relative;
    top: -20px
}

.testimonials .testimonial-item .testimonial-name span,
.demo .testimonial-item .testimonial-name span {
    ;
    font-size: 14px;
    color: #A9ABAC;
    position: relative;
    top: -15px
}

.testimonials .testimonial-item .testimonial-content p,
.demo .testimonial-item .testimonial-content p {
    padding: 20px 30px
}

.slick-dots li.slick-active button:before {
    opacity: .75;
    color: var(--app-default-color) !important
}

.vertical-testimonials {
    margin-top: 90px
}

.vertical-testimonials .vtestimonial-item {
    margin: 5px 80px;
    border-radius: 12px
}

.vertical-testimonials .vtestimonial-item:last-child {
    margin-bottom: 100px
}

.vertical-testimonials .vtestimonial-item .vt-avatar {
    height: 55px;
    border-radius: 100px
}

.vertical-testimonials .vtestimonial-item .vt-content {
    margin: 0 10px
}

.vertical-testimonials .vtestimonial-item .vt-content .vt-name {
    
    font-weight: 500;
    color: var(--app-default-color);
    margin-bottom: .7em !important
}

.vertical-testimonials .vtestimonial-item .vt-content .vt-text {
    padding-right: 5px;
    font-size: 12px
}

.vertical-testimonials .vtestimonial-item .vt-content .star-rating {
    float: right;
    position: relative;
    top: 3px;
    right: 15px
}

.vertical-testimonials .slick-current.slick-active.slick-center {
    transform: scale(1.1);
    box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px
}

.vertical-testimonials .slick-slide:not(.slick-current) {
    opacity: 0.1 !important
}

.flat-testimonials .flat-testimonial-item {
    margin: 0 20px 50px 20px
}

.flat-testimonials .flat-testimonial-item .image-container {
    position: relative;
    overflow: hidden
}

.flat-testimonials .flat-testimonial-item .image-container img {
    border-radius: 10px;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.18)
}

.flat-testimonials .flat-testimonial-item .image-container .skewed-overlay {
    position: absolute;
    top: 95%;
    left: 0;
    height: 40%;
    width: 200%;
    transform: skewY(8deg);
    padding: 20px;
    background: #fff
}

.flat-testimonials .flat-testimonial-item .testimonial-text .quoted-text {
    color: #878787
}

.flat-testimonials .flat-testimonial-item .testimonial-text .client-name {
    margin-top: 20px;
    
    font-weight: 400;
    font-size: 1.2rem
}

.flat-testimonials .flat-testimonial-item .testimonial-text .client-position {
    ;
    font-size: 0.9rem;
    color: #444F60
}

.flat-testimonials .flat-testimonial-item .testimonial-text .company {
    max-height: 60px;
    margin-right: 50px;
    float: right
}

.flat-testimonials .flat-testimonial-item .testimonial-text .fa-quote-left {
    margin: 20px 0 !important
}

.flat-testimonials .flat-testimonial-item.primary .skewed-overlay {
    background: var(--app-default-color)
}

.flat-testimonials .flat-testimonial-item.primary .client-name {
    color: var(--app-default-color)
}

.flat-testimonials .flat-testimonial-item.primary .fa-quote-left {
    color: var(--app-default-color)
}

.flat-testimonials .flat-testimonial-item.secondary .skewed-overlay {
    background: var(--app-default-color)
}

.flat-testimonials .flat-testimonial-item.secondary .client-name {
    color: var(--app-default-color)
}

.flat-testimonials .flat-testimonial-item.secondary .fa-quote-left {
    color: var(--app-default-color)
}

.flat-testimonials .flat-testimonial-item.accent .skewed-overlay {
    background: var(--app-default-color)
}

.flat-testimonials .flat-testimonial-item.accent .client-name {
    color: var(--app-default-color)
}

.flat-testimonials .flat-testimonial-item.accent .fa-quote-left {
    color: var(--app-default-color)
}


/*! _dialogs.scss | Bulkit | CSS Ninja */

.modal {
    transition: all 0.5s;
    transform: scale(0)
}

.modal .modal-content {
    transition: all 0.4s;
    transform: scale(0);
    opacity: 0;
    z-index: 99 !important
}

.modal .modal-close {
    transition: all 0.4s;
    z-index: 100 !important
}

.modal .modal-close:hover {
    transform: rotate(135deg)
}

.modal a {
    border-radius: 6px
}

.modal.is-active {
    transform: scale(1)
}

.modal.is-active .modal-background {
    background: -webkit-linear-gradient(45deg, #6a85b6 0%, #bac8e0 100%);
    background: linear-gradient(45deg, #6a85b6 0%, #bac8e0 100%);
    background-color: var(--app-default-color);
    width: 1000px;
    height: 1000px;
    border-radius: 10000px;
    transition: all 0.5s;
    transform: scale(0);
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 98 !important;
    overflow: hidden !important
}

.modal.is-active .modal-background.scaleInCircle {
    transform: scale(7)
}

.modal.is-active .modal-content.scaleIn {
    transform: scale(1);
    opacity: 1
}

.modal.is-active .modal-close {
    z-index: 100 !important
}

.modal.is-active.image-modal .modal-background {
    background: -webkit-linear-gradient(45deg, #444F60, #444);
    background: linear-gradient(45deg, #444F60, #444);
    background-color: #444F60
}

.modal.is-active.image-modal img {
    border-radius: 6px
}

.modal.is-active.image-modal .gallery-item figure {
    background: none
}

.modal.is-active .modal-card .modal-card-head,
.modal.is-active .modal-card .modal-card-foot {
    padding: 15px
}

.modal.is-active .modal-card .modal-card-head {
    background-color: #fff
}

.modal.is-active .modal-card .modal-card-head p {
    color: #444F60
}

.modal.is-active .modal-card .modal-card-head .delete {
    background: transparent !important;
    transition: all 0.3s
}

.modal.is-active .modal-card .modal-card-head .delete:before {
    background: var(--app-default-color)
}

.modal.is-active .modal-card .modal-card-head .delete:after {
    background: var(--app-default-color)
}

.modal.is-active .modal-card .modal-card-head .delete:hover {
    transform: rotate(135deg)
}

.modal.is-active .modal-card .modal-card-body::-webkit-scrollbar {
    width: 10px
}

.modal.is-active .modal-card .modal-card-body::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.modal.is-active .modal-card .modal-card-foot {
    background-color: #fff;
    justify-content: flex-end;
    border-top: none
}

.modal.is-active.modal-sm .modal-card-body {
    max-height: 400px
}

.modal.is-active.modal-hero .modal-background {
    background: linear-gradient(to right, var(--app-default-color), var(--app-default-color));
    background: linear-gradient(to top, var(--app-default-color), var(--app-default-color));
    background-color: var(--app-default-color)
}

.modal.is-active.modal-success .modal-background {
    background: #00b289
}

.modal.is-active.modal-error .modal-background {
    background: #FF7273
}

.modal.is-active.modal-warning .modal-background {
    background: #eda514
}

.modal.is-active.modal-info .modal-background {
    background: #039BE5
}

.modal.is-active .modal-svg {
    max-width: 110px;
    margin: 0 auto !important
}

@media screen and (min-width: 769px) {
    .modal.modal-lg .modal-card,
    .modal.modal-lg .modal-content {
        width: 800px !important
    }
    .modal.modal-sm .modal-card,
    .modal.modal-sm .modal-content {
        width: 400px !important
    }
}


/*! _forms.scss | Bulkit | CSS Ninja */


/*! themes/_mixins.scss | Bulkit | CSS Ninja */

.form-label {
    padding-bottom: 5px;
    color: #34495e
}

input.input {
    color: #878787;
    box-shadow: none;
    transition: all 0.8s;
    padding-bottom: 3px;
    border-color: #ccc;
    font-size: 0.9rem;
    height: 2rem
}

input.input.is-small {
    padding-bottom: 2px;
    padding-left: 10px
}

input.input.is-medium {
    padding-bottom: 5px;
    font-size: 1rem;
    height: 2.5rem
}

input.input.is-large {
    padding-bottom: 7px;
    font-size: 1.25rem;
    height: 3rem
}

input.input.rounded {
    border-radius: 100px
}

input.input.is-primary-focus:focus {
    border-color: var(--app-default-color)
}

input.input.is-primary-focus:focus ~ span.icon i {
    color: var(--app-default-color)
}

input.input.is-secondary-focus:focus {
    border-color: var(--app-default-color)
}

input.input.is-secondary-focus:focus ~ span.icon i {
    color: var(--app-default-color)
}

input.input.is-accent-focus:focus {
    border-color: var(--app-default-color)
}

input.input.is-accent-focus:focus ~ span.icon i {
    color: var(--app-default-color)
}

input.input.is-grey-focus:focus {
    border-color: #A9ABAC
}

input.input.is-grey-focus:focus ~ span.icon i {
    color: #A9ABAC
}

input.input:focus,
input.input:active {
    border-color: #EFF4F7
}

.input.custom-input {
    height: 46px;
    line-height: 46px;
    padding-left: 50px !important
}

.input.custom-input:focus {
    border-color: #dbdbdb !important
}

textarea.textarea {
    color: #878787;
    box-shadow: none;
    transition: all 0.8s
}

textarea.textarea:focus {
    border: 1px solid #ededed
}

textarea.textarea.is-primary-focus:focus {
    border-color: var(--app-default-color)
}

textarea.textarea.is-primary-focus:focus ~ span.icon i {
    color: var(--app-default-color)
}

textarea.textarea.is-secondary-focus:focus {
    border-color: var(--app-default-color)
}

textarea.textarea.is-secondary-focus:focus ~ span.icon i {
    color: var(--app-default-color)
}

textarea.textarea.is-accent-focus:focus {
    border-color: var(--app-default-color)
}

textarea.textarea.is-accent-focus:focus ~ span.icon i {
    color: var(--app-default-color)
}

textarea.textarea.is-grey-focus:focus {
    border-color: #A9ABAC
}

textarea.textarea.is-grey-focus:focus ~ span.icon i {
    color: #A9ABAC
}

textarea.textarea.is-default-focus:focus {
    border-color: #ccc
}

textarea.textarea.is-default-focus:focus ~ span.icon i {
    color: #ccc
}

textarea.textarea.is-grow {
    min-height: 40px !important;
    height: 40px;
    resize: none;
    transition: all 0.5s
}

textarea.textarea.is-grow:focus {
    height: 130px !important;
    border-color: #34495e
}

textarea.textarea.is-button {
    min-height: 40px !important;
    height: 40px !important;
    resize: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none !important;
    transition: all 0.6s
}

textarea.textarea.is-button:hover {
    border-color: #ccc
}

textarea.textarea.is-button:focus {
    height: 130px !important;
    padding-bottom: 40px !important;
    border-color: #ccc
}

textarea.textarea.is-button+.textarea-button {
    display: flex;
    justify-content: flex-end;
    position: relative;
    border: 1px solid #ccc;
    border-top: none !important;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px
}

textarea.textarea.is-button+.textarea-button button {
    margin: 10px 7px 7px 7px
}

.field .control.is-loading:after {
    position: relative;
    top: 0.6rem;
    z-index: 1
}

.field .control.is-small:after {
    height: 0.8rem;
    width: 0.8rem;
    position: relative;
    top: 0.4rem;
    z-index: 1
}

.field .control.is-medium:after {
    height: 1.2rem;
    width: 1.2rem;
    position: relative;
    top: 0.8rem;
    z-index: 1
}

.field .control.is-large:after {
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    top: 1rem;
    z-index: 1
}

.field .control.has-icons-left .icon,
.field .control.has-icons-right .icon {
    color: #dbdbdb;
    height: 2.25em;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 2.25em
}

.field .control.has-icons-right input {
    padding-right: 2.25em
}

.field .control.has-icons-right input.is-medium ~ span.icon.is-right {
    top: 15px
}

.field .control.has-icons-right input.is-large ~ span.icon.is-right {
    top: 18px
}

.field .control.has-icons-right .icon.is-right {
    right: 0
}

.field .control.has-icons-right .icon.is-right i {
    transition: all 0.5s;
    position: relative;
    top: -3px
}

.field .control.has-icons-right .icon.is-right.is-medium i {
    top: -15px;
    right: -10px;
    font-size: 1.3rem
}

.field .control.has-icons-left input {
    padding-left: 2.25em
}

.field .control.has-icons-left input.is-small {
    padding-left: 2.8em
}

.field .control.has-icons-left input.is-small ~ span {
    top: 5px
}

.field .control.has-icons-left input.is-medium {
    padding-left: 2.8rem
}

.field .control.has-icons-left input.is-large {
    padding-left: 2.8em
}

.field .control.has-icons-left .icon.is-left {
    left: 0
}

.field .control.has-icons-left .icon.is-left i {
    transition: all 0.5s;
    position: relative;
    top: -2px
}

.field .control.has-icons-left .icon.is-left.is-medium i {
    top: -10px;
    left: -10px;
    font-size: 1.3rem
}

.field .control.has-icons-right .icon {
    color: #dbdbdb;
    height: 2.25em;
    pointer-events: none;
    position: absolute;
    top: 0.7rem;
    width: 2.25em
}

.field .control.has-icons-left .icon {
    color: #dbdbdb;
    height: 2.25em;
    pointer-events: none;
    position: absolute;
    top: 0.7rem;
    width: 2.25em
}

.field .control.required {
    position: relative
}

.field .control.required i {
    display: none;
    position: absolute;
    right: 10px;
    top: 8px
}

.field .control.required small.validation-info {
    display: none;
    font-size: 0.8rem
}

.field .control.required.has-success input {
    border: 1px solid #00b289
}

.field .control.required.has-success small.validation-info.success {
    color: #00b289;
    display: block
}

.field .control.required.has-success .success i {
    display: block;
    color: #00b289
}

.field .control.required.has-error input {
    border: 1px solid #FF7273
}

.field .control.required.has-error small.validation-info.error {
    color: #FF7273;
    display: block
}

.field .control.required.has-error .error i {
    display: block;
    color: #FF7273
}

.control-material {
    position: relative;
    margin-bottom: 3em
}

.control-material input,
.control-material textarea {
    border-radius: 0 !important
}

.control-material.is-primary input.material-input:focus ~ label,
.control-material.is-primary input:valid ~ label,
.control-material.is-primary textarea:focus ~ label {
    color: var(--app-default-color)
}

.control-material.is-primary .bar:before,
.control-material.is-primary .bar:after {
    background: var(--app-default-color)
}

.control-material.is-primary.has-icon input:focus ~ i {
    color: var(--app-default-color) !important
}

.control-material.is-secondary input.material-input:focus ~ label,
.control-material.is-secondary input:valid ~ label,
.control-material.is-secondary textarea:focus ~ label {
    color: var(--app-default-color)
}

.control-material.is-secondary .bar:before,
.control-material.is-secondary .bar:after {
    background: var(--app-default-color)
}

.control-material.is-secondary.has-icon input:focus ~ i {
    color: var(--app-default-color) !important
}

.control-material.is-accent input.material-input:focus ~ label,
.control-material.is-accent input:valid ~ label,
.control-material.is-accent textarea:focus ~ label {
    color: var(--app-default-color)
}

.control-material.is-accent .bar:before,
.control-material.is-accent .bar:after {
    background: var(--app-default-color)
}

.control-material.is-accent.has-icon input:focus ~ i {
    color: var(--app-default-color) !important
}

.control-material.is-light input.material-input:focus ~ label,
.control-material.is-light input:valid ~ label,
.control-material.is-light textarea:focus ~ label {
    color: #fff
}

.control-material.is-light .bar:before,
.control-material.is-light .bar:after {
    background: #fff
}

.control-material.is-light.has-icon input:focus ~ i {
    color: #fff !important
}

.control-material input.material-input,
.control-material textarea {
    width: 100% !important;
    font-size: 18px;
    padding: 0.625em 0.625em 0.625em 0.3125em;
    display: block;
    width: 18.75em;
    border: none;
    border-bottom: 1px solid #A9ABAC;
    background-color: transparent !important
}

.control-material input.material-input:focus,
.control-material textarea:focus {
    outline: none
}

.control-material label {
    font-family: 'Arial';
    color: #cecece;
    font-size: 15px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0.3125em;
    top: 0.625em;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all
}

.control-material input.material-input:focus ~ label,
.control-material input:valid ~ label,
.control-material textarea:focus ~ label {
    top: -20px;
    left: -2px;
    font-size: 12px
}

.control-material .bar {
    position: relative;
    display: block
}

.control-material .bar:before,
.control-material .bar:after {
    content: '';
    height: 2px;
    width: 0;
    bottom: 0px;
    position: absolute;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all
}

.control-material .bar:before {
    left: 50%
}

.control-material .bar:after {
    right: 50%
}

.control-material input.material-input:focus ~ .bar:before,
.control-material input.material-input:focus ~ .bar:after,
.control-material textarea:focus ~ .bar:before,
.control-material textarea:focus ~ .bar:after {
    width: 50%
}

.control-material.has-icon {
    position: relative
}

.control-material.has-icon input {
    padding-right: 25px
}

.control-material.has-icon i {
    position: absolute;
    right: 15px;
    top: 12px;
    color: #cecece
}

.control-material.required {
    position: relative
}

.control-material.required input {
    padding-right: 25px
}

.control-material.required i {
    position: absolute;
    right: 15px;
    top: 8px;
    color: #cecece;
    display: none
}

.control-material.required small.validation-info {
    display: none;
    font-size: 0.8rem
}

.control-material.required.has-success input {
    border-bottom-color: #00b289 !important
}

.control-material.required.has-success .bar:after,
.control-material.required.has-success .bar:before {
    background: #00b289 !important
}

.control-material.required.has-success .success i {
    color: #00b289 !important;
    display: block
}

.control-material.required.has-success label {
    color: #00b289 !important
}

.control-material.required.has-success small.validation-info.success {
    color: #00b289;
    display: block
}

.control-material.required.has-error input {
    border-bottom-color: #FF7273 !important
}

.control-material.required.has-error .bar:after,
.control-material.required.has-error .bar:before {
    background: #FF7273 !important
}

.control-material.required.has-error .error i {
    color: #FF7273 !important;
    display: block
}

.control-material.required.has-error label {
    color: #FF7273 !important
}

.control-material.required.has-error small.validation-info.error {
    color: #FF7273;
    display: block
}

.select:after {
    border: 1px solid var(--app-default-color);
    border-right: 0;
    border-top: 0
}

.select:hover:after {
    border: 1px solid #21b1e5;
    border-right: 0;
    border-top: 0
}

.select select:active,
.select select:focus {
    border-color: var(--app-default-color)
}

.control.has-icons-left .select select {
    padding-left: 2.5rem
}

.control.has-icons-left .select+.icon {
    top: 0.6rem;
    font-size: 1.2rem
}

.control.has-icons-left .select.is-small+.icon {
    top: 0.4rem;
    font-size: 1rem
}

.control.has-icons-left .select.is-medium+.icon {
    top: 0.9rem;
    font-size: 1.5rem
}

.control.has-icons-left .select.is-medium select {
    padding-left: 3rem
}

.control.has-icons-left .select.is-large+.icon {
    top: 1.2rem;
    font-size: 1.6rem
}

.control.has-icons-left .select.is-large select {
    padding-left: 3.3rem
}

.autocpl {
    box-shadow: none !important
}

.autocpl .easy-autocomplete-container ul {
    padding: 10px !important
}

.autocpl .easy-autocomplete-container ul li {
    margin: 0 10px
}

.template-wrapper {
    display: flex !important;
    justify-content: flex-start;
    align-items: center
}

.template-wrapper .autocpl-avatar {
    width: 36px !important;
    height: 36px !important;
    border-radius: 100px !important
}

.template-wrapper .entry-text {
    margin-left: 15px
}

.template-wrapper .entry-text span {
    font-size: 0.8rem;
    color: #A9ABAC
}

.datepicker-panel>ul>li.picked,
.datepicker-panel>ul>li.picked:hover {
    background-color: var(--app-default-color) !important
}

.file-input-wrapper .control {
    display: flex;
    justify-content: center;
    position: relative
}

.file-input-wrapper .control .inputfile {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1
}

.file-input-wrapper .control .inputfile+label {
    max-width: 80%;
    font-size: 1.05rem;
    font-weight: 400;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    display: inline-block;
    overflow: hidden;
    border-radius: 5px;
    padding: 0.625rem 1.45rem 0.8rem 1.25rem;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    -ms-transition: all 0.4s;
    transition: all 0.4s
}

.file-input-wrapper .control .inputfile+label i {
    position: relative;
    top: 4px;
    margin-right: 10px
}

.file-input-wrapper .control .simple-file-input+label {
    color: #fff;
    background-color: var(--app-default-color)
}

.file-input-wrapper .control .simple-file-input:focus+label,
.file-input-wrapper .control .simple-file-input.has-focus+label,
.file-input-wrapper .control .simple-file-input+label:hover {
    background-color: #8c1aff;
    outline: none;
    -moz-box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px;
    -webkit-box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px;
    box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px
}

.field-input-wrapper {
    box-sizing: border-box
}

.field-input-wrapper .field-input {
    display: flex;
    align-items: center;
    background: #fcfcfc;
    border: 1px solid #ededed;
    padding: 16px;
    width: 450px;
    position: relative;
    border-radius: 3px
}

.field-input-wrapper .field-input>[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10;
    cursor: pointer
}

.field-input-wrapper .field-input>.button {
    display: inline-block;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 2px;
    margin-right: 8px;
    line-height: 1
}

.field-input-wrapper .field-input>.label {
    color: #444F60;
    font-weight: 400;
    white-space: nowrap;
    opacity: .3
}

.field-input-wrapper .field-input.-chosen>.label {
    opacity: 1
}

.label--checkbox {
    position: relative;
    margin: .5rem;
    font-family: Arial, sans-serif;
    line-height: 135% !important;
    cursor: pointer;
    transform: scale(0.7)
}

.label--checkbox span {
    position: relative;
    top: -7px;
    font-size: 14px;
    color: #444F60
}

.md-checkbox {
    position: relative;
    top: -0.375rem;
    margin: 0 1rem 0 0;
    cursor: pointer;
    transform: scale(1.8)
}

.md-checkbox:before {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    content: "";
    position: absolute;
    left: 0;
    z-index: 1;
    width: 0.9rem;
    height: 0.9rem;
    border: 1.5px solid #ccc
}

.md-checkbox:checked:before {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    height: .5rem;
    border-color: var(--app-default-color);
    border-top-style: none;
    border-right-style: none
}

.md-checkbox:after {
    content: "";
    position: absolute;
    top: -0.125rem;
    left: 0;
    width: 1rem;
    height: 1rem;
    background: #fff;
    cursor: pointer
}

@-webkit-keyframes slideUp {
    0% {
        -webkit-transform: translateY(6.25rem);
        transform: translateY(6.25rem)
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@-moz-keyframes slideUp {
    0% {
        -moz-transform: translateY(6.25rem);
        transform: translateY(6.25rem)
    }
    100% {
        -moz-transform: translateY(0);
        transform: translateY(0)
    }
}

@keyframes slideUp {
    0% {
        -webkit-transform: translateY(6.25rem);
        transform: translateY(6.25rem)
    }
    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0)
    }
}

@media (min-width: 769px) {
    input.md-checkbox:focus {
        border-bottom-color: transparent !important;
        -webkit-box-shadow: none !important;
        box-shadow: none !important;
        outline: none !important;
        outline-offset: 0 !important;
        background: #fff !important
    }
}

.checkbox-wrap,
.radio-wrap {
    position: relative;
    cursor: pointer;
    padding: 1em
}

.checkbox-wrap::selection,
.radio-wrap::selection {
    background: transparent
}

.checkbox-wrap input.d-checkbox+span,
.radio-wrap input.d-checkbox+span,
.checkbox-wrap input.b-radio+span,
.radio-wrap input.b-radio+span {
    background: #fff;
    content: "";
    display: inline-block;
    margin: 0 .5em 0 0;
    padding: 0;
    border: 1px solid #34495e;
    vertical-align: middle;
    width: 2em;
    height: 2em
}

.checkbox-wrap input.d-checkbox+span::after,
.radio-wrap input.d-checkbox+span::after,
.checkbox-wrap input.b-radio+span::after,
.radio-wrap input.b-radio+span::after {
    content: "";
    display: block;
    transform: scale(0);
    transition: transform .2s
}

.checkbox-wrap input.d-checkbox:checked+span::after,
.radio-wrap input.d-checkbox:checked+span::after,
.checkbox-wrap input.b-radio:checked+span::after,
.radio-wrap input.b-radio:checked+span::after {
    transform: scale(1)
}

.checkbox-wrap input.d-checkbox,
.radio-wrap input.d-checkbox,
.checkbox-wrap input.b-radio,
.radio-wrap input.b-radio {
    position: absolute;
    cursor: pointer;
    opacity: 0
}

.checkbox-wrap input+span {
    border-radius: 2px
}

.checkbox-wrap input+span::after {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTMuNzA3LDMyLjI5MyAxMi4yOTMsMzMuODU0IDI0LjI5Myw0NiAyNS43MDcsNDYgNDkuNzA3LDIxLjg1NCA0OC4yOTMsMjAuMzY2IDI1LDQzLjYyMyAiLz48L2c+PC9zdmc+) no-repeat center;
    background-size: contain;
    width: 1.9em;
    height: 1.9em
}

.checkbox-wrap.is-medium input+span {
    width: 1.4em;
    height: 1.4em
}

.checkbox-wrap.is-medium input+span::after {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTMuNzA3LDMyLjI5MyAxMi4yOTMsMzMuODU0IDI0LjI5Myw0NiAyNS43MDcsNDYgNDkuNzA3LDIxLjg1NCA0OC4yOTMsMjAuMzY2IDI1LDQzLjYyMyAiLz48L2c+PC9zdmc+) no-repeat center;
    background-size: contain;
    width: 1.3em;
    height: 1.3em
}

.checkbox-wrap.is-small input+span {
    width: 1em;
    height: 1em
}

.checkbox-wrap.is-small input+span::after {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTMuNzA3LDMyLjI5MyAxMi4yOTMsMzMuODU0IDI0LjI5Myw0NiAyNS43MDcsNDYgNDkuNzA3LDIxLjg1NCA0OC4yOTMsMjAuMzY2IDI1LDQzLjYyMyAiLz48L2c+PC9zdmc+) no-repeat center;
    background-size: contain;
    width: 0.9em;
    height: 0.9em
}

.radio-wrap input+span {
    border-radius: 1000px
}

.radio-wrap input+span::after {
    border-radius: 1000px;
    margin: .55em;
    width: .75em;
    height: .75em
}

.radio-wrap input:checked+span::after {
    background: #444F60
}

.radio-wrap.is-small span {
    transform: scale(0.6) !important
}

.radio-wrap.is-small span::after {
    margin: .54em !important
}

.radio-wrap.is-medium span {
    transform: scale(0.8) !important
}

.radio-wrap.is-medium span::after {
    margin: .58em !important
}

.radio-wrap.is-primary input:checked+span::after {
    background: var(--app-default-color)
}

.radio-wrap.is-secondary input:checked+span::after {
    background: var(--app-default-color)
}

.radio-wrap.is-accent input:checked+span::after {
    background: var(--app-default-color)
}


/*! _tables.scss | Bulkit | CSS Ninja */

.table.device-table th,
.table.device-table td {
    text-align: center !important;
    border: none
}

.table.device-table th i {
    font-size: 35px;
    color: #cecece
}

.table.device-table td {
    padding: .75em 1em
}

.table.device-table td:first-child {
    text-align: left !important
}

.table.device-table td.feature-name {
    line-height: 1.9;
    
}

.table.device-table td i.im-icon-Yes {
    font-size: 24px;
    color: var(--app-default-color)
}

.table.device-table td i.im-icon-Close {
    font-size: 24px;
    color: #cecece
}

.table.device-table th {
    border-bottom: 1px solid #dbdbdb
}

.table.compare-table th,
.table.compare-table td {
    text-align: center !important;
    border: none
}

.table.compare-table th i {
    font-size: 35px;
    color: #cecece
}

.table.compare-table td {
    padding: .75em 1em
}

.table.compare-table td:first-child {
    text-align: left !important
}

.table.compare-table td.feature-name {
    line-height: 1.9;
    
}

.table.compare-table td i.fa-check {
    font-size: 24px;
    color: var(--app-default-color)
}

.table.compare-table td i.fa-close {
    font-size: 24px;
    color: #cecece
}

.table.compare-table th {
    border-bottom: 1px solid #dbdbdb;
    
}

.responsive-table {
    margin: auto;
    min-width: 300px;
    max-width: 100%;
    border-collapse: collapse;
    color: #333;
    border-radius: .2em;
    overflow: hidden;
    box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06)
}

.responsive-table.is-primary tr:first-child {
    background: var(--app-default-color)
}

.responsive-table.is-secondary tr:first-child {
    background: var(--app-default-color)
}

.responsive-table.is-accent tr:first-child {
    background: var(--app-default-color)
}

.responsive-table tr:first-child {
    border-top: none;
    background: #34495e;
    color: #fff !important
}

.responsive-table tr {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    background-color: #fff;
    border-color: #bfbfbf
}

.responsive-table:nth-child(odd):not(:first-child) {
    background-color: #fcfcfc
}

.responsive-table th {
    display: none;
    color: #fff
}

.responsive-table td {
    display: block
}

.responsive-table td:first-child {
    margin-top: .5em
}

.responsive-table td:last-child {
    margin-bottom: .5em
}

.responsive-table td:before {
    content: attr(data-th) ": ";
    font-weight: bold;
    width: 120px;
    display: inline-block;
    color: #000
}

.responsive-table th,
.responsive-table td {
    text-align: left;
    padding: .5em 1em
}

@media screen and (max-width: 601px) {
    .responsive-table tr:nth-child(2) {
        border-top: none
    }
}

@media screen and (min-width: 600px) {
    .responsive-table tr:hover:not(: first-child) {
        background-color: #f2f2f2
    }
    .responsive-table td:before {
        display: none
    }
    .responsive-table th,
    .responsive-table td {
        display: table-cell;
        padding: .25em .5em
    }
    .responsive-table th:first-child,
    .responsive-table td:first-child {
        padding-left: 0
    }
    .responsive-table th:last-child,
    .responsive-table td:last-child {
        padding-right: 0
    }
    .responsive-table th,
    .responsive-table td {
        padding: 1em !important
    }
}


/*! _lists.scss | Bulkit | CSS Ninja */

.content ul {
    list-style-type: disc
}

.content ol {
    list-style-type: decimal
}

ul,
ol {
    list-style-type: none
}

.icon-bullet-list {
    list-style: none;
    padding: 0
}

.icon-bullet-list li {
    padding-left: 1.3em;
    padding: 3px 0 3px 1.3em
}

.icon-bullet-list li:before {
    content: "\\f10c";
    font-family: FontAwesome;
    display: inline-block;
    margin-left: -1.3em;
    margin-right: 0.7rem;
    width: 1.3em
}

.solid-list {
    display: inline-block
}

.solid-list .solid-list-item {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
    margin: 5px 0
}

.solid-list .solid-list-item .list-bullet i {
    font-size: 1.5rem;
    margin-right: 15px;
    position: relative;
    top: 2px;
    color: #A9ABAC
}

.inline-list {
    display: flex !important;
    flex-wrap: wrap
}

.inline-list i.inline-bullet {
    font-size: 0.4rem;
    margin: 0 10px;
    color: #ededed;
    position: relative;
    top: 8px
}

.list-block {
    border: 1px solid #ededed;
    box-shadow: -1px 3px 10px 0 rgba(0, 0, 0, 0.06)
}

.list-block li {
    padding: 10px 20px
}

.list-block li a {
    color: #444
}

.list-block li.is-active {
    background: var(--app-default-color)
}

.list-block li.is-active:hover {
    background: var(--app-default-color)
}

.list-block li.is-active .b-badge {
    border: 1px solid #fff;
    background: transparent
}

.list-block li.is-active a {
    color: #fff
}

.list-block li:hover {
    background: #EFF4F7
}

.list-block.bordered li:not(last-child) {
    border-bottom: 1px solid #ededed
}

.list-block.minimal {
    border: none;
    box-shadow: none
}

.list-block.minimal li {
    border-bottom: 1px solid #ededed
}

.list-block .b-badge {
    float: right
}

.list-block.is-secondary li.is-active {
    background: var(--app-default-color)
}

.list-block.is-accent li.is-active {
    background: var(--app-default-color)
}

.level.nav-level {
    padding: 20px 40px;
    border: 1px solid #ededed;
    background: #fff
}

.level.nav-level i {
    cursor: pointer
}

.level.nav-level i:hover {
    color: var(--app-default-color)
}

.level.centered-level {
    padding: 20px 40px;
    border: 1px solid #ededed;
    background: #fff
}

.user-list li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px 15px
}

.user-list .user-list-avatar img {
    width: 40px;
    height: 40px;
    border-radius: 100px
}

.user-list .user-list-info {
    margin: 0 10px
}

.user-list .user-list-info .name {
    font-size: 14px;
    font-weight: 500;
    color: #444F60
}

.user-list .user-list-info .position {
    font-size: 12px;
    color: #A9ABAC
}

.user-list .user-list-status {
    height: 10px;
    width: 10px;
    border-radius: 100px;
    background: #A9ABAC;
    margin-left: auto
}

.user-list .user-list-status.is-offline {
    background: #ededed
}

.user-list .user-list-status.is-online {
    background: #00b289
}

.user-list .user-list-status.is-busy {
    background: #eda514
}

.user-media-list li {
    margin: 15px 0
}

.user-media-list .media-left .image {
    position: relative
}

.user-media-list .media-left .image .avatar-status {
    height: 10px;
    width: 10px;
    border-radius: 200px;
    background: #A9ABAC;
    position: absolute;
    right: 1px;
    top: 3px
}

.user-media-list .media-left .image .avatar-status.is-offline {
    background: #ededed
}

.user-media-list .media-left .image .avatar-status.is-online {
    background: #00b289
}

.user-media-list .media-left .image .avatar-status.is-busy {
    background: #eda514
}

.user-media-list .media-content span {
    color: #444F60;
    font-weight: 500
}


/*! _labels.scss | Bulkit | CSS Ninja */

.b-badge {
    height: 20px;
    min-width: 20px;
    max-width: 100px;
    padding: 3px 6px;
    line-height: 1.2;
    white-space: nowrap;
    vertical-align: middle;
    font-size: 0.8rem;
    color: #fff;
    background: #34495e;
    text-align: center;
    border-radius: 3px
}

.b-badge.rounded {
    border-radius: 200px
}

.b-badge.badge-outlined {
    background: transparent;
    border: 1px solid #34495e;
    color: #34495e
}

.b-badge.is-primary {
    background: var(--app-default-color)
}

.b-badge.is-primary.badge-outlined {
    background: transparent;
    border: 1px solid var(--app-default-color);
    color: var(--app-default-color)
}

.b-badge.is-secondary {
    background: var(--app-default-color)
}

.b-badge.is-secondary.badge-outlined {
    background: transparent;
    border: 1px solid var(--app-default-color);
    color: var(--app-default-color)
}

.b-badge.is-accent {
    background: var(--app-default-color)
}

.b-badge.is-accent.badge-outlined {
    background: transparent;
    border: 1px solid var(--app-default-color);
    color: var(--app-default-color)
}

.b-badge.is-success {
    background: #00b289
}

.b-badge.is-success.badge-outlined {
    background: transparent;
    border: 1px solid #00b289;
    color: #00b289
}

.b-badge.is-warning {
    background: #eda514
}

.b-badge.is-warning.badge-outlined {
    background: transparent;
    border: 1px solid #eda514;
    color: #eda514
}

.b-badge.is-danger {
    background: #FF7273
}

.b-badge.is-danger.badge-outlined {
    background: transparent;
    border: 1px solid #FF7273;
    color: #FF7273
}

.b-badge.is-info {
    background: #039BE5
}

.b-badge.is-info.badge-outlined {
    background: transparent;
    border: 1px solid #039BE5;
    color: #039BE5
}

.tag {
    margin-bottom: 5px
}

.tag.squared {
    border-radius: 2px !important
}

.tag.is-outlined {
    border: 1px solid #34495e
}

.tag.is-primary {
    background: var(--app-default-color);
    color: #fff
}

.tag.is-primary.is-outlined {
    background: transparent;
    border: 1px solid var(--app-default-color);
    color: var(--app-default-color)
}

.tag.is-secondary {
    background: var(--app-default-color);
    color: #fff
}

.tag.is-secondary.is-outlined {
    background: transparent;
    border: 1px solid var(--app-default-color);
    color: var(--app-default-color)
}

.tag.is-accent {
    background: var(--app-default-color);
    color: #fff
}

.tag.is-accent.is-outlined {
    background: transparent;
    border: 1px solid var(--app-default-color);
    color: var(--app-default-color)
}

.tag.is-success {
    background: #00b289;
    color: #fff
}

.tag.is-success.is-outlined {
    background: transparent;
    border: 1px solid #00b289;
    color: #00b289
}

.tag.is-warning {
    background: #eda514;
    color: #fff
}

.tag.is-warning.is-outlined {
    background: transparent;
    border: 1px solid #eda514;
    color: #eda514
}

.tag.is-danger {
    background: #FF7273;
    color: #fff
}

.tag.is-danger.is-outlined {
    background: transparent;
    border: 1px solid #FF7273;
    color: #FF7273
}

.tag.is-info {
    background: #039BE5;
    color: #fff
}

.tag.is-info.is-outlined {
    background: transparent;
    border: 1px solid #039BE5;
    color: #039BE5
}

.tag.is-light {
    background: #fff;
    color: #444F60
}

.tag.is-light.is-outlined {
    background: transparent;
    border: 1px solid #fff;
    color: #fff
}

.tag span.delete {
    top: 2px
}

.tags.has-addons span:first-child {
    border-bottom-right-radius: 0 !important;
    border-top-right-radius: 0 !important;
    margin-right: 0
}

.tags.has-addons span:last-child {
    border-bottom-left-radius: 0 !important;
    border-top-left-radius: 0 !important;
    margin-left: -5px
}

.control.tag-group {
    display: flex;
    justify-content: center
}

.tag.is-delete {
    margin-left: 1px;
    padding: 0;
    position: relative;
    width: 2em;
    border-radius: 0 2px 2px 0 !important;
    margin-left: -5px
}

.tag.is-delete:before {
    height: 1px;
    width: 50%
}

.tag.is-delete:after {
    height: 50%;
    width: 1px
}

.tag.is-delete:before,
.tag.is-delete:after {
    background-color: currentColor;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    -webkit-transform-origin: center center;
    transform-origin: center center
}


/*! _dropdowns.scss | Bulkit | CSS Ninja */

.is-drop {
    position: relative;
    cursor: pointer
}

.is-drop i.sl-icon-arrow-down {
    font-size: 8px !important;
    top: 2px !important
}

.is-drop .drop-caret {
    position: relative;
    top: 5px
}

.is-drop .dropContain {
    width: 220px;
    position: absolute;
    z-index: 3;
    left: 50%;
    margin-left: -165px;
    top: -500vh
}

.is-drop .dropContain .dropOut {
    width: 220px;
    background: #fff;
    float: left;
    position: relative;
    margin-top: 15px;
    opacity: 0;
    border: 1px solid #ededed;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04);
    -moz-box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04);
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04);
    -webkit-transition: all .5s ease-out;
    -moz-transition: all .5s ease-out;
    -ms-transition: all .5s ease-out;
    -o-transition: all .5s ease-out;
    transition: all .5s ease-out
}

.is-drop .dropContain .dropOut .triangle {
    width: 0;
    height: 0;
    position: absolute;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
    top: -8px;
    left: 50%;
    margin-left: -8px
}

.is-drop .dropContain .dropOut ul li {
    text-align: left;
    float: left;
    width: 200px;
    padding: 12px 0 10px 15px;
    margin: 3px 10px;
    color: #777;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    -webkit-transition: background .2s ease-out;
    -moz-transition: background .2s ease-out;
    -ms-transition: background .2s ease-out;
    -o-transition: background .2s ease-out;
    transition: background .2s ease-out
}

.is-drop .dropContain .dropOut ul li:hover {
    background: #EFF4F7;
    cursor: pointer
}

.is-drop .dropContain .dropOut ul li i.drop-icon {
    position: relative;
    top: 4px;
    margin-right: 15px
}

.is-drop .dropContain .dropOut ul li i.drop-icon.sl {
    position: relative;
    top: 0;
    margin-right: 15px
}

.is-drop .dropContain .dropOut ul {
    float: left;
    padding: 10px 0;
    list-style: none
}

.is-drop .dropContain .dropOut ul.big-icons li {
    padding: 2px 0 10px 15px;
    color: #A9ABAC
}

.is-drop .dropContain .dropOut ul.big-icons i.im {
    font-size: 18px;
    color: #A9ABAC;
    margin-right: 10px;
    position: relative;
    top: 1px
}

.is-drop .dropContain .dropOut ul li.dropdown-divider {
    padding: 0 !important;
    border-radius: 0 !important;
    height: 5px;
    border-bottom: 1px solid #f2f2f2
}

.is-drop .dropContain .dropOut ul li.dropdown-divider:hover {
    background-color: #fff
}

.is-drop .dropContain .dropOut.is-primary ul li:hover {
    background: var(--app-default-color);
    color: #fff
}

.is-drop .dropContain .dropOut.is-secondary ul li:hover {
    background: var(--app-default-color);
    color: #fff
}

.is-drop .dropContain .dropOut.is-accent ul li:hover {
    background: var(--app-default-color);
    color: #fff
}

.is-drop:hover .dropContain {
    top: 30px !important
}

.is-drop:hover .dropContain .dropOut {
    animation: fadeInUp 0.27s ease-out;
    opacity: 1
}

.is-drop.drop-sm:hover .dropContain {
    top: 15px !important
}

.is-drop.is-centered .dropContain {
    margin-left: -110px
}

.is-drop.is-right .dropContain {
    margin-left: -55px
}

button i.sl-icon-arrow-down {
    font-size: 8px !important;
    top: 2px !important;
    padding-left: 8px !important
}

.jq-dropdown .jq-dropdown-menu li>a:hover,
.jq-dropdown .jq-dropdown .jq-dropdown-menu label:hover {
    background-color: #EFF4F7;
    color: inherit
}

.jq-dropdown.is-primary .jq-dropdown-menu li>a:hover,
.jq-dropdown.is-primary .jq-dropdown .jq-dropdown-menu label:hover {
    background-color: var(--app-default-color);
    color: #fff
}

.jq-dropdown.is-secondary .jq-dropdown-menu li>a:hover,
.jq-dropdown.is-secondary .jq-dropdown .jq-dropdown-menu label:hover {
    background-color: var(--app-default-color);
    color: #fff
}

.jq-dropdown.is-accent .jq-dropdown-menu li>a:hover,
.jq-dropdown.is-accent .jq-dropdown .jq-dropdown-menu label:hover {
    background-color: var(--app-default-color);
    color: #fff
}


/*! _messages.scss | Bulkit | CSS Ninja */

.message .message-header {
    background: #34495e
}

.message.msg-primary .message-header {
    background: var(--app-default-color)
}

.message.msg-primary .message-body {
    border: 1px solid var(--app-default-color)
}

.message.msg-secondary .message-header {
    background: var(--app-default-color)
}

.message.msg-secondary .message-body {
    border: 1px solid var(--app-default-color)
}

.message.msg-accent .message-header {
    background: var(--app-default-color)
}

.message.msg-accent .message-body {
    border: 1px solid var(--app-default-color)
}

.message.msg-info .message-header {
    background: #039BE5
}

.message.msg-info .message-body {
    border: 1px solid #039BE5
}

.message.msg-success .message-header {
    background: #00b289
}

.message.msg-success .message-body {
    border: 1px solid #00b289
}

.message.msg-warning .message-header {
    background: #eda514
}

.message.msg-warning .message-body {
    border: 1px solid #eda514
}

.message.msg-danger .message-header {
    background: #FF7273
}

.message.msg-danger .message-body {
    border: 1px solid #FF7273
}

.message.icon-msg {
    position: relative
}

.message.icon-msg .message-body {
    padding: 1em 3em 1em 1.5em
}

.message.icon-msg .message-body h4 {
    padding-bottom: 5px;
    font-size: 1.1rem;
    font-weight: 500;
    color: #444F60
}

.message.icon-msg i {
    position: absolute;
    top: -35px;
    right: -20px;
    padding: 20px;
    background: #34495e;
    border: 5px solid white;
    border-radius: 100px;
    color: #fff
}

.message.icon-msg.primary-msg i {
    background: var(--app-default-color)
}

.message.icon-msg.secondary-msg i {
    background: var(--app-default-color)
}

.message.icon-msg.accent-msg i {
    background: var(--app-default-color)
}

.message.icon-msg.info-msg i {
    background: #039BE5
}

.message.icon-msg.success-msg i {
    background: #00b289
}

.message.icon-msg.warning-msg i {
    background: #eda514
}

.message.icon-msg.danger-msg i {
    background: #FF7273
}


/*! _pricing.scss | Bulkit | CSS Ninja */

.classic-pricing .pricing-table {
    display: flex;
    align-items: stretch;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: space-between
}

.classic-pricing .pricing-table.is-comparative .pricing-plan {
    margin: 0
}

.classic-pricing .pricing-table.is-comparative .pricing-plan:not(:last-child) {
    border-right: none
}

.classic-pricing .pricing-table.is-horizontal .pricing-plan {
    display: flex;
    flex-direction: row;
    flex-basis: 100%
}

.classic-pricing .pricing-table.is-horizontal .pricing-plan .plan-header {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center
}

.classic-pricing .pricing-table.is-horizontal .pricing-plan .plan-price {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center
}

.classic-pricing .pricing-table.is-horizontal .pricing-plan .plan-items {
    width: 100%;
    background-color: #fcfcfc;
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    column-gap: 0.1rem
}

.classic-pricing .pricing-table.is-horizontal .pricing-plan .plan-footer {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto
}

.classic-pricing .pricing-table .pricing-plan {
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #fff;
    border: 0.1rem solid #ededed;
    border-radius: 3px;
    list-style-type: none;
    transition: 0.25s;
    margin: 0.5em
}

.classic-pricing .pricing-table .pricing-plan .plan-header {
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    background-color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
    padding: 0.75em;
    align-content: center;
    text-align: center
}

.classic-pricing .pricing-table .pricing-plan .plan-item {
    background: #fcfcfc;
    border-bottom: 1px solid #ededed;
    padding: 0.75em;
    align-content: center;
    text-align: center;
    font-size: 0.9em;
    color: #444F60
}

.classic-pricing .pricing-table .pricing-plan .plan-item:hover {
    background: #EFF4F7
}

.classic-pricing .pricing-table .pricing-plan .plan-price {
    background-color: #fff;
    font-size: 0.8rem;
    font-weight: normal;
    padding: 0.75em;
    align-content: center;
    text-align: center
}

.classic-pricing .pricing-table .pricing-plan .plan-price .plan-price-amount {
    font-size: 3rem;
    font-weight: bolder
}

.classic-pricing .pricing-table .pricing-plan .plan-price .plan-price-amount .plan-price-currency {
    vertical-align: super;
    font-size: 1.1rem !important;
    font-weight: normal !important;
    color: #444F60;
    margin-right: 0.25rem
}

.classic-pricing .pricing-table .pricing-plan .plan-footer {
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 0.75em;
    align-content: center;
    text-align: center;
    margin-top: auto
}

.classic-pricing .pricing-table .pricing-plan.is-primary .plan-header {
    color: var(--app-default-color)
}

.classic-pricing .pricing-table .pricing-plan.is-primary .plan-price .plan-price-amount {
    color: var(--app-default-color)
}

.classic-pricing .pricing-table .pricing-plan.is-primary .plan-price .plan-price-currency {
    color: var(--app-default-color)
}

.classic-pricing .pricing-table .pricing-plan.is-primary .plan-footer .button {
    background-color: var(--app-default-color);
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-primary .plan-footer .button:hover,
.classic-pricing .pricing-table .pricing-plan.is-primary .plan-footer .button.is-hovered {
    background-color: #44bde9;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-primary .plan-footer .button:focus,
.classic-pricing .pricing-table .pricing-plan.is-primary .plan-footer .button.is-focused {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(79, 193, 234, 0.25);
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-primary .plan-footer .button:active,
.classic-pricing .pricing-table .pricing-plan.is-primary .plan-footer .button.is-active {
    background-color: #38b9e7;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-primary .plan-footer .button[disabled] {
    background-color: var(--app-default-color);
    border-color: transparent
}

.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-header {
    color: var(--app-default-color)
}

.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-price .plan-price-amount {
    color: var(--app-default-color)
}

.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-price .plan-price-currency {
    color: var(--app-default-color)
}

.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-footer .button {
    background-color: var(--app-default-color);
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-footer .button:hover,
.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-footer .button.is-hovered {
    background-color: #7900f2;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-footer .button:focus,
.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-footer .button.is-focused {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(127, 0, 255, 0.25);
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-footer .button:active,
.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-footer .button.is-active {
    background-color: #7200e6;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-secondary .plan-footer .button[disabled] {
    background-color: var(--app-default-color);
    border-color: transparent
}

.classic-pricing .pricing-table .pricing-plan.is-accent .plan-header {
    color: var(--app-default-color)
}

.classic-pricing .pricing-table .pricing-plan.is-accent .plan-price .plan-price-amount {
    color: var(--app-default-color)
}

.classic-pricing .pricing-table .pricing-plan.is-accent .plan-price .plan-price-currency {
    color: var(--app-default-color)
}

.classic-pricing .pricing-table .pricing-plan.is-accent .plan-footer .button {
    background-color: var(--app-default-color);
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-accent .plan-footer .button:hover,
.classic-pricing .pricing-table .pricing-plan.is-accent .plan-footer .button.is-hovered {
    background-color: #7900f2;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-accent .plan-footer .button:focus,
.classic-pricing .pricing-table .pricing-plan.is-accent .plan-footer .button.is-focused {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(127, 0, 255, 0.25);
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-accent .plan-footer .button:active,
.classic-pricing .pricing-table .pricing-plan.is-accent .plan-footer .button.is-active {
    background-color: #7200e6;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-accent .plan-footer .button[disabled] {
    background-color: var(--app-default-color);
    border-color: transparent
}

.classic-pricing .pricing-table .pricing-plan.is-success .plan-header {
    color: #00b289
}

.classic-pricing .pricing-table .pricing-plan.is-success .plan-price .plan-price-amount {
    color: #00b289
}

.classic-pricing .pricing-table .pricing-plan.is-success .plan-price .plan-price-currency {
    color: #00b289
}

.classic-pricing .pricing-table .pricing-plan.is-success .plan-footer .button {
    background-color: #00b289;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-success .plan-footer .button:hover,
.classic-pricing .pricing-table .pricing-plan.is-success .plan-footer .button.is-hovered {
    background-color: #00a57f;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-success .plan-footer .button:focus,
.classic-pricing .pricing-table .pricing-plan.is-success .plan-footer .button.is-focused {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(0, 178, 137, 0.25);
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-success .plan-footer .button:active,
.classic-pricing .pricing-table .pricing-plan.is-success .plan-footer .button.is-active {
    background-color: #009975;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-success .plan-footer .button[disabled] {
    background-color: #00b289;
    border-color: transparent
}

.classic-pricing .pricing-table .pricing-plan.is-warning .plan-header {
    color: #eda514
}

.classic-pricing .pricing-table .pricing-plan.is-warning .plan-price .plan-price-amount {
    color: #eda514
}

.classic-pricing .pricing-table .pricing-plan.is-warning .plan-price .plan-price-currency {
    color: #eda514
}

.classic-pricing .pricing-table .pricing-plan.is-warning .plan-footer .button {
    background-color: #eda514;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-warning .plan-footer .button:hover,
.classic-pricing .pricing-table .pricing-plan.is-warning .plan-footer .button.is-hovered {
    background-color: #e39d11;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-warning .plan-footer .button:focus,
.classic-pricing .pricing-table .pricing-plan.is-warning .plan-footer .button.is-focused {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(237, 165, 20, 0.25);
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-warning .plan-footer .button:active,
.classic-pricing .pricing-table .pricing-plan.is-warning .plan-footer .button.is-active {
    background-color: #d79510;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-warning .plan-footer .button[disabled] {
    background-color: #eda514;
    border-color: transparent
}

.classic-pricing .pricing-table .pricing-plan.is-danger .plan-header {
    color: #FF7273
}

.classic-pricing .pricing-table .pricing-plan.is-danger .plan-price .plan-price-amount {
    color: #FF7273
}

.classic-pricing .pricing-table .pricing-plan.is-danger .plan-price .plan-price-currency {
    color: #FF7273
}

.classic-pricing .pricing-table .pricing-plan.is-danger .plan-footer .button {
    background-color: #FF7273;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-danger .plan-footer .button:hover,
.classic-pricing .pricing-table .pricing-plan.is-danger .plan-footer .button.is-hovered {
    background-color: #ff6566;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-danger .plan-footer .button:focus,
.classic-pricing .pricing-table .pricing-plan.is-danger .plan-footer .button.is-focused {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(255, 114, 115, 0.25);
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-danger .plan-footer .button:active,
.classic-pricing .pricing-table .pricing-plan.is-danger .plan-footer .button.is-active {
    background-color: #ff595a;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-danger .plan-footer .button[disabled] {
    background-color: #FF7273;
    border-color: transparent
}

.classic-pricing .pricing-table .pricing-plan.is-info .plan-header {
    color: #039BE5
}

.classic-pricing .pricing-table .pricing-plan.is-info .plan-price .plan-price-amount {
    color: #039BE5
}

.classic-pricing .pricing-table .pricing-plan.is-info .plan-price .plan-price-currency {
    color: #039BE5
}

.classic-pricing .pricing-table .pricing-plan.is-info .plan-footer .button {
    background-color: #039BE5;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-info .plan-footer .button:hover,
.classic-pricing .pricing-table .pricing-plan.is-info .plan-footer .button.is-hovered {
    background-color: #0392d8;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-info .plan-footer .button:focus,
.classic-pricing .pricing-table .pricing-plan.is-info .plan-footer .button.is-focused {
    border-color: transparent;
    box-shadow: 0 0 0.5em rgba(3, 155, 229, 0.25);
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-info .plan-footer .button:active,
.classic-pricing .pricing-table .pricing-plan.is-info .plan-footer .button.is-active {
    background-color: #038acc;
    border-color: transparent;
    color: #fff
}

.classic-pricing .pricing-table .pricing-plan.is-info .plan-footer .button[disabled] {
    background-color: #039BE5;
    border-color: transparent
}

.classic-pricing .pricing-table .pricing-plan.is-active {
    box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px;
    transform: scale(1.05)
}

@media (min-width: 768px) and (max-width: 1024px) {
    .classic-pricing .pricing-table.is-comparative {
        margin: 0.5rem
    }
    .classic-pricing .pricing-table.is-comparative.is-features {
        display: none
    }
    .classic-pricing .pricing-table.is-comparative .plan-item::before {
        content: attr("data-feature")
    }
    .classic-pricing .pricing-table.is-horizontal .pricing-plan {
        display: flex;
        flex-direction: row;
        flex-basis: 100%
    }
    .classic-pricing .pricing-table.is-horizontal .pricing-plan .plan-header {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center
    }
    .classic-pricing .pricing-table.is-horizontal .pricing-plan .plan-price {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center
    }
    .classic-pricing .pricing-table.is-horizontal .pricing-plan .plan-items {
        width: 100%;
        background-color: #fcfcfc;
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
        column-gap: 0.1rem
    }
    .classic-pricing .pricing-table.is-horizontal .pricing-plan .plan-footer {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: auto
    }
}

@media (max-width: 767px) {
    .classic-pricing .pricing-table.is-comparative .pricing-plan {
        width: 100% !important;
        margin: 0.5rem
    }
    .classic-pricing .pricing-table.is-comparative .pricing-plan.is-features {
        display: none
    }
    .classic-pricing .pricing-table.is-comparative .pricing-plan .plan-item::before {
        content: attr(data-feature);
        display: block;
        font-weight: 600;
        font-size: 0.8rem;
        color: #EFF4F7
    }
    .classic-pricing .pricing-table.is-horizontal .plan-items {
        display: none
    }
    .classic-pricing .pricing-plan.is-mobile {
        min-width: 100% !important;
        display: block !important
    }
}

.minimal-pricing {
    border: 2px solid #444F60;
    border-radius: 2px
}

.minimal-pricing.wide-box {
    max-width: 100%;
    margin: 0 10px 0 10px;
    padding: 20px 0 20px 0
}

.minimal-pricing.featured {
    border: 2px solid var(--app-default-color)
}

.minimal-pricing.featured .plan-name {
    color: var(--app-default-color)
}

.minimal-pricing.featured .price .price-number {
    color: var(--app-default-color)
}

.minimal-pricing.featured .price .price-currency {
    color: var(--app-default-color)
}

.minimal-pricing.bg-secondary {
    background-color: var(--app-default-color);
    border: 2px solid var(--app-default-color)
}

.minimal-pricing.bg-secondary .plan-name {
    color: #fff
}

.minimal-pricing.bg-secondary .price .price-number {
    color: #fff
}

.minimal-pricing.bg-secondary .price .price-currency {
    color: #fff
}

.minimal-pricing.bg-secondary .price .price-period {
    color: #fff
}

.minimal-pricing.bg-secondary .plan-features {
    color: #fff
}

.minimal-pricing .plan-name {
    color: #444F60;
    font-size: 1.3rem;
    font-weight: 500
}

.minimal-pricing .price {
    margin-bottom: 20px
}

.minimal-pricing .price .price-currency {
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 15px
}

.minimal-pricing .price .price-number {
    font-size: 6rem;
    font-weight: bold
}

.minimal-pricing .plan-features {
    margin-bottom: 30px
}

.minimal-pricing .plan-features ul li {
    padding: 5px 10px 5px 10px
}

.minimal-pricing.wide-box {
    background-image: url(https://place-hold.it/1280x720);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%
}

.plan-controls {
    padding: 10px 0
}

.plan-controls span {
    margin: 0 5px 0 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer
}

.plan-controls span.is-active {
    border: 1px solid var(--app-default-color);
    border-radius: 4px;
    color: var(--app-default-color)
}

.period-select {
    padding: 20px 0;
    max-width: 245px
}

.period-select span {
    padding: 8px 20px;
    font-size: 14px;
    cursor: pointer;
    color: #444F60;
    border: 1px solid #444F60
}

.period-select span:first-child {
    border-right: 1px solid #444F60;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px
}

.period-select span:last-child {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px
}

.period-select span.is-active {
    background: #444F60;
    color: #fff
}

.side-pricing .pricing-card {
    display: inline-block;
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    border: 1px solid #ededed;
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.87);
    background: #fff;
    transition: all 0.5s
}

.side-pricing .pricing-card .popular {
    position: absolute;
    top: 15px;
    right: 25px
}

.side-pricing .pricing-card .popular i {
    font-size: 26px;
    color: var(--app-default-color)
}

.side-pricing .pricing-card .inner {
    padding: 15px
}

.side-pricing .pricing-card .inner .plan-name {
    font-size: 0.9em;
    text-transform: uppercase;
    font-weight: 500;
    color: #34495e
}

.side-pricing .pricing-card .inner .plan-price {
    color: #444F60;
    font-weight: bolder;
    font-size: 3.8em;
    line-height: 1.15em;
    position: relative
}

.side-pricing .pricing-card .inner .plan-price small.currency {
    position: relative;
    top: 38px;
    left: -90px;
    font-size: 26px
}

.side-pricing .pricing-card .inner .plan-price small:last-child {
    font-size: 12px;
    font-weight: 400
}

.side-pricing .pricing-card .inner ul {
    list-style: none;
    padding: 0;
    max-width: 240px;
    margin: 10px auto
}

.side-pricing .pricing-card .inner ul li {
    color: #34495e;
    text-align: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(153, 153, 153, 0.3)
}

.side-pricing .pricing-card .inner ul li b {
    color: #3C4858
}

.side-pricing .pricing-card .inner a {
    margin: 10px 0
}

.side-pricing .pricing-card.transparent {
    background: transparent !important;
    box-shadow: none !important
}

.side-pricing .pricing-card.card-raised:hover {
    box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px !important
}

.fancy-pricing .fancy-pricing-card {
    padding: 20px;
    text-align: center;
    border-radius: 15px 15px 0 15px;
    transition: all 0.3s
}

.fancy-pricing .fancy-pricing-card:hover {
    transform: translateY(-20px)
}

.fancy-pricing .fancy-pricing-card:hover .plan-icon i {
    box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px
}

.fancy-pricing .fancy-pricing-card .plan-name {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    padding: 10px 0
}

.fancy-pricing .fancy-pricing-card .plan-icon {
    padding: 20px 0
}

.fancy-pricing .fancy-pricing-card .plan-icon i {
    font-size: 3rem;
    padding: 20px;
    border: 1px solid #ededed;
    color: #fff;
    border-radius: 200px;
    transition: all 0.5s
}

.fancy-pricing .fancy-pricing-card .plan-price {
    font-size: 3rem;
    padding: 30px 20px;
    color: #444F60;
    font-weight: bolder
}

.fancy-pricing .fancy-pricing-card .plan-price small:first-child {
    font-size: 1.4rem;
    position: relative;
    top: -20px
}

.fancy-pricing .fancy-pricing-card .plan-price small:last-child {
    font-size: 1rem;
    font-weight: 400
}

.fancy-pricing .fancy-pricing-card .plan-features {
    text-align: left;
    padding: 10px 0
}

.fancy-pricing .fancy-pricing-card .plan-features li {
    margin: 10px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center
}

.fancy-pricing .fancy-pricing-card .plan-features li .feature-count.unlimited {
    font-size: 1rem;
    font-weight: 500
}

.fancy-pricing .fancy-pricing-card .plan-features li .feature-count-text {
    color: #34495e
}

.fancy-pricing .fancy-pricing-card.streched {
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    padding: 20px 40px
}

.fancy-pricing .fancy-pricing-card.streched .plan-name {
    
    margin-bottom: 0;
    margin-right: 25px
}

.fancy-pricing .fancy-pricing-card.streched .plan-price {
    margin-top: 0;
    font-size: 2rem
}

.fancy-pricing .fancy-pricing-card.streched .plan-price small:first-child {
    position: static !important
}

.fancy-pricing .fancy-pricing-card.streched .large-count {
    font-size: 1.3rem;
    font-weight: 500
}

.fancy-pricing .fancy-pricing-card.primary .plan-name {
    color: var(--app-default-color)
}

.fancy-pricing .fancy-pricing-card.primary .plan-icon i {
    color: var(--app-default-color)
}

.fancy-pricing .fancy-pricing-card.primary .plan-features li .large-count {
    color: var(--app-default-color)
}

.fancy-pricing .fancy-pricing-card.secondary .plan-name {
    color: var(--app-default-color)
}

.fancy-pricing .fancy-pricing-card.secondary .plan-icon i {
    color: var(--app-default-color)
}

.fancy-pricing .fancy-pricing-card.secondary .plan-features li .large-count {
    color: var(--app-default-color)
}

.fancy-pricing .fancy-pricing-card.accent .plan-name {
    color: var(--app-default-color)
}

.fancy-pricing .fancy-pricing-card.accent .plan-icon i {
    color: var(--app-default-color)
}

.fancy-pricing .fancy-pricing-card.accent .plan-features li .large-count {
    color: var(--app-default-color)
}

.header-pricing .header-pricing-card {
    text-align: center;
    border-radius: 15px 15px 0 15px;
    transition: all 0.3s
}

.header-pricing .header-pricing-card .plan-name {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    background: #34495e;
    padding: 20px
}

.header-pricing .header-pricing-card .pricing-card-body {
    border: 1px solid #ededed;
    border-top-color: transparent
}

.header-pricing .header-pricing-card .pricing-card-body .plan-price {
    font-size: 3rem;
    padding: 40px 20px;
    color: #444F60;
    font-weight: bolder
}

.header-pricing .header-pricing-card .pricing-card-body .plan-price small:first-child {
    font-size: 1.4rem;
    position: relative;
    top: -20px
}

.header-pricing .header-pricing-card .pricing-card-body .plan-price small:last-child {
    font-size: 1rem;
    font-weight: 400
}

.header-pricing .header-pricing-card .pricing-card-body ul {
    list-style: none;
    padding: 0;
    max-width: 240px;
    margin: 10px auto
}

.header-pricing .header-pricing-card .pricing-card-body ul li {
    color: #34495e;
    text-align: center;
    padding: 12px 0;
    border-bottom: 1px solid rgba(153, 153, 153, 0.3)
}

.header-pricing .header-pricing-card .pricing-card-body ul li b {
    color: #3C4858
}

.header-pricing .header-pricing-card.primary .plan-name {
    background: var(--app-default-color)
}

.header-pricing .header-pricing-card.secondary .plan-name {
    background: var(--app-default-color)
}

.header-pricing .header-pricing-card.accent .plan-name {
    background: var(--app-default-color)
}
.header-pricing .header-pricing-card.success .plan-name {
    background: #23d160
}
.header-pricing .header-pricing-card.danger .plan-name {
    background: #ff3860
}
.header-pricing .header-pricing-card.warning .plan-name {
    background: #ffdd57
}
/*! _checkboxes.scss | Bulkit | CSS Ninja */

.b-checkbox {
    position: relative
}

.b-checkbox label {
    padding-left: 5px;
    cursor: pointer;
    font-size: 1rem;
    line-height: 1
}

.b-checkbox label::before {
    content: "";
    position: absolute;
    width: 17px;
    height: 17px;
    left: 0;
    top: 1px;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    background-color: #fff;
    transition: background .1s ease-in-out
}

.b-checkbox label::after {
    position: absolute;
    width: 16px;
    height: 16px;
    left: 3px;
    top: 3px;
    font-size: 12px;
    color: #363636
}

.b-checkbox input[type="checkbox"],
.b-checkbox input[type="radio"] {
    opacity: 0;
    z-index: 1;
    cursor: pointer
}

.b-checkbox input[type="checkbox"]:checked+label::after,
.b-checkbox input[type="radio"]:checked+label::after {
    font-family: "FontAwesome";
    content: "\\f00c"
}

.b-checkbox input[type="checkbox"]:disabled,
.b-checkbox input[type="radio"]:disabled {
    cursor: not-allowed
}

.b-checkbox input[type="checkbox"]:disabled+label,
.b-checkbox input[type="radio"]:disabled+label {
    opacity: 0.65
}

.b-checkbox input[type="checkbox"]:disabled+label::before,
.b-checkbox input[type="radio"]:disabled+label::before {
    background-color: whitesmoke;
    cursor: not-allowed
}

.b-checkbox.is-circular label::before {
    border-radius: 50%
}

.b-checkbox.is-inline {
    display: inline-block;
    font-weight: normal
}

.b-checkbox.is-inline+.is-inline {
    margin-left: 10px
}

.b-checkbox.is-primary input[type="checkbox"]:checked+label::before {
    background-color: var(--app-default-color);
    border-color: var(--app-default-color)
}

.b-checkbox.is-primary input[type="checkbox"]:checked+label::after {
    color: #fff
}

.b-checkbox.is-secondary input[type="checkbox"]:checked+label::before {
    background-color: var(--app-default-color);
    border-color: var(--app-default-color)
}

.b-checkbox.is-secondary input[type="checkbox"]:checked+label::after {
    color: #fff
}

.b-checkbox.is-accent input[type="checkbox"]:checked+label::before {
    background-color: var(--app-default-color);
    border-color: var(--app-default-color)
}

.b-checkbox.is-accent input[type="checkbox"]:checked+label::after {
    color: #fff
}

.b-checkbox.is-danger input[type="checkbox"]:checked+label::before {
    background-color: #FF7273;
    border-color: #FF7273
}

.b-checkbox.is-danger input[type="checkbox"]:checked+label::after {
    color: #fff
}

.b-checkbox.is-info input[type="checkbox"]:checked+label::before {
    background-color: #039BE5;
    border-color: #039BE5
}

.b-checkbox.is-info input[type="checkbox"]:checked+label::after {
    color: #fff
}

.b-checkbox.is-warning input[type="checkbox"]:checked+label::before {
    background-color: #eda514;
    border-color: #eda514
}

.b-checkbox.is-warning input[type="checkbox"]:checked+label::after {
    color: #fff
}

.b-checkbox.is-success input[type="checkbox"]:checked+label::before {
    background-color: #00b289;
    border-color: #00b289
}

.b-checkbox.is-success input[type="checkbox"]:checked+label::after {
    color: #fff
}

.b-checkbox.is-dark input[type="checkbox"]:checked+label::before {
    background-color: #444;
    border-color: #444
}

.b-checkbox.is-dark input[type="checkbox"]:checked+label::after {
    color: #fff
}

.b-checkbox input[type="checkbox"].styled:checked+label:after {
    font-family: "FontAwesome";
    content: "\\f00c"
}

.b-checkbox input[type="checkbox"] .styled:checked+label::before {
    color: #fff
}

.b-checkbox input[type="checkbox"] .styled:checked+label::after {
    color: #fff
}


/*! _details.scss | Bulkit | CSS Ninja */

.side-block {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: transparent;
    overflow: visible;
    z-index: 2
}

.side-block .background-wrapper {
    background-color: #344258;
    border-radius: 10px;
    overflow: visible
}

.side-block .background-wrapper .video-wrapper {
    position: relative;
    height: 0;
    max-width: 100%;
    padding-bottom: 56.25%;
    margin-bottom: 0;
    overflow: hidden;
    cursor: pointer;
    display: block
}

.side-block .background-wrapper .video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    overflow: hidden
}

.side-block .background-wrapper .video-wrapper .video-overlay {
    position: absolute;
    width: 100%;
    background-size: cover;
    filter: alpha(opacity=35);
    opacity: 0.2
}

.side-block .background-wrapper .video-wrapper .playbutton {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -63px;
    cursor: pointer
}

.side-block .background-wrapper .video-wrapper .playbutton .icon-play i {
    font-size: 6rem;
    color: var(--app-default-color);
    transition: all 0.5s
}

.side-block .background-wrapper .video-wrapper .playbutton .icon-play i:hover {
    color: var(--app-default-color)
}

.image-grid .image-title {
    font-size: 1.1rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 2rem;
    color: #444F60
}

.image-grid figure {
    position: relative;
    overflow: hidden;
    background: transparent;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.18)
}

.image-grid figure img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.8
}

.image-grid figure figcaption {
    padding: 2em;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%
}

.image-grid figure figcaption:before,
.image-grid figure figcaption:after {
    pointer-events: none
}

.image-grid figure figcaption a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0
}

.image-grid figure h2 {
    word-spacing: -0.15em;
    font-weight: 300;
    margin: 0
}

.image-grid figure h2 span {
    font-weight: 800
}

.image-grid figure p {
    margin: 0;
    letter-spacing: 1px;
    font-size: 68.5%
}

.image-grid figure p span {
    font-size: 75% !important;
    color: #fff
}

figure.round-corner {
    background: -webkit-linear-gradient(-45deg, #000 0%, #fff 100%);
    background: linear-gradient(-45deg, #000 0%, #fff 100%);
    border-radius: 5px;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04)
}

figure.round-corner img {
    margin: -10px 0 0 -10px;
    max-width: none;
    width: -webkit-calc(100% + 10px);
    width: calc(100% + 10px);
    opacity: 0.9;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(10px, 10px, 0);
    transform: translate3d(10px, 10px, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

figure.round-corner figcaption:before {
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    position: absolute;
    right: -100px;
    bottom: -100px;
    width: 300px;
    height: 300px;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 900px rgba(255, 255, 255, 0.2);
    content: '';
    opacity: 0;
    -webkit-transform: scale3d(0.5, 0.5, 1);
    transform: scale3d(0.5, 0.5, 1);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%
}

figure.round-corner p {
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0 1.5em 1.5em 0;
    width: 140px;
    text-align: right;
    opacity: 0;
    -webkit-transform: translate3d(20px, 20px, 0);
    transform: translate3d(20px, 20px, 0)
}

figure.round-corner:hover img {
    opacity: 0.6;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

figure.round-corner:hover figcaption::before {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1)
}

figure.round-corner:hover h2,
figure.round-corner:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

figure.round-corner h2 {
    text-align: left;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(5px, 5px, 0);
    transform: translate3d(5px, 5px, 0)
}

figure.cornered img {
    max-width: none;
    width: -webkit-calc(100% + 60px);
    width: calc(100% + 60px);
    opacity: 1;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-30px, 0, 0) scale(1.12);
    transform: translate3d(-30px, 0, 0) scale(1.12);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

figure.cornered h2 {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 1em 1.2em
}

figure.cornered:hover img {
    opacity: 0.5;
    -webkit-transform: translate3d(0, 0, 0) scale(1);
    transform: translate3d(0, 0, 0) scale(1)
}

figure.cornered:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

figure.cornered p {
    padding: 0 10px 0 0;
    width: 50%;
    border-right: 1px solid #fff;
    text-align: right;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(-40px, 0, 0);
    transform: translate3d(-40px, 0, 0)
}

figure.team-hover figcaption {
    top: auto;
    bottom: 0;
    padding: 1em;
    height: 3.75em;
    background: #fff;
    color: #3c4a50;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
}

figure.team-hover h2 {
    float: left;
    display: inline-block
}

figure.team-hover p.icon-links a {
    float: right !important;
    color: #3c4a50;
    font-size: 1.4em
}

figure.team-hover p.icon-links a:hover span::before {
    color: var(--app-default-color)
}

figure.team-hover p.description {
    position: absolute;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    bottom: 65px;
    padding: 1em;
    color: #fff;
    text-transform: none;
    font-size: 90%;
    opacity: 0;
    -webkit-backface-visibility: hidden;
    -webkit-transition: opacity 0.35s;
    transition: opacity 0.35s;
    -webkit-backface-visibility: hidden
}

figure.team-hover h2,
figure.team-hover p.icon-links a {
    position: static;
    width: auto;
    height: auto;
    z-index: 1000;
    text-indent: 0 !important;
    white-space: nowrap;
    opacity: inherit;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, 200%, 0);
    transform: translate3d(0, 200%, 0)
}

figure.team-hover p.icon-links a span::before {
    display: inline-block;
    font-size: 1.2rem;
    margin-top: -5px;
    padding: 8px 10px;
    font-family: 'FontAwesome';
    color: #444F60;
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
}

figure.team-hover .icon-twitter::before {
    content: '\\f099'
}

figure.team-hover .icon-linkedin::before {
    content: '\\f0e1'
}

figure.team-hover .icon-dribbble::before {
    content: '\\f17d'
}

figure.team-hover:hover p.icon-links a:hover,
figure.team-hover:hover p.icon-links a:focus {
    color: #252d31
}

figure.team-hover:hover p.description {
    opacity: 1
}

figure.team-hover:hover figcaption,
figure.team-hover:hover h2,
figure.team-hover:hover p.icon-links a {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

figure.team-hover:hover h2 {
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s
}

figure.team-hover:hover p.icon-links a:nth-child(3) {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s
}

figure.team-hover:hover p.icon-links a:nth-child(2) {
    -webkit-transition-delay: 0.15s;
    transition-delay: 0.15s
}

figure.team-hover:hover p.icon-links a:first-child {
    -webkit-transition-delay: 0.2s;
    transition-delay: 0.2s
}

figure.team-slanted {
    background: #162633;
    text-align: left
}

figure.team-slanted img {
    -webkit-transition: opacity 0.45s;
    transition: opacity 0.45s;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden
}

figure.team-slanted figcaption::before {
    position: absolute;
    top: 95%;
    left: 10%;
    width: 200%;
    height: 100%;
    opacity: 0;
    background: rgba(255, 255, 255, 0.8) no-repeat center center;
    background-size: 100% 100%;
    content: '';
    -webkit-transition: opacity 0.45s, -webkit-transform 0.45s;
    transition: opacity 0.45s, transform 0.45s;
    -webkit-transform: rotate3d(0, 0, 1, 0);
    transform: rotate3d(0, 0, 1, 0);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%
}

figure.team-slanted .member-position {
    position: static !important;
    font-size: 0.9rem;
    opacity: 0;
    transition: all 0.5s
}

figure.team-slanted h2 {
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0)
}

figure.team-slanted p {
    position: absolute;
    right: 0;
    bottom: -5px;
    padding: 0 1.5em 7% 0
}

figure.team-slanted a {
    margin: 0 10px;
    color: #5d504f;
    font-size: 170% !important;
    position: static !important;
    width: auto;
    height: auto;
    text-indent: 0 !important;
    white-space: nowrap;
    opacity: 1 !important
}

figure.team-slanted a:hover,
figure.team-slanted a:focus {
    color: var(--app-default-color)
}

figure.team-slanted p a i {
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(0, 50px, 0);
    transform: translate3d(0, 50px, 0)
}

figure.team-slanted:hover img {
    opacity: 0.6
}

figure.team-slanted:hover h2 {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

figure.team-slanted:hover figcaption::before {
    opacity: 0.9;
    transform: rotate(-15deg)
}

figure.team-slanted:hover p i {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0)
}

figure.team-slanted:hover p a:nth-child(3) i {
    -webkit-transition-delay: 0.05s;
    transition-delay: 0.05s
}

figure.team-slanted:hover p a:nth-child(2) i {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s
}

figure.team-slanted:hover p a:first-child i {
    -webkit-transition-delay: 0.15s;
    transition-delay: 0.15s
}

figure.team-slanted:hover .member-position {
    opacity: 1
}

.shadow-z-1 {
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37)
}

.shadow-z-2 {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.3), 0 2px 2px 0 rgba(0, 0, 0, 0.2)
}

.shadow-z-3 {
    box-shadow: 0 13px 25px 0 rgba(0, 0, 0, 0.3), 0 7px 7px 0 rgba(0, 0, 0, 0.19)
}

.shadow-z-4 {
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.3), 0 14px 12px 0 rgba(0, 0, 0, 0.17)
}

.shadow-z-5 {
    box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15)
}

.switcher .switcher-block {
    width: 48px;
    height: 48px;
    background-color: #34495e;
    position: fixed;
    top: 20px;
    left: 20px;
    border-radius: 4px;
    transition: all 0.5s;
    cursor: pointer;
    overflow: visible
}

.switcher .switcher-block.is-primary {
    background-color: var(--app-default-color)
}

.switcher .switcher-block.is-secondary {
    background-color: var(--app-default-color)
}

.switcher .switcher-block.is-accent {
    background-color: var(--app-default-color)
}

.switcher .switcher-block:hover {
    width: 200px
}

.switcher .switcher-block:hover .button-text {
    display: block
}

.switcher .switcher-block i {
    position: relative;
    top: 15px;
    left: 15px;
    color: #fff;
    font-size: 1.3rem
}

.switcher .switcher-block .button-text {
    position: absolute;
    top: 13px;
    left: 35%;
    color: #fff;
    display: none
}


/*! _auth.scss | Bulkit | CSS Ninja */

.top-logo {
    height: 40px
}

.intro-section .intro-text .intro-title {
    margin: 15px 0;
    font-size: 18px;
    color: var(--app-default-color)
}

.intro-section .intro-text .intro-sub {
    padding: 20px 30px;
    font-size: 14px;
    color: #A9ABAC
}

.login {
    padding: 10px 0
}

.column.login-column {
    padding: 0 !important
}

.login-wrapper {
    overflow: hidden !important;
    height: 100%;
    padding: 0;
    margin: 0
}

.login-wrapper.is-gapless:not(:last-child) {
    margin-bottom: 0 !important
}

.hero.login-hero,
.hero.signup-hero {
    background-position: center;
    background-size: auto
}

#signup-banner .hero {
    background: url("https://source.unsplash.com/DWui9DmfCXA/");
    background-position: center;
    background-size: cover;
    background-blend-mode: screen
}

.hero-banner .title {
    padding: 25px;
    padding-top: 25%
}

.hero-banner .subtitle {
    padding: 0 30px
}

.hero-banner img.login-city {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0
}

.hero-banner .button {
    position: relative;
    z-index: 2
}

.signup-hero .title {
    padding: 25px;
    padding-top: 15%
}

.signup-hero .subtitle {
    padding: 0 22%
}

.signup-hero img.mockup {
    position: absolute;
    bottom: -15%;
    left: 0;
    right: 0;
    z-index: 0
}

.signup-hero .already {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px
}

.signup-hero .already span {
    margin-right: 15px;
    color: #fff
}

.signup-hero .already a {
    min-width: 80px
}

.forgot,
.no-account,
.return {
    color: #A9ABAC !important;
    transition: opacity 0.5s
}

.forgot:hover,
.no-account:hover,
.return:hover {
    opacity: 0.8;
    color: var(--app-default-color) !important
}

.forgot.is-secondary,
.no-account.is-secondary,
.return.is-secondary {
    color: var(--app-default-color) !important
}

.forgot.is-accent,
.no-account.is-accent,
.return.is-accent {
    color: var(--app-default-color) !important
}

.forgot-password a {
    color: #95A5A6;
    font-weight: normal;
    padding-right: 20px;
    transition: all 0.6s
}

.forgot-password a:hover {
    color: var(--app-default-color)
}

.no-account-link a {
    color: #A9ABAC;
    font-weight: 500
}

.no-account-link a:hover {
    color: var(--app-default-color)
}

.icon.user,
.icon.password {
    margin: 5px 10px 0 0
}

.checkbox-wrap {
    color: #A9ABAC;
    margin-bottom: 10px
}

.checkbox-wrap span {
    position: relative;
    top: -2px
}


/*! _startup.scss | Bulkit | CSS Ninja */

.Wallop {
    top: -65px
}

.Wallop .Wallop-list {
    width: 100%;
    height: 100%
}

.Wallop .Wallop-item {
    width: 100%;
    height: 100%;
    min-height: 140vh;
    background-size: cover;
    background-repeat: no-repeat
}

.Wallop .Wallop-buttonPrevious,
.Wallop .Wallop-buttonNext {
    position: absolute;
    top: 48%;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 6
}

.Wallop .Wallop-buttonPrevious:hover i,
.Wallop .Wallop-buttonNext:hover i {
    opacity: 0.8;
    transform: scale(1.05)
}

.Wallop .Wallop-buttonPrevious i,
.Wallop .Wallop-buttonNext i {
    font-size: 3.5rem;
    color: #fff;
    transition: all .4s
}

.Wallop .Wallop-buttonPrevious:active,
.Wallop .Wallop-buttonPrevious:focus,
.Wallop .Wallop-buttonNext:active,
.Wallop .Wallop-buttonNext:focus {
    outline: none !important
}

.Wallop .Wallop-buttonPrevious {
    left: 20px
}

.Wallop .Wallop-buttonNext {
    right: 20px
}

.Wallop .Wallop-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1
}

.Wallop .Wallop-pagination {
    text-align: center;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 40px;
    z-index: 100
}

.Wallop .Wallop-dot {
    text-indent: -9999px;
    border: 0;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    padding: 0;
    margin: 5px;
    background-color: #ccc;
    cursor: pointer;
    -webkit-appearance: none
}

.Wallop .Wallop-dot:active,
.Wallop .Wallop-dot:focus {
    outline: none !important
}

.Wallop .Wallop-dot--current {
    background-color: var(--app-default-color)
}

.Wallop .Wallop-caption-wrapper {
    align-items: center;
    min-height: 100vh;
    position: relative;
    z-index: 99
}

.Wallop .Wallop-caption-wrapper .container {
    position: relative;
    min-height: 500px;
    height: 100vh;
    display: flex
}

.Wallop .Wallop-caption-wrapper .container .caption-inner h1 {
    
    font-weight: 700;
    font-size: 3.8rem;
    line-height: 3.8rem;
    color: #fff
}

.Wallop .Wallop-caption-wrapper .container .caption-inner .caption-divider {
    width: 30%;
    height: 3px;
    background: #fff;
    margin: 10px 0
}

.Wallop .Wallop-caption-wrapper .container .caption-inner .caption-text {
    color: #fff;
    font-size: 1.05rem;
    font-weight: 400
}

.Wallop .Wallop-caption-wrapper .container .caption-inner .caption-text .action {
    padding: 20px 0
}

.hero-foot.is-pulled {
    margin-top: -65px
}

@media (max-width: 767px) {
    .caption-inner {
        max-width: 100% !important;
        top: 30% !important;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center
    }
    .caption-inner .caption-divider {
        height: 3px !important;
        margin: 10px auto !important
    }
    .caption-inner h1 {
        font-size: 3.2rem !important
    }
    .caption-inner .caption-text span {
        margin: 0 20px;
        display: block
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .caption-inner {
        text-align: center;
        position: relative;
        top: 40vh !important
    }
    .caption-inner .caption-divider {
        margin: 10px auto !important;
        height: 3px !important
    }
    .caption-inner .caption-text {
        padding: 0 15%
    }
    .is-tablet-padded {
        padding: 0 20% !important
    }
}

.title.main-title {
    
    margin-bottom: 0;
    padding: 20px 0
}

.section-title-wrapper .section-title {
    
    margin-bottom: 0;
    padding: 10px 0
}

.section-title-wrapper .subtitle {
    ;
    font-size: 1.2rem;
    line-height: 30px;
    font-weight: 400;
    padding: 20px 25%;
    color: #A9ABAC
}

.section-subtitle,
.title.feature-title {
     !important;
    font-weight: 500 !important;
    font-size: 2rem !important;
    margin-bottom: 0 !important;
    padding: 5px 0 !important
}

@media (max-width: 767px) {
    .section-title-wrapper .subtitle {
        font-size: 1.1rem;
        line-height: 22px;
        padding: 30px 0
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .section-title-wrapper .subtitle {
        padding: 20px 10% !important
    }
}

.parallax-title {
    
    font-weight: 600 !important;
    font-size: 2.4rem !important;
    margin-bottom: 0 !important;
    padding: 10px 0
}

.startup-icon-box {
    padding: 20px 0
}

.startup-icon-box i {
    font-size: 3.8rem;
    font-weight: normal;
    color: var(--app-default-color)
}

.startup-icon-box .box-title {
    ;
    font-size: 16px;
    line-height: 22px;
    font-weight: 700;
    color: #444F60;
    padding: 5px 0
}

.startup-icon-box .box-content {
    color: #34495e
}

.featured-svg {
    max-width: 450px
}

@media (max-width: 767px) {
    .featured-svg {
        max-width: 100% !important
    }
}

.mockup-dots .dot {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
    background-color: var(--app-default-color);
    z-index: 5
}

.mockup-dots .dot:before {
    position: absolute;
    background: var(--app-default-color);
    content: '';
    top: 0;
    left: 0;
    border: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    animation: dotPulse 2s ease-out infinite
}

.mockup-dots .dot.first {
    top: 42%;
    left: 20%
}

.mockup-dots .dot.first:hover+.dot-tip.tip-first {
    display: block
}

.mockup-dots .dot.second {
    top: 65%;
    left: 20%
}

.mockup-dots .dot.second:hover+.dot-tip.tip-second {
    display: block
}

.mockup-dots .dot.third {
    top: 55%;
    right: 20%
}

.mockup-dots .dot.third:hover+.dot-tip.tip-third {
    display: block
}

.mockup-dots .dot-tip {
    padding: 15px 20px;
    background-color: var(--app-default-color);
    color: #fff;
    border-radius: 10px 10px 0 10px;
    font-size: 13px;
    display: none;
    z-index: 4
}

.mockup-dots .dot-tip.tip-first {
    position: absolute;
    top: 38%;
    left: 0
}

.mockup-dots .dot-tip.tip-second {
    position: absolute;
    top: 60%;
    left: 0
}

.mockup-dots .dot-tip.tip-third {
    position: absolute;
    top: 50%;
    right: 24%
}

.signup-block .product-hero {
    background-position-x: center !important
}

.signup-block .control {
    position: relative;
    width: 80%
}

.signup-block .control .input {
    height: 50px;
    padding-left: 10px;
    padding-right: 140px;
    font-size: 1rem
}

.signup-block .control .input::placeholder {
    color: #cecece
}

.signup-block .control button {
    position: absolute;
    top: 4px;
    right: 5px;
    height: 42px;
    width: 120px;
    font-weight: 600
}

@media (max-width: 768px) {
    .signup-column {
        margin-top: 0 !important;
        text-align: center !important
    }
    .signup-block .control {
        width: 100%
    }
}

.feature-card.is-startup {
    padding: 20px
}

.feature-card.is-startup img {
    margin: 0
}

.integration-cards .feature-card {
    padding: 50px 20px;
    margin-bottom: 20px
}

.integration-cards .brand-logo {
    padding: 10px 0
}

.integration-cards .brand-logo img {
    max-height: 60px;
    max-width: 120px
}

.integration-cards .card-title {
    padding: 10px 0
}

.integration-cards .card-feature-description {
    padding: 0 !important
}

.integration-cards a {
    margin: 20px 0
}

.cta-text {
    
    font-size: 1.5rem;
    font-weight: 700
}

.values-cards .feature-card {
    height: 310px
}

.values-cards .card-feature-description {
    font-size: 95%
}

.values-cards .card-icon {
    padding-top: 50px
}

.values-cards .card-icon i {
    font-size: 5rem;
    color: var(--app-default-color)
}

.values-cards.is-minimal {
    padding: 0 8%
}

.values-cards.is-minimal i {
    color: #444F60;
    font-size: 4.5rem
}

.values-cards.is-minimal .feature-card:hover i {
    color: var(--app-default-color)
}

@media (max-width: 768px) {
    .values-cards.is-minimal {
        padding: 0 !important
    }
}

.contact-card {
    display: flex;
    align-content: center;
    align-items: center
}

.contact-card .icon i {
    font-size: 26px;
    color: var(--app-default-color);
    position: relative
}

.contact-card .contact-info {
    margin: 0 30px
}

.contact-card .contact-info .contact-name {
    color: #cecece
}

.contact-card .contact-info .contact-details .details-text {
    font-size: 16px;
    color: #444F60 !important
}

.modern-team.startup-team .modern-team-item {
    padding: 0 5px;
    width: 33%
}

.modern-team.startup-team .modern-team-item .item-wrapper {
    border: 1px solid #ededed;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04)
}

.modern-team.startup-team .modern-team-item .item-img:before {
    content: "";
    background-color: rgba(79, 193, 234, 0.8)
}

.modern-team.startup-team .modern-team-item img {
    border-radius: 10px
}

.modern-team.startup-team .modern-team-item:hover .item-img {
    border-radius: 10px
}

.modern-team.startup-team .modern-team-item a i {
    color: var(--app-default-color)
}

.modern-team.startup-team .modern-team-item a:hover i {
    color: #444F60
}

@media (max-width: 767px) {
    .modern-team-item {
        width: auto !important
    }
    #google-map {
        min-height: 50vh
    }
}

.parallax-counter.is-primary i {
    color: var(--app-default-color) !important
}

.pricing-plan .plan-header {
    text-transform: uppercase;
    font-weight: 400 !important;
    
    color: #34495e
}


/*! _landing.scss | Bulkit | CSS Ninja */

#landing-hero {
    background: var(--app-default-color) url(../images/bg/shapes/icon-bg.png) repeat 0 0;
    -webkit-animation: 18s linear 0s normal none infinite animate;
    -moz-animation: 18s linear 0s normal none infinite animate;
    -ms-animation: 18s linear 0s normal none infinite animate;
    -o-animation: 18s linear 0s normal none infinite animate;
    animation: 18s linear 0s normal none infinite animate
}

@-webkit-keyframes animate {
    from {
        background-position: 0 0
    }
    to {
        background-position: 0 -1450px
    }
}

@-moz-keyframes animate {
    from {
        background-position: 0 0
    }
    to {
        background-position: 0 -1450px
    }
}

@-ms-keyframes animate {
    from {
        background-position: 0 0
    }
    to {
        background-position: 0 -1450px
    }
}

@-o-keyframes animate {
    from {
        background-position: 0 0
    }
    to {
        background-position: 0 -1450px
    }
}

@keyframes animate {
    from {
        background-position: 0 0
    }
    to {
        background-position: 0 -1450px
    }
}

.hero.hero-waves:before {
    background: transparent url(../images/bg/shapes/wavy.png) no-repeat scroll 0 bottom/100% auto;
    content: "";
    height: 321px;
    width: 100%;
    z-index: 0 !important;
    position: absolute;
    bottom: -1px;
    left: 0
}

.header-caption {
    margin-top: -80px;
    padding: 0 20px;
    text-align: left
}

.header-caption .landing-title {
    
    font-size: 3.4rem;
    font-weight: 900 !important;
    margin-bottom: 0 !important;
    color: #fff
}

.header-caption .landing-title.is-big {
    font-size: 4rem
}

.header-caption .subtitle {
    margin-bottom: 0;
    padding: 10px 0
}

.header-caption.is-centered {
    text-align: center !important
}

@media (max-width: 767px) {
    .header-caption {
        text-align: center;
        padding: 40px 10px
    }
    .header-caption .landing-title {
        font-size: 2.5rem
    }
}

@media (max-width: 768px) {
    .header-caption {
        margin-top: 0 !important
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .header-caption {
        text-align: center
    }
}

.section-title-wrapper .section-title-landing {
    
    font-size: 2.6rem;
    color: #444F60;
    padding: 10px 0
}

.section-title-wrapper h4 {
    padding: 20px 40px;
    ;
    font-weight: 300;
    font-size: 1.2rem;
    color: #34495e
}

.half-mockup {
    position: absolute;
    bottom: 0;
    max-height: 550px
}

.phone-slide {
    background-position: center left;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 50% 50%;
    vertical-align: top;
    padding: 800px 30px 30px 30px
}

.phone-slide.is-first {
    background-image: url(../images/illustrations/mockups/startup/phone-slide-1.png)
}

.phone-slide.is-second {
    background-image: url(../images/illustrations/mockups/startup/phone-slide-2.png)
}

.phone-slide.is-third {
    background-image: url(../images/illustrations/mockups/startup/phone-slide-3.png)
}

.phone-slide.is-fourth {
    background-image: url(../images/illustrations/mockups/startup/phone-slide-4.png)
}

.featured-svg-lg {
    max-width: 550px;
    max-height: 550px
}

.wavy-icon-box i {
    font-size: 3.8rem;
    font-weight: normal;
    color: var(--app-default-color)
}

.wavy-icon-box .box-title {
    ;
    padding: 5px 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    color: var(--app-default-color)
}

.wavy-icon-box .box-content {
    color: #34495e
}

.square-icon-box.is-landing .box-title {
    ;
    font-size: 1.2rem;
    font-weight: 700;
    color: #444F60
}

.square-icon-box.is-landing .box-text {
    font-size: 14px
}

.quick-feature.is-handwritten {
    font-size: 2.1rem !important;
    
    font-weight: 400 !important;
    margin-bottom: 0.8rem !important
}

.quick-feature.is-handwritten .bg-number {
    padding-right: 10px !important;
    font-family: 'Roboto' !important
}

.event-card.is-wavy h2.text-title {
    
    text-transform: none;
    font-size: 1.35em
}

.event-card.is-wavy p.text-subtitle {
    ;
    font-size: 0.9rem
}

.testimonials.is-wavy .testimonial-name h3 {
    
}

@media (max-width: 768px) {
    .testimonial-item {
        margin: 40px 15px !important
    }
    .testimonial-item .testimonial-content p {
        padding: 20px !important
    }
}

.bottom-spacer {
    margin-bottom: 80px;
    min-height: 100px
}

.small-feature {
    padding: 5px 0;
    
    font-size: 1.3rem
}

#features-video {
    margin-top: -35%
}

#header-pricing {
    margin-top: -20%
}

@media (max-width: 768px) {
    #features-video {
        margin-top: 0 !important
    }
}

.pricing-picker span {
    color: #fff;
    ;
    margin: 0 5px 0 5px;
    padding: 10px 20px 13px 20px;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer
}

.pricing-picker span.is-active {
    border: 1px solid #fff
}

.header-pricing.is-wavy .flex-card {
    border: none !important
}

.header-pricing.is-wavy .flex-card .plan-name {
    
    text-transform: none;
    font-size: 1.4rem
}

.giant-input-wrapper.is-wavy {
    padding: 30px 40px;
    background: #efefef
}

.giant-input-wrapper.is-wavy .giant-input {
    position: relative;
    min-width: 300px;
    max-width: 100%
}

.giant-input-wrapper.is-wavy .giant-input input {
    padding: 20px 165px 20px 20px;
    width: 100%;
    background: #fff;
    color: #34495e;
    border: none;
    height: 60px;
    line-height: 60px;
    transition: all 0.5s;
    border: 1px solid rgba(213, 220, 247, 0.59);
    border-radius: 100px
}

.giant-input-wrapper.is-wavy .giant-input input:focus {
    outline: none !important;
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18) !important
}

.giant-input-wrapper.is-wavy .giant-input button.inner {
    position: absolute;
    right: 7px;
    top: 7px
}

.section.footer-waves:after {
    background: transparent url(../images/bg/shapes/wavy-dark.png) no-repeat scroll 0 bottom/100% auto;
    content: "";
    height: 321px;
    width: 100%;
    z-index: 0 !important;
    position: absolute;
    bottom: -1px;
    left: 0
}

.hero.hero-waves-dark:before {
    background: transparent url(../images/bg/shapes/wavy-dark.png) no-repeat scroll 0 bottom/100% auto;
    content: "";
    height: 321px;
    width: 100%;
    z-index: 0 !important;
    position: absolute;
    bottom: -1px;
    left: 0
}

.wavy-login-card,
.wavy-signup-card {
    padding: 40px;
    border-radius: 6px;
    max-width: 400px;
    margin: auto;
    background-color: white;
    border: 1px solid #ecf0f1;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05)
}

.wavy-login-card h2,
.wavy-signup-card h2 {
    font-size: 22px;
    margin-bottom: 40px;
    font-weight: 700 !important;
    
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    #landing-hero figure img {
        left: 25%;
        top: 20%
    }
    p.is-tablet-padded {
        padding: 0 10%
    }
    .column.slide-description {
        padding: 40px 0 !important
    }
    .event-card.is-wavy .text-title {
        font-size: 1.5rem !important
    }
}


/*! _helpers.scss | Bulkit | CSS Ninja */

.color-primary {
    color: var(--app-default-color) !important
}

.color-secondary {
    color: var(--app-default-color) !important
}

.color-accent {
    color: var(--app-default-color) !important
}

.color-red {
    color: #FF7273 !important
}

.border-light {
    border-color: #fff !important
}

.dark-text {
    color: #444F60 !important
}

.light-text {
    color: #fff !important
}

.primary-text {
    color: var(--app-default-color) !important
}

.secondary-text {
    color: var(--app-default-color) !important
}

.accent-text {
    color: var(--app-default-color) !important
}

.info-text {
    color: #039BE5 !important
}

.success-text {
    color: #00b289 !important
}

.warning-text {
    color: #eda514 !important
}

.danger-text {
    color: #FF7273 !important
}

.dark-bg {
    background: #444 !important
}

.light-bg {
    background: #fff !important
}

.font-w-400 {
    font-weight: 400 !important
}

.font-w-500 {
    font-weight: 500 !important
}

.font-w-600 {
    font-weight: 600 !important
}

.text-decoration-none {
    text-decoration: none !important
}

.text-upper {
    text-transform: uppercase !important
}

.text-bold {
    font-weight: 600 !important
}

.text-bolder {
    font-weight: 700 !important
}

.font-size-normal {
    font-size: 1rem
}

.font-size-2x {
    font-size: 2rem
}

.is-size-1 {
    font-size: 3rem
}

.is-size-2 {
    font-size: 2.5rem
}

.is-size-3 {
    font-size: 2rem
}

.is-size-4 {
    font-size: 1.5rem
}

.is-size-5 {
    font-size: 1.25rem
}

.is-size-6 {
    font-size: 1rem
}

.is-size-7 {
    font-size: 0.75rem
}

.is-flex {
    display: flex
}

.is-flex.is-start {
    justify-content: flex-start
}

.is-flex.is-center {
    justify-content: center
}

.is-flex.is-end {
    justify-content: flex-end
}

.is-flex.is-vcenter {
    align-items: center;
    align-content: center
}

.is-block {
    display: block !important
}

.z-index-2 {
    z-index: 2 !important
}

.z-index-101 {
    z-index: 101 !important
}

.no-padding {
    padding: 0 !important
}

.no-padding-top {
    padding-top: 0 !important
}

.no-padding-bottom {
    padding-bottom: 0 !important
}

.no-padding-right {
    padding-right: 0 !important
}

.no-padding-left {
    padding-left: 0 !important
}

.padding-10 {
    padding: 10px
}

.padding-15 {
    padding: 15px
}

.padding-20 {
    padding: 20px
}

.padding-25 {
    padding: 25px
}

.padding-30 {
    padding: 30px
}

.padding-40 {
    padding: 40px
}

.padding-50 {
    padding: 50px
}

.padding-60 {
    padding: 60px
}

.padding-70 {
    padding: 70px
}

.padding-80 {
    padding: 80px
}

.padding-90 {
    padding: 90px
}

.padding-100 {
    padding: 100px
}

.pt-5 {
    padding-top: 5px
}

.pt-10 {
    padding-top: 10px
}

.pt-20 {
    padding-top: 20px
}

.pt-30 {
    padding-top: 30px
}

.pt-40 {
    padding-top: 40px
}

.pt-50 {
    padding-top: 50px
}

.pt-60 {
    padding-top: 60px
}

.pt-70 {
    padding-top: 70px
}

.pt-80 {
    padding-top: 80px
}

.pb-5 {
    padding-bottom: 5px
}

.pb-10 {
    padding-bottom: 10px
}

.pb-20 {
    padding-bottom: 20px
}

.pb-30 {
    padding-bottom: 30px
}

.pb-40 {
    padding-bottom: 40px
}

.pb-50 {
    padding-bottom: 50px
}

.pb-60 {
    padding-bottom: 60px
}

.pb-70 {
    padding-bottom: 70px
}

.pb-80 {
    padding-bottom: 80px
}

.pl-5 {
    padding-left: 5px
}

.pl-10 {
    padding-left: 10px
}

.pl-20 {
    padding-left: 20px
}

.pl-30 {
    padding-left: 30px
}

.pl-40 {
    padding-left: 40px
}

.pl-50 {
    padding-left: 50px
}

.pl-60 {
    padding-left: 60px
}

.pl-70 {
    padding-left: 70px
}

.pl-80 {
    padding-left: 80px
}

.pr-5 {
    padding-right: 5px
}

.pr-10 {
    padding-right: 10px
}

.pr-20 {
    padding-right: 20px
}

.pr-30 {
    padding-right: 30px
}

.pr-40 {
    padding-right: 40px
}

.pr-50 {
    padding-right: 50px
}

.pr-60 {
    padding-right: 60px
}

.pr-70 {
    padding-right: 70px
}

.pr-80 {
    padding-right: 80px
}

.huge-pt {
    padding-top: 100px
}

.huge-pb {
    padding-bottom: 100px
}

.giant-pb {
    padding-bottom: 150px
}

.no-margin {
    margin: 0 !important
}

.no-margin-left {
    margin-left: 0 !important
}

.no-margin-right {
    margin-right: 0 !important
}

.no-margin-top {
    margin-top: 0 !important
}

.no-margin-bottom {
    margin-bottom: 0 !important
}

.margin-x-auto {
    margin: 0 auto !important
}

.mr-auto {
    margin-right: auto !important
}

.ml-auto {
    margin-left: auto !important
}

.margin-10 {
    margin: 10px
}

.margin-20 {
    margin: 20px
}

.margin-25 {
    margin: 25px
}

.margin-30 {
    margin: 30px
}

.margin-40 {
    margin: 40px
}

.margin-50 {
    margin: 50px
}

.margin-60 {
    margin: 60px
}

.margin-70 {
    margin: 70px
}

.margin-80 {
    margin: 80px
}

.margin-90 {
    margin: 90px
}

.margin-100 {
    margin: 100px
}

.mt-5 {
    margin-top: 5px
}

.mt-10 {
    margin-top: 10px
}

.mt-20 {
    margin-top: 20px
}

.mt-30 {
    margin-top: 30px
}

.mt-40 {
    margin-top: 40px
}

.mt-50 {
    margin-top: 50px
}

.mt-60 {
    margin-top: 60px
}

.mt-70 {
    margin-top: 70px
}

.mt-80 {
    margin-top: 80px
}

.mt-120 {
    margin-top: 120px
}

.mb-5 {
    margin-bottom: 5px
}

.mb-10 {
    margin-bottom: 10px
}

.mb-20 {
    margin-bottom: 20px
}

.mb-30 {
    margin-bottom: 30px
}

.mb-40 {
    margin-bottom: 40px
}

.mb-50 {
    margin-bottom: 50px
}

.mb-60 {
    margin-bottom: 60px
}

.mb-70 {
    margin-bottom: 70px
}

.mb-80 {
    margin-bottom: 80px
}

.ml-5 {
    margin-left: 5px
}

.ml-10 {
    margin-left: 10px
}

.ml-20 {
    margin-left: 20px
}

.ml-30 {
    margin-left: 30px
}

.ml-40 {
    margin-left: 40px
}

.ml-50 {
    margin-left: 50px
}

.ml-60 {
    margin-left: 60px
}

.ml-70 {
    margin-left: 70px
}

.ml-80 {
    margin-left: 80px
}

.mr-5 {
    margin-right: 5px
}

.mr-10 {
    margin-right: 10px
}

.mr-20 {
    margin-right: 20px
}

.mr-30 {
    margin-right: 30px
}

.mr-40 {
    margin-right: 40px
}

.mr-50 {
    margin-right: 50px
}

.mr-60 {
    margin-right: 60px
}

.mr-70 {
    margin-right: 70px
}

.mr-80 {
    margin-right: 80px
}

.width-40 {
    width: 40px !important
}

.width-100 {
    width: 100px !important
}

.width-250 {
    width: 250px !important
}

.height-30 {
    height: 30px !important
}

.height-60 {
    height: 60px !important
}

.height-60 {
    height: 60px !important
}

.height-70 {
    height: 60px !important
}

.height-80 {
    height: 60px !important
}

.height-90 {
    height: 60px !important
}

.pull-right {
    float: right
}

.pull-left {
    float: left
}

.is-fixed {
    position: fixed;
    top: 0;
    left: 0
}

.is-hidden {
    display: none !important
}

.is-vhidden {
    visibility: hidden !important
}

.is-disabled {
    pointer-events: none;
    opacity: 0.4;
    cursor: default !important
}

.stuck {
    position: fixed !important;
    top: 0 !important;
    z-index: 2 !important;
    animation-name: translateDown;
    animation-duration: 0.4s
}

.overflow-auto {
    overflow: auto !important
}

.im.is-icon-xs,
.sl.is-icon-xs,
.material-icons.is-icon-xs {
    font-size: 0.8rem !important
}

.im.is-icon-md,
.sl.is-icon-md,
.material-icons.is-icon-md {
    font-size: 1.5rem !important
}

.im.is-icon-2x,
.sl.is-icon-2x,
.material-icons.is-icon-2x {
    font-size: 2rem
}

.im.is-icon-3x,
.sl.is-icon-3x,
.material-icons.is-icon-3x {
    font-size: 3rem
}

.im.is-icon-4x,
.sl.is-icon-4x,
.material-icons.is-icon-4x {
    font-size: 4rem
}

.im.is-gigantic,
.sl.is-gigantic,
.material-icons.is-gigantic {
    font-size: 12rem
}

.img-circle {
    border-radius: 1000px
}

@media (max-width: 767px) {
    .mobile-padding-20 {
        padding: 20px 30px
    }
    .mobile-padding-40 {
        padding: 40px
    }
    .has-text-centered-mobile {
        text-align: center !important
    }
}


/*! _responsive.scss | Bulkit | CSS Ninja */

@media (max-width: 767px) {
    .section-title-wrapper {
        padding: 40px 0 !important
    }
    .content-wrapper {
        padding-top: 40px !important
    }
}


@media (max-width: 768px) {
    
    div.column.login-column.is-5.hero-banner {
        width:100%;
    }
   
    div.columns{
        width:100%;
       
    }
    div.hero{
        width:100%;
    }
    .is-fullWidth{
        width:100%;
    }
    div.column.is-7{
        width:100%;
    }

    
    div.login-wrapper.columns.is-gapless{
        width:100%;

    }
    
    #hero-image{
        display:none;
    }
    .nav-item.is-tab {
        padding-top: 8px;
        padding-bottom: 8px
    }
    .nav .nav-item.is-tab.is-active,
    .nav-menu.is-active .nav-item.is-tab.is-active {
        border-bottom: none !important;
        color: var(--app-default-color) !important
    }
    .nav-item.nav-inner {
        padding-top: 15px !important;
        padding-bottom: 15px !important
    }
    a.nav-item.is-not-mobile {
        display: none !important
    }
    .nav-item.is-menu-mobile {
        display: block !important;
        color: #7a7a7a !important
    }
    .level-left.level-social {
        display: flex;
        justify-content: flex-start
    }
    .level-left.level-social .level-item:last-child .icon i {
        position: relative !important;
        top: -5px !important
    }
    #main-hero {
        max-height: 100vh;
        background-position-x: 55% !important
    }
    .parallax-overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0 !important
    }
    .title.section-title {
        font-size: 2rem !important
    }
    .hero.is-fullheight.is-halfed-mobile {
        height: 35vh !important
    }
    .three-grid .column,
    .four-grid .column,
    .five-grid .column {
        border: none !important
    }
    .three-grid .is-separator,
    .four-grid .is-separator,
    .five-grid .is-separator {
        border: none !important
    }
    .single-image-carousel .image-wrapper img {
        min-height: 50px !important
    }
    .single-image-carousel .image-wrapper .caption {
        display: none
    }
    .video-caption {
        left: 5%
    }
    #navigation-trigger,
    .navigation-close {
        opacity: 1 !important
    }
    .navbar-wrapper.navbar-fade.navbar-light.mobile-menu-dark {
        background-color: #344258 !important
    }
    .navbar-wrapper.navbar-fade.navbar-light.mobile-menu-dark .nav-menu.is-active {
        background-color: #344258 !important
    }
    .navbar-wrapper.navbar-fade.navbar-light.mobile-menu-dark .nav-menu.is-active .nav-inner.is-menu-mobile {
        color: #fff !important
    }
    .navbar-wrapper.navbar-fade.navbar-light.mobile-menu-dark .nav-menu.is-active .nav-inner.is-menu-mobile.is-active {
        color: var(--app-default-color) !important
    }
    .navbar-wrapper.navbar-fade.mobile-menu-dark {
        background-color: #fff !important
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .columns {
        padding: 0 10%;
       
    }
    .columns.is-tablet-portrait {
        padding: 10%
    }
    .columns.is-not-tablet-portrait {
        padding: 0 !important
    }
    .content-wrapper {
        padding-top: 0 !important
    }
}

@media (max-width: 1007px) {
    .column.slide-description {
        padding: 20px 0 !important
    }
    .account {
        display: none
    }
    .media-card {
        min-height: 300px !important
    }
    .column.is-4.media-stretch {
        width: 100% !important
    }
    .column.is-4.media-stretch .media-card-image {
        min-height: 150px
    }
    .mcard-controls {
        position: relative !important
    }
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    overflow: hidden !important
}

a,
a:active,
i,
i:active,
div,
div:active,
div:focus,
span:focus,
span:active {
    outline: none !important
}

.button.is-active,
.button:active,
.button:focus {
    box-shadow: none !important
}

section:focus {
    outline: none !important
}

@font-face {
    font-display: swap;
    src: url("../fonts/text/nexa/NexaLight.woff") format("woff"), url("../fonts/text/nexa/NexaLight.ttf") format("truetype")
}

@font-face {
    font-family: 'Nexa Bold';
    font-weight: bold;
    font-display: swap;
    src: url("../fonts/text/nexa/NexaBold.woff") format("woff"), url("../fonts/text/nexa/NexaBold.ttf") format("truetype")
}

#backtotop {
    position: fixed;
    right: 0;
    opacity: 0;
    visibility: hidden;
    bottom: 25px;
    margin: 0 25px 0 0;
    z-index: 9999;
    transition: 0.35s;
    transform: scale(0.7);
    transition: all 0.5s
}

#backtotop.visible {
    opacity: 1;
    visibility: visible;
    transform: scale(1)
}

#backtotop.visible a:hover {
    outline: none;
    opacity: 0.9;
    background: var(--app-default-color)
}

#backtotop a {
    outline: none;
    text-decoration: none;
    border: 0 none;
    display: block;
    width: 46px;
    height: 46px;
    background-color: #66676b;
    opacity: 1;
    transition: all 0.3s;
    border-radius: 50%;
    text-align: center;
    font-size: 26px
}

body #backtotop a {
    outline: none;
    color: #fff
}

#backtotop a:after {
    outline: none;
    content: "\\f106";
    font-family: "FontAwesome";
    position: relative;
    display: block;
    top: 50%;
    -webkit-transform: translateY(-55%);
    transform: translateY(-55%)
}

.progress {
    width: 100% !important
}

.progress.primary::-webkit-progress-value {
    background-color: var(--app-default-color) !important
}

.progress.secondary::-moz-progress-bar {
    background-color: var(--app-default-color) !important
}

::-webkit-input-placeholder {
    color: #cecece
}

::-moz-placeholder {
    color: #cecece
}

:-ms-input-placeholder {
    color: #cecece
}

:-moz-placeholder {
    color: #cecece
}


</style>`;