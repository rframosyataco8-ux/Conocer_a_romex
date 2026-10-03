// Datos de la Línea de Tiempo
const timelineData = [
    {
        year: "1957",
        description: "Nace Cafetal, la marca estrella de café tostado molido peruano."
    },
    {
        year: "1980",
        description: "Fundación de Selva Industria. Inicio de la recolección de café verde y algodón."
    },
    {
        year: "1997",
        description: "Fusión que da origen a Romero Trading. Expansión en café, algodón y soya."
    },
    {
        year: "2002",
        description: "Compra de planta en Chincha (Ica). Se inaugura la división de cacao."
    },
    {
        year: "2009",
        description: "Se constituye Exportadora Romex S.A. Hereda la exportación de café y cacao."
    },
    {
        year: "2010",
        description: "Adquisición de terreno en Cajamarquilla (Lima) para futuras expansiones."
    },
    {
        year: "2012",
        description: "Nace Cafetal Gourmet y se establece la Hacienda San Jacinto (sistema agroforestal de cacao)."
    },
    {
        year: "2016 – 2021",
        description: "Lanzamiento de 338 (café premium), Innato (chocolates gourmet) y Coberturas Romex."
    },
    {
        year: "2023 – 2024",
        description: "Nueva planta de chocolate en Cajamarquilla. Aumento de capacidad: +50% café y +30% cacao."
    }
];

// Datos del Proceso de Transformación del Grano
const processData = [
    {
        number: 1,
        icon: "local_shipping",
        title: "Recepción de Materia Prima",
        description: "Los granos llegan a planta desde los centros de acopio. Se registra origen, peso, humedad y se asigna un código de trazabilidad único para todo el lote.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Sao_Tome_Monteforte_Sorting_Cocoa_Beans_2_%2816062798779%29.jpg/800px-Sao_Tome_Monteforte_Sorting_Cocoa_Beans_2_%2816062798779%29.jpg",
        alt: "Recepción de granos de cacao"
    },
    {
        number: 2,
        icon: "filter_alt",
        title: "Selección y Limpieza",
        description: "Se eliminan impurezas (piedras, hojas, granos defectuosos). Clasificación por tamaño, densidad y calidad visual.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Cocoa_farmers_during_harvest.jpg/800px-Cocoa_farmers_during_harvest.jpg",
        alt: "Selección y limpieza"
    },
    {
        number: 3,
        icon: "water_drop",
        title: "Secado y Control de Humedad",
        description: "Se ajusta la humedad del grano a niveles óptimos (aprox. 6.5% – 7.5%) para garantizar conservación y calidad posterior.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Roast_cocoa_beans_ready_to_pounded_into_a_paste_for_the_Samoan_koko_drink..JPG/800px-Roast_cocoa_beans_ready_to_pounded_into_a_paste_for_the_Samoan_koko_drink..JPG",
        alt: "Secado de granos"
    },
    {
        number: 4,
        icon: "whatshot",
        title: "Tostado",
        description: "El grano se tuesta a temperatura controlada. Se desarrollan aromas y sabores característicos del cacao peruano y se facilita el descascarillado.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&q=80",
        alt: "Tostado de cacao"
    },
    {
        number: 5,
        icon: "grain",
        title: "Descascarillado → Nibs",
        description: "Se rompe el grano y se separa la cáscara. Se obtienen los <strong>nibs de cacao</strong>, base para licor, manteca, polvo y chocolate.",
        image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=900&q=80",
        alt: "Nibs de cacao"
    },
    {
        number: 6,
        icon: "science",
        title: "Control de Calidad",
        description: "Análisis físico-químicos, sensoriales y de inocuidad. Solo los lotes que cumplen especificaciones y certificaciones son liberados.",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&q=80",
        alt: "Control de calidad"
    },
    {
        number: 7,
        icon: "inventory_2",
        title: "Almacenado y Despacho",
        description: "Los productos se almacenan en condiciones controladas. Luego se preparan para despacho nacional o exportación con documentación completa de trazabilidad.",
        image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=900&q=80",
        alt: "Almacenado y despacho"
    }
];