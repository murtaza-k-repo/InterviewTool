import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BiPlus, BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Button, Form, Modal } from "react-bootstrap";
import "./style.css";
// import axios from "axios";
import MUIDataTable from "mui-datatables";
import axios from "axios";

const InterviewerManagement = () => {
  const [rowData, setRowData] = useState(null);
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteID] = useState("");

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

  const getAllInterviewer = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/interviewer/getAll`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      if (response.status === 200) {
        let data = response?.data?.data?.map((item, index) => ({
          sno: index + 1,
          firstName: item?.user_first_name,
          lastName: item?.user_last_name,
          email: item?.user_email,
          technology: item?.user_technology,
          timeslots: `${item?.start_time}-${item?.end_time}`,
          actions: (
            <>
              <Button
                className="text-success"
                variant="outlined"
                onClick={() => {
                  setShowUpdateModal(true);
                  setUpdateData({
                    id: item?._id,
                    first_name: item?.user_first_name,
                    last_name: item?.user_last_name,
                    email: item?.user_email,
                    technology: item?.user_technology,
                    start_time: item?.start_time,
                    end_time: item?.end_time,
                  });
                }}
              >
                <BiSolidPencil size={22} />
              </Button>
              <Button
                className="text-danger"
                variant="outlined"
                onClick={() => {
                  setShowDeleteModal(true);
                  setDeleteID(item?._id);
                }}
              >
                <MdDelete size={22} />
              </Button>
            </>
          ),
        }));

        setRowData(data);
      }
    } catch (e) {
      console.log("Error: " + e.message);
      toast.error("Something went wrong!");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/addInterviewer`,
        {
          user_first_name: event.target[0].value,
          user_last_name: event.target[1].value,
          user_email: event.target[2].value,
          user_technology: event.target[3].value,
          start_time: event.target[4].value,
          end_time: event.target[5].value,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );

      if (response.status === 201) {
        getAllInterviewer();
        setShow(false);
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try{

      let response = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/interviewersUpdate/${updateData?.id}`, {
        user_first_name: updateData?.first_name,
          user_last_name: updateData?.last_name,
          user_email: updateData?.email,
          user_technology: updateData?.technology,
          start_time: updateData?.start_time,
          end_time: updateData?.end_time,
      }, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      });

      if(response.status===200){
        getAllInterviewer();
        setShowUpdateModal(false);
      }

    }catch(e){
      toast.error(e.response.data.message);
    }
  };

  const handleDelete = async (id) =>{
    try{
      let response = await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/interviewer/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      });

      if(response.status===200){
        getAllInterviewer();
        setShowDeleteModal(false);
      }

    }catch(e){
      toast.error("Something went wrong!");
    }
  }

  useEffect(() => {
    getAllInterviewer();
  }, [])

  return (
    <>
      <ToastContainer />

      <MUIDataTable
        className={"mt-4"}
        title={"Interviewer"}
        data={rowData || []}
        columns={columns}
        options={{
          selectableRows: false,
          filter: false,
          download: false,
          print: false,
          viewColumns: false,
          responsive: "scroll",
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

      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => handleDelete(deleteId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default InterviewerManagement;
