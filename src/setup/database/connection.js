// Modules 
const mongoose = require('mongoose') 
const config = require('config') 

// Variables 
const DB_URI = config.get('DATABASE.CONNECTION.DB_URI')
const OPTIONS = config.get('DATABASE.CONNECTION.OPTIONS') 


// Connection creation function 
function createDatabaseConnection()
{
    return new Promise((resolve, reject)=>{
        try 
        {
            mongoose.connect( DB_URI, OPTIONS )
            const db = mongoose.connection 

            db.on('connected',()=>
            {
                console.log(" Database Connected ")
                resolve() 
            })

        }
        catch( e )
        {
            console.log(' Error occured while creating Initial Database connection ')
            console.log( e ) 
            reject()
        }
    })
}


// Exports 
module.exports = { createDatabaseConnection }