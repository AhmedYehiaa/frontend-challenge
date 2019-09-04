import React, { Component } from 'react';
import axios from 'axios'


import { BASE_URL } from '../config';
import Advisors from '../components/Advisors';

class AdvisorContainer extends Component {
  state = {
    advisors: [],
    loading: false,
    errorMessage: '',
    filters: {
      pageSize: 20,
      pageNumber: 1,
      language: 'any',
      status: 'any',
      sortedBy: 'numOfReviews',
      srotType: 'desc'
    }
  }

  delay = (result, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result.data)
      }, time);
    })
  }

  getAdvisors = async () => {
    const { filters } = this.state;
    try {
      this.setState({ loading: true });
      const result = await axios.post(`${BASE_URL}/advisors`, filters);
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

  handleFilterChanges = (pagination, filters, sorter) => {
    const language = filters["language"] ? (filters["language"][0] || "any") : this.state.filters.language;
    const status = filters["status"] ? (filters["status"][0] || "any") : this.state.filters.status;
    const sortType = sorter["order"] ? (sorter["order"] === "descend" ? "desc" : "asc") : this.state.filters.srotType;
    this.setState({
      filters: {
        ...this.state.filters,
        language,
        status,
        sortType,
      }
    }, () => {
      this.getAdvisors();
    });
  }

  render() {
    const { advisors, loading } = this.state;
    return (
      <Advisors
        advisors={advisors}
        loading={loading}
        onChange={this.handleFilterChanges}
      />
    );
  }
}

export default AdvisorContainer;