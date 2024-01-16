import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  /*ng directive : ajouter un comportement au element HTML
  1-ngIf
  2-ngFor
  3-ngSwitch
  4-ngClass
  5-NgStyle
   */

  //ngIf
  display = true ;

  displayImage = true;
  url='https://d.newsweek.com/en/full/1955557/attack-titan.jpg?w=1200&f=3d355bc0ad34eb94ab189465aff41b67';

  //ngFor
  
   fruits= ['apple','orange','banana','kiwi','hh'] ;

   

  //ngSwitch
  superhero ='Ironman';

  //NgStyle
  user = {
    name : 'wala',
    age : 24,
    bg : 'blue',
    color : 'white'
  }

  //ngClass

  students = [
    {'name':'John Doe','age':25},
    {'name':'Mikasa','age':30},
    {'name':'Eran','age':51},
    {'name':' Doe','age':22}
  ]

}
