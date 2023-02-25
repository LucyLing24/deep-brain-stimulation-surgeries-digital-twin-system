import React, {useState} from "react";
import {Button, Card, Form, Input, Modal, Slider, Table, Tabs} from "antd";
import operation_plan_point_columns from "../../Const/operation_plan_point_columns";
import operation_plan_point_data from "../../Const/operation_plan_point_data";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";
import defaultpoint from "../../../Assets/defaultpoint.jpeg"


function Point() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        window.location.replace('menu')
    };

    const marks= {
        0: '-200',
        25: '-100',
        50: '0',
        75:'100',
        100: '200',
    };

    const [hasData,setHasData]=useState(false)
    const [hasName,setName]=useState(false)
    const [showModal,setShowModal]=useState(false)
    const rowSelection = {
        onChange: () => {
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
    const handleOk = () => {
        setHasData(true)
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="datalist-side-title" style={{fontSize:16,fontWeight:"bold",gap:"66px",marginBottom:10}}>
                DBS靶点列表
                <div>
                    <Button size="small" style={{marginRight:"5px",borderRadius:0}} icon={<DeleteOutlined/>}>
                        删除
                    </Button>
                    <Button  size="small" style={{background: '#1890FF', color: "white",borderRadius:0}} icon={<PlusCircleOutlined/>}>
                        添加
                    </Button>
                </div>
            </div>
            {hasData === false ?
                <div style={{margin: "5vh 0px"}}>
                    <Button onClick={() => setShowModal(true)}
                            style={{background: '#1890FF', color: "white", borderRadius: 0}}>
                        AI靶点推荐
                    </Button>
                </div> :
                <div>
                    <Table
                        pagination={false}
                        size="small"
                        columns={operation_plan_point_columns}
                        dataSource={operation_plan_point_data}
                        rowSelection={rowSelection}
                        scroll={{y: "20vh"}}
                    />
                </div>
            }
            <div className="datalist-side-title" style={{fontSize:16,fontWeight:"bold",gap:"66px",marginTop:"2vh"}}>
                靶点详情
            </div>
            <div>
                <div className="construct-window">
                    靶点名称
                    <Input style={{marginLeft: "30px", width: "70%"}} disabled/>
                </div>
                <div className="construct-window">
                    FB坐标(mm)
                    <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                </div>
                <div className="construct-window">
                    HF坐标(mm)
                    <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                </div>
                <div className="construct-window">
                    LR坐标(mm)
                    <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                </div>
                <img src={defaultpoint} style={{width:"100%"}}/>
            </div>
            <Modal title="添加推荐AI靶点" open={showModal} onOk={handleOk} onCancel={handleCancel}>
                <br />
                <Form
                    form={form}
                    layout={"vertical"}
                    onFinish={onFinish}
                >
                    <Form.Item required label={"靶点名称"} >
                        <Input placeholder="请输入靶点名称"/>
                    </Form.Item>
                    <Form.Item disabled={!hasName} required label={"类型"}>
                        <Input placeholder="手动添加"/>
                    </Form.Item>
                    <Form.Item disabled={!hasName}  label={"靶点坐标"}>
                        <div className="construct-window">
                            FB坐标(mm)
                            <Slider step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                        </div>
                        <div className="construct-window">
                            HF坐标(mm)
                            <Slider step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                        </div>
                        <div className="construct-window">
                            LR坐标(mm)
                            <Slider step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                        </div>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}


export default Point;
