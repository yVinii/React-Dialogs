import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';

const FileUploadDialog = () => {
  const [open, setOpen] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  // Função para abrir o diálogo
  const openDialog = () => setOpen(true);

  // Função para fechar o diálogo
  const closeDialog = () => setOpen(false);

  // Função para lidar com o upload do arquivo
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <div>
      {/* Botão para abrir o diálogo */}
      <Button variant="contained" color="primary" onClick={openDialog}>
        Upload de Arquivo
      </Button>

      {/* Dialog para upload */}
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Upload de Arquivo</DialogTitle>
        <DialogContent>
          <div style={{ marginBottom: '16px' }}>
            <TextField
              type="file"
              fullWidth
              onChange={handleFileUpload}
              inputProps={{ accept: ".pdf,.doc,.docx,.txt,.jpg,.png" }} // Permite apenas certos tipos de arquivos
            />
          </div>
          {uploadedFile && (
            <p>Arquivo selecionado: <strong>{uploadedFile.name}</strong></p>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">Fechar</Button>
          <Button
            onClick={() => {
              console.log("Arquivo enviado:", uploadedFile);
              closeDialog();
            }}
            color="secondary"
            disabled={!uploadedFile}
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FileUploadDialog;
