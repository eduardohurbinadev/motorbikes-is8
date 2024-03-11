import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BikesModule } from './bikes/bikes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule global
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    BikesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
