import {AuthDto} from "../api/auth-dto";

export interface AuthModel {
    id: string;
    name: string;
}

export function mapToAuthModel(dto: AuthDto): AuthModel {
    return {
        id: dto.id,
        name: dto.name,
    }
}

export interface SaveAuthModel {
    id?: string;
    name: string;
}