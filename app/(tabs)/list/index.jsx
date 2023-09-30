import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet, Dimensions, Pressable } from 'react-native';

import { icons, COLORS, FONT, SIZES } from "../../../constants";
const SCREEN_WIDTH = Dimensions.get('window').width;
import { Link } from 'expo-router';

const ListPage = () => {

    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "First workout",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Second workout",
        },
        {
          id: "58694a0f-3da1-471f-bd96-145571e29d72",
          title: "Third workout",
        },
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28b0a",
          title: "First workout",
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa978f63",
          title: "Second workout",
        },
        {
          id: "58694a0f-3da1-471f-bd96-1455071e29d72",
          title: "Third workout",
        },
        {
          id: "3ac684afc-c605-48d3-a4f8-fbd91aa978f63",
          title: "Second workout",
        },
        {
          id: "58694a0f-3da1-4741f-bd96-1455071e29d72",
          title: "Third workout",
        },
      ];

	return (
        <View style={styles.container}>
        <View style={styles.listContainer}>
          <FlatList
            data={DATA}
            renderItem={({ item }) => {
              return (
                <View style={styles.itemContainer}>
                    
                  <Link href={`/list/${DATA.id}`} asChild>
                  <Pressable>
                    <View style={styles.item}>
                    <View style={styles.iconText}>
                    <View style={styles.workoutItem}>
                        <Image
                          source={icons.workoutIcon}
                          resizeMode="contain"
                          style={styles.workoutImage}
                        />
                        </View>
                      <Text style={styles.itemText}>{item.title}</Text>
                      </View>
  
                      <TouchableOpacity>
                        <View style={styles.btnDelete}>
                        <Image
                          source={icons.deleteIcon}
                          resizeMode="contain"
                          style={styles.btnImage}
                        />
                        </View>
                      </TouchableOpacity>
                    </View>
                    </Pressable>
                  </Link>
                  
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
	);
};



export default ListPage;


const styles = StyleSheet.create({
    container: {
      width: "100%", 
      flex: 1,  
      backgroundColor: COLORS.white,
    },
    listContainer: {
      marginTop: SIZES.medium,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      flexDirection: 'row',
      justifyContent: "space-between",
      marginBottom: SIZES.medium,
      borderWidth: 1,
      borderRadius: SIZES.medium,
      borderColor: "#F37453",
      padding: 4,
    },
    iconText: {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'row',
      margin: SIZES.medium,
    },
    itemText: {
      fontSize: SIZES.large,
      marginLeft: SIZES.medium,
    },
    itemContainer: {
      width: SCREEN_WIDTH,
      padding: SIZES.xSmall,
      paddingBottom: 0,
    },
    btnDelete: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: 40,
      height: 40,
      
    },
    workoutItem: {
      width: 55,
      height: 55,
      borderWidth: 1,
      borderColor: "#F37453",
      borderRadius: SIZES.medium,
      justifyContent: "center",
      alignItems: "center",
    },
    workoutImage: {
      width: "40%",
      height: "40%",
      tintColor: "#F37453",
    },
    btnImage: {
      position: 'absolute',
      right: 0,
      top: 0,
      width: "45%",
      height: "45%",
      tintColor: 'red',
    },

  });
  
  