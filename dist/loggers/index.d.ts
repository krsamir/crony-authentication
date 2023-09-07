declare const log: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
declare const error: (msg: string | object | unknown) => void;
export { log, error };
