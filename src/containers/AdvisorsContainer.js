import React, { Component } from 'react';
import axios from 'axios'
import styled from '@emotion/styled'


import { BASE_URL } from '../config';
import Advisors from '../components/Advisors';

const TableWrapper = styled.div`
  max-width: 75%;
  margin: auto;

`;

class AdvisorContainer extends Component {
  state = {
    advisors: [],
    loading: true,
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
      const result = await axios.post(`${BASE_URL}/advisors`);
      const advisors = await this.delay(result, 2000);
      this.setState({
        loading: false,
        advisors
      })
    }
    catch (error) {
      this.setState({
        errorMessage: error
      })
    }
  };

  componentDidMount() {
    this.getAdvisors();
  }

  render() {
    const { advisors } = this.state;
    return (
      <TableWrapper>
        <Advisors
          advisors={advisors}
        />
      </TableWrapper>
    );
  }
}

export default AdvisorContainer;