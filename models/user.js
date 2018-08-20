module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        user_signup_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        user_login_id: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        user_login_password: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        user_profile_picture: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    });

    user.associate = function (models) {
        user.hasMany(models.news);
    };

    return user;
};