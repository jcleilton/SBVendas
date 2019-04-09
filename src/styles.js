import { StyleSheet } from 'react-native'

export default props => {
    return StyleSheet.create({
        headerLogin: {
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
        },
        contentLogin: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',

        },
        imageLogin: {
            height: 80,
            width: 80,
        },
        loginContainer: {
            backgroundColor: 'rgba(13,75,128,255)',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerMenuView: {
            borderBottomWidth: 1,
            borderColor: '#DDD',
        },
        titleMenuView: {
            backgroundColor: '#FFF',
            color: '#000',
            fontSize: 30,
            paddingTop: 30,
            padding: 10,
        },
        avatarMenuView: {
            width: 60,
            height: 60,
            borderWidth: 3,
            borderColor: '#AAA',
            borderRadius: 30,
            margin: 10,
        },
        userInfoMenuView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        nameMenuView: {
            color: commomStyles.colors.mainText,
            fontSize: 20,
            marginLeft: 10,
        },
        emailMenuView: {
            color: commomStyles.colors.subText,
            fontSize: 15,
            marginLeft: 10,
            marginBottom: 10,
        },
        menuMenuView: {
            justifyContent: 'center',
            alignItems: 'stretch',
        },
        logoutButtonMenuView: {
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 20,
        }
    })
}