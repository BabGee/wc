/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../../node_modules/lit-element/lit-element.js";
export const DatasourceListStyles = css`
:host {
    display: block;
}

/* -- import Roboto Font ---------------------------- */
@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    font-display: swap;
    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOiCnqEu92Fr1Mu51QrEzQdKg.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TjASc-CsE.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto Italic'), local('Roboto-Italic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1Mu51xMIzc.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 500;
    font-display: swap;
    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51S7ACc-CsE.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TzBic-CsE.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 900;
    font-display: swap;
    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(https://fonts.gstatic.com/s/roboto/v18/KFOjCnqEu92Fr1Mu51TLBCc-CsE.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Roboto Thin'), local('Roboto-Thin'), url(https://fonts.gstatic.com/s/roboto/v18/KFOkCnqEu92Fr1MmgVxMIzc.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Roboto Light'), local('Roboto-Light'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmSU5fABc9.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Roboto'), local('Roboto-Regular'), url(https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu5mxP.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Roboto Medium'), local('Roboto-Medium'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fABc9.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Roboto Bold'), local('Roboto-Bold'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmWUlfABc9.ttf) format('truetype');
}

@font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    font-display: swap;
    src: local('Roboto Black'), local('Roboto-Black'), url(https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmYUtfABc9.ttf) format('truetype');
}

/* -- You can use this tables in Bootstrap (v3) projects. -- */
/* -- Box model ------------------------------- */
*,
*:after,
*:before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

/* -- Demo style ------------------------------- */
html,
body {
    position: relative;
    min-height: 100%;
    height: 100%;
}

html {
    position: relative;
    overflow-x: hidden;
    margin: 16px;
    padding: 0;
    min-height: 100%;
    font-size: 62.5%;
}

body {
    font-family: "RobotoDraft", "Roboto", "Helvetica Neue, Helvetica, Arial", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2rem;
    letter-spacing: 0.01rem;
    color: #212121;
    background-color: #f5f5f5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
}

#demo {
    margin: 20px auto;
    max-width: 960px;
}

#demo h1 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    letter-spacing: 0;
    font-weight: 300;
    color: #212121;
    text-transform: inherit;
    margin-bottom: 1rem;
    text-align: center;
}

#demo h2 {
    font-size: 1.5rem;
    line-height: 2.8rem;
    letter-spacing: 0.01rem;
    font-weight: 400;
    color: #212121;
    text-align: center;
}


.topnav {
    overflow: hidden;
    /*background-color: #ffffff;*/
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.topnav .search-container {
    display: inline-block;
}

.topnav input[type=text] {
    padding: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    background-color: #f5f5f5;
    color: #606060;
    font-size: 14px;
    border: none;
    width: 600px;
}

.topnav .search-container button {
    padding: 12px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: #FFFFFF;
    background-color: var(--app-default-color);
    font-size: 14px;
    border: none;
    cursor: pointer;

}

.topnav .search-container button:hover {
    background: #ccc;
}

@media screen and (max-width: 790px) {
    .topnav {
        overflow: hidden;
        background-color: #ffffff;
        width: 100%;
        display: contents;
        justify-content: normal;
        align-items: normal;

    }

    .topnav .search-container {
        display: inline-block;
    }

    .topnav .search-container {
        display: contents;
        width: 100%;
        float: none;
    }

    .topnav a, .topnav input[type=text], .topnav .search-container button {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        padding: 14px;
    }

    .topnav input[type=text] {
        border: 1px solid #ccc;
    }


`;