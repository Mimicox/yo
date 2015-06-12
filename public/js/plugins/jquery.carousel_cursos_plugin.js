(function ($){

	$.fn.carousel_cursos = function ()
	{

		var count_list = 0
		var position = 0;
		this.each( function (){
			var $this = $(this);
			count_list += 1;

			
			$('#btn-siguiente').click(function (){

				 console.log('cicked');
				 console.log($this);

				});


		});


		console.log(count_list);

	

	};


})(jQuery);