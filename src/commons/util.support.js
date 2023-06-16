const CommonConstants = require('./constants');

module.exports = {
  Logger(message) {
    console.log(message);
  },
  getPayload(event) {
    this.Logger(JSON.stringify(event));
    if (event.origin === CommonConstants.API_GATEWAY) {
      this.Logger(`Event - ${CommonConstants.API_GATEWAY}`);
      return {
        action: event.action,
        payload: {
          ...event.body,
          ...event.query,
          ...event.path
        }
      };
    }

    if (event.origin === CommonConstants.KAFKA) {
      this.Logger(`Event - ${CommonConstants.KAFKA}`);
      return {
        action: event.action,
        payload: event.payload
      };
    }
  }
};