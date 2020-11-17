exports.proyectosHome = (req, res) => {
  res.render('index', {
    nombrePagina: 'Proyectos',
  });
};

exports.formularioNuevoProyecto = (req, res) => {
  res.render('nuevo-proyecto', {
    nombrePagina: 'Crea Nuevo Proyecto',
  });
};

exports.nuevoProyecto = (req, res) => {
  const { nombre } = req.body;

  let errores = [];

  if (!nombre) {
    errores.push({
      texto: 'Agrega un nombre al proyecto',
    });
  }

  // si hay errores
  if (errores.length > 0) {
    res.render('nuevo-proyecto', {
      nombrePagina: 'Crea nuevo proyecto',
      errores,
    });
  } else {
    console.log(nombre);
  }
};
