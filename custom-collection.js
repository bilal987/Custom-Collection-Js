jQuery(".nws-variant-box").click(function(){
    var id = jQuery(this).attr("data-id");
    jQuery("#"+id+" .nws-variant-box").removeClass('nws-active');
    jQuery(this).addClass('nws-active');
  });


  $(".nws-atc-btn-frm").each( function () {
    $(this).bind("submit",function(e){
      e.preventDefault();
      var formID = $(this).attr("id");
      $.ajax({
        type: 'post',
        url: '/cart/add.js',
        data: $(this).serialize(),
        dataType: 'json',
        success: function(resp) {
          Shopify.KT_getCart(); 
          KT.drawOpen();
          //console.log(success);
        },
        error: function(error) {
          //console.log(error)
        }
      });
      return false;
    });
  });


  $('.nws-modal-toggle').on('click', function(e){
    e.preventDefault();
    $('.nws-h-popup').hide();
    $('.nws-txt-popup').hide();
    var cls = $(this).attr('data-val');
    $('.nws-h-popup.'+cls).show();
    $('.nws-txt-popup.'+cls).show();
    $('.nws-modal').addClass('nws-is-visible');
  });
  $('.nws-modal-close').on('click', function(e){
    e.preventDefault();
    $('.nws-modal').removeClass('nws-is-visible');
  });
  $('.nws-modal-overlay').on('click', function(e){
    e.preventDefault();
    $('.nws-modal').removeClass('nws-is-visible');
  });