export const register = function (ComponentClass) {
  const registerIfThemeIs = 'bulkit';

  if (window.THEME === registerIfThemeIs) {
    window.customElements.define(ComponentClass.is, ComponentClass);
  }
};