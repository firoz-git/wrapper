import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { GieomService } from './gieom.service';
import { Request } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { query } from 'express';
import { uploadDTO } from './upload';
import FormData from 'form-data';

@Controller('gieom')
export class GieomController {
  constructor(private gieomService: GieomService) {}

  @Get('/generateid')
  async getId(): Promise<any> {
    const response = await this.gieomService.getId();
    return response.data;
    console.log(response);
  }

  @Post('/upload')
  async upload(@Request() data): Promise<any> {
    console.log(data);
    const form = new FormData();
    form.append('doctype', data.doctype);
    form.append('userid', data.userid);
    form.append('image', data.image[0]);

    console.log(form);

    // const response = await this.gieomService.upload(form);
    // console.log(response);
    // return response;
  }

  @Get('/processfile')
  async getprocess(): Promise<any> {
    const response = await this.gieomService.getprocess();
    return response.data;
  }

  @Get('/fetch')
  async fetchData(): Promise<any> {
    const response = await this.gieomService.fetchData();
    return response.data;
  }
  @Get('/getoptions')
  async getOptions(): Promise<any> {
    const response = await this.gieomService.getOptions();
    return response.data;
    console.log(response);
  }
}
