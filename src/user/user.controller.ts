import { Controller, Get, Param, Put, Body, Delete, HttpCode, Post } from "@nestjs/common";


@Controller('user')
export class UserController {

    @Post()
    create(@Body() dto:CreateUserDto){

    }

    @Get()
    findAll():any{
        return [
            {id:1,username:'a',password:'a'},
            {id:2,username:'b',password:'b'}
        ];
    }

    @Get(':id')
    findOne(@Param('id') id:number):any{
        console.log(id)
        return {
            id,username:'mock username',password:'mock password'
        }
    }

    @Put(':id')
    update(@Param('id') id:number,@Body() updateUserDto:UpdateUserDto){
        return {
            id,username:'update username',password:'update password'
        }
    }

    @Delete(':id')
    @HttpCode(204)
    removeEventListener(@Param('id') id:number){
        console.log(id)
    }
}