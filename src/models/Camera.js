module.exports = ( sequelize, DataTypes ) => {
    const Camera = sequelize.define('Camera', {
      title: DataTypes.STRING, //ประเภทกล้อง
      name: DataTypes.STRING,//ชื่อรุ่นกล้อง
      catagori: DataTypes.STRING,//ยี่ห้อกล้อง
      price: DataTypes.STRING,   //ราคากล้อง
      sizeca:DataTypes.STRING,//ขนาดของเลนกล้อง
     
    })
    return Camera
  }

  //mod 4 ได้ 0+1 = 1