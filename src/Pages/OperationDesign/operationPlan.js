import React, {useState} from "react";
import {Avatar, Button, Card, Col, Row, Segmented, Table, Tabs} from "antd";
import Vessel from "./PlanPage/vessel";
import Area from "./PlanPage/area";
import Point from "./PlanPage/point";
import Electricity from "./PlanPage/electricity";
import nopic from "../../Assets/defaultpic.jpg";

const createtab=[
    {
        key: '0',
        label: "核团标注",
        children: <Area />,
    },
    {
        key: '1',
        label: "血管标注",
        children: <Vessel />,
    },
    {
        key: '2',
        label: "靶点规划",
        children: <Point />,
    },
    {
        key: '3',
        label: "电级通路",
        children: <Electricity />,
    },
    {
        key: '4',
        label: "导线路径",
        children: "",
    },
]

function OperationPlan() {


    return (
        <Row gutter={12}>
            <Col span={6}>
                <Card className='body-card' style={{height: `calc(100vh - 168px)`, marginLeft: "12px",overflowY:"scroll"}}>
                    <div style={{float: "left", marginLeft: "10px"}}>
                        <Button style={{marginRight: "10px", borderRadius: 0}}>
                            方案列表
                        </Button>
                        <Button style={{marginRight: "10px", color: "#F5222D", borderRadius: 0}}>
                            取消
                        </Button>
                        <Button style={{background: '#1890FF', color: "white", borderRadius: 0}}>
                            保存方案
                        </Button>
                    </div>
                    <br/><br/>
                    <Tabs style={{height:"100%"}} defaultActiveKey="0"
                          items={createtab}
                    />
                </Card>
            </Col>
            <Col span={18}>
                <Card className='body-card'
                      style={{height: `calc(100vh - 168px)`, marginRight: 12, background: "#000000"}}>
                    <img
                        src={nopic}
                        style={{height: `calc(100vh - 200px)`}}
                    />
                </Card>
            </Col>
        </Row>
    )
}


export default OperationPlan;
