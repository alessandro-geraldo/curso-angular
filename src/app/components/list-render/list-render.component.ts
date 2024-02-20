import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals = [
    {name:"turca",type:"dog"},
    {name:"tom",type:"cat"},
    {name:"frida",type:"dog"},
    {name:"bob",type:'horse'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
