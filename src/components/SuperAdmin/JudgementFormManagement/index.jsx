
import React from "react";
import { Button, Card, Form, Table } from "react-bootstrap";
import sampleFile from "../../../assets/files/sampleCategorySheet.xls";
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import "./style.css"

const JudgementFormManagement = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <Card style={{ width: "100%" }}>
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
                        <label for="myfile">Minimum Pass Criteria</label>
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
          <Card>
            <Card.Body>
              <Card.Title>Judgement Form List</Card.Title>
              <hr />
              <Table borderless className="judgementTable table" responsive>
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
                    <Button className="text-secondary" variant="outlined">
                      <FaEye size={22} />
                    </Button>
                        <Button
                          className="text-success"
                          variant="outlined"
                          // onClick={() => {
                          //   setShowUpdateModal(true);
                          //   setUpdateData({
                          //     id: row._id,
                          //     first_name: row.first_name,
                          //     last_name: row.last_name,
                          //     email: row.email,
                          //   });
                          // }}
                        >
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
                    <Button className="text-secondary" variant="outlined">
                      <FaEye size={22} />
                    </Button>
                        <Button
                          className="text-success"
                          variant="outlined"
                          // onClick={() => {
                          //   setShowUpdateModal(true);
                          //   setUpdateData({
                          //     id: row._id,
                          //     first_name: row.first_name,
                          //     last_name: row.last_name,
                          //     email: row.email,
                          //   });
                          // }}
                        >
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
                    <Button className="text-secondary" variant="outlined">
                      <FaEye size={22} />
                    </Button>
                        <Button
                          className="text-success"
                          variant="outlined"
                          // onClick={() => {
                          //   setShowUpdateModal(true);
                          //   setUpdateData({
                          //     id: row._id,
                          //     first_name: row.first_name,
                          //     last_name: row.last_name,
                          //     email: row.email,
                          //   });
                          // }}
                        >
                          <BiSolidPencil size={22} />
                        </Button>
                        <Button className="text-danger" variant="outlined">
                          <MdDelete size={22} />
                        </Button>
                      </>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JudgementFormManagement;
