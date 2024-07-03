// Elegir un tipo de helado según el gusto:

let gusto = "chocolate";

switch (gusto) {
  case "chocolate":
    console.log("¡Helado de chocolate, un clásico!");
    break;
  case "fresa":
    console.log("¡Helado de fresa, refrescante y delicioso!");
    break;
  case "vainilla":
    console.log("¡Helado de vainilla, simple pero irresistible!");
    break;
  default:
    console.log("Lo siento, no tenemos helado de ese sabor");
}

// Calcular el IVA o IGV de un producto según el país:
let pais = "Perú";
let precio = 100;

switch (pais) {
  case "Perú":
    let ivaPeru = precio * 0.18;
    console.log("Precio total con IVA:", precio + ivaPeru);
    break;
  case "Colombia":
    let ivaColombia = precio * 0.19;
    console.log("Precio total con IVA:", precio + ivaColombia);
    break;
  case "Argentina":
    let ivaArgentina = precio * 0.21;
    console.log("Precio total con IVA:", precio + ivaArgentina);
    break;
  default:
    console.log("El IVA para ese país no está disponible");
}

