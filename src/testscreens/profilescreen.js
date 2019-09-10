class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Weldcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Janed's profile"
          onPress={() => navigate('Profile', {name: 'Jane'})}
        />
      );
    }
  }