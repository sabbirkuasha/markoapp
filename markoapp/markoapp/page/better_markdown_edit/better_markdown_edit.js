frappe.pages['better-markdown-edit'].on_page_load = function(wrapper) {


	// console.log(wrapper);

	let page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Markdown Editor ',
		single_column: true
	});

	page.set_title('Very Cool Markdown Editor');

	console.log(page);

	// Add Priamry Button
	page.set_primary_action('Save', function() {
		console.log('save clicked');
	})

	// Add Field
	let docType_field = page.add_field({
		label: 'Document Type',
		fieldtype: 'Link',
		fieldname: 'status',
		options: 'DocType',
		change() {
			const docType = docType_field.get_value();
			console.log(docType);

			let document_field = page.add_field({
			label: 'Document',
			fieldtype: 'Link',
			fieldname: 'document',
			options: docType,
			change() {
				console.log(field.get_value());
			}
			})
		}
	});

	
	
	
	
}