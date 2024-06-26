import { IEnvironment } from '../models/interface/environment.models';

export const environment: IEnvironment = {
  app: {
    version: '1.0.0',
    port: 3000,
    url_astronomy: 'https://api.astronomyapi.com/api/v2',
    api_id_astronomy: '',
    api_key_secret: '',
  },
  isValid(): boolean {
    return true;
  },
};
