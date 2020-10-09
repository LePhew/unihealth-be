import { BloodType } from "../enums/BloodType";

export interface IUser {
    firebase_id: string;
    name: string;
    lastname: string;
    age: number;
    identity_document: string;
    bloody_type: BloodType;
    phone: number;
    email: string;
    password: string;
    address: string;
    donor: number;
    certification_id: string;
    profile_pic_id: string;
}