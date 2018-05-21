import {Component} from '@angular/core';
import {Games, getSnakeOrderMatrix} from './games';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  options = Games;
  selectedValue = 64;
  orderMatrix;

  constructor() {
    this.onSelect(this.selectedValue);
  }


  onSelect(playerCount: number): void {
    this.orderMatrix = getSnakeOrderMatrix(playerCount);
  }
}
