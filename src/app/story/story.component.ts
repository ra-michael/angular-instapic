import { Component, OnInit } from '@angular/core';
import { users } from 'src/assets/data/users';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  list_user = users;

  constructor() { }

  ngOnInit(): void {
  }

}