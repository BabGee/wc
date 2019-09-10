export class Command {
  constructor(commandResponse, config) {
    this.commandResponse = commandResponse;
    this.parse(config);
  }

  parse(config = {}) {
    // default action is to assume the command response is a string
    this._response = this.commandResponse; // console.log('command parse');
  }

  get response() {
    return this._response;
  }

}