/*
=========================================================
* Now UI Dashboard - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard
* Copyright 2019 Creative Tim (http://www.creative-tim.com)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
$( '#sidebar-wrapper .nav a' ).on( 'click', function () {
	$( '#sidebar-wrapper .nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
$('.accordion-button').on('click', function () {
	$('.accordion-button > span').toggleClass('transform-class');
});
!function(){if(isWindows=-1<navigator.platform.indexOf("Win"),isWindows){new PerfectScrollbar(".sidebar-wrapper"),new PerfectScrollbar(".main-panel");$("html").addClass("perfect-scrollbar-on")}else $("html").addClass("perfect-scrollbar-off")}(),toggle_initialized=sidebar_mini_active=backgroundOrange=navbar_initialized=fixedTop=!(transparentDemo=transparent=!0);var is_iPad=null!=navigator.userAgent.match(/iPad/i),scrollElement=-1<navigator.platform.indexOf("Win")?$(".main-panel"):$(window);function hexToRGB(a,e){var n=parseInt(a.slice(1,3),16),o=parseInt(a.slice(3,5),16),s=parseInt(a.slice(5,7),16);return e?"rgba("+n+", "+o+", "+s+", "+e+")":"rgb("+n+", "+o+", "+s+")"}seq=0,delays=80,durations=500,seq2=0,delays2=80,durations2=500,$(document).ready(function(){0==$(".full-screen-map").length&&0==$(".bd-docs").length&&$(".collapse").on("show.bs.collapse",function(){$(this).closest(".navbar").removeClass("navbar-transparent").addClass("bg-white")}).on("hide.bs.collapse",function(){$(this).closest(".navbar").addClass("navbar-transparent").removeClass("bg-white")}),$navbar=$(".navbar[color-on-scroll]"),scroll_distance=$navbar.attr("color-on-scroll")||500,0!=$(".navbar[color-on-scroll]").length&&(nowuiDashboard.checkScrollForTransparentNavbar(),$(window).on("scroll",nowuiDashboard.checkScrollForTransparentNavbar)),$(".form-control").on("focus",function(){$(this).parent(".input-group").addClass("input-group-focus")}).on("blur",function(){$(this).parent(".input-group").removeClass("input-group-focus")}),$(".bootstrap-switch").each(function(){$this=$(this),data_on_label=$this.data("on-label")||"",data_off_label=$this.data("off-label")||"",$this.bootstrapSwitch({onText:data_on_label,offText:data_off_label})})}),$(document).on("click",".navbar-toggle",function(){$toggle=$(this),1==nowuiDashboard.misc.navbar_menu_visible?($("html").removeClass("nav-open"),nowuiDashboard.misc.navbar_menu_visible=0,setTimeout(function(){$toggle.removeClass("toggled"),$("#bodyClick").remove()},550)):(setTimeout(function(){$toggle.addClass("toggled")},580),div='<div id="bodyClick"></div>',$(div).appendTo("body").click(function(){$("html").removeClass("nav-open"),nowuiDashboard.misc.navbar_menu_visible=0,setTimeout(function(){$toggle.removeClass("toggled"),$("#bodyClick").remove()},550)}),$("html").addClass("nav-open"),nowuiDashboard.misc.navbar_menu_visible=1)}),$(window).resize(function(){seq=seq2=0,0==$(".full-screen-map").length&&0==$(".bd-docs").length&&($navbar=$(".navbar"),isExpanded=$(".navbar").find('[data-toggle="collapse"]').attr("aria-expanded"),$navbar.hasClass("bg-white")&&991<$(window).width()?0==scrollElement.scrollTop()&&$navbar.removeClass("bg-white").addClass("navbar-transparent"):$navbar.hasClass("navbar-transparent")&&$(window).width()<991&&"false"!=isExpanded&&$navbar.addClass("bg-white").removeClass("navbar-transparent")),is_iPad&&$("body").removeClass("sidebar-mini")}),nowuiDashboard={misc:{navbar_menu_visible:0},showNotification:function(a,e){color="primary",$.notify({icon:"now-ui-icons ui-1_bell-53",message:"Welcome to <b>Now Ui Dashboard</b> - a beautiful freebie for every web developer."},{type:color,timer:8e3,placement:{from:a,align:e}})}};
//# sourceMappingURL=_site_dashboard_free/assets/js/dashboard-free.js.map
