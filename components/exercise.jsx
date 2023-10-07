import {
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
  Text,
  Button,
  View,
  Image,
  InputAccessoryView,
  TouchableOpacity,
  
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { icons, COLORS, FONT, SIZES } from "../constants";

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';



const Exercise = (props) => {
  const navigation = useNavigation();
  const router = useRouter();
  const [eName, setEname] = useState("");
  const [reps, setReps] = useState("");
  const [sec, setSec] = useState("");
  const [min, setMin] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [defaultInput, setDefaultInput] = useState("reps");
  const [exerciseList, setExerciseList] = useState([]);
  const [exerciseData, setExerciseData] = useState({});



  const handleInputChange = (text) => {
    // Remove any characters that are not numbers or hyphens
    const formattedText = text.replace(/[^0-9-]/g, "");
    setSets(formattedText);
  };

  const handleReps = (reps) => {
    setReps(reps);
    setMin("");
    setSec("");
  };

  const handleSec = (secs) => {
    setReps("");
    setMin("");
    setSec(secs);
  };

  const handleMin = (mins) => {
    setReps("");
    setMin(mins);
    setSec("");
  };

  const changeInput = () => {
    if (defaultInput === "reps") {
      setDefaultInput("sec");
    }
    if (defaultInput === "sec") {
      setDefaultInput("min");
    }
    if (defaultInput === "min") {
      setDefaultInput("reps");
    }
  };

  useEffect(() => {
    console.log("Updated exerciseList", exerciseList);
  }, [exerciseList]);

 

  const saveExercise = () => {

    const newExerciseData = {
      exerciseName: eName,
      sets: sets,
      secs: sec,
      mins: min,
      reps: reps,
      weight: weight,
    };
  
    console.log("New Exercise Data:", newExerciseData);
  
    // Update exerciseData state
    //setExerciseData(newExerciseData);
  
    // Update exerciseList state asynchronously using the previous state
    //setExerciseList(prevExerciseList => [...prevExerciseList, newExerciseData]);
  
    // Call the renderData function after state updates are done
    props.renderData();

    props.updateData(newExerciseData);
  
    //console.log("Exercise List after save:", exerciseList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
      <Text style={styles.selectText}>Create a new exercise</Text>
        <TextInput
          style={styles.nameInput}
          autoFocus='true'
          placeholder="Exercise name"
          placeholderTextColor={COLORS.primary}
          onChangeText={setEname}
          value={eName}
        />
        <View style={styles.inputContainer}>
          <View style={styles.inputStyle}>
            <Text style={styles.headerText}>Sets</Text>
            <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="1-3"
              placeholderTextColor={COLORS.primary}
              onChangeText={handleInputChange}
              value={sets}
            />
            </View>
          </View>

          <View style={styles.inputStyle}>
            
            <TouchableOpacity style={styles.change} onPress={changeInput}>
              {defaultInput === "reps" ? (
                <Text style={styles.headerText}>Reps</Text>
              ) : defaultInput === "sec" ? (
                <Text style={styles.headerText}>Sec</Text>
              ) : (
                <Text style={styles.headerText}>Min</Text>
              )}
              <Image
                source={icons.changeIcon}
                style={{
                  tintColor: COLORS.primary,
                  width: SIZES.large,
                  height: SIZES.large,
                  position: "absolute",
                  margin: 4,
                  top: 0,
                  right: 0,
                }}
              ></Image>
            </TouchableOpacity>
            {defaultInput === "reps" ? (
              <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                placeholder="8-12"
                placeholderTextColor={COLORS.primary}
                onChangeText={handleReps}
                value={reps}
              />
              </View>
            ) : defaultInput === "sec" ? (
              <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                placeholder="60"
                inputMode="decimal"
                placeholderTextColor={COLORS.primary}
                onChangeText={handleSec}
                value={sec}
              />
              </View>
            ) : (
              <View style={styles.inputFieldContainer}>
              <TextInput
                style={styles.input}
                placeholder="2"
                inputMode="decimal"
                placeholderTextColor={COLORS.primary}
                onChangeText={handleMin}
                value={min}
              />
              </View>
            )}
          </View>

          <View style={styles.inputStyle}>
            <Text style={styles.headerText}>Weight (kg)</Text>
            <View style={styles.inputFieldContainer}>
            <TextInput
              style={styles.input}
              placeholder="0"
              inputMode="decimal"
              placeholderTextColor={COLORS.primary}
              onChangeText={setWeight}
              value={weight}
            />
          </View>
        
        </View>
        </View>
      </View>
      

     
      <View style={styles.buttonContainer}>
          <Button title="Save exercise" onPress={() => saveExercise()} />
        </View>
    
    </SafeAreaView>
  );
};

export default Exercise;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: COLORS.white,
    
  },
  section: {
    flex: 1,   
  },
  headerText: {
    margin: 4,
  },

  selectText: {
    margin: 12,
    marginBottom: 10,
    marginTop: 15,
    fontSize: SIZES.medium,
  },

  muscleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  
  },
  muscleItem: {
    margin: 4,
    backgroundColor: COLORS.white,
  },
  selectedMuscleItem: {
    backgroundColor: COLORS.tertiary
  },
  muscleText: {
    padding: 10,
    borderWidth: 1,
   
    width: 100,
    height: 40,
  },
  nameInput: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    textAlign: "center",
    backgroundColor: COLORS.white,
    padding: 10,
  },
  inputContainer: {
    margin: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputStyle: {
    borderWidth: 1,
    width: 90,
    backgroundColor: COLORS.white,
  },
  inputFieldContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 40,
    width: 50,
    marginBottom: 10,
    borderBottomWidth: 1,
    padding: 1,
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: 'center', // Center the button horizontally
  },
  change: {
    flexDirection: "row",
  },
 
});
