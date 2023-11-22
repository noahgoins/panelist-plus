function htmlEncode(value) {
    return $('<div/>').text(value).html();
}

$(function () {

    $('#generate').click(function () {

      // Generate the link that would be
      // used to generate the QR Code
      // with the given data 
      let finalURL =
'https://chart.googleapis.com/chart?cht=qr&chl=' +
        htmlEncode($('#content').val()) +
        '&chs=160x160&chld=L|0'

      // Replace the src of the image with
      // the QR code image
      $('.qr-code').attr('src', finalURL);
    });
  });