import MUIDataTable from "mui-datatables";
import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";
import "./style.css";

const Dashboard = () => {
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
      name: "candidateName",
      label: "Candidate Name",
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
      name: "experience",
      label: "Experience",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "hrDecision",
      label: "HR Decision",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "hrName",
      label: "HR Name",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    {
      sno: "1",
      candidateName: "Rahul Soni",
      technology: "ReactJs",
      experience: "1-2 years",
      hrDecision: "Shortlisted",
      hrName: "Ritika Singh",
    },
  ];

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col">
          <Card className="dashboard-card" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Dashboard</Card.Title>
              <hr />
              <Card.Text>
                <div className="row">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <Card.Subtitle className="mb-2 text-muted">
                      Filter By Range
                    </Card.Subtitle>
                    <Form.Select aria-label="Default select example">
                      <option selected>Please select range</option>
                      <option value="this_month">This Month</option>
                      <option value="last_month">Last Month</option>
                      <option value="this_week">This Week</option>
                      <option value="last_week">Last Week</option>
                    </Form.Select>
                  </div>
                  <div className="col-12 col-md-6">
                    <Card.Subtitle className="mb-2 text-muted">
                      Filter By HR
                    </Card.Subtitle>
                    <Form.Select aria-label="Default select example">
                      <option selected>Please select HR</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col-12 col-md-3">
                    <Link to="/scheduled" className="text-decoration-none">
                      <Card className="tab-card mb-3 bg-c-blue">
                        <Card.Body className="d-flex justify-content-center align-items-center">
                          {" "}
                          <div
                            className="text-center"
                            style={{ fontWeight: "700", fontSize: "18px" }}
                          >
                            <p>Scheduled</p>
                            <p>{0}</p>
                          </div>{" "}
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                  <div className="col-12 col-md-3">
                    <Link to="/shortlisted" className="text-decoration-none">
                      <Card className="tab-card mb-3 bg-c-green">
                        <Card.Body className="d-flex justify-content-center align-items-center">
                          {" "}
                          <div
                            className="text-center"
                            style={{ fontWeight: "700", fontSize: "18px" }}
                          >
                            <p>Shortlisted</p>
                            <p>{0}</p>
                          </div>{" "}
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                  <div className="col-12 col-md-3">
                    <Link to="/onHold" className="text-decoration-none">
                      <Card className="tab-card mb-3 bg-c-yellow">
                        <Card.Body className="d-flex justify-content-center align-items-center">
                          {" "}
                          <div
                            className="text-center"
                            style={{ fontWeight: "700", fontSize: "18px" }}
                          >
                            <p>On Hold</p>
                            <p>{0}</p>
                          </div>{" "}
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                  <div className="col-12 col-md-3">
                    <Link to="/rejected" className="text-decoration-none">
                      <Card className="tab-card mb-3 bg-c-pink">
                        <Card.Body className="d-flex justify-content-center align-items-center">
                          {" "}
                          <div
                            className="text-center"
                            style={{ fontWeight: "700", fontSize: "18px" }}
                          >
                            <p>Rejected</p>

                            <p>0</p>
                          </div>{" "}
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row mt-3 mb-4">
        <div className="col">
          {/* <Card>
            <Card.Body>
              <Card.Title>Candidates</Card.Title>
              <hr />
              <Table borderless className="table table-hover" responsive>
                <thead className="thead-dark">
                  <tr>
                    <th>S.No.</th>
                    <th>Candidate Name</th>
                    <th>Technology</th>
                    <th>Experience</th>
                    <th>HR Decision</th>
                    <th>HR Name</th>
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
                  </tr>
                  <tr>
                    <td>2</td>
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
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card> */}

          <MUIDataTable
            title={"Candidates List"}
            data={data}
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
