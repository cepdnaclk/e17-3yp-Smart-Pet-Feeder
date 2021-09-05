import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import ColorsApp from '../config/ColorsApp';

export default class AppLoading extends PureComponent{
	render () {
		return(
			<View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<ActivityIndicator color={ColorsApp.PRIMARY} size={"large"} />
			</View>
			);
	}
}