import { Pipe, PipeTransform } from '@angular/core';
import { getCountryIbanDataFromIban } from 'polish-validators';

/**
 * Pipe that extracts country-specific information from the IBAN using the
 * `getCountryIbanDataFromIban` function from the polish-validators library.
 *
 * @example
 * {{ "PL61109010140000071219812874" | countryIbanData }}
 * // returns
 * { country: 'Poland', length: 28 }
 */
@Pipe({
  name: 'countryIbanData',
})
export class CountryIbanDataPipe implements PipeTransform {
  /**
   * Transforms the provided IBAN into its country-specific data.
   *
   * @param {string} iban - The IBAN number as a string.
   * @returns {{ country: string; length: number } | null} An object containing the country name
   * and IBAN length for the given IBAN, or `null` if not valid.
   */
  transform(iban: string): { country: string; length: number } | null {
    return getCountryIbanDataFromIban(iban);
  }
}
