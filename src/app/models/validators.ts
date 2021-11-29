import { AbstractControl, ValidationErrors } from "@angular/forms";

export const emailValidator = (
    control: AbstractControl): ValidationErrors | null => {
  const forbidden = control.value.includes('@');
  return forbidden ? { emailInvalido: { value: control.value } } : null;
};