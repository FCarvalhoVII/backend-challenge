import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAddress1637771565787 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "address",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        generationStrategy: "increment",
                        isGenerated: true,
                        isUnique: true,
                        isPrimary: true
                    },
                    {
                        name: "user_id",
                        type: "int"
                    },
                    {
                        name: "address",
                        type: "varchar"
                    },
                    {
                        name: "neighborhood",
                        type: "varchar"
                    },
                    {
                        name: "number",
                        type: "varchar"
                    },
                    {
                        name: "city",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUserAddress",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("address")
    }

}
