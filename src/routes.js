import Main from './components/main/index';
import Inventario from './components/inventario/index';
import InventarioAgregar from './components/inventario/agregar';
import Pos from './components/pos/index';



export default [
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/inventario/',
    name: 'Inventario',
    component: Inventario
  },
  {
    path: '/inventario/agregar',
    name: 'InventarioAgregar',
    component: InventarioAgregar
  },
  {
    path: '/pos/',
    name: 'Pos',
    component: Pos
  }
];