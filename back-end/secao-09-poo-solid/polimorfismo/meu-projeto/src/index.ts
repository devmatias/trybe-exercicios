import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const novoClube = new Clube()
const novaQuadraFutebol = new QuadraFutebol()

novoClube.adicionarQuadra(novaQuadraFutebol)

const dataReserva = new Date('2022-12-28');
  
const reservarQuadraFutebol = novoClube
  .buscarQuadra<QuadraFutebol>(0) // buscando a quadra de futebol a posição 0, já que ela foi a primeira a ser adicionada no array de quadras do clube
  .reservar(dataReserva); // o método reservar é da Classe QuadraFutebol, e passamos a data que queremos reservar
  console.log(reservarQuadraFutebol);

const novaQuadraTenis = new QuadraTenis()

novoClube.adicionarQuadra(novaQuadraTenis)

const reservarQuadraTenis = novoClube
.buscarQuadra<QuadraTenis>(1)
.reservar(dataReserva);

console.log(reservarQuadraTenis)