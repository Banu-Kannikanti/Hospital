import { Patient } from "./patient";

export class Doctor {
    did!: number;
    name!: string;
    age!: number;
    gender!: string;
    specialist_field!: string;
    patients!: new () => Patient[];
}
