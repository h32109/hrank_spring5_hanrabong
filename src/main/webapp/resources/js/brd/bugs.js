"use strict"
var bugs = bugs ||{}
bugs = (()=>{
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
		bugsCrawler({page:'1',size:'4'})
	}
	let bugsCrawler=x=>{
		$('#right').empty()
		$(    '<h1>bugs</h1><br>'+
				'<form class="form-inline my-2 my-lg-0" action="/action_page.php">'+
				'  <select id ="webs"name="site" size="1" >'+
				'  </select>'+
				'  <select id ="pagesize"name="site" size="1" >'+
				'  </select>'+
				'  <br><br>'+
			   '<button id="bugsbtn" class="btn btn-outline-success my-2 my-sm-0" type="submit">크롤링 go</button>'+
				'</form>')
				.appendTo('#right')
		$('<div id="scroll" ></div>').appendTo('#right')
		.css({width:'100%',height : '60%','overflow-x':'scroll', 'overflow-y':'scroll'
			})
	let arr=[{value:'00' ,text:'0:00'},{value:'01' ,text:'1:00'},{value:'07' ,text:'7:00'},{value:'09' ,text:'9:00'}]
		let arr2=[{value:'4' ,text:'4'},{value:'8' ,text:'8'},{value:'12' ,text:'12'}]
	
		$.each(arr2,(i,j)=>{
			
		$('<option value="'+j.value+'">'+j.text+'</option>').appendTo('#pagesize')
		})
		$.each(arr,(i,j)=>{
		
	$('<option value="'+j.value+'">'+j.text+'</option>').appendTo('#webs')
	})
	$('#bugsbtn').click(e=>{
		e.preventDefault()
		
			$('#scroll').empty()
		
			$.getJSON('/web/admin/bugs/'+$('#webs').val()+'/'+x.page+'/'+x.size,d =>{
				let imglist = d.img
				let titlelist = d.title
				alert(titlelist)
				for(let i=0;i<d.title.length;i++ ){
					$('<div><img class="d-block mx-auto mb-4" src="'+imglist[i]+'"></div>').appendTo('#scroll').css({width:'100%',height:'20%'})
					$('<div>'+d.title[i]+'<br>'+d.artist[i]+'<br>'+d.album[i]+'</div>').appendTo('#scroll').css({width:'100%',height:'30%'})
				}
			})

		
	})
	}
	return {onCreate}
})()