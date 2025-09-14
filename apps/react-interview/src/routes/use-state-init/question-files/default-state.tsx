export interface State<T>{
  readonly isFetching: boolean;
  readonly data: T | null;
  readonly error: Error | null;
}

export class DefaultState<T> implements State<T>{
  static timesCreated = 0;
  constructor(){
    DefaultState.timesCreated++
  }

  get isFetching(){
    return true;
  }

  get data():T | null{
    return null;
  }

  get error(): Error | null{
    return null
  }
}