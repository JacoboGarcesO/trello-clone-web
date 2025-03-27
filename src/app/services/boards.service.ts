import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBoard, IBoardCreate } from '../interfaces/boards.interface';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  constructor(private http: HttpClient) { }

  getBoards(): Observable<IBoard[]> {
    return this.http.get<IBoard[]>('http://localhost:8080/board/get-all');
  }

  createBoard(board: IBoardCreate): Observable<IBoard> {
    return this.http.post<IBoard>('http://localhost:8080/board/create-board', board);
  }
}
