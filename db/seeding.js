const { error } = require('console')
const pool = require('../query.js')
const fs = require('fs')

const seedQuery = fs.readFileSync('seeding.sql', {encoding: 'utf-8'})

pool.query(seedQuery, (err, res) => {
    if(err){
        console.error(err)
        return
    }
    console.log('seeding completed')
    pool.end()
})