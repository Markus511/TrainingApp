import { View, SafeAreaView, Text } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES } from "../../../constants";
import {
  ScreenHeaderBtn,
  WorkoutList,
  Footer,
} from "../../../components";
import Planner from "../../../components/plan/planner";


const Plan = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
     {/* <Stack.Screen
        options={{
            headerStyle: { backgroundColor: '#fff'},
            headerTitleStyle: { fontSize: SIZES.medium},
          
            headerShadowVisible: false,
            headerRight: () => (
                <ScreenHeaderBtn userIcon={icons.userIcon} />
            ), 
            headerTitle: "Workouts",
      
        }}
      />
      */}

   
      
      <Planner />


    </SafeAreaView>
  );
};

export default Plan;