import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

//It is important to export our model so that we can use it with the APIs we will create.

export const Footballers = sequelize.define("Footballers", {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    name: {
        type: DataTypes.STRING(20)
    },
    age: {
        type: DataTypes.SMALLINT
    },
    team: {
        type: DataTypes.STRING(20)
    }

});

// Add the following lines after you have defined your model so that Sequelize can create the table on the go.
sequelize.sync()
    .then(() => {
        console.log('Tables created successfully!')
    })
    .catch((error) => {
        console.error(error);
    })