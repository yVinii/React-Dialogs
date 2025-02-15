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
  TableSortLabel,
  TextField,
} from "@mui/material";

export default function SortAndFilterInHeaderDialog() {
  // Dados para a tabela
  const employees = [
    { id: 1, name: "João", country: "Brasil", age: 30 },
    { id: 2, name: "Maria", country: "Brasil", age: 25 },
    { id: 3, name: "José", country: "Brasil", age: 28 },
    { id: 4, name: "Carlos", country: "Argentina", age: 35 },
    { id: 5, name: "Lucia", country: "Argentina", age: 22 },
    { id: 6, name: "Yuki", country: "Japão", age: 40 },
  ];

  // Estado do Dialog
  const [open, setOpen] = useState(false);

  // Controle da ordenação
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");

  // Controle dos filtros individuais por coluna
  const [filters, setFilters] = useState({
    name: "",
    country: "",
    age: "",
  });

  // Controle da visibilidade do filtro por coluna
  const [showFilters, setShowFilters] = useState({
    name: false,
    country: false,
    age: false,
  });

  // Função para ordenar os dados
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Função para ordenar os dados
  const sortData = (array) => {
    const comparator = (a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return order === "asc" ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    };
    return array.sort(comparator);
  };

  // Função para lidar com mudanças nos filtros
  const handleFilterChange = (event, column) => {
    const value = event.target.value;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));
  };

  // Função para alternar a visibilidade do filtro
  const toggleFilterVisibility = (column) => {
    setShowFilters((prevShowFilters) => ({
      ...prevShowFilters,
      [column]: !prevShowFilters[column],
    }));
  };

  // Dados filtrados
  const filteredData = employees.filter((row) => {
    return (
      row.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      row.country.toLowerCase().includes(filters.country.toLowerCase()) &&
      row.age.toString().includes(filters.age)
    );
  });

  // Dados ordenados
  const sortedData = sortData(filteredData);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        FILTER TABLE
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Funcionários</DialogTitle>
        <DialogContent>
          {/* Tabela */}
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* Filtro no cabeçalho da coluna Nome */}
                  <TableCell
                    onDoubleClick={() => toggleFilterVisibility("name")}
                  >
                    <TableSortLabel
                      active={orderBy === "name"}
                      direction={orderBy === "name" ? order : "asc"}
                      onClick={() => handleRequestSort("name")}
                    >
                      Nome
                    </TableSortLabel>
                    {showFilters.name && (
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Filtrar"
                        value={filters.name}
                        onChange={(e) => handleFilterChange(e, "name")}
                        fullWidth
                        margin="dense"
                      />
                    )}
                  </TableCell>

                  {/* Filtro no cabeçalho da coluna País */}
                  <TableCell
                    onDoubleClick={() => toggleFilterVisibility("country")}
                  >
                    <TableSortLabel
                      active={orderBy === "country"}
                      direction={orderBy === "country" ? order : "asc"}
                      onClick={() => handleRequestSort("country")}
                    >
                      País
                    </TableSortLabel>
                    {showFilters.country && (
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Filtrar"
                        value={filters.country}
                        onChange={(e) => handleFilterChange(e, "country")}
                        fullWidth
                        margin="dense"
                      />
                    )}
                  </TableCell>

                  {/* Filtro no cabeçalho da coluna Idade */}
                  <TableCell
                    onDoubleClick={() => toggleFilterVisibility("age")}
                  >
                    <TableSortLabel
                      active={orderBy === "age"}
                      direction={orderBy === "age" ? order : "asc"}
                      onClick={() => handleRequestSort("age")}
                    >
                      Idade
                    </TableSortLabel>
                    {showFilters.age && (
                      <TextField
                        variant="outlined"
                        size="small"
                        placeholder="Filtrar"
                        value={filters.age}
                        onChange={(e) => handleFilterChange(e, "age")}
                        fullWidth
                        margin="dense"
                      />
                    )}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.country}</TableCell>
                    <TableCell>{row.age}</TableCell>
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
