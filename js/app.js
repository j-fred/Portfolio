$(function () {
    $('body').scrollspy({ target: '#menu' });
    // On recupere la position du bloc par rapport au haut du site
    var posYmenu = $("#menu").offset().top;

    //Au scroll dans la fenetre on déclenche la fonction
    $(window).scroll(function () {

        //si on a defile de plus de 150px du haut vers le bas
        if ($(this).scrollTop() > posYmenu) {

            //on ajoute la classe "fixNavigation" a <div id="navigation">
            $('#menu').addClass("fixNavigation");
        } else {

            //sinon on retire la classe "fixNavigation" a <div id="navigation">
            $('#menu').removeClass("fixNavigation");
        }
    });
});