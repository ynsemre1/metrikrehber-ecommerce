// types/qs.d.ts

declare module "qs" {
  const qs: {
    stringify: (obj: any, options?: any) => string;
    parse: (str: string) => any;
  };
  export default qs;
}