import { Stack, useRouter } from "expo-router";
import { Button } from 'react-native';


const WorkoutsLayout = () => {
    const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Workouts",
          headerRight: () => (
            <Button title="new" onPress={() => router.push('/modal')} />
          ),
        }}
      />
    </Stack>
  );
};

export default WorkoutsLayout;
