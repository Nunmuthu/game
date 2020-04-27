import React from 'react';
import {View, Button, Text} from 'react-native';

class RandomPicker extends React.Component {
  group = {
    '0': [
      {
        Name: 'Geetha',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '17',
      },
      {
        Name: 'Kesavan',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '5',
      },
      {
        Name: 'Sravanth',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '13',
      },
      {
        Name: 'Anand',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '8',
      },
      {
        Name: 'Nunmuthu',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '2',
      },
    ],
    '1': [
      {
        Name: 'Sachin',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '11',
      },
      {
        Name: 'Swathi',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '15',
      },
      {
        Name: 'Bhuvana',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '12',
      },
      {
        Name: 'Selva',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '3',
      },
    ],
    '2': [
      {
        Name: 'Karthick',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '10',
      },
      {
        Name: 'Jay',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '1',
      },
      {
        Name: 'Yadav',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '16',
      },
      {
        Name: 'Karuna',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '9',
      },
    ],
    '3': [
      {
        Name: 'Veera',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '7',
      },
      {
        Name: 'Mythili',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '6',
      },
      {
        Name: 'Pranav',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '4',
      },
      {
        Name: 'Srividya',
        groupId: '',
        isDisabled: false,
        isPlayed: false,
        points: 0,
        userId: '14',
      },
    ],
  };

  state = {
    selectedGroup: '0',
    userPicked: false,
  };
  render() {
    let pickedGroup = this.group[this.state.selectedGroup];
    const randomUserFromGroup =
      pickedGroup[Math.floor(Math.random() * pickedGroup.length)];
    let displayPane = <Text>Pick a User</Text>;
    
    if (this.state.userPicked) {
      displayPane = (
        <View>
          <View>
            <Text>{randomUserFromGroup.Name}</Text>
          </View>
          <View>
            <Button
              title="Award points"
              onPress={() => this.setState({userPicked: false})}
            />
            <Button
              title="Next Team"
              onPress={() => this.setState({userPicked: false})}
            />
          </View>
        </View>
      );
    }
    return (
      <View>
        <View>
          <Button
            title="pick One From A"
            onPress={() =>
              this.setState({selectedGroup: '0', userPicked: true})
            }
          />
          <Button
            title="pick One From B"
            onPress={() =>
              this.setState({selectedGroup: '1', userPicked: true})
            }
          />

          <Button
            title="pick One From C"
            onPress={() =>
              this.setState({selectedGroup: '2', userPicked: true})
            }
          />
          <Button
            title="pick One From D"
            onPress={() =>
              this.setState({selectedGroup: '3', userPicked: true})
            }
          />
        </View>
        <View>
            {displayPane}
        </View>
      </View>
    );
  }
}

export default RandomPicker;
