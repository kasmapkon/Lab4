import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
  {
    id: '1',
    name: 'John Doe',
    phoneNumberPersonal: '123-456-7890',
    phoneNumberWork: '987-654-3210',
    email: 'john.doe@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: false,
  },
  {
    id: '2',
    name: 'Jane Smith',
    phoneNumberPersonal: '555-555-5555',
    phoneNumberWork: '111-111-1111',
    email: 'jane.smith@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: true,
  },
  {
    id: '3',
    name: 'Alice Johnson',
    phoneNumberPersonal: '777-777-7777',
    phoneNumberWork: '333-333-3333',
    email: 'alice.johnson@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: false,
  },
  {
    id: '4',
    name: 'Bob Brown',
    phoneNumberPersonal: '999-999-9999',
    phoneNumberWork: '444-444-4444',
    email: 'bob.brown@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: true,
  },
  {
    id: '5',
    name: 'Eva Williams',
    phoneNumberPersonal: '333-333-3333',
    phoneNumberWork: '555-555-5555',
    email: 'eva.williams@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: false,
  },
  {
    id: '6',
    name: 'David Lee',
    phoneNumberPersonal: '444-444-4444',
    phoneNumberWork: '777-777-7777',
    email: 'david.lee@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: false,
  },
  {
    id: '7',
    name: 'Linda Hall',
    phoneNumberPersonal: '111-111-1111',
    phoneNumberWork: '222-222-2222',
    email: 'linda.hall@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: true,
  },
  {
    id: '8',
    name: 'Michael Smith',
    phoneNumberPersonal: '666-666-6666',
    phoneNumberWork: '999-999-9999',
    email: 'michael.smith@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: false,
  },
  {
    id: '9',
    name: 'Olivia Johnson',
    phoneNumberPersonal: '222-222-2222',
    phoneNumberWork: '333-333-3333',
    email: 'olivia.johnson@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: true,
  },
  {
    id: '10',
    name: 'William Brown',
    phoneNumberPersonal: '888-888-8888',
    phoneNumberWork: '777-777-7777',
    email: 'william.brown@example.com',
    avatar: 'https://hoasaphanoi.vn/wp-content/uploads/2022/09/40-bong-hoa-sap-nhu.jpg',
    isFavorite: false,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [people, setPeople] = useState(data);


  const toggleFavorite = (id) => {
    setPeople((prevPeople) =>
      prevPeople.map((person) =>
        person.id === id ? { ...person, isFavorite: !person.isFavorite } : person
      )
    );
  };

  const favoritePeople = people.filter((person) => person.isFavorite);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItem}
      onPress={() => {
        navigation.navigate('Profile', { userData: item });
      }}
    >
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          size="medium"
          source={{ uri: item.avatar }}
          placeholderStyle={{ backgroundColor: 'transparent' }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phoneNumber}>{item.phoneNumberPersonal}</Text>
        <Text style={styles.phoneNumber}>{item.phoneNumberWork}</Text>
      </View>
      <TouchableOpacity
        onPress={() => toggleFavorite(item.id)}
        style={styles.favoriteButton}
      >
        <Icon
          name={item.isFavorite ? 'heart' : 'heart-o'}
          size={20}
          color={item.isFavorite ? 'red' : 'gray'}
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.list}
      />
      <TouchableOpacity
        style={styles.favoriteTab}
        onPress={() => {
          navigation.navigate('Favorite', { favoritePeople });
        }}
      >
        <Icon name="star" size={30} color="gold" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  avatarContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 3,
    paddingHorizontal: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#666',
  },
  favoriteButton: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  favoriteIcon: {
    marginLeft: 5,
  },
  favoriteTab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
});

export default HomeScreen;
