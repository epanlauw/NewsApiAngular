import { Component } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news';
  config: any; 

  mArticles:Array<any>;
  mSources:Array<any>;
  mArticles2:Array<any>;
  mArticles3:Array<any>;
  mArticles4:Array<any>;
  mArticles5:Array<any>;

  constructor(private newsapi:NewsApiService){
  }
  ngOnInit(){
    //load articles
    this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this.newsapi.initArticles2().subscribe(data => this.mArticles2 = data['articles']);
    this.newsapi.initArticles3().subscribe(data => this.mArticles3 = data['articles']);
    this.newsapi.initArticles4().subscribe(data => this.mArticles4 = data['articles']);
    this.newsapi.initArticles5().subscribe(data => this.mArticles5 = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
    console.log(this.newsapi);
  }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }

}
