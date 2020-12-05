import { BaseEntity } from 'typeorm';
export declare class PublicEntity extends BaseEntity {
    id: number;
    isDel: number;
    createdAt: Date;
    updatedAt: Date;
}
