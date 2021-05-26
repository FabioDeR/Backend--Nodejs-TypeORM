import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './Basemodel';
import { Category } from './Category';
import { User } from './User.model';

@Entity()
export class Todo extends BaseModel {
    @Column('varchar', {
        nullable:false,
        unique:true
    })
    public title?:string;
    @Column('varchar', {
        nullable:false })
    public description?:string;

    @ManyToOne(()=> User, user => user.todo)
    public user? : User

    @ManyToMany(()=> Category, category => category.todos)
    @JoinTable({
        name: 'CategoryUTodo'
    })
    public categories?: Category[];
    

}