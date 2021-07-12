import { Controller, Get, Param, Put, Body, Delete, HttpCode, Post } from "@nestjs/common";
import { UserServices } from "./user.service";
import { CreateUserDto } from "./dto";

@Controller('users')
export class UsersController {

    constructor(private readonly userService:UserServices){}


    @Get()
    findAll():any{
        return this.userService.findAll()
    }


    @Post()
    async create(@Body() createUserDTO:CreateUserDto){
        this.userService.create(createUserDTO)
    }
}