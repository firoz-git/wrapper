import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { firstValueFrom, lastValueFrom, map } from 'rxjs';

@Injectable()
export class GieomService {
  [x: string]: any;
  http: any;
  constructor(private httpService: HttpService) {}

  async getId(): Promise<any> {
    return axios.get(
      'https://digitalvalidator.ai:444/generateid/?token=132926D4-B75E-4AE3-BF4A-A0CB99417EC5',
    );
  }

  async upload(data): Promise<any> {
    console.log(data);
    return axios.post('https://digitalvalidator.ai:444/upload', data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    // const requestConfig: AxiosRequestConfig = {
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    // };
    // return await axios.post(
    //   'https://digitalvalidator.ai:444/upload',
    //   data,
    //   requestConfig,
    // );
  }
  async getprocess(): Promise<any> {
    // return axios.get(
    //   'https://digitalvalidator.ai:444/processfiles?userid=741d1586-9a53-416c-810d-f5624950aa72',
    // );
    const axiosConfig: AxiosRequestConfig = {
      method: 'get',
      url: 'https://digitalvalidator.ai:444/processfiles?userid=741d1586-9a53-416c-810d-f5624950aa72&userid=741d1586-9a53-416c-810d-f5624950aa72',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    return firstValueFrom(this.httpService.request(axiosConfig));
  }

  async fetchData(): Promise<any> {
    return axios.get('https://digitalvalidator.ai:444/fetch');
  }
  async getOptions(): Promise<any> {
    return axios.get(
      'https://digitalvalidator.ai:444/getoptions?userid=741d1586-9a53-416c-810d-f5624950aa72&userid=741d1586-9a53-416c-810d-f5624950aa72',
      // {
      // params: { userid: userid '&' },
      // },
    );
  }
}
