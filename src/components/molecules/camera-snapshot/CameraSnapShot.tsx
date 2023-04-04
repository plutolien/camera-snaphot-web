import React, { useEffect, useRef, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SnapshotPreviewImage from '../../../static/images/snap-shot-preview.jpg';

const CameraSnapShot = () => {
  return (
    <div className={"flex flex-row gap-[50px] h-screen bg-[#F5F5F5] p-[100px]"}>
      <div className={"flex flex-col gap-[50px] w-[60%]"}>
        <div className={"flex-grow bg-[#D9D9D9] rounded-[20px]"}>
        </div>
        <div className={"flex justify-center items-center"}>
          <button className={"h-[70px] w-[300px] rounded-[10px] text-[20px] tracking-widest bg-[#3871E0] text-[#ffffff] hover:opacity-[0.9]"}>
            Take Snapshot
          </button>
        </div>
      </div>
      <div className={"flex w-[40%] pb-[120px]"}>
        <div className={"flex flex-col flex-grow justify-between"}>
          <div className={"relative"}>
            <select className={"bg-[#e9effc] text-[#3871E0] text-[20px] font-bold tracking-widest appearance-none h-[80px] w-[100%] px-[30px] rounded-[10px] outline-0"}>
              <option>Select Camera</option>
            </select>
            <span className={"absolute right-[30px] top-[30%]"}>
              <KeyboardArrowDownIcon style={{color: "#3871E0", fontSize: "30px"}} />
            </span>
          </div>

          <div>
            <div className={"font-bold text-[34px] tracking-wider mb-[30px]"}>
              Snapshot Preview
            </div>
            <div className={`h-[294px] rounded-[20px] mb-[30px]`} style={{background: `url(${SnapshotPreviewImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
            </div>
            <div className={"flex gap-[30px]"}>
              <button className={"h-[70px] w-[130px] rounded-[10px] text-[20px] tracking-widest bg-[#ffffff] text-[#3871E0] font-bold border border-[2px] border-[#3871E0] hover:opacity-[0.9]"}>
               Cancel
              </button>
              <button className={"h-[70px] w-[300px] rounded-[10px] text-[20px] tracking-widest bg-[#3871E0] text-[#ffffff] hover:opacity-[0.9]"}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CameraSnapShot };
