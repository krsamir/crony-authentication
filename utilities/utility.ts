export const transformJSON = (value: unknown) =>
  JSON.parse(JSON.stringify(value));

interface IColumns {
  Field: string;
  Type: string;
  Null: string;
  Key: string;
  Default: string;
  Extra: string;
}
export interface IMandatoryFields {
  id?: number;
  name?: string;
  password?: string;
  email?: string;
  token?: string;
  expiry?: string;
  isactive?: boolean;
}
const COLUMNS = [
  "id",
  "name",
  "password",
  "email",
  "token",
  "expiry",
  "isactive",
];
export const validateColumns = (
  arr: IColumns[],
  aliases: IMandatoryFields,
): IMandatoryFields => {
  const mandatoryColumns = Object.fromEntries(
    COLUMNS.map((keys) => {
      return Object.entries(aliases).map(([key, value]) => {
        if (key === keys) {
          return value;
        } else {
          return keys;
        }
      });
    }),
  );
  const validFields = Object.entries(mandatoryColumns).map(
    ([, value]) => value,
  );
  const fields = arr.map(({ Field }) => Field?.toLowerCase());
  const result = validFields.every((val) => fields.includes(val as string));
  if (!result) {
    throw Error(
      `Table should have following mandatory columns. ${validFields}. Please add and then proceed. You can also alias column name if your column name is different.`,
    );
  }
  return mandatoryColumns;
};
