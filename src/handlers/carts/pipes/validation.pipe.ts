import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { CreateCartDtoValid } from '../dto/create-cart.dto';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: CreateCartDtoValid): CreateCartDtoValid {
    if (value.balance < 0) {
      throw new BadRequestException('Balance cannot be less than 0');
    }
    return value;
  }
}
