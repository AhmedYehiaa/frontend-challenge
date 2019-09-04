import React, { Component } from "react";
import axios from "axios";

import { BASE_URL } from "../config";
import Advisors from "../components/Advisors/Advisors";

class AdvisorContainer extends Component {
  state = {
    advisors: [],
    loading: false,
    errorMessage: "",
    filters: {
      pageSize: 20,
      pageNumber: 1,
      language: "any",
      status: "any",
      sortedBy: "numOfReviews",
      srotType: "desc"
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.getAdvisors();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  delay = (result, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result.data);
      }, time);
    });
  };

  getAdvisors = async () => {
    const { filters } = this.state;
    try {
      this.setState({ loading: true });
      const result = await axios.post(`${BASE_URL}/advisors`, filters);
      const advisors = await this.delay(result, 2000);
      this.setState({
        loading: false,
        advisors:
          filters.pageNumber > 1
            ? [...this.state.advisors, ...advisors]
            : advisors
      });
    } catch (error) {
      this.setState({
        loading: false,
        errorMessage: error
      });
    }
  };

  handleFilterChanges = (pagination, filters, sorter) => {
    const language = filters["language"]
      ? filters["language"][0] || "any"
      : this.state.filters.language;
    const status = filters["status"]
      ? filters["status"][0] || "any"
      : this.state.filters.status;
    const sortType = sorter["order"]
      ? sorter["order"] === "descend"
        ? "desc"
        : "asc"
      : this.state.filters.srotType;
    this.setState(
      {
        filters: {
          ...this.state.filters,
          pageNumber: 1,
          language,
          status,
          sortType
        }
      },
      () => {
        this.getAdvisors();
      }
    );
  };

  handleScroll = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      const { filters } = this.state;
      this.setState(
        {
          filters: {
            ...filters,
            pageNumber: filters.pageNumber + 1
          }
        },
        () => {
          this.getAdvisors();
        }
      );
    }
  };

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
