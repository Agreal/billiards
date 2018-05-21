import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  options = [
    {value: 8, viewValue: '8人'},
    {value: 16, viewValue: '16人'},
    {value: 64, viewValue: '64人'}
  ];

  games = [
    [1, 16, 9, 8, 5, 12, 13, 4, 3, 14, 11, 6, 7, 10, 15, 2],
    [1, 8, 5, 4, 3, 6, 7, 2],
    [1, 4, 3, 2],
  ];

  selectedValue = 8;
}
