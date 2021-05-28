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
        backgroundColor: 'blue',
    },
    cover: {
        height: 220,
    },
    button:{
        alignItems:'center'
    }
   
});

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
                resizeMode={`cover`}
                source={{ uri: profileImg }} />
            <Card.Content style={styles.content}>
                
            </Card.Content>
            <Card.Actions style={styles.button}>

                <Button style={styles.button}
                    icon={playButton}
                    color="#541616"
                    labelStyle={{fontSize: 70}}
                    onPress={handlePlay}
                />
                
            </Card.Actions>
            <Paragraph >{task}</Paragraph>
        </Card>
    )
}

export default CardQuote;