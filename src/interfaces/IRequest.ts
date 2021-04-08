import { BloodType } from "../enums/BloodType";

export interface IRequest {
    title: string,
    bloodType: BloodType,
    provinceId: number,
    municipalityId: number,
    address: string,
    responseDate: string;
    note: string,
    contact: string
}