import { Text, View, StyleSheet, ScrollView } from "react-native";

import { colors } from '../theme';

import MovieCard from "./MovieCard";

export default function MovieList({
    movies
}) {
    return (
        <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.header}>
                <Text style={styles.title}> Каталог Филми </Text>
                <Text style={styles.subtitle}>{movies.length} филма в колекцията</Text>
            </View>

            {movies.map(movie => <MovieCard key={movie.id} {...movie} />)}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 64,
        paddingHorizontal: 16,
        paddingBottom: 32,
    },
    header: {
        marginBottom: 16,
    },
    title: {
        cplor: colors.text,
        fontSize: 32,
        fontWeight: 'bold',
    },
    subtitle: {
        color: colors.textMuted,
    }
})