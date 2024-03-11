import { Injectable } from '@nestjs/common';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { Model } from 'mongoose';
import { Bike } from './schemas/bike.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BikesService {
  constructor(@InjectModel(Bike.name) private bikeModel: Model<Bike>) {}

  async create(createBikeDto: CreateBikeDto) {
    const createdBike = new this.bikeModel(createBikeDto);
    return createdBike.save();
  }

  async findAll(): Promise<Bike[]> {
    return this.bikeModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} bike`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, _updateBikeDto: UpdateBikeDto) {
    return `This action updates a #${id} bike`;
  }

  remove(id: number) {
    return `This action removes a #${id} bike`;
  }
}
