import Menu from './Menu.js'

const Control = {

    getUserMenuList(splittedOrder) {
        return splittedOrder.map(order => {
          return new Menu(order.split('-')[0], order.split('-')[1])
        });
      },

}
export default Control;