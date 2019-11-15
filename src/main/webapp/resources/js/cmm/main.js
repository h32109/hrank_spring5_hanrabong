"use strict"; 
var main = main || {};
main=(()=>{
	let _, js, img, css, main_vue_js, router_js, bugs_js, cgv_js, naver_js
    let init =()=>{
        _ = $.ctx()
        js = $.js()
        img = $.img()
        css = $.css()
        main_vue_js= js +'/vue/main_vue.js'
        router_js = js +'/cmm/router.js'
        bugs_js = js +'/brd/bugs.js'
        cgv_js = js +'/brd/cgv.js'
        naver_js = js +'/brd/naver.js'
    }
	let onCreate=()=>{
		 $.when(
				 $.getScript(main_vue_js),
		         $.getScript(router_js),
		         $.getScript(bugs_js),
		         $.getScript(cgv_js),
		         $.getScript(naver_js)
		 ).done(()=>{
		        setContentView()
		 })
	}
	let setContentView=()=>{
		$('head').html(main_vue.main_head()),
		$('body').html(main_vue.main_body())
		.addClass('text-center')
		mgmt()
	}
	let mgmt=()=>{
		$('<table id="tab">'+
				'  <tr></tr>'+
				'</table>')
				.appendTo('.text-center')
				.css({border: '1px solid #ddd', width: '80%', height: '80%', margin: '0 auto'})
		$('<a href="https://www.freepik.com/free-photos-vectors/background"></a>').appendTo('#left')		
		$.each([{id:'left',width:'20%'},{id:'right',width:'80%'}],(i,j)=>{
			$('<td id= "'+j.id+'"></td>')
			.css({border: '1px solid #ddd', width: j.width, 'vertical-align': 'top'})
			.appendTo('#tab tr')
		})
		''
					
		$.each([
			{txt:'HOME', name :'home'},
			{txt:'BUGS', name :'bugs'},
			{txt:'CGV', name :'cgv'},
			{txt:'TODAY ENGLISH', name :'naver'}],
			(i,j)=>{
				$('<div name="'+j.name+'"><a href="#" style = "color : gray">'+j.txt+'</a></div>')
				.css({border: '1px solid #ddd', margin: 'auto 0', 'line-height': '50px'})
				.appendTo('#left')
				.hover(function(e){
					$(this).addClass('active')
					$(this).siblings().removeClass('active')})
				.click(function(e){
					e.preventDefault()
					switch($(this).attr('name')){
					case 'home' : home()
						break;
					case 'bugs' : bugs.onCreate()
						break;
					case 'cgv' : cgv.onCreate()
						break;
					case 'naver' : naver.onCreate()
						break;
					}
				})
		})
	}



	return {onCreate}
})();
	