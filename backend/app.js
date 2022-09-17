const express = require("express");
const app = express();

const port = 3001;
const host = "127.0.0.1";

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const Sequelize = require("sequelize-cockroachdb");

const sequelize = new Sequelize({
  dialect: "postgres",
  username: "jeffrey",
  password: "EJfMAcrrb0CZlPhrvumWKw",
  host: "free-tier11.gcp-us-east1.cockroachlabs.cloud",
  port: 26257,
  database: "solid-sage-1929.defaultdb",
  logging: false,
  dialectOptions: {
    ssl: {},
  },
});

const Recipe = sequelize.define("recipe", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.TEXT,
  },
  recipeContent: {
    type: Sequelize.JSON,
  },
});

// Creates people table
const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: Sequelize.TEXT,
  },
  password: {
    type: Sequelize.INTEGER,
  },
});

// force: true -> delete whole table, and recreate new one. force: false, just alters (?)
app.get("/list", (req, res) => {
  Recipe.sync({
    force: false,
  })
    .then(() => {
      return Recipe.findAll();
    })
    .then((recipe) => {
      res.send(recipe);
    });
});

app.get("/random", (req, res) => {
  Recipe.sync({
    force: false,
  })
    .then(() => {
      return Recipe.findAll({ order: Sequelize.literal('random()'), limit: 1 });
    })
    .then((recipe) => {
      res.send(recipe);
    });
});

app.post("/add", (req, res) => {
  Recipe.sync({
    force: false,
  })
    .then(() => {
      return Recipe.bulkCreate([
        {
          name: req.body.name,
          recipeContent: req.body.recipeContent,
        },
      ]);
    })
    .catch((err) => {
      console.error("error:- ", err.message);
    });

  res.send("Recipes created with Name:- " + req.body.name);
});

app.post("/delete", (req, res) => {
  Recipe.drop();
  res.send("Recipe table dropped");
});

app.listen(port, host, () => {
  console.log(`Server started at host: ${host} port${port}`);
});

// const { Client } = require("pg");

// (async () => {
//   const client = new Client({
//     connectionString: process.env.DATABASE_URL,
//     application_name: "$ docs_quickstart_node"
//   });

//   const statements = [
//     // CREATE the messages table
//     "CREATE TABLE IF NOT EXISTS messages (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), message STRING)",
//     // INSERT a row into the messages table
//     "INSERT INTO messages (message) VALUES ('Hello world!')",
//     // SELECT a row from the messages table
//     "SELECT message FROM messages",
//   ];

//   try {
//     // Connect to CockroachDB
//     await client.connect();
//     for (let n = 0; n < statements.length; n++) {
//       let result = await client.query(statements[n]);
//       if (result.rows[0]) { console.log(result.rows[0].message); }
//     }
//     await client.end();
//   } catch (err) {
//     console.log(`error connecting: ${err}`);
//   }

//   // Exit program
//   process.exit();
// })().catch((err) => console.log(err.stack));
