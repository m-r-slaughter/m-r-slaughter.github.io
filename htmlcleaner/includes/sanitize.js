// Functions to manipulate strings

function replaceSpecialCharacters (string, replacement) {
  string = string.replace(/[&\/\\#,_+().$~%'":*?<>{}-]/g, replacement);
  return string.replace(/\s+/g, replacement);
}

function removeBrackets (string) {
  return string.replace(/[{}]/g, '');
}

function toTitleCase (str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

function clean(source) {
  var noNBSP = swapNBSP(source);
  return noNBSP.replace(/<br>|<p>&nbsp;<\/p>|<p>\s<\/p>|class="[a-zA-Z0-9:;\.\s\(\)\-\,]*"|style="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi, '');
}

function swapNBSP(source) {
  return source.replace(/&nbsp;/gi, ' ');
}


// Functions to alter TextAreas

function updateBothAreas (string) {
  tinyMCE.activeEditor.setContent(string);
  updateHTMLArea(tinyMCE.activeEditor.getContent());
}

function updateHTMLArea (html) {
  $('#html-area').val(html);
}

module.exports.replaceSpecialCharacters = replaceSpecialCharacters;
module.exports.removeBrackets = removeBrackets;
module.exports.toTitleCase = toTitleCase;
module.exports.clean = clean;
module.exports.swapNBSP = swapNBSP;
