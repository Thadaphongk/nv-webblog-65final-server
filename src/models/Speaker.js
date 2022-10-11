module.exports = (sequelize, DataTypes) => {
    const Speaker = sequelize.define('Speaker', {
        model: DataTypes.STRING,
        brand: DataTypes.STRING,
        watt: DataTypes.REAL,
        power_input: DataTypes.REAL,
        status: DataTypes.STRING,
        type: DataTypes.STRING
    })
    return Speaker
}