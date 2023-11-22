import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
  Text,
  Button,
  View,
} from "react-native";
import { icons, COLORS, FONT, SIZES } from "../constants";
import Exercise from "../components/exercise";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

const Modal = (props) => {
  const route = useRoute();
 
 const [showExercise, setShowExercise] = useState(false); // State variable to control rendering of Exercise component

  const handleAddExercise = () => {
    setShowExercise(true); // Set showExercise to true to render Exercise component
  };
  



//const [exerciseList, setExerciseList] = useState(props.exerciseList || []);
const [exerciseList, setExerciseList] = useState([]);
  
  const router = useRouter();

  const [name, setName] = useState("");


  useEffect(() => {
    console.log("Received exerciseList in Modal component:", exerciseList);
  
  }, [exerciseList]);

  // called from exercise component
  const renderData = () => {
    setShowExercise(false); // show map
   
  };

   // called from exercise component
   const updateData = (data) => {
    console.log("Updating data:", data);
    setExerciseList(prevExerciseList => [...prevExerciseList, data]);
    console.log("Exercise List after update:", exerciseList);
   
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Workout name"
        placeholderTextColor={COLORS.primary}
        onChangeText={setName}
        value={name}
      />
   <ScrollView style={styles.scrollView}>
   {showExercise ? (
          <Exercise updateData={updateData} renderData={renderData}/>
        ) : (
          exerciseList.map((exercise, index) => (
            <View key={index} style={styles.exerContainer}>
              <Text style={styles.name}>{exercise.exerciseName}</Text>
              <View style={styles.exerDataBox}>
                <Text style={styles.sets}>Sets: {exercise.sets}</Text>
                {exercise.reps !== "" ? (
                  <Text style={styles.reps}>Reps: {exercise.reps}</Text>
                ) : exercise.mins !== "" ? (
                  <Text style={styles.mins}>Minutes: {exercise.mins}</Text>
                ) : exercise.seconds !== "" ? (
                  <Text style={styles.secs}>Seconds: {exercise.secs}</Text>
                ) : null}
                <Text style={styles.weight}>Weight: {exercise.weight}</Text>
              </View>
            </View>
          ))
        )}
</ScrollView>


      <View style={styles.bottomContainer}>
        <View style={styles.btns}>
          <Button
            title="ADD EXERCISE"
            onPress={handleAddExercise}
          ></Button>
        </View>
        <View style={styles.btns}>
          <Button title="ADD SUPERSET"></Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.white,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  scrollView: {
    backgroundColor: COLORS.white,
  },
  exerContainer: {
    backgroundColor: COLORS.tertiary,

  },
  exerDataBox: {
    
    justifyContent: "space-around",
    flexDirection: "row",
    height: 40,
  },

  name: {
    textAlign: "center",
    margin: 10,
  },
  sets: {
    textAlign: "left",
  },
  reps: {
    textAlign: "center",
  },
  secs: {
    textAlign: "center",
  },
  mins: {
    textAlign: "center",
  },
  weight: {
    textAlign: "right",
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  btns: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  },
});
