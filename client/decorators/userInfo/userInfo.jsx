import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import Profiles from './../../../both/collections/profiles';
import React from 'react';
import meteorData from './../meteorData';

const currentUser = () => {
  const userId = Meteor.userId();
  Meteor.subscribe('profile', userId);

  return {
    user: (Profiles.findOne({ userId }) || {}),
    isAdmin: Roles.userIsInRole(userId, 'admin'),
  };
};

export default Component => {
  class UserInfoComponent extends React.Component {
    render() {
      return <Component {...this.props} />;
    }
  }

  return meteorData(
    currentUser,
    UserInfoComponent
  );
};
