import { Query } from '../';
import { MySQLResponse, UsersTable } from '../models';

const all = () => Query('select books.*, categories.name as "categoryname" from books join categories on categories.id = books.categoryid');
const one = (id: number) => Query<UsersTable[]>('select books.*, categories.name as "categoryname" from books join categories on categories.id = books.categoryid where books.id = ?', [id]);
const destroy = (id: number) => Query('delete from books where id = ?', [id]);
const allCats = () => Query('select * from categories');
const editBook = (id: number, editedBook: any) => Query('update books set ? where id = ?', [editedBook, id]);

export default {
    all,
    one,
    destroy,
    allCats,
    editBook
}