( function( $ ) {

  $(document).ready(function($){

    // Trigger mobile menu.
    $('#mobile-trigger').sidr({
		timing: 'ease-in-out',
		speed: 500,
		source: '#mob-menu',
		name: 'sidr-main'
    });
    
  });

} )( jQuery );
