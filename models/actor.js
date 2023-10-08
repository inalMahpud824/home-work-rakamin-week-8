const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('db_percobaan', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
  });

// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
// });


const Actor = sequelize.define('actor', {
    actor_id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_update: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    timestamps: false,
    tableName: "actor"
})

async function percobaan () { 
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// `sequelize.define` also returns the model
console.log(Actor === sequelize.models.actor); // true
percobaan()
module.exports = Actor