$(function () {
    $('.banner').unslider({
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        // fluid: true              //  Support responsive design. May break non-responsive designs
    });
    $(document).ready( function() {
     $('.navbar').stickUp({
            parts: {
                0: 'feature',
                1: 'plugin',
                2: 'scene',
                3: 'case',
                4: 'price',
                5: 'contact'
            },
            itemClass: 'js-nav',
            itemHover: 'active'
        });
});

})


// 案例
$(function(){
	$('.js-tabs').tabulous({
		effect: 'slideLeft'
	});
});

// 地图
function init() {
  var myLatlng = new qq.maps.LatLng(19.951274,110.556697);
  var myOptions = {
    zoom: 13,
    draggable: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    center: myLatlng,
    // mapTypeId: qq.maps.MapTypeId.ROADMAP
  }
  
    var map = new qq.maps.Map(document.getElementById("container"), myOptions);
    var marker = new qq.maps.Label({
        position: myLatlng,
        map: map,
        content:'云宿网络'
    });

}
   
function loadScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  //果然大厂,我服
  script.src = "http://map.qq.com/api/js?v=2.exp&callback=init";
  document.body.appendChild(script);
}

window.onload = loadScript;




