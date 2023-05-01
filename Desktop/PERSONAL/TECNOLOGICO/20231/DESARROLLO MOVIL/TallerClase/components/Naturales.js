import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { getRegionesNaturalesColombia } from "../api/services";

const Naturales= () => {

    const [regionesNaturales, setRegionesNaturales] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const RegionesNaturales = await getRegionesNaturalesColombia ();
            setRegionesNaturales(RegionesNaturales);
        }
        fetchData ();
    }, []);
    
    return (
    
        <View style= {styles.container}> 

            <Text style={styles.title}>Áreas Naturales</Text> 
            {regionesNaturales.map(naturales=> (
              <Text key={naturales.id} style={styles.text}>{naturales.name}</Text>
            ))}
            
        </View>
    );
};

const styles = StyleSheet.create({
container: {
    flexDirection: 'Center',
    paddingVertical: 20,
    paddingLeft: 20,
    backgroundColor: 'tan',

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

export default Naturales;
