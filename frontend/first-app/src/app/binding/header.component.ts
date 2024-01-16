import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //data binding (envoi et reception data du html ves TS et inversement)
   /* 1- String interpolation
      2- Property binding 
      3-two way data binding
      4-event binding
   */

  name = 'wala';
  age = 24;

  imageurl='https://thumbs.dreamstime.com/b/golden-retriever-dog-sitting-white-24750790.jpg';
  alternative = 'cute dog';

  change() {
    this.name='ahmed';
    this.age =26;
    
  }

  text = 'default' ; 


}
