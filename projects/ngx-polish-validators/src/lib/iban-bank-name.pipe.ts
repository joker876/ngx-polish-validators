import { Pipe, PipeTransform } from '@angular/core';
import { getBankNameFromIban } from 'polish-validators';

/**
 * Pipe that fetches the bank name based on the IBAN using the
 * `getBankNameFromIban` function from the polish-validators library.
 * This function returns a bank name only for Polish IBANs.
 *
 * @example
 * {{ "PL61109010140000071219812874" | ibanBankName }}
 * // returns
 * "PKO Bank Polski"
 */
@Pipe({
  name: 'ibanBankName',
})
export class IbanBankNamePipe implements PipeTransform {
  /**
   * Transforms the provided IBAN by fetching the corresponding bank name.
   *
   * @param {string} iban - The IBAN number as a string.
   * @returns {string | null} The bank name as a string, or `null` if not available.
   */
  transform(iban: string): string | null {
    return getBankNameFromIban(iban);
  }
}
