// Download pdf 
$('<a/>', {
    id: 'downloadFile',
    href: './katalog.pdf',
    style: 'display:hidden;',
    download: ''
}).appendTo('body');

$("#downloadFile")[0].click();
// Header numbers click
$(document).ready(function(){
  $('.phone__group').click( function () {
    $('.phone__link .fa').toggleClass('phone__icon--hidden');
    $('.phone__slide').toggleClass('phone__slide--visibility');
  });
});  
// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});