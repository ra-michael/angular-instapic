import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  comment:string = "";
  postComment:string[] = [];
  isEmojiPickerVisible: boolean = false;  
  
  addEmoji(event:any) {
      this.comment = `${this.comment}${event.emoji.native}`;
      this.isEmojiPickerVisible = false;
   }

  constructor() { }

  onPost() {
    if(this.comment !== "\n" && this.comment !== "") {
      this.postComment.push(this.comment);
      console.log('coucou kely')
    }
    this.comment = "";
  }

  ngOnInit(): void {
  }

}