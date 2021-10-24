import React from "react";

// utils
import { useAppContext } from "AppContext/ContextProvider";
import getPaymentTableRows from "./getPaymentTableRows";

// components
//import TableContainer from "Components/TableContainer";

// mui
import TableContainer from "@mui/material/TableContainer";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

const PaymentView = () => {
  const { summarizedPayments } = useAppContext();

  const headers = [
    {
      title: "Okres Podsumowania",
    },
    {
      title: "Przychody",
    },
    {
      title: "Opłacone",
    },
    {
      title: "Nieopłacone",
    },
  ];

  const rows = getPaymentTableRows(summarizedPayments);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(({ title }, index) => (
              <TableCell align="center" key={index}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(({ name, amount, payed, notPayed }, index) => (
            <TableRow key={index}>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                {name}
              </TableCell>
              <TableCell align="center">{`${amount} zł`}</TableCell>
              <TableCell align="center">{`${payed} zł`}</TableCell>
              <TableCell align="center">{`${notPayed} zł`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaymentView;
