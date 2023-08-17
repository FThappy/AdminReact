import React from "react";
import "./widgetLg.css";
export default function WidgetSm() {
  const Button = ({ type }) => {
    return <button className={`widgetLgButton ${type}`}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <span className="widgetLgTitle">Lates Transcactions</span>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
              alt="a"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Panda Bear</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$25.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
              alt="a"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Panda Bear</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$25.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
              alt="a"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Panda Bear</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$25.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
              alt="a"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Panda Bear</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$25.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.icon-icons.com/icons2/1929/PNG/512/iconfinder-panda-4591884_122127.png"
              alt="a"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Panda Bear</span>
          </td>
          <td className="widgetLgDate">2 Jun 2023</td>
          <td className="widgetLgAmount">$25.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
