const express = require('express')
const path = require('path');
const cookieSession = require('cookie-session')

const app = express()

// Connect Database
// connectDB();

// // Init Middlware
// app.use(express.json({ extended: false }))
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
//     next();
//   });

// // Handling sameSite and cookies
//   app.set('trust proxy', 1)
//   app.use(
//       cookieSession({
//         name: "__session",
//         keys: ["key1"],
//           maxAge: 24 * 60 * 60 * 100,
//           secure: true,
//           httpOnly: true,
//           sameSite: 'none'
//       })
//   );

//Define routes
// app.use('/api/spices', require('./api/spices'))
// app.use('/api/users', require('./api/user'))
// app.use('/api/auth', require('./api/auth'))


// // serve static assets
// app.use(express.static(path.join(__dirname, 'client/build')));

// // if nothing matches, return index
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });


app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/running/running.html')));

const PORT = process.env.PORT || 7500

app.listen(PORT, () => console.log(`SpiceNet server started on port ${PORT}`))