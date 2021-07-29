import { Component, OnInit } from '@angular/core';
import { posts } from 'src/assets/data/posts';

import { tweets } from 'src/assets/models/tweets';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  tweet:tweets[] = posts;

  constructor() { }

  onLiked(item:tweets){
    item.isLiked = !item.isLiked;
    if(item.isLiked)
      item.numberOfLikes++;
    else
      item.numberOfLikes--;
  }

  onFavorite(item:tweets){
    item.isFavorite= !item.isFavorite;
  }

  ngOnInit(): void {
  }

}
