/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function CommentComponent({comment}) {
  const {name, comment: commentText, timestamp, image} = comment;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri:image}} style={styles.image} />
      </View>
      {/* Comment Details */}
      <View style={styles.commentDetails}>
        <View style={styles.commentHeader}>
          <Text style={styles.commentName}>{name}</Text>
          <Text style={styles.commentTime}>{timestamp}</Text>
        </View>
        <Text>{commentText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  imageContainer: {
    width: 40,
    height: 40,
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
    fontSize: 18,
  },
  commentTime: {
    color: '#666',
    fontSize: 12,
  },
});

export default CommentComponent;
