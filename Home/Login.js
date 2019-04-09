import React, { Component } from 'react'
import {
    View,
    Alert,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import commonStyle from '../src/commonStyle'
import styles from '../src/styles'
import backImage from '../assets/img/V_telaLogin.png'

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    signin = async () => {

    }

    signup = async () => {

    }

    render() {
        return(
            <View style={styles.loginContainer}>
                <View style={styles.headerLogin}>
                    <Image source={backImage} style={styles.imageLogin}></Image>
                </View>
                <View style={styles.contentLogin}>

                </View>
            </View>
        )
    }
}

