export const register = function (ComponentClass) {
  const registerIfThemeIs = 'dsv1.0';

  if (window.THEME === registerIfThemeIs) {
    window.customElements.define(ComponentClass.is, ComponentClass);
  }
};