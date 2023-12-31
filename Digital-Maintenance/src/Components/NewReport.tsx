import React from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewReport() {

  //state
  const [report, setReport] = React.useState("");

  //local storage
  const name = localStorage.getItem("username");
  const factory = localStorage.getItem("Factory");

  //post report
  const submitReport = () => {
     
    //post
    if(report != ''){
      axios
      .post("https://64f8e5cc824680fd21802e48.mockapi.io/FactoryReport", {
        supervisorName: name,
        type: "Monthly report",
        factory: factory,
        report: report,
      })
      .then((response) => {
        console.log(response);
        setReport("")
        //alert
       toast.success('The report has been sent successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      });
    }else{
      toast.info('Please fill the empty field', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };
  return (
    <div className="w-7/12 ">
      <div className=" bg-myGray border w-6/6 h-4/5 flex flex-col items-center gap-5 rounded-xl pb-6">
        <input
          value={`${factory} Factory`}
          className="text-center py-1 px-8 rounded-xl mt-7 text-gray-700"
        />
        <textarea
          className=" w-5/6 h-96 px-4 resize-none"
          placeholder="Write the report here..."
          value={report}
          onChange={(e) => setReport(e.target.value)}
        />
        <button
          className=" bg-light-blue py-1 px-7 rounded-xl text-white"
          onClick={submitReport}
        >
          Submit
        </button>
      </div>
       <ToastContainer />
    </div>
  );
}
export default NewReport;
