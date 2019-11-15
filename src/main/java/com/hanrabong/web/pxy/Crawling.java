package com.hanrabong.web.pxy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;
@Component
public class Crawling {
	
	public Map<?, ?> bugsCrawling(HashMap<String, String> paramMap) {
		Map<String, List<String>> map = new HashMap<>();
				map.clear();
				List<String>titleList=new ArrayList<>();
				List<String>imgList=new ArrayList<>();
				List<String>artistList=new ArrayList<>();
				List<String>albumList=new ArrayList<>();
				
		try {
			for (int pageIndex = 0; pageIndex < 1; pageIndex++) {
				final String USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36";
				String bucksUrl = "https://music.bugs.co.kr/chart/track/realtime/total?chartdate=20191115&charthour="+paramMap.get("time")+"";

				Connection.Response homePage = Jsoup.connect(bucksUrl).method(Connection.Method.GET)
						.userAgent(USER_AGENT).execute();

				Document temp = homePage.parse();
				Elements tempforImage = temp.select("a.thumbnail");
				for (Element e1 : tempforImage.select("img")) {
					imgList.add(e1.absUrl("src"));
				}
				map.put("img",imgList);
				
				Elements tempforTitle = temp.select("p.title");
				for (Element e1 : tempforTitle.select("a")) {
					titleList.add(e1.text());
				}
				map.put("title",titleList);
				
				Elements tempforArtist = temp.select("p.artist");
				for (Element e1 : tempforArtist.select("a")) {
					artistList.add(e1.text());
				}
				map.put("artist", artistList);
				
				Elements tempforAlbum = temp.select("a.album");
				tempforAlbum.remove(0);
				for (Element e1 : tempforAlbum) {
					albumList.add(e1.text());
				}
				map.put("album", albumList);
				
				
			}
		} catch (Exception e2) {
			e2.printStackTrace();
		}
System.out.println(map.get("title").toString());
		return map;
	}
}