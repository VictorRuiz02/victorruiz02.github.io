const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://victorruiz02.github.io',
  title: 'VR.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Victor Ruiz Molina',
  role: 'Periodista Deportivo',
  picture: 'fotoVictor.jpg',

  description: [
    'Soy periodista graduado por la Universitat de Vic – Universitat Central de Catalunya, con experiencia en redacción, locución y creación de contenidos en Radio Marca Barcelona. Me apasiona contar historias, analizar la actualidad deportiva y comunicar a través de diferentes formatos, desde la radio hasta las plataformas digitales.' ,
    'Este portfolio reúne algunos de mis trabajos y proyectos, reflejo de mi compromiso con el periodismo, mi curiosidad por la actualidad y mis ganas de seguir creciendo profesionalmente.'
  ],
  resume: `${process.env.PUBLIC_URL}/cv_victor_ruiz.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/victor-ruiz-molina-537485357/?isSelfProfile=true',
    github: '',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Supercopa de España Fútbol Sala',
    description:
      'Previa de los partidos de la Supercopa de España de futbol sala en “Repartint Joc” de Radio Marca Barcelona con Raul Fuentes como presentador.',
    date: '04-09-2026',
    stack: [],
    sourceCode: '',
    livePreview: '',
    image: '',
    videoUrl: 'UxFQ4xFe_S4'
  },
  {
    name: 'Tertulia Repartint Joc',
    description:
      'Tertulia en “Repartint Joc” de Radio Marca Barcelona sobre la actualidad del fútbol con Alejandro Segura, como presentador y Sergi Albert Giménez, exárbitro de 1.ª División',
    date: '01-09-2026',
    stack: [],
    sourceCode: '',
    livePreview: '',
    image: 'fotoVictor.jpg',
    videoUrl: 'XYgaUZHpaFI'
  },
  {
    name: 'Post Real Madrid - Real Sociedad',
    description:
      'Análisis postpartido Real Madrid vs Real Sociedad en “Repartint Joc” de Radio Marca Barcelona con Raul Fuentes como presentador.',
    date: '27-08-2026',
    stack: [],
    sourceCode: '',
    livePreview: '',
    image: '',
    videoUrl: 'FedqSvVe3ds'
  },
  {
    name: 'Datos Mundial 2026',
    description:
      'Análisis postpartido Marruecos vs Países Bajos y datos curiosos del Mundial 2026 en “Repartint Joc” de Radio Marca Barcelona con Félix Monclús como presentador.',
    date: '30-06-2026',
    stack: [],
    sourceCode: '',
    livePreview: '',
    image: '',
    videoUrl: 'UrODlTFRnU4'
  },
  {
    name: 'Final Four Barça de Baloncesto',
    description:
      'Análisis Final Four Playoff ACB Endesa 2026 en “Repartint Joc” de Radio Marca Barcelona con Félix Monclús como presentador.',
    date: '23-06-2026',
    stack: [],
    sourceCode: '',
    livePreview: '',
    image: '',
    videoUrl: '9_gCj2dAW4Q'
  },
  {
    name: 'Final Four Barça de Balonmano',
    description:
      'Análisis Final Four Barça Balonmano en “Repartint Joc” de Radio Marca Barcelona con Félix Monclús como presentador.',
    date: '15-06-2026',
    stack: [],
    sourceCode: '',
    livePreview: '',
    image: '',
    videoUrl: 'LdezgzQhRBM'
  },
]

const entrevistas = [
  // if there are no entrevistas, Entrevistas section won't show up
  {
    name: 'BISE',
    description: 'Asistencia a la rueda de prensa de BISE, la alianza de los ocho grandes eventos deportivos internacionales de Barcelona y Catalunya, cubriendo las declaraciones y los detalles más relevantes del acto. Fotografías propias.',
    stack: [],
    sourceCode: '',
    livePreview: '',  
    image: 'Bise1.jpg',
  },
  {
    name: 'Presentación de Vicky Losada con el FC Badalona Women',
    description: 'Cobertura de la presentación de Vicky Losada, con participación activa en la rueda de prensa mediante una pregunta a la futbolista. Incluye el vídeo de mi intervención y fotografías propias.',
    stack: [],
    sourceCode: '',
    livePreview: '',
    images: ['Vicky1.jpg', 'Vicky2.jpg', 'Vicky3.jpg'],
    videoUrl: '_cQX0MIY2Rc',
  },
  {
    name: 'Renovación de Graham Hansen con el FC Barcelona',
    description: 'Asistencia a la rueda de prensa de renovación de Graham Hansen con el FC Barcelona, siguiendo las declaraciones de la jugadora y los detalles de su continuidad en el club. Fotografías propias.',
    stack: [],
    sourceCode: '',
    livePreview: '',
    image: 'Hansen1.jpg',
    videoUrl: '',
  },
  {
    name: 'Karim Adeyemi, fichaje por el FC Barcelona',
    description: 'Cobertura de la rueda de prensa relacionada con Karim Adeyemi y su fichaje por el FC Barcelona, recogiendo las declaraciones y los aspectos más destacados del acto. Fotografías propias.',
    stack: [],
    sourceCode: '',
    livePreview: '',
    image: 'Adeyemi1.jpg',
    videoUrl: '',
  },
  {
    name: 'Campus de verano de Joan Garcia',
    description: 'Asistencia al campus de verano de Joan Garcia, donde tuve la oportunidad de participar en la rueda de prensa con una pregunta. Incluye el vídeo de mi intervención y fotografías propias.',
    stack: [],
    sourceCode: '',
    livePreview: '',
    image: 'JoanGarcia1.jpg',
    videoUrl: 'Ua2fteudi3A',
  },
  {
    name: 'Javi Rodríguez previa Supercopa de España',
    description: 'Asistencia a la rueda de prensa de Javi Rodríguez durante mi etapa en Radio Marca Barcelona, con seguimiento de sus declaraciones y de los temas más destacados de la previa a la Supercopa de España. Fotografías propias.',
    stack: [],
    sourceCode: '',
    livePreview: '',
    videoUrl: '77lMjf8p240',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'v.ruizm02@gmail.com',
}

export { header, about, projects, entrevistas, skills, contact }
  