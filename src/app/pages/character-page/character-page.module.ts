import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CharacterPageComponent } from './character-page.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: CharacterPageComponent }];

@NgModule({
  declarations: [CharacterPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
})
export class CharacterPageModule {}
