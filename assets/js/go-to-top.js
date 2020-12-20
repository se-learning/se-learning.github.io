$(document).ready(function () {

    function init() {
        if(!document.getElementById('goToTopBtn')) {
            // Add go to top button
            var goToTopBtnEl = document.createElement('a');
            goToTopBtnEl.id = 'goToTopButton';
            goToTopBtnEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30px" height="30px" style="margin-top:10px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>`;
            document.body.appendChild(goToTopBtnEl);
        }

        var goToTopBtn = $('#goToTopButton');

        $(window).scroll(function() {
            if ($(window).scrollTop() > 300) {
                goToTopBtn.addClass('show');
            } else {
                goToTopBtn.removeClass('show');
            }
        });

        goToTopBtn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '300');
        });
    }

    init();


});