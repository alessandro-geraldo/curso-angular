import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {name:"turca",type:"dog", age:2},
    {name:"tom",type:"cat", age:4},
    {name:"frida",type:"dog", age:3},
    {name:"bob",type:'horse',age:5}
  ];
  
  animalDetails = "";

  constructor() { }

  ngOnInit(): void {
  }

  showAge(animal:Animal){
   this.animalDetails = `o pet ${animal.name} tem ${animal.age} anos de idade`
  }

}
