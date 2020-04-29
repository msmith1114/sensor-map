import React from "react";
import { Link } from "react-router-dom";
import { Table } from "antd";
import SensorView from "./SensorView";

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
          <a style={{ marginRight: 16 }}>View {record.name}</a>
          <Link
          to={{
            pathname: `/devices/${record.id}`,
            state: { sensor: record }
          }}
        >
        View
        </Link>
          <a>Delete</a>
        </span>
      ),
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={props.dataSource} />
    </div>
  );
};

export default SensorTable;
