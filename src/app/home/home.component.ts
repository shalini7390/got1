import { Component, OnInit } from '@angular/core';
import {GameHttpService} from "../game-http.service";
import { isNgTemplate } from '../../../node_modules/@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allBooks = [];
  public allCharacters = [];
  public allHouses = [];
  public allItems =[];

  constructor(public gameHttpService:GameHttpService) { }

  ngOnInit() {
    this.allBooks= this.gameHttpService.getAllBooks().subscribe(
      data => {
        console.log("logging data");
        console.log(data);
        this.allBooks =data;
        this.allBooks.sort((a, b) => a.name.localeCompare(b.name));
        this.allItems = this.allItems.concat(this.allBooks);
      },
     error =>{
console.log("some error occured");
console.log(error.errorMessage)
     }
    )
    this.allCharacters= this.gameHttpService.getAllCharacters().subscribe(
      data => {
        console.log("logging data");
        console.log(data);
        this.allCharacters =data;
        this.allCharacters.sort((a, b) => a.name.localeCompare(b.name));
        this.allItems = this.allItems.concat(this.allCharacters);
        
      },
     error =>{
console.log("some error occured");
console.log(error.errorMessage)
     }
    )
    this.allHouses= this.gameHttpService.getAllHouses().subscribe(
      data => {
        console.log("logging data");
        console.log(data);
        this.allHouses =data;
        this.allHouses.sort((a, b) => a.name.localeCompare(b.name));
        this.allItems = this.allItems.concat(this.allHouses)
      },
     error =>{
console.log("some error occured");
console.log(error.errorMessage)
     }
    )
  }
  ngOnDestroy(){
    console.log("Home Component Destroyed")
  }

}