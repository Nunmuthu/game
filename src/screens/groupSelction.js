import React from 'react';
import {View, Text, Button} from 'react-native';
import {users} from '../data/oldGetUsers';
import ApiService from '../services/api.service';
import {urlList} from '../data/urlList';

class GroupSelection extends React.Component {
  group = {};
  changedUsers = users;
  api = new ApiService();
  noOfGroups = 4;

  constructor() {
    super();
    this.loadUsers();
  }
  loadUsers = () => {
    this.api.get(urlList.getUsers).then(data => {
      console.log(data);
      this.changedUsers = data.data;
    });
  };
  assignGroup() {
    this.group = {};
    let dummyUsers = this.changedUsers.slice();
    for (let i = 0; i < this.changedUsers.length; i++) {
      const randomElement =
        dummyUsers[Math.floor(Math.random() * dummyUsers.length)];
      let key = i % this.noOfGroups;
      if (randomElement.IsActive) {
        this.group.hasOwnProperty(key)
          ? this.group[key].push(randomElement)
          : (this.group[key] = [randomElement]);
      }
      let index = dummyUsers.findIndex(e => randomElement.UserId === e.UserId);
      dummyUsers.splice(index, 1);
    }
    console.log(this.group);
    this.sendGroupListToServer();
    this.setState({reload: true});
  }

  sendGroupListToServer() {
    Object.keys(this.group).map(eachKey =>
      this.group[eachKey].map(data => {
        // let newObject = {
        //   UserId: data.UserId,
        //   GroupId: data.GroupId,
        //   GroupName: data.GroupName,
        // };
        this.api
          .get(
            'SpinnerAppController/AssignUserGroup?userId=' +
              data.UserId +
              '&groupId=' +
              data.GroupId +
              '&groupName=group' +
              data.GroupId,
          )
          .then(data => console.log(data));
      }),
    );
  }
  render() {
    let displayGroups = Object.keys(this.group).map(e => {
      let eachItem = this.group[e].map(x => (
        <Text key={x.UserName}>{x.UserName}</Text>
      ));
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
