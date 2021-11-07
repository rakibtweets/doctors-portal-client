import React, { useState, useEffect } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Appointments = ({ date }) => {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/appointments?email=${user?.email}&date=${date}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
      });
  }, [date]);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography
          variant="h5"
          sx={{ color: '#1CC7C1', fontSize: 16, fontWeight: 500 }}
        >
          Appointments {appointments.length}
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: '#8B8888', fontSize: 16, fontWeight: 500 }}
        >
          {date.toDateString()}
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ w: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ color: '#8B8888', fontSize: 16 }}>
                Name
              </TableCell>
              <TableCell align="center" sx={{ color: '#8B8888', fontSize: 16 }}>
                Service
              </TableCell>
              <TableCell sx={{ color: '#8B8888', fontSize: 16 }} align="center">
                Schedule
              </TableCell>
              <TableCell sx={{ color: '#8B8888', fontSize: 16 }} align="center">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow
                key={appointment._id}
                sx={{
                  '&:last-child td, &:last-child th': { border: 0 },
                }}
              >
                <TableCell
                  align="center"
                  sx={{ color: '#0A0A0A', fontSize: 14, fontWeight: 'bold' }}
                  component="th"
                  scope="row"
                >
                  {appointment.patientName}
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ color: '#0A0A0A', fontSize: 14, fontWeight: 'bold' }}
                  component="th"
                  scope="row"
                >
                  {appointment?.serviceName}
                </TableCell>
                <TableCell
                  sx={{ color: '#0A0A0A', fontSize: 14, fontWeight: 500 }}
                  align="center"
                >
                  {appointment.time}
                </TableCell>
                <TableCell
                  sx={{ color: 'tomato', fontSize: 14, fontWeight: 500 }}
                  align="center"
                >
                  Delete
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Appointments;
