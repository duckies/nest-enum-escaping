import "reflect-metadata";
import { ConnectionOptions, createConnection } from "typeorm";
import { Character, Realm } from "./character.entity";

const options: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "local",
  password: "local",
  database: "test",
  ssl: false,
  synchronize: true,
  entities: [Character]
};

createConnection(options).then(
  async connection => {
    let character = new Character();
    character.realm = Realm.Kiljaeden;

    let characterRepository = connection.getRepository(Character);

    characterRepository
      .save(character)
      .then(character => console.log("Character has been saved: ", character))
      .catch(error => console.log("Cannot save, Error: ", error));
  },
  error => console.log("Cannot connect: ", error)
);
