const { Pool } = require('pg');
const itemsPool = new Pool({
    connectionString:"AkTX3FTJ3KDofRoIqY79PmEzhhXid060 psql -h dpg-chtsjf67avj345dn6nb0-a.oregon-postgres.render.com -U accounts_r6fo_user accounts_r6fo",
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = itemsPool;



/*const { Client } = require("pg");
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD, //port: process.env.PGPORT
});
client.connect();

//const res3 =  client.query(`INSERT INTO user1(id,name) VALUES (779,'akimen')`);

module.exports = client;
/* console.log(res);
    await client.end();
connectDb();*/
