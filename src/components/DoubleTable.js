import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function TwoTablesDialog() {
  // Dados para a primeira tabela
  const table1Data = [
    { id: 1, name: "João", country: "Brasil" },
    { id: 2, name: "Maria", country: "Brasil" },
    { id: 3, name: "José", country: "Brasil" },
  ];

  // Dados para a segunda tabela
  const table2Data = [
    { id: 1, name: "Carlos", country: "Argentina" },
    { id: 2, name: "Lucia", country: "Argentina" },
    { id: 3, name: "Yuki", country: "Japão" },
  ];

  // Estado para controle do Dialog
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        DOUBLE TABLE
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Tabelas de Funcionários</DialogTitle>
        <DialogContent>
          {/* Primeira Tabela */}
          <TableContainer component={Paper} style={{ marginBottom: "16px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>País</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {table1Data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.country}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Segunda Tabela */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>País</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {table2Data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.country}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
