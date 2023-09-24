import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleBooleanCase',
})
export class ToggleBooleanCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }
}
