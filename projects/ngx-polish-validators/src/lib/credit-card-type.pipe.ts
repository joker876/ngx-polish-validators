import { Pipe, PipeTransform } from '@angular/core';
import { getCreditCardType } from 'polish-validators';

/**
 * Pipe that determines the type of credit card based on the first digit of the card number
 * using the `getCreditCardType` function from the polish-validators library.
 *
 * @example
 * {{ "4123456789012345" | creditCardType }}
 * // returns
 * "visa"
 */
@Pipe({
  name: 'creditCardType',
})
export class CreditCardTypePipe implements PipeTransform {
  /**
   * Transforms the provided credit card number by determining its type.
   *
   * @param {string} number - The credit card number as a string.
   * @returns {CreditCardType | null} The credit card type, or `null` if the type cannot be determined.
   */
  transform(number: string): any {
    return getCreditCardType(number);
  }
}
