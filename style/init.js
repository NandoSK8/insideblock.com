(function($) {
    $(function() {

        $('.dropdown-trigger').dropdown();
        $('.slider').slider();
        $('.parallax').parallax();
        $('.materialboxed').materialbox();
        $('.modal').modal();
        $('.scrollspy').scrollSpy();
        $('.datepicker').datepicker();
        $('.tabs').tabs();
        $('.timepicker').timepicker();
        $('.tooltipped').tooltip();
        $('select').not('.disabled').select();
        $('.sidenav').sidenav({ edge: "left" });
        $('.tap-target').featureDiscovery();

    }); // end of document ready
})(jQuery); // end of jQuery name space