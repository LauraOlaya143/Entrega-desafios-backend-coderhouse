class Usuario {
    nombre;
    apellido;
    libros = [];
    mascotas = [];

    constructor(nombre,apellido,libros,mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`)
    }

    addMascota(string) {
        this.mascotas.push(string)
    }

    countMascotas(){
        let cantidadMascotas = this.mascotas.length
        console.log(cantidadMascotas)
    }

    addBook(stringNombre, stringAutor){
        let newBook = {nombre: stringNombre, autor: stringAutor}
        this.libros.push(newBook)
    }

    getBookNames(){
        let nombresLibros = this.libros.map(e => e.nombre)
        console.log(nombresLibros)
    }
}

const libros  = [
    {
        nombre : "El tunel",
        autor: "Ernesto Sábato"
    }
]

const perros = ["doggie", "max", "mimi"]

const usuario1 = new Usuario("Pedro", "Alfonzo", libros, perros);


// prueba: traer nombre de usuario1
usuario1.getFullName()

// prueba: traer la cantidad de mascotas
usuario1.countMascotas()

//prueba: añadir una nueva mascota
usuario1.addMascota("Princesa")

//prueba: traer la cantidad de mascotas luego de agregar una nueva
usuario1.countMascotas()

//prueba: traer el nombre de los libros
usuario1.getBookNames()

//prueba: agregar un nuevo libro
usuario1.addBook("Maria", "Jorge Isaacs")

//prueba: traer el nombre de los libros luego de agregar uno nuevo
usuario1.getBookNames()