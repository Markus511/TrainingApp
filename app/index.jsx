import { Link, useRouter } from 'expo-router';
import { View, Pressable, Text } from 'react-native';

const LoginPage = () => {
	const router = useRouter();

	const handleLogin = () => {
		// Add your login logic here
		router.replace('/list');
	};

	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Pressable onPress={handleLogin}>
				<Text>Login</Text>
			</Pressable>

			<Link href="/register" asChild>
				<Pressable>
					<Text>Create account</Text>
				</Pressable>
			</Link>
		</View>
	);
};

export default LoginPage;