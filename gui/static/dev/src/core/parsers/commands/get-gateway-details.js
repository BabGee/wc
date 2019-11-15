import { Command } from './command.js';
export class GetGatewayDetails extends Command {
  constructor(getGatewayDetailsResponse, config) {
    super(getGatewayDetailsResponse, config);
  }
  /*
   isInstitution() {
    var key = 'get_institution_details';
    // key = "get_gateway_details";
    return key in this.response;
  }
  isGateway() {
    return !this.isInstitution();
  }
  getInstGateKey() {
    var key = 'get_institution_details';
    if (this.isGateway()) key = 'get_gateway_details';
    return key;
  }
  */


  parse(config = {}) {// todo cache check if institution or gateway
    // earlier methods are below
  }

  get profile() {
    return this.getProfile();
  }

  get authenticated() {
    return 'profile' in this.commandResponse;
  }

  getProfile() {
    if (this.authenticated) {
      var profile = this.commandResponse['profile'];
      return {
        'firstName': profile['first_name'],
        'lastName': profile['last_name'],
        'accessLevel': profile['access_level'],
        'role': profile['role'],
        'photo': profile['profile_photo']
      };
    }

    return null;
  }

  get name() {
    return this.commandResponse['name'];
  }

  get defaultColor() {
    return this.commandResponse['default_color'];
  }

  get primaryColor() {
    return this.commandResponse['primary_color'];
  }

  get secondaryColor() {
    return this.commandResponse['secondary_color'];
  }

  get accentColor() {
    return this.commandResponse['accent_color'];
  }

  get tagLine() {
    return this.commandResponse['tagline'];
  }

  get backgroundImage() {
    return this.commandResponse['background_image'];
  }
  /**
   * Get Gateway or Institution Icon Image
   * @return {*}
   */


  get iconImage() {
    return this.commandResponse['icon_image'];
  }

  get logo() {
    return this.commandResponse['logo'];
  }

}