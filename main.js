/* Funkcja ustalająca wysokość marginesu */

var g = $("#card").outerHeight(true);
var d = $("#card").outerHeight();
g -= d;
var b = 0;
var ac = $('#reklamacba').css('display');//usunac gdy nei bedzie cba
function setMargin(xxx){
	var n = $('#cv').outerWidth();
	var v = $('#pf').outerWidth();
	var ae = $('#cv').height();
	var af = $('#pf').height();
	var o = $(window).width();
	var p = Math.round(n/2);
	var w = Math.round(v/2);
	var q = Math.round(o/2);
	var r = q - p;
	var aa = q - w;
	var e = $(window).height();
	r += "px";
	aa += "px";
	var ab = "20%";
	if (ac == "block") {//usunac gdy nei bedzie cba
		var ad = $('#reklamacba').outerHeight(true);//usunac gdy nei bedzie cba
		ae += ad;//usunac gdy nei bedzie cba
	}
	$('#cv').css({'margin-left': r});
	$('#pf').css({'margin-left': aa});
	if (e <= ae) {
		$('#cv').css({'margin-top': 0});
	}
	if (e <= af) {
		$('#pf').css({'margin-top': 0});
	}
	var f = $("#"+xxx).outerHeight();
	var h = f + g;
	if (ac == "block") {//usunac gdy nei bedzie cba
		h += ad;//usunac gdy nei bedzie cba
	}
	if (h > e) {
		var i = e - f;
		if (xxx == "cv") {
			ab = r;
		}
		else if (xxx == "pf") {
			ab = aa;
		}
		if (ac == "block") {//usunac gdy nei bedzie cba
			i -= ad;//usunac gdy nei bedzie cba
		}//usunac gdy nei bedzie cba
		if (i <= 0) {
			$("#"+xxx).css({'margin': '0 0 0 ' + ab});
		}
		else {
			var j = Math.round(i/2);
			var k = i - j;
			j += "px";
			k += "px";
			$("#"+xxx).css({'margin': k + ' 0 ' + j + ' ' + ab});
		}
		if (o > 600) {
			$("#"+xxx).css({'margin-left': ab});
			$("#card").css({'left': "-120px"})
		}
		else {
			$("#"+xxx).css({'margin-left': 0})
			$("#card").css({'left': 0})
		}
	}
	else {
		var t = g/2;
		var u = g - t;
		t += "px";
		u += "px";
		$("#"+xxx).css({'margin-top': u});
		$("#"+xxx).css({'margin-bottom': t});
	}
}

/* Funkcja ustalajaca wysokosc i background body (wywolujaca ustalenie marginesu) oraz jej wywolanie gdy zmiana rozmiaru */

function updateBodySize(xxx){
	if (xxx != "card" && xxx != "cv" && xxx != "pf") {
		if (b == 0) {
			if (lang == 'pl') {
				alert('Przepraszamy, wystąpił błąd - strona może nie działać właściwie.');
			}
			else {
				alert("We're sorry, something went wrong - page can work improperly.");
			}
			b = 1;
		}
	} 
	setMargin(xxx);
	var x = $(window).width();
	var y = $(window).height();
	var z = $("#"+xxx).outerHeight();
	if (ac == "block") {//usunac gdy nei bedzie cba
		var ah = $('#reklamacba').outerHeight(true);//usunac gdy nei bedzie cba
		z += ah;//usunac gdy nei bedzie cba
	}//usunac gdy nei bedzie cba
	var m = y - z;
	if (m <= 0) {
		var a = z;
	}
	else {
		var a = y;
	}
	//var c = 1.78 * a;
	//if (x > c) {
	//	$('body').css({'background-size': '100% auto'});
	//}
	//else {
	//	$('body').css({'background-size': 'auto ' + a + 'px'});
	//}
	$('body').css({'height': a + 'px'});
}
function updateBodySizeChoser() {
	var s = $('#cv').css('display');
	if (s == "block") {
		updateBodySize('cv');
	}
	else {
		s = $('#pf').css('display');
		if (s == "block") {
			updateBodySize('pf');
		}
		else {
			updateBodySize('card');
		}
	}
}
$(window).resize(updateBodySizeChoser);  //kiedy zmiana rozmiaru

/* Zmiana języka */

function changeLanguageToPl() {
	lg = "pl";
	$('.pl').show(0);
	$('.en').hide(0, updateBodySizeChoser);
	$('#tag1_show_pl').css({'display':'block'});
}
function changeLanguageToEn() {
	lg = "en";
	$('.pl').hide(0);
	$('.en').show(0, updateBodySizeChoser);
	$('#tag1_show_en').css({'display':'block'});
}
$('#en').click(changeLanguageToEn); //kiedy flaga ang
$('#pl').click(changeLanguageToPl); //kiedy flaga pol

