import PageHeader from "../../Components/PageHeader";
import {Avatar, Button, Card, Cascader, Col, Dropdown, Modal, Row, Tag} from "antd";
import {
    ClockCircleOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined, FilterFilled,
    FundProjectionScreenOutlined,
    PlusCircleOutlined, UserOutlined
} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import React, {useEffect, useState} from "react";

import { DatePicker} from 'antd';
import _ from "lodash";
import p0 from "../../Assets/PatientInfo/patient0.png";
import p1 from "../../Assets/PatientInfo/patient1.png";
import p2 from "../../Assets/PatientInfo/patient2.png";
import p3 from "../../Assets/PatientInfo/patient3.png";
import p4 from "../../Assets/PatientInfo/patient4.png";
import p5 from "../../Assets/PatientInfo/patient5.png";
import c1 from "../../Assets/PatientInfo/create.png";

import d0 from "../../Assets/datalist/detail0.png";
import d1 from "../../Assets/datalist/detail1.png";
import d2 from "../../Assets/datalist/detail2.png";

import d3 from "../../Assets/PatientInfo/patientDetail.png";
const { RangePicker } = DatePicker;


function DataList() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode,setMode]=useState('list')

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

    const rawdata=[
        {
            id:1,
            pic:p0,
            name:"张超英"
        },
        {
            id:1,
            pic:p1,
            name:"患者姓名1"
        },
        {
            id:2,
            pic: p2,
            name:"患者姓名2"
        },{
            id:3,
            pic: p3,
            name:"患者姓名3"
        },{
            id:4,
            pic: p4,
            name:"患者姓名4"
        },{
            id:5,
            pic: p5,
            name:"患者姓名5"
        },{
            id:6,
            pic: p5,
            name:"患者姓名5"
        }
    ];

    const [searchword, setSearchWord] = useState("")

    const [data, setData] = useState()

    useEffect(() => {
        const data = _.map(rawdata, (item) => {
            if (item?.name.match(searchword)) {
                return item;
            }
        }).filter((i)=>{if(i!==undefined)return i})
        setData(data)
    }, [searchword])

    const onSearch = (value: string) => {
        setSearchWord(value)
    };

    const options = [
        {}
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
            {mode==='list'?
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
                                <Button style={{background: '#1890FF', color: "white"}} icon={<PlusCircleOutlined/>} onClick={()=>{setIsModalOpen(true)}}>
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
                                    <Cascader size={"small"} options={options} onChange={onChange} placeholder="选择科室" />
                                </Col>
                                <Col span={5}>
                                    治疗阶段{"\t"}
                                    <Cascader size={"small"} options={options} onChange={onChange} placeholder="患者治理阶段" />
                                </Col>
                                <Col span={7}>
                                    时间段{"\t"}
                                    <RangePicker size={"small"}/>
                                </Col>
                                <Col span={6} >
                                    患者姓名{"\t"}
                                    <Search size={"small"} placeholder="搜索" allowClear style={{ width: 200 }}  onSearch={onSearch}/>
                                </Col>
                            </Row>
                        </div><br/>
                        <Row gutter={[24, 24]}>
                            {_.map(data, (item, index) => {
                                return (
                                    <Col span={4.5}>
                                        <Card
                                            className="datalist-card"
                                              style={{cursor: "pointer"}}
                                        >

                                            <img
                                                src={item.pic}
                                                alt="logo"
                                                style={{width: '170px',height:"200px"}}
                                                onClick={()=>{setMode('detail')}}
                                            />
                                            <div className="datalist-card-button">
                                                <Button size={"small"}
                                                        onClick={()=>{setMode('detail')}}>
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
                    <div style={{height: `calc(100vh - 88px)`, borderRadius: 0,background:"#F2F2F2"}}>
                        <img
                            src={d0}
                            style={{width:"100%"}}
                        />
                    </div>
                </Col>
            </Row>:
                <>
                    <img src={d3} style={{width:"100%"}}/>
                <Card style={{marginLeft: "12px",marginRight: "12px", height: `calc(100vh - 168px)`, borderRadius: 0,overflowY:"scroll"}}>
                    <Button onClick={()=>{setMode('list')}} type={"primary"} style={{marginBottom:10,float:"left",borderRadius:0}}>返回全部患者</Button>
                    <img src={d1} style={{width:"100%"}}/>
                    <img src={d2} style={{width:"100%"}}/>
                </Card> </>
            }

            <Modal
                open={isModalOpen}
                onOk={()=>{setIsModalOpen(false)}}
                onCancel={()=>{setIsModalOpen(false)}}
                width={1100}
            >
                <img

                src={c1}
                style={{width:"100%"}}/>

            </Modal>
        </section>
    );
}

export default DataList;
