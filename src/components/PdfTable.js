import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const ReportPreviewDialog = () => {
  const [open, setOpen] = useState(false);
  const [pdfData, setPdfData] = useState(null); // Armazena o PDF gerado
  const [reportData] = useState([
    { name: 'John Doe', age: 28, country: 'USA' },
    { name: 'Jane Smith', age: 34, country: 'Canada' },
    { name: 'Alex Johnson', age: 45, country: 'UK' },
    { name: 'Maria Garcia', age: 36, country: 'Spain' },
  ]);

  // Função para gerar PDF e exibir no diálogo
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Relatório de Funcionários', 20, 10);

    doc.autoTable({
      head: [['Nome', 'Idade', 'País']],
      body: reportData.map((row) => [row.name, row.age, row.country]),
    });

    // Salva o PDF em um Blob e atualiza o estado para exibição
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    setPdfData(pdfUrl); // Define o URL do PDF gerado
  };

  // Função para abrir o diálogo
  const openReportDialog = () => {
    setOpen(true);
  };

  // Função para fechar o diálogo
  const closeReportDialog = () => {
    setOpen(false);
    setPdfData(null); // Limpa os dados do PDF ao fechar
  };

  return (
    <div>
      {/* Botão para abrir o diálogo */}
      <Button variant="contained" color="primary" onClick={openReportDialog}>
        PDF TABLE
      </Button>

      {/* Dialog de Preview de Relatório */}
      <Dialog open={open} onClose={closeReportDialog} maxWidth="md" fullWidth>
        <DialogTitle>Preview de Relatório</DialogTitle>
        <DialogContent>
          {pdfData ? (
            <iframe
              src={pdfData}
              title="Preview do PDF"
              width="100%"
              height="500px"
              style={{ border: 'none' }}
            />
          ) : (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Idade</TableCell>
                    <TableCell>País</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {reportData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.country}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeReportDialog} color="primary">
            Fechar
          </Button>
          {!pdfData ? (
            <Button onClick={generatePDF} color="secondary">
              Gerar PDF
            </Button>
          ) : (
            <Button
              onClick={() => {
                const link = document.createElement('a');
                link.href = pdfData;
                link.download = 'relatorio_funcionarios.pdf';
                link.click();
              }}
              color="secondary"
            >
              Baixar PDF
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReportPreviewDialog;
