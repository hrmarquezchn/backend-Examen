const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('logApp','root','Hr2626-02',{
    host:'localhost',
    dialect:'mysql'
})

module.exports=sequelize;
