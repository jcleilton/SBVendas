import React from 'react'
import {
    ScrollView,
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    TouchableOpacity
} from 'react-native'

import { Gravatar } from 'react-native-gravatar'
import { DrawerItems } from 'react-navigation'
import commonStyles from './src/commonStyle'
import axios from 'axios'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './src/styles'

export default props => {

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.navigate('Loading')
    }

    return (
        <ScrollView>
            <View style={styles.headerMenuView}>
                <Text style={styles.titleMenuView}>SBVendas</Text>
                <Gravatar style={styles.avatarMenuView} options={{
                    email: props.navigation.getParam('email'),
                    secure: true
                }}>
                </Gravatar>
                <View style={styles.userInfoMenuView}>
                    <View>
                        <Text style={styles.nameMenuView}>{props.navigation.getParam('name')}</Text>
                        <Text style={styles.emailMenuView}>{props.navigation.getParam('email')}</Text>
                    </View>
                    <TouchableOpacity onPress={logout}>
                        <View style={styles.logoutButtonMenuView}>
                            <Icon name='sign-out' size={30} color='#800'></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    )
    
}
