import React, { PureComponent } from "react";
import { View, TouchableOpacity, I18nManager } from "react-native";
import Styles from "../config/Styles";
import { Grid, Row, Col } from "react-native-easy-grid";
// import TouchableScale from 'react-native-touchable-scale';
import ColorsApp from "../config/ColorsApp";
import { Text, IconButton } from "react-native-paper";
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Heading extends PureComponent {
  render() {
    const { title, subtitle, button } = this.props;

    return (
      <View style={{ marginTop: 20, paddingHorizontal: 25 }}>
        <Grid style={{ alignItems: "center" }}>
          <Col size={80} style={{ alignItems: "flex-start" }}>
            {subtitle ? (
              <Text style={Styles.headingSubTitle}>{subtitle}</Text>
            ) : null}
            <Text style={Styles.headingTitle}>{title}</Text>
          </Col>
          {button ? (
            <Col size={20} style={{ alignItems: "flex-end" }}>
              <IconButton
                icon={I18nManager.isRTL ? "chevron-left" : "chevron-right"}
                color={ColorsApp.PRIMARY}
                size={25}
                onPress={button}
              />
            </Col>
          ) : null}
        </Grid>
      </View>
    );
  }
}
