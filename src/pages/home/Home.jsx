import React from 'react'
import "./home.css"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart"
import { userData } from "../../dummyData";
import WidgetSm from '../../components/widgetSM/WidgetSm';
import WidgetLg from "../../components/widgetLG/WidgetLg";




export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
