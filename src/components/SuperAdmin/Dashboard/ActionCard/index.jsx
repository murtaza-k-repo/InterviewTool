import MUIDataTable from "mui-datatables";
import React from "react";
import { Link } from "react-router-dom";

const ActionCard = () => {
  const columns = [
    {
      name: "sno",
      label: "S.No.",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "candidateName",
      label: "Candidate Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  let id = "trvgevevettrtete";

  const data = [
    {
      sno: "1",
      candidateName: "Madhav Jaiswal",
      actions: (
        <Link
          to={`/judgementForm/${id}`}
          className="text-white btn addBtn"
          variant="outlined"
        >
          View Form
        </Link>
      ),
    },
    {
      sno: "2",
      candidateName: "Kumar Ayyer",
      actions: (
        <>
          <Link
            to={`/judgementForm/${id}`}
            className="text-white btn addBtn"
            variant="outlined"
          >
            View Form
          </Link>
        </>
      ),
    },
  ];

  return (
    <MUIDataTable
      className={"mt-4"}
      title={"Details"}
      data={data}
      columns={columns}
      options={{
        selectableRows: false,
        filter: false,
        download: false,
        print: false,
        viewColumns: false,
      }}
    />
  );
};

export default ActionCard;
