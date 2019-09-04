import { Avatar, Tag } from "antd";
import React from "react";
import { languageFilter, statusFilter } from "../constans";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
    render: text => <Avatar src={text} size="large" />
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Language",
    dataIndex: "language",
    key: "language",
    filterMultiple: false,
    filters: languageFilter
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    filterMultiple: false,
    filters: statusFilter,
    render: text => (
      <Tag color={text === "Online" ? "green" : "red"}> {text} </Tag>
    )
  },
  {
    title: "Reviews",
    dataIndex: "numOfReviews",
    key: "numOfReviews",
    defaultSortOrder: "desc",
    sorter: () => {}
  }
];

export default columns;
