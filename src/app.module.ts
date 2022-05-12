import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        GraphQLModule.forRoot({
            driver: ApolloDriver,
            playground: true,
            typePaths: ['./**/*.graphql'],
            definitions: {
                path: join(process.cwd(), 'src/graphql.ts'),
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
