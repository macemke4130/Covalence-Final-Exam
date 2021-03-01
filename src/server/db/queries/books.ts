import { Query } from '../';
import { MySQLResponse, UsersTable } from '../models';

const all = () => Query('select books.*, categories.name as "categoryname" from books join categories on categories.id = books.categoryid');
const one = (id: number) => Query<UsersTable[]>('select * from books where id = ?', [id]);

export default {
    all,
    one
}