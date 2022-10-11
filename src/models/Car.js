module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        category: DataTypes.STRING,
        engine_capacity: DataTypes.STRING,
        model: DataTypes.STRING,
        brand: DataTypes.STRING,
        color: DataTypes.STRING,
        lc_plate: DataTypes.STRING,
        chasis_no: DataTypes.STRING
    })
    return Car
}