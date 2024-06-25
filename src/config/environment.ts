import { IEnvironment } from '../models/interface/environment.models';

export const environment: IEnvironment = {
  app: {
    version: '1.0.0',
    port: 3000,
    web_url: 'http://localhost:4200',
  },
  isValid(): boolean {
    return true;
  },
};
