package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component("kyj")
public class KyjProxy{
	@Autowired Trunk trunk;
	
	public Map<String,String> naver(){
		Map<String, String> map = new HashMap<>();
		String url = "https://endic.naver.com/?sLn=kr";
		String node = "a[class=word_link]";
		String node2 = "div[class=txt_trans]";
		try {
			Document rawData;
			rawData = Jsoup.connect(url).timeout(10*1000).get();
			Elements word = rawData.select(node);
			Elements text = rawData.select(node2);
			List<String> words = new ArrayList<>();
			List<String> texts = new ArrayList<>();
			for(Element e : word) {
			words.add(e.text());
			}
			for(Element e2 : text) {
			texts.add(e2.text());
			}
			for(int i = 0; i<4; i++) {
				map.put(words.get(i), texts.get(i));
				
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return map;
	}
	
}
