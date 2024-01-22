/**
 * To use this navigator, ensure that you have @react-navigation/native 
 * and its dependencies (follow this guide), 
 * then install @react-navigation/native-stack:
 * 
 * npm install @react-navigation/native-stack
 */



/**
 * To use this navigator, 
 * import it from @react-navigation/native-stack:
 */

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

/**
 * onChangeText
 * 
 * A callback that gets called when the text changes. 
 * It receives the current text value of the search bar.
 */

const [search, setSearch] = React.useState("");

React.useLayoutEffect(() => {
  navigation.setOptions({
    headerSearchBarOptions: {
      onChangeText: (event) => setSearch(event.nativeEvent.text),
    },
  });
}, [navigation]);


/**
 * header
 * 
 * This accepts a function that returns a React Element to display as a header.
 */

import { getHeaderTitle } from "@react-navigation/elements";

// ..

header: ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);

  return (
    <MyHeader
      title={title}
      leftButton={
        back ? <MyBackButton onPress={navigation.goBack} /> : undefined
      }
      style={options.headerStyle}
    />
  );
};


/**
 * transitionStart
 * 
 * This event is fired when the transition animation starts for the current screen.
 * 
 * e.data.closing - Boolean indicating whether the screen is being opened or closed.
 */

React.useEffect(() => {
  const unsubscribe = navigation.addListener("transitionStart", (e) => {
    // Do something
  });

  return unsubscribe;
}, [navigation]);

/**
 * transitionEnd
 * 
 * This event is fired when the transition animation ends for the current screen.
 * 
 * e.data.closing - Boolean indicating whether the screen was opened or closed.
 */

React.useEffect(() => {
  const unsubscribe = navigation.addListener("transitionEnd", (e) => {
    // Do something
  });

  return unsubscribe;
}, [navigation]);


/**
 * replace
 * 
 * Replaces the current screen with a new screen in the stack. The method accepts
 */

navigation.replace("Profile", { owner: "Michaś" });

/**
 * push
 * 
 * Pushes a new screen to top of the stack and navigate to it. 
 */

navigation.push("Profile", { owner: "Michaś" });


/**
 * pop
 * 
 * Pops the current screen from the stack and navigates back to the previous screen. 
 * It takes one optional argument (count), which allows you to specify how many screens to pop back by.
 */

navigation.pop();


/**
 * popToTop
 * 
 * navigation.popToTop();
 */

navigation.popToTop();

