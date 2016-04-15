var keystone = require('keystone');
var Types = keystone.Field.Types;

var File = new keystone.List('fs.files',{
	nocreate: true,
	//map: {name: 'filename'},
	autokey: { path: 'slug', from: 'filename', unique: true }
});

File.add({
	
	/*filename: { type: String, required: true },
	//state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	//author: { type: Types.Relationship, ref: 'User', index: true },
	uploadDate: { type: Types.Date, index: true}, //, dependsOn: { state: 'published' } 
	image: { type: Types.CloudinaryImage },
	//content: {
		//brief: { type: Types.Html, wysiwyg: true, height: 150 },
		//extended: { type: Types.Html, wysiwyg: true, height: 400 }
	//},
	//categories: { type: Types.Relationship, ref: 'PostCategory', many: true }*/
	
	filename: { type: String, required: true },
	//state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	//author: { type: Types.Relationship, ref: 'User', index: true },
	//uploadDate: { type: Types.Date, index: true },
	image: { type: Types.CloudinaryImage }//,
	//content: {
		//brief: { type: Types.Html, wysiwyg: true, height: 150 },
		//extended: { type: Types.Html, wysiwyg: true, height: 400 }
	//}//,
	//categories: { type: Types.Relationship, ref: 'PostCategory', many: true }
});

File.schema.virtual('content.full').get(function() {
	//return this.content.extended || this.content.brief;
});

File.defaultColumns = '_id, filename|20%, uploadDate|20%';
File.register();