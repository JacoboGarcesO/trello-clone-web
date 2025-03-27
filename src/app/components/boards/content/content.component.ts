import { Component } from '@angular/core';
import { State } from '../../state/state';
import { FormBuilder, Validators } from '@angular/forms';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  public isOpen: boolean = false;

  public form = this.fb.group({
    name: ['', Validators.required]
  })

  constructor(public state: State, private fb: FormBuilder, private boardsService: BoardsService) {}

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  submit(): void {
    if (!this.form.valid) return;

    this.boardsService.createBoard(this.form.getRawValue()).subscribe((boardCreated) => {
      // this.boardsService.getBoards().subscribe(boards => this.state.boards = boards);
      const boards = this.state.boardsValue;
      const newBoards = [...boards, boardCreated];
      this.state.boards = newBoards;
    })
  }
}
