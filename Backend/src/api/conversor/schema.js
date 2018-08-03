const restful = require('node-restful')
const mongoose = restful.mongoose

const conversorSchema = restful.model('conversorSchema', new mongoose.Schema({
    nome: {type: String, required: true},
    unidade: {type: String, required: true},
    quilos: {type: Number, require:true, default:0},
    toneladas: {type: Number, require:true, default:0}
}))

conversorSchema.methods(['get', 'post', 'put', 'delete'])
conversorSchema.updateOptions({new: true, runValidators: true})

module.exports = conversorSchema