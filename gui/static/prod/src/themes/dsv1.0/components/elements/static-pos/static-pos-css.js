/**
@license
Copyright (c) 2020 InterIntel Technologies. All rights reserved.

*/
import { css } from "../../../../../../node_modules/lit-element/lit-element.js";
export const StaticPosStyles = css`

html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  body {
    margin: 0;
  }
  
  /* Responsive Images */
  
  embed,
  iframe,
  img,
  object,
  video {
    max-width: 100%;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  p,
  pre,
  blockquote,
  figure,
  hr {
    margin: 0;
    padding-right: 0;
    padding-left: 0;
  }
  
  a {
    text-decoration: none;
  }
  
  a:focus {
    outline: none;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    display: block;
  }
  
  /* Removes all decimals and discs from lists */
  
  ol,
  ul {
    list-style: none;
  }
  
  /* 
   * Completely resets form items
   * ----------------------------
   * Super hard reset that removes all borders
   * and radiuses of all form items (including
   * checkboxes and radios)
   */
  
  .calculator__keys input,
  .calculator__keys textarea, button {
    border: 0;
    border-radius: 0;
    background-color: transparent;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    outline: none;
    appearance: none;
    text-align: left;
  }
  
  
  
  
  
  
  .pad {
  display: none;
    font-size: 120%;
    font-weight: 700;
    line-height: 1.3;
    max-width: 40em;
    margin: auto;
  }
  
  .pad > p {
    text-align: center;
  }
  
  .calculator {
    border-radius: 12px;
    box-shadow: 0 0 40px 0px rgba(0, 0, 0, 0.15);
    margin-left: auto;
    margin-right: auto;
    margin-top: 2em;
    overflow: hidden;
  }
  
  .calculator__display {
    background-color: #222222;
    color: #fff;
    font-size: 1.714285714em;
    padding: 1.5em 2.5em;
    text-align: right;
  }
  
  .calculator__keys {
    background-color: #999;
    display: grid;
    grid-gap: 1px;
    grid-template-columns: repeat(3, 1fr);
  }
  
  .calculator__keys > * {
    background-color: #fff;
    padding:  3em 2em;
    position: relative;
    text-align: center;
  }
  
  .calculator__keys > *:active::before,
  .calculator__keys > .is-depressed::before {
    background-color: rgba(0, 0, 0, 0.2);
    bottom: 0;
    box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5) inset;
    content: "";
    left: 0;
    opacity: 0.3;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
  
  .key--operator {
    background-color: #eee;
  }
  
  .key--equal {
    background-image: linear-gradient(to bottom, #fe886a, #ff7033);
  }
  #btn-keypad{
  display: none;
  }
              .cart-badge {
                  position: absolute;
                  top: -2px;
                  right: 0;
                  width: 20px;
                  height: 20px;
                  background-color: #F44336;
                  border-radius: 50%;
                  color: white;
                  font-size: 12px;
                  font-weight: 500;
                  pointer-events: none;
                  text-align: center;
                  
                  
              }

`;