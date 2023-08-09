import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createPostInput } from './dto/create-post.input';
import { Post } from './post.entity'

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private postsRepository:Repository<Post>
    ) {}

    async findAll(): Promise<Post[]> {
        return this.postsRepository.find();
    }

    async findPostById(id: number): Promise<Post> {
        return this.postsRepository.findOne({
            where: {
                id,
            },
        });
    }

    createPost(post: createPostInput): Promise<Post> {
        const newPost = this.postsRepository.create(post);
        return this.postsRepository.save(newPost);
    }
}
