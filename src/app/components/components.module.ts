import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FaqComponent } from './faq/faq.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { StoreComponent } from './store/store/store.component';
import { StoresComponent } from './store/stores/stores.component';
import { SearcherComponent } from './store/searcher/searcher.component';
import { ContestComponent } from './contest/contest.component';
import { LeveloneComponent } from './contest/levelone/levelone.component';
import { LeveltwoComponent } from './contest/leveltwo/leveltwo.component';
import { LevelthreeComponent } from './contest/levelthree/levelthree.component';
import { LevelfourComponent } from './contest/levelfour/levelfour.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LevelfiveComponent } from './contest/levelfive/levelfive.component';
// import { CountdownTimerModule } from 'ngx-countdown-timer';





@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot(),
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    DragDropModule,
    MatTooltipModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    UserProfileComponent,
    FaqComponent,
    HomeComponent,
    StoreComponent,
    StoresComponent,
    SearcherComponent,
    ContestComponent,
    LeveloneComponent,
    LeveltwoComponent,
    LevelthreeComponent,
    LevelfourComponent,
    LevelfiveComponent,

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  
})
export class ComponentsModule { }
