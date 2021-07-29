import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { CommentComponent } from './comment/comment.component';
import { StoryComponent } from './story/story.component';
import { MaterialModule } from './material/material.module';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ProfilComponent } from './profil/profil.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { CommentDetailComponent } from './comment-detail/comment-detail.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommentComponent,
    StoryComponent,
    AccueilComponent,
    ProfilComponent,
    SubmenuComponent,
    CommentDetailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    EmojiModule,
    FormsModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
