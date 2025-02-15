import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    acceptTerms: false,
    gender: "",
    country: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    console.log("Dados do Formulário:", formData);
    handleClose();
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        FORMULARIO
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Formulário com Vários Tipos</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            label="Nome"
            name="name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            label="Email"
            name="email"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
              />
            }
            label="Aceito os termos e condições"
          />
          <FormControl margin="normal" fullWidth>
            <FormLabel>Gênero</FormLabel>
            <RadioGroup
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              row
            >
              <FormControlLabel value="male" control={<Radio />} label="Masculino" />
              <FormControlLabel value="female" control={<Radio />} label="Feminino" />
              <FormControlLabel value="other" control={<Radio />} label="Outro" />
            </RadioGroup>
          </FormControl>
          <FormControl margin="normal" fullWidth>
            <FormLabel>País</FormLabel>
            <Select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <MenuItem value="br">Brasil</MenuItem>
              <MenuItem value="us">Estados Unidos</MenuItem>
              <MenuItem value="fr">França</MenuItem>
              <MenuItem value="jp">Japão</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
