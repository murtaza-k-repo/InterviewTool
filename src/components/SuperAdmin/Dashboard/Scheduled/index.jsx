import React from "react";
import { Card, Form, Table } from "react-bootstrap";

const Scheduled = () => {
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Scheduled Interviews</Card.Title>
              <hr />
              <Card.Text>
                <Form>
                  <div className="row">
                    <div className="col-12 col-md-5 mb-md-0">
                      <div class="form-group mb-2">
                        <label for="fromDate">From Date:</label>
                        <input
                          type="date"
                          id="fromDate"
                          name="fromDate"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-5">
                      <div class="form-group mb-2">
                        <label for="toDate">To Date:</label>
                        <input
                          type="date"
                          id="toDate"
                          name="toDate"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-2">
                      <button className="btn addBtn text-white mt-md-4">Filter</button>
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
              <Card.Title>List of Scheduled Interviews</Card.Title>
              <hr />
              <Table borderless className="table table-hover" responsive>
                <thead className="thead-dark">
                  <tr>
                    <th>S.No.</th>
                    <th>Candidate Name</th>
                    <th>Date & Time</th>
                    <th>Technology</th>
                    <th>Experience</th>
                    <th>Status</th>
                    <th>Notes</th>
                    <th>Scheduled By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
                    <td>Table cell</td>
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

export default Scheduled;
