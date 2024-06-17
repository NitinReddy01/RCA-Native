import { Tabs } from "expo-router";

export default function _layout() {
  return (
    <Tabs screenOptions={{
      headerShown:true,
    }}>
        <Tabs.Screen name='home' options={{
          title:"Rishi",
          
        }} />
    </Tabs>
  )
}

// import { Tabs } from "expo-router";

// export default function _layout() {
//   return (
//     <Tabs screenOptions={({ route: }) => ({
//       headerShown: true,
//       tabBarIcon: ({ focused, color, size }) => {
//         let iconName;

//         if (route.name === 'home') {
//           iconName = focused ? 'home' : 'home-outline';
//         } else if (route.name === 'courses') {
//           iconName = focused ? 'book' : 'book-outline';
//         } else if (route.name === 'profile') {
//           iconName = focused ? 'person' : 'person-outline';
//         }
//       },
//       tabBarActiveTintColor: 'green',
//       tabBarInactiveTintColor: 'gray',
//     })}>
//       <Tabs.Screen name='home' options={{ title: 'Dashboard' }} />
//       <Tabs.Screen name='courses' options={{ title: 'My Courses' }} />
//       <Tabs.Screen name='profile' options={{ title: 'My Profile' }} />
//     </Tabs>
//   );
// }