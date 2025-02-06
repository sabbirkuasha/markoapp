frappe.pages['better-markdown-edit'].on_page_load = function(wrapper) {

	let page = frappe.ui.make_app_page({
		parent: wrapper,
		title: 'Markdown Editor ',
		single_column: true
	});

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
			console.log('Selected DocType:', docType);

			// Remove existing document field if it exists
            if (window.document_field) {
				console.log('Removing Existing Document Field if exist')
                window.document_field.remove();
            }

			let document_field = page.add_field({
				label: 'Document',
				fieldtype: 'Link',
				fieldname: 'document',
				options: docType,
				change() {
					console.log(document_field.get_value());
					}
			})
		}
	});

}

