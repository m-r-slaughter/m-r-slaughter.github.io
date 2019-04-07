const sanitize = require('../includes/sanitize.js');
const replaceSpecialCharacters = sanitize.replaceSpecialCharacters;
const removeBrackets = sanitize.removeBrackets;
const toTitleCase = sanitize.toTitleCase;
const clean = sanitize.clean;
const swapNBSP = sanitize.swapNBSP;

let testString = "Test+file*name"

test('replaces special characters with a -', () => {
    expect(replaceSpecialCharacters(testString, '-')).toBe("Test-file-name");
});

test('replaces special characters with a space', () => {
    expect(replaceSpecialCharacters(testString, ' ')).toBe("Test file name");
});

test('replaces special characters with a _', () => {
    expect(replaceSpecialCharacters(testString, '_')).toBe("Test_file_name");
});

test('replaces special characters with a .', () => {
    expect(replaceSpecialCharacters(testString, '.')).toBe("Test.file.name");
});

test('removes the brackets from around a a sitecore ID', () => {
    expect(removeBrackets("{86C96193-C3E6-4BB8-80BA-BD80BACFF2B6}")).toBe("86C96193-C3E6-4BB8-80BA-BD80BACFF2B6");
});

test('upcases the first letter of each word', () => {
    expect(toTitleCase("Hello there stranger, how are you?")).toBe("Hello There Stranger, How Are You?");
});

test('removes nbsp from string', () => {
    expect(clean("Hello There.&nbsp;")).toBe("Hello There. ");
});

test('removes breaks from string', () => {
    expect(clean("Hello There.<br><br><br>")).toBe("Hello There.");
});

test('removes class from string', () => {
    expect(clean(`<p class="col-md-6">Hello There.</p>`)).toBe("<p >Hello There.</p>");
});

test('removes style from string', () => {
    expect(clean(`<p style="color: red;">Hello There.</p>`)).toBe("<p >Hello There.</p>");
});

test('replaces nbsp with a space', () => {
    expect(swapNBSP("Hello&nbsp;There.")).toBe("Hello There.");
});
