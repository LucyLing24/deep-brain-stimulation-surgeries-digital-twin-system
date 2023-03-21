import React, {useState} from "react";
import {Button, Card, Col, Form, Input, Modal, Row, Slider, Table} from "antd";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";
import operation_plan_point_columns from "../../Const/operation_plan_point_columns";
import operation_plan_point_data from "../../Const/operation_plan_point_data";
import defaultpoint from "../../../Assets/defaultpoint.jpeg";
import Unity, {UnityContext} from "react-unity-webgl";

const unityContext4 = new UnityContext({
    loaderUrl: "Scene4_WebGL/Build/Scene4_WebGL.asm.loader.js",
    dataUrl: "Scene4_WebGL/Build/Scene4_WebGL.data",
    frameworkUrl: "Scene4_WebGL/Build/Scene4_WebGL.asm.framework.js",
    codeUrl: "Scene4_WebGL/Build/Scene4_WebGL.asm.js",
    memoryUrl:"Scene4_WebGL/Build/Scene4_WebGL.asm.mem",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "UnityVolumeRendering",
    productVersion: "0.1",
});

function Electricity() {

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
        <Row gutter={12}>
            <Col span={6}>
                <Card className='body-card'
                      style={{height: `calc(100vh - 226px)`, overflowY: "scroll"}}>

                    <div>
                        <div className="datalist-side-title"
                             style={{fontSize: 16, fontWeight: "bold", gap: "66px", marginBottom: 10}}>
                            电极通路列表
                            <div>
                                <Button size="small" style={{marginRight: "5px", borderRadius: 0}} icon={<DeleteOutlined/>}>
                                    删除
                                </Button>
                                <Button size="small" style={{background: '#1890FF', color: "white", borderRadius: 0}}
                                        icon={<PlusCircleOutlined/>}>
                                    添加
                                </Button>
                            </div>
                        </div>
                        {hasData === false ?
                            <div style={{margin: "5vh 0px"}}>
                                <Button onClick={() => setShowModal(true)}
                                        style={{background: '#1890FF', color: "white", borderRadius: 0}}>
                                    添加AI推荐电极通路
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
                        <div className="datalist-side-title"
                             style={{fontSize: 16, fontWeight: "bold", gap: "66px", marginTop: "2vh"}}>
                            电极通路详情
                        </div>
                        <div>
                            <div className="construct-window">
                                靶点名称
                                <Input style={{marginLeft: "30px", width: "70%"}} disabled/>
                            </div>
                            <div className="construct-window" style={{marginTop: 10}}>
                                穿过结构
                                <Input style={{marginLeft: "30px", width: "70%"}} disabled/>
                            </div>
                            <div>
                                <div className="construct-window" style={{color: "#1890ff"}}>
                                    目标靶点
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
                            </div>

                            <div>
                                <div className="construct-window" style={{color: "#1890ff"}}>
                                    方位角度
                                </div>
                                <div className="construct-window">
                                    FB轴(度)
                                    <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                                </div>
                                <div className="construct-window">
                                    HF轴(度)
                                    <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                                </div>
                                <div className="construct-window">
                                    LR轴(度)
                                    <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                                </div>
                            </div>
                        </div>
                        <Modal title="添加推荐AI靶点" open={showModal} onOk={handleOk} onCancel={handleCancel}>
                            <br/>
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
                                <Form.Item disabled={!hasName}  label={"目标靶点"}>
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
                                <Form.Item disabled={!hasName}  label={"方位角度"}>
                                    <div className="construct-window">
                                        FB轴(度)
                                        <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                                    </div>
                                    <div className="construct-window">
                                        HF轴(度)
                                        <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                                    </div>
                                    <div className="construct-window">
                                        LR轴(度)
                                        <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                                    </div>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                </Card>
            </Col>
            <Col span={18}>
                <Unity style={{'width': '99%', height: `calc(100vh - 226px)`}} unityContext={unityContext4}/>
            </Col>
        </Row>
    )
}

export default Electricity;
