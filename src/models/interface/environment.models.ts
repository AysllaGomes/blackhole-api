export interface IEnvironment {
  app: {
    version: string;
    port: number;
    web_url: string;
  };
  isValid: () => boolean;
}
