import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FormHeader from './app/components/FormHeader';

export default function App() {
  return (
    <View style={{flex: 1, paddingTop: 120}}>
      <View style={{height:100}}>
        <FormHeader leftHeading='Welcome ' rightHeading='Back' subHeading='YouTube Task Manager'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
