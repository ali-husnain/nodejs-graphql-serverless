let common = require("../Common/mysql_common");
const Client = require("serverless-mysql");
exports.func = async (_, obj) => {
  var client = Client({
    config: {
      host: process.env.MYSQL_DB_HOST,
      database: process.env.MYSQL_DB_NAME,
      user: process.env.MYSQL_DB_USERNAME,
      password: process.env.MYSQL_DB_PASSWORD,
    },
  });
  //await common.init(client);
  //var userUUID = uuidv4();
  let customer = await client.query("INSERT INTO customer (first_name) VALUES(?)", [obj.input.first_name]);
  for (let index = 0; index < obj.input.Tickets.length; index++) {
    const element = obj.input.Tickets[index];
    await client.query("INSERT INTO app_ticket_summary (order_id, customer_id) VALUES(?, ?)", [element.order_id, customer.insertId]);
  }
  let resp = await common.getCustomer(client, customer.insertId);
  client.quit();
  return resp;
};