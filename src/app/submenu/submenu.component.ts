import { Component, OnInit } from '@angular/core';
import { tweets } from 'src/assets/models/tweets';
import { posts } from 'src/assets/data/posts';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {

  tweet:tweets[]= posts;

  get filterByFavorite() {
    return this.tweet.filter(x => x.isFavorite);
  }

  get filterByPost() {
    return this.tweet.filter(x => x.user === "RA-MICHAEL");
  }

  constructor() { }

  ngOnInit(): void {

  }

}
