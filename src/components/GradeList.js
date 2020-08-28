import React from 'react';
import Grade from "./Grade";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class GradeList extends React.Component {

    render() {
        return (
            < Container >

                <Row>

                    <Col md={2}></Col>

                    <Col md={8}>
                        <div className="gradeTable">
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>
                                            Course
                                     </th>
                                        <th>
                                            HP
                                         </th>
                                        <th>
                                            Grade
                                         </th>

                                        <th>

                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.grades.map(x => <Grade key={x.id} grade={x.grade} course={x.course} points={x.points} id={x.id} rem={this.props.rem} />)}
                                </tbody>
                            </Table>

                        </div>

                    </Col>

                    <Col md={2}></Col>

                </Row>

            </Container >
        );
    }
}

export default GradeList; 