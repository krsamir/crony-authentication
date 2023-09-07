export declare const transformJSON: (value: unknown) => any;
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
export declare const validateColumns: (arr: IColumns[], aliases: IMandatoryFields) => IMandatoryFields;
export {};
