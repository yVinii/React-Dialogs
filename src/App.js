import './App.css';
import FormDialog from './components/DialogForm';
import DialogWithTable from './components/DialogTable';
import DialogWithTablePivot from './components/DialogTablePivot';
import EmployeeTableDialog from './components/AggregateTable';
import DoubleTable from './components/DoubleTable';
import OrderTable from './components/OrderTable';
import DashboardDialog from './components/DashboardDialog';
import ReportPreviewDialog from './components/PdfTable';
import FileUploadDialog from './components/DialogUpload';

function App() {
  return (
    <div className="App">
      <br />
      <FormDialog />
      <br></br>
      <DialogWithTable />
      <br></br>
      <DialogWithTablePivot />
      <br></br>
      <EmployeeTableDialog />
      <br></br>
      <DoubleTable />
      <br></br>
      <OrderTable />
      <br></br>
      <DashboardDialog />
      <br></br>
      <ReportPreviewDialog />
      <br></br>
      <FileUploadDialog />
    </div>
  );
}

export default App;
