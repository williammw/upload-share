import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Animated, PanResponder  } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { dummyData } from '../util/dummy';

// import { PinchZoomView } from 'react-native-pinch-zoom-view';

// import { ViewPropTypes } from 'deprecated-react-native-prop-types';
const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [scale, setScale] = useState(1);

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        setPosts(dummyData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
const renderPost = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: item.avatar,
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{item.username}</Text>
        
      </View>
      <Image
        source={{
          uri: item.image,
        }}
        style={styles.image}
      />

      <View style={styles.actions}>
        <TouchableOpacity  >
          <MaterialCommunityIcons name="heart-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="comment-outline" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons name="share-outline" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.likes}>{item.likes} likes</Text>
      <Text style={styles.caption}>{item.caption}</Text>
      <Text style={styles.comments}>
        {item.comments.map((comment) => (
          <Text key={comment.id} style={styles.commentUsername}>
            {comment.username}: {comment.text}
          </Text>
        ))}
      </Text>
    </View>
  );
};
  
  
  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    flexDirection: 'row',
    padding: 15,
  },
  likes: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5,
  },
  caption: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5,
  },
  comments: {
    fontSize: 16,
    marginLeft: 15,
    marginBottom: 5,
  },
  commentUsername: {
    fontWeight: 'bold',
  },
  
});



export default Feed;

