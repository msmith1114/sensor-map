import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";

const SensorTable = (props) => {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (text) => <strong>{text}</strong>,
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (text, record) => (
        <span>
          {record.name}
          hi
          {text}
        </span>
      ),
      sorter: (a, b) => {
        var nameA = a.name.toUpperCase(); // ignore upper and lowercase
        var nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      },
    },
    {
      title: "Serial Number",
      dataIndex: "serialNum",
      sorter: (a, b) => {
        var serialNumA = a.serialNum.toUpperCase(); // ignore upper and lowercase
        var serialNumB = b.serialNum.toUpperCase(); // ignore upper and lowercase
        if (serialNumA < serialNumB) {
          return -1;
        }
        if (serialNumA > serialNumB) {
          return 1;
        }
        // names must be equal
        return 0;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      sorter: (a, b) => a.status - b.status,
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Link
            to={{
              pathname: `/devices/${record.id}`,
              state: { sensor: record },
            }}
          >
            View
          </Link>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={props.dataSource}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>hello There! {record.serialNum}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
      />
    </div>
  );
};

export default SensorTable;
