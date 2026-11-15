import { Text, View, StyleSheet, Image } from 'react-native';

import { colors } from '../theme'
import { formatDuration } from '../utils/dataTimeUtils';


export default function MovieCard({
    title,
    year,
    director,
    genre,
    durationMinutes,
    posterURL,
}) {
    console.log('posterURL:', posterURL);
    return (
        <View>
            <Image
            source={{uri: posterURL}} style = {styles.poster}/>

            <View style = {styles.info}>
                <View>
                    <Text style = {styles.title}>{title}</Text>
                </View>
                <View>
                    <Text style={styles.meta}>{year} . {formatDuration(durationMinutes)}</Text>

                </View>

            </View>
        </View>

    );

}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: colors.card,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 16,
        padding: 12,
        marginBottom: 16
    },
    poster: {
        width: 100,
        height: 150,
        borderRadius: 10,
    },
    info: {
        flex: 1,
        marginLeft: 14,
        justifyContent: 'center',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    title: {
        flex: 1,
        color: colors.text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    meta: {
        color: colors.accent,
        fontSize: 13,
        marginTop: 6,
    },



})