import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import UserTabRoute from './Users/TabRoutes';

import CartScreen from '../screens/Users/CartScreen';
import ProductDetails from '../screens/Users/ProductDetails';

const Stack = createStackNavigator();

const AllRoutes = () => {
  const stackRoutes = [
    {
      name: "Login",
      component: Login,
      options: {
        headerShown: false,
      },
    },
    {
      name: "User",
      component: UserTabRoute,
      options: {
        headerShown: false,
      },
    },
    {
      name: "Cart",
      component: CartScreen,
      options: {
        headerShown: true,
      },
    },
    {
      name: "ProductDetails",
      component: ProductDetails,
      options: {
        headerShown: true,
      },
    }
  ]
  return (
    <Stack.Navigator>
      {
        stackRoutes?.map((route, index) => {
          return (
            <Stack.Screen
              key={index}
              name={route?.name}
              component={route?.component}
              options={route?.options}
            />
          );
        })
      }
    </Stack.Navigator>
  );
}

export default AllRoutes;