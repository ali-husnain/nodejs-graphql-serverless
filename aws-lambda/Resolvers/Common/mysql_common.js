exports.getCustomer = async (client, cid) => {
    let customer = {};
    
    // const [customerFromDb, metadata] = await client.query(`select cid, first_name from app_customer where cid = ${cid}`);
    const [customerFromDb, metadata] = await client.query(`select cid, first_name from app_customer where cid = 1`);
    console.log(customerFromDb)
    if (customerFromDb.length == 0) {
      return null;
    }

    // let ticketsFromDb = await client.query(
    //   `
    //   select id, order_id from app_ticket_summary where customer_id = ? limit 2
    //   `,
    //   [customerFromDb[0].cid]
    // );
    customer.cid = customerFromDb[0].cid;
    //customer.Tickets = ticketsFromDb;
    customer.first_name = customerFromDb[0].first_name;
    // if (ticketsFromDb.length > 0) {
    //     customer.Tickets = ticketsFromDb.map(function (x) {
    //     return { id: x.id, order_id: x.order_id };
    //   });
    // }
    return customer;
  };