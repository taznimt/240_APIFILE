const db = require("../models");

async function conectDatabase() {
    try {
        await db.sequelize.authenticate();
        console.log("Connection has been established .");
        await db.sequelize.sync({alter : true});
        console.log('Database synchronized .');
    } catch (error) {
        console.error(" Database connection failed:", error.message);
        process.exit(1);
    }}
    module.exports = conectDatabase;