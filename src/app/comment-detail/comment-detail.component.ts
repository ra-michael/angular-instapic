import { Component, OnInit } from '@angular/core';
import { posts } from 'src/assets/data/posts';
import { tweets } from 'src/assets/models/tweets'; 
import { ActivatedRoute } from '@angular/router';
import { comments } from 'src/assets/data/comments';

@Component({
  selector: 'app-comment-detail',
  templateUrl: './comment-detail.component.html',
  styleUrls: ['./comment-detail.component.scss']
})
export class CommentDetailComponent implements OnInit {

  tweet:tweets[] = posts;

  idpass:number = 0;

  existingComment = comments;

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id');
    this.idpass = this.route.snapshot.params.id;
    
  }

  get filterByChoosen() {
    return this.tweet.filter(x => x.id == this.idpass);
  }

  get filterComment() {
    return this.existingComment.filter(x => x.postId == this.idpass)
  }

}
