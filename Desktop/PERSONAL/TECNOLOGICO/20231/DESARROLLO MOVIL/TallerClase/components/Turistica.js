import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getRegionesTuristicasColombia } from "../api/services";

const Turistica = () => {

        const [regionesTuristicas, setRegionesTuristicas] = useState([]);

        useEffect(() => {
            async function fetchData() {
                const RegionesTuristicas = await getRegionesTuristicasColombia();
                setRegionesTuristicas(RegionesTuristicas);
            }
            fetchData ();
        }, []);
        
        return (
        
            <View style= {styles.container}> 

                <Text style={styles.title}>Atracción Turistica</Text> 
                {regionesTuristicas.map(turisticas => (
                  <Text key={turisticas.id} style={styles.text}>{turisticas.name}</Text>
                ))}
                
            </View>
        );
    };

const styles = StyleSheet.create({
    container: {
        flexDirection: 'Center',
        paddingVertical: 20,
        paddingLeft: 20,
        backgroundColor: 'sandybrown',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 15,
        marginVertical: 5,

    },
})

export default Turistica;
