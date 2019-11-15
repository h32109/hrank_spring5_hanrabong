package com.hanrabong.web.adm;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.pxy.KyjProxy;

@RestController
@RequestMapping("/adm")
public class KyjCtrl {
	@Autowired KyjProxy pxy;

	@GetMapping("/naver")
	public Map<?,?> naver(){
		return pxy.naver();
	}
	
}
