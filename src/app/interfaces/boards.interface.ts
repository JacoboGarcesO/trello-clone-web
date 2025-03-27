export interface IBoard {
  boardId: string;
  name: string;
  columns: any;
  todos: any[];
}

export interface IBoardCreate {
  name: string;
}