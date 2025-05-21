const productos = [
  {
    nombre: "Camiseta básica gris",
    slug: "camiseta-basica-gris",
    precio: 14.99,
    descripcion:
      "Camiseta unisex de algodón 100% con corte clásico, ideal para el día a día.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747157339/camiseta_jak7qk.webp",
    categoria: "camisetas",
    genero: "hombre",
    stock: 20,
  },
  {
    nombre: "Riñonera negra de nylon",
    slug: "rinonera-negra-de-nylon",
    precio: 39.99,
    descripcion:
      "Riñonera práctica y resistente, ideal para un look casual y deportivo.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747157340/rinonera_ufcirm.webp",
    categoria: "accesorios",
    genero: "hombre",
    stock: 15,
  },
  {
    nombre: "Riñonera negra con detalles de diseño",
    slug: "rinonera-negra-con-detalles-de-diseno",
    precio: 39.99,
    descripcion:
      "Riñonera elegante con detalles modernos, perfecta para el estilo urbano.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747158159/rinonera2_hgf0je.webp",
    categoria: "accesorios",
    genero: "hombre",
    stock: 15,
  },
  {
    nombre: "Pantalón corto negro deportivo",
    slug: "pantalon-corto-negro-deportivo",
    precio: 29.99,
    descripcion:
      "Pantalón corto de tela ligera, ideal para hacer deporte o para un día caluroso.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747158158/shorts2_eeiflp.webp",
    categoria: "pantalones",
    genero: "hombre",
    stock: 12,
  },
  {
    nombre: "Shorts azules de denim",
    slug: "shorts-azules-de-denim",
    precio: 79.99,
    descripcion: "Shorts de denim de corte moderno, versátil para el verano.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747158159/shorts3_m5uv7k.webp",
    categoria: "pantalones",
    genero: "hombre",
    stock: 8,
  },
  {
    nombre: "Abrigo elegante negro con detalles negro",
    slug: "abrigo-elegante-negro-con-detalles-negro",
    precio: 34.99,
    descripcion:
      "Abrigo de lana de corte estilizado, ideal para la temporada de invierno.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747159164/coatnegro-removebg-preview_tztfb5.webp",
    categoria: "abrigos",
    genero: "hombre",
    stock: 10,
  },
  {
    nombre: "Sudadera con capucha denim clara",
    slug: "sudadera-con-capucha-denim-clara",
    precio: 49.99,
    descripcion:
      "Sudadera de felpa con capucha y corte moderno, cómoda y abrigada.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747159100/sudaderagris-removebg-preview_adfdrs.webp",
    categoria: "sudaderas",
    genero: "hombre",
    stock: 14,
  },
  {
    nombre: "Camiseta amarilla de manga corta",
    slug: "camiseta-amarilla-de-manga-corta",
    precio: 24.99,
    descripcion:
      "Camiseta fresca y cómoda, ideal para los días soleados de verano.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747159164/camiamarilla-removebg-preview_i9j20j.webp",
    categoria: "camisetas",
    genero: "hombre",
    stock: 9,
  },
  {
    nombre: "Zapatillas minimalistas beige",
    slug: "zapatillas-minimalistas-beige",
    precio: 59.99,
    descripcion:
      "Zapatillas de diseño sencillo, cómodas y versátiles para cualquier ocasión.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747157340/zapatillas_hzcjpf.webp",
    categoria: "calzado",
    genero: "hombre",
    stock: 16,
  },
  {
    nombre: "Pantalón vaquero azul clásico",
    slug: "pantalon-vaquero-azul-clasico",
    precio: 59.99,
    descripcion:
      "Jeans de corte clásico, ideales para un look casual y atemporal.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747159100/vaqueroazul-removebg-preview_ld9ywh.webp",
    categoria: "pantalones",
    genero: "hombre",
    stock: 25,
  },
  {
    nombre: "Body blanco ajustado para mujer",
    slug: "body-blanco-ajustado-para-mujer",
    precio: 12.99,
    descripcion:
      "Body básico de tirantes, ideal para llevar debajo de chaquetas o suéteres.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747158158/tirantes_edsylv.webp",
    categoria: "ropa interior",
    genero: "mujer",
    stock: 25,
  },
  {
    nombre: "Vestido largo negro con estampado",
    slug: "vestido-largo-negro-con-estampado",
    precio: 49.99,
    descripcion:
      "Vestido largo con estampado floral, perfecto para ocasiones especiales.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747158979/vestidonegro_y7sidr.png",
    categoria: "vestidos",
    genero: "mujer",
    stock: 25,
  },
  // Nuevos productos para mujer
  {
    nombre: "Kimono floral ligero",
    slug: "kimono-floral-ligero",
    precio: 34.99,
    descripcion: "Kimono ligero con estampado floral, perfecto para verano.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747809599/kimono_r0csj9.webp",
    categoria: "abrigos",
    genero: "mujer",
    stock: 18,
  },
  {
    nombre: "Pantalones de tela amplios",
    slug: "pantalones-cloth",
    precio: 45.99,
    descripcion: "Pantalones cómodos de tela suave con corte amplio.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747809599/cloth_pantalones_crl12j.webp",
    categoria: "pantalones",
    genero: "mujer",
    stock: 15,
  },
  {
    nombre: "Top de punto fino",
    slug: "knit-top",
    precio: 29.99,
    descripcion: "Top elegante de punto fino para looks casuales o elegantes.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747809598/knit_top_l7sxri.webp",
    categoria: "camisetas",
    genero: "mujer",
    stock: 20,
  },
  {
    nombre: "Camisón de seda estampado",
    slug: "nightdress",
    precio: 39.99,
    descripcion: "Camisón cómodo de seda con delicado estampado floral.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747809593/nightdress_zi8por.webp",
    categoria: "ropa interior",
    genero: "mujer",
    stock: 12,
  },
  {
    nombre: "Bolso pequeño de cuero",
    slug: "small-bag",
    precio: 49.99,
    descripcion: "Bolso elegante y compacto ideal para eventos.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747809593/small_bag_c3ktey.webp",
    categoria: "accesorios",
    genero: "mujer",
    stock: 10,
  },
  {
    nombre: "Sandalias planas de tiras",
    slug: "sandals",
    precio: 35.99,
    descripcion: "Sandalias cómodas con tiras ajustables.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747809592/sandals_f6ohuv.webp",
    categoria: "calzado",
    genero: "mujer",
    stock: 22,
  },
  {
    nombre: "Sujetador suave sin aros",
    slug: "soft-bra",
    precio: 19.99,
    descripcion: "Sujetador cómodo para el día a día sin aros.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747809565/soft_bra_uc0jbm.webp",
    categoria: "ropa interior",
    genero: "mujer",
    stock: 30,
  },
  {
    nombre: "Tacones altos nude",
    slug: "high-heels",
    precio: 69.99,
    descripcion: "Tacones elegantes color nude para ocasiones especiales.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747809565/zapatos_high_hhbddl.webp",
    categoria: "calzado",
    genero: "mujer",
    stock: 8,
  },
  {
    nombre: "Shorts bajos de denim",
    slug: "low-waist-shorts",
    precio: 42.99,
    descripcion: "Shorts modernos de tiro bajo con corte ajustado.",
    imagen:
      "https://res.cloudinary.com/duos0mjwd/image/upload/v1747809565/low_waist_shorts_aqq8b1.webp",
    categoria: "pantalones",
    genero: "mujer",
    stock: 14,
  },
];

export default productos;
