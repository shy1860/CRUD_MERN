const initialState = { 
    anchor: 'left',
    event: [],
    open: false,
    id: '',
    eventType: '',
    userName: '',
    time: '',
    socketID: '',
    room: '',
    // phone_number: '',
    
};
export function event(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_EVENT':
            return {
                ...state,
                event: action.event
            };
        case 'EVENT_DETAIL':
            return {
                ...state,
                id: action.id,
                eventType: action.eventType,
                userName: action.userName,
                time: action.time,
                socketID: action.socketID,
                room: action.room

                // mobile: action.mobile,
                // phone_number: action.phone_number,
                // address: action.address
            };
        case "USER_UPDATED":
            return state;
        case "HANDLE_ON_CHANGE":
            return {
                ...state,
                [action.props]: action.value
            };
        default:
            return state
        }
}