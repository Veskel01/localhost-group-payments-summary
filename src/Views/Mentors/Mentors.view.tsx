import React from "react";

// utils
import { useAppContext } from "AppContext/ContextProvider";

// components
import TableContainer from "Components/TableContainer";

// mui
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

const MentorsView = () => {
  const { studentsData } = useAppContext();

  const mentors = studentsData.reduce((acc, { actualMentor }) => {
    if (actualMentor) acc.push(actualMentor);

    return acc;
  }, [] as string[]);

  const mentorsCounts = {} as Record<string, number>;

  mentors.forEach((mentor) => (mentorsCounts[mentor] = (mentorsCounts[mentor] || 0) + 1));

  const rows = Object.entries(mentorsCounts).reduce(
    (acc, [mentorName, numberOfStudents]) => {
      acc.push({
        mentorName,
        numberOfStudents,
      });

      return acc;
    },
    [] as {
      mentorName: string;
      numberOfStudents: number;
    }[],
  );

  const headers = [
    {
      title: "Nazwa Mentora",
    },
    {
      title: "Liczba aktualnych studentów",
    },
  ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(({ title }) => (
              <TableCell key={title} align="center">
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ mentorName, numberOfStudents }) => (
            <TableRow key={mentorName}>
              <TableCell align="center">{mentorName}</TableCell>
              <TableCell align="center">{numberOfStudents}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default MentorsView;
