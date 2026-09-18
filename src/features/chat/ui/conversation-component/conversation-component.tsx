import "./conversation-component.css"
import {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../../../shared/services/firebase/firebase";
import {MessageDto} from "../../api/message-dto";
export const ConversationComponent = ()=>{
    const [messages, setMessages] = useState<MessageDto[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const messagesRef = collection(db, 'messages');
        const q = query(messagesRef, orderBy('createdAt', 'asc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const messagesList: MessageDto[] = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data() as Omit<MessageDto, 'messageId'>;

                messagesList.push({
                    messageId: doc.id,
                    ...data
                });
            });

            setMessages(messagesList);
            setLoading(false);
        }, (error) => {
            console.error("Ошибка Firestore:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Загрузка сообщений...</div>;
    }

    return (
        <div className="chat-container">
            <div className="messages-list">
                {messages.map((msg) => (
                    <div key={msg.messageId} className="message-item">
                        {/*<span className="time">{msg.createdAt}</span>*/}
                        <p className="text">{msg.messageText}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}