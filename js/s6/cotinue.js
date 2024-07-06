        var index = 0;
        var datos = [20, 30 , 40];
        while (index < datos.length) {
            if (datos[index] == 20) {
                index = index + 1;
                continue;
            }
            console.log(datos[index]);
            index = index + 1;
        }