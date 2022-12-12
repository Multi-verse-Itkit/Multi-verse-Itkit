import React from "react"
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";




const Dialogs = (props) => {

    let dialogElement = props.dialogsData.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messageElement = props.messageData.map(m => <Message message={m.message} id={m.id} />);
    
    
    /*let dialogElement = [
        <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id}/>,
 <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id}/>,
 <DialogsItems name={dialogsData[2].name} id={dialogsData[2].id}/>,
 <DialogsItems name={dialogsData[3].name} id={dialogsData[3].id}/>,
 <DialogsItems name={dialogsData[4].name} id={dialogsData[4].id}/>,
 <DialogsItems name={dialogsData[5].name} id={dialogsData[5].id}/>
 ];*/
    /*let mesageElement = [
        <Message message={messageData[0].message} id={messageData[0].id} />,
        <Message message={messageData[1].message} id={messageData[1].id}/>,
        <Message message={messageData[2].message} id={messageData[2].id}/>,
        <Message message={messageData[3].message} id={messageData[3].id}/>
    ];*/

    let onSendMessageClick = () => {
        props.addMessage();
    }
    let onMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body)
        
    }

    return <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogElement}
        </div>
        <div className={s.messages}>
            <div>
                {messageElement}
            </div>
            <div className={s.newMessage}>
                <textarea value={props.newMessageBody}
                    onChange={onMessageChange}
                    placeholder="Enter your message">
                </textarea>
                <div>
                    <button onClick={onSendMessageClick}> Send message </button>
                </div>
            </div>
        </div>

    </div>
}
export default Dialogs