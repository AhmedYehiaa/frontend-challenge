import React from 'react';
import { Table, BackTop, Tooltip } from 'antd';
import styled from '@emotion/styled';

import columns from './TableColumns';

const TableWrapper = styled.div`
  max-width: 75%;
  margin: auto;
`;

const Advisors = ({ advisors, loading, onChange }) => {
  return (
    <TableWrapper>
      <Tooltip placement="topLeft" title="Back to top">
        <BackTop />
      </Tooltip>
      <Table
        columns={columns}
        dataSource={advisors}
        loading={loading}
        onChange={onChange}
        rowKey="id"
        pagination={false}
      />
    </TableWrapper>
  );
}

export default Advisors;