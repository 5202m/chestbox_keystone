var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Versions Model
 * ==========
 */

var Versions = new keystone.List('Versions', {
	map: { name: 'company_id' },
	autokey: { path: 'slug', from: 'company_id', unique: true }
});

Versions.add({
	_class: { type: String, hidden: true },
	company_id: { type: Types.Select, options: '1, 2, 3', default: '1', index: true, required: true },
	plat_type_key: { type: Types.Select, label: 'platform', options: 'ios, android, pcui', default: 'ios', index: true, required: true },
	version: { type: Types.Number, index: true },
	url: { type: Types.Url },
	comment: { type: Types.Html, wysiwyg: true, height: 150 },
	isForce: { type: Types.Select, options: '0, 1, 2', default: '0', index: true },
	updateTime: { type: Types.Datetime, default: Date.now, index: false, hidden: true},
	seq: { type: String }
});

Versions.schema.virtual('content.full').get(function() {
	return this.comment;
});

Versions.defaultColumns = '_id, company_id, plat_type_key, version, url, isForce, updateTime';
Versions.register();
