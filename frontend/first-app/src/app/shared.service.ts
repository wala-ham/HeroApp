import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(public http : HttpClient) { }

  public url = 'http://127.0.0.1:3000/hero/'


  createNewHero(hero : any){
    return this.http.post(this.url+'ajout',hero);
  }

  createNewHeroUpload(hero : any){
    return this.http.post(this.url+'create',hero);
  }

  getAllHero(){
    return this.http.get(this.url+"all");
  }

  deleteHero(id :any){
    return this.http.delete(this.url+'supprimer/'+id)
  }

  getHerById(id:any){
      return this.http.get(this.url+'getbyid/'+id)
  }

  updateHero(id : any,hero : any){
    return this.http.put(this.url+'update/'+id,hero)
  }







}
