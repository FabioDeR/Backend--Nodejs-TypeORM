import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './Basemodel';
import { Todo } from './Todo.model';

@Entity()
export class Category extends BaseModel{
        @Column('varchar', {
            nullable: false,
            unique:true
        })
        public title?: string


        @OneToMany(()=> Todo, todo => todo.category)
        public todos? : Todo[]

}