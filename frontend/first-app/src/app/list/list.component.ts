import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(public _shared : SharedService){}
  heros : any;

  ngOnInit(): void {
    this._shared.getAllHero()
    .subscribe(res=>{
          console.log(res);
          this.heros=res;    
     }, 
     err=>{
      console.log(err);
     });

   
  }

 
  delete(id: any){
    
    this._shared.deleteHero(id)
      .subscribe(
        (response)=>{
          console.log(response);

          Swal.fire({
            position : 'center',
            icon : 'success',
            title : 'Le héro a été supprimé !',
            showConfirmButton : true,
            timer : 1500
  
          });
          this.ngOnInit();

        },err=>{
          console.log(err)
        }
      );
    
  }

  
}