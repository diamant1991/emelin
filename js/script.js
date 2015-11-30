$(".slct").each(function (){
  var dropBlock = $(this).parent().find('.drop').find('li.active');
  var selectResult = dropBlock.html();
  dropBlock.parent().parent().find('input').val(selectResult);
  dropBlock.parent().parent().find('.slct').removeClass('active').html(selectResult);
})

$('.slct').click(function(){
	var dropBlock = $(this).parent().find('.drop');

	if( dropBlock.is(':hidden') ) {
		dropBlock.slideDown(100);

		$(this).addClass('active');
		$('.drop').find('li').click(function(){
			var selectResult = $(this).html();
			$(this).parent().parent().find('input').val(selectResult);
			$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

			dropBlock.slideUp(100);
		});
	
	} else {
		$(this).removeClass('active');
		dropBlock.slideUp(100);
	}

	return false;
});

$(document).mouseup(function (e) {
  var container = $(".drop");
  if (container.has(e.target).length === 0){
      container.slideUp(100);
      $('.slct').removeClass('active');
  }
});

var mydivs=new Array('#description','#characteristics', '#review', '#info-del');

function opcl(arr, e){
  if ($(e).css('display') == 'none'){
    for(var i in arr){   
       $(arr[i]).hide();     
    }
    $(e).show();       
  }
}

$(document).ready(function() {
	$('.view').click(function(event) {
		$('.view').removeClass('active');
		$(this).addClass('active')
	});
});

//zoom
$("#img_01").elevateZoom({
	gallery:'gal1', 
	cursor: 'pointer',
	galleryActiveClass: 'active', 
	imageCrossfade: true, 
	loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'
});

//similar carousel
$(document).ready(function() {
  var owl = $("#similar");
 
  owl.owlCarousel({
      items : 4
  });
 
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  })
 
});