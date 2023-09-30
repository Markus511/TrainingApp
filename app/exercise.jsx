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
import { useState } from "react";
import { useRouter } from "expo-router";
import { useNavigation } from '@react-navigation/native';



const Exercise = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [eName, setEname] = useState("");
  const [reps, setReps] = useState("");
  const [sec, setSec] = useState("");
  const [min, setMin] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [defaultInput, setDefaultInput] = useState("reps");
  const [selectedMuscles, setSelectedMuscles] = useState({});

  const muscles = [
    "Biceps",
    "Triceps",
    "Quadriceps",
    "Hamstrings",
    "Deltoids",
    "Pectorals",
    "Latissimus Dorsi",
    "Trapezius",
    "Rhomboids",
    "Abdominals",
    "Obliques",
    "Glutes",
    "Calves",
    "Forearms",
    "Tibialis Anterior",
    "Serratus Anterior",
    "Erector Spinae",
    "Soleus",
    "Hip Flexors",
    "Adductors",
    "Abductors",
    "Rotator Cuff",
    "Serratus Posterior",
    // Add more muscles as needed
  ];

  const handleToggleMuscle = (muscle) => {
    setSelectedMuscles((prevState) => ({
      ...prevState,
      [muscle]: !prevState[muscle], // Toggle the selected state for the clicked muscle
    }));
  };

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

  const renderItem = ({ item }) => {
    const isSelected = selectedMuscles[item]; // Check if the muscle is selected

    return (
      <TouchableOpacity onPress={() => handleToggleMuscle(item)}>
        <View
          style={[
            styles.muscleItem,
            isSelected && styles.selectedMuscleItem, // Apply selected style if muscle is selected
          ]}
        >
          <Text style={styles.muscleText}>{item}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const saveExercise = () => {

    const exerciseData = {
      exerciseName: eName,
      sets: sets,
      reps: reps,
      mins: min,
      secs: sec,
      weight: weight,
      targetMuscles: selectedMuscles
    };

 
      navigation.navigate('modal', { exerciseData });
    


    

  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperSection}>
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

      <View style={styles.midSection}>
        <Text style={styles.selectText}>Select target muscles</Text>
        <View style={styles.muscleContainer}>
          <FlatList
            data={muscles}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            numColumns={3} // Display 3 muscles in one row
          />
        </View>
      </View>

      <View style={styles.lowerSection}>
      <View style={styles.buttonContainer}>
          <Button title="Save exercise" onPress={() => saveExercise()} />
        </View>
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
  upperSection: {
  


  },
  midSection: {
    backgroundColor: COLORS.white,
    flex: 1,
    
  },
  lowerSection: {
    backgroundColor: COLORS.white,  
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
