//Seleccionamos el boton y la tabla
const btnAdd = document.getElementById("btnAgregar");
const tablaEmpleados = document.getElementById("tablaEmpleados");

//Datos que seran cargados al cargar la pagina
let dataEmpleados = [
  {
    codigo: "001",
    nombre: "test",
    puesto: "secretaria",
    salario: 2000,
  },
  {
    codigo: "002",
    nombre: "test2",
    puesto: "empleado",
    salario: 1200,
  },
];
//Agregamos los datos en el evento load de la pagina
addEventListener("load", () => {
  const fragment = document.createDocumentFragment(); //Fragmento html

  //Recorremos la data
  dataEmpleados.map((empleado) => {
    const tr = document.createElement("TR"); //Nueva fila
    const codigo = document.createElement("TD"); //Celda
    const nombre = document.createElement("TD"); //Celda
    const puesto = document.createElement("TD"); //Celda
    const salario = document.createElement("TD"); //Celda

    codigo.textContent = empleado.codigo;//Contenido de la celda
    nombre.textContent = empleado.nombre;
    puesto.textContent = empleado.puesto;
    salario.textContent = empleado.salario;
    //Agregamos las celdas a la fila creada
    tr.appendChild(codigo);
    tr.appendChild(nombre);
    tr.appendChild(puesto);
    tr.appendChild(salario);

    return fragment.appendChild(tr);
  });
    //Agregamos la fila al fragmento html
  tablaEmpleados.appendChild(fragment);
});

btnAdd.addEventListener("click", () => {
    //Ingresamos nueva data usando el metodo prompt()
  let codigo = prompt("Ingrese codigo");
  let nombre = prompt("Ingrese nombre");
  let puesto = prompt("Ingrese puesto de trabajo (empleado o secretaria)");
  let dias = prompt("Ingrese horas trabajadas(en dias)");

  const fragment = document.createDocumentFragment();

  const tr = document.createElement("TR");
  const cod = document.createElement("TD");
  const nom = document.createElement("TD");
  const pues = document.createElement("TD");
  const sal = document.createElement("TD");

  cod.textContent = codigo;
  nom.textContent = nombre;
  pues.textContent = puesto;

  if (puesto === "empleado") {
    sal.textContent = parseInt(dias) * 25;
  }
  if (puesto === "secretaria") {
    sal.textContent = parseInt(dias) * 30;
  }

  tr.appendChild(cod);
  tr.appendChild(nom);
  tr.appendChild(pues);
  tr.appendChild(sal);

  fragment.appendChild(tr);

  tablaEmpleados.appendChild(fragment);
});

