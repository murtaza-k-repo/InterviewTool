import React, { useState } from "react";
import { Button, Card, Form, Modal, Table } from "react-bootstrap";
import sampleFile from "../../../assets/files/sampleCategorySheet.xls";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import MUIDataTable from "mui-datatables";
import "./style.css";

const JudgementFormManagement = () => {
  const [showViewForm, setShowViewForm] = useState(false);

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

  const data = [
    {
      sno: "1",
      experience: "1-2 years",
      technology: "ReactJs",
      createdBy: "SuperAdmin",
      actions: (
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
      ),
    },
  ];

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <Card className="dashboard-card" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Judgement Form</Card.Title>
              <hr />
              <Card.Text>
                <Form>
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
                          <option value="1-2">1-2 years</option>
                          <option value="3-4">3-4 years</option>
                          <option value="5+">5+ years</option>
                        </Form.Select>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div class="form-group mb-2">
                        <label>Technology:</label>
                        <Form.Select
                          name="experience_id"
                          class="form-control mt-2"
                          required
                        >
                          <option disabled selected value>
                            Please select technology
                          </option>
                          <option value="ReactJs">ReactJs</option>
                          <option value="NodeJs">NodeJs</option>
                          <option value="PHP">PHP</option>
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
                  <div className="row justify-content-center mt-2 w-100 m-auto">
                    <div className="col-12 col-md-6">
                      <button className="btn addBtn text-white w-100">
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

      <Modal show={showViewForm}>
        <Modal.Header>
          <Modal.Title>Judgement Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="row">
            <div class="col-sm">
              <label>Technology</label>
              <h6 id="technology_name">ReactJs</h6>
            </div>
            <div class="col-sm">
              <label>Experience(Years)</label>
              <h6 id="exp">5+</h6>
            </div>
            <div class="col-sm">
              <label>Created by</label>
              <h6 id="created_by">SuperAdmin</h6>
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
                  <tr>
                    <th scope="row">1</th>
                    <td>Technology</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewForm(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default JudgementFormManagement;
