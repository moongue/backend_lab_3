import { Inject, Injectable } from '@nestjs/common';
import { UtilsService } from '../../services/utils/utils.service';
import { ConfigService } from '../../services/config/config.service';

@Injectable()
export class CartsService {
  constructor(
    private readonly utilsService: UtilsService,
    private readonly configService: ConfigService,

    @Inject('DateService')
    private readonly DateService,
  ) {
    console.log(`Current env: ${configService.getAppConfig().env}`);
  }

  average() {
    return this.utilsService.average([1, 2, 3]);
  }

  create() {
    return 'This action adds a new cart';
  }

  findAll() {
    return `This action returns all carts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
