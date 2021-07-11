const express = require('express')
const path = require('path');
const cookieSession = require('cookie-session')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/running/running.html')));

const PORT = process.env.PORT || 7500

app.listen(PORT, () => console.log(`SpiceNet server started on port ${PORT}`))