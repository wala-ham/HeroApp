import { Component } from '@angular/core';
import {SharedService} from '../shared.service'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent {

//injection de services 
constructor(public _shared : SharedService,private router : Router){
}

  hero = {
    name : '',
    power : 0
  }


  image : any;
  selectImage(e :any){
    this.image= e.target.files[0];  
  }
  // ajouter(){
  //   this._shared.createNewHeroUpload(this.hero)
  //        .subscribe(res=>{
  //         console.log(this.hero);
          
  //         this.hero = {
  //           name : '',
  //           power : 0
  //         }
  
  //         Swal.fire({
  //           position : 'center',
  //           icon : 'success',
  //           title : 'Le héro a été ajouté !',
  //           showConfirmButton : true,
  //           timer : 1500
  
  //         });
  //        }, 
  //        err=>{
  //         console.log(err);
  //        });

         

    
  // }
      ajouter(){
        let formdata = new FormData()
        formdata.append('name' , this.hero.name )
        formdata.append('power' , this.hero.power.toString())
        formdata.append('image',this.image)

        this._shared.createNewHeroUpload(formdata)
        .subscribe(res=>{
                  console.log(this.hero);
                  
                  this.hero = {
                    name : '',
                    power : 0
                  }
          
                  Swal.fire({
                    position : 'center',
                    icon : 'success',
                    title : 'Le héro a été ajouté !',
                    showConfirmButton : true,
                    timer : 1500
          
                  });

                  this.router.navigate(['/list']);
                  
                 }, 
                 err=>{
                  console.log(err);
                 });
      }


}
