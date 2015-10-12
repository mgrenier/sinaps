var _ = require('lodash');
var pluginAdmin = sinaps.require('sinaps.admin');
var FieldType = pluginAdmin.FieldType;

module.exports = function () {

	pluginAdmin.registerFieldType(new FieldType({
		handle: 'number',
		label: 'Number',
		type: Number,
		settings: {
			decimal: {
				type: 'number',
				label: 'Decimal',
				decimal: 0
			}
		},
		getInputTemplate: function () {
			return '<input type="text"\
	id="{{ field.id|default(field.name) }}"\
	class="{{ field.class|default("form-control input-sm") }}"\
	{% if field.name %} name="{{ field.name }}"{% endif %}\
	{% if field.value %} value="{{ field.value }}"{% endif %}\
	{% if field.size %} size="{{ field.size }}"{% endif %}\
	{% if field.maxlength %} maxlength="{{ field.maxlength }}"{% endif %}\
	{% if field.autofocus %} autofocus{% endif %}\
	{% if field.required %} required{% endif %}\
	{% if field.disabled %} disabled{% endif %}\
	{% if field.readonly %} readonly{% endif %}\
	{% if field.placeholder %} placeholder="{{ field.placeholder }}"{% endif %}\
/>';
		}
	}));
};
