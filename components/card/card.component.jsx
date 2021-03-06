import React, { useEffect, useState } from "react";
import { StyleSheet, Vibration, Platform } from "react-native";
import { Card, Paragraph, Button, ProgressBar } from "react-native-paper";
import { colors } from "../../utils/colors";

const CardQuote = ({ task, profileImg }) => {
  const vibrate = () => {
    console.log(Platform.OS);
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 1000);
    } else {
      Vibration.vibrate(1000);
    }
  };

  const [playButton, setPlaybutton] = useState("play");
  const [progess, setProgress] = useState(null);

  const onProgress = (progress) => {
    setProgress(progess);
  };

  const onEnd = () => {
    vibrate();
  };

  const handlePlay = () => {
    if (playButton === "play") {
      setPlaybutton("math-norm");
      let time = 0;
      for (var i = 0; i < 10; i++) {
        (function (i) {
          setTimeout(function () {
            time = time + 0.1;
            setProgress(time);
          }, 1000 * i);
        })(i);
      }
      onEnd();
    } else {
      setPlaybutton("play");
      setProgress(0);
    }
  };

  return (
    <Card style={styles.card}>
      <Card.Cover style={styles.cover} source={{ uri: profileImg }} />
      <Card.Content style={styles.content}>
        <Button
          icon={playButton}
          color={colors.rosaescuro}
          labelStyle={{ fontSize: 90 }}
          onPress={handlePlay}
        />
      </Card.Content>
      <Card.Actions style={styles.actions}>
        <Paragraph style={styles.text}>{task}</Paragraph>
      </Card.Actions>
      <ProgressBar
        progress={progess}
        color={colors.lightGray}
        styles={{ height: 20 }}
      />
      <Card.Actions style={styles.actions}></Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.black,
    margin: 10,
    borderRadius: 20,
    flex: 1,
    width: "50vh",
    overflow: "hidden",
  },
  content: {
    backgroundColor: colors.rosa,
  },
  cover: {
    height: 220,
  },
  actions: {
    justifyContent: "space-around",
    backgroundColor: colors.rosa,
  },
});

export default CardQuote;
