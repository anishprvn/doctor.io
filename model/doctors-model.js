var mongoose = require('../connection');
var Schema   = mongoose.Schema;

var TimingSchema = new Schema({
    day: {type: String, trim: true, enum: ['mon', 'tue', 'wed', 'thr', 'fri', 'sat', 'sun'] },
    start: { type: Number, trim: true, min: 0, max: 22 },
    end: { type: Number, trim: true, min: 1, max: 23  } 
})

var ClinicSchema = new Schema({
    name: { type: String, trim: true },
    address: { type: String, trim: true },
    timing: [TimingSchema],
    cost:  { type: Number, trim: true }    
})

var DoctorSchema = new Schema({
    name: { type: String, required: true },
    image: {type: String},
    post: {type: String},
    education:   [String],
    exp: { type: Number, trim: true },
    clinic1: [ClinicSchema],
    clinic2: [ClinicSchema]
});


var Doctor = mongoose.model('doctors', DoctorSchema);

module.exports = Doctor;