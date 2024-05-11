import { IsEmpty, IsEnum, IsOptional, IsString } from 'class-validator';
import { Category } from '../schemas/book.schema';
import { User } from '../../auth/schemas/user.schema';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;
  @IsOptional()
  @IsString()
  readonly description: string;
  @IsOptional()
  @IsString()
  readonly author: string;
  @IsOptional()
  @IsString()
  readonly price: string;
  @IsOptional()
  @IsEnum(Category)
  readonly category: Category;
  @IsEmpty()
  readonly user: User;
}
