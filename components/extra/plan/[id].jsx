import { StyleSheet, Text, View } from "react-native";
import { Stack, useSearchParams } from "expo-router";

const NewWorkout = () => {

    return (
      <View>
        <Stack.Screen
          options={{
            title: 'create new workout',
          }}
        />
        <View>
          <Text>Name: workout1</Text>
        
        </View>
      </View>
    );
  };
  
  export default NewWorkout;