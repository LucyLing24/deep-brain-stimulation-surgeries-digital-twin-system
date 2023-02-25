import PageHeader from "../../Components/PageHeader";
import {Avatar, Button, Card, Cascader, Col, Dropdown, Row, Tag} from "antd";
import {
    ClockCircleOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined, FilterFilled,
    FundProjectionScreenOutlined,
    PlusCircleOutlined, UserOutlined
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import React from "react";

import { DatePicker} from 'antd';
import _ from "lodash";
import p0 from "../../Assets/PatientInfo/patient0.png";
import p1 from "../../Assets/PatientInfo/patient1.png";
import p2 from "../../Assets/PatientInfo/patient2.png";
import p3 from "../../Assets/PatientInfo/patient3.png";
import p4 from "../../Assets/PatientInfo/patient4.png";
import p5 from "../../Assets/PatientInfo/patient5.png";
const { RangePicker } = DatePicker;

function DataList() {
    const items = [
        {
            key: '1',
            label: (
                <div onClick={() => {
                    const url = "/modelview";
                    window.open(url)
                }} >
                    孪生模型查看
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={() => {
                    const url = "/modelconstruct";
                    window.open(url)
                }} >
                    孪生模型构建
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div onClick={() => {
                    const url = "/operation";
                    window.open(url)
                }} >
                    手术方案规划
                </div>
            ),
        },
    ];

    const data=[
        {
            id:1,
            pic:p0,
            name:"患者姓名1",
            age:72,
            sex:"女",
            stage:"术前影像阶段",
            prob:"帕金森（pd）",
            status:"",
            model:[
                {
                    time: "11/22/22",
                    model: ""
                },
                {
                    time: "11/22/22",
                    model: ""
                },
            ],
        },
        {
            id:1,
            pic:p1,
            name:"患者姓名1",
            age:72,
            sex:"女",
            stage:"术前影像阶段",
            prob:"帕金森（pd）",
            status:"",
            model:[
                {
                    time: "11/22/22",
                    model: ""
                },
                {
                    time: "11/22/22",
                    model: ""
                },
            ],
        },
        {
            id:2,
            pic: p2,
            name:"患者姓名2",
            age:55,
            sex:"男",
            stage:"电级植入阶段",
            prob:"癫痫",
            status:"danger",
            model:[],
        },{
            id:3,
            pic: p3,
            name:"患者姓名3",
            age:68,
            sex:"女",
            stage:"电池和导线连接阶段",
            prob:"重度抑郁症",
            status:"",
            model:[
                {
                    time: "11/22/22",
                    model: ""
                },
                {
                    time: "11/22/22",
                    model: ""
                },
            ],
        },{
            id:4,
            pic: p4,
            name:"患者姓名4",
            age:42,
            sex:"男",
            stage:"电刺激治理阶段",
            prob:"癫痫",
            status:"danger",
            model:[
                {
                    time: "11/22/22",
                    model: ""
                },
                {
                    time: "11/22/22",
                    model: ""
                },
            ],
        },{
            id:5,
            pic: p5,
            name:"患者姓名5",
            age:63,
            sex:"男",
            stage:"术前影像阶段",
            prob:"帕金森（pd）",
            status:"",
            model:[
                {
                    time: "11/22/22",
                    model: ""
                },
                {
                    time: "11/22/22",
                    model: ""
                },
            ],
        },{
            id:6,
            pic: p5,
            name:"患者姓名5",
            age:63,
            sex:"男",
            stage:"术前影像阶段",
            prob:"帕金森（pd）",
            status:"",
            model:[
                {
                    time: "11/22/22",
                    model: ""
                },
                {
                    time: "11/22/22",
                    model: ""
                },
            ],
        }
    ];

    const options = [
        {
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [
                {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                    children: [
                        {
                            value: 'xihu',
                            label: 'West Lake',
                        },
                    ],
                },
            ],
        },
        {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [
                {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                        {
                            value: 'zhonghuamen',
                            label: 'Zhong Hua Men',
                        },
                    ],
                },
            ],
        },
    ];

    const onChange = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };

    return (
        <section className="datalist">
            <PageHeader/>
            <Row>
                <Col span={20}>
                    <Card style={{margin: "10px", height: `calc(100vh - 108px)`, borderRadius: 0}}>
                        <div className="datalist-side-title">
                            全部患者
                            <Tag icon={<ExclamationCircleOutlined/>} color="warning">
                                两日内手术患者
                            </Tag>
                            <div className="datalist-side-title-button">
                                <Button icon={<DeleteOutlined/>}>
                                    删除患者
                                </Button>
                                <Button style={{background: '#1890FF', color: "white"}} icon={<PlusCircleOutlined/>}>
                                    新增患者
                                </Button>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <Row  style={{display:"flex",
                                flexDirection: "row"}}>
                                <Col span={0.5}>
                                    <FilterFilled style={{color:"#1890FF",fontSize:"24px"}}/>
                                </Col>
                                <Col span={5} >
                                    科室{"\t"}
                                    <Cascader options={options} onChange={onChange} placeholder="选择科室" />
                                </Col>
                                <Col span={5}>
                                    治疗阶段{"\t"}
                                    <Cascader options={options} onChange={onChange} placeholder="患者治理阶段" />
                                </Col>
                                <Col span={7}>
                                    时间段{"\t"}
                                    <RangePicker />
                                </Col>
                                <Col span={6} >
                                    患者姓名{"\t"}
                                    <Search placeholder="搜索" allowClear style={{ width: 200 }} />
                                </Col>
                            </Row>
                        </div><br/>
                        <Row gutter={[24, 24]}>
                            {_.map(data, (item, index) => {
                                return (
                                    <Col span={4}>
                                        <Card
                                            className="datalist-card"
                                              style={{cursor: "pointer"}}
                                        >

                                            <img
                                                src={item.pic}
                                                alt="logo"
                                                style={{width: '170px',height:"200px"}}
                                            />
                                            <div className="datalist-card-button">
                                                <Button size={"small"} >
                                                    详情
                                                </Button>
                                                <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                                                    <Button size={"small"} style={{background: '#1890FF', color: "white"}}>
                                                        选项
                                                    </Button>
                                                </Dropdown>
                                            </div>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Card>
                </Col>
                <Col span={4}>
                    <Card style={{height: `calc(100vh - 88px)`, borderRadius: 0,background:"#F2F2F2"}}>
                        <div className="datalist-side-title">
                            数据看板
                        </div>
                        <div className="datalist-side-content">
                            <FundProjectionScreenOutlined className="datalist-side-content"/>
                            <div>暂无数据统计</div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}

export default DataList;
