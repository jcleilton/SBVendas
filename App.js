import React from 'react'
import { createAppContainer, createSwitchNavigator, createDrawerNavigator } from 'react-navigation'

import Login from './Login/Login'
import Menu from './Menu'
import MenuView from './MenuView'

const MenuRoutes = {
  Home: {
      name: 'Home',
      screen: props => <Menu option={0} />,
      navigationOptions: {
          title: 'Home'
      }
  },
  Clientes: {
      name: 'Clientes',
      screen: props => <Menu option={1} />,
      navigationOptions: {
          title: 'Clientes'
      }
  },
  Visitas: {
      name: 'Visitas',
      screen: props => <Menu option={2} />,
      navigationOptions: {
          title: 'Visitas'
      }
  },
  Pedidos: {
      name: 'Pedidos',
      screen: props => <Menu option={3} />,
      navigationOptions: {
          title: 'Pedidos'
      }
  },
  Retorno: {
    name: 'Retorno',
    screen: props => <Menu option={4} />,
    navigationOptions: {
        title: 'Retorno'
    }
  },
  Sair: {
    name: 'Sair',
    screen: props => <Menu option={5} />,
    navigationOptions: {
        title: 'Sair'
    }
  }
}

const MenuConfig = {
  initialRouteName: 'Home',
  contentComponent: MenuView,
  contentOptions: {
      labelStyle: {
          fontWeight: 'normal',
          fontSize: 20,
      },
      activeLabelStyle: {
          color: '#080',
      }
  }
}

const MenuNavigator = createDrawerNavigator(MenuRoutes, MenuConfig)

const MainRoutes = {
  Loading: {
      name: 'Loading',
      screen: Login
  },
  Auth: {
      name: 'Auth',
      screen: Login
  },
  Home: {
      name: 'Home',
      screen: Login
  }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
  initialRouteName: 'Auth'
})

const AppContainer = createAppContainer(MainNavigator)

export default AppContainer