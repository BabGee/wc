import"../../../../../../node_modules/@polymer/paper-checkbox/paper-checkbox.js";import"../../../../../../node_modules/@polymer/iron-icon/iron-icon.js";import"../../../../../../node_modules/@polymer/paper-button/paper-button.js";import"../../../../../../node_modules/@polymer/iron-image/iron-image.js";import{dataSourceMixin}from"../../../../../core/mixins/datasource-mixin.js";import"./datasource-table-head.js";import"./datasource-table-actions.js";import"./datasource-table-footer.js";import{LitElement,html,css}from"../../../../../../node_modules/lit-element/lit-element.js";export class DataSourceList extends dataSourceMixin(LitElement){static get styles(){return css`
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


            /* -- Material Design Table style -------------- */
            .table {
                background-color: #fff;
                width: 100%;
            }

            .table > thead > tr,
            .table > tbody > tr,
            .table > tfoot > tr {
                -webkit-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;
            }

            .table > thead > tr > th,
            .table > tbody > tr > th,
            .table > tfoot > tr > th,
            .table > thead > tr > td,
            .table > tbody > tr > td,
            .table > tfoot > tr > td {
                text-align: left;
                padding: 8px 16px;
                align-items: center;
                font-size: 13px;
                color: #54667a;
                border-top: 0;
                -webkit-transition: all 0.3s ease;
                -o-transition: all 0.3s ease;
                transition: all 0.3s ease;
            }

            .table > thead > tr > th {
                font-weight: 400;
                color: #2d3436;
                vertical-align: bottom;
                font-size: 15px;
                padding: 15px 8px;
                text-transform: capitalize;
                border-bottom: 2px solid rgba(0, 0, 0, 0.12);
            }

            .table > caption + thead > tr:first-child > th,
            .table > colgroup + thead > tr:first-child > th,
            .table > thead:first-child > tr:first-child > th,
            .table > caption + thead > tr:first-child > td,
            .table > colgroup + thead > tr:first-child > td,
            .table > thead:first-child > tr:first-child > td {
                border-top: 0;
            }

            .table > tbody + tbody {
                border-top: 1px solid rgba(0, 0, 0, 0.12);
            }

            .table .table {
                background-color: #fff;
            }

            .table .no-border {
                border: 0;
            }

            .table-condensed > thead > tr > th,
            .table-condensed > tbody > tr > th,
            .table-condensed > tfoot > tr > th,
            .table-condensed > thead > tr > td,
            .table-condensed > tbody > tr > td,
            .table-condensed > tfoot > tr > td {
                padding: 0.8rem;
            }

            .table-bordered {
                border: 0;
            }

            .table-bordered > thead > tr > th,
            .table-bordered > tbody > tr > th,
            .table-bordered > tfoot > tr > th,
            .table-bordered > thead > tr > td,
            .table-bordered > tbody > tr > td,
            .table-bordered > tfoot > tr > td {
                border: 0;
                border-bottom: 1px solid #e0e0e0;
            }

            .table-bordered > thead > tr > th,
            .table-bordered > thead > tr > td {
                border-bottom-width: 2px;
            }

            .table-striped > tbody > tr:nth-child(odd) > td,
            .table-striped > tbody > tr:nth-child(odd) > th {
                background-color: #f5f5f5;
            }

            .table-hover > tbody > tr:hover > td,
            .table-hover > tbody > tr:hover > th {
                background-color: rgba(0, 0, 0, 0.12);
            }

            .table-responsive-vertical {
                padding: 0;
             /*   box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);*/
                overflow: auto;
            }

            @media screen and (max-width: 768px) {
                .table-responsive-vertical {
                    margin: 16px;
                }

                .table-responsive-vertical > .table {
                    margin-bottom: 0;
                    background-color: transparent;
                }

                .table-responsive-vertical > .table > thead,
                .table-responsive-vertical > .table > tfoot {
                    display: none;
                }

                .table-responsive-vertical > .table > tbody {
                    display: block;
                }

                .table-responsive-vertical > .table > tbody > tr {
                    display: block;
                    border: 1px solid #e0e0e0;
                    border-radius: 2px;
                    margin-bottom: 1.6rem;
                }

                .table-responsive-vertical > .table > tbody > tr > td {
                    background-color: #fff;
                    display: block;
                    vertical-align: middle;
                    text-align: right;
                }

                .table-responsive-vertical > .table > tbody > tr > td[data-title]:before {
                    content: attr(data-title);
                    float: left;
                    font-size: inherit;
                    font-weight: 400;
                    color: #757575;
                }

   



                .table-responsive-vertical > .table-bordered {
                    border: 0;
                }

                .table-responsive-vertical > .table-bordered > tbody > tr > td {
                    border: 0;
                    border-bottom: 1px solid #e0e0e0;
                }

                .table-responsive-vertical > .table-bordered > tbody > tr > td:last-child {
                    border-bottom: 0;
                }

                .table-responsive-vertical > .table-striped > tbody > tr > td,
                .table-responsive-vertical > .table-striped > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical > .table-striped > tbody > tr > td:nth-child(odd) {
                    background-color: #f5f5f5;
                }

                .table-responsive-vertical > .table-hover > tbody > tr:hover > td,
                .table-responsive-vertical > .table-hover > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical > .table-hover > tbody > tr > td:hover {
                    background-color: rgba(0, 0, 0, 0.12);
                }
            }

            .table-striped.table-mc-red > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-red > tbody > tr:nth-child(odd) > th {
                background-color: #fde0dc;
            }

            .table-hover.table-mc-red > tbody > tr:hover > td,
            .table-hover.table-mc-red > tbody > tr:hover > th {
                background-color: #f9bdbb;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-red > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-red > tbody > tr > td:nth-child(odd) {
                    background-color: #fde0dc;
                }

                .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-red > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-red > tbody > tr > td:hover {
                    background-color: #f9bdbb;
                }
            }

            .table-striped.table-mc-pink > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-pink > tbody > tr:nth-child(odd) > th {
                background-color: #fce4ec;
            }

            .table-hover.table-mc-pink > tbody > tr:hover > td,
            .table-hover.table-mc-pink > tbody > tr:hover > th {
                background-color: #f8bbd0;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-pink > tbody > tr > td:nth-child(odd) {
                    background-color: #fce4ec;
                }

                .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-pink > tbody > tr > td:hover {
                    background-color: #f8bbd0;
                }
            }

            .table-striped.table-mc-purple > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-purple > tbody > tr:nth-child(odd) > th {
                background-color: #f3e5f5;
            }

            .table-hover.table-mc-purple > tbody > tr:hover > td,
            .table-hover.table-mc-purple > tbody > tr:hover > th {
                background-color: #e1bee7;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-purple > tbody > tr > td:nth-child(odd) {
                    background-color: #f3e5f5;
                }

                .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-purple > tbody > tr > td:hover {
                    background-color: #e1bee7;
                }
            }

            .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) > th {
                background-color: #ede7f6;
            }

            .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
            .table-hover.table-mc-deep-purple > tbody > tr:hover > th {
                background-color: #d1c4e9;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-deep-purple > tbody > tr > td:nth-child(odd) {
                    background-color: #ede7f6;
                }

                .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-deep-purple > tbody > tr > td:hover {
                    background-color: #d1c4e9;
                }
            }

            .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) > th {
                background-color: #e8eaf6;
            }

            .table-hover.table-mc-indigo > tbody > tr:hover > td,
            .table-hover.table-mc-indigo > tbody > tr:hover > th {
                background-color: #c5cae9;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-indigo > tbody > tr > td:nth-child(odd) {
                    background-color: #e8eaf6;
                }

                .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-indigo > tbody > tr > td:hover {
                    background-color: #c5cae9;
                }
            }

            .table-striped.table-mc-blue > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-blue > tbody > tr:nth-child(odd) > th {
                background-color: #e7e9fd;
            }

            .table-hover.table-mc-blue > tbody > tr:hover > td,
            .table-hover.table-mc-blue > tbody > tr:hover > th {
                background-color: #d0d9ff;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-blue > tbody > tr > td:nth-child(odd) {
                    background-color: #e7e9fd;
                }

                .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-blue > tbody > tr > td:hover {
                    background-color: #d0d9ff;
                }
            }

            .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) > th {
                background-color: #e1f5fe;
            }

            .table-hover.table-mc-light-blue > tbody > tr:hover > td,
            .table-hover.table-mc-light-blue > tbody > tr:hover > th {
                background-color: #b3e5fc;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-light-blue > tbody > tr > td:nth-child(odd) {
                    background-color: #e1f5fe;
                }

                .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-light-blue > tbody > tr > td:hover {
                    background-color: #b3e5fc;
                }
            }

            .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) > th {
                background-color: #e0f7fa;
            }

            .table-hover.table-mc-cyan > tbody > tr:hover > td,
            .table-hover.table-mc-cyan > tbody > tr:hover > th {
                background-color: #b2ebf2;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-cyan > tbody > tr > td:nth-child(odd) {
                    background-color: #e0f7fa;
                }

                .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-cyan > tbody > tr > td:hover {
                    background-color: #b2ebf2;
                }
            }

            .table-striped.table-mc-teal > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-teal > tbody > tr:nth-child(odd) > th {
                background-color: #e0f2f1;
            }

            .table-hover.table-mc-teal > tbody > tr:hover > td,
            .table-hover.table-mc-teal > tbody > tr:hover > th {
                background-color: #b2dfdb;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-teal > tbody > tr > td:nth-child(odd) {
                    background-color: #e0f2f1;
                }

                .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-teal > tbody > tr > td:hover {
                    background-color: #b2dfdb;
                }
            }

            .table-striped.table-mc-green > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-green > tbody > tr:nth-child(odd) > th {
                background-color: #d0f8ce;
            }

            .table-hover.table-mc-green > tbody > tr:hover > td,
            .table-hover.table-mc-green > tbody > tr:hover > th {
                background-color: #a3e9a4;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-green > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-green > tbody > tr > td:nth-child(odd) {
                    background-color: #d0f8ce;
                }

                .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-green > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-green > tbody > tr > td:hover {
                    background-color: #a3e9a4;
                }
            }

            .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) > th {
                background-color: #f1f8e9;
            }

            .table-hover.table-mc-light-green > tbody > tr:hover > td,
            .table-hover.table-mc-light-green > tbody > tr:hover > th {
                background-color: #dcedc8;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-light-green > tbody > tr > td:nth-child(odd) {
                    background-color: #f1f8e9;
                }

                .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-light-green > tbody > tr > td:hover {
                    background-color: #dcedc8;
                }
            }

            .table-striped.table-mc-lime > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-lime > tbody > tr:nth-child(odd) > th {
                background-color: #f9fbe7;
            }

            .table-hover.table-mc-lime > tbody > tr:hover > td,
            .table-hover.table-mc-lime > tbody > tr:hover > th {
                background-color: #f0f4c3;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-lime > tbody > tr > td:nth-child(odd) {
                    background-color: #f9fbe7;
                }

                .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-lime > tbody > tr > td:hover {
                    background-color: #f0f4c3;
                }
            }

            .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) > th {
                background-color: #fffde7;
            }

            .table-hover.table-mc-yellow > tbody > tr:hover > td,
            .table-hover.table-mc-yellow > tbody > tr:hover > th {
                background-color: #fff9c4;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-yellow > tbody > tr > td:nth-child(odd) {
                    background-color: #fffde7;
                }

                .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-yellow > tbody > tr > td:hover {
                    background-color: #fff9c4;
                }
            }

            .table-striped.table-mc-amber > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-amber > tbody > tr:nth-child(odd) > th {
                background-color: #fff8e1;
            }

            .table-hover.table-mc-amber > tbody > tr:hover > td,
            .table-hover.table-mc-amber > tbody > tr:hover > th {
                background-color: #ffecb3;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-amber > tbody > tr > td:nth-child(odd) {
                    background-color: #fff8e1;
                }

                .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-amber > tbody > tr > td:hover {
                    background-color: #ffecb3;
                }
            }

            .table-striped.table-mc-orange > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-orange > tbody > tr:nth-child(odd) > th {
                background-color: #fff3e0;
            }

            .table-hover.table-mc-orange > tbody > tr:hover > td,
            .table-hover.table-mc-orange > tbody > tr:hover > th {
                background-color: #ffe0b2;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-orange > tbody > tr > td:nth-child(odd) {
                    background-color: #fff3e0;
                }

                .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-orange > tbody > tr > td:hover {
                    background-color: #ffe0b2;
                }
            }

            .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > td,
            .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) > th {
                background-color: #fbe9e7;
            }

            .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
            .table-hover.table-mc-deep-orange > tbody > tr:hover > th {
                background-color: #ffccbc;
            }

            @media screen and (max-width: 767px) {
                .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td,
                .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr:nth-child(odd) {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-striped.table-mc-deep-orange > tbody > tr > td:nth-child(odd) {
                    background-color: #fbe9e7;
                }

                .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover > td,
                .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr:hover {
                    background-color: #fff;
                }

                .table-responsive-vertical .table-hover.table-mc-deep-orange > tbody > tr > td:hover {
                    background-color: #ffccbc;
                }
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
            }

            /* Card Styles */

            .item {
                display:flex;
                flex-direction:row;
                padding: 20px;
                border-radius: 2px;
                background-color: white;
                border: 1px solid #ddd;
                /*max-width: 800px;*/
                /*margin: 16px auto 0 auto;*/
            }

            .item:focus {
                outline: 0;
                border-color: #333;
            }

            .avatar {
                height: 40px;
                width: 40px;
                border-radius: 20px;
                box-sizing: border-box;
                background-color: #DDD;
            }

            .pad {
                padding: 0 16px;
                flex:1;
                flex-basis:0.000001px;
                display:flex;
                flex-direction:column;
            }

            .primary {
                font-size: 16px;
                font-weight: bold;
            }

            .secondary {
                font-size: 14px;
            }

            .dim {
                color: gray;
            }
            
    
    `}constructor(){super();this.columns=[];this.cols=[];this.data=[];this.selected=[];this.availableSize=[10,50,100,500]}renderColumn(paperDatatableApiColumn,valueFromRowData,p,rowData,rowIndex){if(paperDatatableApiColumn.actions){return html`
        
        <datasource-table-actions
        .cols=${this.cols}
        .pl=${this.pl}
        .item=${rowData}
        ></datasource-table-actions>
        
        `}else if(this.selectable&&0===p){return html`
        <paper-checkbox
        .rowData=${rowData}
        .rowIndex=${rowIndex}
        ></paper-checkbox>
        `}else{try{let columnValue=valueFromRowData;var dJson;if("object"==typeof columnValue){dJson=columnValue}else{dJson=JSON.parse(columnValue);if("object"!=typeof dJson){throw"Not Object JSON"}}const vs=[];for(var property in dJson){vs.push(html`<div style="margin-top:0.1px;"><strong>${property}: </strong><span>${dJson[property]}</span></div>`)}return html`
          ${vs.map(v=>html` ${v}<br>`)}`}catch(e){switch(paperDatatableApiColumn.type){case"boolean":return html`
              ${"false"==(valueFromRowData+"").toLowerCase()?html`
              <iron-icon icon="icons:close"></iron-icon>
              `:html`
              <iron-icon icon="icons:check"></iron-icon>
              `}
              
              `;break;default:return html`${valueFromRowData}`;}}}}render(){return html`
        <style>
            

        </style>
        ${this._searchFieldsExist(this.columns)?html`
        
            <div class="topnav">
                <div class="search-container">

                    <paper-dropdown-menu label="Search In">
                        <paper-listbox slot="dropdown-content"
                                       id="qIn"
                                       fallback-selection="q"
                                       attr-for-selected="param">
                            <paper-item param="q">All</paper-item>
                            ${this.searchFields(this.columns).map(item=>html`<paper-item param="${item.propertyPath}">${item.header}</paper-item>`)}
                        </paper-listbox>
                    </paper-dropdown-menu>

                    <paper-input style="display: inline-block"
                                 placeholder="Search ..."
                                 name="search"
                                 id="q"></paper-input>

                    <button type="submit" @click="${this._search}">Search</button>
                    <button type="button" @click="${this._searchReset}">Clear</button>

                </div>
            </div>        
            `:html``}
            <!-- Table starts here -->
            ${this._type("table")?html`
            
                     <!-- Responsive table starts here -->
            <!-- For correct display on small screens you must add 'data-title' to each 'td' in your table -->
            <div class="table-responsive-vertical" style="max-height: 60vh;">
            
                <table id="table" class="table table-hover table-mc-light-blue">
                <thead>
                <tr>
                ${this.columns.map(column=>html`
                         <th style="">
                            <datasource-table-head
                                    .column="${column}"
                                    sort-direction$="[[column.sortDirection]]"
                                    @input-change-th-content="${this._handleInputChange}"
                                    sorted$="[[column.sorted]]"
                                    sortable$="[[column.sortable]]"
                                    @sort-th-content="${this._handleSort}">
                            </datasource-table-head>
                        </th>
                `)}
                </tr>
                </thead>
                <tbody>
                ${this.data.map((row,rowIndex)=>html`
                <tr>
                ${this.columns.map((column,columnIndex)=>html`
                
                <td>${this.renderColumn(column,row[column.property],columnIndex,row,rowIndex)}</td>
                
                `)}
                </tr>
                `)}
                
                
                </tbody>
            </table>
            </div>
            
            `:html`
            <!--_type('card') todo check more types-->
            <div style="height: 60vh;overflow-y: scroll;">
            ${this.data.map(item=>html`
            
                    <div class="item">
                        <iron-image class="avatar" sizing="contain" src="/media/${item.image}"></iron-image>
                        <div class="pad">

                            <div class="primary">${item.name}</div>

                            ${this.values(item).map(vv=>html`
                            <div class="secondary"> ${vv[0]} <span class="secondary dim"> ${vv[1]}</span></div>
                            `)}
                                
                            ${this.downloads(item,this.details).map(download=>html`
                            <a target="_blank" 
                                class="secondary" download href="/media/${download[1]}"> Download ${download[0]}</a>
                            `)}
                                

                            <div>
                                ${item.links.map(ll=>html`
                                <paper-button
                                            .dataLink=${ll}
                                            @tap="${this._action}"
                                            style="display: inline-block;">${ll.title}</paper-button>
                                
                                `)}
                            </div>

                        </div>
                    </div>

            
            
            `)}
            </div>

            
            `}
${this.paginate?html`
<datasource-table-footer resources="${this.resources}"
                       language="${this.language}"
                       footer-position="${this.footerPosition}"
                       .availableSize="${this.availableSize}"
                       .totalPages="${this.totalPages}"
                       .totalElements="${this.totalElements}"
                       .oldPage="${this.oldPage}"
                       
                       size="${this.size}"
                       page="${this.page}"
                       
                       @size-change="${this._sizeChanged}"
                       @p-page="${this._pageChanged}"
                       @n-page="${this._pageChanged}">
</datasource-table-footer>
`:html``}
`}static get is(){return"datasource-list"}static get properties(){return{data:{type:Array,notify:!0},q:{type:String,value:"",notify:!0},cols:{type:Array,value:[]},columns:{type:Array},paginate:{type:Boolean,value:!1},page:{type:Number},size:{type:Number},oldPage:{type:Number,notify:!0},totalElements:Number,totalPages:Number,availableSize:Array,type:{type:String,value:"table"},details:Object,selectable:{type:Boolean,value:!1},selected:{type:Array}}}firstUpdated(){}values(item){const v=[];for(var property in item){if(item.hasOwnProperty(property)){if("links"!==property&&"image"!==property&&"name"!==property){v.push([property,item[property]])}}}return v}downloads(item,details){if("download_links"in details&&details.download_links.length){const v=[];for(var property in item){if(item.hasOwnProperty(property)&&details.download_links.includes(property)){v.push([property,item[property]])}}return v}return[]}_type(typ){if(!this.type){return!0}return this.type==typ}_handleSort(evt){console.log(evt)}_handleInputChange(evt){this.dispatchEvent(new CustomEvent("dropdown-filter",{detail:{path:evt.detail.column.propertyPath,value:evt.detail.value}}))}searchFields(columns){return columns.filter(function(item){return item.filter})}_searchFieldsExist(columns){return 0<columns.filter(function(item){return item.filter}).length}_action(evt){const dataAction=evt.currentTarget.dataLink;this.pl._dialog(dataAction.service,dataAction.params)}_pageChanged(evt){const page=evt.detail.page,oldPage=this.page;if(oldPage!==void 0&&oldPage!=page){this.dispatchEvent(new CustomEvent("page-change",{detail:{oldPage:oldPage,page:page}}))}this.page=page}_sizeChanged(evt){const size=evt.detail.size,oldSize=this.size;if(oldSize!==void 0&&oldSize!=size){this.dispatchEvent(new CustomEvent("size-change",{detail:{oldSize:oldSize,size:size}}))}this.size=size}_extractData(rowData,columnProperty){if(columnProperty){const splittedProperties=columnProperty.split(".");if(1<splittedProperties.length){return splittedProperties.reduce((prevRow,property)=>{if("string"===typeof prevRow&&rowData[prevRow]&&rowData[prevRow][property]){return rowData[prevRow][property]}return prevRow[property]||""})}return rowData[columnProperty]}return null}_selectChange(event){let localTarget;if(event.type&&"change"===event.type){localTarget=Polymer.dom(event).localTarget}else{localTarget=event}const tr=Polymer.dom(localTarget).parentNode.parentNode,rowData=localTarget.rowData,rowId=localTarget.rowIndex;if(localTarget.checked){this.push("selected",rowData.id);tr.classList.add("selected")}else{this.splice("selected",this.selectedRows.indexOf(rowData.id),1);tr.classList.remove("selected")}}_searchReset(){}_search(){const self=this,q=self.shadowRoot.querySelector("#q").value,qIn=self.shadowRoot.querySelector("#qIn").selected;if(q){this.dispatchEvent(new CustomEvent("search",{detail:{column:qIn,searchFields:self.searchFields(self.columns).map(function(field){return field.propertyPath}),value:q}}))}}}customElements.define(DataSourceList.is,DataSourceList);