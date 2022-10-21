import { PipeTransform, Injectable } from '@nestjs/common';
import { CreateCartDto, CreateCartDtoValid } from '../dto/create-cart.dto';

@Injectable()
export class TransformPipe implements PipeTransform {
  transform(value: CreateCartDto): CreateCartDtoValid {
    return {
      balance: +value.balance || 0,
      currency: value.currency.toUpperCase(),
    };
  }
}
