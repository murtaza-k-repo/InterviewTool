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

const HRManagement = () => {
  const [rows, setRows] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
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
      name: "actions",
      label: "Actions",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  // const data = [
  //   {
  //     sno: "1",
  //     firstName: "Taniya",
  //     lastName: "Ahuja",
  //     email: "taniya@gmail.com",
  //     actions: (
  //       <>
  //         <Button
  //           className="text-success"
  //           variant="outlined"
  //           onClick={() => setShowUpdateModal(true)}
  //         >
  //           <BiSolidPencil size={22} />
  //         </Button>
  //         <Button className="text-danger" variant="outlined">
  //           <MdDelete size={22} />
  //         </Button>
  //       </>
  //     ),
  //   },
  //   {
  //     sno: "2",
  //     firstName: "Ritika",
  //     lastName: "Marothiya",
  //     email: "ritika@gmail.com",
      // actions: (
      //   <>
      //     <Button
      //       className="text-success"
      //       variant="outlined"
      //       onClick={() => setShowUpdateModal(true)}
      //     >
      //       <BiSolidPencil size={22} />
      //     </Button>
      //     <Button className="text-danger" variant="outlined">
      //       <MdDelete size={22} />
      //     </Button>
      //   </>
      // ),
  //   },
  // ];

  const getAllHR = async () => {
    try {
      setIsLoading(true);

      let response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/hr/getAll`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      if (response.status === 200) {
        let filteredData = response?.data?.data?.filter((item) => !item?.user_is_deleted);

        let data = filteredData?.map((item,index) => ({
          sno: index+1,
          firstName: item?.user_first_name,
          lastName: item?.user_last_name,
          email: item?.user_email,
          actions: (
            <>
              <Button
                className="text-success"
                variant="outlined"
                onClick={() => {setShowUpdateModal(true); setUpdateData({id: item?._id, first_name: item?.user_first_name, last_name: item?.user_last_name, email: item?.user_email}) }}
              >
                <BiSolidPencil size={22} />
              </Button>
              <Button className="text-danger" variant="outlined" onClick={() => {
                  setShowDeleteModal(true);
                  setDeleteID(item?._id);
                }}>
                <MdDelete size={22} />
              </Button>
            </>
          ),
        }))

        setRows(data);
        setIsLoading(false);
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
        `${process.env.REACT_APP_API_ENDPOINT}/addHr`,
        {
          user_first_name: event.target[0].value,
          user_last_name: event.target[1].value,
          user_email: event.target[2].value,
          is_test_user: false,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );

      if (response.status === 201) {
        getAllHR();
        setShow(false);
      }
    } catch (e) {
      toast.error("Somthing went wrong!");
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try {
      let response = await axios.put(
        `${process.env.REACT_APP_API_ENDPOINT}/hrUpdate/${updateData?.id}`,
        {
          user_first_name: updateData?.first_name,
          user_last_name: updateData?.last_name,
          user_email: updateData?.email,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        getAllHR();
        setShowUpdateModal(false);
      }
    } catch (e) {
      toast.error("Somthing went wrong!");
    }
  };

  const handleDelete = async (id) => {
    try {
      let response = await axios.delete(
        `${process.env.REACT_APP_API_ENDPOINT}/hrDelete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );

      if (response.status === 200) {
        getAllHR();
        setShowDeleteModal(false);
      }
    } catch (e) {
      toast.error("Something went wrong!");
    }
  };

  useEffect(() => {
    getAllHR();
  }, []);

  return (
    <>
      <ToastContainer />

      <MUIDataTable
        className={"mt-4"}
        title={"Human Resources"}
        data={rows || []}
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
          <Modal.Title>Add HR</Modal.Title>
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
                class="form-control mt-1"
                id="email"
                aria-describedby="email"
                placeholder="Enter email"
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
          <Modal.Title>Update HR</Modal.Title>
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

export default HRManagement;
