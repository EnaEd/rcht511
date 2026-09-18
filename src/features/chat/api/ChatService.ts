import { db } from '../../../shared/services/firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import {SaveMessageDto} from "./message-dto";

export const sendMessage = async (text: string): Promise<void> => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    const messagesRef = collection(db, 'messages');

    const message:SaveMessageDto={
        messageText:trimmedText,
        createdAt:new Date().toISOString(),
    }
    await addDoc(messagesRef, message);
};