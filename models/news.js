module.exports = function(sequelize, DataTypes) {
    var news = sequelize.define("news", {
        news_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        news_title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        news_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        news_mark: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        news_thumbnail: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        news_content: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    news.associate = function (models) {
        news.belongsTo(models.user, {
            foreignKey: "user_name"
        })
    };

    return news;
};