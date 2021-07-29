import { Component, OnInit } from '@angular/core';
import { posts } from 'src/assets/data/posts';
import { tweets } from 'src/assets/models/tweets';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  tweet:tweets[] = posts;
  nbFavorite:number = 0;
  nbPost:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.nbFavorite = this.tweet.filter(x => x.isFavorite).length;
    this.nbPost = this.tweet.filter(x => x.user === "RA-MICHAEL").length;
  }

}
