import { Body, Controller, Get, Post } from '@nestjs/common';
import { createUserDTO } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async getAllUsers(@Body() createUser: createUserDTO) {
    return createUser;
  }
}
