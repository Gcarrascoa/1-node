const argv = require('yargs')
    .command('crear', 'crear una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'borrar tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'borrar una tarea por hacer'
        }

    })
    .help()
    .argv;

module.exports = {
    argv
}