import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const BottomTab = createBottomTabNavigator()
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { ContentIcon, TextIcon } from './Style'
import { Home } from '../Home/Home'
import { Profile } from '../Profile/Profile'

export const Main = () => {
    return(
    <BottomTab.Navigator
    initialRouteName="Home"

    screenOptions={ ({ route }) => ({
      tabBarStyle: { backgroundColor: "#FFFFFF", height : 80, paddingTop: 10 },
      tabBarActiveBackgroundColor : "transparent",
      tabBarShowLabel : false,
      headerShown: false,

      tabBarIcon : ({ focused }) => {

        if( route.name === "Home" )
        {
          return (
            <ContentIcon 
              tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
            >
              <FontAwesome name='calendar' size={18} color="#4E4B59" />
              { focused && <TextIcon>Agenda</TextIcon> }
            </ContentIcon>
          )
        }else{
          return (
            <ContentIcon 
              tabBarActiveBackgroundColor={ focused ? "#ECF2FF" : "transparent" }
            >
              <FontAwesome5 name='user-circle' size={22} color="#4E4B59" />
              { focused && <TextIcon>Perfil</TextIcon> }
            </ContentIcon>
          )
        }
      }
    }) }
    >
      <BottomTab.Screen
        name='Home'
        component={Home}/>

      <BottomTab.Screen
        name='Profile'
        component={Profile}/>
    </BottomTab.Navigator>
    )
}