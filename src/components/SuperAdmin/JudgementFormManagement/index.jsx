import React, { useEffect, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import sampleFile from "../../../assets/files/sampleCategorySheet.xls";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import MUIDataTable from "mui-datatables";
import "./style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const JudgementFormManagement = () => {
  const [viewForm, setViewForm] = useState({
    isShow: false,
    data: {}
  });
  const [experienceList, setExperienceList] = useState([]);
  const [technologyList, setTechnologyList] = useState([]);
  const [formsdata, setFormsData] = useState([]);

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
      name: "experience",
      label: "Experience",
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
      name: "createdBy",
      label: "Created By",
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
  //     experience: "1-2 years",
  //     technology: "ReactJs",
  //     createdBy: "SuperAdmin",
  //     actions: (
  //       <>
  //         <Button
  //           className="text-secondary"
  //           variant="outlined"
  //           onClick={() => {
  //             setViewForm({});
  //           }}
  //         >
  //           <FaEye size={22} />
  //         </Button>
  //         <Button className="text-success" variant="outlined">
  //           <BiSolidPencil size={22} />
  //         </Button>
  //         <Button className="text-danger" variant="outlined">
  //           <MdDelete size={22} />
  //         </Button>
  //       </>
  //     ),
  //   },
  // ];

  const getExperienceList = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/api/experience/get`,
        {
          headers: {
            Authorization: "Bearer " + process.env.REACT_APP_TOKEN,
          },
        }
      );

      if (response.status === 200) {
        setExperienceList(response.data.data);
      }
    } catch (e) {
      toast.error("Something went wrong!");
    }
  };

  const getAllTechnology = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/api/technology/getAll`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      if (response.status === 200) {
        setTechnologyList(response?.data?.data);
      }
    } catch (e) {

      toast.error("Something went wrong!");
    }
  };

  const getAllForms = async () => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_API_ENDPOINT}/api/form/getAll`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          },
        }
      );
      if (response.status === 200) {

        let data = response?.data?.data?.map((item, index) => ({
          sno: index+1,
          experience: `${item?.experience_details[0]?.experience_level.join('-')} yrs`,
          technology: item?.technology_details[0]?.technology_name,
          createdBy: item?.created_by_details[0]?.user_first_name,
          actions: (
            <>
              <Button
                className="text-secondary"
                variant="outlined"
                onClick={() => {
                  let formData = {
                    technology: item?.technology_details[0]?.technology_name,
                    experience: `${item?.experience_details[0]?.experience_level.join('-')} yrs`,
                    createdBy: item?.created_by_details[0]?.user_first_name,
                    category_details: item?.category_details
                  }
                  setViewForm({ isShow: true, data: formData});
                  
                }}
              >
                <FaEye size={22} />
              </Button>
              <Button className="text-success" variant="outlined">
                <BiSolidPencil size={22} />
              </Button>
              <Button className="text-danger" variant="outlined">
                <MdDelete size={22} />
              </Button>
            </>
          ),
        }))

        setFormsData(data);
      }
    } catch (e) {

      toast.error("Something went wrong!");
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("experience_id", event.target[0].value);
    formData.append("technology_id", event.target[1].value);
    formData.append("pass_criteria", event.target[2].value);
    formData.append("file", event.target[3].files[0]);

    try{

      let response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/form/create`, formData, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
          "Content-Type": "multipart/form-data"
        }
      });

      if(response.status===201){
        getAllForms();
      }

    }catch(e){
      toast.error("Something went wrong!");
    }

  };

  useEffect(() => {
    getExperienceList();
    getAllTechnology();
    getAllForms();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <Card className="dashboard-card" style={{ width: "100%" }}>
              <Card.Body>
                <Card.Title>Judgement Form</Card.Title>
                <hr />
                <Card.Text>
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-12 col-md-6 mb-md-0">
                        <div class="form-group mb-3">
                          <label>Experience:</label>
                          <Form.Select
                            name="experience_id"
                            class="form-control mt-2"
                            required
                          >
                            <option disabled selected value>
                              Please select experience
                            </option>
                            {experienceList &&
                              experienceList.map((item) => (
                                <option value={item?._id}>
                                  {item?.experience_level.join(" - ")} yrs
                                </option>
                              ))}
                          </Form.Select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div class="form-group mb-2">
                          <label>Technology:</label>
                          <Form.Select
                            name="tochnology"
                            class="form-control mt-2"
                            required
                          >
                            <option disabled selected value>
                              Please select technology
                            </option>
                            {technologyList &&
                              technologyList?.map((item) => (
                                <option value={item?._id}>
                                  {item?.technology_name}
                                </option>
                              ))}
                          </Form.Select>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div class="form-group mb-2">
                          <label for="myfile">Minimum Pass Criteria:</label>
                          <input
                            class="form-control"
                            type="text"
                            name="pass_criteria"
                            placeholder="Enter minimum criteria (Eg. 60)"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div class="form-group mb-2">
                          <label for="myfile">Category Sheet:</label>
                          <input
                            class="form-control"
                            type="file"
                            name="file"
                            accept=".xlsx, .xls, .csv"
                            required
                          />
                        </div>
                        <small className="text-muted">
                          Download sample file{" "}
                          <a
                            href={sampleFile}
                            className="text-secondary"
                            download="categorySheet.xls"
                            target="_blank"
                            rel="noreferrer"
                          >
                            categorySheet.xls
                          </a>
                        </small>
                      </div>
                    </div>
                    <div className="row justify-content-center mt-2 w-100 m-auto p-4">
                      <div className="col-12 col-md-6 text-center">
                        <button
                          className="btn addBtn text-white"
                          style={{ width: "12rem" }}
                          type="submit"
                        >
                          Submit Details
                        </button>
                      </div>
                    </div>
                  </Form>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row mt-3 mb-4">
          <div className="col">
            <MUIDataTable
              title={"Judgement Form List"}
              data={formsdata || []}
              columns={columns}
              options={{
                selectableRows: false,
                filter: false,
                download: false,
                print: false,
                viewColumns: false,
                responsive: "scroll",
              }}
            />
            {/* <Card>
            <Card.Body>
              <Card.Title>Judgement Form List</Card.Title>
              <hr /> */}
            {/* <Table borderless className="judgementTable table" responsive>
                <thead className="thead-dark">
                  <tr>
                    <th>S.No.</th>
                    <th>Experience</th>
                    <th>Technology</th>
                    <th>Created By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>
                      <>
                        <Button
                          className="text-secondary"
                          variant="outlined"
                          onClick={() => {
                            setShowViewForm(true);
                          }}
                        >
                          <FaEye size={22} />
                        </Button>
                        <Button className="text-success" variant="outlined">
                          <BiSolidPencil size={22} />
                        </Button>
                        <Button className="text-danger" variant="outlined">
                          <MdDelete size={22} />
                        </Button>
                      </>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>
                      <>
                        <Button
                          className="text-secondary"
                          variant="outlined"
                          onClick={() => {
                            setShowViewForm(true);
                          }}
                        >
                          <FaEye size={22} />
                        </Button>
                        <Button className="text-success" variant="outlined">
                          <BiSolidPencil size={22} />
                        </Button>
                        <Button className="text-danger" variant="outlined">
                          <MdDelete size={22} />
                        </Button>
                      </>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>
                      <>
                        <Button
                          className="text-secondary"
                          variant="outlined"
                          onClick={() => {
                            setShowViewForm(true);
                          }}
                        >
                          <FaEye size={22} />
                        </Button>
                        <Button className="text-success" variant="outlined">
                          <BiSolidPencil size={22} />
                        </Button>
                        <Button className="text-danger" variant="outlined">
                          <MdDelete size={22} />
                        </Button>
                      </>
                    </td>
                  </tr>
                </tbody>
              </Table> */}

            {/* </Card.Body>
          </Card> */}
          </div>
        </div>

        <Modal show={viewForm?.isShow}>
          <Modal.Header>
            <Modal.Title>Judgement Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="row">
              <div class="col-sm">
                <label>Technology</label>
                <h6 id="technology_name">{viewForm?.data?.technology}</h6>
              </div>
              <div class="col-sm">
                <label>Experience</label>
                <h6 id="exp">{viewForm?.data?.experience}</h6>
              </div>
              <div class="col-sm">
                <label>Created by</label>
                <h6 id="created_by">{viewForm?.data?.createdBy}</h6>
              </div>
            </div>
            <div class="row mt-2">
              <div className="col">
                <label className="mb-2">Category Details</label>
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Category Name</th>
                      <th scope="col">Weightage</th>
                    </tr>
                  </thead>
                  <tbody id="category_dts">
                   {viewForm?.data?.category_details?.map((detail,index) => (
                     <tr>
                     <th scope="row">{index+1}</th>
                     <td>{detail?.category_name}</td>
                     <td>{detail?.category_weightage}</td>
                   </tr>
                   ))}
                   
                  </tbody>
                </table>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setViewForm({...viewForm, isShow:false})}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default JudgementFormManagement;
