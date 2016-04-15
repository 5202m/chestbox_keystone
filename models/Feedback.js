var keystone = require('keystone');
var Types = keystone.Field.Types;
var debug = require('debug')
/**
 * Feedback Model
 * ==========
 */

var Feedback = new keystone.List('feedback', {
	nocreate: true,
	nodelete: true,
	map: { name: 'mobile' },
	schema:{collection:'feedback'},
	autokey: { path: 'slug', from: 'mobile', unique: true }
});

Feedback.add({
	mobile: { type: Types.Text, noedit: true },
	email: { type: Types.Text, noedit: true },
	system_log: { type: Types.Textarea, noedit: true },
	screen_shot: { type: Types.ViewImages, showUrl: 'http://192.168.35.115:3000/img/view?fid=' },//显示图片
	content: { type: Types.Textarea, noedit: true },
	time: { type: Types.Datetime, noedit: true },
	backoffice_remark: { type: Types.Textarea }
});

Feedback.defaultColumns = '_id, mobile, email, content, time';
Feedback.register();
