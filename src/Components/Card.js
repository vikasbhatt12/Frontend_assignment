import React, { useEffect } from "react";
import profile from "../Assets/profile.png";
import profile1 from "../Assets/profile1.png";
import profile4 from "../Assets/profile4.jpeg";
import profile5 from "../Assets/profile5.jpeg";
import profile6 from "../Assets/profile6.png";
import profile7 from "../Assets/profile7.png";
import './Card.css';


import backlogIcon from '../Assets/icons_FEtask/Backlog.svg';
import threedotIcon from '../Assets/icons_FEtask/3 dot menu.svg';
import DoneIcon from '../Assets/icons_FEtask/Done.svg';
import inProgressIcon from '../Assets/icons_FEtask/in-progress.svg';
import Todo from '../Assets/icons_FEtask/To-do.svg';
import LowPriorityIcon from '../Assets/icons_FEtask/Img - Low Priority.svg';
import HighPriorityIcon from '../Assets/icons_FEtask/Img - High Priority.svg';
import mediumIcon from '../Assets/icons_FEtask/Img - Medium Priority.svg';
import UrgentgreyIcon from '../Assets/icons_FEtask/SVG - Urgent Priority grey.svg';

const Card = ({
  id,
  title,
  tag,
  userId,
  userData,
  status,
  priority,
  grouping,
  ordering,
  statusMapping,
}) => {
  const user = userData.find((user) => user.id === userId);

  return (
    <div className="card">
      <div className="card-header">
        <div className="status-heading">
          {grouping == "users" || grouping == "priority" ? (
            statusMapping[id] == "Todo" ? (
            
            <img src={Todo} alt="Todo Icon" className="icon" />
            ) : statusMapping[id] == "In progress" ? (
            
            <img src={inProgressIcon} alt="Inprogress Icon" className="icon" />
            ) : statusMapping[id] == "Backlog" ? (
            
            <img src={backlogIcon} alt="backlog Icon" className="icon" />
            ) : statusMapping[id] == "Done" ? (
            
            <img src={DoneIcon} alt="done Icon" className="icon" />
            ) : (
            
            <img src={threedotIcon} alt="3dot Icon" className="icon" />
            )
          ) : null}
          <p>{id}</p>
        </div>
        {grouping != "users" ? (
          <div
            className={
              user && !user.available
                ? "user-avatar-unavailable"
                : "user-avatar"
            }
          >
            <img
              src={
                userId == "usr-1"
                  ? profile1
                  : userId == "usr-2"
                  ? profile6
                  : userId == "usr-3"
                  ? profile7
                  : userId == "usr-4"
                  ? profile5
                  : userId == "usr-5"
                  ? profile4
                  : profile
              }
              className={
                user && !user.available
                  ? "user-avatar-unavailable"
                  : "user-avatar"
              }
              alt="user"
            ></img>
          </div>
        ) : null}
      </div>
      <div className="card-title">
        <p>{title}</p>
      </div>
      <div className="card-footer">
        {grouping != "priority" ? (
          <div className="feature-container">
            {priority == "0" ? (
            
            <img src={threedotIcon} alt="3dot Icon" className="icon" />
            ) : priority == "1" ? (
                <img src={LowPriorityIcon} alt="Low Icon" className="icon" />
            ) : priority == "2" ? (
                <img src={mediumIcon} alt="medium Icon" className="icon" />
            ) : priority == "3" ? (
                <img src={HighPriorityIcon} alt="high Icon" className="icon" />
            ) : (
            
            <img src={UrgentgreyIcon} alt="grey urgent Icon" className="icon" />
            )}
          </div>
        ) : null}
        {tag?.map((value, index) => {
          return (
            <div className="feature-container" key={index}>
              <div className="alert-icon"></div>
              <div className="feature-request">{value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
