import React from "react";
import Navbar from "../../../Utils/Navbar";
import { Card, Table } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const ViewJudgement = () => {

    const navigate  = useNavigate();

  return (
    <>
      <Navbar />
            <div className="m-3">
               <Link className="d-flex align-items-center text-decoration-none text-black" to={navigate(-1)}><FaArrowLeft size={22} /> <span className="ms-2">Back</span></Link> 
            </div>
      <div className="container">
            <div className="row mt-4">
                <div className="col-4">
                    <Card className="dashboard-card">
                        <Card.Title className="p-3 pb-0">Candidate Information</Card.Title>
                        <hr className="pb-0 mb-0" />
                        <Card.Body>
                            <Table>
                                <tbody>
                                    <tr>
                                        <th scope="row">Name:</th>
                                        <td>Ayush Acharya</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Experience:</th>
                                        <td>10 yrs</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Technology:</th>
                                        <td>Salesforce</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Date:</th>
                                        <td>21/08/2023</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Status:</th>
                                        <td>Shortlisted</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Resume:</th>
                                        <td><button className="btn addBtn text-white">Download</button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-8">
                <Card className="mb-4 dashboard-card">
                        <Card.Title className="p-3 pb-0">Result Information</Card.Title>
                        <hr className="pb-0 mb-0" />
                        <Card.Text className="p-3 pb-0 mb-0">
                            <div className="row">
                                <div className="col-6">
                                    <strong>Scheduled By:</strong> Mahima Jain
                                </div>
                                <div className="col-6">
                                <strong>Interviewed By:</strong> Priya Choudhry
                                </div>
                            </div>
                        </Card.Text>
                        <hr className="pb-0 mb-0" />
                        <Card.Body>
                            <Table>
                                <thead>
                                    <th>S.No.</th>
                                    <th>Category</th>
                                    <th>Obt. Marks</th>
                                    <th>Maximum</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Pupose</td>
                                        <td>3.5</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Value Additionality & Compatibility With Sales</td>
                                        <td>6.5</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Presentation (English Communication, Soft Skills)</td>
                                        <td>5</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Coachability*</td>
                                        <td>9.5</td>
                                        <td>10</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Stability / Consistentancy</td>
                                        <td>6</td>
                                        <td>10</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Card.Footer className="bg-white" style={{border: "none"}}>
                                <Card.Text>
                                    <strong>Scoring:</strong> 61.5%
                                </Card.Text>
                                <Card.Text>
                                    <strong>Reason:</strong> Selected on the basis of conversation, good in communication and holding strong knowledge.
                                </Card.Text>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </>
  );
};

export default ViewJudgement;
