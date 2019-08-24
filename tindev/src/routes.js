import { createAppContainer, createStackNavigator  } from 'react-navigation';

import Login from './pages/login/Login';
import Home from './pages/home/Home';

export default createAppContainer(
    createStackNavigator({
        Login,
        Home,
    })
);