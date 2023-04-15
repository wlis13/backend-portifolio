module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userName: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    userPassword: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { undescored: true, tableName: 'Users', timestamps: false });
  return User;
};