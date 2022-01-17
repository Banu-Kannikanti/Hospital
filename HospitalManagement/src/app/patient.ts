
import { Doctor } from "./doctor";
export class Patient {
    pid!: number;
    name!: string;
    dateOfVisit!: Date;
    age!:number;
    prescription!:string;
    doctor=new Doctor();
}

