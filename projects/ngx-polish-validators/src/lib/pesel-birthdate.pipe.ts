import { Pipe, PipeTransform } from '@angular/core';
import { getBirthdateFromPesel } from 'polish-validators';

/**
 * Pipe that extracts the birthdate from a valid PESEL number using the
 * `getBirthdateFromPesel` function from the polish-validators library.
 *
 * @example
 * {{ "44051401458" | peselBirthdate }}
 * // returns
 * Date object representing the birthdate (e.g., 1944-05-14)
 */
@Pipe({
  name: 'peselBirthdate',
})
export class PeselBirthdatePipe implements PipeTransform {
  /**
   * Transforms the provided PESEL by extracting the birthdate.
   *
   * @param {string} pesel - The 11-digit PESEL number as a string.
   * @returns {Date} The birthdate as a Date object, or null if PESEL is invalid.
   */
  transform(pesel: string): Date | null {
    try {
      return getBirthdateFromPesel(pesel);
    } catch (error) {
      return null;
    }
  }
}
