import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse}from '@angular/common/http';

import{ Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GameHttpService {
  public allBooks;

  public allCharacters;

  public allHouses;
 
  public allItems;
  public baseUrl='https://anapioficeandfire.com/api';

  constructor(private _http: HttpClient) {
    console.log("game-http service was called");
  }
    private handleError(err: HttpErrorResponse){
    console.log("Handle error Http calls")
    console.log(err.message);
    return Observable.throw(err.message);
}
//method to get all books, characters, houses
public getAllBooks():any{
  let myResponseBooks = this._http.get(this.baseUrl+'/books');
  console.log(myResponseBooks);
  return myResponseBooks;
}
public getAllCharacters():any{
  let myResponseCharacters = this._http.get(this.baseUrl+'/characters');
  console.log(myResponseCharacters);
  return myResponseCharacters;
}
public getAllHouses():any{
  let myResponseHouses = this._http.get(this.baseUrl+'/houses');
  console.log(myResponseHouses);
  return myResponseHouses;
}
//method to get particular book,character,houses
public getSingleBookInformation(bookId):any{
  let myResponseOfBooks = this._http.get(this.baseUrl+'/books'+'/'+ bookId)
  return myResponseOfBooks;
}
public getSingleCharacterInformation(characterId):any{
  let myResponseOfCharacter = this._http.get(this.baseUrl+'/characters'+'/'+ characterId)
  return myResponseOfCharacter;
}
public getSingleHouseInformation(houseId):any{
  let myResponseOfHouse = this._http.get(this.baseUrl+'/houses'+'/'+ houseId)
  return myResponseOfHouse;
}
}
