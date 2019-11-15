package com.hanrabong.web.adm;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/adm")
public class CkjCtrl {

	

	@GetMapping("/cgv")
	public Map<?,?> cgv(@PathVariable String pageNo, @PathVariable String pageSize){
		return null;
	}

}
