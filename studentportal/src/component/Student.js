import { Component } from "react";
import Data from "../Data";
class Student extends Component {

    constructor() {
        super();
        this.state = {
            studentList: Data,
            branchList: ["CS", "IT", "EC", "CV", "MECH"],
            defaultBranch: "All"
        }
    }

    addStudent = () => {
        let Rollnumber = this.rollInput.value;
        let name = this.nameInput.value;
        let Contact = this.contactInput.value;
        let Branch = this.branchInput.value;

        if (!Rollnumber || !name || !Contact || !Branch) {
            window.alert("Please fill all the fields")
        }
        else {
            if (this.state.studentList.filter((student) => { return student.Rollnumber == Rollnumber })) {
                window.alert("Roll number already exists")
            }
            else {
                let newStudent = { name, Rollnumber, Contact, Branch };
                this.setState({ studentList: [...this.state.studentList, newStudent] })
            }
        }
    }

    removeStudent = (roll) => {
        if (window.confirm("Do you want to delete it ?")) {
            let index = this.state.studentList.findIndex((student) => { return student.Rollnumber == roll });
            this.state.studentList.splice(index, 1);
            this.setState({ studentList: [...this.state.studentList] });
        }
    }

    render() {
        return <>

            <div className="bg-success p-2 d-flex justify-content-center text-white"><span style={{ fontWeight: "bolder", fontSize: "20px" }}>Student Portal</span></div>

            <div className="container mt-3 mb-3" style={{ marginLeft: "120px" }}>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a Roll number"
                            ref={(rollObject) => this.rollInput = rollObject}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a Name"
                            ref={(nameObject) => { this.nameInput = nameObject }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter a contact"
                            ref={(contactObject) => { this.contactInput = contactObject }}
                        />
                    </div>

                    <div className="col-md-6 mb-3">
                        <select
                            className="form-control"
                            ref={(branchObject) => { this.branchInput = branchObject }}
                        >
                            <option value="">Select Branch</option>
                            {this.state.branchList.map((branch, index) => {
                                return <option key={index} value={branch}>{branch}</option>
                            })}
                        </select>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6 mb-3">
                        <button onClick={this.addStudent} className="btn btn-primary">Add</button>
                    </div>

                    <div className="col-md-6 mb-3">
                        <button onClick={() => this.setState({ defaultBranch: "CS" })} className="btn btn-primary mr-2">CS({this.state.studentList.filter((student) => { return student.Branch == "CS" }).length})</button>

                        <button onClick={() => this.setState({ defaultBranch: "IT" })} className="btn btn-success mr-2">IT({this.state.studentList.filter((student) => { return student.Branch == "IT" }).length})</button>

                        <button onClick={() => this.setState({ defaultBranch: "CE" })} className="btn btn-dark mr-2">CE({this.state.studentList.filter((student) => { return student.Branch == "CE" }).length})</button>

                        <button onClick={() => this.setState({ defaultBranch: "MECH" })} className="btn btn-info mr-2">MECH({this.state.studentList.filter((student) => { return student.Branch == "MECH" }).length})</button>

                        <button onClick={() => this.setState({ defaultBranch: "EC" })} className="btn btn-secondary mr-2">EC({this.state.studentList.filter((student) => { return student.Branch == "EC" }).length})</button>

                        <button onClick={() => this.setState({ defaultBranch: "All" })} className="btn btn-warning mr-2">Total({this.state.studentList.length})</button>
                    </div>
                </div>
            </div>

            <div className="container mt-3">
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>Rollnumber</th>
                            <th>Name</th>
                            <th>Branch</th>
                            <th>Contact</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.studentList.filter((student) => { return student.Branch == this.state.defaultBranch || this.state.defaultBranch == "All" }).map((item, index) => {
                                return <tr key={index} className="text-center">
                                    <td>{item.Rollnumber}</td>
                                    <td>{item.name}</td>
                                    <td>{item.Branch}</td>
                                    <td>{item.Contact}</td>
                                    <td><button className="btn btn-danger" onClick={() => this.removeStudent(item.Rollnumber)}>remove</button></td>
                                </tr>
                            })
                        }
                    </tbody>

                </table>
            </div >


        </>
    }
}

export default Student;
