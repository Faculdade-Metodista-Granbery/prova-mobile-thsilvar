import React from 'react';
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
});

const CardQuote = ({task, profileImg}) => {

    const[likeButton, setLikebutton] = useState("heart-outline");

    const handleLike = ()=>{
        if(likeButton === "heart-outline"){
            setLikebutton("cards-heart")
        }else{
            setLikebutton("heart-outline")
        }
    }


    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: profileImg}} />
            <Card.Content style={styles.content}>
            <Paragraph >{task}</Paragraph>
            </Card.Content>
            <Card.Actions>
            <Button
                    icon="share-variant"
                    color="#541616"
                    labelStyle={{ fontSize: 24 }}
                />
                <Button
                    icon={likeButton}
                    color="#541616"
                    labelStyle={{ fontSize: 24 }}
                    onPress={handleLike}
                />
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;