import { Module } from "@nestjs/common";
import { CatsController } from "./cat.controller";

@Module({
    imports: [],
  controllers: [CatsController]
})

export class CatModule {}
