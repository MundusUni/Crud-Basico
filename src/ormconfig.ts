import { userInfo } from 'os';
import { DataSourceOptions } from 'typeorm';
import { User } from "./users/entities/user.entity";

export const config: DataSourceOptions = {
  type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'crud',
      entities: [User],
      synchronize: true,
};