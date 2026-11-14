import {Text, View, StyleSheet, Image } from 'react-native';

import {colors} from '../theme.js'

export default function MovieCard({
    title,
    year,
    director,
    genre,
    duractionMinutes,
    posterUrl
}) {
    return (
        <View>
            <Image source = {{url: posterUrl}} style = {styles.poster} />
        </View>
    );
}

const styles= StyleSheet.create ({
    card: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        borderColor: colors.border,
        borderWidth: 1, 
    },
    poster: {
        width: 100,
        height: 150,
    }
        

})