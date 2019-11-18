import { AbstractControl } from '@angular/forms';

export function ValidateFIO(control: AbstractControl) {
  const value = control.value;
  if (value.search(/([А-ЯЁ][а-яё]+[\-\s]?){2,}/) === -1) {
    return {validFIO: true};
  }
  return null;
}
