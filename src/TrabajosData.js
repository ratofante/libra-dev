/* 
{
   id: ,
   title: '',
   description: '',
   caracteristicas: [
      ''
   ],
   link: '',
   repo: '',
   media: ''
}

*/

const trabajos = [
   {
      id: 2,
      title: 'Logística Solkem - Pedidos y Turnos',
      description: 'Interfaz de gestión de pedidos, asignación de turnos y calendario de retiros/envíos con aviso por mail',
      caracteristicas: [
         "Laravel, PHP, SQL, Javascript (VueJs), Blade Templates (HTML & CSS)",
         "Utilización de Craftable, CRUD Generator",
         "Testeo de mails con Mailtrap"
      ],
      link: '',
      repo: 'https://github.com/ratofante/solkem',
      media: '<iframe src="https://www.youtube.com/embed/m8KhXquFE-0?mute=1&loop=1&autoplay=1&playlist=m8KhXquFE-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
   },
   {
      id: 1,
      title: 'By-Yetzi',
      description: 'Trabajo realizado para Yetzibel en el marco de prácticas profesionales en CoderHouse',
      caracteristicas: [
         "HTML, CSS (SCSS), Bootstrap & Javascript",
         "Maquetación web de un sitio estático"
      ],
      link: 'https://yetziigonzalez.com/index.html',
      repo: 'https://github.com/ratofante/by-yetzi',
      media: '<iframe src="https://www.youtube.com/embed/tv96FmH79jk?autoplay=1&mute=1&loop=1&playlist=tv96FmH79jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
   },
   {
      id: 3,
      title: 'Tienda Pokemon React',
      description: 'Trabajo final para curso de React - CoderHouse',
      caracteristicas: [
         'Montado en React',
         'Productos consumidos desde PokeApi',
         'DB gestionada con Firebase'

      ],
      link: 'https://react-poke-shop-noocgde9c-ratofante.vercel.app/',
      repo: 'https://github.com/ratofante/coderReact',
      media: '<iframe src="https://player.vimeo.com/video/745150627?h=9030c400ab&amp;badge=0&amp;autopause=0&autoplay=1&muted=1&loop=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Entrega CoderHouse"></iframe><script src="https://player.vimeo.com/api/player.js"></script>'
   },
   {
      id: 4,
      title: 'Buscador de Productos',
      description: 'Trabajo final para curso de Javascript - CoderHouse. Tiene un buscador de productos por nombre, orden de productos alfabéticamente y por precio (mayor o menor), manejo de local storage utilizando solo String methods',
      caracteristicas: [
         '100% Vainilla Javascript',
         'Productos consumidos desde PokeApi',
      ],
      link: 'https://react-poke-shop-noocgde9c-ratofante.vercel.app/',
      repo: 'https://github.com/ratofante/coderReact',
      media: '<iframe src="https://www.youtube.com/embed/O_sppUbi_Xc?autoplay=1&mute=1&loop=1&playlist=O_sppUbi_Xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
   }
]
const proyectos = [
   {
      id: 1,
      title: 'Social Trivia',
      description: 'Proyecto realizado para Beca Neoris - UTN. Juego de trivia donde los usuarios pueden aportar nuevas preguntas, las cuales son votadas por los usuarios antes de ser integradas a la trivia',
      caracteristicas: [
         "Laravel, PHP, SQL, Blade Templates, Bootstrap",
         "Falta testing y subir al servidor"
      ],
      link: '',
      repo: 'https://github.com/ratofante/socialTrivia',
      media: '<iframe src="https://www.youtube.com/embed/FbuIH5MN1Jk?loop=1&autoplay=1&mute=1&playlist=FbuIH5MN1Jk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
   }
]
const recursos = [
   {
      id: 1,
      title: 'Animals on a Grid',
      description: 'Grid para armar galería de imágenes irregular. Recurso para clases',
      caracteristicas: [
         'HTML & CSS',
         'Uso intermedio de Grid',
         'Utilización de variables en CSS'
      ],
      link: 'https://codepen.io/ratofante/pen/NWYwVGN',
      repo: '',
      media: '<iframe src="https://www.youtube.com/embed/2w_3-wrxSeY?loop=1&mute=1&autoplay=1&playlist=2w_3-wrxSeY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
   },
   {
      id: 2,
      title: 'Box Model',
      description: 'Recurso para desarrollo web (conceptos de box model) y javascript (eventos, interacción con el DOM).',
      caracteristicas: [
         'HTML, CSS, Javascript',
         'Interacción sencilla con el DOM',
         'Efectos :hover con pseudo-elementos'
      ],
      link: 'https://codepen.io/ratofante/pen/NWYwVGN',
      repo: '',
      media: '<iframe src="https://www.youtube.com/embed/camZxcsABsw?loop=1&mute=1&autoplay=1&playlist=camZxcsABsw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
   },
   {
      id: 3,
      title: 'Modelo Tienda Responsive',
      description: 'Recurso para desarrollo web, maquetación utilizando flexbox & grid para diseño responsive',
      caracteristicas: [
         'HTML & CSS',
         'Flexbox, Grid & MediaQueries',
         'Diseño Responsive'
      ],
      link: 'https://codepen.io/ratofante/pen/NWYwVGN',
      repo: '',
      media: '<iframe src="https://www.youtube.com/embed/hKDlybjn0ag?loop=1&mute=1&autoplay=1&playlist=hKDlybjn0ag" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
   }
]

const portfolio = {
   trabajos: trabajos,
   proyectos: proyectos,
   recursos: recursos
}

export default portfolio

