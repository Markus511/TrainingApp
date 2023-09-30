import styles from "./planner.style";
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { icons, images } from "../../constants";
import { useNavigation, Link } from "expo-router";

const Planner = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.plannerContainer}>
        <Link href={"/newWorkout"} asChild>
          <Pressable>
            <View style={styles.createContainer}>
              <Text style={styles.createText}>Create new workout</Text>
              <Image
                source={icons.addIcon}
                resizeMode="contain"
                style={styles.btnImage}
              />
            </View>
          </Pressable>
        </Link>
    </View>
  );
};

export default Planner;
