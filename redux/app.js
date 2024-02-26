import store from './app/store';
import { cakeAction } from './features/slice/cakeSlice';
import { iceCreamAction } from './features/slice/icreamSlice';
import { fetchUsers } from './features/slice/userSlice';

console.log('Initial State', store.getState());

const unsubscribe = store.subscribe(() => {
  // console.log('updated state', store.getState())
})

store.dispatch(fetchUsers());
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.ordered())
store.dispatch(cakeAction.restocked(2))

store.dispatch(iceCreamAction.ordered())
store.dispatch(iceCreamAction.ordered())
store.dispatch(iceCreamAction.restocked(2))

unsubscribe();