const mongoose = require('mongoose');
mongoose.connect(process.env.DBTOKEN);

const stuffSchema = mongoose.Schema({});

let Stuff = mongoose.model('stuff', stuffSchema);

module.exports = {};
