import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  Paper,
} from "@mui/material";
import { Line, Bar, Pie, Radar } from "react-chartjs-2";
import { Chart as ChartJS, 
         CategoryScale, 
         LinearScale, 
         BarElement, 
         PointElement, 
         LineElement, 
         Title, 
         Tooltip, 
         Legend, 
         RadarController, 
         RadialLinearScale, 
         ArcElement } from "chart.js";

// Registrando os componentes necessários do ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadarController,
  RadialLinearScale,
  ArcElement // Registrar o ArcElement necessário para gráficos de Pizza
);

export default function DashboardDialog() {
  // Dados do Dialog
  const [open, setOpen] = useState(false);

  // Funções para abrir e fechar o Dialog
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Dados para os Gráficos

  // Gráfico de Linhas
  const lineChartData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"],
    datasets: [
      {
        label: "Vendas Mensais",
        data: [50, 200, 150, 220, 300, 400, 500],
        borderColor: "#42A5F5",
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        fill: true,
      },
    ],
  };

  // Gráfico de Barras
  const barChartData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Pontuação por Categoria",
        data: [10, 20, 30, 40, 50],
        backgroundColor: "#66BB6A",
      },
    ],
  };

  // Gráfico de Pizza
  const pieChartData = {
    labels: ["Red", "Blue", "Yellow", "Green"],
    datasets: [
      {
        data: [300, 50, 100, 150],
        backgroundColor: ["#FF6347", "#42A5F5", "#FFEB3B", "#66BB6A"],
      },
    ],
  };

  // Gráfico Radar
  const radarChartData = {
    labels: ["A", "B", "C", "D", "E"],
    datasets: [
      {
        label: "Performance",
        data: [65, 59, 90, 81, 56],
        backgroundColor: "rgba(66, 165, 245, 0.2)",
        borderColor: "#42A5F5",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        DASHBOARD
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle>Dashboard de Gráficos</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
            {/* Gráfico de Linhas */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <h3>Vendas Mensais</h3>
                <Line data={lineChartData} />
              </Paper>
            </Grid>

            {/* Gráfico de Barras */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <h3>Pontuação por Categoria</h3>
                <Bar data={barChartData} />
              </Paper>
            </Grid>

            {/* Gráfico de Pizza */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <h3>Distribuição por Cores</h3>
                <Pie data={pieChartData} />
              </Paper>
            </Grid>

            {/* Gráfico Radar */}
            <Grid item xs={12} sm={6}>
              <Paper elevation={3} style={{ padding: "20px" }}>
                <h3>Performance</h3>
                <Radar data={radarChartData} />
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
