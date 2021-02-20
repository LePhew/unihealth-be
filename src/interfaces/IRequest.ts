import { BloodType } from "../enums/BloodType";
import { RequestStatus } from "../enums/RequestStatus";

export interface IRequest {
    title: string,
    bloodType: BloodType,
    country: string,
    city: string,
    address: string,
    responseDate: string;
    note: string,
    status: RequestStatus
}