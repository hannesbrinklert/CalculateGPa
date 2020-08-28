import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class GradeCalc extends React.Component {


    sum() {
        return (this.props.grades.map(x => parseFloat(x.points)).reduce((a, b) => a + b, 0)).toFixed(2)
    }

    avg() {
        let list = this.props.grades
        let totalSum = 0
        for (let i = 0; i < list.length; i++) {
            if (list[i].grade !== "U") {
                totalSum += (parseFloat(list[i].points * parseFloat(list[i].grade)))
            }
        }
        if (totalSum === 0) {
            return 0
        } else {
            return (totalSum / this.sum()).toFixed(2)
        }

    }

    render() {
        return (
            <Container className="calculation">
                <Row>
                    <Col md={2}></Col>
                    <Col md={4}>
                        <p><b>Sum HP: </b>{this.sum()}</p>
                    </Col>
                    <Col md={4}>
                        <p><b>GPa: </b>{this.avg()}</p>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        );
    }
}

export default GradeCalc