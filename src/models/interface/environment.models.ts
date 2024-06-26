export interface IEnvironment {
  app: {
    version: string;
    port: number;
    api_key_secret: string;
    api_id_astronomy: string;
  };
  isValid: () => boolean;
}
