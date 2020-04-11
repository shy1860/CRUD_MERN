import { combineReducers } from 'redux';
import { authentication } from './auth.reducer';
import { room } from './room.reducer';
import { event } from './event.reducer';
import { chat } from './chat.reducer';
const rootReducer = combineReducers({
    authentication,
    room,
    event,
    chat
});
export default rootReducer;