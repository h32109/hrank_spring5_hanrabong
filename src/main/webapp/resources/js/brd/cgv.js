"use strict"
var cgv = cgv || {}
cgv = (()=>{
	let _, js, css
	let init =()=>{
		_ = $.ctx()
		js = $.js()
	}
	let onCreate =()=>{
		init()
		setContentview()
	}
	let setContentview =()=>{
		showCgvView()
		
	}
	let showCgvView=()=>{
		$('#right').empty()
		$('</br><h2> cgv 크롤링 </h2> </br>')
		.appendTo('#right')
		alert(_)
		$.getJSON(_+'/ckj/cgv', d=>{
			alert(_+'/adm/cgv')
			let arr = d.title
			$.each(arr, (i,j)=>{
				let no = i+1
				$('<h8>'+ "no "+no+'</h8> </br>')
				.appendTo('#right')
				$('<h6>'+j+'</h6>')
				.appendTo('#right')
			})
			
			
		})
		
		
	}
	return {onCreate}
})()