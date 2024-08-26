import React, { useState } from 'react';
import { Text, View, ScrollView, Switch, Button, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const translations = {
  en: { name: 'Charlie' },
  ja: { name: 'こんにちは' },
  es: { name: 'Carlos' },
  az: { name: 'Çarli' },
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  const themeStyles = {
    backgroundColor: isDarkMode ? '#333' : '#FBF7EF',
    color: isDarkMode ? '#FFF' : '#000',
  };

  return (
    <View style={{ flex: 1, backgroundColor: themeStyles.backgroundColor, display: "flex" }}>
      <Modal visible={isModalVisible} transparent={true} animationType="fade" presentationStyle='pageSheet'>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <View style={{ width: 300, padding: 20, backgroundColor: themeStyles.backgroundColor, borderRadius: 10 }}>
            <Text style={{ color: themeStyles.color }}>Choose Language</Text>
            <Picker
              selectedValue={selectedLanguage}
              style={{ height: 200, width: 250, color: themeStyles.color }}
              onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
            >
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Japanese" value="ja" />
              <Picker.Item label="Spanish" value="es" />
              <Picker.Item label="Azerbaijani" value="az" />
            </Picker>
            <Button 
              title="Close" 
              color="blue" 
              onPress={() => setIsModalVisible(false)} 
            />
          </View>
        </View>
      </Modal> 
      <View style={{ position: "fixed", width: 400, height: 110, backgroundColor: isDarkMode ? '#555' : '#ffffff', display: "flex", justifyContent: "center" }}>

        <Text style={{ marginLeft: 10, marginTop: 30, height: 30, alignItems: "center", justifyContent: "center", backgroundColor: isDarkMode ? '#555' : '#ffffff', fontSize: 25, fontWeight: "bold", color: themeStyles.color }}>
          Sifarişlərim
        </Text>

        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isDarkMode}
          style={{ position: 'absolute', top: 70, right: 10 }}
        />
      </View>
       

      <ScrollView>
        <View style={{ width: 400, display: "flex", textAlign: "start" }}>
          <Button title ="LANGUAGE" onPress={() => setIsModalVisible(true)}/>
          <Text style={{ color: themeStyles.color }}>
            {translations[selectedLanguage].name} Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </Text>
        </View>
        <View>
        </View>
      </ScrollView>
    </View>
  );
}
