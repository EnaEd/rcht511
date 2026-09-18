import {SaveMessageModel} from "../model/message-model";

export interface MessageDto {
    messageId: string;
    messageText: string;
    creatorId: string;
    createdAt: string;
    creatorName: string;
}

export interface SaveMessageDto {
    messageId?: string;
    messageText: string;
    creatorId?: string;
    createdAt?: string;
    creatorName?: string;
}

export function mapToSaveMessageDto(model: SaveMessageModel): SaveMessageDto {
    return {
        messageId: model.messageId,
        messageText: model.messageText,
        creatorId: model.creatorId,
        createdAt: model.createdAt,
        creatorName: model.creatorName,
    }
}