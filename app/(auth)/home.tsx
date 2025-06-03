import auth from '@react-native-firebase/auth';
import { Button, Text, View } from 'react-native';

const Page = () => {
    const user = auth().currentUser;

    return (
        <View>
            <Text>Bem vindo {user?.email}</Text>
            <Button title="Sair" onPress={() => auth().signOut()} />
        </View>
    );
};
export default Page;