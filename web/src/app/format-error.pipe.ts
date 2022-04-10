import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formatError'
})
export class FormatErrorPipe implements PipeTransform {
  transform(value?: ValidationErrors | null): string {
    if (value) {
      for (let key in value) {
        switch (key) {
          case 'required':
            return 'This field is required';
          case 'email':
            return 'This field must be a valid email';
          default:
            return key;
        }
      }
    }
    return '';
  }
}
