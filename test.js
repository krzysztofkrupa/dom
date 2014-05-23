$(document).ready(function(){
    
    $('a.tab').click(function(){

		// usuwamy klasę .active
		$('.active').removeClass('active');

		// dodajemy klasę .active dla aktualnego taba
		$(this).addClass('active');
		$(this).addClass('active');

		$('.content').slideUp(); 	

		// dodanie atrybutu title do klikniętego taba
		var content_show = $(this).attr("title");  
        $("#"+content_show).slideDown();

    });

});