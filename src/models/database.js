const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
// Juagadores ////////////////////////////////////////////////////////////
jnombre: String,
japellido: String,
jcedula: String,
jimgperfil: String,
jdetalles: String,
jequipoid: String,
jamarillas: Number,
jrojas: Number,
jsanciones: Number,

// Equipos //////////////////////////////////////////////////////////////
enombre: String,
eescudo: String,
edivisionalid: String,


// Divisionales /////////////////////////////////////////////////////////
dnombre: String,

// torneo //////////////////////////////////////////////////////////////
tnombre: String,
tdivisionalid: String,
tpuntuable: Boolean,

// Fecha //////////////////////////////////////////////////////////////
fnombre: String,
ftorneoid: String,

// Partido /////////////////////////////////////////////////////////////
pnombre: String,
pdetalles: String,
pfechaid: String,
pvisible: Boolean,
ppuntuable: Boolean,
pequipoa: String,
pequipob: String,
pgolesa: Number,
pgolesb: Number,
pfairplaya: Number,
pfairplayb: Number,

// Estadisticas ///////////////////////////////////////////////////////
epartidoid: String,
eequipo: String,
ejugador: String,
egoles: Number,
eamarillas: Number,
erojas: Number,

// Noticias //////////////////////////////////////////////////////////
ntitulo: String,
ncuerpo: String,
nimagen: String,

// Customizacion /////////////////////////////////////////////////////
backgroundid: String,
backgroundimg: String,
organizationlogo: String,

// Usuarios //////////////////////////////////////////////////////////
username: String,
userlastname: String,
userid: String,
userpassword: String,
usertype: String,


});

module.exports= mongoose.model('Data', Data);
