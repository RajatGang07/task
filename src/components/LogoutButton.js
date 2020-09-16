import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';

import { logOut } from '../store/action';

const LogoutButton = ({ logOutAction,...props }) => {
  return <Button title="Logout" onPress={logOutAction} />;
};

export default connect(null, {
  logOutAction: logOut,
})(LogoutButton);
