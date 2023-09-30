import { Tabs } from "expo-router";
import { icons, SIZES } from "../../constants";
import { Image } from "react-native";

export default () => {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: true }}>
      <Tabs.Screen
        name="workouts"
        options={{
          tabBarIcon: () => (
            <Image
              source={icons.homeIcon}
              style={{ tintColor: 'black', width: SIZES.large, height: SIZES.large }}
            />
          ),
          title: "Workouts",
        }}
      />
      <Tabs.Screen
        name="plan"
        options={{
            tabBarIcon: () => (
                <Image
                  source={icons.planIcon}
                  style={{  tintColor: 'black', width: SIZES.large, height: SIZES.large}}
                />
              ),
          title: "Plan workouts",
        }}
      />
      <Tabs.Screen
        name="analyze"
        options={{
            tabBarIcon: () => (
                <Image
                  source={icons.analyzeIcon}
                  style={{ tintColor: 'black', width: SIZES.large, height: SIZES.large }}
                />
              ),
          title: "Analyze",
        }}
      />
    </Tabs>
  );
  // return <Tabs/>
};
