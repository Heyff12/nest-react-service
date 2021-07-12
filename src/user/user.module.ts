import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserServices } from "./user.service";
import { UsersController } from "./users.controller";

@Module({
    imports: [],
  controllers: [UsersController],
  providers:[UserServices]
})

export class UserModule {}
