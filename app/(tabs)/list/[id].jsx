import { View, Text } from 'react-native';
import { Stack, useSearchParams } from 'expo-router';

const WorkoutDetailsPage = () => {
	const { id } = useSearchParams();

	return (
		<View>
			<Stack.Screen options={{ headerTitle: `Workout id #${id}` }} />

			<Text>My News: {id}</Text>
		</View>
	);
};

export default WorkoutDetailsPage;