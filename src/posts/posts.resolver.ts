import { Args, Int, Mutation, Query } from '@nestjs/graphql';
import { Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { createPostInput } from './dto/create-post.input';

@Resolver()
export class PostsResolver {

    constructor(private postService: PostsService) {}

    @Query((returns) => [Post])
    posts() {
        return this.postService.findAll()
    }

    @Query((returns) => Post)
    post(@Args('id', {type: () => Int}) id: number) {
        return this.postService.findPostById(id)
    }

    @Mutation((returns) => Post)
    createPost(@Args('postInput') postInput: createPostInput) {
        return this.postService.createPost(postInput);
    }
}
