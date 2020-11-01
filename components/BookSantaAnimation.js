import React from 'react';
import LottieView from 'lottie-react-native';

export default class BookSanta extends React.Component{
    render(){
        return(
            <LottieView
            source={require('../assets/book.json')}
            style={{width: "60%"}}
            autoPlay loop />
        )
    }
}