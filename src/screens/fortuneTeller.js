import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';

const participants = ['Nunmuthu', 'Jay', 'Selva', 'Veera', 'Kesavan', 'Geetha'];
const rewards = participants.map(e => ({
  uri: `https://i.pravatar.cc/300?${e}`,
}));
class FortuneTeller extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      winnerValue: null,
      winnerIndex: null,
      reload: false
    };
    this.child = null;
  }

//   _renderPlayButton = () => {
//     return <Text style={styles.tapToStart}>{this.state.winnerValue}</Text>;
//   };

  render() {
    return (
      <View style={styles.container}>
        <WheelOfFortune
          onRef={ref => (this.child = ref)}
          rewards={participants}
          knobSize={20}
          borderWidth={3}
          borderColor={'#FFF'}
          innerRadius={30}
          duration={5000}
          backgroundColor={'#c4c4c4'}
          getWinner={(value, index) => {
            alert(value);
            this.setState({reload: !this.state.reload});
          }}
        />
        <Button
          title="Press me"
          onPress={() => {
            this.child._onPress();
          }}
        />
      </View>
    );
  }
}

export default FortuneTeller;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c4c4c4',
  },
  winner: {
    width: '100%',
    position: 'absolute',
    padding: 10,
    backgroundColor: '#fff',
    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  winnerText: {
    fontSize: 26,
    color: '#666',
  },
  tapToStart: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
});
