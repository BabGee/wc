/**
@license
Copyright (c) 2018 InterIntel Technologies. All rights reserved.

*/
import { html } from "../../../../node_modules/lit-element/lit-element.js";
import { register } from "../register.js";
import { SnackBarBase } from "../../../components/snack-bar.js";

class SnackBar extends SnackBarBase {
  render() {
    return html`
      <style>
      :host {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 12px;
        background-color: var(--app-default-color);
        color: white;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        will-change: transform;
        transform: translate3d(0, 100%, 0);
        transition-property: visibility, transform;
        transition-duration: 0.2s;
        visibility: hidden;
      }
      :host([active]) {
        visibility: visible;
        transform: translate3d(0, 0, 0);
      }
      @media (min-width: 460px) {
        :host {
          width: 320px;
          margin: auto;
        }
      }
    </style>
    <slot></slot>
    `;
  }

}

register(SnackBar);