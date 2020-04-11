import { userService } from '../_services';
import { history } from '../_helpers';

export const eventAction = {
    getEvent

};
function getEvent(){
    return dispatch => {
        let apiEndpoint = 'events';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeEventsList(response.data.data));
        }).catch((err)=>{
            console.log(err);
        })
   };
}
function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}

export function changeEventsList(event){
    return{
        type: "FETECHED_ALL_EVENT",
        event: event
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
