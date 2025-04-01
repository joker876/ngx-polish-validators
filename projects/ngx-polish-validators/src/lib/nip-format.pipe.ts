import { Pipe, PipeTransform } from '@angular/core';
import { formatNip, NipFormat } from 'polish-validators';

/**
 * Pipe that formats a valid NIP into the specified format using the
 * `formatNip` function from the polish-validators library.
 *
 * @example
 * {{ "1234567890" | nipFormat }}
 * // returns
 * "123-45-67-890"
 *
 * @example
 * {{ "1234567890" | nipFormat:"3-3-2-2" }}
 * // returns
 * "123-456-78-90"
 */
@Pipe({
  name: 'nipFormat',
})
export class NipFormatPipe implements PipeTransform {
  /**
   * Transforms the provided NIP by formatting it according to the specified format.
   *
   * @param {string} nip - The NIP as a string.
   * @param {NipFormat} [format] - The format to use for the NIP. Defaults to "3-2-2-3".
   * @returns {string} The formatted NIP string.
   */
  transform(nip: string, format?: NipFormat): string {
    return formatNip(nip, format);
  }
}
