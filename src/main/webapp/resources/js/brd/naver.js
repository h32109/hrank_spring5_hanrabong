"use strict"
var naver = naver || {}
naver = (()=>{
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
		$('#right').empty()
		$.getJSON(_+'/adm/naver', d=>{
			let i = 0
   			$.each(d,(i,j)=>{
   				$('<div class="section section_today_conversation english _todaysQuotes" style=""><h3 class="section_title">오늘의 단어</h3>'+
   						'<div class="component_example">'+
   						'  <div class="row">'+
   						'    <div class="origin is-audible mark">'+
   						'      <span class="text" lang="">'+j.word+'</span>'+
   						'    </div>'+
   						'          <div class="translate" lang="">'+
   						'            <p class="text" lang="">'+j.text+'</p>'+
   						'          </div>'+
   						'  </div>'+
   						'</div>'+
   						'</div>')
			.appendTo('#right')
			})
   		})
	}
	return {onCreate}
})()