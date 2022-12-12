import React from "react"
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../Redux/dialogs-reducer'


const DialogsContainer = (props) => {
let state = props.store.getState();
let store = props.store


let onMessageChange = (body) => {
    store.dispatch(updateNewMessageBodyCreator(body));
};
let addMessage = () => { store.dispatch(sendMessageCreator())};


return <Dialogs updateNewMessageBody={onMessageChange} 
addMessage={addMessage} 
dialogsData={state.messagePage.dialogsData}
messageData={state.messagePage.messageData}
newMessageBody = {state.messagePage.newMessageBody}
/>
}

export default DialogsContainer