import React from "react";
import { Link } from "react-router-dom";
import TableCell from "@mui/material/TableCell";

const ReadOnlyRows = ({ student, handleOpen, handleEditClick }) => {
  return (
    <>
      <TableCell component="th" scope="row">
        {student.Name}
      </TableCell>
      <TableCell align="right">{student.Age}</TableCell>
      <TableCell align="right">{student.Course}</TableCell>
      <TableCell align="right">{student.Batch}</TableCell>
      <TableCell align="right">
        <Link
          onClick={(e) => {
            handleEditClick(e, student);
            handleOpen();
          }}
        >
          Edit
        </Link>
      </TableCell>
    </>
  );
};

export default ReadOnlyRows;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./layout.css";
// // import TableCell from "@mui/material/TableCell";

// const ReadOnlyRows = ({ student, handleOpen, handleEditClick }) => {
//   return (
//     <>
//       <table>
//         <tr className="table-data">
//           <td>{student.Name}</td>
//           <td>{student.Age}</td>
//           <td>{student.Course}</td>
//           <td>{student.Batch}</td>
//           <Link
//             onClick={(e) => {
//               handleEditClick(e, student);
//               handleOpen();
//             }}
//           >
//             Edit
//           </Link>
//         </tr>
//       </table>
//     </>
//   );
// };

// export default ReadOnlyRows;
