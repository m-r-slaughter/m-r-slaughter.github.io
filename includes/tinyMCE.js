tinymce.init({
    selector: '#formValueId',
    setup: function(editor) {
      editor.on('keyup', function(e) {
        updateHTMLArea(tinyMCE.activeEditor.getContent());
      });
      editor.on('paste', function(e) {
        updateHTMLArea(tinyMCE.activeEditor.getContent());
      });
      editor.on('dirty', function(e) {
        updateHTMLArea(tinyMCE.activeEditor.getContent());
      });
      editor.on('change', function(e) {
        updateHTMLArea(tinyMCE.activeEditor.getContent());
      });
      editor.on('redo', function(e) {
        updateHTMLArea(tinyMCE.activeEditor.getContent());
      });
      editor.on('undo', function(e) {
        updateHTMLArea(tinyMCE.activeEditor.getContent());
      });
    },
    plugins : 'advlist autolink link image lists charmap print preview paste code wordcount hr visualblocks visualchars',
    branding: false,
    element_format: 'html',
    extended_valid_elements : "span[!class]",
    invalid_styles: "font-weight font-size color",
    height: 500
  });
