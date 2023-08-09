import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class createPostInput {
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(3)
  @Field()
  title: string;

  @MaxLength(400)
  @Field({ nullable: true })
  content?: string;

  @IsInt()
  @Field()
  authorId: number;
}
