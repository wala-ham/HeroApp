import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private _shared : SharedService,
              private act : ActivatedRoute,
              private router : Router
    
    ){}

    id : any ;
    hero: any;

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
     this._shared.getHerById(this.id)
     .subscribe(
      (response)=>{
        this.hero = response;  
      },err=>{
        console.log(err)
      }
    )
  }

  update(){
    this._shared.updateHero(this.id,this.hero)
    .subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['/list']);
        },err=>{console.log(err)}
        )         
      } 
}



