var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'jsonml',
  'description': 'JSONML - JSON Markup Language (XML conversion).',
  'schema': "string"
});
