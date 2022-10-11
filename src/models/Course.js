module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
        title: DataTypes.STRING,
        instructor: DataTypes.STRING,
        description: DataTypes.STRING,
        total_student: DataTypes.INTEGER,
        status: DataTypes.STRING,
        type: DataTypes.STRING
    })
    return Course
}