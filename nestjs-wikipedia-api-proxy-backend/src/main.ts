import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
        }),
    );

    const config = new DocumentBuilder()
    .setTitle("Wikipedia Feed API")
    .setDescription("API description")
    .setVersion("1.0")
    .addTag("wikipedia-feed")
    .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("/docs", app, document);

    app.enableCors();

    await app.listen(4000);
}
bootstrap();
