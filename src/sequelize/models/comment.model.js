module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    comment: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: {
        model: 'Users',
        key: 'id',
      },
    }
  }, { timestamps: true });
  return Comment;
};