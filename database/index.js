const mongoose = require('mongoose');
mongoose.connect(process.env.DBTOKEN);

const stuff = mongoose.Schema({});

let Stuff = mongoose.model('stuff', stuffSchema);

module.exports = {};
