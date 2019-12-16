import{html}from"../../../../node_modules/lit-element/lit-element.js";export const DASHBOARD_STYLES=html`
<style>
/*! dashboard.scss | Bulkit | CSS Ninja *//*! themes/_colors.scss | Bulkit | CSS Ninja *//*! themes/_dashboard.scss | Bulkit | CSS Ninja */
.pageloader {
    background: #7F00FF !important
}

/*! _pageloader.scss | Bulkit | CSS Ninja */
.pageloader {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #00D1B2;
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

.pageloader::after, .pageloader::before {
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
    0%, 40% {
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
    0%, 40% {
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
    100%, 40% {
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
    100%, 40% {
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

.tabs-nav li a, .tabs-nav tab-reviews {
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

.tabs-nav li a:hover, .tabs-nav li.active a {
    border-color: #00D1B2;
    color: #00D1B2 !important;
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
    border-bottom-color: #00D1B2
}

.navigation-tabs.simple-tabs .tabs ul li.is-active a {
    color: #444F60;
    border-bottom: 2px solid #00D1B2
}

.navigation-tabs.simple-tabs .tabs ul li.is-active a .icon i {
    color: #00D1B2
}

.navigation-tabs.boxed-tabs .tabs ul li a {
    color: #A9ABAC
}

.navigation-tabs.boxed-tabs .tabs ul li.is-active a {
    color: #00D1B2
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
    color: #00D1B2;
    border: 1px solid #00D1B2;
    border-bottom-color: #00D1B2 !important;
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
    border: 1px solid #00D1B2;
    background-color: #00D1B2;
    border-radius: 3px;
    box-shadow: 0 14px 26px -12px rgba(0, 209, 178, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 209, 178, 0.2) !important
}

.navigation-tabs.full-pills.secondary .tabs ul li.is-active a {
    color: #fff;
    border: 1px solid #7F00FF;
    background-color: #7F00FF;
    border-radius: 3px;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.navigation-tabs.full-pills.accent .tabs ul li.is-active a {
    color: #fff;
    border: 1px solid #536dfe;
    background-color: #536dfe;
    border-radius: 3px;
    box-shadow: 0 14px 26px -12px rgba(83, 109, 254, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(83, 109, 254, 0.2) !important
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

.navigation-tabs.square-pills .tabs ul li a :hover {
    border-bottom: 1px solid transparent
}

.navigation-tabs.square-pills .tabs ul li a i {
    display: block;
    font-size: 18px
}

.navigation-tabs.square-pills .tabs ul li.is-active a {
    background-color: #00D1B2;
    color: #fff;
    box-shadow: 0px 5px 35px 0px rgba(0, 0, 0, 0.18)
}

.tabs.partner-tabs ul {
    border-bottom: 1px transparent !important
}

.tab-reviews {
    color: #aaa
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
    background: #00D1B2;
    color: #fff
}

.is-drop .dropContain .dropOut.is-secondary ul li:hover {
    background: #7F00FF;
    color: #fff
}

.is-drop .dropContain .dropOut.is-accent ul li:hover {
    background: #536dfe;
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

.jq-dropdown .jq-dropdown-menu li > a:hover, .jq-dropdown .jq-dropdown .jq-dropdown-menu label:hover {
    background-color: #EFF4F7;
    color: inherit
}

.jq-dropdown.is-primary .jq-dropdown-menu li > a:hover, .jq-dropdown.is-primary .jq-dropdown .jq-dropdown-menu label:hover {
    background-color: #00D1B2;
    color: #fff
}

.jq-dropdown.is-secondary .jq-dropdown-menu li > a:hover, .jq-dropdown.is-secondary .jq-dropdown .jq-dropdown-menu label:hover {
    background-color: #7F00FF;
    color: #fff
}

.jq-dropdown.is-accent .jq-dropdown-menu li > a:hover, .jq-dropdown.is-accent .jq-dropdown .jq-dropdown-menu label:hover {
    background-color: #536dfe;
    color: #fff
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
    color: #00D1B2 !important;
    transition: all 0.5s
}

.button.is-link:hover i {
    transform: translate(10px, 0)
}

.button.primary-btn {
    outline: none;
    border-color: #00D1B2;
    background-color: #00D1B2;
    color: #fff;
    transition: all 0.5s
}

.button.primary-btn:hover {
    color: #fff
}

.button.primary-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(0, 209, 178, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 209, 178, 0.2) !important;
    opacity: 0.9 0.5
}

.button.primary-btn.btn-outlined {
    border-color: #00D1B2;
    color: #00D1B2;
    background-color: transparent
}

.button.primary-btn.btn-outlined:hover {
    color: #fff;
    background-color: #00D1B2
}

.button.primary-btn:focus {
    border-color: #00D1B2
}

.button.secondary-btn {
    outline: none;
    border-color: #7F00FF;
    background-color: #7F00FF;
    color: #fff;
    transition: all 0.5s
}

.button.secondary-btn:hover {
    color: #fff
}

.button.secondary-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important;
    opacity: 0.95
}

.button.secondary-btn.btn-outlined {
    border-color: #7F00FF;
    color: #7F00FF;
    background-color: transparent
}

.button.secondary-btn.btn-outlined:hover {
    color: #fff;
    background-color: #7F00FF
}

.button.secondary-btn:focus {
    border-color: #7F00FF
}

.button.accent-btn {
    outline: none;
    border-color: #536dfe;
    background-color: #536dfe;
    color: #fff;
    transition: all 0.5s
}

.button.accent-btn:hover {
    color: #fff
}

.button.accent-btn.raised:hover {
    box-shadow: 0 14px 26px -12px rgba(83, 109, 254, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(83, 109, 254, 0.2) !important;
    opacity: 0.8
}

.button.accent-btn.btn-outlined {
    border-color: #536dfe;
    color: #536dfe;
    background-color: transparent
}

.button.accent-btn.btn-outlined:hover {
    color: #fff;
    background-color: #536dfe
}

.button.accent-btn:focus {
    border-color: #536dfe
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
    from, to {
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
    from, to {
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
    from, to {
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
    from, to {
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
    color: #7F00FF
}

.flex-card {
    position: relative;
    background-color: #fff;
    border: 1px solid #fcfcfc;
    border-radius: 14px;
    display: inline-block;
    position: relative;
    /*overflow: hidden;*/ /* removed for custom dropdowns using absolute positioning to work */
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
    color: #00D1B2
}

.flex-card .flex-card-header.primary {
    background: #00D1B2
}

.flex-card .flex-card-header.primary .header-info div, .flex-card .flex-card-header.primary .header-control i {
    color: #fff !important
}

.flex-card .flex-card-header.secondary {
    background: #7F00FF
}

.flex-card .flex-card-header.secondary .header-info div, .flex-card .flex-card-header.secondary .header-control i {
    color: #fff !important
}

.flex-card .flex-card-header.accent {
    background: #536dfe
}

.flex-card .flex-card-header.accent .header-info div, .flex-card .flex-card-header.accent .header-control i {
    color: #fff !important
}

.flex-card .card-body {
    padding: 0 30px 30px 30px
}

.flex-card .card-body.is-small {
    padding: 0 20px 20px 20px
}

.flex-card .card-body.is-large {
    padding: 0 40px 40px 40px
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
    background: #00D1B2
}

.flex-card.primary-card .content, .flex-card.primary-card .content h2 {
    color: #fff !important
}

.flex-card.secondary-card {
    background: #7F00FF
}

.flex-card.secondary-card .content, .flex-card.secondary-card .content h2 {
    color: #fff !important
}

.flex-card.accent-card {
    background: #536dfe
}

.flex-card.accent-card .content, .flex-card.accent-card .content h2 {
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
    color: #00D1B2;
    font-weight: 500;
    padding: 5px 0
}

.flex-card.testimonial-card .testimonial-text {
    color: #999;
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
    background-color: #00D1B2
}

.flex-card .navigation-tabs.outlined-pills .tabs.tabs-header.secondary {
    background-color: #7F00FF
}

.flex-card .navigation-tabs.outlined-pills .tabs.tabs-header.accent {
    background-color: #536dfe
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
    color: #999;
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
    background-color: #00D1B2;
    color: #fff;
    box-shadow: 0 14px 26px -12px rgba(0, 209, 178, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 209, 178, 0.2) !important
}

.flex-card.auth-card .auth-card-header.header-secondary {
    background-color: #7F00FF;
    color: #fff;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.flex-card.auth-card .auth-card-header.header-accent {
    background-color: #536dfe;
    color: #fff;
    box-shadow: 0 14px 26px -12px rgba(83, 109, 254, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(83, 109, 254, 0.2) !important
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
    border: 1px solid #ededed
}

.event-card:hover {
    box-shadow: 1px 1px 8px 2px rgba(0, 0, 0, 0.1)
}

.event-card .card-date {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #536dfe;
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

.card-text.is-clicked, .event-card:hover .card-text {
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
    color: #536dfe;
    
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
    color: #536dfe
}

.card-text .text.text-link:hover {
    color: #b8c3ff
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
    background: #00D1B2;
    opacity: 0.6
}

.card.ressource-card .card-image .card-image-overlay.secondary {
    background: #7F00FF;
    opacity: 0.6
}

.card.ressource-card .card-image .card-image-overlay.accent {
    background: #536dfe;
    opacity: 0.6
}

.card.ressource-card .card-content .media-content a {
    
    font-size: 16px;
    color: #444F60
}

.card.ressource-card .card-content .media-content a:hover {
    color: #00D1B2
}

.card.ressource-card .card-content .media-content p {
    
    font-weight: 700;
    color: #999
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

.card.card-floating-wide, .card.card-floating-boxed {
    margin: 4%;
    border-radius: 6px
}

.card.card-floating-wide .title, .card.card-floating-boxed .title {
    margin: 0 !important;
    padding: 10px 0
}

.card.card-floating-wide .subtitle, .card.card-floating-boxed .subtitle {
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
    color: #999
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
    color: #999;
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
    color: #536dfe
}

.media-card .content-column {
    position: relative
}

/*! _forms.scss | Bulkit | CSS Ninja *//*! themes/_mixins.scss | Bulkit | CSS Ninja */
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
    border-color: #00D1B2
}

input.input.is-primary-focus:focus ~ span.icon i {
    color: #00D1B2
}

input.input.is-secondary-focus:focus {
    border-color: #7F00FF
}

input.input.is-secondary-focus:focus ~ span.icon i {
    color: #7F00FF
}

input.input.is-accent-focus:focus {
    border-color: #536dfe
}

input.input.is-accent-focus:focus ~ span.icon i {
    color: #536dfe
}

input.input.is-grey-focus:focus {
    border-color: #A9ABAC
}

input.input.is-grey-focus:focus ~ span.icon i {
    color: #A9ABAC
}

input.input:focus, input.input:active {
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
    border-color: #00D1B2
}

textarea.textarea.is-primary-focus:focus ~ span.icon i {
    color: #00D1B2
}

textarea.textarea.is-secondary-focus:focus {
    border-color: #7F00FF
}

textarea.textarea.is-secondary-focus:focus ~ span.icon i {
    color: #7F00FF
}

textarea.textarea.is-accent-focus:focus {
    border-color: #536dfe
}

textarea.textarea.is-accent-focus:focus ~ span.icon i {
    color: #536dfe
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
    border-color: #999
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

textarea.textarea.is-button + .textarea-button {
    display: flex;
    justify-content: flex-end;
    position: relative;
    border: 1px solid #ccc;
    border-top: none !important;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px
}

textarea.textarea.is-button + .textarea-button button {
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

.field .control.has-icons-left .icon, .field .control.has-icons-right .icon {
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

.control-material input, .control-material textarea {
    border-radius: 0 !important
}

.control-material.is-primary input.material-input:focus ~ label, .control-material.is-primary input:valid ~ label, .control-material.is-primary textarea:focus ~ label {
    color: #00D1B2
}

.control-material.is-primary .bar:before, .control-material.is-primary .bar:after {
    background: #00D1B2
}

.control-material.is-primary.has-icon input:focus ~ i {
    color: #00D1B2 !important
}

.control-material.is-secondary input.material-input:focus ~ label, .control-material.is-secondary input:valid ~ label, .control-material.is-secondary textarea:focus ~ label {
    color: #7F00FF
}

.control-material.is-secondary .bar:before, .control-material.is-secondary .bar:after {
    background: #7F00FF
}

.control-material.is-secondary.has-icon input:focus ~ i {
    color: #7F00FF !important
}

.control-material.is-accent input.material-input:focus ~ label, .control-material.is-accent input:valid ~ label, .control-material.is-accent textarea:focus ~ label {
    color: #536dfe
}

.control-material.is-accent .bar:before, .control-material.is-accent .bar:after {
    background: #536dfe
}

.control-material.is-accent.has-icon input:focus ~ i {
    color: #536dfe !important
}

.control-material.is-light input.material-input:focus ~ label, .control-material.is-light input:valid ~ label, .control-material.is-light textarea:focus ~ label {
    color: #fff
}

.control-material.is-light .bar:before, .control-material.is-light .bar:after {
    background: #fff
}

.control-material.is-light.has-icon input:focus ~ i {
    color: #fff !important
}

.control-material input.material-input, .control-material textarea {
    width: 100% !important;
    font-size: 18px;
    padding: 0.625em 0.625em 0.625em 0.3125em;
    display: block;
    width: 18.75em;
    border: none;
    border-bottom: 1px solid #A9ABAC;
    background-color: transparent !important
}

.control-material input.material-input:focus, .control-material textarea:focus {
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

.control-material input.material-input:focus ~ label, .control-material input:valid ~ label, .control-material textarea:focus ~ label {
    top: -20px;
    left: -2px;
    font-size: 12px
}

.control-material .bar {
    position: relative;
    display: block
}

.control-material .bar:before, .control-material .bar:after {
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

.control-material input.material-input:focus ~ .bar:before, .control-material input.material-input:focus ~ .bar:after, .control-material textarea:focus ~ .bar:before, .control-material textarea:focus ~ .bar:after {
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

.control-material.required.has-success .bar:after, .control-material.required.has-success .bar:before {
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

.control-material.required.has-error .bar:after, .control-material.required.has-error .bar:before {
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
    border: 1px solid #00D1B2;
    border-right: 0;
    border-top: 0
}

.select:hover:after {
    border: 1px solid #009e87;
    border-right: 0;
    border-top: 0
}

.select select:active, .select select:focus {
    border-color: #00D1B2
}

.control.has-icons-left .select select {
    padding-left: 2.5rem
}

.control.has-icons-left .select + .icon {
    top: 0.6rem;
    font-size: 1.2rem
}

.control.has-icons-left .select.is-small + .icon {
    top: 0.4rem;
    font-size: 1rem
}

.control.has-icons-left .select.is-medium + .icon {
    top: 0.9rem;
    font-size: 1.5rem
}

.control.has-icons-left .select.is-medium select {
    padding-left: 3rem
}

.control.has-icons-left .select.is-large + .icon {
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

.datepicker-panel > ul > li.picked, .datepicker-panel > ul > li.picked:hover {
    background-color: #536dfe !important
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

.file-input-wrapper .control .inputfile + label {
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

.file-input-wrapper .control .inputfile + label i {
    position: relative;
    top: 4px;
    margin-right: 10px
}

.file-input-wrapper .control .simple-file-input + label {
    color: #fff;
    background-color: #536dfe
}

.file-input-wrapper .control .simple-file-input:focus + label, .file-input-wrapper .control .simple-file-input.has-focus + label, .file-input-wrapper .control .simple-file-input + label:hover {
    background-color: #6c83fe;
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
    padding: 12px;
    position: relative;
    border-radius: 3px
}

.field-input-wrapper .field-input > [type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 10;
    cursor: pointer
}

.field-input-wrapper .field-input > .button {
    display: inline-block;
    cursor: pointer;
    border-radius: 2px;
    margin-right: 8px;
    line-height: 1
}

.field-input-wrapper .field-input > .label {
    color: #444F60;
    font-weight: 400;
    white-space: nowrap;
    opacity: .3
}

.field-input-wrapper .field-input.-chosen > .label {
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
    border-color: #00D1B2;
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

.checkbox-wrap, .radio-wrap {
    position: relative;
    cursor: pointer;
    padding: 1em
}

.checkbox-wrap::selection, .radio-wrap::selection {
    background: transparent
}

.checkbox-wrap input.d-checkbox + span, .radio-wrap input.d-checkbox + span, .checkbox-wrap input.b-radio + span, .radio-wrap input.b-radio + span {
    background: #fff;
    content: "";
    display: inline-block;
    margin: 0 .5em 0 0;
    padding: 0;
    border: 1px solid #999;
    vertical-align: middle;
    width: 2em;
    height: 2em
}

.checkbox-wrap input.d-checkbox + span::after, .radio-wrap input.d-checkbox + span::after, .checkbox-wrap input.b-radio + span::after, .radio-wrap input.b-radio + span::after {
    content: "";
    display: block;
    transform: scale(0);
    transition: transform .2s
}

.checkbox-wrap input.d-checkbox:checked + span::after, .radio-wrap input.d-checkbox:checked + span::after, .checkbox-wrap input.b-radio:checked + span::after, .radio-wrap input.b-radio:checked + span::after {
    transform: scale(1)
}

.checkbox-wrap input.d-checkbox, .radio-wrap input.d-checkbox, .checkbox-wrap input.b-radio, .radio-wrap input.b-radio {
    position: absolute;
    cursor: pointer;
    opacity: 0
}

.checkbox-wrap input + span {
    border-radius: 2px
}

.checkbox-wrap input + span::after {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTMuNzA3LDMyLjI5MyAxMi4yOTMsMzMuODU0IDI0LjI5Myw0NiAyNS43MDcsNDYgNDkuNzA3LDIxLjg1NCA0OC4yOTMsMjAuMzY2IDI1LDQzLjYyMyAiLz48L2c+PC9zdmc+) no-repeat center;
    background-size: contain;
    width: 1.9em;
    height: 1.9em
}

.checkbox-wrap.is-medium input + span {
    width: 1.4em;
    height: 1.4em
}

.checkbox-wrap.is-medium input + span::after {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTMuNzA3LDMyLjI5MyAxMi4yOTMsMzMuODU0IDI0LjI5Myw0NiAyNS43MDcsNDYgNDkuNzA3LDIxLjg1NCA0OC4yOTMsMjAuMzY2IDI1LDQzLjYyMyAiLz48L2c+PC9zdmc+) no-repeat center;
    background-size: contain;
    width: 1.3em;
    height: 1.3em
}

.checkbox-wrap.is-small input + span {
    width: 1em;
    height: 1em
}

.checkbox-wrap.is-small input + span::after {
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNjQgNjQiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTMuNzA3LDMyLjI5MyAxMi4yOTMsMzMuODU0IDI0LjI5Myw0NiAyNS43MDcsNDYgNDkuNzA3LDIxLjg1NCA0OC4yOTMsMjAuMzY2IDI1LDQzLjYyMyAiLz48L2c+PC9zdmc+) no-repeat center;
    background-size: contain;
    width: 0.9em;
    height: 0.9em
}

.radio-wrap input + span {
    border-radius: 1000px
}

.radio-wrap input + span::after {
    border-radius: 1000px;
    margin: .55em;
    width: .75em;
    height: .75em
}

.radio-wrap input:checked + span::after {
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

.radio-wrap.is-primary input:checked + span::after {
    background: #00D1B2
}

.radio-wrap.is-secondary input:checked + span::after {
    background: #7F00FF
}

.radio-wrap.is-accent input:checked + span::after {
    background: #536dfe
}

/*! _accordion.scss | Bulkit | CSS Ninja */
.simple-accordion-wrapper .accordion-section {
    position: relative;
    width: 100%;
    height: auto;
    background-color: #fff;
    border: 1px solid #ededed
}

.simple-accordion-wrapper .accordion-section a {
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: #555;
    font-weight: 600;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    transition: all 0.2s linear
}

.simple-accordion-wrapper .accordion-section a i {
    position: relative;
    float: right;
    margin-top: 4px;
    color: #666
}

.simple-accordion-wrapper .accordion-section a.active {
    background-color: #444F60;
    color: #fff
}

.simple-accordion-wrapper .accordion-section a.active i {
    color: #fff
}

.simple-accordion-wrapper .accordion-section .accordion-content {
    position: relative;
    width: 100%;
    height: auto;
    background-color: #fff;
    display: none
}

.simple-accordion-wrapper .accordion-section .accordion-content p {
    padding: 20px 25px;
    margin: 0;
    color: #333
}

.simple-accordion-wrapper.is-primary a.active {
    background-color: #00D1B2
}

.simple-accordion-wrapper.is-secondary a.active {
    background-color: #7F00FF
}

.simple-accordion-wrapper.is-accent a.active {
    background-color: #536dfe
}

.simple-accordion-wrapper.is-info a.active {
    background-color: #039BE5
}

.simple-accordion-wrapper.is-success a.active {
    background-color: #00b289
}

.multi-toggle-wrapper .mt-item {
    position: relative;
    margin-bottom: 1px;
    width: 100%;
    color: #444F60;
    border: 1px solid #ededed;
    overflow: hidden
}

.multi-toggle-wrapper .mt-item:hover .mt-item-label {
    color: #00D1B2
}

.multi-toggle-wrapper .mt-item:hover .mt-item-label span {
    color: #00D1B2
}

.multi-toggle-wrapper .mt-item .mt-item-input {
    position: absolute;
    opacity: 0;
    z-index: -1
}

.multi-toggle-wrapper .mt-item .mt-item-label {
    position: relative;
    display: block;
    padding: 0 0 0 3em;
    background: #fff;
    font-weight: bold;
    line-height: 3;
    cursor: pointer;
    color: #cecece;
    text-transform: uppercase;
    font-size: 1em;
    margin-bottom: 0;
    border-radius: 3px 3px 0 0;
    border-bottom: 1px solid #ededed
}

.multi-toggle-wrapper .mt-item .mt-item-label span {
    color: #444F60;
    font-weight: 600;
    text-transform: none;
    -webkit-transition: all .45s;
    -o-transition: all .45s;
    transition: all .45s
}

.multi-toggle-wrapper .mt-item .mt-item-content {
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height .45s;
    -o-transition: max-height .45s;
    transition: max-height .45s;
    background-color: #fff;
    border-radius: 3px
}

.multi-toggle-wrapper .mt-item .mt-item-content p {
    margin: 1em
}

.multi-toggle-wrapper .mt-item .mt-item-content .mt-item {
    padding: 10px;
    background: #fff;
    color: #444F60;
    margin: 2px 0px;
    border-radius: 3px
}

.multi-toggle-wrapper .mt-item .mt-item-content .mt-item label {
    border-radius: 0
}

.multi-toggle-wrapper .mt-item .mt-item-inner {
    padding: 1px 0 0
}

.multi-toggle-wrapper .mt-item .mt-item-inner label {
    font-weight: 400;
    background-color: #cecece;
    color: #fff
}

.multi-toggle-wrapper .mt-item .mt-item-inner .mt-item-content ul {
    margin: 0;
    padding: 0
}

.multi-toggle-wrapper .mt-item .mt-item-inner .mt-item-content ul li {
    list-style-type: none
}

.multi-toggle-wrapper .mt-item .mt-item-inner .mt-item-content ul li .checkBox label {
    background-color: transparent;
    color: #444F60;
    text-transform: capitalize;
    padding-left: 0;
    margin: 0
}

.multi-toggle-wrapper .mt-item .mt-item-inner .mt-item-content ul li .checkBox label:after {
    content: ""
}

.multi-toggle-wrapper .mt-item .mt-item-input:checked ~ .mt-item-content {
    max-height: 50em
}

.multi-toggle-wrapper .mt-item .mt-item-label::after {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 3em;
    height: 3em;
    line-height: 3;
    text-align: center;
    -webkit-transition: all .45s;
    -o-transition: all .45s;
    transition: all .45s
}

.multi-toggle-wrapper .mt-item .mt-item-input[type=checkbox] + .mt-item-label::after {
    font-family: "FontAwesome";
    content: "\\f077";
    font-weight: 300
}

.multi-toggle-wrapper .mt-item .mt-item-input[type=checkbox]:checked + .mt-item-label::after {
    transform: rotate(180deg)
}

.multi-toggle-wrapper .checkbox-custom {
    opacity: 0;
    position: absolute
}

.multi-toggle-wrapper .checkbox-custom, .multi-toggle-wrapper .checkbox-custom-label {
    display: inline-block;
    vertical-align: middle;
    margin: 5px;
    cursor: pointer
}

.multi-toggle-wrapper .checkbox-custom-label {
    position: relative
}

.multi-toggle-wrapper .checkbox-custom + .checkbox-custom-label:before {
    content: '';
    background: transparent;
    border: 2px solid #ddd;
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 10px;
    padding: 2px;
    margin-right: 10px;
    text-align: center
}

.multi-toggle-wrapper .checkbox-custom:checked + .checkbox-custom-label:before {
    content: "\\f00c";
    font-family: 'FontAwesome';
    color: #cecece;
    line-height: 10px;
    font-weight: 300
}

.single-toggle-wrapper .toggle-wrap {
    border: 1px solid #e0e0e0;
    border-radius: 3px 3px 0 0;
    padding-left: 20px;
    padding-right: 10px;
    transition: all 0.5s
}

.single-toggle-wrapper .toggle-wrap:hover {
    box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px
}

.single-toggle-wrapper .toggle-wrap .trigger a {
    display: block;
    cursor: pointer;
    position: relative;
    padding: 0;
    line-height: 26px;
    outline: none;
    color: #444F60;
    font-size: 14px;
    font-weight: 600;
    background-color: #fff;
    border: 1px solid #e0e0e0;
    transition: background-color 0.2s, color 0.2s;
    padding: 16px 27px;
    margin: -1px 0 0 0
}

.single-toggle-wrapper .toggle-wrap .trigger a i {
    padding-right: 6px;
    margin: 0 4px 0 0;
    transition: all 0.3s
}

.single-toggle-wrapper .toggle-wrap .trigger a .im-icon-Add {
    position: absolute;
    right: 0;
    top: 50%;
    font-size: 24px;
    transform: translate3d(0, -50%, 0) rotate(0);
    transition: 0.2s
}

.single-toggle-wrapper .toggle-wrap .trigger a .im-icon-Coding {
    position: relative;
    top: 7px
}

.single-toggle-wrapper .toggle-wrap .trigger a {
    text-transform: uppercase;
    border: none;
    margin: 0;
    padding: 15px 0;
    text-transform: none;
    font-size: 11px;
    font-weight: 500;
    background-color: transparent;
    color: #444F60;
    padding-right: 60px;
    font-weight: 600
}

.single-toggle-wrapper .toggle-wrap .trigger.active .im-icon-Add {
    margin-top: 2px;
    transform: translate3d(0, -50%, 0) rotate(45deg);
    color: #999
}

.single-toggle-wrapper .toggle-wrap .toggle-container {
    padding: 0px 0 30px 0;
    border: none
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
    background-color: #00D1B2;
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

.modal.is-active .modal-card .modal-card-head, .modal.is-active .modal-card .modal-card-foot {
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
    background: #536dfe
}

.modal.is-active .modal-card .modal-card-head .delete:after {
    background: #536dfe
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
    background: -webkit-linear-gradient(to right, #536dfe, #7F00FF);
    background: linear-gradient(to right, #536dfe, #7F00FF);
    background-color: #7F00FF
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
    .modal.modal-lg .modal-card, .modal.modal-lg .modal-content {
        width: 800px !important
    }

    .modal.modal-sm .modal-card, .modal.modal-sm .modal-content {
        width: 400px !important
    }
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
    background: #999;
    text-align: center;
    border-radius: 3px
}

.b-badge.rounded {
    border-radius: 200px
}

.b-badge.badge-outlined {
    background: transparent;
    border: 1px solid #999;
    color: #999
}

.b-badge.is-primary {
    background: #00D1B2
}

.b-badge.is-primary.badge-outlined {
    background: transparent;
    border: 1px solid var(--app-default-color);
    color: var(--app-default-color);
}

.b-badge.is-secondary {
    background: #7F00FF
}

.b-badge.is-secondary.badge-outlined {
    background: transparent;
    border: 1px solid #7F00FF;
    color: #7F00FF
}

.b-badge.is-accent {
    background: #536dfe
}

.b-badge.is-accent.badge-outlined {
    background: transparent;
    border: 1px solid #536dfe;
    color: #536dfe
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
    border: 1px solid #999
}

.tag.is-primary {
    background: #00D1B2;
    color: #fff
}

.tag.is-primary.is-outlined {
    background: transparent;
    border: 1px solid #00D1B2;
    color: #00D1B2
}

.tag.is-secondary {
    background: #7F00FF;
    color: #fff
}

.tag.is-secondary.is-outlined {
    background: transparent;
    border: 1px solid #7F00FF;
    color: #7F00FF
}

.tag.is-accent {
    background: #536dfe;
    color: #fff
}

.tag.is-accent.is-outlined {
    background: transparent;
    border: 1px solid #536dfe;
    color: #536dfe
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

.tag.is-delete:before, .tag.is-delete:after {
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

/*! _lists.scss | Bulkit | CSS Ninja */
.content ul {
    list-style-type: disc
}

.content ol {
    list-style-type: decimal
}

ul, ol {
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
    background: var(--app-default-color);
}

.list-block li.is-active:hover {
    background: #00D1B2
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
    background: #7F00FF
}

.list-block.is-accent li.is-active {
    background: #536dfe
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
    color: #00D1B2
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
    padding: 10px 15px
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

/*! _tables.scss | Bulkit | CSS Ninja */
.table.device-table th, .table.device-table td {
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
    color: #00D1B2
}

.table.device-table td i.im-icon-Close {
    font-size: 24px;
    color: #cecece
}

.table.device-table th {
    border-bottom: 1px solid #dbdbdb
}

.table.compare-table th, .table.compare-table td {
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
    color: #00D1B2
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
    background: #00D1B2
}

.responsive-table.is-secondary tr:first-child {
    background: #7F00FF
}

.responsive-table.is-accent tr:first-child {
    background: #536dfe
}

.responsive-table tr:first-child {
    border-top: none;
    background: #999;
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

.responsive-table th, .responsive-table td {
    text-align: left;
    padding: .5em 1em
}

@media screen and (max-width: 601px) {
    .responsive-table tr:nth-child(2) {
        border-top: none
    }
}

@media screen and (min-width: 600px) {
    .responsive-table tr:hover:not(:first-child) {
        background-color: #f2f2f2
    }

    .responsive-table td:before {
        display: none
    }

    .responsive-table th, .responsive-table td {
        display: table-cell;
        padding: .25em .5em
    }

    .responsive-table th:first-child, .responsive-table td:first-child {
        padding-left: 0
    }

    .responsive-table th:last-child, .responsive-table td:last-child {
        padding-right: 0
    }

    .responsive-table th, .responsive-table td {
        padding: 1em !important
    }
}

/*! _helpers.scss | Bulkit | CSS Ninja */
.color-primary {
    color: #00D1B2 !important
}

.color-secondary {
    color: #7F00FF !important
}

.color-accent {
    color: #536dfe !important
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
    color: #00D1B2 !important
}

.secondary-text {
    color: #7F00FF !important
}

.accent-text {
    color: #536dfe !important
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

.im.is-icon-xs, .sl.is-icon-xs, .material-icons.is-icon-xs {
    font-size: 0.8rem !important
}

.im.is-icon-md, .sl.is-icon-md, .material-icons.is-icon-md {
    font-size: 1.5rem !important
}

.im.is-icon-2x, .sl.is-icon-2x, .material-icons.is-icon-2x {
    font-size: 2rem
}

.im.is-icon-3x, .sl.is-icon-3x, .material-icons.is-icon-3x {
    font-size: 3rem
}

.im.is-icon-4x, .sl.is-icon-4x, .material-icons.is-icon-4x {
    font-size: 4rem
}

.im.is-gigantic, .sl.is-gigantic, .material-icons.is-gigantic {
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

/*! _quickview.scss | Bulkit | CSS Ninja */
.quickview {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    min-width: 300px;
    max-width: 300px;
    position: fixed;
    top: 0;
    bottom: 0;
    right: -310px;
    z-index: 999;
    transform: translateZ(0);
    transition: 0.3s ease;
    backface-visibility: hidden;
    perspective: 1000;
    will-change: transform
}

.quickview.is-active {
    right: 0;
    box-shadow: 5px 0px 13px 3px rgba(0, 0, 0, 0.1)
}

.quickview.is-active.is-left {
    left: 0
}

.quickview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    min-height: 66px !important;
    border-bottom: 1px solid #EFF4F7
}

.quickview-header .title {
    margin-bottom: 0
}

.quickview-header.is-secondary {
    background: #7F00FF
}

.quickview-header.is-secondary p {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 400
}

.quickview-header.is-secondary i {
    color: #fff;
    font-size: 20px
}

.quickview-header .cross-container {
    transition: transform 0.3s
}

.quickview-header .cross-container:hover {
    transform: rotate(90deg)
}

.quickview-body {
    -webkit-box-flex: 1;
    flex: 1 1 0%
}

.quickview-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    min-height: 4rem;
    background-color: #fff;
    border-top: 1px solid #EFF4F7
}

.quickview-footer > * {
    margin: 0 0.4rem
}

/*! _timeline.scss | Bulkit | CSS Ninja */
.timeline {
    width: 100%;
    margin: 30px auto;
    position: relative;
    padding: 0 10px;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -ms-transition: all 0.4s ease;
    transition: all 0.4s ease
}

.timeline *, .timeline *:before, .timeline *:after {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box
}

.timeline .timeline-item:after, .timeline .timeline-item:before {
    content: '';
    display: block;
    width: 100%;
    clear: both
}

.timeline:before {
    content: "";
    width: 3px;
    height: 100%;
    background: #ededed;
    left: 50%;
    top: 0;
    position: absolute
}

.timeline:after {
    content: "";
    clear: both;
    display: table;
    width: 100%
}

.timeline .timeline-item {
    margin-bottom: 50px;
    position: relative
}

.timeline .timeline-item .timeline-icon {
    background: #536dfe;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 0;
    left: 50%;
    overflow: hidden;
    margin-left: -23px;
    cursor: pointer;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    -ms-box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18)
}

.timeline .timeline-item .timeline-icon i {
    position: relative;
    font-size: 1.6rem;
    top: 12px;
    left: 13px;
    color: #fff
}

.timeline .timeline-item .timeline-icon svg {
    position: relative;
    top: 14px;
    left: 14px
}

.timeline .timeline-item .timeline-content {
    width: 45%;
    background: #fff;
    padding: 20px;
    -webkit-box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    -ms-box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    border-radius: 5px;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -ms-transition: all 0.3s ease;
    transition: all 0.3s ease
}

.timeline .timeline-item .timeline-content .content-header {
    padding: 10px;
    background: #fff;
    color: #444F60;
    margin: -20px -20px 0 -20px;
    font-weight: 300;
    -webkit-border-radius: 3px 3px 0 0;
    -moz-border-radius: 3px 3px 0 0;
    -ms-border-radius: 3px 3px 0 0;
    border-radius: 3px 3px 0 0
}

.timeline .timeline-item .timeline-content .content-header .timestamp {
    font-size: 0.9rem;
    color: #999
}

.timeline .timeline-item .timeline-content .content-body {
    position: relative;
    display: flex;
    width: 100%
}

.timeline .timeline-item .timeline-content .content-body .timeline-avatar {
    height: 40px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    -ms-border-radius: 100px;
    border-radius: 100px
}

.timeline .timeline-item .timeline-content .content-body .timeline-text {
    margin: 0 10px
}

.timeline .timeline-item .timeline-content .content-body .timeline-text div:first-child {
    
    font-weight: 500;
    color: #444F60
}

.timeline .timeline-item .timeline-content .content-body .timeline-text div:last-child {
    color: #999
}

.timeline .timeline-item .timeline-content .content-body .timeline-text .timestamp {
    font-size: 0.9rem;
    color: #999
}

.timeline .timeline-item .timeline-content:before {
    content: '';
    position: absolute;
    left: 45%;
    top: 20px;
    width: 0;
    height: 0;
    border-top: 7px solid transparent;
    border-bottom: 7px solid transparent;
    border-left: 7px solid #fff
}

.timeline .timeline-item .timeline-content.right {
    float: right
}

.timeline .timeline-item .timeline-content.right:before {
    content: '';
    right: 45%;
    left: inherit;
    border-left: 0;
    border-right: 7px solid #fff
}

.timeline.doted .timeline-icon {
    background: white;
    border: 2px solid #ededed;
    width: 14px;
    height: 14px;
    position: absolute;
    top: 22%;
    overflow: hidden;
    margin: -5px;
    cursor: pointer;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    -webkit-box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    -ms-box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18);
    box-shadow: 0px 5px 43px rgba(0, 0, 0, 0.18)
}

@media screen and (max-width: 768px) {
    .timeline {
        margin: 10px;
        padding: 0px;
        width: 100%
    }

    .timeline:before {
        left: 0
    }

    .timeline .timeline-item .timeline-content {
        width: 90%;
        float: right
    }

    .timeline .timeline-item .timeline-content:before, .timeline .timeline-item .timeline-content.right:before {
        left: 10%;
        margin-left: -6px;
        border-left: 0;
        border-right: 7px solid #fff
    }

    .timeline .timeline-item .timeline-icon {
        left: 0
    }

    .timeline.doted .timeline-icon {
        left: 0
    }
}

.simple-feed {
    padding: 15px;
    list-style: none
}

.simple-feed a {
    color: #536dfe
}

.simple-feed .feed-item {
    position: relative;
    top: -10px;
    padding-bottom: 40px;
    padding-left: 30px;
    border-left: 2px solid #ededed;
    display: flex;
    align-items: center
}

.simple-feed .feed-item .name {
    font-weight: 600;
    color: #444F60
}

.simple-feed .feed-item img {
    border-radius: 100px;
    width: 45px;
    height: 45px
}

.simple-feed .feed-item .feed-item-text {
    margin-left: 15px
}

.simple-feed .feed-item::after {
    content: "";
    display: block;
    position: absolute;
    top: 20%;
    left: -8px;
    width: 14px;
    height: 14px;
    border-radius: 100px;
    background: #fff;
    border: 2px solid #ededed
}

.simple-feed .feed-item .date {
    display: block;
    position: relative;
    top: -5px;
    color: #999;
    text-transform: none;
    font-size: 13px
}

.simple-feed .feed-item .text {
    position: relative;
    top: -3px
}

/*! _switch.scss | Bulkit | CSS Ninja */
.switch[type="checkbox"] {
    outline: 0;
    user-select: none;
    display: none;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%
}

.switch[type="checkbox"][disabled] {
    cursor: not-allowed
}

.switch[type="checkbox"][disabled] + label {
    opacity: 0.5
}

.switch[type="checkbox"][disabled] + label::before {
    opactiy: 0.5
}

.switch[type="checkbox"][disabled] + label::after {
    opactiy: 0.5
}

.switch[type="checkbox"][disabled] + label:hover, .switch[type="checkbox"][disabled] + label.is-hovered {
    cursor: not-allowed
}

.switch[type="checkbox"] + label {
    position: relative;
    display: initial;
    font-size: 1.2rem;
    line-height: initial;
    padding-left: 4.1rem;
    padding-top: 0.2rem;
    cursor: pointer
}

.switch[type="checkbox"] + label::before {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 3.6rem;
    height: 1.8rem;
    border: 0.1rem solid transparent;
    border-radius: 100px;
    background: #ededed;
    content: ""
}

.switch[type="checkbox"] + label::after {
    display: block;
    position: absolute;
    top: .25rem;
    left: .25rem;
    width: 1.3rem;
    height: 1.3rem;
    transform: translate3d(0, 0, 0);
    border-radius: 100px;
    background: #fff;
    transition: all 0.25s ease-out;
    content: ""
}

.switch[type="checkbox"].is-rtl + label {
    padding-left: 0;
    padding-right: 4.1rem
}

.switch[type="checkbox"].is-rtl + label::before {
    left: auto;
    right: 0
}

.switch[type="checkbox"].is-rtl + label::after {
    left: auto;
    right: .25rem
}

.switch[type="checkbox"]:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(237, 237, 237, 0.25)
}

.switch[type="checkbox"]:hover + label::before {
    background: #e7e7e7
}

.switch[type="checkbox"]:active + label::before {
    background: #e0e0e0
}

.switch[type="checkbox"]:checked + label::before {
    background: #878787
}

.switch[type="checkbox"]:checked + label::after {
    left: 1.925rem
}

.switch[type="checkbox"]:checked.is-rtl + label::after {
    left: auto;
    right: 1.925rem
}

.switch[type="checkbox"]:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(135, 135, 135, 0.25)
}

.switch[type="checkbox"]:checked:hover + label::before {
    background: #818181
}

.switch[type="checkbox"]:checked:active + label::before {
    background: #7a7a7a
}

.switch[type="checkbox"].is-outlined + label::before {
    background-color: transparent;
    border-color: #ededed
}

.switch[type="checkbox"].is-outlined + label::after {
    background: #ededed
}

.switch[type="checkbox"].is-outlined:hover + label::before {
    border-color: #e7e7e7
}

.switch[type="checkbox"].is-outlined:hover + label::after {
    background: #e7e7e7
}

.switch[type="checkbox"].is-outlined:active + label::before {
    border-color: #e7e7e7
}

.switch[type="checkbox"].is-outlined:active + label::after {
    background: #e0e0e0
}

.switch[type="checkbox"].is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #878787
}

.switch[type="checkbox"].is-outlined:checked + label::after {
    background: #878787
}

.switch[type="checkbox"].is-outlined:checked:hover + label::before {
    border-color: #818181
}

.switch[type="checkbox"].is-outlined:checked:hover + label::after {
    background: #818181
}

.switch[type="checkbox"].is-outlined:checked:active + label::before {
    border-color: #818181
}

.switch[type="checkbox"].is-outlined:checked:active + label::after {
    background: #7a7a7a
}

.switch[type="checkbox"].is-thin + label::before {
    top: .6545454545rem;
    height: .45rem
}

.switch[type="checkbox"].is-thin + label::after {
    box-shadow: 0px 0px 3px #878787
}

.switch[type="checkbox"].is-small + label {
    position: relative;
    display: initial;
    font-size: 1rem;
    line-height: initial;
    padding-left: 3.5rem;
    padding-top: 0.2rem;
    cursor: pointer
}

.switch[type="checkbox"].is-small + label::before {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 3rem;
    height: 1.5rem;
    border: 0.1rem solid transparent;
    border-radius: 100px;
    background: #ededed;
    content: ""
}

.switch[type="checkbox"].is-small + label::after {
    display: block;
    position: absolute;
    top: .25rem;
    left: .25rem;
    width: 1rem;
    height: 1rem;
    transform: translate3d(0, 0, 0);
    border-radius: 100px;
    background: #fff;
    transition: all 0.25s ease-out;
    content: ""
}

.switch[type="checkbox"].is-small.is-rtl + label {
    padding-left: 0;
    padding-right: 3.5rem
}

.switch[type="checkbox"].is-small.is-rtl + label::before {
    left: auto;
    right: 0
}

.switch[type="checkbox"].is-small.is-rtl + label::after {
    left: auto;
    right: .25rem
}

.switch[type="checkbox"].is-small:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(237, 237, 237, 0.25)
}

.switch[type="checkbox"].is-small:hover + label::before {
    background: #e7e7e7
}

.switch[type="checkbox"].is-small:active + label::before {
    background: #e0e0e0
}

.switch[type="checkbox"].is-small:checked + label::before {
    background: #878787
}

.switch[type="checkbox"].is-small:checked + label::after {
    left: 1.625rem
}

.switch[type="checkbox"].is-small:checked.is-rtl + label::after {
    left: auto;
    right: 1.625rem
}

.switch[type="checkbox"].is-small:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(135, 135, 135, 0.25)
}

.switch[type="checkbox"].is-small:checked:hover + label::before {
    background: #818181
}

.switch[type="checkbox"].is-small:checked:active + label::before {
    background: #7a7a7a
}

.switch[type="checkbox"].is-small.is-outlined + label::before {
    background-color: transparent;
    border-color: #ededed
}

.switch[type="checkbox"].is-small.is-outlined + label::after {
    background: #ededed
}

.switch[type="checkbox"].is-small.is-outlined:hover + label::before {
    border-color: #e7e7e7
}

.switch[type="checkbox"].is-small.is-outlined:hover + label::after {
    background: #e7e7e7
}

.switch[type="checkbox"].is-small.is-outlined:active + label::before {
    border-color: #e7e7e7
}

.switch[type="checkbox"].is-small.is-outlined:active + label::after {
    background: #e0e0e0
}

.switch[type="checkbox"].is-small.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #878787
}

.switch[type="checkbox"].is-small.is-outlined:checked + label::after {
    background: #878787
}

.switch[type="checkbox"].is-small.is-outlined:checked:hover + label::before {
    border-color: #818181
}

.switch[type="checkbox"].is-small.is-outlined:checked:hover + label::after {
    background: #818181
}

.switch[type="checkbox"].is-small.is-outlined:checked:active + label::before {
    border-color: #818181
}

.switch[type="checkbox"].is-small.is-outlined:checked:active + label::after {
    background: #7a7a7a
}

.switch[type="checkbox"].is-small.is-thin + label::before {
    top: .5454545455rem;
    height: .375rem
}

.switch[type="checkbox"].is-small.is-thin + label::after {
    box-shadow: 0px 0px 3px #878787
}

.switch[type="checkbox"].is-medium + label {
    position: relative;
    display: initial;
    font-size: 1.5rem;
    line-height: initial;
    padding-left: 5rem;
    padding-top: 0.2rem;
    cursor: pointer
}

.switch[type="checkbox"].is-medium + label::before {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 4.5rem;
    height: 2.25rem;
    border: 0.1rem solid transparent;
    border-radius: 100px;
    background: #ededed;
    content: ""
}

.switch[type="checkbox"].is-medium + label::after {
    display: block;
    position: absolute;
    top: .25rem;
    left: .25rem;
    width: 1.75rem;
    height: 1.75rem;
    transform: translate3d(0, 0, 0);
    border-radius: 100px;
    background: #fff;
    transition: all 0.25s ease-out;
    content: ""
}

.switch[type="checkbox"].is-medium.is-rtl + label {
    padding-left: 0;
    padding-right: 5rem
}

.switch[type="checkbox"].is-medium.is-rtl + label::before {
    left: auto;
    right: 0
}

.switch[type="checkbox"].is-medium.is-rtl + label::after {
    left: auto;
    right: .25rem
}

.switch[type="checkbox"].is-medium:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(237, 237, 237, 0.25)
}

.switch[type="checkbox"].is-medium:hover + label::before {
    background: #e7e7e7
}

.switch[type="checkbox"].is-medium:active + label::before {
    background: #e0e0e0
}

.switch[type="checkbox"].is-medium:checked + label::before {
    background: #878787
}

.switch[type="checkbox"].is-medium:checked + label::after {
    left: 2.375rem
}

.switch[type="checkbox"].is-medium:checked.is-rtl + label::after {
    left: auto;
    right: 2.375rem
}

.switch[type="checkbox"].is-medium:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(135, 135, 135, 0.25)
}

.switch[type="checkbox"].is-medium:checked:hover + label::before {
    background: #818181
}

.switch[type="checkbox"].is-medium:checked:active + label::before {
    background: #7a7a7a
}

.switch[type="checkbox"].is-medium.is-outlined + label::before {
    background-color: transparent;
    border-color: #ededed
}

.switch[type="checkbox"].is-medium.is-outlined + label::after {
    background: #ededed
}

.switch[type="checkbox"].is-medium.is-outlined:hover + label::before {
    border-color: #e7e7e7
}

.switch[type="checkbox"].is-medium.is-outlined:hover + label::after {
    background: #e7e7e7
}

.switch[type="checkbox"].is-medium.is-outlined:active + label::before {
    border-color: #e7e7e7
}

.switch[type="checkbox"].is-medium.is-outlined:active + label::after {
    background: #e0e0e0
}

.switch[type="checkbox"].is-medium.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #878787
}

.switch[type="checkbox"].is-medium.is-outlined:checked + label::after {
    background: #878787
}

.switch[type="checkbox"].is-medium.is-outlined:checked:hover + label::before {
    border-color: #818181
}

.switch[type="checkbox"].is-medium.is-outlined:checked:hover + label::after {
    background: #818181
}

.switch[type="checkbox"].is-medium.is-outlined:checked:active + label::before {
    border-color: #818181
}

.switch[type="checkbox"].is-medium.is-outlined:checked:active + label::after {
    background: #7a7a7a
}

.switch[type="checkbox"].is-medium.is-thin + label::before {
    top: .8181818182rem;
    height: .5625rem
}

.switch[type="checkbox"].is-medium.is-thin + label::after {
    box-shadow: 0px 0px 3px #878787
}

.switch[type="checkbox"].is-large + label {
    position: relative;
    display: initial;
    font-size: 1.8rem;
    line-height: initial;
    padding-left: 5.9rem;
    padding-top: 0.2rem;
    cursor: pointer
}

.switch[type="checkbox"].is-large + label::before {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 5.4rem;
    height: 2.7rem;
    border: 0.1rem solid transparent;
    border-radius: 100px;
    background: #ededed;
    content: ""
}

.switch[type="checkbox"].is-large + label::after {
    display: block;
    position: absolute;
    top: .25rem;
    left: .25rem;
    width: 2.2rem;
    height: 2.2rem;
    transform: translate3d(0, 0, 0);
    border-radius: 100px;
    background: #fff;
    transition: all 0.25s ease-out;
    content: ""
}

.switch[type="checkbox"].is-large.is-rtl + label {
    padding-left: 0;
    padding-right: 5.9rem
}

.switch[type="checkbox"].is-large.is-rtl + label::before {
    left: auto;
    right: 0
}

.switch[type="checkbox"].is-large.is-rtl + label::after {
    left: auto;
    right: .25rem
}

.switch[type="checkbox"].is-large:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(237, 237, 237, 0.25)
}

.switch[type="checkbox"].is-large:hover + label::before {
    background: #e7e7e7
}

.switch[type="checkbox"].is-large:active + label::before {
    background: #e0e0e0
}

.switch[type="checkbox"].is-large:checked + label::before {
    background: #878787
}

.switch[type="checkbox"].is-large:checked + label::after {
    left: 2.825rem
}

.switch[type="checkbox"].is-large:checked.is-rtl + label::after {
    left: auto;
    right: 2.825rem
}

.switch[type="checkbox"].is-large:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(135, 135, 135, 0.25)
}

.switch[type="checkbox"].is-large:checked:hover + label::before {
    background: #818181
}

.switch[type="checkbox"].is-large:checked:active + label::before {
    background: #7a7a7a
}

.switch[type="checkbox"].is-large.is-outlined + label::before {
    background-color: transparent;
    border-color: #ededed
}

.switch[type="checkbox"].is-large.is-outlined + label::after {
    background: #ededed
}

.switch[type="checkbox"].is-large.is-outlined:hover + label::before {
    border-color: #e7e7e7
}

.switch[type="checkbox"].is-large.is-outlined:hover + label::after {
    background: #e7e7e7
}

.switch[type="checkbox"].is-large.is-outlined:active + label::before {
    border-color: #e7e7e7
}

.switch[type="checkbox"].is-large.is-outlined:active + label::after {
    background: #e0e0e0
}

.switch[type="checkbox"].is-large.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #878787
}

.switch[type="checkbox"].is-large.is-outlined:checked + label::after {
    background: #878787
}

.switch[type="checkbox"].is-large.is-outlined:checked:hover + label::before {
    border-color: #818181
}

.switch[type="checkbox"].is-large.is-outlined:checked:hover + label::after {
    background: #818181
}

.switch[type="checkbox"].is-large.is-outlined:checked:active + label::before {
    border-color: #818181
}

.switch[type="checkbox"].is-large.is-outlined:checked:active + label::after {
    background: #7a7a7a
}

.switch[type="checkbox"].is-large.is-thin + label::before {
    top: .9818181818rem;
    height: .675rem
}

.switch[type="checkbox"].is-large.is-thin + label::after {
    box-shadow: 0px 0px 3px #878787
}

.switch[type="checkbox"].is-primary:checked + label::before {
    background: #00D1B2
}

.switch[type="checkbox"].is-primary:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25)
}

.switch[type="checkbox"].is-primary:checked:hover + label::before {
    background: #00c4a7
}

.switch[type="checkbox"].is-primary:checked:active + label::before {
    background: #00b89c
}

.switch[type="checkbox"].is-primary.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #00D1B2
}

.switch[type="checkbox"].is-primary.is-outlined:checked + label::after {
    background: #00D1B2
}

.switch[type="checkbox"].is-primary.is-outlined:checked:hover + label::before {
    border-color: #00c4a7
}

.switch[type="checkbox"].is-primary.is-outlined:checked:hover + label::after {
    background: #00c4a7
}

.switch[type="checkbox"].is-primary.is-outlined:checked:active + label::before {
    border-color: #00c4a7
}

.switch[type="checkbox"].is-primary.is-outlined:checked:active + label::after {
    background: #00b89c
}

.switch[type="checkbox"].is-primary.is-thin.is-outlined + label::after {
    box-shadow: none
}

.switch[type="checkbox"].is-secondary:checked + label::before {
    background: #7F00FF
}

.switch[type="checkbox"].is-secondary:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(127, 0, 255, 0.25)
}

.switch[type="checkbox"].is-secondary:checked:hover + label::before {
    background: #7900f2
}

.switch[type="checkbox"].is-secondary:checked:active + label::before {
    background: #7200e6
}

.switch[type="checkbox"].is-secondary.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #7F00FF
}

.switch[type="checkbox"].is-secondary.is-outlined:checked + label::after {
    background: #7F00FF
}

.switch[type="checkbox"].is-secondary.is-outlined:checked:hover + label::before {
    border-color: #7900f2
}

.switch[type="checkbox"].is-secondary.is-outlined:checked:hover + label::after {
    background: #7900f2
}

.switch[type="checkbox"].is-secondary.is-outlined:checked:active + label::before {
    border-color: #7900f2
}

.switch[type="checkbox"].is-secondary.is-outlined:checked:active + label::after {
    background: #7200e6
}

.switch[type="checkbox"].is-secondary.is-thin.is-outlined + label::after {
    box-shadow: none
}

.switch[type="checkbox"].is-accent:checked + label::before {
    background: #536dfe
}

.switch[type="checkbox"].is-accent:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(83, 109, 254, 0.25)
}

.switch[type="checkbox"].is-accent:checked:hover + label::before {
    background: #4662fe
}

.switch[type="checkbox"].is-accent:checked:active + label::before {
    background: #3a57fe
}

.switch[type="checkbox"].is-accent.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #536dfe
}

.switch[type="checkbox"].is-accent.is-outlined:checked + label::after {
    background: #536dfe
}

.switch[type="checkbox"].is-accent.is-outlined:checked:hover + label::before {
    border-color: #4662fe
}

.switch[type="checkbox"].is-accent.is-outlined:checked:hover + label::after {
    background: #4662fe
}

.switch[type="checkbox"].is-accent.is-outlined:checked:active + label::before {
    border-color: #4662fe
}

.switch[type="checkbox"].is-accent.is-outlined:checked:active + label::after {
    background: #3a57fe
}

.switch[type="checkbox"].is-accent.is-thin.is-outlined + label::after {
    box-shadow: none
}

.switch[type="checkbox"].is-info:checked + label::before {
    background: #039BE5
}

.switch[type="checkbox"].is-info:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(3, 155, 229, 0.25)
}

.switch[type="checkbox"].is-info:checked:hover + label::before {
    background: #0392d8
}

.switch[type="checkbox"].is-info:checked:active + label::before {
    background: #038acc
}

.switch[type="checkbox"].is-info.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #039BE5
}

.switch[type="checkbox"].is-info.is-outlined:checked + label::after {
    background: #039BE5
}

.switch[type="checkbox"].is-info.is-outlined:checked:hover + label::before {
    border-color: #0392d8
}

.switch[type="checkbox"].is-info.is-outlined:checked:hover + label::after {
    background: #0392d8
}

.switch[type="checkbox"].is-info.is-outlined:checked:active + label::before {
    border-color: #0392d8
}

.switch[type="checkbox"].is-info.is-outlined:checked:active + label::after {
    background: #038acc
}

.switch[type="checkbox"].is-info.is-thin.is-outlined + label::after {
    box-shadow: none
}

.switch[type="checkbox"].is-success:checked + label::before {
    background: #00b289
}

.switch[type="checkbox"].is-success:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(0, 178, 137, 0.25)
}

.switch[type="checkbox"].is-success:checked:hover + label::before {
    background: #00a57f
}

.switch[type="checkbox"].is-success:checked:active + label::before {
    background: #009975
}

.switch[type="checkbox"].is-success.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #00b289
}

.switch[type="checkbox"].is-success.is-outlined:checked + label::after {
    background: #00b289
}

.switch[type="checkbox"].is-success.is-outlined:checked:hover + label::before {
    border-color: #00a57f
}

.switch[type="checkbox"].is-success.is-outlined:checked:hover + label::after {
    background: #00a57f
}

.switch[type="checkbox"].is-success.is-outlined:checked:active + label::before {
    border-color: #00a57f
}

.switch[type="checkbox"].is-success.is-outlined:checked:active + label::after {
    background: #009975
}

.switch[type="checkbox"].is-success.is-thin.is-outlined + label::after {
    box-shadow: none
}

.switch[type="checkbox"].is-warning:checked + label::before {
    background: #eda514
}

.switch[type="checkbox"].is-warning:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(237, 165, 20, 0.25)
}

.switch[type="checkbox"].is-warning:checked:hover + label::before {
    background: #e39d11
}

.switch[type="checkbox"].is-warning:checked:active + label::before {
    background: #d79510
}

.switch[type="checkbox"].is-warning.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #eda514
}

.switch[type="checkbox"].is-warning.is-outlined:checked + label::after {
    background: #eda514
}

.switch[type="checkbox"].is-warning.is-outlined:checked:hover + label::before {
    border-color: #e39d11
}

.switch[type="checkbox"].is-warning.is-outlined:checked:hover + label::after {
    background: #e39d11
}

.switch[type="checkbox"].is-warning.is-outlined:checked:active + label::before {
    border-color: #e39d11
}

.switch[type="checkbox"].is-warning.is-outlined:checked:active + label::after {
    background: #d79510
}

.switch[type="checkbox"].is-warning.is-thin.is-outlined + label::after {
    box-shadow: none
}

.switch[type="checkbox"].is-danger:checked + label::before {
    background: #FF7273
}

.switch[type="checkbox"].is-danger:checked:focus:not(:active) + label::before {
    box-shadow: 0 0 0 0.125em rgba(255, 114, 115, 0.25)
}

.switch[type="checkbox"].is-danger:checked:hover + label::before {
    background: #ff6566
}

.switch[type="checkbox"].is-danger:checked:active + label::before {
    background: #ff595a
}

.switch[type="checkbox"].is-danger.is-outlined:checked + label::before {
    background-color: transparent;
    border-color: #FF7273
}

.switch[type="checkbox"].is-danger.is-outlined:checked + label::after {
    background: #FF7273
}

.switch[type="checkbox"].is-danger.is-outlined:checked:hover + label::before {
    border-color: #ff6566
}

.switch[type="checkbox"].is-danger.is-outlined:checked:hover + label::after {
    background: #ff6566
}

.switch[type="checkbox"].is-danger.is-outlined:checked:active + label::before {
    border-color: #ff6566
}

.switch[type="checkbox"].is-danger.is-outlined:checked:active + label::after {
    background: #ff595a
}

.switch[type="checkbox"].is-danger.is-thin.is-outlined + label::after {
    box-shadow: none
}

.no-touch .scrollable.hover {
    overflow-y: hidden
}

.no-touch .scrollable.hover:hover {
    overflow-y: auto;
    overflow: visible
}

a {
    color: #7F00FF
}

a:hover {
    color: #536dfe;
    text-decoration: none
}

a:focus {
    text-decoration: none
}

nav {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none
}

nav ul, nav li {
    outline: 0;
    margin: 0;
    padding: 0
}

body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    overflow: hidden !important;
    background-color: #f4f6fb;
    margin: 0 !important;
    height: 100% !important
}

@font-face {
    
    src: url("../fonts/text/nexa/NexaLight.woff") format("woff"), url("../fonts/text/nexa/NexaLight.ttf") format("truetype")
}

@font-face {
    font-family: 'Nexa Bold';
    font-weight: bold;
    src: url("../fonts/text/nexa/NexaBold.woff") format("woff"), url("../fonts/text/nexa/NexaBold.ttf") format("truetype")
}

.columns.dashboard-columns .column {
    padding-top: 0;
    padding-bottom: 0
}

#dashboard-wrapper, .dashboard-wrapper, .dashboard-nav {
    -webkit-transition: all .3s;
    transition: all .3s
}

#dashboard-wrapper {
    padding-top: 20px
}

.content.column {
    padding: 12px 0 0 0 !important
}

.dashboard-wrapper {
    padding: 60px 20px 0 20px;
    margin-left: 80px;
    min-height: 100vh
}

.dashboard-wrapper h3.popover-title {
    margin-top: 0 !important
}

.dashboard-wrapper .flex-card.is-squared {
    max-height: 270px
}

.dashboard-wrapper .flex-card .material-header {
    padding: 10px 20px;
    margin: 0 20px;
    margin-top: -10px;
    border-radius: 4px
}

.dashboard-wrapper .flex-card .material-header h3 {
    font-weight: 500;
    color: #fff;
    padding-bottom: 10px
}

.dashboard-wrapper .flex-card .material-header.is-primary {
    background: #00D1B2;
    box-shadow: 0 14px 26px -12px rgba(0, 209, 178, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 209, 178, 0.2) !important
}

.dashboard-wrapper .flex-card .material-header.is-secondary {
    background: #7F00FF;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.dashboard-wrapper .flex-card .icon-header i {
    padding: 22px;
    font-size: 24px;
    font-weight: normal;
    color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 10px;
    top: -20px
}

.dashboard-wrapper .flex-card .icon-header i.primary {
    background-color: #00D1B2;
    box-shadow: 0 14px 26px -12px rgba(0, 209, 178, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 209, 178, 0.2) !important
}

.dashboard-wrapper .flex-card .icon-header i.secondary {
    background-color: #7F00FF;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.dashboard-wrapper .flex-card .icon-header i.accent {
    background-color: #536dfe;
    box-shadow: 0 14px 26px -12px rgba(83, 109, 254, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(83, 109, 254, 0.2) !important
}

.dashboard-wrapper .flex-card .header-control {
    position: absolute;
    right: 0;
    top: 15px
}

.dashboard-wrapper .flex-card .header-control i.sl-icon-arrow-down {
    padding: 20px;
    color: #A9ABAC
}

.dashboard-wrapper .flex-card .header-control ul {
    margin-left: 0;
    margin-top: 0
}

.dashboard-wrapper .flex-card .header-control ul li:hover {
    background: #7F00FF !important;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important;
    color: #fff !important
}

.dashboard-wrapper .flex-card .header-control .dropContain {
    left: -20px !important
}

.dashboard-wrapper .flex-card .card-heading {
    padding: 20px;
    color: #444F60;
    font-weight: 500;
    margin: 0 !important
}

.dashboard-wrapper .flex-card .card-heading.has-icon {
    display: flex;
    align-items: center;
    justify-content: space-between
}

.dashboard-wrapper .flex-card .card-heading.has-icon .sl {
    font-size: 1.1rem
}

.dashboard-wrapper .flex-card .card-heading.is-absolute {
    position: absolute;
    top: 10px;
    left: 10px
}

.dashboard-wrapper .flex-card .card-body-20 {
    padding: 20px
}

.dashboard-wrapper .flex-card .content {
    padding: 20px !important
}

.dashboard-wrapper .flex-card .content .card-title.is-tile {
    font-size: 1.45rem;
    color: #444F60;
    font-weight: 500;
    margin-top: 15px;
    float: right;
    position: relative;
    top: -20px
}

.dashboard-wrapper .flex-card .content .card-title.is-tile .card-stat {
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    margin-top: 5px;
    font-size: 20px
}

.dashboard-wrapper .flex-card .content .card-title.is-tile .card-stat.primary {
    color: #00D1B2
}

.dashboard-wrapper .flex-card .content .card-title.is-tile .card-stat.secondary {
    color: #7F00FF
}

.dashboard-wrapper .flex-card .content .card-title.is-tile .card-stat.accent {
    color: #536dfe
}

.dashboard-wrapper .flex-card .content .card-title.is-tile .card-stat .stat-type {
    font-size: 0.8rem !important
}

.dashboard-wrapper .flex-card .content.message-content h5 {
    margin-bottom: 0 !important
}

.dashboard-wrapper .flex-card .content.message-content h5.primary {
    color: #00D1B2
}

.dashboard-wrapper .flex-card .content.message-content h5.secondary {
    color: #7F00FF
}

.dashboard-wrapper .flex-card .more a {
    font-weight: 500;
    position: absolute;
    bottom: 10px;
    left: 20px;
    transition: color 0.4s
}

.dashboard-wrapper .flex-card .more a.primary {
    color: #A9ABAC
}

.dashboard-wrapper .flex-card .more a.primary:hover {
    color: #00D1B2
}

.dashboard-wrapper .flex-card .more a.secondary {
    color: #A9ABAC
}

.dashboard-wrapper .flex-card .more a.secondary:hover {
    color: #7F00FF
}

.dashboard-wrapper .flex-card .feed-icon {
    max-height: 60px;
    margin: 15px 0 10px 0;
    padding-left: 15px
}

.dashboard-wrapper .flex-card .timestamp {
    font-size: 10px;
    color: #A9ABAC;
    position: absolute;
    bottom: 10px;
    right: 20px
}

.dashboard-wrapper .flex-card .avatar-list a {
    display: inline-block
}

.dashboard-wrapper .flex-card .avatar-list a img {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    margin-right: 5px;
    margin-bottom: 10px
}

footer.footer {
    border-top: 1px solid #e5e5e5;
    margin-left: 80px
}

footer.footer .small-footer-logo {
    margin-top: 20px;
    height: 38px
}

footer.footer .more-info-company {
    ;
    font-size: 1.6rem;
    padding-top: 40px;
    color: #A9ABAC
}

.main-menu {
    background: var(--app-default-color);
    border-right: 1px solid  var(--app-default-color);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 80px;
    overflow: visible;
    -webkit-transition: width .05s linear;
    transition: width .05s linear;
    transition: transform 0.3s;
    z-index: 1000
}

.main-menu .main-menu-inner {
    height: 100%;
    position: relative;
    background: #0a0a0a1a;
}

.main-menu .main-menu-inner ul li {
    height: 65px;
    position: relative;
    display: flex;
    width: 100%
}

.main-menu .main-menu-inner ul li a {
    position: relative;
    display: table;
    border-collapse: collapse;
    border-spacing: 0;
    color: #999;
    font-family: arial;
    font-size: 14px;
    text-decoration: none;
    -webkit-transition: all .1s linear;
    transition: all .1s linear
}

.main-menu .main-menu-inner .side-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer
}

.main-menu .main-menu-inner .side-icon iron-icon {
    position: relative;
    font-size: 1.5rem;
    color: #ffffff;
}

.main-menu .main-menu-inner .side-icon.is-active iron-icon {
    color: var(--app-primary-color)
}

.main-menu .main-menu-inner .side-icon:hover iron-icon {
    color: #b7ec21;
}

.main-menu .main-menu-inner .main-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-color: white;
    box-shadow: 0 6px 10px 0 #666;
    text-align: center;
    z-index: 9002;
    transition: all 0.1s ease-in-out;
    max-width: 100%;
    max-height: 70px;
}
.main-menu .main-menu-inner .main-logo:hover {
                box-shadow: 0 6px 14px 0 #666;
                transform: scale(1.05);
}
.main-menu .main-menu-inner .main-logo img {
    object-fit: contain;
    width: 64px;
    height: 64px;
    /*margin-top: -5px;*/
    transition: opacity .3s
}

.main-menu .main-menu-inner .main-logo img:hover {
    opacity: 0.8
}

.main-menu .main-menu-inner .profile {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%
}

.main-menu .main-menu-inner .profile li {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative
}

.main-menu .main-menu-inner .profile a {
    position: relative;
    z-index: 4
}

.main-menu .main-menu-inner .profile .main-menu-avatar {
    width: 48px;
    height: 48px;
    border-radius: 100px;
    margin: 0 auto;
    margin-bottom: 20px;
    transform: scale(1);
    transition: transform .4s
}

.main-menu .main-menu-inner .profile .main-menu-avatar.vanish {
    transform: scale(0)
}

.main-menu .main-menu-inner .profile .dot {
    position: absolute;
    top: 1px;
    right: 0;
    width: 12px;
    height: 12px;
    border-radius: 100px;
    background: #00D1B2;
    transform: scale(1);
    transition: transform .4s
}

.main-menu .main-menu-inner .profile .dot.vanish {
    transform: scale(0)
}

.main-menu .main-menu-inner .profile .dot.is-busy {
    background: #eda514
}

.main-menu.is-dark {
    background: #344258;
    border-right: 1px solid #344258
}

.main-menu.is-dark ul li a {
    color: #fff
}

.main-menu.is-dark .side-icon i {
    color: #fff
}

.main-menu.is-dark .side-icon.is-active i, .main-menu.is-dark .side-icon:hover i {
    color: #00D1B2
}

.child-menu {
    background: var(--app-default-color);
    background-image: linear-gradient(to top, rgba(10, 10, 10, 0.14) 0%, #344258 100%);
    border-right: 3px solid #00000017;
    position: fixed;
    top: 0;
    bottom: 0;
    transform: translateX(-251px);
    left: 80px;
    width: 250px;
    overflow: hidden;
    -webkit-transition: all .3s;
    transition: all .3s;
    z-index: 999
}

.child-menu .child-menu-inner {
    height: 100%
}

.child-menu .child-menu-inner ul li {
    min-height: 65px
}

.child-menu .child-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-bottom: 1px solid ligthen(#7F00FF, 15%)
}

.child-menu .child-header .cross-container {
    margin-right: 15px;
    transform: scale(1.1)
}

.child-menu .sidebar-title {
    margin-right: auto;
    padding-left: 20px;
    font-size: 1.1rem;
    text-transform: uppercase;
    font-weight: 300;
    color: #fcfcfc;
    letter-spacing: 3px
}

.child-menu ul.sidebar-menu {
    margin: 0;
    padding: 7px 0;
    max-width: 400px;
    list-style: none;
    list-style-type: none;
    display: none
}

.child-menu ul.sidebar-menu.is-active {
    display: block
}

.child-menu .sidebar-menu li a span {
    margin-right: 20px;
    color: #fff
}

.child-menu .sidebar-menu li a {
    padding: 20px 25px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    color: #fff
}

.child-menu .sidebar-menu li a:hover {
    background-color: #7200e6;
    padding: 20px 25px;
    text-decoration: none;
    color: #fff
}

.child-menu li.have-children.active {
    background-color: #7200e6
}

.child-menu li.have-children ul {
    padding: 0;
    background-color: #60c
}

.child-menu li.have-children ul li {
    min-height: 10px !important
}

.child-menu li.have-children ul li a {
    background-color: #4c0099;
    padding: 12px 25px 12px 62px
}

.child-menu li.have-children ul li a span {
    margin-left: auto;
    margin-right: 10px
}

.child-menu li.have-children ul li a span:after {
    content: ''
}

.child-menu li.have-children ul li a:hover, .child-menu li.have-children ul li.is-active a {
    color: #fff;
    background-color: #400080;
    padding: 12px 25px 12px 62px
}

.child-menu li.have-children, .child-menu li {
    position: relative
}

.child-menu .have-children span::after {
    position: absolute;
    top: 21px;
    right: 30px;
    content: "\\E409";
    color: #fff;
    transition: all .5s
}

.child-menu li.active.have-children span::after {
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg)
}

.child-menu .sidebar-menu .have-children > ul {
    display: none
}

.is-sidebar-translated {
    transform: translateX(0)
}

.fab {
    width: 48px;
    height: 48px;
    background-color: transparent;
    border-radius: 50%;
    position: fixed;
    bottom: 22px;
    left: 14px;
    cursor: pointer
}

.fab.is-active .hamburger {
    background-color: transparent;
    transform: translateX(-50%) translateY(-50%) rotate(180deg)
}

.fab.is-active .hamburger:before {
    transform: translateY(0) rotate(45deg);
    background-color: #fff
}

.fab.is-active .hamburger:after {
    transform: translateY(0) rotate(-45deg);
    background-color: #fff
}

.fab.is-active .fab__ripple {
    transform: scale(1);
    -webkit-transform: scale(1);
    background-color: #7F00FF
}

.fab.is-active .profile-container {
    transform: scale(1);
    -webkit-transform: scale(1)
}

.fab__ripple {
    width: 450vw;
    height: 450vw;
    margin-top: -225vw;
    margin-left: -225vw;
    background-color: #7F00FF;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    z-index: 1;
    transform: scale(0.001) translateZ(0);
    -webkit-transform: scale(0.001) translateZ(0);
    transition: transform, opacity, visibility;
    transition: transform, opacity, visibility;
    -webkit-transition-duration: 0.7s, 0.3s, 0s;
    transition-delay: 0, 0.5s, 0;
    -webkit-transition-delay: 0, 0.5s, 0;
    transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    -webkit-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
    pointer-events: none
}

.hamburger {
    position: absolute;
    left: 50%;
    top: 50%;
    bottom: auto;
    right: auto;
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
    display: inline-block;
    width: 18px;
    height: 2px;
    background-color: #fff;
    z-index: 10;
    transition: 0.3s all cubic-bezier(0.77, 0, 0.175, 1)
}

.hamburger:before, .hamburger:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    transform: translateZ(0);
    backface-visibility: hidden;
    transition: transform 0.3s
}

.hamburger:before {
    transform: translateY(-6px) rotate(0deg)
}

.hamburger:after {
    transform: translateY(6px) rotate(0deg)
}

.profile-container {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 5;
    transition: transform .5s;
    -webkit-transition: transform .5s;
    transition-delay: .7s;
    -webkit-transition-delay: .7s;
    transform: scale(0);
    -webkit-transform: scale(0)
}

.profile-container .inner {
    position: relative;
    height: 100%;
    background: #fff;
    margin-left: 80px;
    padding: 10px 0;
    overflow: auto;
    overflow-x: hidden;
    cursor: default
}

.profile-container .inner::-webkit-scrollbar {
    width: 10px
}

.profile-container .inner::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.profile-container .container.is-fluid {
    margin: 0
}

.profile-container #profile-cover {
    position: relative;
    background-image: url(https://place-hold.it/1920x1280);
    background-size: cover;
    background-repeat: no-repeat
}

.profile-container #profile-cover .heading-wrapper {
    position: relative !important;
    z-index: 5 !important
}

.profile-container .cover-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5)
}

.profile-container .profile-heading {
    margin: 20px 20px;
    padding: 20px
}

.profile-container .profile-heading .name {
    margin: -30px 0;
    padding: 40px 30px 0 30px;
    color: #fff
}

.profile-container .profile-heading .followers, .profile-container .profile-heading .following {
    margin: -30px 0;
    padding: 70px 30px;
    color: #fff
}

.profile-container .profile-heading .likes {
    margin: -30px 0;
    padding: 70px 30px;
    color: #fff
}

.profile-container .profile-heading .stat-key {
    font-size: 20px;
    font-weight: 400;
    color: #fff
}

.profile-container .profile-heading .stat-val {
    font-size: 35px;
    font-weight: bold;
    color: #fff
}

.profile-container .profile-heading .avatar {
    margin: 0 auto;
    position: relative;
    overflow: hidden
}

.profile-container .profile-heading .avatar img {
    border-radius: 200px;
    margin: 0 auto
}

.profile-container .profile-heading .avatar .avatar-overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 200px;
    opacity: 0;
    transition: opacity 0.4s;
    background: rgba(0, 0, 0, 0.6)
}

.profile-container .profile-heading .avatar .avatar-overlay i {
    color: #fcfcfc;
    transform: translateY(60px);
    transition: transform 0.2s
}

.profile-container .profile-heading .avatar:hover .avatar-overlay {
    opacity: 1
}

.profile-container .profile-heading .avatar:hover .avatar-overlay i {
    transform: translateY(0)
}

.profile-container .profile-heading .title.is-bold {
    font-weight: 600;
    color: #fff
}

.profile-container .profile-heading .tagline {
    padding: 10px 0 10px 0;
    font-size: 16px;
    line-height: 1.4
}

.profile-container .profile-sections-wrapper #profile-view .flex-card.is-top, .profile-container .profile-sections-wrapper #edit-view .flex-card.is-top, .profile-container .profile-sections-wrapper #profile-notifications .flex-card.is-top, .profile-container .profile-sections-wrapper #profile-team .flex-card.is-top {
    margin-top: -50px;
    z-index: 99
}

.profile-container .profile-sections-wrapper #profile-view .edit-button {
    padding: 10px
}

.profile-container .profile-sections-wrapper #profile-view .info-section {
    margin-bottom: 40px
}

.profile-container .profile-sections-wrapper #profile-view .info-heading {
    font-size: 0.9rem;
    letter-spacing: 0.08em;
    font-weight: 300;
    color: #A9ABAC;
    text-shadow: 0 1px 1px #fff;
    text-transform: uppercase
}

.profile-container .profile-sections-wrapper #profile-view .info-divider {
    border-bottom: 1px solid #ededed;
    background-color: #ededed;
    height: 1px;
    margin: 0.5em 0px 1.5em
}

.profile-container .profile-sections-wrapper #profile-view .info-divider span {
    display: block;
    width: 50px;
    height: 1px;
    background-color: #ededed
}

.profile-container .profile-sections-wrapper #profile-view .info-item {
    margin-bottom: 15px
}

.profile-container .profile-sections-wrapper #profile-view .info-item .info-title {
    font-weight: 500;
    color: #444F60
}

.profile-container .profile-sections-wrapper #profile-view .info-item .info-title i {
    font-size: 1.3rem;
    color: #999
}

.profile-container .profile-sections-wrapper #profile-view .info-item .info-description {
    color: #878787
}

.profile-container .profile-sections-wrapper #profile-view .info-item .info-description.highlighted {
    color: #039BE5
}

.profile-container .profile-sections-wrapper #profile-view .info-item .taglist {
    display: flex;
    flex-wrap: wrap;
    align-items: center
}

.profile-container .profile-sections-wrapper #profile-view .info-item .taglist span {
    margin: 3px
}

.profile-container .profile-sections-wrapper #edit-view .cross-container {
    margin: 15px;
    position: absolute;
    top: 4px
}

.profile-container .profile-sections-wrapper #edit-view .cross-container span {
    background: #A9ABAC
}

.profile-container .profile-sections-wrapper #edit-view h3 {
    color: #444F60;
    font-weight: 400;
    padding-top: 10px
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    padding: 15px 0;
    border-bottom: 1px solid #ededed
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center li:hover .controls span {
    transform: translateX(0)
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center li.is-old {
    opacity: 0.4
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center li.is-old .controls span {
    color: #878787;
    border: 2px dashed #878787
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center li.is-old .controls span:hover {
    border: 2px solid #039BE5;
    color: #039BE5
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center .icon {
    display: inline-block;
    font-size: 2.6rem;
    height: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
    vertical-align: middle;
    width: 2.6rem;
    margin-right: 25px;
    color: #536dfe
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center .icon img {
    border-radius: 50%;
    max-width: 100%;
    max-height: 100%
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center .description {
    margin-right: 10px
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center .description .timestamp {
    font-size: 88%;
    color: #999
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center .controls {
    display: inherit;
    margin-left: auto
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center .controls span {
    display: inline-block;
    font-size: 1.4rem;
    height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
    vertical-align: middle;
    width: 3.5rem;
    margin-left: 10px;
    color: #ededed;
    border: 2px dashed #ededed;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.2s;
    transform: translateX(150px)
}

.profile-container .profile-sections-wrapper #profile-notifications .notifications-center .controls span:hover {
    border: 2px solid #039BE5;
    color: #039BE5
}

.profile-container .profile-sections-wrapper #profile-team .team-logo {
    text-align: center
}

.profile-container .profile-sections-wrapper #profile-team .team-logo img {
    width: 50%
}

.profile-container .profile-sections-wrapper #profile-team .team-number {
    margin-bottom: 10px;
    color: #999;
    text-transform: uppercase
}

.profile-container .profile-sections-wrapper #profile-team .team-number span {
    font-size: 2rem;
    font-weight: bolder;
    padding-right: 10px;
    color: #7F00FF
}

.profile-container .profile-sections-wrapper #profile-team .team-avatars {
    display: flex;
    justify-content: flex-start;
    align-items: center
}

.profile-container .profile-sections-wrapper #profile-team .team-avatars img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #fff;
    position: relative
}

.profile-container .profile-sections-wrapper #profile-team .team-avatars span {
    margin-left: 10px;
    font-size: 1.2rem;
    font-weight: bolder;
    color: #7F00FF
}

.profile-container .profile-sections-wrapper #profile-team .team-card .avatar {
    width: 100%;
    height: 80px;
    text-align: center
}

.profile-container .profile-sections-wrapper #profile-team .team-card .avatar img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 50%
}

.profile-container .profile-sections-wrapper #profile-team .team-card .card-body {
    padding: 10px 0 20px 0
}

.profile-container .profile-sections-wrapper #profile-team .team-card .user-id {
    text-align: center;
    margin-top: 15px
}

.profile-container .profile-sections-wrapper #profile-team .team-card .user-id .name {
    font-size: 1.1rem;
    font-weight: 600;
    color: #444F60
}

.profile-container .profile-sections-wrapper #profile-team .team-card .user-id .position {
    font-size: 95%;
    color: #999;
    padding-bottom: 5px
}

.profile-container .profile-sections-wrapper #profile-team .team-card .user-id .location {
    font-size: 85%;
    color: #536dfe
}

.profile-container .profile-sections-wrapper #profile-team .team-card .user-description {
    text-align: center;
    padding: 20px 20px;
    font-size: 85%;
    color: #A9ABAC
}

.profile-container .profile-sections-wrapper #profile-team .team-card a {
    display: block
}

.profile-container .profile-sections-wrapper #profile-team .team-card .card-action {
    padding: 0 20%
}

.profile-container .profile-sections-wrapper #profile-team .team-card:hover {
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
    transform: scale(1.01)
}

.is-pushed {
    transform: translateX(250px)
}

nav.dashboard-nav {
display:block;
    margin-left: 80px;
    position: fixed;
    width: 100%;
    right: 0;
    left: 0;
    max-width: calc(100% - 80px)
}

nav.dashboard-nav .container.is-fluid {
    margin: 0;
    height: 65px
}

nav.dashboard-nav .nav-right {
    padding-right: 0
}

nav.dashboard-nav .chat-button {
    width: 65px;
    background: #00D1B2;
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    justify-content: center;
    align-items: center
}

nav.dashboard-nav .chat-button i {
    color: #fff !important;
    font-weight: 900 !important
}

nav.dashboard-nav .chat-button:hover {
    opacity: 0.9
}

nav.dashboard-nav .logout-button {
    width: 65px;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    justify-content: center;
    align-items: center
}

nav.dashboard-nav .logout-button i {
    color: #A9ABAC !important;
    margin-left: 0 !important;
    top: 0 !important
}

nav.dashboard-nav .logout-button:hover {
    background: #EFF4F7
}

nav.dashboard-nav .logout-button:hover i {
    color: #7F00FF !important
}

nav.dashboard-nav .nav-toggle {
    height: 65px !important;
    width: 65px !important
}

nav.dashboard-nav .nav-item.is-drop.nav-icon:hover {
    border-bottom: none !important
}

nav.dashboard-nav .nav-icon {
    width: 65px;
    height: 65px
}

nav.dashboard-nav .nav-icon i {
    font-size: 20px;
    font-weight: normal;
    color: #A9ABAC;
    position: relative;
    top: 2px;
    cursor: pointer;
    transition: all 0.5s
}

nav.dashboard-nav .nav-icon i.is-active {
    color: #7F00FF
}

nav.dashboard-nav .nav-icon:hover i {
    color: #7F00FF
}

nav.dashboard-nav .account {
    position: relative;
    right: 20px;
    margin-left: 30px
}

nav.dashboard-nav .account .nav-item {
    border-bottom: 1px solid transparent !important
}

nav.dashboard-nav .account img.account-avatar {
    max-height: 40px;
    border-radius: 50px;
    border: 1px solid #EFF4F7
}

nav.dashboard-nav .account div a {
    color: #66676b !important
}

nav.dashboard-nav .account div a i {
    position: relative;
    top: 2px;
    left: 10px;
    font-size: 8px;
    color: #66676b
}

nav.dashboard-nav .account .dropOut ul {
    margin-left: 0 !important
}

nav.dashboard-nav .nav-item.is-tab {
    color: #A9ABAC
}

nav.dashboard-nav .nav-item.is-tab:hover {
    border-bottom: 1px solid #00D1B2 !important;
    color: #A9ABAC !important
}

nav.dashboard-nav .nav-item.is-tab.is-active {
    border-bottom: 3px solid #00D1B2 !important;
    color: #00D1B2 !important
}

nav.dashboard-nav .nav-item.is-tab.is-active:hover {
    border-bottom: 3px solid #00D1B2 !important
}

nav.dashboard-nav .nav-item .new-circle {
    width: 8px;
    height: 8px;
    left: 17px;
    top: -8px;
    position: absolute;
    border-radius: 50px;
    background-color: #00D1B2
}

nav.dashboard-nav .nav-item.reader-switch .field {
    padding-top: 7px
}

.searchbox input {
    padding-left: 3rem !important;
    width: 250px;
    border-radius: 100px;
    height: 2.5rem
}

.searchbox input::-webkit-input-placeholder {
    color: #cecece
}

.searchbox input::-moz-placeholder {
    color: #cecece
}

.searchbox input:-ms-input-placeholder {
    color: #cecece
}

.searchbox input:-moz-placeholder {
    color: #cecece
}

.searchbox input:focus {
    box-shadow: inset rgba(143, 160, 241, 0.2) 0 0 0 1px, rgba(213, 220, 247, 0.59) 0 10px 20px
}

.searchbox .icon.is-left {
    top: 0.8rem;
    font-size: 18px
}

.searchbox .icon.is-left i {
    top: -3px
}

#search-modal .modal-content {
    padding: 30px 10px 0 10px
}

#search-modal .modal-content input {
    color: #fff;
    font-size: 2rem;
    padding-right: 50px
}

#search-modal .modal-content input::-webkit-input-placeholder {
    color: #fff
}

#search-modal .modal-content input::-moz-placeholder {
    color: #fff
}

#search-modal .modal-content input:-ms-input-placeholder {
    color: #fff
}

#search-modal .modal-content input:-moz-placeholder {
    color: #fff
}

#search-modal .modal-content .material-icons {
    font-size: 3rem;
    right: 0;
    top: 18px
}

#search-modal.is-active.modal-background {
    margin-left: inherit !important;
    margin-right: inherit !important;
    right: 20px !important;
    top: 20px !important;
    bottom: inherit !important
}

.drop-pop {
    position: relative
}

.drop-pop .drop-wrapper {
    position: absolute;
    top: 66px;
    right: 0;
    border-radius: 3px 3px 5px 5px;
    background: #fff;
    min-width: 250px;
    min-height: 100px;
    max-height: 300px;
    display: none;
    transition: opacity 0.3s;
    animation-duration: 0.2s;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04)
}

.drop-pop .drop-wrapper .drop-inner {
    position: relative;
    background: #fff;
    text-align: left;
    border: 1px solid #ededed;
    border-radius: 3px 3px 5px 5px;
    width: 100%;
    height: 100%
}

.drop-pop .drop-wrapper .drop-inner ul {
    padding: 10px 0
}

.drop-pop .drop-wrapper .drop-inner.has-arrow:after, .drop-pop .drop-wrapper .drop-inner.has-arrow:before {
    bottom: 100%;
    right: 7%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none
}

.drop-pop .drop-wrapper .drop-inner.has-arrow:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #fff;
    border-width: 8px;
    margin-left: -8px
}

.drop-pop .drop-wrapper .drop-inner.has-arrow:before {
    border-color: rgba(237, 237, 237, 0);
    border-bottom-color: #ededed;
    border-width: 9px;
    margin-left: -9px
}

.drop-pop .drop-wrapper.is-active {
    opacity: 1
}

.notifications-drop {
    width: 320px;
    right: -5px
}

.notifications-drop .notifications-header {
    width: 100%;
    padding: 10px 20px;
    background: #fff;
    border-bottom: 1px solid #ededed
}

.notifications-drop .notifications-header h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #A9ABAC
}

.notifications-drop .notifications-body {
    background: #f6f4ff;
    padding: 20px 10px 5px 8px;
    margin-left: -1px
}

.notifications-drop .notifications-body .notifications-list {
    padding: 0;
    position: relative
}

.notifications-drop .notifications-body .notifications-list li:after {
    content: '';
    width: 1.5px;
    left: 24px;
    height: 30px;
    background-color: #A9ABAC;
    position: absolute;
    opacity: 0.3
}

.notifications-drop .notifications-body .notifications-list li:first-child:before {
    content: '';
    width: 1.5px;
    left: 24px;
    top: -24px;
    height: 23px;
    background-color: #A9ABAC;
    position: absolute;
    opacity: 0.3
}

.notifications-drop .notifications-body .notifications-list li {
    margin-bottom: 30px;
    position: relative;
    cursor: pointer
}

.notifications-drop .notifications-body .notifications-list li i {
    width: 40px;
    height: 40px;
    display: block;
    text-align: center;
    line-height: 38px;
    font-size: 24px;
    color: #A9ABAC !important
}

.notifications-drop .notifications-body .notifications-list .notification-content {
    position: absolute;
    margin-left: 50px;
    margin-top: -45px;
    display: flex;
    align-items: center
}

.notifications-drop .notifications-body .notifications-list .notification-content img {
    width: 45px;
    height: 45px;
    max-height: 50px;
    border-radius: 50%
}

.notifications-drop .notifications-body .notifications-list .notification-content .notification-text .text {
    font-size: 90%;
    margin-left: 10px;
    color: #444F60
}

.notifications-drop .notifications-body .notifications-list .notification-content .notification-text .timestamp {
    font-size: 70%;
    margin-left: 10px;
    color: #A9ABAC;
    font-weight: 500
}

.emails-drop {
    width: 320px;
    right: -5px
}

.emails-drop .emails-header {
    width: 100%;
    padding: 10px 20px;
    background: #fff;
    border-bottom: 1px solid #ededed
}

.emails-drop .emails-header h3 {
    font-size: 1.3rem;
    font-weight: 600;
    color: #A9ABAC
}

.emails-drop .emails-body {
    background: #fcfcfc;
    padding: 20px 10px 5px 7px;
    margin-left: -1px
}

.emails-drop .emails-body .emails-list {
    padding: 0;
    position: relative
}

.emails-drop .emails-body .emails-list li:after {
    content: '';
    width: 1.5px;
    left: 24px;
    height: 18px;
    bottom: -24px;
    background-color: #A9ABAC;
    position: absolute;
    opacity: 0.3
}

.emails-drop .emails-body .emails-list li:first-child:before {
    content: '';
    width: 1.5px;
    left: 24px;
    top: -24px;
    height: 18px;
    background-color: #A9ABAC;
    position: absolute;
    opacity: 0.3
}

.emails-drop .emails-body .emails-list li {
    margin-bottom: 30px;
    position: relative;
    cursor: pointer
}

.emails-drop .emails-body .emails-list li img, .emails-drop .emails-body .emails-list li .fake-avatar {
    width: 40px;
    height: 40px;
    min-height: 40px;
    border-radius: 50%;
    display: block;
    text-align: center;
    line-height: 38px;
    font-size: 16px;
    font-weight: 600;
    color: #fff !important;
    margin-left: 4px;
    background: #999
}

.emails-drop .emails-body .emails-list li img.is-primary, .emails-drop .emails-body .emails-list li .fake-avatar.is-primary {
    background: #00D1B2
}

.emails-drop .emails-body .emails-list li img.is-secondary, .emails-drop .emails-body .emails-list li .fake-avatar.is-secondary {
    background: #7F00FF
}

.emails-drop .emails-body .emails-list .email-content {
    position: absolute;
    margin-left: 50px;
    margin-top: -45px;
    display: flex;
    align-items: center
}

.emails-drop .emails-body .emails-list .email-content .email-text .text {
    font-size: 90%;
    font-weight: 500;
    margin-left: 10px;
    color: #444F60
}

.emails-drop .emails-body .emails-list .email-content .email-text .text.is-read {
    opacity: 0.7;
    color: #A9ABAC;
    font-weight: 400
}

.emails-drop .emails-body .emails-list .email-content .email-text .timestamp {
    font-size: 70%;
    margin-right: 10px;
    color: #444F60;
    font-weight: 400;
    float: right
}

.quickview .tabs ul li a {
    height: 80px;
    border-bottom: 2px solid transparent;
    overflow: hidden
}

.quickview .tabs ul li a i {
    font-size: 1.4rem;
    transition: all 0.3s;
    transform: scale(0.8)
}

.quickview .tabs ul li:hover a {
    border-bottom: 2px solid #ededed !important
}

.quickview .tabs ul li.is-active a {
    border-bottom: 2px solid #7F00FF !important
}

.quickview .tabs ul li.is-active a i {
    color: #7F00FF;
    transform: scale(1)
}

.quickview .searchbox .field {
    width: 100%
}

.quickview .searchbox input {
    width: 100%
}

.quickview .panel-title {
    margin-top: -10px;
    margin-bottom: 20px;
    display: flex;
    align-items: center
}

.quickview .panel-title:hover i {
    color: #7F00FF
}

.quickview .panel-title h3 {
    font-weight: 500;
    color: #A9ABAC
}

.quickview .panel-title i {
    color: #A9ABAC;
    cursor: pointer
}

.quickview .user-list {
    padding: 20px 10px;
    max-height: 440px;
    overflow: auto;
    list-style-type: none
}

.quickview .user-list::-webkit-scrollbar {
    width: 10px
}

.quickview .user-list::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.quickview .user-list li {
    display: flex;
    align-items: center;
    padding: 5px 0;
    position: relative;
    margin-bottom: 10px;
    cursor: pointer
}

.quickview .user-list li:hover {
    background: #EFF4F7
}

.quickview .user-list img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin-left: 15px
}

.quickview .user-list .user-status {
    margin-left: 15px
}

.quickview .user-list .user-status .name {
    color: #444F60;
    font-weight: 500
}

.quickview .user-list .user-status .status {
    font-size: 80%;
    color: #999
}

.quickview .user-list .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #999;
    position: absolute;
    top: 6px;
    left: 46px
}

.quickview .user-list .status-dot.is-online {
    background: #00b289
}

.quickview .user-list .status-dot.is-busy {
    background: #eda514
}

.quickview #user-directory {
    padding-bottom: 0 !important
}

.quickview .reminders-list {
    list-style-type: none;
    max-height: 460px;
    overflow: auto
}

.quickview .reminders-list::-webkit-scrollbar {
    width: 10px
}

.quickview .reminders-list::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.quickview .reminders-list .reminder {
    position: relative;
    user-select: none;
    margin-bottom: 20px
}

.quickview .reminders-list .reminder .info i {
    position: relative;
    top: 5px;
    margin-right: 15px;
    color: #ededed
}

.quickview .reminders-list .reminder .info span i {
    color: #A9ABAC !important;
    top: -5px;
    font-size: 20px
}

.quickview .reminders-list .reminder .info .date {
    position: relative;
    top: -8px;
    font-size: 85%
}

.quickview .reminders-list .reminder.is-high .info i {
    color: #eda514
}

.quickview .reminders-list .reminder.is-high .info .date {
    color: #eda514
}

.quickview .reminders-list .reminder.is-medium .info i {
    color: #039BE5
}

.quickview .reminders-list .reminder.is-medium .info .date {
    color: #039BE5
}

.quickview .reminders-list .reminder.is-low .info i {
    color: #00b289
}

.quickview .reminders-list .reminder.is-low .info .date {
    color: #00b289
}

.quickview .reminders-list .reminder .reminder-content {
    font-size: 90%;
    color: #666;
    cursor: default
}

.quickview .reminders-list .reminder .reminder-controls {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 10px;
    margin-right: 30px
}

.quickview .reminders-list .reminder .reminder-controls i {
    margin: 0 0 0 10px;
    font-size: 16px;
    color: #A9ABAC;
    opacity: 0;
    transition: opacity 0.3s;
    cursor: pointer
}

.quickview .reminders-list .reminder .reminder-controls i:hover {
    color: #7F00FF
}

.quickview .reminders-list .reminder:hover .reminder-controls i {
    opacity: 1
}

.quickview .settings-list {
    list-style-type: none
}

.quickview .settings-list li {
    margin-top: 40px
}

.quickview .settings-list li .setting-header {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.quickview .settings-list li .setting-header .setting-title {
    font-weight: 500;
    color: #444F60
}

.quickview .settings-list li .setting-header .setting-control {
    position: relative;
    top: 4px
}

.quickview .settings-list li .setting-description {
    font-size: 85%;
    margin-top: 15px;
    color: #A9ABAC
}

.custom-quickview.chat-quickview {
    min-width: 400px;
    max-width: 400px;
    right: -410px
}

.custom-quickview.chat-quickview.is-active {
    right: 0 !important;
    z-index: 1000
}

.custom-quickview.chat-quickview .message-container {
    position: relative;
    overflow: auto;
    max-height: 650px;
    padding-bottom: 100px
}

.custom-quickview.chat-quickview .message-container .chat-message {
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center
}

.custom-quickview.chat-quickview .message-container .chat-message img {
    height: 35px;
    border-radius: 100px
}

.custom-quickview.chat-quickview .message-container .chat-message .bubble-wrapper {
    width: 100%
}

.custom-quickview.chat-quickview .message-container .chat-message .bubble-wrapper .chat-bubble {
    padding: 10px 20px 10px 20px;
    font-size: 12px;
    border: 1px solid #ededed;
    position: relative;
    top: 30px
}

.custom-quickview.chat-quickview .message-container .chat-message .bubble-wrapper .timestamp {
    position: relative;
    top: 8px;
    font-size: 11px;
    font-weight: 500;
    color: #999
}

.custom-quickview.chat-quickview .message-container .chat-message.from .chat-bubble {
    margin-left: 20px;
    color: #fff;
    background: #7F00FF;
    border-radius: 0 15px 15px 15px
}

.custom-quickview.chat-quickview .message-container .chat-message.from .timestamp {
    right: 10px;
    float: right
}

.custom-quickview.chat-quickview .message-container .chat-message.to .chat-bubble {
    margin-right: 20px;
    color: #fff;
    background: #bf80ff;
    border: 1px solid #ededed;
    border-radius: 15px 0 15px 15px;
    text-align: left !important
}

.custom-quickview.chat-quickview .message-container .chat-message.to .timestamp {
    left: 0;
    top: 23px
}

.custom-quickview.chat-quickview .message-container::-webkit-scrollbar {
    width: 10px
}

.custom-quickview.chat-quickview .message-container::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.2)
}

.custom-quickview.chat-quickview .message-container .divider {
    display: table;
    white-space: nowrap;
    margin-top: 20px;
    padding: 0 20px
}

.custom-quickview.chat-quickview .message-container .divider .before-divider, .custom-quickview.chat-quickview .message-container .divider .after-divider {
    display: table-cell;
    width: 50%;
    border-bottom: 1px solid #ededed;
    transform: translateY(-50%);
    color: #999
}

.custom-quickview.chat-quickview .message-container .divider .children {
    padding: 0 20px;
    font-size: 14px;
    color: #cecece
}

.custom-quickview.chat-quickview .message-container .divider:not(:first-child) {
    margin-top: 40px !important
}

.custom-quickview.chat-quickview .message-input {
    position: absolute;
    bottom: -5px !important;
    width: 100%
}

.custom-quickview.chat-quickview .message-input textarea {
    box-sizing: border-box;
    padding: 18px;
    padding-right: 100px;
    padding-left: 30px;
    width: 100%;
    height: 100%;
    font-family: "intercom-font", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.33;
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
    border: none !important;
    resize: none;
    background-color: #fcfcfc
}

.custom-quickview.chat-quickview .message-input textarea:focus {
    outline: none !important
}

.custom-quickview.chat-quickview .message-input .message-options {
    position: absolute;
    right: 30px;
    top: 0
}

.custom-quickview.chat-quickview .message-input .message-options .emoji-button {
    position: relative;
    float: left;
    display: inline-block;
    cursor: pointer;
    opacity: .7;
    height: 55px;
    width: 30px
}

.custom-quickview.chat-quickview .message-input .message-options .emoji-button:before {
    background-image: url(https://image.ibb.co/gH13KQ/emoji_icon.png);
    background-size: 18px 18px;
    background-repeat: no-repeat;
    content: " ";
    width: 18px;
    height: 18px;
    left: 5px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    background-position: 50%
}

.custom-quickview.chat-quickview .message-input .message-options .attach-button {
    position: relative;
    float: left;
    display: inline-block;
    cursor: pointer;
    opacity: .7;
    height: 55px;
    width: 30px
}

.custom-quickview.chat-quickview .message-input .message-options .attach-button:before {
    background-image: url(https://image.ibb.co/hSE165/attach_icon.png);
    background-size: 16px 18px;
    background-repeat: no-repeat;
    content: " ";
    width: 16px;
    height: 18px;
    left: 5px;
    position: absolute;
    top: 20px;
    background-position: 50%
}

.breadcrumbs {
    position: absolute;
    top: 80px;
    right: 5%;
    display: inline-block;
    font-size: 14px;
    font-weight: 400;
    color: #999
}

.breadcrumbs ul {
    margin: 0 !important
}

.breadcrumbs ul li {
    display: inline-block;
    list-style: none;
    margin: 0 0 0 10px
}

.breadcrumbs ul li:first-child:before {
    content: ''
}

.breadcrumbs ul li:before {
    content: "\\f105";
    font-family: "FontAwesome";
    color: #a0a0a0;
    font-size: 14px;
    margin-right: 15px
}

.breadcrumbs a {
    font-weight: 500
}

.cross-container {
    position: relative;
    width: 20px;
    height: 20px;
    cursor: pointer
}

.cross-container span {
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    border-radius: 3px;
    background: #fff
}

.cross-container .top {
    top: 10px;
    left: 0;
    transform: rotate(45deg)
}

.cross-container .bottom {
    bottom: 9px;
    left: 0;
    transform: rotate(-45deg)
}

.menu-wrapper {
    font-size: 20px;
    color: #A9ABAC;
    line-height: 48px;
    text-align: center;
    background: transparent;
    display: block;
    width: 48px;
    height: 48px;
    cursor: pointer;
    padding: 0px;
    float: left;
    margin: 0 14px
}

.menu-wrapper .icon-box-toggle {
    height: 100%;
    width: 100%;
    background: tranparent;
    position: relative;
    display: block
}

.menu-wrapper .icon-box-toggle.active .rotate {
    -webkit-transform: rotate(90deg);
    -moz-transform: translate(0px, 0px) rotate(90deg);
    -ms-transform: translate(0px, 0px) rotate(90deg);
    -o-transform: translate(0px, 0px) rotate(90deg);
    transform: translate(0px, 0px) rotate(90deg)
}

.menu-wrapper .icon-box-toggle.active i.icon-line-top {
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transform: rotate(45deg);
    -moz-transform: translate(0px, 0px) rotate(45deg);
    -ms-transform: translate(0px, 0px) rotate(45deg);
    -o-transform: translate(0px, 0px) rotate(45deg);
    transform: translate(0px, 0px) rotate(45deg)
}

.menu-wrapper .icon-box-toggle.active i.icon-line-center {
    visibility: hidden;
    width: 1px;
    height: 2px;
    left: 70%
}

.menu-wrapper .icon-box-toggle.active i.icon-line-bottom {
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transform: rotate(135deg);
    -moz-transform: translate(0px, 0px) rotate(135deg);
    -ms-transform: translate(0px, 0px) rotate(135deg);
    -o-transform: translate(0px, 0px) rotate(135deg);
    transform: translate(0px, 0px) rotate(135deg)
}

.menu-wrapper .rotate {
    background: transparent;
    display: block;
    width: 48px;
    height: 48px;
    padding: 0px;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease
}

.menu-wrapper .icon-line-top {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    margin: -3px 0 0 -10px;
    left: 50%;
    top: 40%;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease
}

.menu-wrapper .icon-line-center {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease
}

.menu-wrapper .icon-line-bottom {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    margin: 1.4px 0 0 -10px;
    left: 50%;
    top: 60%;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease
}

.fab-btn {
    box-sizing: border-box;
    width: 56px;
    height: 56px;
    padding: 16px;
    border: none;
    border-radius: 50%;
    color: #fff;
    transition: all 0.2s ease;
    cursor: pointer
}

.fab-btn:active, .fab-btn:focus {
    outline: none !important
}

.fab-btn.mini {
    width: 48px;
    height: 48px;
    padding: 12px;
    transform: rotate(-600deg);
    background: #00D1B2
}

.profile-fab {
    position: absolute;
    width: 56px;
    height: 56px;
    padding: 0px;
    bottom: -28px;
    right: 25px;
    z-index: 100
}

.profile-fab .notifications, .profile-fab .team, .profile-fab .details {
    position: absolute;
    top: 4px;
    left: 4px;
    opacity: 0
}

.profile-fab .fab-wrapper {
    width: 56px;
    height: 56px;
    position: absolute;
    bottom: 0px;
    right: 0px
}

.profile-fab .fab-wrapper .pop-fab {
    position: absolute;
    bottom: 0px;
    right: 0px;
    background: #7F00FF;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper {
    position: relative;
    font-size: 20px;
    color: #A9ABAC;
    line-height: 56px;
    text-align: center;
    background: transparent;
    display: block;
    width: 56px;
    height: 56px;
    cursor: pointer;
    padding: 0px;
    top: -16px;
    left: -15px
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper .icon-box-toggle {
    height: 100%;
    width: 100%;
    background: tranparent;
    position: relative;
    display: block
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper .icon-box-toggle.active .rotate {
    -webkit-transform: rotate(90deg);
    -moz-transform: translate(0px, 0px) rotate(90deg);
    -ms-transform: translate(0px, 0px) rotate(90deg);
    -o-transform: translate(0px, 0px) rotate(90deg);
    transform: translate(0px, 0px) rotate(90deg)
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper .icon-box-toggle.active i.icon-line-top {
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transform: rotate(45deg);
    -moz-transform: translate(0px, 0px) rotate(45deg);
    -ms-transform: translate(0px, 0px) rotate(45deg);
    -o-transform: translate(0px, 0px) rotate(45deg);
    transform: translate(0px, 0px) rotate(45deg)
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper .icon-box-toggle.active i.icon-line-center {
    visibility: hidden;
    width: 1px;
    height: 2px;
    left: 70%
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper .icon-box-toggle.active i.icon-line-bottom {
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transform: rotate(135deg);
    -moz-transform: translate(0px, 0px) rotate(135deg);
    -ms-transform: translate(0px, 0px) rotate(135deg);
    -o-transform: translate(0px, 0px) rotate(135deg);
    transform: translate(0px, 0px) rotate(135deg)
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper .rotate {
    background: transparent;
    display: block;
    width: 56px;
    height: 56px;
    padding: 0px;
    -webkit-transition: all .5s ease;
    -moz-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper .icon-line-top {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    margin: -3px 0 0 -10px;
    left: 50%;
    top: 40%;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper .icon-line-center {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    margin: -1.5px 0 0 -10px;
    left: 50%;
    top: 50%;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease
}

.profile-fab .fab-wrapper .pop-fab .profile-menu-wrapper .icon-line-bottom {
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    margin: 1.2px 0 0 -10px;
    left: 50%;
    top: 60%;
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    transition: all .2s ease
}

.details {
    background: #536dfe !important
}

.team {
    background: #00D1B2 !important
}

.notifications {
    background: #7F00FF !important
}

.profile-fab.is-open {
    width: 150px;
    height: 150px
}

.profile-fab.is-open .fab-btn.mini {
    transform: rotate(0)
}

.profile-fab.is-open .notifications {
    left: -94px;
    top: 4px;
    opacity: 1
}

.profile-fab.is-open .team {
    left: -65.296px;
    top: -65.296px;
    opacity: 1
}

.profile-fab.is-open .details {
    left: 4px;
    top: -94px;
    opacity: 1
}

.btn-dash {
    padding: 15px 20px 18px 20px !important
}

.load-more-wrapper {
    max-width: 180px;
    margin: 0 auto
}

.wickedpicker {
    z-index: 9999 !important
}

.wickedpicker span, .wickedpicker span:focus, .wickedpicker span:active {
    outline: none !important
}

#add-reminder-modal input {
    padding-bottom: 0 !important
}

#add-reminder-modal textarea::-webkit-input-placeholder, #add-reminder-modal input::-webkit-input-placeholder {
    color: #cecece
}

#add-reminder-modal textarea::-moz-placeholder, #add-reminder-modal input::-moz-placeholder {
    color: #cecece
}

#add-reminder-modal textarea:-ms-input-placeholder, #add-reminder-modal input:-ms-input-placeholder {
    color: #cecece
}

#add-reminder-modal textarea:-moz-placeholder, #add-reminder-modal input:-moz-placeholder {
    color: #cecece
}

.company-card .header {
    height: 7rem;
    background: #7F00FF;
    position: relative;
    overflow: visible
}

.company-card .header img {
    position: absolute;
    bottom: -40px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    left: calc(50% - 50px);
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.feed-channels {
    margin: 0 0 20px 0 !important;
    background: #fff;
    list-style-type: none !important
}

.feed-channels li:not(.is-active) a {
    color: #A9ABAC !important
}

.feed-channels li {
    margin-top: 0 !important
}

.compose-card .image {
    margin-right: 15px;
    display: inherit;
    align-items: inherit
}

.compose-card .status-wrapper {
    width: 100%
}

.compose-card .icon-button {
    min-width: 40px;
    min-height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 50%;
    color: #ededed;
    margin-left: 10px;
    cursor: pointer
}

.compose-card .icon-button i {
    font-size: 26px
}

.compose-card .icon-button:hover {
    background: #EFF4F7;
    color: #999
}

.compose-card textarea::-webkit-input-placeholder {
    color: #cecece
}

.compose-card textarea::-moz-placeholder {
    color: #cecece
}

.compose-card textarea:-ms-input-placeholder {
    color: #cecece
}

.compose-card textarea:-moz-placeholder {
    color: #cecece
}

.post-item {
    width: 100%;
    margin: 15px 0;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14)
}

.post-item .feed-avatar {
    height: 36px;
    width: 36px;
    border-radius: 50%
}

.post-item .item-title {
    font-weight: 500;
    color: #707070;
    margin-left: 15px
}

.post-item .item-title a {
    color: #7F00FF
}

.post-item .item-title .feed-time-small {
    font-size: 10px;
    color: #999;
    font-weight: 400
}

.post-item .item-menu {
    margin-left: auto !important;
    padding-right: 10px;
    font-size: 80%;
    cursor: pointer
}

.post-item p {
    padding: 10px;
    font-size: 13px
}

.post-item p .post-title {
    font-size: 1.1rem;
    font-weight: 500
}

.post-item p .post-title a {
    color: #7F00FF
}

.post-item p .post-title a:hover {
    opacity: 0.8
}

.post-item .feed-item-footer {
    padding-top: 10px;
    padding-bottom: 10px
}

.post-item .counter-block {
    margin-right: 12px;
    margin-left: 12px;
    font-size: 20px
}

.post-item .counter-block span {
    color: #A9ABAC
}

.post-item .im-footer {
    position: relative;
    top: 5px;
    font-weight: 400
}

.post-item .rating-counter {
    color: #909090;
    padding-left: 5px;
    display: inline-block;
    font-size: 15px
}

.post-item .rating-counter.small {
    font-size: 11px
}

.post-item .fab-container {
    position: relative;
    min-height: 10px;
    width: 100%
}

.post-item .feed-image-container {
    position: relative
}

.post-item .feed-image-container img {
    float: left !important;
    max-width: 100%
}

.post-item .feed-image-container .soft-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3)
}

.user-list {
    margin: 1em 0 0 0 !important
}

.social-fab {
    position: absolute;
    width: 56px;
    height: 56px;
    padding: 0px;
    bottom: -28px;
    right: 25px;
    z-index: 100
}

.social-fab .like, .social-fab .share, .social-fab .comment {
    position: absolute;
    top: 4px;
    left: 4px;
    opacity: 0
}

.social-fab .fab-wrapper {
    width: 56px;
    height: 56px;
    position: absolute;
    bottom: 0px;
    right: 0px
}

.social-fab .fab-wrapper .pop-fab {
    position: absolute;
    bottom: 0px;
    right: 0px;
    background: #7F00FF;
    box-shadow: 0 14px 26px -12px rgba(127, 0, 255, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(127, 0, 255, 0.2) !important
}

.social-fab .fab-wrapper .pop-fab .plus-toggle {
    height: 100%;
    width: 100%;
    background: tranparent;
    position: relative;
    display: block;
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    -o-transition: all .3s ease;
    transition: all .3s ease
}

.social-fab .fab-wrapper .pop-fab .plus-toggle.is-active {
    transform: rotate(135deg)
}

.comment, .share {
    background: #7F00FF !important
}

.like-wrapper {
    position: relative;
    width: 100%;
    height: 100%
}

.like-wrapper .like-overlay {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    top: -36px;
    left: -24px;
    background: #FF7273;
    transform: scale(0);
    transition: transform 0.4s;
    z-index: 0
}

.like {
    background: #A9ABAC !important
}

.like i.unliked {
    display: block;
    color: #fff;
    position: relative;
    z-index: 1
}

.like i.liked {
    display: none;
    color: #fff;
    position: relative;
    z-index: 1
}

.like.is-active .like-overlay {
    transform: scale(1)
}

.like.is-active i.unliked {
    display: none
}

.like.is-active i.liked {
    display: block
}

.social-fab.is-open {
    width: 150px;
    height: 150px
}

.social-fab.is-open .fab-btn.mini {
    transform: rotate(0)
}

.social-fab.is-open .like {
    left: -94px;
    top: 4px;
    opacity: 1
}

.social-fab.is-open .share {
    left: -65.296px;
    top: -65.296px;
    opacity: 1
}

.social-fab.is-open .comment {
    left: 4px;
    top: -94px;
    opacity: 1
}

.audio.green-audio-player {
    width: 100%;
    min-width: 300px;
    height: 56px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.07);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 12px;
    padding-right: 24px;
    border-radius: 4px;
    user-select: none;
    -webkit-user-select: none;
    background-color: #fff
}

.audio.green-audio-player .avatar {
    margin-right: 10px
}

.audio.green-audio-player .avatar img {
    width: 36px;
    height: 36px;
    border-radius: 50%
}

.audio.green-audio-player .play-pause-btn {
    display: none;
    cursor: pointer
}

.audio.green-audio-player .spinner {
    width: 18px;
    height: 18px;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/loading.png);
    background-size: cover;
    background-repeat: no-repeat;
    animation: spin 0.4s linear infinite
}

.audio.green-audio-player .slider {
    flex-grow: 1;
    background-color: #D8D8D8;
    cursor: pointer;
    position: relative
}

.audio.green-audio-player .slider .progress {
    background-color: #7F00FF;
    border-radius: inherit;
    position: absolute;
    pointer-events: none
}

.audio.green-audio-player .slider .progress .pin {
    height: 16px;
    width: 16px;
    border-radius: 8px;
    background-color: #7F00FF;
    position: absolute;
    pointer-events: all;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.32)
}

.audio.green-audio-player .controls {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 18px;
    color: #555;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    margin-left: 24px;
    margin-right: 24px
}

.audio.green-audio-player .controls .slider {
    margin-left: 16px;
    margin-right: 16px;
    border-radius: 2px;
    height: 4px
}

.audio.green-audio-player .controls .slider .progress {
    width: 0;
    height: 100%
}

.audio.green-audio-player .controls .slider .progress .pin {
    right: -8px;
    top: -6px
}

.audio.green-audio-player .controls span {
    cursor: default
}

.audio.green-audio-player .volume {
    position: relative
}

.audio.green-audio-player .volume .volume-btn {
    cursor: pointer
}

.audio.green-audio-player .volume .volume-btn.open path {
    fill: #7F00FF
}

.audio.green-audio-player .volume .volume-controls {
    width: 30px;
    height: 135px;
    background-color: rgba(0, 0, 0, 0.62);
    border-radius: 7px;
    position: absolute;
    left: -3px;
    bottom: 52px;
    flex-direction: column;
    align-items: center;
    display: flex
}

.audio.green-audio-player .volume .volume-controls.hidden {
    display: none
}

.audio.green-audio-player .volume .volume-controls .slider {
    margin-top: 12px;
    margin-bottom: 12px;
    width: 6px;
    border-radius: 3px
}

.audio.green-audio-player .volume .volume-controls .slider .progress {
    bottom: 0;
    height: 100%;
    width: 6px
}

.audio.green-audio-player .volume .volume-controls .slider .progress .pin {
    left: -5px;
    top: -8px
}

.audio.green-audio-player svg, .audio.green-audio-player img {
    display: block
}

@keyframes spin {
    from {
        transform: rotateZ(0)
    }
    to {
        transform: rotateZ(1turn)
    }
}

.featured-feed-post {
    overflow: visible
}

.featured-feed-post .image {
    border-radius: 8px;
    transform: scale(0.9)
}

.featured-feed-post img {
    display: block;
    height: auto;
    width: 100%;
    border-radius: 8px;
    margin-top: -40px;
    box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15)
}

.featured-feed-post .image-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(126, 0, 255, 0.9);
    border-radius: 8px
}

.featured-feed-post .author-avatar {
    width: 100%;
    height: 110px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0
}

.featured-feed-post .author-avatar img {
    height: 100%;
    width: 110px;
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    bottom: -35px
}

.featured-feed-post .fab-btn.like {
    transform: rotate(0deg);
    position: absolute;
    right: 8%;
    bottom: -18px;
    box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15)
}

.featured-feed-post .fab-btn.back {
    transform: rotate(0deg);
    position: absolute;
    left: 8%;
    bottom: -18px;
    box-shadow: 0 27px 55px 0 rgba(0, 0, 0, 0.3), 0 17px 17px 0 rgba(0, 0, 0, 0.15);
    transition: all 0.3
}

.featured-feed-post .fab-btn.back i {
    transform: rotate(0deg);
    transition: inherit
}

.featured-feed-post .fab-btn.back:hover {
    background: #536dfe
}

.featured-feed-post .fab-btn.back:hover i {
    transform: rotate(360deg)
}

.featured-feed-post .post-meta {
    padding-left: 15px;
    padding-top: 10px;
    font-size: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center
}

.featured-feed-post .author-meta .author-name {
    color: #999
}

.featured-feed-post .author-meta .author-name span {
    color: #7F00FF
}

.featured-feed-post .author-meta .post-timestamp {
    font-size: 85%;
    color: #999;
    padding-top: 5px
}

.featured-feed-post .comments-meta {
    width: 40px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    margin-right: 15px
}

.featured-feed-post .comments-meta i {
    color: #A9ABAC;
    position: relative;
    top: 3px
}

.featured-feed-post .comments-meta .counter {
    font-size: 1.2rem;
    font-weight: 500;
    color: #A9ABAC
}

.featured-feed-post .post-body {
    padding: 30px 10px
}

.featured-feed-post .post-share {
    display: flex;
    justify-content: flex-end;
    align-items: center
}

.featured-feed-post .post-share i {
    font-size: 20px;
    padding: 0 7px;
    color: #A9ABAC;
    cursor: pointer
}

.featured-feed-post .post-share i:hover {
    color: #7F00FF
}

.featured-feed-post a {
    font-weight: 500
}

.compose-card .textarea-button {
    background: #fafbfc
}

.comment-list {
    padding-top: 40px;
    margin: 1rem 0 !important
}

.comment-list .media {
    border-top: none
}

.comment-list .media.is-answer {
    width: 85%;
    margin-left: auto
}

.comment-list .media.is-answer .media-left img {
    width: 38px
}

.comment-list .media-heading a {
    font-weight: 500
}

.comment-list .media-heading .timestamp {
    color: #A9ABAC;
    font-size: 12px;
    line-height: 1.6666667;
    font-weight: 400;
    margin-left: 8px
}

.comment-list .media-heading .timestamp:before {
    content: '\\2022';
    margin-right: 11px
}

.comment-list .media-left img {
    width: 45px;
    border-radius: 50%;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04)
}

.comment-list .media-body {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #ededed;
    background: #fff;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04)
}

.comment-list p {
    font-size: 90%;
    padding-top: 10px
}

.comment-list .comment-controls {
    margin: 0 !important
}

.comment-list .comment-controls li {
    padding-right: 20px;
    position: relative;
    padding-left: 0;
    font-size: 13px;
    display: inline-block;
    color: #A9ABAC
}

.comment-list .comment-controls li:before {
    content: '\\2022';
    position: absolute;
    right: 8px;
    color: #ccc;
    top: 1px
}

.comment-list .comment-controls li a {
    color: #A9ABAC
}

.comment-list .comment-controls li a i {
    font-size: 14px;
    color: #A9ABAC;
    position: relative;
    top: 2px
}

.recent-post {
    align-items: center;
    margin-top: 30px
}

.recent-post .post-title {
    color: #444F60;
    font-weight: 500;
    margin-bottom: 5px !important
}

.recent-post .post-timestamp {
    float: right;
    margin-right: 15px;
    font-size: 90%;
    color: #A9ABAC
}

.recent-post figure img {
    border-radius: 50%
}

.ticket-list {
    margin: 0 !important;
    padding: 0 0 10px 0
}

.ticket-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 10px 0;
    margin: 0 5px;
    border-bottom: 1px solid #ededed
}

.ticket-list .ticket-data .ticket-info {
    margin-bottom: 5px
}

.ticket-list .ticket-data .ticket-info .ticket-id {
    font-weight: 600;
    color: #A9ABAC
}

.ticket-list .ticket-data .ticket-info .ticket-title {
    color: #444F60
}

.ticket-list .ticket-data .ticket-timestamp {
    font-size: 80%;
    color: #999;
    padding-left: 35px
}

.ticket-list .ticket-meta {
    font-size: 85%;
    color: #999;
    position: relative;
    padding-left: 35px
}

.ticket-list .ticket-meta .small-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0
}

.hire-table {
    overflow: auto !important
}

.hire-table img {
    min-width: 38px !important;
    height: 38px;
    border-radius: 50%
}

.hire-table th {
    font-weight: 500 !important
}

.hire-table td {
    vertical-align: middle !important
}

.hire-table td.position {
    font-size: 95%;
    color: #999
}

.hire-table td.experience {
    font-weight: 600
}

.hire-table td.experience span {
    font-weight: 300;
    font-size: 85%
}

.hire-table a {
    color: #444F60;
    font-weight: 500
}

.project-table {
    overflow: auto !important
}

.project-table th {
    font-weight: 500 !important
}

.project-table td {
    vertical-align: middle !important
}

.project-table td.deadline {
    font-size: 90%;
    color: #999
}

.project-table td .percent {
    position: relative;
    top: -8px;
    font-weight: 700;
    color: #00D1B2
}

.project-table td .percent span {
    font-size: 70%
}

.project-table a {
    color: #444F60;
    font-weight: 500
}

.project-table b {
    font-weight: 500 !important;
    font-size: 94%;
    color: #7F00FF
}

.project-table svg {
    max-width: 32px !important;
    margin: 0 auto !important
}

.project-table .material-icons {
    position: relative;
    top: 3px;
    color: #A9ABAC;
    cursor: pointer
}

.circle-chart-circle {
    animation: circle-chart-fill 2s reverse;
    transform: rotate(-90deg);
    transform-origin: center
}

.stat-number {
    position: absolute;
    top: 28%;
    left: 0;
    width: 100%;
    font-weight: 700;
    font-size: 3rem
}

.stat-number span {
    font-size: 50%;
    margin: 0 auto
}

.chart-avatar {
    position: absolute;
    top: 28%;
    left: 0;
    width: 100%;
    height: 40px
}

.chart-avatar img {
    position: relative;
    width: 60px;
    border-radius: 50%
}

.ring-title span {
    font-size: 1.4rem;
    color: #A9ABAC
}

@keyframes circle-chart-fill {
    to {
        stroke-dasharray: 0 100
    }
}

.stat-text .stat-average {
    position: relative;
    width: 100%;
    font-weight: 700;
    font-size: 1.8rem
}

.stat-text .stat-average span:first-child {
    font-size: 1.2rem
}

.stat-text .stat-subtitle {
    font-size: 90%;
    color: #999
}

.avatar-group {
    display: flex;
    align-items: center;
    justify-content: space-between
}

.avatar-group .avatar-chart {
    position: relative
}

.avatar-group .avatar-chart img {
    width: 70px;
    height: 70px;
    border-radius: 50%
}

.avatar-group .avatar-chart svg {
    position: absolute;
    top: 18px;
    left: 40px
}

.avatar-group .avatar-chart.is-left svg {
    left: -40px
}

.shipping-widget .shipping-progress {
    position: relative;
    padding: 10px 20px
}

.shipping-widget .shipping-progress .shipping-icon {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 42px;
    left: 52px;
    display: flex;
    justify-content: center;
    align-items: center
}

.shipping-widget .shipping-progress .shipping-icon i {
    font-size: 40px;
    color: #536dfe
}

.shipping-widget .shipping-info .delivery-percent {
    font-size: 2rem;
    font-weight: 700;
    color: #444F60
}

.shipping-widget .shipping-info .delivery-percent span {
    font-size: 60%;
    color: inherit
}

.shipping-widget .shipping-info .delivery-text {
    font-weight: 500
}

.shipping-widget .bg-icon {
    font-size: 5rem;
    position: absolute;
    right: 0;
    color: #ededed;
    opacity: 0.4;
    transform: scale(3)
}

.server-widget .server-progress {
    position: relative;
    padding: 10px 20px
}

.server-widget .server-progress .server-icon {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: absolute;
    top: 42px;
    left: 52px;
    display: flex;
    justify-content: center;
    align-items: center
}

.server-widget .server-progress .server-icon i {
    font-size: 40px;
    color: #00D1B2
}

.server-widget .server-info .server-percent {
    font-size: 2rem;
    font-weight: 700;
    color: #444F60
}

.server-widget .server-info .server-percent span {
    font-size: 60%;
    color: inherit
}

.server-widget .server-info .server-text {
    font-weight: 500
}

.server-widget .bg-icon {
    font-size: 4rem;
    position: absolute;
    top: 50%;
    right: 6%;
    color: #ededed;
    opacity: 0.4;
    transform: scale(3)
}

.pills-widget .tabs {
    margin-bottom: 0 !important
}

.pills-widget .messages-list {
    margin: 0 !important;
    padding: 0 0 10px 0
}

.pills-widget .messages-list li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0 10px 0;
    margin: 0 5px;
    border-bottom: 1px solid #ededed
}

.pills-widget .messages-list .message-data .message-info {
    margin-bottom: 5px
}

.pills-widget .messages-list .message-data .message-info .message-title {
    color: #444F60;
    font-weight: 500
}

.pills-widget .messages-list .message-data .message-timestamp {
    font-size: 80%;
    color: #999;
    padding-left: 35px
}

.pills-widget .messages-list .message-meta {
    font-size: 85%;
    color: #999;
    position: relative;
    padding-left: 35px
}

.pills-widget .messages-list .message-meta span {
    font-weight: 500;
    color: #7F00FF
}

.pills-widget .messages-list .message-meta .small-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0
}

.pills-widget .messages-list .message-action {
    margin-left: auto
}

.pills-widget .messages-list .message-action .attachments {
    position: relative;
    top: 10px;
    color: #A9ABAC
}

.pills-widget .messages-list button {
    position: relative;
    top: 10px;
    margin-left: 10px
}

.pills-widget .task-list {
    margin: 0 !important;
    padding: 0 0 10px 0
}

.pills-widget .task-list li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0 10px 0;
    margin: 0 5px;
    border-bottom: 1px solid #ededed
}

.pills-widget .task-list .task-data .task-info {
    margin-bottom: 5px
}

.pills-widget .task-list .task-data .task-info .task-title {
    color: #444F60;
    font-weight: 500
}

.pills-widget .task-list .task-data .task-timestamp {
    font-size: 80%;
    color: #999;
    padding-left: 35px
}

.pills-widget .task-list .task-meta {
    font-size: 85%;
    color: #999;
    position: relative;
    padding-left: 35px
}

.pills-widget .task-list .task-meta span {
    font-weight: 500;
    color: #7F00FF
}

.pills-widget .task-list .task-meta .small-avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    left: 0
}

.pills-widget .task-list .task-action {
    margin-left: auto
}

.pills-widget .task-list .task-action .users {
    position: relative;
    top: 10px;
    color: #A9ABAC
}

.pills-widget .task-list button {
    position: relative;
    top: 10px;
    margin-left: 10px
}

.pills-widget .task-list button.complete {
    transform: scale(0.8) !important
}

.pills-widget .invoices-list {
    margin: 0 !important;
    padding: 0 0 10px 0
}

.pills-widget .invoices-list li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0 10px 0;
    margin: 0 5px;
    border-bottom: 1px solid #ededed
}

.pills-widget .invoices-list .invoice-data .invoice-info {
    margin-bottom: 5px
}

.pills-widget .invoices-list .invoice-data .invoice-info .invoice-title {
    color: #444F60;
    font-weight: 500
}

.pills-widget .invoices-list .invoice-data .invoice-timestamp {
    font-size: 80%;
    color: #999;
    padding-left: 35px
}

.pills-widget .invoices-list .invoice-meta {
    font-size: 85%;
    color: #999;
    position: relative;
    padding-left: 35px
}

.pills-widget .invoices-list .invoice-meta span {
    font-weight: 500;
    color: #536dfe
}

.pills-widget .invoices-list .invoice-meta i {
    font-size: 32px;
    display: inline-block;
    position: absolute;
    left: 0;
    top: -6px
}

.pills-widget .invoices-list .invoice-action {
    margin-left: auto
}

.pills-widget .invoices-list .invoice-action .attachments {
    position: relative;
    top: 10px;
    color: #A9ABAC
}

.pills-widget .invoices-list button {
    position: relative;
    top: 10px;
    margin-left: 10px
}

.complete-wrapper {
    position: relative;
    width: 100%;
    height: 100%
}

.complete-wrapper .complete-overlay {
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    top: -36px;
    left: -24px;
    background: #00D1B2;
    transform: scale(0);
    transition: transform 0.4s;
    z-index: 0
}

.complete {
    background: #A9ABAC !important;
    transform: rotate(0deg) !important;
    box-shadow: 0 3px 10px 4px rgba(0, 0, 0, 0.04)
}

.complete i.uncompleted {
    display: block;
    color: #fff;
    position: relative;
    z-index: 1
}

.complete i.completed {
    display: none;
    color: #fff;
    position: relative;
    z-index: 1
}

.complete.is-active .complete-overlay {
    transform: scale(1)
}

.complete.is-active i.uncompleted {
    display: none
}

.complete.is-active i.completed {
    display: block
}

.simple-feed {
    margin-left: 0.5rem !important;
    margin-right: 0.5rem !important;
    padding-top: 2rem
}

.simple-feed .feed-item {
    margin-top: 0 !important;
    padding-left: 15px;
    padding-bottom: 20px
}

.simple-feed .feed-item i {
    position: relative;
    top: -12px
}

.simple-feed .feed-item:after {
    border: 2px solid #00D1B2
}

.simple-feed .feed-item a {
    color: #7F00FF
}

.simple-feed .feed-item .text {
    color: #878787
}

.follow-card .header {
    position: relative;
    width: 100%;
    max-height: 100px
}

.follow-card .header .cover {
    width: 100%
}

.follow-card .header .avatar {
    position: absolute;
    left: 20px;
    bottom: -45px;
    border-radius: 50%;
    border: 5px solid white;
    height: 90px;
    width: 90px
}

.follow-card .header span {
    position: absolute;
    right: 20px;
    top: 20px;
    font-weight: 700;
    color: #fff
}

.follow-card .header span span {
    font-size: 90%;
    font-weight: 500;
    right: 0
}

.follow-card button {
    margin: 20px
}

.follow-card.is-minimal .header {
    background: #039BE5;
    height: 100px
}

.follow-card.is-minimal .twitter-icon {
    position: absolute;
    background: #039BE5;
    left: 20px;
    bottom: -45px;
    border-radius: 50%;
    border: 5px solid white;
    height: 90px;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center
}

.follow-card.is-minimal .twitter-icon i {
    color: #fff;
    font-size: 40px
}

.stats-card .img-header {
    min-height: 220px;
    width: 100%;
    background: #00D1B2;
    display: flex;
    justify-content: center;
    align-items: center
}

.stats-card .img-header .img-block img {
    max-height: 100px;
    border-radius: 50%
}

.stats-card .img-header .img-block .name {
    font-size: 1.4rem;
    color: #fff;
    font-weight: 500
}

.stats-card .img-header .img-block .name-details {
    color: #fff;
    font-size: 90%
}

.stats-card .inline-stats {
    display: flex;
    justify-content: space-between;
    align-items: center
}

.stats-card .inline-stats .stats-item .stat-name {
    font-weight: 400;
    color: #A9ABAC
}

.stats-card .inline-stats .stats-item .stat-data {
    font-weight: bold;
    font-size: 1.4rem
}

.stats-card.is-skewed .img-header {
    transform: skewY(-8deg);
    margin-top: -50px;
    min-height: 270px;
    background: #7F00FF
}

.stats-card.is-skewed .img-block {
    transform: skewY(8deg);
    padding-top: 50px
}

.stats-card.is-skewed .card-body {
    padding-top: 50px
}

.stats-card-portrait {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 300px
}

.stats-card-portrait .vertical-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 25%;
    height: 300px;
    padding: 30px
}

.stats-card-portrait .vertical-stats .stats-item .stat-name {
    font-weight: 400;
    color: #A9ABAC
}

.stats-card-portrait .vertical-stats .stats-item .stat-data {
    font-weight: bold;
    font-size: 1.4rem
}

.stats-card-portrait .img-header {
    min-height: 300px;
    width: 75%;
    background: #7F00FF;
    display: flex;
    justify-content: center;
    align-items: center
}

.stats-card-portrait .img-header .img-block img {
    max-height: 100px;
    border-radius: 50%
}

.stats-card-portrait .img-header .img-block .name {
    font-size: 1.4rem;
    color: #fff;
    font-weight: 500
}

.stats-card-portrait .img-header .img-block .name-details {
    color: #fff;
    font-size: 90%
}

.rating-card {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px
}

.rating-card .rating-avatar img {
    max-height: 55px;
    max-width: 55px;
    border-radius: 50%
}

.rating-card .rating-content {
    margin-left: 15px
}

.rating-card .rating-content .star-rating {
    position: absolute;
    right: 20px
}

.rating-card .rating-content .star-rating i {
    font-size: 18px;
    color: #eda514
}

.rating-card .rating-content .star-rating i.unstared {
    color: #ededed !important
}

.rating-card .rating-content .star-rating.is-heart i {
    font-size: 16px;
    color: #FF7273
}

.rating-card .rating-content .rating-title {
    padding-top: 20px;
    font-weight: 500;
    color: #444F60
}

.rating-card .rating-content .rating-text {
    font-size: 88%
}

.following-card {
    padding: 20px;
    background: #039BE5
}

.following-card .icon-heading {
    width: 100%;
    padding-bottom: 20px
}

.following-card .icon-heading .counter {
    font-size: 2rem;
    font-weight: 700;
    color: #fff
}

.following-card .achievement {
    padding-top: 15px;
    padding-bottom: 20px;
    font-size: 1.2rem;
    font-weight: 500;
    color: #fff;
    width: 100%
}

.following-card .avatars {
    text-align: center
}

.following-card .avatars img {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #fff
}

.following-card .avatars img:not(:first-child) {
    margin-left: -15px
}

.skype-card {
    display: flex;
    justify-content: flex-start;
    align-items: center
}

.skype-card .skype-avatar {
    position: relative
}

.skype-card .skype-avatar img {
    width: 75px;
    height: 75px;
    border-radius: 50%
}

.skype-card .skype-avatar i {
    position: absolute;
    right: -12px;
    bottom: 10px;
    font-size: 1rem;
    padding: 10px;
    background: #039BE5;
    border-radius: 50%;
    color: #fff
}

.skype-card .skype-info {
    margin-left: 25px
}

.skype-card .skype-info .name {
    font-weight: 500;
    color: #444F60
}

.skype-card .skype-info .status {
    font-size: 90%;
    color: #039BE5
}

.skype-card .call {
    position: absolute;
    right: 10px;
    top: 10px
}

.tweet-card {
    padding: 20px
}

.tweet-card .tweet-header {
    display: flex;
    justify-content: flex-start;
    align-items: center
}

.tweet-card .tweet-header img {
    width: 32px;
    height: 32px;
    border-radius: 50%
}

.tweet-card .tweet-header .user-info {
    margin-left: 15px
}

.tweet-card .tweet-header .user-info .name {
    font-weight: 500;
    color: #444F60
}

.tweet-card .tweet-header .user-info .alias {
    font-size: 90%;
    color: #A9ABAC
}

.tweet-card .tweet-header .twitter-icon {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    color: #1dcaff
}

.tweet-card .tweet-content {
    color: #444F60;
    font-size: 92%;
    padding-top: 10px
}

.tweet-card .hashtags span {
    font-weight: 500;
    color: #444F60;
    margin: 0 5px;
    font-size: 90%
}

.tweet-card.is-branded {
    background: #1dcaff
}

.tweet-card.is-branded .user-info {
    margin-left: 0
}

.tweet-card.is-branded .user-info .name, .tweet-card.is-branded .user-info .alias, .tweet-card.is-branded .twitter-icon, .tweet-card.is-branded .tweet-content, .tweet-card.is-branded .hashtags span {
    color: #fff
}

.social-card {
    display: flex;
    justify-content: flex-start;
    align-items: center
}

.social-card .social-icon {
    font-size: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center
}

.social-card .stat-count {
    margin-left: 25px
}

.social-card .stat-count .count {
    font-size: 25px;
    font-weight: 700;
    color: #fff
}

.social-card .stat-count .count span {
    font-weight: 300;
    font-size: 90%
}

.social-card .stat-count .count-info {
    color: #fff;
    font-size: 85%
}

.social-card .symbol {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: #fff;
    margin-left: auto
}

.social-card.is-facebook {
    background: #3B5998
}

.social-card.is-twitter {
    background: #1dcaff
}

.social-card.is-github {
    background: #444
}

.social-metro .metro-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    cursor: pointer;
    transition: opacity 0.3s
}

.social-metro .metro-icon:hover {
    opacity: 0.8
}

.social-metro .metro-icon:hover i {
    transform: scale(0.8)
}

.social-metro .metro-icon i {
    color: #fff;
    transition: transform .3s
}

.social-metro .metro-icon.is-big {
    height: 180px
}

.social-metro .metro-icon.is-big i {
    font-size: 50px
}

.social-metro .metro-icon.is-small {
    height: 90px
}

.social-metro .metro-icon.is-small i {
    font-size: 25px
}

.social-metro .metro-icon.is-facebook {
    background: #3B5998
}

.social-metro .metro-icon.is-twitter {
    background: #1dcaff
}

.social-metro .metro-icon.is-google-plus {
    background: #d34836
}

.social-metro .metro-icon.is-github {
    background: #444
}

.social-metro .metro-icon.is-linkedin {
    background: #007bb6
}

.social-metro .metro-icon.is-youtube {
    background: #cc181e
}

.social-metro .metro-icon.is-rss {
    background: #eda514
}

.logo-card {
    min-height: 300px
}

.logo-card .lib-logo {
    height: 100px;
    background: #7F00FF;
    position: relative;
    display: flex;
    justify-content: center
}

.logo-card .lib-logo img {
    height: 90px;
    position: relative;
    bottom: -55px
}

.logo-card .logo-card-content {
    text-align: center;
    padding-top: 55px
}

.logo-card .logo-card-content .lib-name {
    font-size: 1.6rem
}

.logo-card .logo-card-content .subname {
    font-size: 95%;
    color: #999
}

.logo-card .filigrane {
    position: absolute;
    font-size: 150px;
    color: #ededed;
    opacity: 0.5;
    right: -20px;
    bottom: -90px
}

#cjs-barChart, #cjs-lineChart, #cjs-pieChart, #cjs-radarChart, #cjs-polarChart, #cjs-doughnutChart, #cjs-hbarChart, #cjs-gbarChart, #cjs-mixedChart, #cjs-bubbleChart {
    height: 260px;
    max-height: 260px
}

.bb-axis {
    fill: #999
}

.peity-card {
    min-height: 300px;
    background-image: url(../images/bg/dashboard/chart-bg.svg);
    background-size: cover;
    background-repeat: no-repeat
}

.peity-card .column {
    min-height: 280px
}

.peity-card .peity-chart {
    min-height: 140px;
    display: flex;
    justify-content: center;
    align-items: center
}

.peity-card .peity-chart.is-full {
    min-height: 100% !important
}

#linechart-card {
    padding: 80px 20px 30px 20px
}

#doughnut-card {
    padding: 50px 20px 30px 20px
}

#doughnutChart {
    max-height: 150px;
    max-width: 150px;
    margin: 0 auto
}

#vmap {
    min-width: 400px;
    min-height: 400px;
    width: 100%;
    height: 100%
}

.jqvmap-zoomin, .jqvmap-zoomout {
    position: absolute;
    left: 10px;
    -webkit-border-radius: 50% !important;
    -moz-border-radius: 50% !important;
    border-radius: 50% !important;
    background: #00D1B2 !important;
    padding: 0 !important;
    color: #fff;
    width: 15px !important;
    height: 15px !important;
    cursor: pointer;
    line-height: 13px !important;
    text-align: center
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

@media (max-width: 767px) {
    .search-icon {
        margin-left: auto !important
    }

    .chat-button {
        margin-left: 15px !important
    }

    .chat-button i {
        margin-left: 5px !important
    }

    .main-menu {
        width: 60px
    }

    .child-menu {
        left: 60px
    }

    nav.dashboard-nav {
        margin-left: 60px;
        max-width: calc(100% - 60px)
    }

    .dashboard-wrapper {
        margin-left: 60px
    }

    .fab {
        left: 6px !important
    }

    .profile-container .inner {
        margin-left: 60px
    }

    .profile-container .inner .flex-card .card-body {
        padding: 10px 10px
    }

    .profile-heading {
        text-align: center
    }

    .profile-heading .avatar {
        max-height: 90px;
        max-width: 90px
    }

    #profile-view, #edit-view, #profile-notifications, #profile-team {
        padding: 0.75rem 1rem
    }

    #profile-view .flex-card.is-top, #edit-view .flex-card.is-top, #profile-notifications .flex-card.is-top, #profile-team .flex-card.is-top {
        margin-top: 0 !important
    }

    .notifications-center li {
        margin-bottom: 10px
    }

    .notifications-center li .description {
        margin-right: 0
    }

    .quickview.is-active {
        min-width: 100%;
        z-index: 1001
    }

    .quickview.is-active .user-list {
        max-height: 346px !important
    }

    .chat-quickview.is-active {
        min-width: 100%;
        z-index: 1002 !important
    }

    footer {
        margin-left: 60px !important
    }

    body.reader-mode .main-menu {
        transform: translateX(-60px)
    }

    body.reader-mode .child-menu {
        transform: translateX(-311px)
    }

    body.reader-mode nav.dashboard-nav {
        margin-left: 0;
        max-width: 100%
    }

    body.reader-mode .dashboard-wrapper {
        margin-left: 0
    }

    body.reader-mode footer {
        margin-left: 0 !important
    }

    .card-body.is-responsive {
        padding: 10px !important
    }

    .responsive-title {
        font-size: 1.35rem !important
    }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    .chat-button {
        margin-left: auto !important
    }

    .reader-switch {
        display: none !important
    }
}


</style>`;