/* Sprawdzenie języka przeglądarki */

var lang = navigator.language || navigator.userLanguage;
if  (lang == "pl") {//kiedy jezyk pol
	var lg = "pl"; 
	$(document).ready(changeLanguageToPl);
}
else {//kiedy inne
	var lg = "en"; 
	$(document).ready(changeLanguageToEn);
}

/* CV i portfolio */

function showCv() {
	$('#cv').fadeIn(0);
	$('#card').fadeOut(0, updateBodySizeChoser);
}
function hideCv() {
	$('#cv').fadeOut(0);
	$('#card').fadeIn(0, updateBodySizeChoser);
}
function showPf() {
	$('#pf').fadeIn(0);
	$('#card').fadeOut(0, updateBodySizeChoser);
}
function hidePf() {
	$('#pf').fadeOut(0);
	$('#card').fadeIn(0, updateBodySizeChoser);
}
$('.cv_show').click(showCv);
$('.pf_show').click(showPf);
$('.cv_hide').click(hideCv);
$('.pf_hide').click(hidePf);

/* Portfolio - zmiana tagow */

function showTag1() {
	$('.pf_tag2_content').fadeOut(0);
	$('.pf_tag3_content').fadeOut(0);
	$('.pf_tag4_content').fadeOut(0);
	$('.pf_tag1_content').fadeIn(0, updateBodySizeChoser);
	$('.tag2').css({'color':'white'});
	$('.tag3').css({'color':'white'});
	$('.tag4').css({'color':'white'});
	$('.tag1').css({'color':'cornsilk'});
	$('.tag2').css({'background-color':'transparent'});
	$('.tag3').css({'background-color':'transparent'});
	$('.tag4').css({'background-color':'transparent'});
	$('.tag1').css({'background-color':'rgba(0,0,0,0.5)'});
}
function showTag2() {
	$('.pf_tag1_content').fadeOut(0);
	$('.pf_tag3_content').fadeOut(0);
	$('.pf_tag4_content').fadeOut(0);
	$('.pf_tag2_content').fadeIn(0, updateBodySizeChoser);
	$('.tag1').css({'color':'white'});
	$('.tag3').css({'color':'white'});
	$('.tag4').css({'color':'white'});
	$('.tag2').css({'color':'cornsilk'});
	$('.tag1').css({'background-color':'transparent'});
	$('.tag3').css({'background-color':'transparent'});
	$('.tag4').css({'background-color':'transparent'});
	$('.tag2').css({'background-color':'rgba(0,0,0,0.5)'});
	
}
function showTag3() {
	$('.pf_tag1_content').fadeOut(0);
	$('.pf_tag2_content').fadeOut(0);
	$('.pf_tag4_content').fadeOut(0);
	$('.pf_tag3_content').fadeIn(0, updateBodySizeChoser);
	$('.tag1').css({'color':'white'});
	$('.tag2').css({'color':'white'});
	$('.tag4').css({'color':'white'});
	$('.tag3').css({'color':'cornsilk'});
	$('.tag1').css({'background-color':'transparent'});
	$('.tag2').css({'background-color':'transparent'});
	$('.tag4').css({'background-color':'transparent'});
	$('.tag3').css({'background-color':'rgba(0,0,0,0.5)'});
}
function showTag4() {
	$('.pf_tag1_content').fadeOut(0);
	$('.pf_tag2_content').fadeOut(0);
	$('.pf_tag3_content').fadeOut(0);
	$('.pf_tag4_content').fadeIn(0, updateBodySizeChoser);
	$('.tag1').css({'color':'white'});
	$('.tag2').css({'color':'white'});
	$('.tag3').css({'color':'white'});
	$('.tag4').css({'color':'cornsilk'});
	$('.tag1').css({'background-color':'transparent'});
	$('.tag2').css({'background-color':'transparent'});
	$('.tag3').css({'background-color':'transparent'});
	$('.tag4').css({'background-color':'rgba(0,0,0,0.5)'});
}

$('.tag1_show').click(showTag1);
$('.tag2_show').click(showTag2);
$('.tag3_show').click(showTag3);
$('.tag4_show').click(showTag4);

/* Reszta */

function showTwi() {
	$('#twi').fadeIn(0);
}
function hideTwi() {
	$('#twi').fadeOut(0);
}
$('#twi_a').click(showTwi);
$('#twi').click(hideTwi);