import React from 'react';
import styles from './styles';

function Card({title, info}) {
  return (
    <View style={styles.card}>
      <View style={styles.card_header}>
        <Text>{title}</Text>
      </View>
      <View style={styles.card_content}>
        <Text>{info}</Text>
      </View>
    </View>
  );
}

export default Card;
