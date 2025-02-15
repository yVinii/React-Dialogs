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

export default function PivotTableDialog() {
  // Dados de vendas por produto e mês
  const data = [
    { produto: "Produto A", mes: "Janeiro", vendas: 100 },
    { produto: "Produto A", mes: "Fevereiro", vendas: 150 },
    { produto: "Produto B", mes: "Janeiro", vendas: 200 },
    { produto: "Produto B", mes: "Fevereiro", vendas: 250 },
    { produto: "Produto C", mes: "Janeiro", vendas: 300 },
    { produto: "Produto C", mes: "Fevereiro", vendas: 350 },
  ];

  // Função para gerar a tabela pivotada
  const generatePivotTable = (data) => {
    const pivotData = {};

    // Organizando os dados
    data.forEach(({ produto, mes, vendas }) => {
      if (!pivotData[produto]) {
        pivotData[produto] = {};
      }
      pivotData[produto][mes] = vendas;
    });

    return pivotData;
  };

  // Gerar a tabela pivotada
  const pivotData = generatePivotTable(data);

  // Estado para controle do Dialog
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        PIVOT TABLE
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Pivot Table de Vendas</DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Produto</TableCell>
                  <TableCell>Janeiro</TableCell>
                  <TableCell>Fevereiro</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(pivotData).map((produto) => (
                  <TableRow key={produto}>
                    <TableCell>{produto}</TableCell>
                    <TableCell>{pivotData[produto]["Janeiro"] || 0}</TableCell>
                    <TableCell>{pivotData[produto]["Fevereiro"] || 0}</TableCell>
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
