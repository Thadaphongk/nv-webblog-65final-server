module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('Book', {
        title: DataTypes.STRING,
        author: DataTypes.STRING,
        total_page: DataTypes.STRING,
        publisher: DataTypes.STRING,
        category: DataTypes.STRING,
        price: DataTypes.REAL
    })
    return Book
}