// Datos oficiales — fuente: https://romex.pe/es/nosotros/
const timelineData = [
    {
        year: "1957",
        description: "Nace Cafetal, nuestra marca estrella de café tostado molido.",
        image: "assets/images/1957_timeline_romex.jpg"
    },
    {
        year: "1980",
        description: "Fundación de Selva Industria. Recolectaban café verde y algodón.",
        image: "assets/images/1980_time_romex.png"
    },
    {
        year: "1997",
        description: "Peruana de Industrias y Servicios y Selva Industria se unen para formar Romero Trading. Recolectaban y exportaban café verde, algodón y soya.",
        image: "assets/images/1997_time_romex.jpg"
    },
    {
        year: "2002",
        description: "Se compra una planta en Chincha, Ica, Perú. Con esto, se inaugura la división de cacao.",
        image: "assets/images/2002_time_romex.jpg"
    },
    {
        year: "2009",
        description: "Se establece Exportadora Romex, y hereda la exportación de café y cacao de Romero Trading.",
        image: "assets/images/2009_time_romex.jpg"
    },
    {
        year: "2010",
        description: "Se compra una propiedad en Cajamarquilla, Lima, Perú, para crecimiento futuro.",
        image: "assets/images/2010_time_romex.jpg"
    },
    {
        year: "2011",
        description: "Nace Cafetal Gourmet, una sub-marca de café premium de Cafetal.",
        image: "assets/images/2011_time_romex.jpg"
    },
    {
        year: "2012",
        description: "Se establece la Hacienda San Jacinto, en Tarapoto, Perú, dónde se practica el sistema agroforestal para cacao y madera, utilizando especies de flora nativas de la zona.",
        image: "assets/images/2012_time_romex.jpg"
    },
    {
        year: "2012",
        description: "Nace 338, una marca de café tostado molido premium de distintos orígenes alrededor del Perú.",
        image: "assets/images/2012_sanjacinto-romex-chocolate-mapa_time_romex.jpg"
    },
    {
        year: "2016",
        description: "Nace Innato, una marca premium de chocolates gourmet hechos de cacao 100% peruano.",
        image: "assets/images/2016_time_romex.jpg"
    },
    {
        year: "2019",
        description: "Nace Coberturas Romex, una marca de coberturas sabor a chocolate para repostería.",
        image: "assets/images/2019_time_romex.jpg"
    },
    {
        year: "2021",
        description: "La nueva planta de producción de chocolate se inaugura en la planta de Cajamarquilla, Lima, Perú.",
        image: "assets/images/2021_time_romex.jpg"
    },
    {
        year: "2023",
        description: "Nace Cafetal Gourmet Instantáneo. Un café soluble liofilizado, con sabor intenso y aroma inigualable."
    },
    {
        year: "2024",
        description: "Nace Cafetal Clásico Instantáneo. Un café soluble con azúcar caramelizada, con un sabor equilibrado."
    },
    {
        year: "2024",
        description: "Coberturas Romex ahora es Repostería Romex, una marca especializada en productos para la repostería. Ofrece coberturas sabor a chocolate que garantizan calidad y excelencia en cada preparación."
    }
];

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
        description: "Se ajusta la humedad del grano a niveles óptimos para garantizar conservación y calidad posterior."
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