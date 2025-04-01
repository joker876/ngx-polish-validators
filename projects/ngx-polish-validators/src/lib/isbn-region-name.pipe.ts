import { Pipe, PipeTransform } from '@angular/core';
import { getRegionNameFromIsbn } from 'polish-validators';

/**
 * Pipe that determines the region name associated with an ISBN using the
 * `getRegionNameFromIsbn` function from the polish-validators library.
 *
 * @example
 * {{ "978-83-241-3233-3" | isbnRegionName }}
 * // returns
 * "Polska"
 */
@Pipe({
  name: 'isbnRegionName',
})
export class IsbnRegionNamePipe implements PipeTransform {
  /**
   * Transforms the provided ISBN by determining its region name.
   *
   * @param {string} isbn - The ISBN as a string.
   * @returns {string | null} The region name as a string, or `null` if not recognized.
   */
  transform(isbn: string): string | null {
    return getRegionNameFromIsbn(isbn);
  }
}
