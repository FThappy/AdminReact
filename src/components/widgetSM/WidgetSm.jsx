import React from 'react'
import "./widgetSm.css"
import { Visibility } from '@mui/icons-material';
export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
            alt="a"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgerSmUserTitle">Software Engineer</span>
          </div>
          <button
            type="button"
            className="widgetSmButton"
          >
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
            alt="a"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgerSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
            alt="a"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgerSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
            alt="a"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgerSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
            alt="a"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Anna Keller</span>
            <span className="widgerSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
