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

import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { useRoute } from "@react-navigation/native";

const Modal = () => {
  const route = useRoute();
  const exerciseData = route.params?.exerciseData || {}; // Use default value if not available
  const router = useRouter();

  const [name, setName] = useState("");

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
        <Text>{exerciseData.exerciseName}</Text>
        <Text>Sets: {exerciseData.sets}</Text>
        <Text>Reps: {exerciseData.reps}</Text>
        <Text>Minutes: {exerciseData.mins}</Text>
        <Text>Seconds: {exerciseData.secs}</Text>
        <Text>Weight: {exerciseData.weight}</Text>
        <View>
          {exerciseData.targetMuscles &&
            Object.keys(exerciseData.targetMuscles).map((muscle) => (
              <Text key={muscle}>
                {muscle}
              </Text>
            ))}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.btns}>
          <Button
            title="ADD EXERCISE"
            onPress={() => router.push("/exercise")}
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
    backgroundColor: COLORS.secondary,
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
