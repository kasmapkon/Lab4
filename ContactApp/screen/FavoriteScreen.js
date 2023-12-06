import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const FavoriteScreen = ({ route }) => {
  const { favoritePeople } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite People</Text>
      <FlatList
        data={favoritePeople}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.avatarContainer}>
            <Avatar
              rounded
              size="medium"
              source={{ uri: item.avatar }}
              placeholderStyle={{ backgroundColor: 'transparent' }}
            />
          </View>
        )}
        contentContainerStyle={styles.list}
        numColumns={3} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  avatarContainer: {
    width: '33.33%', 
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default FavoriteScreen;
