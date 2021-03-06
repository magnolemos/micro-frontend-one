import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-example',
  templateUrl: './buttons-example.component.html',
  styleUrls: ['./buttons-example.component.scss']
})
export class ButtonsExampleComponent implements OnInit {
  public message: string = '';


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.message = 'Has been submitted';
  }

  onCancel() {
    this.message = 'Has been cancelled';
  }

}
