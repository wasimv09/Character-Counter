$(document).ready(function() {

  //Charater Counter
  var textArea = $('textarea');

  $('input[type="reset"]').click(function() {
    $(textArea).val('').keyup();
  });

  $(textArea).keyup(function() {
    let charCount = $('span.all_count');

    let count = $(this).val().length;

    let spaces = $(this).val().replace(/\s/g, '').length;
    let countSpaces = count - spaces;

    let wordChar = $(this).val().replace(/\W/g, '').length;
    let countWordChar = count - wordChar - countSpaces;

    let numeric = $(this).val().replace(/\d/g, '').length;
    let countNumeric = count - numeric;

    let alphaChar = count - countSpaces - countWordChar - countNumeric;

    $(charCount).text(count);
    $('.spaces').text(countSpaces);
    $('.alpha_char').text(alphaChar);
    $('.non_alpha_char').text(countWordChar);
    $('.numeric').text(countNumeric);
  });

  //To Uppercase
  var tuText = $('#tuText');

  $(tuText).keyup(function(event) {
    let toUpper = $(this).val().toUpperCase();

    $('#uText').text(toUpper);
  });

  //To Lowercase
  var tlText = $('#tlText');

  $(tlText).keyup(function(event) {
    let toLower = $(this).val().toLowerCase();

    $('#lText').text(toLower);
  });

  //To Camelcase
  var tccText = $('#tccText');

  $(tccText).keyup(function(event) {

    let toCamel = $(this).val().replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    let toCamelNoSpace = toCamel.replace(/\s/g, "");

    $('#ccText').text(toCamel);

    $('#removeSpace').click(function(event) {
      $('#ccText').text(toCamelNoSpace);
    });

  });

});