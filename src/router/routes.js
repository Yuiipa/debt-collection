import routesHome from './modules/homeroutes'
import routesAppeal from './modules/appealroutes'
import routesDebt from './modules/debtroutes'
export default [
  ...routesHome,
  ...routesAppeal,
  ...routesDebt
]
