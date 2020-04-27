import React from 'react';
import {View, Button, Text} from 'react-native';
import ApiService from '../services/api.service';
import {urlList} from '../data/urlList';

class RandomPicker extends React.Component {
  group = {};
  user = {};
  api = new ApiService();

  state = {
    selectedGroup: '2',
    userPicked: false,
    reload: false,
    dataLoad: false,
  };
  constructor() {
    super();
    this.loadGroups();
  }

  loadGroups() {
    this.api.get(urlList.getUsers).then(data => {
      let userList = data.data;
      this.group = {};
      userList.map(each => {
        if (!each.IsPlayedGame) {
          if (this.group.hasOwnProperty(each.GroupId)) {
            this.group[each.GroupId].push(each);
          } else {
            this.group[each.GroupId] = [];
            this.group[each.GroupId].push(each);
          }
        }
      });
      console.log(this.group);
      this.setState({
        dataLoad: true,
        reload: !this.state.reload,
        userPicked: false,
      });
    });
  }

  awardPoints(points) {
    this.api
      .get(urlList.awardPoints + this.user.UserId + '&gamePoint=' + points)
      .then(data => {
        console.log(data);
        // this.setState({userPicked: false});
        this.loadGroups();
      });
  }
  render() {
    let pickedGroup = this.group[this.state.selectedGroup];
    if (this.state.dataLoad) {
      console.log(pickedGroup);
      const randomUserFromGroup =
        pickedGroup[Math.floor(Math.random() * pickedGroup.length)];
      let displayPane = <Text>Pick a User</Text>;
      let displayButtons = <Text>Dummy</Text>;

      if (this.state.userPicked) {
        this.user = randomUserFromGroup;
        this.api
          .get(urlList.pickedUser + randomUserFromGroup.UserId)
          .then(data => console.log(data));
        displayPane = (
          <View>
            <View>
              <Text>{randomUserFromGroup.UserName}</Text>
            </View>
            <View>
              <Button title="Award points" onPress={() => this.awardPoints(5)} />
              <Button title="Next Team" onPress={() => this.awardPoints(0)} />
            </View>
          </View>
        );
      }
      displayButtons = Object.keys(this.group).map(eachKey => {
        return (
          <Button
            style={{marginTop: 20}}
            key={eachKey}
            title={this.group[eachKey][0].GroupName}
            onPress={() =>
              this.setState({selectedGroup: eachKey, userPicked: true})
            }
          />
        );
      });

      return (
        <View>
          <View>
            {displayButtons}
            {/* <Button
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
            /> */}

            {/* <Button
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
            /> */}
          </View>
          <View>{displayPane}</View>
        </View>
      );
    } else {
      return <Text>Loading...</Text>;
    }
  }
}

export default RandomPicker;
