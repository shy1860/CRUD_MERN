const initialState = { 
    anchor: 'left',
    chat: [],
    open: false,
    id: '',
    created_date: '',
    nickName: '',
    message: '',

    room: '',
    // phone_number: '',
    
};
export function chat(state = initialState, action) {
    switch (action.type) {
        case 'FETECHED_ALL_CHAT':
            return {
                ...state,
                chat: action.chat
            };
        case 'CHAT_DETAIL':
            return {
                ...state,
                id: action.id,
                created_date: action.created_date,
                nickName: action.nickName,
                message: action.message,
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