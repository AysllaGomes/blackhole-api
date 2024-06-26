import { firstValueFrom } from 'rxjs';

import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { environment } from '../../config/environment';

@Injectable()
export class AstronomyService {
  protected readonly baseUrl: string = environment.app.url_astronomy;
  protected readonly appId: string = environment.app.api_id_astronomy;
  protected readonly appSecret: string = environment.app.api_key_secret;

  constructor(protected readonly httpService: HttpService) {}

  private getHeaders() {
    return {
      Authorization: `Basic ${Buffer.from(`${this.appId}:${this.appSecret}`).toString('base64')}`,
    };
  }

  async getPlanetaryPositions(params: {
    longitude: number;
    latitude: number;
    elevation: number;
    from_date: string;
    to_date: string;
    time: string;
  }): Promise<any> {
    try {
      const { longitude, latitude, elevation, from_date, to_date, time } =
        params;

      const url: string = `${this.baseUrl}/bodies/positions?
        longitude=${longitude}
        &latitude=${latitude}
        &elevation=${elevation}
        &from_date=${from_date}
        &to_date=${to_date}
        &time=${time}`;

      const config = {
        headers: {
          Authorization: `Basic ${Buffer.from(`${this.appId}:${this.appSecret}`).toString('base64')}`,
        },
      };

      const response = await firstValueFrom(this.httpService.get(url, config));

      return response.data;
    } catch (error) {
      throw error.message;
    }
  }

  async getStarChart(): Promise<any> {
    const url: string = `${this.baseUrl}/star-chart`;
    const response = await firstValueFrom(
      this.httpService.get(url, { headers: this.getHeaders() }),
    );
    return response.data;
  }

  async getMoonPhase(): Promise<any> {
    const url: string = `${this.baseUrl}/moon-phase`;
    const response = await firstValueFrom(
      this.httpService.get(url, { headers: this.getHeaders() }),
    );
    return response.data;
  }

  async search(query: string): Promise<any> {
    const url: string = `${this.baseUrl}/search?query=${query}`;
    const response = await firstValueFrom(
      this.httpService.get(url, { headers: this.getHeaders() }),
    );
    return response.data;
  }
}
