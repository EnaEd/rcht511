import {SaveAuthModel} from "../model/auth-model";

export interface AuthDto {
    id: string;
    name: string;
}

export interface SaveAuthDto {
    name: string;
}

export function mapToSaveAuthDto(model: SaveAuthModel): SaveAuthDto {
    return {
        name: model.name,
    };
}