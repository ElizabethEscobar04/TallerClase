import { Icon }  from "react-native-elements"
import MainPage from "./MainPage"
import Regiones from "./Regiones";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Turistica from "./Turistica";
import Naturales from "./Naturales";


const Tab = createBottomTabNavigator()

 function BarraNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Inicio"
            component={MainPage}
            options={{
                tabBarIcon:({color,size}) => (
                    <Icon name="heart" type="font-awesome" color={color} size={size}/>
                )
            }}/> 
            <Tab.Screen 
            name="Regiones"
            component={Regiones}
            options={{
                tabBarIcon:({color,size}) => (
                    <Icon name="map" type="font-awesome" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen 
            name="Atracción Turistica"
            component={Turistica}
            options={{
                tabBarIcon:({color,size}) => (
                    <Icon name="user" type="font-awesome" color={color} size={size}/>
                )
            }}/>
            <Tab.Screen 
            name="Categoria Área Natural"
            component={Naturales}
            options={{
                tabBarIcon:({color,size}) => (
                    <Icon name="tree" type="font-awesome" color={color} size={size}/>
                )
            }}/>
         </Tab.Navigator>
    )          
 }
 
 export default BarraNav