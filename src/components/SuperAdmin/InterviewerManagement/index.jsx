import React, { useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BiPlus, BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Button, Form, Modal } from "react-bootstrap";
import "./style.css";
// import axios from "axios";
import MUIDataTable from "mui-datatables";

const InterviewerManagement = () => {
  // const [rows, setRows] = useState(null);
  const [show, setShow] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    technology: "",
    start_time: "",
    end_time: "",
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
      name: "firstName",
      label: "First Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "lastName",
      label: "Last Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "email",
      label: "Email",
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
      name: "timeslots",
      label: "Time Slots",
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
      firstName: "Taniya",
      lastName: "Ahuja",
      email: "taniya@gmail.com",
      technology: "ReactJs",
      timeslots: "10:00 - 18:00",
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
      firstName: "Ritika",
      lastName: "Marothiya",
      email: "ritika@gmail.com",
      technology: "NodeJs",
      timeslots: "10:00 - 18:00",
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
      {/* <ToastContainer /> */}

      <MUIDataTable
        className={"mt-4"}
        title={"Interviewer"}
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
          <Modal.Title>Add Interviewer</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <div class="form-group">
              <small>First Name:</small>
              <input
                type="text"
                class="form-control mt-1 mb-2"
                id="first_name"
                aria-describedby="first_name"
                placeholder="Enter first name"
                required
              />

              <small>Last Name:</small>
              <input
                type="text"
                class="form-control mt-1 mb-2"
                id="last_name"
                aria-describedby="last_name"
                placeholder="Enter last name"
                required
              />
              <small>Email:</small>
              <input
                type="email"
                class="form-control mt-1 mb-2"
                id="email"
                aria-describedby="email"
                placeholder="Enter email"
                required
              />
              <small>Technology:</small>
              <input
                type="text"
                class="form-control mt-1 mb-2"
                id="technology"
                aria-describedby="technology"
                placeholder="Enter technology"
                required
              />

              <small>Time Slots:</small>
              <div className="row mt-1 mb-2">
                <div className="col-6">
                  <div>
                    <small>Start Time:</small>
                    <input
                      class="form-control mt-1 mb-2"
                      type="time"
                      name="start_time"
                      required
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div>
                    <small>End Time:</small>
                    <input
                      class="form-control mt-1 mb-2"
                      type="time"
                      name="end_time"
                      required
                    />
                  </div>
                </div>{" "}
              </div>
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
          <Modal.Title>Update Interviewer</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUpdate}>
          <Modal.Body>
            <div class="form-group">
              <small>First Name:</small>
              <input
                type="text"
                class="form-control mt-1 mb-2"
                id="first_name"
                aria-describedby="first_name"
                placeholder="Enter first name"
                onChange={(e) =>
                  setUpdateData({ ...updateData, first_name: e.target.value })
                }
                value={updateData.first_name}
              />

              <small>Last Name:</small>
              <input
                type="text"
                class="form-control mt-1 mb-2"
                id="last_name"
                aria-describedby="last_name"
                placeholder="Enter last name"
                onChange={(e) =>
                  setUpdateData({ ...updateData, last_name: e.target.value })
                }
                value={updateData.last_name}
              />
              <small>Email:</small>
              <input
                type="email"
                class="form-control mt-1"
                id="email"
                aria-describedby="email"
                placeholder="Enter email"
                onChange={(e) =>
                  setUpdateData({ ...updateData, email: e.target.value })
                }
                value={updateData.email}
              />
            </div>
            <small>Technology:</small>
            <input
              type="text"
              class="form-control mt-1 mb-2"
              id="technology"
              aria-describedby="technology"
              placeholder="Enter technology"
              onChange={(e) =>
                setUpdateData({ ...updateData, technology: e.target.value })
              }
              value={updateData.technology}
            />

            <small>Time Slots:</small>
            <div className="row mt-1 mb-2">
              <div className="col-6">
                <div>
                  <small>Start Time:</small>
                  <input
                    class="form-control mt-1 mb-2"
                    type="time"
                    name="start_time"
                    onChange={(e) =>
                      setUpdateData({
                        ...updateData,
                        start_time: e.target.value,
                      })
                    }
                    value={updateData.start_time}
                  />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <small>End Time:</small>
                  <input
                    class="form-control mt-1 mb-2"
                    type="time"
                    name="end_time"
                    onChange={(e) =>
                      setUpdateData({ ...updateData, end_time: e.target.value })
                    }
                    value={updateData.end_time}
                  />
                </div>
              </div>{" "}
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

export default InterviewerManagement;
