import { BloodType } from "../enums/BloodType";

export interface IRequest {
    title: string,
    bloodType: BloodType,
    country: string,
    city: string,
    address: string,
    responseDate: string;
    note: string,
    contact: string
}