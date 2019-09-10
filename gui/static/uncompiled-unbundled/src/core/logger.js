let instance = null;
export class Logger {
  constructor() {
    console.clear();
    console.log('%cStop!', 'font: 4em sans-serif; color: white; background-color: red;');
    console.log('%cThis is a browser feature intended for developers.', 'font: 2em sans-serif');
    console.log('%cIf someone told you to copy-paste something here to \'hack\' someone\'s account, ' + 'it is a scam and will give them access to your account.', 'font: 2em sans-serif');
    console.log('Are you a developer? We’re hiring! Email Us at info@interintel.co.ke');
  }
  /**
   * Get Logger Instance, Creates one if none exists
   * @return {Logger} Logger Instance
   */


  static get i() {
    if (!instance) {
      instance = new Logger();
    }

    return instance;
  }

  info(...message) {
    const label = 'adaptive-ui';
    console.info('%c ' + (label ? '[' + label + ']' : '') + ' ', 'background: #222; color: #fff', ...message);
  } // error


  error(...message) {
    const label = 'adaptive-ui';
    console.error('%c ' + (label ? '[' + label + ']' : '') + ' ', 'background: #222; color: #fff', ...message);
  } // todo warn


  warn(...message) {
    const label = 'adaptive-ui';
    console.warn('%c ' + (label ? '[' + label + ']' : '') + ' ', 'background: #222; color: #fff', ...message);
  }

  debug(...message) {
    if (window.process['env']['NODE_ENV'] === 'development') {
      this.info(...message);
    }
  }

  incompleteDev(...message) {
    this.info('[INCOMPLETE DEV]', ...message);
  }

  switchConfiguration(...message) {
    // use warning
    this.info('[SWITCH CONFIGURATION]', ...message);
  }

}