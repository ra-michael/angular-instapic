import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import { MatInputModule } from '@angular/material/input';

import { MatDividerModule } from '@angular/material/divider';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatCardModule } from '@angular/material/card';

import { MatTooltipModule } from '@angular/material/tooltip';

import { MatTabsModule } from '@angular/material/tabs';

import { MatGridListModule } from '@angular/material/grid-list';

const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatDividerModule,
  MatToolbarModule,
  MatCardModule,
  MatTooltipModule,
  MatTabsModule,
  MatGridListModule
]

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
