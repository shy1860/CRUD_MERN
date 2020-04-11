import { userService } from '../_services';
import { history } from '../_helpers';

export const chatAction = {
    getChat

};
function getChat(){
    return dispatch => {
        let apiEndpoint = 'chats';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeChatsList(response.data.data));
        }).catch((err)=>{
            console.log(err);
        })
   };
}
function onChangeProps(props, chat){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, chat.target.value));
    }
}

export function changeChatsList(chat){
    return{
        type: "FETECHED_ALL_CHAT",
        chat: chat
    }
}
export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}
export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}
export function createUserInfo(){
    return{
        type: "USER_CREATED_SUCCESSFULLY"
    }
}
