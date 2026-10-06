// Datos de la Línea de Tiempo (con imágenes locales)
const timelineData = [
    {
        year: "1957",
        description: "Nace Cafetal, la marca estrella de café tostado molido peruano.",
        image: "assets/images/1957_timeline_romex.jpg"
    },
    {
        year: "1980",
        description: "Fundación de Selva Industria. Inicio de la recolección de café verde y algodón.",
        image: "assets/images/1980_time_romex.png"
    },
    {
        year: "1997",
        description: "Fusión que da origen a Romero Trading. Expansión en café, algodón y soya.",
        image: "assets/images/1997_time_romex.jpg"
    },
    {
        year: "2002",
        description: "Compra de planta en Chincha (Ica). Se inaugura la división de cacao.",
        image: "assets/images/2002_time_romex.jpg"
    },
    {
        year: "2009",
        description: "Se constituye Exportadora Romex S.A. Hereda la exportación de café y cacao.",
        image: "assets/images/2009_time_romex.jpg"
    },
    {
        year: "2010",
        description: "Adquisición de terreno en Cajamarquilla (Lima) para futuras expansiones.",
        image: "assets/images/2010_time_romex.jpg"
    },
    {
        year: "2011",
        description: "Consolidación de operaciones y crecimiento en el mercado de cacao.",
        image: "assets/images/2011_time_romex.jpg"
    },
    {
        year: "2012",
        description: "Nace Cafetal Gourmet y se establece la Hacienda San Jacinto (sistema agroforestal de cacao).",
        image: "assets/images/2012_time_romex.jpg"
    },
    {
        year: "2016",
        description: "Lanzamiento de 338 (café premium) y expansión de la línea de productos.",
        image: "assets/images/2016_time_romex.jpg"
    },
    {
        year: "2019",
        description: "Innato (chocolates gourmet) y Coberturas Romex fortalecen la presencia en el mercado.",
        image: "assets/images/2019_time_romex.jpg"
    },
    {
        year: "2021",
        description: "Crecimiento continuo en exportación de café y cacao de alta calidad.",
        image: "assets/images/2021_time_romex.jpg"
    },
    {
        year: "Actualidad",
        description: "Nueva planta de chocolate en Cajamarquilla. Aumento de capacidad productiva.",
        image: "assets/images/Planta_Exportadora RomEx_actual.jpg"
    }
];

// Datos del Proceso de Transformación del Grano
const processData = [
    {
        number: 1,
        icon: "local_shipping",
        title: "Recepción de Materia Prima",
        description: "Los granos llegan a planta desde los centros de acopio. Se registra origen, peso, humedad y se asigna un código de trazabilidad único para todo el lote."
    },
    {
        number: 2,
        icon: "filter_alt",
        title: "Selección y Limpieza",
        description: "Se eliminan impurezas (piedras, hojas, granos defectuosos). Clasificación por tamaño, densidad y calidad visual."
    },
    {
        number: 3,
        icon: "water_drop",
        title: "Secado y Control de Humedad",
        description: "Se ajusta la humedad del grano a niveles óptimos (aprox. 6.5% – 7.5%) para garantizar conservación y calidad posterior."
    },
    {
        number: 4,
        icon: "whatshot",
        title: "Tostado",
        description: "El grano se tuesta a temperatura controlada. Se desarrollan aromas y sabores característicos del cacao peruano y se facilita el descascarillado."
    },
    {
        number: 5,
        icon: "grain",
        title: "Descascarillado → Nibs",
        description: "Se rompe el grano y se separa la cáscara. Se obtienen los <strong>nibs de cacao</strong>, base para licor, manteca, polvo y chocolate."
    },
    {
        number: 6,
        icon: "science",
        title: "Control de Calidad",
        description: "Análisis físico-químicos, sensoriales y de inocuidad. Solo los lotes que cumplen especificaciones y certificaciones son liberados."
    },
    {
        number: 7,
        icon: "inventory_2",
        title: "Almacenado y Despacho",
        description: "Los productos se almacenan en condiciones controladas. Luego se preparan para despacho nacional o exportación con documentación completa de trazabilidad."
    }
];