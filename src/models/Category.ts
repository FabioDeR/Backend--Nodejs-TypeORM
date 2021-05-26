import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseModel } from './Basemodel';
import { Todo } from './Todo.model';

@Entity()
export class Category extends BaseModel{
        @Column('varchar', {
            nullable: false,
            unique:true
        })
        public title?: string      

        @ManyToMany(()=> Todo, todo => todo.categories)
        public todos?: Todo[];

}