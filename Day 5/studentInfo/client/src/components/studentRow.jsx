import React from "react";

const StudentRow=({student,sn,onViewDetails})=>{
    return(
        <tr className={student.isGraduated?'graduated':""}>
            <td>{sn}</td>
            <td>{student.name}</td>
            <td>{student.grade}</td>
            <td>{student.isGraduated?'yes':'no'}</td>
            <td>{student.address}</td>
            <td>{student.email}</td>
            <td>{student.phone}</td>

            <td>
                <button onClick={()=>onViewDetails(student)}>
                    View Details
                </button>
            </td>
        </tr>
    )
}
export default StudentRow;