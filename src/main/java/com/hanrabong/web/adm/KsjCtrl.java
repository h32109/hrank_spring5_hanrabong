package com.hanrabong.web.adm;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/adm")
public class KsjCtrl {

	
	@GetMapping("/bugs/{pageNo}/{pageSize}")
	public Map<?,?> bugs(@PathVariable String pageNo, @PathVariable String pageSize){
		return null;
	}
	@GetMapping("/bugs/crawaling")
	public Map<?,?> bugscrawl(){
		return null;
	}
	
}
