import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatGridListModule } from '@angular/material/grid-list'; 
import { BoardStateService } from "../services/board-state.service";

@Component({
  standalone: true,
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  imports: [CommonModule, MatGridListModule],
  providers: [BoardStateService],
})
export class BoardComponent {
  public boardState = this.boardStateService.getBoardState();

  constructor(
    public boardStateService: BoardStateService,
  ) {
    this.boardState.rows[1].cells[1].control = this.boardStateService.CellControlState.BLACK;
    this.boardState.rows[2].cells[2].control = this.boardStateService.CellControlState.WHITE;
  }
}