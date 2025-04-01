import { Pipe, PipeTransform } from '@angular/core';
import { extractSexFromPesel } from 'polish-validators';

/**
 * Pipe that extracts the sex from a valid PESEL number using the
 * `extractSexFromPesel` function from the polish-validators library.
 *
 * @example
 * {{ "44051401458" | peselSex }}
 * // returns
 * "male" // or "female"
 */
@Pipe({
  name: 'peselSex',
})
export class PeselSexPipe implements PipeTransform {
  /**
   * Transforms the provided PESEL by extracting the sex.
   *
   * @param {string} pesel - The 11-digit PESEL number as a string.
   * @returns {string} 'male' if the PESEL belongs to a male, 'female' if it belongs to a female.
   */
  transform(pesel: string, valueIfInvalid: string = 'Nieprawidłowy PESEL'): string {
    try {
      return extractSexFromPesel(pesel);
    } catch (error) {
      return valueIfInvalid;
    }
  }
}
