import React from 'react';
import { Table } from 'antd';

import columns from './TableColumns';

const Advisors = ({ advisors }) => {
  return (
    <Table
      columns={columns}
      dataSource={advisors}
      rowKey="id"
    />
  );
}

export default Advisors;