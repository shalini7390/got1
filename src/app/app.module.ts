import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//router module used for setting up the application level.
import{RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import{GameHttpService}from "./game-http.service";
import{HttpClientModule}from '@angular/common/http';

//decorators
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //routerModule forRoot method to declare possible router in application
  RouterModule.forRoot([
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'view',component:ViewComponent},
    {path:'houses',component:HomeComponent},
    {path:'characters',component:HomeComponent},
    {path:'books',component:HomeComponent},
    {path:'books:bookId',component:ViewComponent},
    {path:'characters/:characterId',component:ViewComponent},
    {path:'houses/:housesId',component:ViewComponent},

  
  ],
  {useHash:true})
  
  ],
  providers: [GameHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {


  
 }
