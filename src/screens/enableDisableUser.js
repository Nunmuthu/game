import React from 'react';
import {View, Text, Switch, Button} from 'react-native';
import {users} from '../data/getUsers';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ApiService from '../services/api.service';

class EnableDiableUser extends React.Component {
  api = new ApiService();
  changedUsers = users;
  state = {
    reload: false,
  };

  constructor() {
    super();
    this.api
      .get(
        'SpinnerAppController/GetAllActiveUsers?loggedinUser=%27AppTestUser%27',
      )
      .then(data => {
        console.log(data);
        this.changedUsers = data.data;
        this.setState({reload: !this.state.reload});
      })
      .catch(err => {
        console.warn(JSON.stringify(err));
      });
  }

  changeUserData = UserId => {
    let index = this.changedUsers.findIndex(e => e.UserId === UserId);
    console.log(this.changedUsers);
    console.log(index);
    this.changedUsers[index].IsActive = !this.changedUsers[index].IsActive;
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
          value={!e.IsActive}
          onValueChange={() => this.changeUserData(e.UserId)}
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
            alignItems: 'center',
            fontSize: 40,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
          key={e.UserName}>
          {/* <FontAwesome5.Button name={'comments'} solid /> */}
          <Button title="" />
          <Text style={{fontSize: 30}}>{e.UserName}</Text>
          {chooseButton}
        </View>
      );
    });
    return (
      <View>
        {enableOptionEachUser}
        <View>
          <Button
            onPress={() => console.log(this.changedUsers)}
            title="showOutput"
          />
        </View>
      </View>
    );
  }
}

export default EnableDiableUser;
