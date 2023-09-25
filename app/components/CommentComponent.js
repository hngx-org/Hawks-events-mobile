/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function CommentComponent({comment}) {
  const {user_name, body: commentText, created_at, updated_at, image} = comment;
  let time;
  // Check if the comment has been updated
  if (updated_at) { time = new Date(Number(updated_at));}
  // If not, use the created_at time
  else { time = new Date(Number(created_at)); }
  // Create readable time format
  const timestamp = `${time.getFullYear()}-${Number(time.getMonth()) + 1}-${time.getDate()}`;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri:image}} style={styles.image} />
      </View>
      {/* Comment Details */}
      <View style={styles.commentDetails}>
        <View style={styles.commentHeader}>
          <Text style={styles.commentName}>{user_name}</Text>
          <Text style={styles.commentTime}>{timestamp}</Text>
        </View>
        <Text style={styles.commentText}>{commentText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    height: 38,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  imageContainer: {
    width: 30,
    height: 30,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    marginBottom: 4,
  },
  commentName: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  commentTime: {
    color: '#666',
    fontSize: 13,
  },
  commentText: {
    fontSize: 12,
  },
});

export default CommentComponent;
