import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { UserModule } from './user/user.module';
import { LogMiddleware } from './common/middleware/log.middleware';

@Module({
  imports: [CatModule,UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consume:MiddlewareConsumer){
    consume
    .apply(LogMiddleware)
    // .forRoutes('users')
    .forRoutes({
      path:'users',
      method:RequestMethod.GET
    })
  }
}
