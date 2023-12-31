const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require ('bcrypt');

class User extends Model {
  checkPassword(login) {
    return bcrypt.compareSync(login, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (data) => {
        data.password = await bcrypt.hash(data.password, 10);
        console.log("create is being triggered");
        return data;
      },
      beforeUpdate: async (data) => {
        data.password = await bcrypt.hash(data.password, 10);
        console.log("update is being triggered");
        return data;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
