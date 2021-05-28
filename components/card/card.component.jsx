import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';
import { colors } from '../../utils/colors';




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
                <Button
                    icon={playButton}
                    color="#541616"
                    labelStyle={{ fontSize: 90 }}
                    onPress={handlePlay}
                />
            </Card.Content>
            <Card.Actions style={styles.actions}>
            <Paragraph style={styles.text}>{task}</Paragraph>
            </Card.Actions>
            <Card.Actions style={styles.actions}>
            
            </Card.Actions>
        </Card>

    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.cinza,
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        backgroundColor: colors.rosa,
    },
    cover: {
        height: 220,
    },
    actions: {
        justifyContent: 'space-around',
        backgroundColor: colors.rosa,
    },


});

export default CardQuote;