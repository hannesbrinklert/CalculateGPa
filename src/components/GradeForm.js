import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class GradeForm extends React.Component {

    state = {

        course: "",
        points: "",
        grade: "U",
        id: 0,
    };

    handleGrade = (event) => {
        //event.preventDefault();

        if (this.state.course.length === 0) {
            alert("Please write a course name")
        }
        else if (parseInt(this.state.points) <= 0) {
            alert("HP must be lager than 0")
        } else {
            this.setState({ id: this.state.id + 1 })
            this.props.onSubmit(this.state);

            this.setState({
                course: "",
                points: "",
                grade: "U",
            });
        }

    }

    render() {
        return (

            <Container>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <InputGroup>
                            <Form.Control type="text" value={this.state.course} onChange={(event) => this.setState({ course: event.target.value })} placeholder="Course" />
                            <Form.Control type="number" value={this.state.points} onChange={(event) => this.setState({ points: event.target.value })} placeholder="HP" />
                            <Form.Control as="select" name="selectGrade" onChange={(event) => this.setState({ grade: event.target.value })} value={this.state.grade}>
                                <option value="U">U</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Form.Control>
                            <InputGroup.Append>
                                <Button variant="success" onClick={this.handleGrade}>Add Grade</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>

                    <Col md={2}></Col>
                </Row>

            </Container>
        );
    }
}

export default GradeForm;