import "./message.css"
import {AppTextInput} from "../../../../shared/ui/ui-lib/input/AppTextInput";
import {useState} from "react";
import {sendMessage} from "../../api/ChatService";

export const MessageComponent =()=>{
    const [message, setText] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        if (!message.trim()) return;

        try {
            setLoading(true);
            await sendMessage(message);
            setText('');
        } catch (error) {
            console.error('Ошибка в компоненте чата:', error);
            alert('Не удалось отправить сообщение');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
           <p>Enter message</p>
            <div className={"messageBlock"}>
            <div >
            <AppTextInput inputData={message} onChangeText={setText}/>
            </div>
            <button className={"sendButton"}  disabled={loading} onClick={handleSend}  >Send</button>
            </div>
        </div>);
}