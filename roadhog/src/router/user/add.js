import React, { Component } from 'react';
import formProvider from '../../utils/formProvider';
import FormItem from '../../components/FormItem';
import HomeLayout from '../../layouts/HomeLayout'
import UserEditor from '../../components/UserEditor'

class UserAdd extends React.Component {
  render () {
    return (
      <HomeLayout title="添加用户">
        <UserEditor/>
      </HomeLayout>
    );
  }
}

export default UserAdd;