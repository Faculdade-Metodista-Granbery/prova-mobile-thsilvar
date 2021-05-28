import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EBF5F7',
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        backgroundColor: '#FAE8E0',
    },
    cover: {
        height: 220,
    },
    actions: {
        justifyContent: 'space-around',
        backgroundColor: '#FAE8E0',
    },


});

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const CardQuote = ({ task, profileImg }) => {

    const [playButton, setPlaybutton] = useState("play");

    const handlePlay = () => {
        if (playButton === "play") {
            setPlaybutton("math-norm")
        } else {
            setPlaybutton("play")
        }
    }
   
 
  

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                source={{ uri: profileImg }} />
           
            <Card.Content style={styles.content}>
          
            </Card.Content>
            <Card.Actions style={styles.actions}>
                <Button
                    icon={playButton}
                    color="#541616"
                    labelStyle={{ fontSize: 90}}
                    onPress={handlePlay}
                />
            </Card.Actions>
            <Card.Actions style={styles.actions}>
                <Paragraph style={styles.text}>{task}</Paragraph>
            </Card.Actions>
  
        </Card>
        
    )
}

export default CardQuote;