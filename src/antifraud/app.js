const controller = require('./controller');
const UtilSupport = require('../commons/util.support');

module.exports.handler = async (event) => {
  const { action, payload } = UtilSupport.getPayload(event);

  return controller[action](payload);
};