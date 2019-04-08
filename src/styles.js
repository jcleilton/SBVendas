import { StyleSheet } from 'react-native'

export default props => {
    return StyleSheet.create({
        header: {
            borderBottomWidth: 1,
            borderColor: '#DDD',
        },
        title: {
            backgroundColor: '#FFF',
            color: '#000',
            fontSize: 30,
            paddingTop: 30,
            padding: 10,
        },
        avatar: {
            width: 60,
            height: 60,
            borderWidth: 3,
            borderColor: '#AAA',
            borderRadius: 30,
            margin: 10,
        },
        userInfo: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        name: {
            color: commomStyles.colors.mainText,
            fontSize: 20,
            marginLeft: 10,
        },
        email: {
            color: commomStyles.colors.subText,
            fontSize: 15,
            marginLeft: 10,
            marginBottom: 10,
        },
        menu: {
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        logoutButton: {
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 20,
        }
    })
}