import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {
  font = "arial";
  size = 40;
  color = "red";

  classes = ['grenn-title','small-title'];
  underline = 'underline-title';

  constructor() { }

  ngOnInit(): void {
  }

}
