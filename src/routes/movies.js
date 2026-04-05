const {Router} = require('express'); //se crea una constante llamada Router, para importar express que pe...
const res=require('express/lib/response');
const router = Router(); //crear una instancia de un enrutador usndo la clase Router importada de express
const _ = require('underscore'); 

const movies = require('../sample.json'); //crear variable para pasarle los datos que hay en sample.json
console.log(movies); // va a tener en consola lo que contiene movies=datos

//router.get es la solicitud de cargue de los datos contenidos en el arreglo movies
//se define la ruta get para la ruta raiz del servidor y se hace el cargue como segundo argumento
router.get('/', (req,res) => {
    res.json(movies); //es una respuesta tipo json que carga el arreglo con las películas
});

//Agrega un registro a la BD
router.post('/', (req,res) => {
    //console.log(req.body);
    const {title, director, year, raiting } = req.body; //almacena datos
    if(title && director && year && raiting){ //Comprobar que los datos estén
        const id = movies.length + 1; // asignar id autoincrementable
        const newMovie ={...req.body, id}; //agrega id al objeto nuevo
        console.log(newMovie); //visualizando en consola la nueva pelicula almacenada
        movies.push(newMovie); //se guarda la película en la base de datos
        res.json(movies);
    }else{
        res.status(500).json({error: 'Aquí hubo un error'});
    }
});

//Eliminar un registro de la BD
router.delete('/:id', (req, res) => {
    const { id } = req.params; // Captura lo que trae la URL id
    let indexToRemove = -1; //se declara variable de ámbito local para asignar temporalmente antes de buscar
    movies.forEach((movie, i) => { //se recorre el arreglo
        if (movie.id == id) { //Se compara el id del arreglo con el que se desea borrar
            indexToRemove = i; // si aparece coincidencia asigna valor a la variable indexremove
        }
    }); //cierre ciclo for

    if (indexToRemove !== -1) { //valida si la variable temporal cambió de valor -1
        movies.splice(indexToRemove, 1); // elimina los datos del arreglo pertenecientes al índice
        res.json({ message: 'Película eliminada con éxito' }); //mensaje tipo json si se elimina correctamente
    }else {
        res.status(404).json({ error: 'Movie not found' });
    }
});

module.exports = router;