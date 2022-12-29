import React from "react"
import Dialogs from './Dialogs'
import { sendMessageCreator, updateNewMessageBodyCreator } from './../../Redux/dialogs-reducer'
import StoreContext from "../../StoreContext"
import {connect} from 'react-redux'


// const DialogsContainer = () => {

//  return <StoreContext.Consumer> 
//     { store => {
        
//         console.log(store)
        
//         let onMessageChange = (body) =>store.dispatch(updateNewMessageBodyCreator(body));
//         let addMessage = () => store.dispatch(sendMessageCreator());
        
//    return <Dialogs updateNewMessageBody={onMessageChange} 
//         addMessage={addMessage}
// dialogsData={store.getState().messagePage.dialogsData}
// messageData={store.getState().messagePage.messageData}
// newMessageBody={store.getState().messagePage.newMessageBody}
// />}}
// </StoreContext.Consumer>
// }


let mapStateToProps = (state) => {
return {
     dialogsData: state.messagePage.dialogsData,
     messageData: state.messagePage.messageData,
     newMessageBody: state.messagePage.newMessageBody
}
}
let mapDispatchToProps = (dispatch) => {
return {
     updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)) }, 
     addMessage: () => {dispatch(sendMessageCreator())}
}
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer