import {MessageDto} from "../api/message-dto";

export interface MessageModel {
    messageId: string;
    messageText: string;
    creatorId: string;
    createdAt: string;
    creatorName: string;
}

export function mapToMessageModel(dto: MessageDto): MessageModel {
    return {
        messageId: dto.messageId,
        messageText: dto.messageText,
        creatorId: dto.creatorId,
        creatorName: dto.creatorName,
        createdAt: dto.createdAt,
    }
}

export interface SaveMessageModel {
    messageId?: string,
    messageText: string;
    creatorId: string;
    createdAt: string;
    creatorName: string;
}