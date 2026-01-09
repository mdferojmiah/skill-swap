$(function(){
    var token = false;

    $(".navbar-container").load("partials/navbar.html", function(response, status, xhr){
        var $container = $(this);
        if(status === 'error'){
            console.error('Failed to load navbar partial:', xhr && xhr.statusText);
            return;
        }

        if(token){
            // authenticated: show auth-only, hide guest-only
            $container.find('.auth-only').removeClass('d-none');
            $container.find('.guest-only').addClass('d-none');
        } else {
            // unauthenticated: hide auth-only, show guest-only
            $container.find('.auth-only').addClass('d-none');
            $container.find('.guest-only').removeClass('d-none');
        }
    });
});