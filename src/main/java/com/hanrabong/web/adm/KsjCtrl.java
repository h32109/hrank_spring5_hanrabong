package com.hanrabong.web.adm;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hanrabong.web.pxy.Crawling;

@RestController
@RequestMapping("/admin")
public class KsjCtrl {
@Autowired Crawling crawling;
	@GetMapping("/bugs/{time}/{pageNo}/{pageSize}")
	public Map<?,?> bugs(@PathVariable String pageNo, @PathVariable String pageSize,@PathVariable String time){
		System.out.println(pageNo +pageSize+time);
		HashMap<String, String>map=new HashMap<String, String>();
		map.put("pageNo",pageNo);
		map.put("pageSize",pageSize);
		map.put("time",time);
		System.out.println(crawling.bugsCrawling(map).get("title"));

		return crawling.bugsCrawling(map);
	}
	}
