User.Handlers.Index = React.createClass({
  
  mixins:[ReactMeteorData],

  getMeteorData() {
    const handler = Meteor.subscribe('users');
    
    return {
      user: Meteor.user(),
      users: Meteor.users.find().fetch(),
    };
  },
  
  render(){
    const {
      user,
      users,
    } = this.data;
    return React.cloneElement(this.props.children, {user, users})
  }
});
