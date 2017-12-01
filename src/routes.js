import Main from './components/main/index';
import Login from './components/login/index';
import Inventario from './components/inventario/index';
import InventarioAgregar from './components/inventario/agregar';
import InventarioHistorial from './components/inventario/historial';
import Pos from './components/pos/index';

export default [{
    path: '*',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    component: Main
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/inventario',
    component: { template: '<router-view/>' },
    children: [
      { name: 'Inventario', path: '', component: Inventario },
      { name: 'Inventario.agregar', path: '/inventario/agregar', component: InventarioAgregar },
      { name: 'Inventario.historial', path: '/inventario/historial', component: InventarioHistorial }
    ]
  },
  {
    path: '/pos/',
    name: 'Pos',
    component: Pos
}];
