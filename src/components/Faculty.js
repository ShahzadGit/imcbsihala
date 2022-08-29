import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import facultyImg from './../images/faculty.jpg';
import drAli from './../images/drAli.jpg';
import haider from './../images/haider.jpg';
import zohaib from './../images/zohaib.jpg';
import maqsood from './../images/maqsood.jpg';
import shahzad from './../images/shahzad.jpg';
import nazir from './../images/nazir.jpg';
import usman from './../images/usman.jpg';
import rizwan from './../images/rizwan.jpg';
import mehmood from './../images/mehmood.jpg'
import hamid from './../images/hamid.jpg'
import abbas from './../images/abbas.jpg'
import farhan from './../images/farhan.jpg'
import aLatif from './../images/aLatif.jpg'
import hazrat from './../images/hazrat.jpg'
import bilal from './../images/bilal.jpg'
import aGhaffar from './../images/aGhaffar.jpg'
import nasir from './../images/nasir.jpg'
import ishfaq from './../images/ishfaq.jpg'
import zahoor from './../images/Principal.jpg'
import anees from './../images/anees.jpg'
import shakeel from './../images/shakeel.jpg'


export default function Faculty() {
    return (
        <div>
            <Accordion style={{ width: '80%', margin: '0 auto' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Department of Biology</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={drAli} />
                                    <Card.Body>
                                        <Card.Title>Dr. Ali Rehman</Card.Title>
                                        <Card.Text>
                                        Associate Professor <br/> Vice Principal (Academics) <br/>PhD-Botony (Peshawar University)
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={haider} />
                                    <Card.Body>
                                        <Card.Title>Mr. Haider Ali</Card.Title>
                                        <Card.Text>
                                            Assistant Professor <br/> Msc-Botony (Peshawar University)
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                <Accordion.Header>Department of Commerce</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={zohaib} />
                                    <Card.Body>
                                        <Card.Title>Mr. Zohaib Zafar</Card.Title>
                                        <Card.Text>
                                            Lecturer <br/>M.COM
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                          
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                <Accordion.Header>Department of Computer Science</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={maqsood} />
                                    <Card.Body>
                                        <Card.Title>Mr. Maqsood Iqbal Nasir</Card.Title>
                                        <Card.Text>
                                            Assistant Professor    
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={shahzad} />
                                    <Card.Body>
                                        <Card.Title>Mr. Shahzad Ahmed</Card.Title>
                                        <Card.Text>
                                            Lecturer <br />MS(IST)-Computer Science <br/>QAU, Islamabad
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                <Accordion.Header>Department of Civics and Political Science</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={nazir} />
                                    <Card.Body>
                                        <Card.Title>Nazir Muhammad</Card.Title>
                                        <Card.Text>
                                            Lecturer<br />M.A. Political Science<br/>(Abdul Wali Khan University)
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                <Accordion.Header>Department of Chemistry</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={usman} />
                                    <Card.Body>
                                        <Card.Title>Muhammad Usman</Card.Title>
                                        <Card.Text>
                                            Assistant Professor<br/>Msc. Chemistry<br/>Punjab University
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                <Accordion.Header>Department of Economics</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={rizwan} />
                                    <Card.Body>
                                        <Card.Title>Muhammad Rizwan</Card.Title>
                                        <Card.Text>
                                            Assistant Professor<br/>M.Phil-Economics<br/>QAU, Islamabad
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={mehmood} />
                                    <Card.Body>
                                        <Card.Title>Mehmood Hussain</Card.Title>
                                        <Card.Text>
                                            Lecturer<br/>Msc-Economics<br/>(University of Sindh)
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                <Accordion.Header>Department of English</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={facultyImg} />
                                    <Card.Body>
                                        <Card.Title>Shujaat Hussain</Card.Title>
                                        <Card.Text>
                                            Assistant Professor    
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={hamid} />
                                    <Card.Body>
                                        <Card.Title>Hamid Ali</Card.Title>
                                        <Card.Text>
                                            Lecturer<br/>MA-English
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                <Accordion.Header>Department of Geoghraphy</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={abbas} />
                                    <Card.Body>
                                        <Card.Title>Abbas Haider</Card.Title>
                                        <Card.Text>
                                            Lecturer
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="8">
                <Accordion.Header>Department of History</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={farhan} />
                                    <Card.Body>
                                        <Card.Title>Muhammad Farhan Azam</Card.Title>
                                        <Card.Text>
                                            Assistant Professor<br/>MA-History<br/>University of Karachi
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={aLatif} />
                                    <Card.Body>
                                        <Card.Title>Abdul Latif</Card.Title>
                                        <Card.Text>
                                            Lecturer<br/>
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="11">
                <Accordion.Header>Department of Health and Physical Education</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={hazrat} />
                                    <Card.Body>
                                        <Card.Title>Hazrat Rehman</Card.Title>
                                        <Card.Text>
                                            Lecturer<br/>M.Sc-Health and Physical Edu.<br/>(Karachi University)
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="9">
                <Accordion.Header>Department of Islamic Studies</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={aGhaffar} />
                                    <Card.Body>
                                        <Card.Title>Abdul Ghaffar</Card.Title>
                                        <Card.Text>
                                            Lecturer<br/>
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={bilal} />
                                    <Card.Body>
                                        <Card.Title>Muhammad Bilal</Card.Title>
                                        <Card.Text>
                                            Lecturer<br/>
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="14">
                <Accordion.Header>Department of Maths</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={nasir} />
                                    <Card.Body>
                                        <Card.Title>Nasir Abbas</Card.Title>
                                        <Card.Text>
                                            Lecturer<br/>M.Sc-Mathematics<br/>(Punjab University)
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="10">
                <Accordion.Header>Department of Physics</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={ishfaq} />
                                    <Card.Body>
                                        <Card.Title>Ishfaq Ahmed</Card.Title>
                                     <Card.Text>
                                     Associate Professor <br/> Vice Principal (Admin) <br/>M.Sc (Physics)                            
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="12">
                <Accordion.Header>Department of Statistics</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={zahoor} />
                                    <Card.Body>
                                        <Card.Title>Prof. Zahoor Ahmad</Card.Title>
                                        <Card.Text>
                                            Principal<br/>Associate Professor    
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={facultyImg} />
                                    <Card.Body>
                                        <Card.Title>Mr. Ihsaanullah</Card.Title>
                                        <Card.Text>
                                            Lecturer<br/>Msc-Statistics
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="13">
                <Accordion.Header>Department of Urdu</Accordion.Header>
                    <Accordion.Body >
                        <Row xs={1} md={2} className="g-4" >
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={anees} />
                                    <Card.Body>
                                        <Card.Title>Anees ul Hussnain</Card.Title>
                                        <Card.Text>
                                            Assistant Professor<br/>M.Phil-Urdu<br/>AIOU, Islamabad
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card style={{ width: '60%', margin: '0 auto' }}>
                                    <Card.Img variant="top" src={shakeel} />
                                    <Card.Body>
                                        <Card.Title>Shakeel Ahmed</Card.Title>
                                        <Card.Text>
                                            Lecturer<br/>M.Phil-Urdu<br/>(FUUAST, Islamabad)
                                            </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
