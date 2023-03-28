/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	 config.language = 'en';
	 config.uiColor = '#AADC6E';
    config.width = '100%';
    config.height = 500;
	config.plugins =
		'basicstyles,' +
		'colorbutton,' +
		'colordialog,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'find,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'iframe,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'justify,' +
		'link,' +
		'magicline,' +
		'maximize,' +
		'newpage,' +
		'preview,' +
		'removeformat,' +
		'resize,' +
		'showborders,' +
		'sourcearea,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tableselection,' +
		'tabletools,' +
		'templates,' +
		'toolbar,' +
		'undo,' +
		'wysiwygarea';
    config.removeButtons = 'Replace,Anchor,Cut,Copy,Paste';
};
