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
  const [rowData, setRowData] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: "",
    technology_name: "",
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

  // const data = [
  //   {
  //     sno: "1",
  //     technology: "ReactJs",
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
  //     technology: "NodeJs",
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
  // ];

  const handleDelete = async (id) =>{
    try{
      let response = await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/api/technology/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      });

      if(response.status===200){
        getAllTechnology();
        setShowDeleteModal(false);
      }

    }catch(e){
      toast.error("Something went wrong!");
    }
  }

  const getAllTechnology = async () => {
    try{
      setIsLoading(true);

      let response = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/api/technology/getAll`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      });
      if(response.status===200){
        let data = response?.data?.data?.map((item, index) => ({
          sno: index+1,
          technology: item.technology_name,
          actions: (
            <>
              <Button
                className="text-success"
                variant="outlined"
                onClick={() => { setShowUpdateModal(true); setUpdateData({id: item?._id, technology_name: item?.technology_name}) }}
              >
                <BiSolidPencil size={22} />
              </Button>
              <Button className="text-danger" variant="outlined" onClick={() => { setShowDeleteModal(true); setDeleteID(item?._id)}}>
                <MdDelete size={22} />
              </Button>
            </>
          )
        }) );

        setRowData(data);
        setIsLoading(false)
      }

    }catch(e){
      console.log("Error: " + e.message);
      toast.error("Something went wrong!");
    }
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try{

      let response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/technology/create`, {
        technology_name: event.target[0].value
      }, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      });

      if(response.status===201){
        getAllTechnology();
        setShow(false);
      }

    }catch(e){
      toast.error(e.response.data.message);
    }

  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    try{

      let response = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/api/technology/edit/${updateData?.id}`, {
        technology_name: updateData?.technology_name
      }, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      });

      if(response.status===200){
        getAllTechnology();
        setShowUpdateModal(false);
      }

    }catch(e){
      toast.error(e.response.data.message);
    }

  };

  useEffect(() => {
    getAllTechnology();
  }, []);

  return (
    <>
      <ToastContainer />

      <MUIDataTable
        className={"mt-4 mb-4"}
        title={"Technology"}
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

export default TechnologyManagement;
