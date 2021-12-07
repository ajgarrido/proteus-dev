export default async (context, locale) => {
  return await Promise.resolve({
    "menu":[
      {
        "local": true,
        "name": "Proyecto",
        "url": "/",
        "highlighted": false
      },
      {
        "local": true,
        "name": "Canción",
        "url": "/cancion",
        "highlighted": true
      },
      {
        "local": true,
        "name": "Lucho",
        "url": "/lucho",
        "highlighted": false
      },
      {
        "local": true,
        "name": "Músicos",
        "url": "/musicos",
        "highlighted": false
      },
      {
        "local": true,
        "name": "Miniclips",
        "url": "/miniclips",
        "highlighted": false
      },
      {
        "local": true,
        "name": "Intro",
        "url": "/intro",
        "highlighted": false
      },
      {
        "local": true,
        "name": "Fondos <br>y descargas",
        "url": "/fondos",
        "highlighted": false
      }     
      
      /*{
        "local": true,
        "name": "Teaser",
        "url": "/teaser",
        "highlighted": false
      },
      {
        "local": true,
        "name": "Documental",
        "url": "/documental",
        "highlighted": false
      },*/
      
    ],
    "home":{
      "banners": [
        {
          "image": "intro_1"
        },
        {
          "image": "intro_2"
        },
        {
          "image": "intro_3"
        },
        {
          "image": "intro_4"
        }
      ] 
    },
    "teaser":{
      "url": "https://www.youtube.com/embed/dtW5zfpH2os?&rel=0"
    },
    "general":{
      "agenda": "Agenda el estreno de la canción",
      "teaser": "Mira el teaser"
    },
    "redessociales":{
      "facebook": {
        "url": "https://bicentenarioclaro.pe/",
        "title": "Bicentenario Claro",
        "description": "#HoyDíaTeCanto Conoce el proyecto de Claro junto con Lucho Quequezana para celebrar el Bicentenario y reflexionar sobre el Perú que queremos hacer realidad #Bicentenario #HazloRealidad.",
        "quote": "#HoyDíaTeCanto Conoce el proyecto de Claro junto con Lucho Quequezana para celebrar el Bicentenario y reflexionar sobre el Perú que queremos hacer realidad #Bicentenario #HazloRealidad.",
        "hashtags": "Bicentenario,HoyDíaTeCanto,HazloRealidad"
      },
      "whatsapp": {
        "url": "https://bicentenarioclaro.pe/",
        "title": "Bicentenario Claro",
        "description": "#HoyDíaTeCanto Conoce el proyecto de Claro junto con Lucho Quequezana para celebrar el Bicentenario y reflexionar sobre el Perú que queremos hacer realidad #Bicentenario #HazloRealidad.",
        "quote": "#HoyDíaTeCanto Conoce el proyecto de Claro junto con Lucho Quequezana para celebrar el Bicentenario y reflexionar sobre el Perú que queremos hacer realidad #Bicentenario #HazloRealidad.",
        "hashtags": "Bicentenario,HoyDíaTeCanto,HazloRealidad"
      }
    },
    "contador": {
      "solofaltan": "Solo faltan: ",
      "dias": "Días",
      "horas": "Horas",
      "minutos": "Minutos",
      "segundos": "Segundos",
      "estrenocancion": "para el estreno de la canción",
      "estrenodocumental": "para el estreno del documental"
    },
    "miniclips":{
      "content": [
        {
          "image": "clip_1",
          "url": "https://www.youtube.com/embed/4JGPGnWDUzI?&rel=0"
        },
        {
          "image": "clip_2",
          "url": "https://www.youtube.com/embed/aosKkAoU5v0?&rel=0"
        },
        {
          "image": "clip_3",
          "url": "https://www.youtube.com/embed/93JwHAJoM4c?&rel=0"
        },
        {
          "image": "clip_4",
          "url": "https://www.youtube.com/embed/v00yObMRVVQ?&rel=0"
        },
        {
          "image": "clip_5",
          "url": "https://www.youtube.com/embed/ceYJpXphzb4?&rel=0"
        },
        {
          "image": "clip_6",
          "url": "https://www.youtube.com/embed/YLlzGHFB_ck?&rel=0"
        },
        {
          "image": "clip_7",
          "url": "https://www.youtube.com/embed/DF9c3CngYsQ?&rel=0"
        },
        {
          "image": "clip_8",
          "url": "https://www.youtube.com/embed/4is0y_v7iEo?&rel=0"
        },
        {
          "image": "clip_9",
          "url": "https://www.youtube.com/embed/A20Z_Q2VuCY?&rel=0"
        },
        {
          "image": "clip_10",
          "url": "https://www.youtube.com/embed/NPKil7ZJIi0?&rel=0"
        }
      ]
    },
    "proyecto":{
      "titulo": "El Proyecto",
      "info": "<p>Abrazando al Perú por su bicentenario, le queremos regalar una canción que invite a todos los peruanos a tener una mirada diferente y que marque el camino para construir un Perú mejor en los años que vienen.</p><p>Esta misión se la encargamos a Lucho Quequezana, quien junto con destacados músicos nacionales, lograron hacer realidad una canción que nos representa a todos mientras celebramos juntos uno de los hitos más importantes como país: cumplir 200 años como república.</p><p>Te invitamos a ser parte de este proyecto para cantarle juntos al Perú por lo vivido y por lo que viene, y para que en cada paso, mientras el sol siga brillando, hagamos realidad el país que todos queremos.</p>",
      "documental": "https://www.youtube.com/embed/U0rc-LJQ62U?&rel=0",
      "textodocumental": "Documental",
      "textohoytecanto": "Hoy dia te canto",
      "textoproyecto": "Conoce más del proyecto",
      "content": [
        {
          "info": "<div class='video'><div class='video__title'><h3>Documental</h3><p>Hoy dia te canto</p></div><a></a></div>",
          "video": true
        },
        {
          "info": "<p>Abrazando al Perú por su bicentenario, le queremos regalar una canción que invite a todos los peruanos a tener una mirada diferente y que marque el camino para construir un Perú mejor en los años que vienen.</p><p>Esta misión se la encargamos a Lucho Quequezana, quien junto con destacados músicos nacionales, lograron hacer realidad una canción que nos representa a todos mientras celebramos juntos uno de los hitos más importantes como país: cumplir 200 años como república.</p><p>Te invitamos a ser parte de este proyecto para cantarle juntos al Perú por lo vivido y por lo que viene, y para que en cada paso, mientras el sol siga brillando, hagamos realidad el país que todos queremos.</p>",
          "video": false
        }
      ]
    },
    "lucho":{
      "content": [
        {
          "info": "<hgroup><h3>Lucho Quequezana</h3></hgroup><p>Mi nombre es Lucho Quequezana. Nací en Lima en 1974, pero a los 11 años tuve un viaje que me cambió la vida. Cuando era chico, le diagnosticaron asma a mi hermano y el doctor nos recomendó salir de Lima, fue entonces cuando mi madre decide ir Huancayo. En aquel momento, no tenía relación alguna con la música o instrumentos, y sin saberlo, este viaje cambiaría eso y sería fundamental para definir lo que soy hoy como artista. Una vez en Huancayo, comencé a notar que los niños de mi barrio y mi colegio tocaban algún instrumento y se divertían haciendo música, fue ahí donde tuve mi primer acercamiento, y fueron ellos, justamente, quienes me enseñaron a tocar la zampoña, el primer instrumento con el que tuve contacto. Al principio fue como un juguete para mí, lo que me ayudó a tomar confianza para arriesgarme y aprender más, no solo con la zampoña, sino también con otros instrumentos. </p><p>Contrario a lo que muchos piensan, yo estudié Comunicaciones; pero nunca me alejé de la música, compongo desde los 13 años y a los 15 ya dirigía el primer grupo que armé con mis amigos cuando regresamos a Lima. Todo este cambio en mi vida, sirvió para darme cuenta que la música podía servir mucho más que para tocar un instrumento. Cuando terminé la universidad, decidí dedicarme de lleno a la música y lo hago hasta el día de hoy. Mi carrera me ha llevado a grandes escenarios alrededor del mundo y he podido emprender proyectos, siempre buscando que la música sea un vehículo integrador.</p>"
        },
        {
          "info": "<p>En el año 2005 inicié uno de los primeros retos de mi carrera, junto con Unesco-Aschberg, salí a buscar músicos de distintos continentes para acercarlos a la música peruana, el resultado: el proyecto “Sonidos Vivos”, que me mantuvo 5 años compartiendo con distintas culturas del planeta la posibilidad de comunicarnos a través de la música. Esa experiencia me demostró que la música era una puerta para descubrir y plantearnos perspectivas nuevas en nuestras vidas, y así los retos siguieron sumándose: el 1er. concierto con energía solar en la plaza Mayor, el 1er. concierto para una comunidad de niños sordos: “Concierto para el silencio”. Partimos desde uno de los fundamentos de la música, la vibración, y junto a otros músicos y alumnos de un colegio para sordos, logramos sacar adelante una experiencia inolvidable y conmovedora para los niños asistentes. </p><p>En el 2014 lancé “Combi”, el primer disco interactivo del país, donde invité, a través de mis redes sociales, a una convocatoria para que el público pueda participar en el disco y logramos una nominación al Grammy Latino. Ahora último, en el 2019, me tocó vivir uno de los momentos más emocionantes de mi carrera al ser el compositor de la inauguración y la clausura de los juegos Panamericanos Lima 2019, un espectáculo donde logramos mostrar nuestra diversidad cultural a más de 400 millones de personas alrededor del mundo. Y hoy estoy aquí, en este reto maravilloso, haciendo realidad esta canción junto a Claro, para celebrarnos como familia, como país en el bicentenario de nuestro querido Perú.</p>"
        },
        {
          "info": "<hgroup><h3>¿Qué significa para ti ser<br> parte de este proyecto?</h3></hgroup><p>Ha sido un reto maravilloso. Mediante la música, tener la posibilidad de unir emociones, sentimientos que nos ayuden a expresar el humano y cálido anhelo de desearle el bien a alguien. Que una canción pueda celebrar la fuerza de continuar unidos como familia y como país.</p>"
        }
      ]
    },
    "musicos":{
      "listado":[
        {
          "name" : "<h3>Abiud Mucha</h3>",
          "title" : "Abiud Mucha",
          "order": "1",
          "image": "musico_1",
          "image_detail": "musico_1_detail",
          "url": "abiud-mucha-meza",
          "content" : [
            {
              "info":"<hgroup><h3>Abiud Mucha</h3></hgroup><h4>Huancayo</h4><p>Yo soy Abiud Mucha Meza, tengo 47 años y soy natural de Jauja. Tuve la dicha de vivir en la hermosa Huancas con mi madre y mis abuelos hasta los 5 años. Después me mudé con mis padres a la ciudad de Huancayo, y es ahí donde me di cuenta que mi padre tenía una vida muy ocupada por la música y que vengo de una trayectoria musical muy reconocida del Valle del Mantaro y del Valle de Yanamarca, perteneciendo así, a la cuarta generación de músicos de mi familia. Él, además de ser docente musical, tenía una carrera artística que había comenzado desde muy niño como violinista, aproximadamente desde los 6 años. Siempre estuve rodeado de música, mi padre, sus colegas de la orquesta, mi tío y mis hermanos que recién empezaban.</p><p>Es así como yo empiezo a acercarme a la música que siempre estaba ahí, a mi alrededor. Mi madre me cuenta que desde muy pequeño andaba cantando todo el día y que me gustaba bastante.</p>"
            },
            {
              "info":"<p>También hacía música con lo que encontraba en el camino, a veces ni cuenta me daba e involuntariamente hacía música. Un día, mi papá me llevó a tocar a uno de sus compromisos y me dio mi primer instrumento, el güiro. Desde ese momento no me separé del güiro, hasta que comenzaron a crecer en mí las ganas de buscar otros instrumentos y poder interpretarlos. Es ahí donde mi padre, cuando yo tenía 13 años, vio ese interés de mi parte y me dio mi primer instrumento de viento, el saxofón. Ya con mi primer instrumento de viento, empecé a trabajar con mi padre, acompañándolo en su orquesta como integrante</p><p>El saxofón contralto era el instrumento más popular de la orquesta, pero con el tiempo me incliné por el saxofón tenor, que tiene un registro más grave y a la vez un timbre muy especial por su sensualidad, calidez, ternura y calidad interpretativa; eso me motivó a seguir aprendiendo, tanto así, que ya no solo tocaba en la orquesta de mi padre, sino que también participaba en otras orquestas del valle y de la capital, lo que me llevó a conocer a grandes referentes y aprender de ellos.</p><p>A los 17 años decidí estudiar música en el Instituto Superior de Música Acolla, mientras seguía tocando con mi padre y a los 21 me gradué como docente musical.</p>"
            },
            {
              "info":"<p>Actualmente llevo más de 40 años en la  música, enseñando a muchas generaciones  y tocando junto a grandes artistas. </p><p>He tenido el honor de conocer al maestro Jean Pierre Magnet, con quien conversé sobre la música andina y el impacto que tiene en la sociedad. También tuve la dicha de grabar para la maestra Susana Baca y el placer de visitar su casa donde conocí a grandes músicos de la agrupación estadounidense Snarky Puppy. Agradezco también la amistad de la maestra Carolina Araos, quien me permitió llevar la música andina a otros continentes. Junto a ella realizamos un proyecto resaltando dos fiestas costumbristas del Valle del Mantaro. Y una de las mejores noches de mi vida fue cuando tuve la dicha de tocar con el maestro Lucho Quequezana en el Teatro Nacional. Una vez más me di cuenta que, vaya a donde vaya, siempre estará la música y yo con ella para expresarla y dejar un legado en mis alumnos.</p><p>Actualmente interpreto instrumentos de viento bronce y viento madera. Sigo siendo docente en el Instituto Superior de Música Pública de Acolla. También he continuado la línea de la orquesta de mi papá, “La Selecta Mucha Hermanos” y ahora tengo una orquesta junto a mi hermano y mi hijo llamada “La Nueva Selecta” con una nueva generación de músicos.</p>"
            },
            {
              "info":"<hgroup><h3>¿Qué significa para ti ser<br> parte de este proyecto?</h3></hgroup><p>Me llena de orgullo y emoción participar de este proyecto, aportando con mi sonido y estilo a esta producción musical, el jolgorio que siento por ser parte de algo que va a calar en los peruanos es inimaginable. Colaborar con mi granito de arena me da muchísimo orgullo y alegría.</p>"
            }
          ]
        },
        {
          "name" : "<h3>Alma Morón</h3>",
          "title" : "Alma Morón",
          "order": "2",
          "image": "musico_2",
          "image_detail": "musico_2_detail",
          "url": "alma-moron",
          "content" : [
            {
              "info":"<hgroup><h3>Alma Morón</h3></hgroup><h4>Chincha</h4><p>Mi nombre es Alma Hade Morón Ballumbrosio, percusionista y zapateadora. Nací en Chincha un 1 de enero del 2003 y siempre me he desenvuelto en un ambiente familiar lleno de música y danza. Es por eso, que a los 3 años, me incliné por el zapateo y formé parte del reconocido Hatajo de Negritos, grupo familiar. A los 5 años, comencé a tocar diferentes instrumentos de percusión y desde entonces me he dedicado a la música, ya sea por mi cuenta o tocando en la banda de la familia.</p><p>Actualmente me estoy preparando para ingresar a una escuela de música, practico todos los días en  la sala del Centro Cultural Amador Ballumbrosio o en mi cuarto, ya sea sola o con mi hermano Josue. Además, también tengo clases 3 veces por semana a través de zoom, todo sea por mi objetivo.</p>"
            },
            {
              "info":"<hgroup><h3>¿Qué significa para ti ser<br> parte de este proyecto?</h3></hgroup><p>Estoy feliz y agradecida por la oportunidad de participar en el proyecto, esto me da a entender que estoy haciendo bien las cosas y creciendo de manera artística. Mi meta es lograr ser una artista profesional, manteniendo mi legado cultural, ya que es parte de mi pasado, presente y futuro. Esta participación me ayuda a dar un paso hacia adelante, hacia mis metas y sueños.</p>"
            }
          ]
        },
        {
          "name" : "<h3>Chicho Cavero</h3>",
          "title" : "Chicho Cavero",
          "order": "3",
          "image": "musico_3",
          "image_detail": "musico_3_detail",
          "url": "chicho-cavero",
          "content" : [
            {
              "info":"<hgroup><h3>Chicho Cavero</h3></hgroup><h4>Tarapoto</h4><p>Me conocen como Chicho Cavero. Nací en 1986, en la región de San Martín, Tarapoto, Perú. Desde muy pequeño me gustaba escuchar música con audífonos y se volvió uno de mis pasatiempos favoritos. Sin darme cuenta fui entrenando mi oído para lo que vendría después. El primer instrumento que toqué fue la guitarra, me cautivó en un instante, aunque debo admitir que la batería era el instrumento que más me llamaba la atención; sin embargo, en esa época era muy complicado encontrar instrumentos de buena calidad y para mis padres era complicado aceptar que su hijo se dedicara a la música, por los excesos que la rodeaban en aquel momento. Felizmente, mi abuelo me regaló mi primera guitarra y a partir de ese momento, comenzó la historia entre nosotros. Aprendí a tocar canciones y me adapté rápidamente a ella, todos los años escuchando música rindieron sus frutos.</p>"
            },
            {
              "info":"<p>Siempre quise estudiar música, lo tenía clarísimo; pero todavía seguía siendo un salto al abismo apostar por una carrera artística, sobre todo para mis padres. Por eso, en el 2007, fundé junto con mi socio, con quien comparto guitarras en nuestra banda Mermelada Pesada, la primera sala de ensayo en Tarapoto, donde comenzamos a compartir espacio y clases con los chicos que asistían a ensayar, y fue ahí, en ese momento, donde estudiar música se volvió un objetivo personal.</p><p>Así que me fui a la capital e ingresé a la universidad para estudiar lo que me apasionaba. Después de vivir grandes experiencias y recolectar grandes amistades, regresé a mi tierra natal, donde junto con mi socio abrimos la escuela Rockwasi Producciones, motivados por los niños y sus ganas por aprender y ensayar, ganas con las cuales me identifico y me hacen regresar a la época donde todo comenzaba para mí.</p>"
            },
            {
              "info":"<hgroup><h3>¿Qué significa para ti ser<br> parte de este proyecto?</h3></hgroup><p>Este proyecto me da mucha felicidad, me da la oportunidad de conocer gente nueva, de aprender y me hace recordar por qué vale la pena luchar por tus sueños y ser perseverante. Además, tengo la responsabilidad de representar a un lugar tan hermoso como Tarapoto, San Martín, para mostrar qué hermosa y cautivante puede ser nuestra selva; pero, por sobre todo, lo importante que es protegerla, cuidarla y conservarla. Me siento muy agradecido con la vida y la producción que me hace parte de un regalo tan significativo para el país en momentos tan difíciles y contrariados.</p><p>Despiertan en mí las ganas de seguir aprendiendo, de seguir estudiando, de seguir aportando a la sociedad, pues siempre habrán personas dispuestas a escucharte y brindarte un espacio para poder transmitir tu mensaje y llevarlo a todos los confines. Me convence de que estoy haciendo bien las cosas y que el camino correcto es compartir mis conocimientos con chicos que me recuerdan a mí, y por último, siento que hago patria al ser parte de un proyecto que pretende homenajear a nuestro país.</p>"
            }
          ]
        }
      ]
    },
    "cancion":{
      "url": "https://www.youtube.com/embed/m_9KvAmrgSk?&rel=0",
      "textodescarga": "Descarga aquí la letra de “Hoy Día te Canto”",
      "descarga": "downloads/letra.pdf",
      "content":[
        {
          "type": 1,
          "image": "song1",
          "text": "Escucha la canción y mira el video clip",
          "url": "https://www.youtube.com/embed/5JJY-3mhAPk?&rel=0"
        },
        {
          "type": 2,
          "image": "song2",
          "text": "Descarga la canción",
          "url": "audio/hoydiatecanto.wav"
        }
      ],
      "escuchalacancion": "Escucha la canción también en:"
    },
    "fondos":{
      "textomultimedia": "Multimedia",
      "textoescritorio": "Escritorio",
      "textomovil": "Movil",
      "multimedia":[
        {
          "descarga": "multimedia_1",
          "url": "downloads/hoydiatecanto.mp3",
          "icon": "icon_audio"
        },
        {
          "descarga": "multimedia_2",
          "url": "downloads/letra.pdf",
          "icon": "icon_file"
        }
      ],
      "desktop": [
        {
          "descarga": "desktop_1",
          "url": "downloads/desktop_1.jpg",
          "icon": "icon_descarga"
        },
        {
          "descarga": "desktop_2",
          "url": "downloads/desktop_2.jpg",
          "icon": "icon_descarga"
        },
        {
          "descarga": "desktop_3",
          "url": "downloads/desktop_3.jpg",
          "icon": "icon_descarga"
        },
        {
          "descarga": "desktop_4",
          "url": "downloads/desktop_4.jpg",
          "icon": "icon_descarga"
        },
      ],
      "movil": [
        {
          "descarga": "movil_1",
          "url": "downloads/movil_1.jpg",
          "icon": "icon_descarga"
        },
        {
          "descarga": "movil_2",
          "url": "downloads/movil_2.jpg",
          "icon": "icon_descarga"
        },
        {
          "descarga": "movil_3",
          "url": "downloads/movil_3.jpg",
          "icon": "icon_descarga"
        },
        {
          "descarga": "movil_4",
          "url": "downloads/movil_4.jpg",
          "icon": "icon_descarga"
        }
      ]
    }
  })
}