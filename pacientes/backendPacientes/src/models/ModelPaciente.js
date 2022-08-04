const mongoose = require("mongoose");
const { use } = require("../routes/Paciente");

const pacienteSchema = mongoose.Schema({
    name: String,
    document: String,
    gender: String,
    birthDate: Date,
    age: String,
    email: String,
    phone: String,
    address: String,

    titlec: String,
    code: String,
    clinicalStatus: String,
    verificationStatus: String,

    category: String,
    reason: String,
    status: String,
    period: String
});

module.exports = mongoose.model('Pacientes', pacienteSchema);