import React from "react";
import StudentRow from "./studentRow";
import { students } from "../data/students";

const StudentTable = ({ students, onViewDetails }) => {
    return (
        <table className="student-table">
            <thead>
                <tr>
                    <th>S.N.</th>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Graduated</th>
                    <th>Address</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => {
                    <StudentRow
                        key={student.id}
                        student={student}
                        sn={index + 1}
                        onViewDetails={onViewDetails}
                    />
                })}
            </tbody>

        </table>
    );
};
export default StudentTable;