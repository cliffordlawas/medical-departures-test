import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { UserState, UserStore } from './user.store';


@Injectable({
  providedIn: 'root'
})
export class UserQuery extends QueryEntity<UserState> {

  selectAllUsers$ = this.select(state => {
    return state.isLoaded;
  });

  constructor(protected override store: UserStore) {
    super(store);
  }
}