import { Injectable } from "@angular/core";

enum CellControlState {
  WHITE = 'WHITE',
  BLACK = 'BLACK',
  FREE = 'FREE',
};

interface BoardCell {
  control: CellControlState,
};

interface BoardRow {
  cells: BoardCell[],
}

interface BoardState {
  cells: BoardCell[],
  width: number,
  height: number,
  rows: BoardRow[],
}

@Injectable({
  providedIn: 'root',
})
export class BoardStateService {
  private boardState = this.resetBoardState();

  public readonly CellControlState = CellControlState;

  public getBoardState(): BoardState {
    return this.boardState;
  }

  public resetBoardState(): BoardState {
    return {
      cells: [],
      width: 10,
      height: 10,
      rows: this.getDefaulltBoardRows(),
    };
  }

  public getDefaulltBoardRows(): BoardRow[] {
    return new Array(10).fill(this.getDefaultBoardRow(), 0, 10);
  }

  public getDefaultBoardRow(): BoardRow {
    return {
      cells: new Array(10).fill(this.getDefaultBoardCell(), 0, 10),
    };
  }

  public getDefaultBoardCell(): BoardCell {
    return { control: CellControlState.FREE };
  }
}