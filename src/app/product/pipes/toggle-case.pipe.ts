import { Pipe, PipeTransform } from '@angular/core';

// fernando | toggleCase = 'FERNANDO'
// FERNANDO | toggleCase = 'fernando'

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, arg: 'upper' | 'lower'): string {
    if (arg === 'upper') return value.toUpperCase();

    if (arg === 'lower') return value.toLowerCase();

    return value;
  }
}
