import { Character } from './character';

export interface ApiData {
    results: Character[];
    [propName: string]: any
}
export interface ApiResponse {
    data: ApiData;
    [propName: string]: any
}