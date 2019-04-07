$(document).ready(function () {
    $('#hyphen-id').click(function () {
      updateBothAreas(replaceSpecialCharacters(tinyMCE.activeEditor.getBody().textContent, '-'));
    });
    $('#clear-id').click(function () {
      updateBothAreas('');
    });
    $('#space-id').click(function () {
      updateBothAreas(replaceSpecialCharacters(tinyMCE.activeEditor.getBody().textContent, ' '));
    });
    $('#underscore-id').click(function () {
      updateBothAreas(replaceSpecialCharacters(tinyMCE.activeEditor.getBody().textContent, '_'));
    });
    $('#period-id').click(function () {
      updateBothAreas(replaceSpecialCharacters(tinyMCE.activeEditor.getBody().textContent, '.'));
    });
    $('#upcase-id').click(function () {
      updateBothAreas(tinyMCE.activeEditor.getBody().textContent.toUpperCase());
    });
    $('#lowercase-id').click(function () {
      updateBothAreas(tinyMCE.activeEditor.getBody().textContent.toLowerCase());
    });
    $('#titlecase-id').click(function () {
      updateBothAreas(toTitleCase(tinyMCE.activeEditor.getBody().textContent));
    });
    $('#sitecore-id').click(function () {
      updateBothAreas(removeBrackets(tinyMCE.activeEditor.getContent().toLowerCase()));
    });
    $('#clean-id').click(function () {
      updateBothAreas(clean(tinyMCE.activeEditor.getContent()));
    });
    $('#html-area').on("change keyup paste", function() {
      tinyMCE.activeEditor.getBody().innerHTML = $('#html-area').val();
    });
  })
