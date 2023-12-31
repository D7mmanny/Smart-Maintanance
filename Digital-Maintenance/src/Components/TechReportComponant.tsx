import React from "react";
import axios from "axios";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import pdf from '../assets/Pdf.svg'

function TechReportComponant() {
  type task = {
    id: string;
    Technician: string;
    OperationStatus: string;
    Lab: string;
    OperationType: string;
    report: string;
    dateOfCompletion: string;
    NextOperation: string;
  };

  const handleDownload = () => {
    const input = document.getElementById('pdf-content');

    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' for portrait mode, 'mm' for millimeters, 'a4' for A4 size
        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // A4 dimensions: 210mm x 297mm
        pdf.save('webpage.pdf');
      });
    }
  };

  const [taskApi, setTaskApi] = React.useState<task[]>([]);
  const taskId = localStorage.getItem("taskId");
  React.useEffect(() => {
    axios
      .get("https://64f8e3b3824680fd21802caf.mockapi.io/Task")
      .then((response) => {
        setTaskApi(response.data);
      });
  }, []);

  return (
    <div>
     
      
      <div >
      {taskApi.map((task) => {
        if (taskId == task.id) {
          console.log("success");

          return (
            <>

            <div className="shadow-lg">
              <div id="pdf-content" className=" bg-white ReportComponent flex flex-col items-center gap-7  rounded-sm">
                <h1 className="text-xl mt-8 font-semibold underline">
                  {task.Lab}
                </h1>
                <div>
                  <hr className="border border-black border-1" />
                  <div className="text-sm flex gap-9 mt-2 mb-2">
                    <h1 className="ml-1">Technican name: {task.Technician}</h1>
                  </div>
                  <div className="text-sm flex gap-9 mt-2 mb-2">
                    <h1 className="ml-1">
                      Operation type: {task.OperationType}
                    </h1>
                    <h1>Status: {task.OperationStatus}</h1>
                  </div>
                  <div className="text-sm flex gap-9 mt-2 mb-2">
                    <h1 className="ml-1">
                      Completion date: {task.dateOfCompletion}
                    </h1>
                    <h1>
                      Next duration: {task.NextOperation}
                    </h1>
                  </div>
                  <hr className="border border-black w-full border-1" />
                </div>
                <div className="flex flex-col justify-center items-center">
                  <h1 className=" font-semibold">Reports:</h1>
                  <div className=" w-3/4 border mt-7 reportBorder border-black">
                    <p className="text-xs text-center mt-5 px-2 md:text-sm">{task.report}</p>
                  </div>
                </div>
              </div>
              </div>
            </>
          );
        }
      })}
      </div>
      
      <div className="flex justify-center">
      <button className="flex bg-red-700 text-white mt-5 px-3 py-1 rounded-lg" onClick={handleDownload}>
        Download as PDF
        <img className="w-5" src={pdf}/></button>
      </div>
    </div>
  );
}

export default TechReportComponant;
