import { NestFactory } from '@nestjs/core';
import { ShowUserModule } from './infra/controller/users/show-user.controller/show-user.module';

async function bootstrap() {
  const app = await NestFactory.create(ShowUserModule);
  await app.listen(3000);
}
bootstrap();
