const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

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
  recipeName: {
    type: Sequelize.TEXT,
  },
  ingredientNames: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  ingredientAmounts: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  ingredientCosts: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
  },
  nutrition: {
    type: Sequelize.JSON,
  },
  instructions: {
    type: Sequelize.TEXT,
  },
  timeToCook: {
    type: Sequelize.TEXT,
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
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  Recipe.sync({
    force: false,
  })
    .then(() => {
      return Recipe.findAll({ order: Sequelize.literal("random()"), limit: 1 });
    })
    .then((recipe) => {
      res.send(recipe);
    });
});

app.post("/add", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  Recipe.sync({
    force: false,
  })
    .then(() => {
      return Recipe.bulkCreate([
        {
          recipeName: req.body.recipeName,
          ingredientNames: req.body.ingredientNames,
          ingredientAmounts: req.body.ingredientAmounts,
          ingredientCosts: req.body.ingredientCosts,
          nutrition: req.body.nutrition,
          instructions: req.body.instructions,
          timeToCook: req.body.timeToCook,
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
