// import React from "react";

interface Itask {
  OperationType: string;
  Equipment: string;
  MaintenanceType: string;
  Factory:string;
  Lab:string
}

function TaskProps(props: Itask) {
  return (
    <div>
      {props.OperationType == "Inspection" && (
        <div className=" flex bg-InspectLightYelow w-96 rounded-xl justify-start items-center gap-2">
          <div className=" py-14 px-1 bg-InspectDarkYelow" />
          <div className="flex flex-col">
            <p className="text-xs ml-7 mb-3"> 2023/9/08</p>
            <li className="text-xl ">{props.OperationType}</li>
            <div className="flex gap-32 ml-7 mt-3">
              <p className="text-xs"> Factory: {props.Factory}</p>
              <p className="text-xs">
                {" "}
                {props.Lab}
              </p>
            </div>
          </div>
        </div>
      )}
      {props.OperationType == "Maintanance" && (
        <div className=" flex bg-MaintananceLightGreen w-96 rounded-xl justify-start items-center gap-2">
          <div className=" py-14 px-1 bg-MaintananceDarkGreen" />
          <div className="flex flex-col">
            <p className="text-xs ml-7 mb-3"> 2023/9/08</p>
            <li className="text-xl ">{props.OperationType}</li>
            <div className="flex gap-32 ml-7 mt-3 ">
              <p className="text-xs text-center"> Equipment:  <br/>  {props.Equipment}</p>
              <p className="text-xs text-center">
                {" "}
                Maintenance Type: <br/> {props.MaintenanceType}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskProps;