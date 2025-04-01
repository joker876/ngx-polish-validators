# NgxPolishValidators

Angular wrapper for [polish-validators](https://www.npmjs.com/package/polish-validators) npm package.

## Usage

```typescript
pesel = new FormControl("", [PolishValidators.Pesel /* ... */]);
```

results in:

```typescript
// this.pesel.errors:
{
  pesel: true;
}
```
