import { Query } from '../';
import { MySQLResponse, UsersTable } from '../models';

const one = (id: number) => Query<UsersTable[]>('select * from users where id = ?', [id]);
const username = (id: number) => Query('select username from users where id = ?', [id]);
const insert = (id: number) => Query('insert into users set ?', [id]);
const find = (column: string, value: number | string) => Query<UsersTable[]>('select * from users where ?? = ?', [column, value]);

export default {
    one,
    username,
    insert,
    find
}