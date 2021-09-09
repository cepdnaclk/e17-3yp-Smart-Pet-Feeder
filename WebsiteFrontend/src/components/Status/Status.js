import React, { useState,useContext,useEffect,useCallback } from "react";
import Icofont from "react-icofont";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import Loader from 'react-loader-spinner';
import AuthContext from "../../stores/auth-context";

const Status = ({ bg, type }) => {
  const [viewed, setViewed] = useState(true);
  const [statusData,setStatusData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  
 

  const viewChangeHandler = (isVisible) => {
    if (isVisible) setViewed(true);
  };

  const fetchData =useCallback(()=>{
    setIsLoading(true);
    fetch('http://localhost:8080/auth/user/get_data',{
      method:'GET',
      headers:{
        Authorization: 'Bearer ' + authCtx.token
      }
    })
    .then(response=>{
      console.log(response);
        return response.json();
        
    })
    .then(data=>{
        const fetchedData = [
          {
            "id": 0,
            "value": data.status,
            "title": "Status",
            "icon": ""
          },
          {
            "id": 1,
            "value": data.battery,
            "title": "Battery",
            "icon": "battery-full"
          },
          {
            "id": 2,
            "value": data.remainingRounds,
            "title": "Remaining Rounds",
            "icon": "spinner"
          },
          {
            "id": 3,
            "value": 0,
            "title": "Last Feed Before",
            "icon": "clock-time"
          }
        ]
        setStatusData(fetchedData);
        setIsLoading(false);
    }).catch(err=>{console.log(err);})
  },[]);

  useEffect(()=>{
    fetchData();
  },[fetchData]);

  return (
  
    <section className={"pt-120 pb-80 " + (bg ? bg : "dark-bg")}>
      {isLoading && 
      <div align= 'center'>
        <Loader
        type="ThreeDots"
        color="#d42e22"
        height={100}
        width={100}
        
      />
      </div>
      }
     {!isLoading && <div className={"container" + (type === "wide" ? "-fluid" : "")}>
        <div className="row">
          {statusData.map((counter, i) => (
            <div
              key={counter.id}
              className="col-md-3 counter text-center col-sm-6 wow fadeTop"
              data-wow-delay="0.1s"
              data-aos-delay={`${i}00`}
              data-aos={"fade-up"}
              data-aos-easing={"ease-in-sine"}
            >
              {i === 0 && (
                <Icofont
                  icon={counter.value === 1 ? "wifi" : "ban"}
                  className="light-icon font-30px"
                />
              )}

              {i !== 0 && (
                <Icofont icon={counter.icon} className="light-icon font-30px" />
              )}
              <h2
                className={
                  "count font-700 " + (bg === "white-bg" ? "" : "white-color")
                }
              >
                {i !== 0 && (
                  <VisibilitySensor onChange={viewChangeHandler} delayedCall>
                    <CountUp end={viewed ? counter.value : 0} />
                  </VisibilitySensor>
                )}

                {i === 0 && (counter.value === true ? "ON" : "OFF")}
                {i === 1 && "%"}

                {i === 3 && "h"}
              </h2>
              <h3 className={bg === "white-bg" ? "dark-color" : ""}>
                {counter.title}
              </h3>
            </div>
          ))}
        </div>
      
      </div>}
    </section>
  );
};

export default Status;
