import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { IBoard } from "src/app/interfaces/boards.interface";

@Injectable({
  providedIn: 'root'
})
export class State {
  private _userEmail = new BehaviorSubject<string>(null);
  private _boards = new BehaviorSubject<IBoard[]>([]);

  get userEmail$(): Observable<string> {
    return this._userEmail.asObservable();
  }

  set userEmail(value: string) {
    this._userEmail.next(value);
  }

  get boards$(): Observable<IBoard[]> {
    return this._boards.asObservable();
  }

  get boardsValue(): IBoard[] {
    return this._boards.getValue();
  }

  set boards(value: IBoard[]) {
    this._boards.next(value);
  }
}
