import { Injectable } from '@nestjs/common';

interface User {
  id?: number;
  username: string;
  password: string;
}

@Injectable()
export class UserServices {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'a',
      password: 'a',
    },
    { id: 2, username: 'b', password: 'b' },
  ];

  create(user: User) {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }
}
