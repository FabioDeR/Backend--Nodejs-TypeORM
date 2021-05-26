import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './Basemodel';
import { Todo } from './Todo.model';


@Entity()
export class User extends BaseModel {

    @Column('varchar', {
        nullable:false
    })
    public pseudo?: string;

    @Column('varchar', {
        nullable : false,
        unique : true
    })
    public email?:string;    

    @OneToMany(() => Todo, todo => todo.user)
    public todo?:Todo[];

    /**
     * Propriété dite "virtuelle", car elle n'est pas en DB
     */
     get fullName() {
        return `${this.pseudo} ${this.email}`;
    }

}