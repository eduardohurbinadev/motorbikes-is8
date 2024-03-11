import { Module } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { BikesController } from './bikes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BikeSchema } from './schemas/bike.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Bike', schema: BikeSchema }])],
  controllers: [BikesController],
  providers: [BikesService],
})
export class BikesModule {}
