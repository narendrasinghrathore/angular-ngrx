export interface ITodo {
  name: string;
  date: Date;
  status: ITodoStatus;
  [key: string]: any;
}

export enum ITodoStatus {
  completed,
  inprogress,
  notstarted
}
