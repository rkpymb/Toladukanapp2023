import { StyleSheet, View, Image, } from 'react-native'

import React, { useContext, useState, useEffect } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { useIsFocused } from "@react-navigation/native";

const Splace = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const isFocused = useIsFocused();
    useEffect(() => {
        setIsLoading(false)
        if (isFocused) {
            setTimeout(function () {
                props.navigation.navigate('WebHome')
            }, 1000);
        
        }
    }, [props, isFocused]);


    return (
        <>
            <Spinner
                visible={isLoading}
                textStyle={styles.spinnerTextStyle}
            />
            <View style={{ height: '100%', width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <View>
                    <Image source={require('../../assets/img/fmelogo.png')} style={styles.tinyLogo} />
                </View>
            </View>



        </>



    )
}

export default Splace

const styles = StyleSheet.create({

    tinyLogo: {
        width: 200,
        height: 100,
        resizeMode: 'center',
    },


    spinnerTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 10,
    },
})