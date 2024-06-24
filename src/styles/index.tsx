import { StyleSheet } from "react-native";

export const LightTheme = {
    primary: '#fff',
    secondary: '#fff',


    //used in Theme page
    themePageBg: '#fff',
    themeBtnBg: '#fff',

    // DrawerPage
    drawer:{
       bg: '#ffef75',
       menuOptionBg: '#e8e8e8',
       sectionContainer: '#fff',
    },

    textClr1: '#454545', // Theme page
    textClr2: '#454545', // Theme page
    textClr3: '#000',
    sideDrawerBg : '#fff',
    contrast : '#000',
    mapBg: 'https://camo.githubusercontent.com/2931b1e56daacb6c9a5c6cb8f751369385978b9d6ba9908bac2a4d5f7b6ef4fa/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67',
    
    transparentColor: 'rgba(255,255,255, 0.8)',
    yellow:'#ffbb00',
    buttonBg:'#000',
    type : 'light'

}

export const DarkTheme = {
    primary: '#454545',
    secondary: '#000',

    themePageBg: '#999',
    themeBtnBg: '#454545',

    textClr1: '#fff',// Theme page
    textClr2: '#999', // Drawer
    textClr3: '#ddd',

    drawer:{
        bg: '#000',
        menuOptionBg: '#000',
        sectionContainer: '#454545',
     },
    sideDrawerBg : '#454545',
    contrast : '#fff',
    mapBg:'https://s1.cdn.autoevolution.com/images/news/google-maps-dark-mode-available-for-all-android-users-heres-how-to-enable-it-157867_1.jpg',
    
    transparentColor: 'rgba(10, 10, 10, 0.7)',
    yellow:'#999',
    buttonBg:'#454545',
    type : 'dark'
}