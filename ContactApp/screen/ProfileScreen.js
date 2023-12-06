import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const ProfileScreen = ({ route }) => {
  const { userData } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Avatar
          source={{ uri: userData.avatar }}
          size="xlarge" 
          containerStyle={{ width: 400, height: 400 }}
        />
      </View>
      <Text style={styles.name}>{userData.name}</Text>
      <Text style={styles.phoneNumber}>Personal Phone: {userData.phoneNumberPersonal}</Text>
      <Text style={styles.phoneNumber}>Work Phone: {userData.phoneNumberWork}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    alignItems: 'center',
  },
  avatarContainer: {
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  phoneNumber: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ProfileScreen;
