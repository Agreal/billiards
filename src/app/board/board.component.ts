import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  selectedValue = 64;

  options = [
    {value: 8, viewValue: '8人'},
    {value: 16, viewValue: '16人'},
    {value: 64, viewValue: '64人'}
  ];
}
