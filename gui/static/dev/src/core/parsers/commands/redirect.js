import { Command } from "./command.js";
export class Redirect extends Command {
  get url() {
    return this.response;
  }

}