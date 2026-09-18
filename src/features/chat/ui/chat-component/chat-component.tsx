import {MessageComponent} from "../message-component/message";
import {ConversationComponent} from "../conversation-component/conversation-component";
import  "./chat-component.css";

export const ChatComponent = () => {
    return (<div className='chat-component'>
        <div className='messageComponent'><MessageComponent/></div>
        <div className='conversation'><ConversationComponent/></div>
    </div>);
}