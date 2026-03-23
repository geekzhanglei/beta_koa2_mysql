/*
 * @Author: zhanglei
 * @Date: 2019-07-15 16:09:53
 * @LastEditors: zhanglei
 * @LastEditTime: 2019-09-16 15:14:10
 * @Description:
 */
const mysqlConfig = {
    user: process.env.DB_USER || 'mysql',
    password: process.env.DB_PASSWORD || 'mypassword',
    database: process.env.DB_DATABASE || 'newblog',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '3306'
};

module.exports = mysqlConfig;
