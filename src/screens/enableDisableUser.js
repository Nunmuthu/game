import React from 'react';
import {View, Text, Switch, Button} from 'react-native';
import {users} from '../data/getUsers';

class EnableDiableUser extends React.Component {
  changedUsers = users;
  state = {
    reload: false,
  };
  changeUserData = userId => {
    let index = this.changedUsers.findIndex(e => e.userId === userId);
    console.log(this.changedUsers);
    console.log(index);
    this.changedUsers[index].isDisabled = !this.changedUsers[index].isDisabled;
    this.setState({reload: !this.state.reload});
  };
  render() {
    let enableOptionEachUser = this.changedUsers.map(e => {
      //   let chooseButton = e.isDisabled ? (
      //     <Button onPress={() => this.changeUserData(e.userId)} title="Out">
      //       Out
      //     </Button>
      //   ) : (
      //     <Button onPress={() => this.changeUserData(e.userId)} title="In">
      //       IN
      //     </Button>
      //   );
      let chooseButton = (
        <Switch
          value={e.isDisabled}
          onValueChange={() => this.changeUserData(e.userId)}
        />
      );
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
            alignItems: "center",
            fontSize: 40
          }}
          key={e.Name}>
          <Text style={{fontSize:30}}>{e.Name}</Text>
          {chooseButton}
        </View>
      );
    });
    return (
      <View>
        {enableOptionEachUser}
        <View>
          <Button onPress={() => console.log(this.changedUsers)} title="showOutput" />
        </View>
      </View>
    );
  }
}

export default EnableDiableUser;
