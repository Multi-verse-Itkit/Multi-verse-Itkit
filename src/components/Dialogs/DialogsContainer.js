import React from "react"
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../Redux/dialogs-reducer'
import StoreContext from "../../StoreContext"


const DialogsContainer = () => {

 return <StoreContext.Consumer> 
    { store => {
        
        console.log(store)
        
        let onMessageChange = (body) =>store.dispatch(updateNewMessageBodyCreator(body));
        let addMessage = () => store.dispatch(sendMessageCreator());
        
   return <Dialogs updateNewMessageBody={onMessageChange} 
        addMessage={addMessage}
dialogsData={store.getState().messagePage.dialogsData}
messageData={store.getState().messagePage.messageData}
newMessageBody={store.getState().messagePage.newMessageBody}
/>}}
</StoreContext.Consumer>
}

export default DialogsContainer