import { ValidatorFn } from '@angular/forms';
import {
  BankName,
  getBankNameFromIban,
  isCreditCardNumberValid,
  isDoctorNumberValid,
  isIbanValid,
  isIdCardNumberValid,
  isImeiValid,
  isIsbnValid,
  isNipValid,
  isPeselValid,
  isPostalCodeValid,
  isRegonValid,
} from 'polish-validators';

const IBAN_BANK_DATA_REGEX = /^(?:[A-Z]{2})?\d{2}(\d{3})/i;

export class PolishValidators {
  static creditCard: ValidatorFn = control =>
    isCreditCardNumberValid(control.value) ? {} : { creditCardNumber: true };

  static doctorNumber: ValidatorFn = control => (isDoctorNumberValid(control.value) ? {} : { doctorNumber: true });

  static iban(options: {
    allowedBankNames?: BankName[];
    allowedCountryCodes?: string[];
    requireCountryCode?: boolean;
  }): ValidatorFn {
    return control => {
      const v = control.value;
      if (options.requireCountryCode && !/^[a-z]{2}/i.test(v)) {
        return { ibanCountryCodeRequired: true };
      }
      if (!isIbanValid(v)) return { iban: true };

      if (options.allowedCountryCodes) {
        const countryCodeRaw = v.match(/^([a-z]{2})/i)[1] ?? '';
        const countryCode = countryCodeRaw || 'PL';
        if (!options.allowedCountryCodes.includes(countryCode)) {
          return { ibanCountryCodeNotAllowed: countryCodeRaw };
        }
      }

      if (options.allowedBankNames) {
        const bankName = getBankNameFromIban(v);
        const [, bankNameCode] = v.match(IBAN_BANK_DATA_REGEX);
        if (bankName && !options.allowedBankNames.includes(bankName as BankName)) {
          return { ibanBankNameNotAllowed: { bankNameCode, bankName } };
        }
      }
      return {};
    };
  }

  static idCard: ValidatorFn = control => (isIdCardNumberValid(control.value) ? {} : { idCardNumber: true });

  static imei: ValidatorFn = control => (isImeiValid(control.value) ? {} : { imei: true });

  static isbn: ValidatorFn = control => (isIsbnValid(control.value) ? {} : { isbn: true });

  static nip: ValidatorFn = control => (isNipValid(control.value) ? {} : { nip: true });

  static pesel: ValidatorFn = control => (isPeselValid(control.value) ? {} : { pesel: true });

  static postalCode: ValidatorFn = control => (isPostalCodeValid(control.value) ? {} : { postalCode: true });

  static regon: ValidatorFn = control => (isRegonValid(control.value) ? {} : { regon: true });
}
