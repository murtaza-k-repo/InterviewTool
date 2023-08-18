import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import "./style.css";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const HRManagement = () => {
  const [rows, setRows] = useState(null);
  const [filteredRows, setFilteredRows] = useState(null);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updateData, setUpdateData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
  });
  const [searched, setSearched] = useState("");
  const classes = useStyles();

  const getAllDepartments = async () => {
    // try {
    //   setIsLoading(true);
    //   const response = await axios.get(
    //     `${process.env.REACT_APP_API_ENDPOINT}/getAllDepartments`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    //       },
    //     }
    //   );
    //   if (response.status === 200) {
    //     setRows(response.data.data);
    //     setFilteredRows(response.data.data);
    //     setIsLoading(false);
    //   } else {
    //     toast.error("Something went wrong!", {
    //         position: toast.POSITION.TOP_RIGHT
    //       });
    //     setIsLoading(false);
    //   }
    // } catch (err) {
    //   console.log(err);
    //   toast.error("Something went wrong!", {
    //     position: toast.POSITION.TOP_RIGHT
    //   });
    //   setIsLoading(false);
    // }
  };

  const requestSearch = (searchedVal) => {
    if (searchedVal) {
      const filteredRowsData = rows.filter((row) => {
        return (
          row.first_name.toLowerCase().includes(searchedVal.toLowerCase()) ||
          row.last_name.toLowerCase().includes(searchedVal.toLowerCase()) ||
          row.email.toLowerCase().includes(searchedVal.toLowerCase())
        );
      });

      setFilteredRows(filteredRowsData);
    } else {
      setFilteredRows(rows);
    }
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // try{
    //     let response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/createDepartment`, {
    //         department_name: event.target[0].value
    //     },{
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.getItem("authToken")}`
    //         }
    //     });

    //     if(response.status === 200){
    //         setShow(false);
    //         getAllDepartments();
    //         toast.success("Department added successfully!", {
    //             position: toast.POSITION.TOP_RIGHT
    //           });
    //     } else{
    //         toast.error("Something went wrong!", {
    //             position: toast.POSITION.TOP_RIGHT
    //           });
    //     }
    // }catch(err){
    //     toast.error("Something went wrong!", {
    //         position: toast.POSITION.TOP_RIGHT
    //       });
    // }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();

    // try{
    //     let response = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/updateDepartment/${updateData.id}`, {
    //         department_name: updateData.value
    //     },{
    //         headers: {
    //             "Authorization": `Bearer ${localStorage.getItem("authToken")}`
    //         }
    //     });

    //     if(response.status === 200){
    //         setShowUpdateModal(false);
    //         getAllDepartments();
    //         toast.success("Department updated successfully!", {
    //             position: toast.POSITION.TOP_RIGHT
    //           });
    //     } else{
    //         toast.error("Something went wrong!", {
    //             position: toast.POSITION.TOP_RIGHT
    //           });
    //     }
    // }catch(err){
    //     toast.error("Something went wrong!", {
    //         position: toast.POSITION.TOP_RIGHT
    //       });
    // }
  };

  useEffect(() => {
    // getAllDepartments();

    let rowData = [
      {
        _id: "dedue2gugu3u",
        first_name: "Taniya",
        last_name: "Ahuja",
        email: "taniya@gmail.com",
      },
      {
        _id: "gwcguregciie",
        first_name: "Ritika",
        last_name: "Marothiya",
        email: "ritika@gmail.com",
      },
    ];

    setRows(rowData);
    setFilteredRows(rowData);

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <ToastContainer />
      <Paper className="mt-4">
        <div className="d-flex">
          <SearchBar
            value={searched}
            onChange={(searchVal) => requestSearch(searchVal)}
            onCancelSearch={() => cancelSearch()}
            style={{ width: "80%" }}
            disabled={isLoading}
          />
          <Button
            className={"addBtn"}
            style={{ width: "20%" }}
            onClick={() => setShow(true)}
            variant="primary"
          >
            {/* <FaPlus size={20} /> */}
            <span className="d-none d-md-block">Add HR</span> <FaPlus size={20} className="d-md-none" />
          </Button>{" "}
        </div>
        <TableContainer>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>S.No.</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows &&
                filteredRows.map((row, index) => (
                  <TableRow key={index + 1}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>
                      <>
                        <Button
                          className="text-success"
                          variant="outlined"
                          onClick={() => {
                            setShowUpdateModal(true);
                            setUpdateData({
                              id: row._id,
                              first_name: row.first_name,
                              last_name: row.last_name,
                              email: row.email,
                            });
                          }}
                        >
                          <BiSolidPencil size={22} />
                        </Button>
                        <Button className="text-danger" variant="outlined">
                          <MdDelete size={22} />
                        </Button>
                      </>
                    </TableCell>
                  </TableRow>
                ))}

              {isLoading && !filteredRows && (
                <>
                  <TableCell></TableCell>
                  <TableCell>
                    <div className="d-flex justify-content-center align-items-center p-5">
                      <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                      <span>&nbsp; Loading...</span>
                    </div>
                  </TableCell>
                  <TableCell></TableCell>
                </>
              )}

              {!isLoading && filteredRows?.length <= 0 && (
                <>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>
                    <p
                      className="d-flex justify-content-center align-items-center p-4"
                      style={{ fontWeight: "600" }}
                    >
                      No data found!
                    </p>
                  </TableCell>
                  <TableCell></TableCell>
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

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
    </>
  );
};

export default HRManagement;
