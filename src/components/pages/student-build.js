// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Dialog from "@mui/material/Dialog";
// // import DialogActions from "@mui/material/DialogActions";
// import Grid from "@mui/material/Grid";
// import Stack from "@mui/material/Stack";
// import { nanoid } from "nanoid";

// import rows from "../rows-data.json";
// import ReadOnlyRows from "../layouts/readOnlyRows";
// import EditableRow from "../layouts/editableRow";

// import "../css/students.css";

// const StudentsBuild = (props) => {
//   // const [tableHidden, setTableHidden] = useState(false);
//   // const handleAdd = () => setTableHidden(true);
//   // const handleSubmit = () => setTableHidden(false);

//   const [addForm, setAddForm] = useState(false);
//   const [editForm, setEditForm] = useState(false);
//   const handleAddOpen = () => {
//     setAddForm(true);
//   };
//   const handleEditOpen = () => {
//     setEditForm(true);
//   };

//   const handleAddClose = () => {
//     setAddForm(false);
//   };
//   const handleEditClose = () => {
//     setEditForm(false);
//   };

//   const [students, setStudents] = useState(rows);
//   const [addFormData, setAddFormData] = useState({
//     Name: "",
//     Age: "",
//     Course: "",
//     Batch: "",
//   });

//   const [editFormData, setEditFormData] = useState({
//     Name: "",
//     Age: "",
//     Course: "",
//     Batch: "",
//   });

//   const [editStudentId, setEditStudentId] = useState(null);

//   const handleAddFormChange = (event) => {
//     event.preventDefault();

//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...addFormData };
//     newFormData[fieldName] = fieldValue;

//     setAddFormData(newFormData);
//   };

//   const handleEditFormChange = (event) => {
//     event.preventDefault();
//     const fieldName = event.target.getAttribute("name");
//     const fieldValue = event.target.value;

//     const newFormData = { ...editFormData };
//     newFormData[fieldName] = fieldValue;

//     setEditFormData(newFormData);
//   };

//   const handleAddFormSubmit = (event) => {
//     event.preventDefault();

//     const newStudent = {
//       Id: nanoid(),
//       Name: addFormData.Name,
//       Age: addFormData.Age,
//       Course: addFormData.Course,
//       Batch: addFormData.Batch,
//     };

//     const newStudents = [...students, newStudent];
//     setStudents(newStudents);
//   };

//   const handleEditClick = (e, student) => {
//     e.preventDefault();
//     setEditStudentId(student.Id);

//     const formValues = {
//       Name: student.Name,
//       Age: student.Age,
//       Course: student.Course,
//       Batch: student.Batch,
//     };

//     setEditFormData(formValues);
//   };

//   const handleEditFormSubmit = (event) => {
//     event.preventDefault();

//     const editedStudent = {
//       Id: editStudentId,
//       Name: editFormData.Name,
//       Age: editFormData.Age,
//       Course: editFormData.Course,
//       Batch: editFormData.Batch,
//     };

//     const newStudents = [...students];
//     const index = students.findIndex((student) => student.Id === editStudentId);

//     newStudents[index] = editedStudent;
//     setStudents(newStudents);
//     setEditStudentId(null);
//   };

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem("Students_Details"));
//     setStudents(data);
//     console.log(data);
//   }, []);

//   useEffect(() => {
//     if ("Students_Details")
//       localStorage.setItem("Students_Details", JSON.stringify(students));
//   }, [students]);

//   return (
//     <>
//       <div className="data-table">
//         <header className="header">
//           <span className="title">Students Details</span>
//           <Button variant="contained" onClick={handleAddOpen}>
//             Add new student
//           </Button>
//         </header>

//         <form onSubmit={handleEditFormSubmit}>
//           <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 450 }} aria-label="simple table">
//               <TableHead>
//                 <TableRow>
//                   <TableCell>Name</TableCell>
//                   <TableCell align="right">Age</TableCell>
//                   <TableCell align="right">Course</TableCell>
//                   <TableCell align="right">Batch</TableCell>
//                   <TableCell align="right">Change</TableCell>
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//                 {students.map((student) => (
//                   <TableRow
//                     key={student.Id}
//                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                   >
//                     {editStudentId === student.Id ? (
//                       <EditableRow
//                         open={editForm}
//                         handleClose={handleEditClose}
//                         editFormData={editFormData}
//                         handleEditFormChange={handleEditFormChange}
//                         handleEditFormSubmit={handleEditFormSubmit}
//                       />
//                     ) : null}

//                     <ReadOnlyRows
//                       student={student}
//                       handleOpen={handleEditOpen}
//                       handleEditClick={handleEditClick}
//                     />
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </form>
//       </div>
//       <Outlet />

//       {/* New Student Form */}
//       <Dialog open={addForm} onClose={handleAddClose}>
//         <div className="student-form">
//           <form onSubmit={handleAddFormSubmit}>
//             <Grid container spacing={4}>
//               <Grid item xs={6}>
//                 <TextField
//                   type="text"
//                   id="outlined-basic"
//                   name="Name"
//                   label="Name"
//                   variant="outlined"
//                   style={{ width: "10rem" }}
//                   onChange={handleAddFormChange}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   type="text"
//                   id="outlined-basic"
//                   name="Age"
//                   label="Age"
//                   variant="outlined"
//                   style={{ width: "10rem" }}
//                   onChange={handleAddFormChange}
//                 />
//               </Grid>{" "}
//               <Grid item xs={6}>
//                 <TextField
//                   type="text"
//                   id="outlined-basic"
//                   name="Course"
//                   label="Course"
//                   variant="outlined"
//                   style={{ width: "10rem" }}
//                   onChange={handleAddFormChange}
//                 />
//               </Grid>
//               <Grid item xs={6}>
//                 <TextField
//                   type="text"
//                   id="outlined-basic"
//                   name="Batch"
//                   label="Batch"
//                   variant="outlined"
//                   style={{ width: "10rem" }}
//                   onChange={handleAddFormChange}
//                 />
//               </Grid>
//             </Grid>

