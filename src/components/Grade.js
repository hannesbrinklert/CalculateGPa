import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class Grade extends React.Component {
    render() {
        return (
            <tr className="oneRow">
                <td>
                    <p className="course" key="course">{this.props.course}</p>
                </td>

                <td>
                    <p className="points" key="points">{this.props.points}</p>
                </td>

                <td>
                    <p className="grade" key="grade">{this.props.grade}</p>
                </td>
                <td>
                    <Button variant="danger" className="btnRemove" onClick={() => { this.props.rem(this.props.id) }}>Remove</Button>
                </td>

            </tr>
        );

    }
}

export default Grade;