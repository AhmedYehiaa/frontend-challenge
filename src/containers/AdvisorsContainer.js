import React, { Component } from 'react';
import axios from 'axios'


import { BASE_URL } from '../config';
import Advisors from '../components/Advisors';

class AdvisorContainer extends Component {
  state = {
    advisors: [],
    loading: false,
    errorMessage: '',
  }

  delay = (result, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result.data)
      }, time);
    })
  }

  getAdvisors = async () => {
    try {
      this.setState({ loading: true });
      const result = await axios.post(`${BASE_URL}/advisors`);
      const advisors = await this.delay(result, 2000);
      this.setState({
        loading: false,
        advisors
      })
    }
    catch (error) {
      this.setState({
        loading: false,
        errorMessage: error
      })
    }
  };

  componentDidMount() {
    this.getAdvisors();
  }

  handleFilterChanges = (pagination, filters, sorter, extra) => {
    console.log(filters);
    console.log(extra);
  }
  render() {
    const { advisors, loading } = this.state;
    return (
      <Advisors
        advisors={advisors}
        loading={loading}
        onFilter={this.handleFilterChanges}
      />
    );
  }
}

export default AdvisorContainer;