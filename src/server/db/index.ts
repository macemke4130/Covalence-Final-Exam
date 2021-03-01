import * as mysql from 'mysql';
import config from '../config';

const pool = mysql.createPool(config.mysql);