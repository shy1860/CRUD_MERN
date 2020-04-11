import { userService } from '../_services';
import { history } from '../_helpers';

export const roomAction = {
    getRoom,
    getRoomById,
    onChangeProps,
    editRoomInfo,
    createRoom,
    deleteRoomById
};
function getRoom(){
    return dispatch => {
        let apiEndpoint = 'rooms';
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(changeRoomsList(response.data.data));
        }).catch((err)=>{
            console.log(err);
        })
   };
}
function createRoom(payload){
    return dispatch => {
        let apiEndpoint = 'rooms/';
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            dispatch(createRoomInfo());
            history.push('/room');
        })
    }
}
function getRoomById(id){
    return dispatch => {
        let apiEndpoint = 'rooms/'+ id;
        userService.get(apiEndpoint)
        .then((response)=>{
            dispatch(editRoomsDetails(response.data.data));
        })
    };
}
function onChangeProps(props, event){
    return dispatch =>{
        dispatch(handleOnChangeProps(props, event.target.value));
    }
}
function editRoomInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'rooms/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedRoomInfo());
            history.push('/room');
        })
    }
}
function deleteRoomById(id){
    return dispatch => {
        let apiEndpoint = 'rooms/'+ id;
        userService.deleteDetail(apiEndpoint)
        .then((response)=>{
            dispatch(deleteRoomsDetails());
            dispatch(roomAction.getRoom());
        })
    };
}
export function changeRoomsList(room){
    return{
        type: "FETECHED_ALL_ROOM",
        room: room
    }
}
export function handleOnChangeProps(props, value){
    return{
        type: "HANDLE_ON_CHANGE",
        props: props,
        value: value
    }
}
export function editRoomsDetails(room){
    return{
        type: "ROOM_DETAIL",
        id: room._id,
        room_name: room.room_name,
        status: room.status
        
        // mobile: room.mobile,
        // phone_number: room.phone_number,
        // address: room.address
    }
}
export function updatedRoomInfo(){
    return{
        type: "ROOM_UPDATED"
    }
}
export function createRoomInfo(){
    return{
        type: "ROOM_CREATED_SUCCESSFULLY"
    }
}
export function deleteRoomsDetails(){
    return{
        type: "DELETE_ROOM_DETAILS"
    }
}