const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        { id: 1, name: 'Kateryna' },
        { id: 2, name: 'Ludmyla' },
        { id: 3, name: 'Anton' },
        { id: 4, name: 'Evgeniy' },
        { id: 5, name: 'Yegor' },
        { id: 6, name: 'Oleg' }
    ],
    messageData: [
        { message: 'Hi', id: 1 },
        { message: 'How are you', id: 2 },
        { message: 'I`m ok, and you', id: 3 },
        { message: 'I am olso satisfied', id: 4 }
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) { 
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = { ...state };
            stateCopy.newMessageBody = action.body; 
            return stateCopy;
        }
        case SEND_MESSAGE:
            let stateCopy = { ...state };
            let body = stateCopy.newMessageBody;
            stateCopy.messageData.push({ id: 5, message: body });
            stateCopy.newMessageBody = '';
            return stateCopy;
        default:
            return state;
    }
}

// with Dialogs.jsx
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;