import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Bike extends Document {
  @Prop({ required: true })
  modelo: string;

  @Prop({ required: true })
  year: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  color: string;
}

export const BikeSchema = SchemaFactory.createForClass(Bike);