//             <Stack spacing={10} direction="row" margin={4}>
//               <Button
//                 onClick={handleAddClose}
//                 variant="outlined"
//                 size="large"
//                 color="secondary"
//               >
//                 Cancel
//               </Button>
//               <Button
//                 type="submit"
//                 onClick={handleAddClose}
//                 variant="contained"
//                 size="large"
//               >
//                 Submit
//               </Button>
//             </Stack>
//           </form>
//         </div>
//       </Dialog>
//     </>
//   );
// };

// export default StudentsBuild;

import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { nanoid } from "nanoid";

import rows from "../rows-data.json";
import ReadOnlyRows from "../layouts/readOnlyRows";
import EditableRow from "../layouts/editableRow";

import "../css/students.css";

const StudentsBuild = (props) => {
  // const [tableHidden, setTableHidden] = useState(false);
  // const handleAdd = () => setTableHidden(true);
  // const handleSubmit = () => setTableHidden(false);

  const [addForm, setAddForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const handleAddOpen = () => {
    setAddForm(true);
  };
  const handleEditOpen = () => {
    setEditForm(true);
  };

  const handleAddClose = () => {
    setAddForm(false);
  };
  const handleEditClose = () => {
    setEditForm(false);
  };

  const [students, setStudents] = useState(rows);
  const [addFormData, setAddFormData] = useState({
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  });

  const [editFormData, setEditFormData] = useState({
    Name: "",
    Age: "",
    Course: "",
    Batch: "",
  });

  const [editStudentId, setEditStudentId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      Id: nanoid(),
      Name: addFormData.Name,
      Age: addFormData.Age,
      Course: addFormData.Course,
      Batch: addFormData.Batch,
    };

    const newStudents = [...students, newStudent];
    setStudents(newStudents);
  };

  const handleEditClick = (e, student) => {
    e.preventDefault();
    setEditStudentId(student.Id);

    const formValues = {
      Name: student.Name,
      Age: student.Age,
      Course: student.Course,
      Batch: student.Batch,
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedStudent = {
      Id: editStudentId,
      Name: editFormData.Name,
      Age: editFormData.Age,
      Course: editFormData.Course,
      Batch: editFormData.Batch,
    };

    const newStudents = [...students];
    const index = students.findIndex((student) => student.Id === editStudentId);

    newStudents[index] = editedStudent;
    setStudents(newStudents);
    setEditStudentId(null);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Students_Details"));
    setStudents(data);
    console.log(data);
  }, []);

  useEffect(() => {
    if ("Students_Details")
      localStorage.setItem("Students_Details", JSON.stringify(students));
  }, [students]);

  return (
    <>
      <div className="data-table">
        <header className="header">
          <span className="title">Students Details</span>
          <Button variant="contained" onClick={handleAddOpen}>
            Add new student
          </Button>
        </header>

        <form onSubmit={handleEditFormSubmit}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 450 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Course</TableCell>
                  <TableCell align="right">Batch</TableCell>
                  <TableCell align="right">Change</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {students.map((student) => (
                  <TableRow
                    key={student.Id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {editStudentId === student.Id ? (
                      <EditableRow
                        open={editForm}
                        handleClose={handleEditClose}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleEditFormSubmit={handleEditFormSubmit}
                      />
                    ) : null}

                    <ReadOnlyRows
                      student={student}
                      handleOpen={handleEditOpen}
                      handleEditClick={handleEditClick}
                    />
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </form>
      </div>
      <Outlet />

      {/* New Student Form */}
      <Dialog open={addForm} onClose={handleAddClose}>
        <div className="student-form">
          <form onSubmit={handleAddFormSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  id="outlined-basic"
                  name="Name"
                  label="Name"
                  variant="outlined"
                  style={{ width: "10rem" }}
                  onChange={handleAddFormChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  id="outlined-basic"
                  name="Age"
                  label="Age"
                  variant="outlined"
                  style={{ width: "10rem" }}
                  onChange={handleAddFormChange}
                />
              </Grid>{" "}
              <Grid item xs={6}>
                <TextField
                  type="text"
                  id="outlined-basic"
                  name="Course"
                  label="Course"
                  variant="outlined"
                  style={{ width: "10rem" }}
                  onChange={handleAddFormChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  type="text"
                  id="outlined-basic"
                  name="Batch"
                  label="Batch"
                  variant="outlined"
                  style={{ width: "10rem" }}
                  onChange={handleAddFormChange}
                />
              </Grid>
            </Grid>

            <Stack spacing={10} direction="row" margin={4}>
              <Button
                onClick={handleAddClose}
                variant="outlined"
                // size="large"
                // color="secondary"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                onClick={handleAddClose}
                variant="contained"
                size="large"
              >
                Submit
              </Button>
            </Stack>
          </form>
        </div>
      </Dialog>
    </>
  );
};

export default StudentsBuild;
