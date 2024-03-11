import { PartialType } from '@nestjs/mapped-types';
import { CreateBikeDto } from './create-bike.dto';
import { IsString } from 'class-validator';

export class UpdateBikeDto extends PartialType(CreateBikeDto) {
  @IsString()
  year: string;

  @IsString()
  description: string;
}
