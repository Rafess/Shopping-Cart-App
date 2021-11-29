import { AbstractControl } from "@angular/forms";
import { FormControl } from "@angular/forms";
export class User {
    name: string = '';
    email: string = '';
    adress: string = '';
    constructor(name: string, email: string, adress: string) {
        this.name = name;
        this.email = email;
        this.adress = adress;
    } }