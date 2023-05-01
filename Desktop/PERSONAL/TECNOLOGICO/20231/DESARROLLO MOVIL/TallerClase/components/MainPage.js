import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import {  getColombiaInfo} from '../api/services';



const MainPage = ({navigation}) => {
        const [colombiaInfo, setColombia] = useState({})

        useEffect(() => {
            async function fetchData() {
                const colombiaData = await getColombiaInfo()
                setColombia(colombiaData)
            }
            fetchData ();
            navigation.setOptions({
                headerRight: () => {
                    return (
                        <icon name='rowing'onPress={()=> navigation.navigate('')}/>
                    )
                }
            })
            
        })

        return (
            
            <View style= {styles.container}> 
                <Text style= {styles.title}>Informacion acerca de: {colombiaInfo.name}</Text>
                <Text style= {styles.title}>Regiones: {colombiaInfo.description}</Text>
                <Text style= {styles.title}>Descripción: {colombiaInfo.description}</Text>
                <Text style= {styles.title}>Capital: {colombiaInfo.stateCapital}</Text>
                <Text style= {styles.title}>Superficie: {colombiaInfo.surface}</Text>
                <Text style= {styles.title}>Población {colombiaInfo.population}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'khaki',
       
    },
    title:{
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
   
    },
})

export default MainPage
