// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.


//stickUp.js
jQuery(function($){$(document).ready(function(){var contentButton = [];var contentTop = [];var content = [];var lastScrollTop = 0;var scrollDir = '';var itemClass = '';var itemHover = '';var menuSize = null;var stickyHeight = 0;var stickyMarginB = 0;var currentMarginT = 0;var topMargin = 0;$(window).scroll(function(event){var st = $(this).scrollTop();if (st > lastScrollTop){scrollDir = 'down';} else {scrollDir = 'up';}lastScrollTop = st;});$.fn.stickUp = function( options ) {$(this).addClass('stuckMenu');var objn = 0;if(options != null) {for(var o in options.parts) {if (options.parts.hasOwnProperty(o)){content[objn] = options.parts[objn];objn++;}}if(objn == 0) {console.log('error:needs arguments');}itemClass = options.itemClass;itemHover = options.itemHover;if(options.topMargin != null) {if(options.topMargin == 'auto') {topMargin = parseInt($('.stuckMenu').css('margin-top'));} else {if(isNaN(options.topMargin) && options.topMargin.search("px") > 0){topMargin = parseInt(options.topMargin.replace("px",""));} else if(!isNaN(parseInt(options.topMargin))) {topMargin = parseInt(options.topMargin);} else {console.log("incorrect argument, ignored.");topMargin = 0;}	}} else {topMargin = 0;}menuSize = $('.'+itemClass).size();}stickyHeight = parseInt($(this).height());stickyMarginB = parseInt($(this).css('margin-bottom'));currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));vartop = parseInt($(this).offset().top);};$(document).on('scroll', function() {varscroll = parseInt($(document).scrollTop());if(menuSize != null){for(var i=0;i < menuSize;i++){contentTop[i] = $('#'+content[i]+'').offset().top;function bottomView(i) {contentView = $('#'+content[i]+'').height()*.4;testView = contentTop[i] - contentView;if(varscroll > testView){$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq('+i+')').addClass(itemHover);} else if(varscroll < 50){$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq(0)').addClass(itemHover);}}if(scrollDir == 'down' && varscroll > contentTop[i]-50 && varscroll < contentTop[i]+50) {$('.'+itemClass).removeClass(itemHover);$('.'+itemClass+':eq('+i+')').addClass(itemHover);}if(scrollDir == 'up') {bottomView(i);}}}if(vartop < varscroll + topMargin){$('.stuckMenu').addClass('isStuck');$('.stuckMenu').next().closest('div').css({'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'}, 10);$('.stuckMenu').css("position","fixed");$('.isStuck').css({top: '0px'}, 10, function(){});};if(varscroll + topMargin < vartop){$('.stuckMenu').removeClass('isStuck');$('.stuckMenu').next().closest('div').css({'margin-top': currentMarginT + 'px'}, 10);$('.stuckMenu').css("position","relative");};});});});


// unslider.js
(function(e,t){if(!e)return t;var n=function(){this.el=t;this.items=t;this.sizes=[];this.max=[0,0];this.current=0;this.interval=t;this.opts={speed:500,delay:3e3,complete:t,keys:!t,dots:t,fluid:t};var n=this;this.init=function(t,n){this.el=t;this.ul=t.children("ul");this.max=[t.outerWidth(),t.outerHeight()];this.items=this.ul.children("li").each(this.calculate);this.opts=e.extend(this.opts,n);this.setup();return this};this.calculate=function(t){var r=e(this),i=r.outerWidth(),s=r.outerHeight();n.sizes[t]=[i,s];if(i>n.max[0])n.max[0]=i;if(s>n.max[1])n.max[1]=s};this.setup=function(){this.el.css({overflow:"hidden",width:n.max[0],height:this.items.first().outerHeight()});this.ul.css({width:this.items.length*100+"%",position:"relative"});this.items.css("width",100/this.items.length+"%");if(this.opts.delay!==t){this.start();this.el.hover(this.stop,this.start)}this.opts.keys&&e(document).keydown(this.keys);this.opts.dots&&this.dots();if(this.opts.fluid){var r=function(){n.el.css("width",Math.min(Math.round(n.el.outerWidth()/n.el.parent().outerWidth()*100),100)+"%")};r();e(window).resize(r)}if(this.opts.arrows){this.el.parent().append('<p class="arrows"><span class="prev">←</span><span class="next">→</span></p>').find(".arrows span").click(function(){e.isFunction(n[this.className])&&n[this.className]()})}if(e.event.swipe){this.el.on("swipeleft",n.prev).on("swiperight",n.next)}};this.move=function(t,r){if(!this.items.eq(t).length)t=0;if(t<0)t=this.items.length-1;var i=this.items.eq(t);var s={height:i.outerHeight()};var o=r?5:this.opts.speed;if(!this.ul.is(":animated")){n.el.find(".dot:eq("+t+")").addClass("active").siblings().removeClass("active");this.el.animate(s,o)&&this.ul.animate(e.extend({left:"-"+t+"00%"},s),o,function(i){n.current=t;e.isFunction(n.opts.complete)&&!r&&n.opts.complete(n.el)})}};this.start=function(){n.interval=setInterval(function(){n.move(n.current+1)},n.opts.delay)};this.stop=function(){n.interval=clearInterval(n.interval);return n};this.keys=function(t){var r=t.which;var i={37:n.prev,39:n.next,27:n.stop};if(e.isFunction(i[r])){i[r]()}};this.next=function(){return n.stop().move(n.current+1)};this.prev=function(){return n.stop().move(n.current-1)};this.dots=function(){var t='<ol class="dots">';e.each(this.items,function(e){t+='<li class="dot'+(e<1?" active":"")+'">'+(e+1)+"</li>"});t+="</ol>";this.el.addClass("has-dots").append(t).find(".dot").click(function(){n.move(e(this).index())})}};e.fn.unslider=function(t){var r=this.length;return this.each(function(i){var s=e(this);var u=(new n).init(s,t);s.data("unslider"+(r>1?"-"+(i+1):""),u)})}})(window.jQuery,false)



