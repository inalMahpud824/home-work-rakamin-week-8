const express = require('express')
const {Pool} = require('pg')
const app = express()

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_percobaan',
    password: 'admin',
    port: 5432,
  })

  const port = 8000
  app.listen(port, () => {
      console.log('server berjalan di server: ' + port)
  })

app.get('/actor', async (req, res) => {
    try{
        const result = await pool.query('select * from actor limit 50')
        res.json(result.rows)
    }catch (error) {
        console.error(error)
    }
} )
