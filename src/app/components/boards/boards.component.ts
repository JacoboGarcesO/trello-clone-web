import { Component, OnInit } from '@angular/core';
import { BoardsService } from 'src/app/services/boards.service';
import { State } from '../state/state';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent implements OnInit {
  constructor(private boardsService: BoardsService, private state: State) { }

  ngOnInit(): void {
    this.boardsService.getBoards().subscribe(boards => this.state.boards = boards);
  }
}