// tabulous.js
;(function ( $, window, document, undefined ) {

    var pluginName = "tabulous",
        defaults = {
            effect: 'scale'
        };

       // $('<style>body { background-color: red; color: white; }</style>').appendTo('head');

    function Plugin( element, options ) {
        this.element = element;
        this.$elem = $(this.element);
        this.options = $.extend( {}, defaults, options );
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {

        init: function() {
            //加一条吧

            var links = this.$elem.find('a');
            var firstchild = this.$elem.find('li:first-child').find('a');
            var lastchild = this.$elem.find('li:last-child').after('<span class="tabulousclear"></span>');

            if (this.options.effect == 'scale') {
             tab_content = this.$elem.find('div').not(':first').not(':nth-child(1)').addClass('hidescale');
            } else if (this.options.effect == 'slideLeft') {
                 tab_content = this.$elem.find('div.tabs-page').not(':first').not(':nth-child(1)').addClass('hideleft');
            } else if (this.options.effect == 'scaleUp') {
                 tab_content = this.$elem.find('div.tabs-page').not(':first').not(':nth-child(1)').addClass('hidescaleup');
            } else if (this.options.effect == 'flip') {
                 tab_content = this.$elem.find('div.tabs-page').not(':first').not(':nth-child(1)').addClass('hideflip');
            }

            var firstdiv = this.$elem.find('#tabs_container');
            var firstdivheight = firstdiv.find('div:first').height();

            var alldivs = this.$elem.find('div:first').find('div.tabs-page');
            alldivs.css({'position': 'absolute','top':'0px'});

            firstdiv.css('height',firstdivheight+'px');

            firstchild.addClass('tabulous_active');

            links.bind('click', {myOptions: this.options}, function(e) {
                e.preventDefault();

                var $options = e.data.myOptions;
                var effect = $options.effect;

                var mythis = $(this);
                var thisform = mythis.parent().parent().parent();
                var thislink = mythis.attr('href');


                firstdiv.addClass('transition');

                links.removeClass('tabulous_active');
                mythis.addClass('tabulous_active');
                thisdivwidth = thisform.find('div'+thislink).height();

                if (effect == 'scale') {
                    alldivs.removeClass('showscale').addClass('make_transist').addClass('hidescale');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showscale');
                } else if (effect == 'slideLeft') {
                    alldivs.removeClass('showleft').addClass('make_transist').addClass('hideleft');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showleft');
                } else if (effect == 'scaleUp') {
                    alldivs.removeClass('showscaleup').addClass('make_transist').addClass('hidescaleup');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showscaleup');
                } else if (effect == 'flip') {
                    alldivs.removeClass('showflip').addClass('make_transist').addClass('hideflip');
                    thisform.find('div'+thislink).addClass('make_transist').addClass('showflip');
                }


                firstdiv.css('height',thisdivwidth+'px');

                
            });
       
        },

        yourOtherFunction: function(el, options) {
            // some logic
        }
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            new Plugin( this, options );
        });
    };

})( jQuery, window, document );



