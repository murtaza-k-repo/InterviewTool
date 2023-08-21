import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BiPlus, BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "./style.css";
import axios from "axios";
import MUIDataTable from "mui-datatables";

const TechnologyManagement = () => {
  const [rows, setRows] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: "",
    technology_name: "",
  });

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
      name: "technology",
      label: "Technology",
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

  const data = [
    {
      sno: "1",
      technology: "ReactJs",
      actions: (
        <>
          <Button
            className="text-success"
            variant="outlined"
            onClick={() => setShowUpdateModal(true)}
          >
            <BiSolidPencil size={22} />
          </Button>
          <Button className="text-danger" variant="outlined">
            <MdDelete size={22} />
          </Button>
        </>
      ),
    },
    {
      sno: "2",
      technology: "NodeJs",
      actions: (
        <>
          <Button
            className="text-success"
            variant="outlined"
            onClick={() => setShowUpdateModal(true)}
          >
            <BiSolidPencil size={22} />
          </Button>
          <Button className="text-danger" variant="outlined">
            <MdDelete size={22} />
          </Button>
        </>
      ),
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ToastContainer />

      <MUIDataTable
        className={"mt-4"}
        title={"Technology"}
        data={data}
        columns={columns}
        options={{
          selectableRows: false,
          filter: false,
          download: false,
          print: false,
          viewColumns: false,
          customToolbar: () => (
            <BiPlus
              onClick={() => setShow(true)}
              className="text-secondary cursor-pointer"
              size={30}
            />
          ),
        }}
      />

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add Technology</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <div class="form-group">
              <small>Technology Name:</small>
              <input
                type="text"
                class="form-control mt-1 mb-2"
                id="technology_name"
                aria-describedby="technology_name"
                placeholder="Enter technology name"
                required
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button type="submit" className="addBtn" variant="primary">
              Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal show={showUpdateModal}>
        <Modal.Header>
          <Modal.Title>Update Tecnology</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUpdate}>
          <Modal.Body>
            <div class="form-group">
              <small>Technology Name:</small>
              <input
                type="text"
                class="form-control mt-1 mb-2"
                id="technology_name"
                aria-describedby="technology_name"
                placeholder="Enter technology name"
                onChange={(e) =>
                  setUpdateData({
                    ...updateData,
                    technology_name: e.target.value,
                  })
                }
                value={updateData.technology_name}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowUpdateModal(false)}
            >
              Close
            </Button>
            <Button type="submit" className="addBtn" variant="primary">
              Update
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default TechnologyManagement;
