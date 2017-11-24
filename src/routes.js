import Main from './components/main/index';
import Login from './components/login/index';
import Inventario from './components/inventario/index';
import InventarioAgregar from './components/inventario/agregar';
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
    name: 'Inventario',
    component: { template: '<router-view/>' },
    children: [
      {
        path: '',
        component: Inventario
      },
      {
        path: 'agregar',
        component: InventarioAgregar
      }
    ]
  },
  {
    path: '/pos/',
    name: 'Pos',
    component: Pos
}];
