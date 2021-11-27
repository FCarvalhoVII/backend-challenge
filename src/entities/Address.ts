import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import { User } from './User';

@Entity('address')
class Address {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @ManyToOne(() => User)
    user: User;

    @Column()
    user_id: number;

    @Column()
    address: string;

    @Column()
    neighborhood: string;

    @Column()
    number: string;

    @Column()
    city: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Address }