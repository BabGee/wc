import { LitElement } from "../../node_modules/lit-element/lit-element.js";
import { SerializableElement, Validation } from "../core/serializable-element.js";
/* eslint max-len: ["error", { "ignoreTemplateLiterals": true }]*/

export const FormBase = class extends LitElement {
  serialize() {
    // Only elements that have a `name` and are not disabled are submittable.
    var elements = this._findElements();

    var json = {};

    for (var i = 0; i < elements.length; i++) {
      const loader = elements[i];
      const l = loader.loadedElement();

      if (l instanceof SerializableElement) {
        const value = l.getValue(); // If value is an object, iterate the key value pairs

        if (!Array.isArray([value]) && typeof value === 'object') {
          // `value === null` should never happen
          Object.entries(value).forEach(([name, value]) => {
            this._addSerializedElement(json, name, value);
          });
        } else {
          this._addSerializedElement(json, l.getName(), value);
        }
      }
    }

    return json;
  }
  /**
   * Validate all Serializeable Form elements
   *
   * @return {boolean}
   */


  validate() {
    var elements = this._findElements();

    for (var i = 0; i < elements.length; i++) {
      const loader = elements[i];
      const l = loader.loadedElement();

      if (l instanceof SerializableElement) {
        const validation = l.validate();

        if (validation instanceof Validation) {
          if (!validation.isValid) {
            // prefer elements invalid() implementation
            // over general class addition to loader
            try {
              l.invalid(validation);
            } catch (e) {
              console.error(e);
              loader.classList.add('invalid-e-l');
            }

            console.error(loader, l);
            l.scrollIntoView({
              behavior: 'smooth',
              block: 'end'
            });
            return false;
          } else {
            try {
              l.valid(validation);
            } catch (e) {
              console.error(e);
              loader.classList.remove('invalid-e-l');
            }
          }
        } else {
          // todo backward compatibility
          console.warn('[DEPRECATED API USAGE] the element [' + l.e.name + '] is still on legacy code .validate');

          if (!validation) {
            // prefer elements invalid()
            // implementation over general class addition to loader
            try {
              l.invalid();
            } catch (e) {
              console.error(e);
              loader.classList.add('invalid-e-l');
            }

            l.scrollIntoView({
              behavior: 'smooth',
              block: 'end'
            });
            console.error(loader, l);
            return false;
          } else {
            try {
              l.valid();
            } catch (e) {
              console.error(e);
              loader.classList.remove('invalid-e-l');
            }
          }
        }
      }
    }

    return true;
  }

  _addSerializedElement(json, name, value) {
    // If the name doesn't exist, add it. Otherwise, serialize it to
    // an array,
    if (json[name] === undefined) {
      json[name] = value;
    } else {
      if (!Array.isArray(json[name])) {
        json[name] = [json[name]];
      }

      json[name].push(value);
    }
  }

  getForm() {
    return this.shadowRoot.querySelector('slot[name=\'body\']').assignedNodes()[0];
  }

  _findElements() {
    // var nodes = Polymer.dom(parent).querySelectorAll('element-loader');
    var nodes = this.getForm().elementLoaders();
    var submittable = [];

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i]; // An element is submittable if it is not disabled, and if it has a
      // 'name' attribute.

      var tag = node.nodeName.toLowerCase();

      if (tag === 'element-loader') {
        submittable.push(node);
      }
    }

    return submittable;
  }

};