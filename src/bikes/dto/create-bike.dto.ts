import { IsString } from 'class-validator';

export class CreateBikeDto {
  @IsString()
  modelo: string;

  @IsString()
  year: string;

  @IsString()
  description: string;

  @IsString()
  color: string;
}
