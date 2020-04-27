import React from 'react';
import {View, Text, Button} from 'react-native';
import FortuneTeller from './fortuneTeller';
import EnableDiableUser from './enableDisableUser';
import GroupSelection from './groupSelction';
import RandomPicker from './randomPicker';

class ParentContainer extends React.Component {
  state = {
    screen: 'edUser',
  };
  changeScreen = sc => {
    this.setState({screen: sc});
  };
  render() {
    let screen = <FortuneTeller />;
    if (this.state.screen === 'edUser') screen = <EnableDiableUser />;
    if (this.state.screen === 'gselect') screen = <GroupSelection />;
    if (this.state.screen === 'RPicker') screen = <RandomPicker />;

    return (
      <View>
        <View
          style={{
            backgroundColor: '#00B8D4',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
          }}>
          {/* <Button title="Main" onPress={() => this.changeScreen('main')} /> */}
          <Button title="EDUSER" onPress={() => this.changeScreen('edUser')} />
          <Button
            title="RPicker"
            onPress={() => this.changeScreen('RPicker')}
          />

          <Button
            title="GSelect"
            onPress={() => this.changeScreen('gselect')}
          />
        </View>
        <View style={{marginTop: 30}}>{screen}</View>
      </View>
    );
  }
}

export default ParentContainer;
