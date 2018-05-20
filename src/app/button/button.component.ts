import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button mat-raised-button color="warn" >Click Me</button>
  `,
  styles: []
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
