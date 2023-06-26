import React, {useState} from "react";
import {Button, Card, Col, Form, Input, InputNumber, Modal, Row, Slider, Table, Tabs} from "antd";
import operation_plan_point_columns from "../../Const/operation_plan_point_columns";
import operation_plan_point_data from "../../Const/operation_plan_point_data";
import {DeleteOutlined, PlusCircleOutlined} from "@ant-design/icons";
import defaultpoint from "../../../Assets/defaultpoint.jpeg"
import target1 from "../../../Assets/plan/target1.jpeg"
import target2 from "../../../Assets/plan/target2.jpeg"


function Point(props) {
    const {handleAdd, handleTarget1, handleTarget2,FBslider,HFslider,LRslider} = props
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

    const [hasData,setHasData]=useState(0)
    const [hasName,setName]=useState(false)
    const [showModal, setShowModal] = useState(false)
    const [selectTarget,setSelectTarget]=useState(0)
    const [inputValueFB, setInputValueFB] = useState(0);
    const [inputValueHF, setInputValueHF] = useState(0);
    const [inputValueLR, setInputValueLR] = useState(0);

    const rowSelection = {
        type: 'radio',
        onChange: (newSelectedRowKeys) => {
            if (newSelectedRowKeys[0] === 0) {
                setSelectTarget(1)
                handleTarget1();
            }
            if (newSelectedRowKeys[0] === 1) {
                setSelectTarget(2)
                handleTarget2();
            }

        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };
    const handleOk = () => {
        setHasData(hasData+1);
        handleAdd();
        setShowModal(false);
    };

    const handleCancel = () => {
        setHasData(hasData-1);
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

    return (
                <Card className='body-card'
                      style={{height: `calc(100vh - 208px)`, overflowY: "scroll"}}>
                    <div>
                        <div className="datalist-side-title" style={{fontSize:16,fontWeight:"bold",gap:"66px",marginBottom:10,justifyContent:"space-between"}}>
                            DBS靶点列表
                            <div>
                                <Button size="small" style={{marginRight:"5px",borderRadius:0}} icon={<DeleteOutlined/>}>
                                    删除
                                </Button>
                                <Button onClick={() => setShowModal(true)}  size="small" style={{background: '#1890FF', color: "white",borderRadius:0}} icon={<PlusCircleOutlined/>}>
                                    添加
                                </Button>
                            </div>
                        </div>
                        {hasData === 0 ?
                            <div>
                                <Table
                                    pagination={false}
                                    size="small"
                                    columns={operation_plan_point_columns}
                                    dataSource={[]}
                                    rowSelection={rowSelection}
                                    scroll={{y: "20vh"}}
                                />
                            </div> :
                            <div>
                                <Table
                                    pagination={false}
                                    size="small"
                                    columns={operation_plan_point_columns}
                                    dataSource={operation_plan_point_data[hasData]}
                                    rowSelection={rowSelection}
                                    scroll={{y: "20vh"}}
                                />
                            </div>
                        }
                        <div className="datalist-side-title" style={{fontSize:16,fontWeight:"bold",gap:"66px",marginTop:"2vh",marginBottom:10}}>
                            靶点详情
                        </div>
                        <div style={{justifyContent:"space-between",textAlign:"left"}}>
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
                            <div className="construct-window" style={{justifyContent:"space-between"}}>
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
                            <div className="construct-window" style={{marginBottom:15}} style={{justifyContent:"space-between"}}>
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
                            <br />
                            {
                                selectTarget === 0 ? <img src={defaultpoint} style={{width: "100%"}}/> :
                                    selectTarget === 1 ? <img src={target1} style={{width: "100%"}}/> :
                                        <img src={target2} style={{width: "100%"}}/>

                            }

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
                                </Form.Item>
                            </Form>
                        </Modal>
                    </div>
                </Card>

    )
}


export default Point;
