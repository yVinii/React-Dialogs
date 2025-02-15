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
  Collapse,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

export default function EmployeeTableDialog() {
  // Dados dos funcionários
  const employees = [
    { name: "João", country: "Brasil" },
    { name: "Maria", country: "Brasil" },
    { name: "José", country: "Brasil" },
    { name: "Carlos", country: "Argentina" },
    { name: "Lucia", country: "Argentina" },
    { name: "Yuki", country: "Japão" },
  ];

  // Função para agregar os dados por país
  const aggregateByCountry = (data) => {
    const aggregation = {};

    data.forEach(({ country, name }) => {
      if (!aggregation[country]) {
        aggregation[country] = {
          count: 0,
          employees: [],
        };
      }
      aggregation[country].count += 1;
      aggregation[country].employees.push(name);
    });

    return aggregation;
  };

  // Agregando os dados por país
  const aggregatedData = aggregateByCountry(employees);

  // Estado para controle do Dialog e expansão
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleToggleExpand = (country) => {
    setExpanded((prev) => ({
      ...prev,
      [country]: !prev[country],
    }));
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        AGGREGATION TABLE
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Funcionários por País</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>País</TableCell>
                  <TableCell>Total de Funcionários</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(aggregatedData).map((country) => (
                  <React.Fragment key={country}>
                    <TableRow
                      hover
                      onClick={() => handleToggleExpand(country)}
                      style={{ cursor: "pointer" }}
                    >
                      <TableCell>
                        {country}
                        <IconButton
                          size="small"
                          onClick={(e) => {
                            e.stopPropagation(); // Previne o clique no ícone de propagar para a linha
                            handleToggleExpand(country);
                          }}
                        >
                          {expanded[country] ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </TableCell>
                      <TableCell>{aggregatedData[country].count}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell colSpan={2}>
                        <Collapse in={expanded[country]} timeout="auto" unmountOnExit>
                          <Table>
                            <TableBody>
                              {aggregatedData[country].employees.map((employee, index) => (
                                <TableRow key={index}>
                                  <TableCell colSpan={2}>{employee}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </Collapse>
                      </TableCell>
                    </TableRow>
                  </React.Fragment>
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
