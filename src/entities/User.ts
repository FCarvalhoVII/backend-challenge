import { 
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { Address } from './Address';

@Entity('users')
class User {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @OneToMany(() => Address, address => address.user)
    address: Address[];

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    name: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { User }