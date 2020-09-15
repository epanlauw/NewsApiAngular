import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = 'ebd511e92bb24ac6aee24c5650383018';

  constructor(private http:HttpClient, private datePipe:DatePipe) {  }
  initSources(){
    return this.http.get('https://https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }
  initArticles(){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey='+this.api_key);
  }
  initArticles2(){
    return this.http.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-16&sortBy=publishedAt&apiKey='+this.api_key);
  }
  initArticles3(){
    return this.http.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey='+this.api_key);
  }
  initArticles4(){
    return this.http.get('http://newsapi.org/v2/everything?q=apple&from=2020-03-13&to=2020-03-13&sortBy=popularity&apiKey='+this.api_key);
  }
  initArticles5(){
    return this.http.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey='+this.api_key);
  }
  getArticlesByID(source: String){
    return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&apiKey='+this.api_key);
  }
}
