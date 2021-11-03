import React from "react";

// utils
import { useAppContext } from "AppContext/ContextProvider";
import filterArrayOfStudents from "./filterArrayOfStudents";
import { useSearchContext } from "AppContext/SearchContext";
import useBreakpoints from "Hooks/useBreakpoints.hook";

// components
import TablePaginationActions from "Components/TablePagination";
import TableContainer from "Components/TableContainer";
import CenterWrapper from "Components/Styled/CenterWrapper";

// mui
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TablePagination from "@mui/material/TablePagination";
import Typography from "@mui/material/Typography";
import TableFooter from "@mui/material/TableFooter";
import Checkbox from "@mui/material/Checkbox";

const StudentsView = () => {
  const [page, setPage] = React.useState<number>(0);

  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);

  const { studentsData } = useAppContext();

  const { isXs } = useBreakpoints();

  const { inputValue: searchInputValue } = useSearchContext();

  const rows = filterArrayOfStudents(studentsData, searchInputValue);

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.BaseSyntheticEvent) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableHeaders = [
    {
      title: "Imię i Nazwisko",
    },
    {
      title: "Status",
    },
    {
      title: "Ostatnia płatność",
    },
    {
      title: "Dodatkowe Miesiące",
    },
    {
      title: "Suma",
    },
    {
      title: "Płatność",
    },
    {
      title: "Mentor",
    },
    {
      title: isXs ? "Przerwa" : "Chwilowa przerwa",
    },
  ];

  const isAnyRowDisplayed = rows.length >= 1;

  return (
    <>
      {isAnyRowDisplayed ? (
        <TableContainer sx={isXs ? { pb: 7 } : {}}>
          <Table stickyHeader sx={{ minWidth: 900 }}>
            <TableHead>
              <TableRow>
                {tableHeaders.map(({ title }, index) => (
                  <TableCell
                    size={isXs ? "small" : "medium"}
                    variant="head"
                    align="center"
                    component="th"
                    scope="row"
                    key={index}
                  >
                    {title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map(
                (
                  {
                    name,
                    paidForCurrentMonth,
                    lastPaymentDate,
                    amount,
                    formOfPayment,
                    prepaidedMonths,
                    actualMentor,
                    tookAbreak,
                  },
                  index,
                ) => (
                  <TableRow hover key={index}>
                    <TableCell variant="body" align="center">
                      {name}
                    </TableCell>
                    <TableCell variant="body" align="center">
                      {paidForCurrentMonth ? (
                        <Typography variant="body2" color="green">
                          Opłacony
                        </Typography>
                      ) : (
                        <Typography variant="body2" color="red">
                          Nieopłacony
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell variant="body" align="center">
                      {lastPaymentDate ? lastPaymentDate : "Brak Danych"}
                    </TableCell>
                    <TableCell align="center">
                      {prepaidedMonths && prepaidedMonths > 0 ? prepaidedMonths : "Brak"}
                    </TableCell>
                    <TableCell
                      sx={isXs ? { width: 100 } : {}}
                      variant="body"
                      align="center"
                    >{`${amount} zł`}</TableCell>
                    <TableCell variant="body" align="center">
                      {formOfPayment}
                    </TableCell>
                    <TableCell sx={isXs ? { width: 150 } : {}} variant="body" align="center">
                      {actualMentor ? actualMentor : "Brak Mentora"}
                    </TableCell>
                    <TableCell variant="body" align="center">
                      <Checkbox size="small" checked={tookAbreak} />
                    </TableCell>
                  </TableRow>
                ),
              )}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
          <TableFooter component="table">
            <TableBody>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[1, 5, 10, 15]}
                  colSpan={2}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  labelRowsPerPage={"Ilość wierszy:"}
                  labelDisplayedRows={({ from, to, count }) => {
                    return `${from}-${to}/${count !== -1 ? count : `Więcej niż ${to}`}`;
                  }}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableBody>
          </TableFooter>
        </TableContainer>
      ) : (
        <CenterWrapper sx={{ height: "90vh" }}>
          <Typography variant="button" color="primary">
            Brak wyników wyszukiwania
          </Typography>
        </CenterWrapper>
      )}
    </>
  );
};

export default StudentsView;
