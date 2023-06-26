import React, {useState} from "react";
import {Button, Card, Col, Form, Input, InputNumber, Modal, Row, Slider, Table} from "antd";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";
import operation_plan_point_columns from "../../Const/operation_plan_point_columns";
import operation_plan_point_data from "../../Const/operation_plan_point_data";


function Electricity(props) {
    const {handleShowElec,handleTargetElec1,handleTargetElec2,FBslider,HFslider,LRslider,FBsliderAxle,HFsliderAxle,LRsliderAxle} = props;

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

    const [inputValueFB, setInputValueFB] = useState(0);
    const [inputValueHF, setInputValueHF] = useState(0);
    const [inputValueLR, setInputValueLR] = useState(0);

    const [inputValueFBAxle, setInputValueFBAxle] = useState(0);
    const [inputValueHFAxle, setInputValueHFAxle] = useState(0);
    const [inputValueLRAxle, setInputValueLRAxle] = useState(0);

    const rowSelection = {
        type: 'radio',
        onChange: (newSelectedRowKeys) => {
            if (newSelectedRowKeys[0] === 0) {
                handleTargetElec1()
            }
            if (newSelectedRowKeys[0] === 1) {
                handleTargetElec2()
            }
        }
    };
    const handleOk = () => {
        handleShowElec()
        setHasData(true)
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const onChangeFB = (newValue) => {
        setInputValueFB(newValue);
        FBslider(newValue);
    };
    const onChangeHF = (newValue) => {
        setInputValueHF(newValue);
        HFslider(newValue);
    };
    const onChangeLR = (newValue) => {
        setInputValueLR(newValue);
        LRslider(newValue);
    };
    const onChangeFBAxle = (newValue) => {
        setInputValueFBAxle(newValue);
        FBsliderAxle(newValue);
    };
    const onChangeHFAxle = (newValue) => {
        setInputValueHFAxle(newValue);
        HFsliderAxle(newValue);
    };
    const onChangeLRAxle = (newValue) => {
        setInputValueLRAxle(newValue);
        LRsliderAxle(newValue);
    };

    return (
                <Card className='body-card'
                      style={{height: `calc(100vh - 208px)`, overflowY: "scroll"}}>

                    <div>
                        <div className="datalist-side-title"
                             style={{fontSize: 16, fontWeight: "bold", gap: "66px", marginBottom: 10,justifyContent:"space-between"}}>
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
                                    dataSource={operation_plan_point_data[2]}
                                    rowSelection={rowSelection}
                                    scroll={{y: "20vh"}}
                                />
                            </div>
                        }
                        <div className="datalist-side-title"
                             style={{fontSize: 16, fontWeight: "bold", gap: "66px", marginTop: "24px"}}>
                            电极通路详情
                        </div>
                        <div>
                            <div style={{marginTop:10}}>
                                <div className="construct-window" style={{color: "#1890ff"}}>
                                    目标电极位置
                                </div>
                                <div className="construct-window" style={{justifyContent:"space-between",textAlign:"left"}}>
                                    FB坐标(mm)
                                    <Slider
                                        min={-0.3}
                                        max={0.1}
                                        onChange={onChangeFB}
                                        value={typeof inputValueFB === 'number' ? inputValueFB : 0}
                                        step={0.01}
                                        defaultValue={0} style={{marginLeft: "10px", width: "34%"}}
                                    />
                                    <InputNumber
                                        min={-0.3}
                                        max={0.1}
                                        step={0.01}
                                        value={inputValueFB}
                                        onChange={onChangeFB}
                                    />
                                </div>
                                <div className="construct-window" style={{justifyContent:"space-between",textAlign:"left"}}>
                                    HF坐标(mm)
                                    <Slider
                                        min={-0.2}
                                        max={0.2}
                                        onChange={onChangeHF}
                                        value={typeof inputValueHF === 'number' ? inputValueHF : 0}
                                        step={0.01}
                                        defaultValue={0} style={{marginLeft: "10px", width: "34%"}}
                                    />
                                    <InputNumber
                                        min={-0.2}
                                        max={0.2}
                                        step={0.01}
                                        value={inputValueHF}
                                        onChange={onChangeHF}
                                    />
                                </div>
                                <div className="construct-window" style={{justifyContent:"space-between",textAlign:"left"}}>
                                    LR坐标(mm)
                                    <Slider
                                        min={-0.2}
                                        max={0.2}
                                        onChange={onChangeLR}
                                        value={typeof inputValueLR === 'number' ? inputValueLR : 0}
                                        step={0.01}
                                        defaultValue={0} style={{marginLeft: "10px", width: "34%"}}
                                    />
                                    <InputNumber
                                        min={-0.2}
                                        max={0.2}
                                        step={0.01}
                                        value={inputValueLR}
                                        onChange={onChangeLR}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="construct-window" style={{color: "#1890ff",marginTop:12}}>
                                    方位角度
                                </div>
                                <div className="construct-window" style={{justifyContent:"space-between",textAlign:"left"}}>
                                    FB轴(度)
                                    <Slider
                                        min={-90}
                                        max={90}
                                        onChange={onChangeFBAxle}
                                        value={typeof inputValueFBAxle === 'number' ? inputValueFBAxle : 0}
                                        step={1}
                                        defaultValue={0} style={{marginLeft: "10px", width: "44%"}}
                                    />
                                    <InputNumber
                                        min={-90}
                                        max={90}
                                        step={1}
                                        value={inputValueFBAxle}
                                        onChange={onChangeFBAxle}
                                    />
                                </div>
                                <div className="construct-window" style={{justifyContent:"space-between",textAlign:"left"}}>
                                    HF轴(度)
                                    <Slider
                                        min={-90}
                                        max={90}
                                        onChange={onChangeHFAxle}
                                        value={typeof inputValueHFAxle === 'number' ? inputValueHFAxle : 0}
                                        step={1}
                                        defaultValue={0} style={{marginLeft: "10px", width: "44%"}}
                                    />
                                    <InputNumber
                                        min={-90}
                                        max={90}
                                        step={1}
                                        value={inputValueHFAxle}
                                        onChange={onChangeHFAxle}
                                    />
                                </div>
                                <div className="construct-window" style={{justifyContent:"space-between",textAlign:"left"}}>
                                    LR轴(度)
                                    <Slider
                                        min={-90}
                                        max={90}
                                        onChange={onChangeLRAxle}
                                        value={typeof inputValueLRAxle === 'number' ? inputValueLRAxle : 0}
                                        step={1}
                                        defaultValue={0} style={{marginLeft: "10px", width: "44%"}}
                                    />
                                    <InputNumber
                                        min={-90}
                                        max={90}
                                        step={1}
                                        value={inputValueLRAxle}
                                        onChange={onChangeLRAxle}
                                    />
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
    )
}

export default Electricity;
