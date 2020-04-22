import React from 'react';
import {View, Text, Button} from 'react-native';
import {users} from '../data/getUsers';

class GroupSelection extends React.Component {
  group = {};
  changedUsers = users;
  noOfGroups = 4;
  assignGroup() {
    this.group = {};
    let dummyUsers = this.changedUsers.slice();
    for (let i = 0; i < this.changedUsers.length; i++) {
      const randomElement =
        dummyUsers[Math.floor(Math.random() * dummyUsers.length)];
      let key = i % this.noOfGroups;
      this.group.hasOwnProperty(key)
        ? this.group[key].push(randomElement)
        : (this.group[key] = [randomElement]);
      let index = dummyUsers.findIndex(e => randomElement.userId === e.userId);
      dummyUsers.splice(index, 1);
    }
    this.setState({reload: true});
  }
  render() {
    let displayGroups = Object.keys(this.group).map(e => {
      let eachItem = this.group[e].map(x => <Text>{x.Name}</Text>);
      return (
        <View
          style={{
            shadowColor: '#00000021',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,
            elevation: 12,
            marginVertical: 1,
            backgroundColor: 'white',
            marginHorizontal: 5,
            padding: 6,
            alignItems: 'center'
          }}
          key={e}>
          <View>
            <Text>{e}</Text>
          </View>
          {eachItem}
        </View>
      );
    });
    return (
      <View>
        <Button onPress={() => this.assignGroup()} title="assignGroup" />
        {displayGroups}
      </View>
    );
  }
}

export default GroupSelection;
