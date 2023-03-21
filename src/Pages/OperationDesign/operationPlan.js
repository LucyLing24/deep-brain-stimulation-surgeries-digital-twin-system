import React, {useState} from "react";
import {Avatar, Button, Card, Col, Row, Segmented, Table, Tabs} from "antd";
import Vessel from "./PlanPage/vessel";
import Area from "./PlanPage/area";
import Point from "./PlanPage/point";
import Electricity from "./PlanPage/electricity";
const createtab=[
    {
        key: 0,
        label: "核团标注",
        children: <Area />,
    },
    {
        key: 1,
        label: "血管标注",
        children: <Vessel />,
    },
    {
        key: 2,
        label: "靶点规划",
        children: <Point />,
    },
    {
        key: 3,
        label: "电级通路",
        children: <Electricity />,
    },
]
/*
function changeView(){
    unityContext3.send("Main Camera", "Change_Center",'Nucleus/Left Caudate Nucleus-11/2');
    unityContext3.send("Nucleus/Left Caudate Nucleus-11/2", "ChangeSpeed");
}*/

function OperationPlan() {
    const onChange = (key: string) => {
    };

    return (
        <div style={{ width: "100%",float:"right"}}>
            <div style={{
                display: 'flex', justifyContent: 'end', marginBottom: " 0px", width: "100%",position:"absolute"
            }}>
                <Button style={{marginRight: "10px", color: "#F5222D", borderRadius: 0}} onClick={()=>{window.location.replace('operation')}}>
                    取消
                </Button>
                <Button style={{background: '#1890FF', color: "white", borderRadius: 0,margin:'0px 12px 12px 0px'}} onClick={()=>{window.location.replace('operation')}}>
                    保存方案
                </Button>
            </div>
            <Tabs style={{height: "100%",marginLeft:12}} defaultActiveKey={0}
                  type="card"
                  items={createtab}
                  onChange={onChange}
            />
        </div>
    )
}


export default OperationPlan;
