import React, {useState} from "react";
import {Button, Card, Col, Modal, Row, Slider, Table, Tabs, Typography} from "antd";
import operation_plan_area_data from "../../Const/operation_plan_area_data";
import operation_plan_area_columns from "../../Const/operation_plan_area_columns";
import tips from "../../../Assets/tips.jpeg"
import tips1 from "../../../Assets/tips1.jpeg"
import Search from "antd/es/input/Search";
import Unity, {UnityContext} from "react-unity-webgl";

const unityContext3 = new UnityContext({
    loaderUrl: "Scene3_WebGL/Build/Scene3_WebGL.asm.loader.js",
    dataUrl: "Scene3_WebGL/Build/Scene3_WebGL.data",
    frameworkUrl: "Scene3_WebGL/Build/Scene3_WebGL.asm.framework.js",
    codeUrl: "Scene3_WebGL/Build/Scene3_WebGL.asm.js",
    memoryUrl:"Scene3_WebGL/Build/Scene3_WebGL.asm.mem",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "UnityVolumeRendering",
    productVersion: "0.1",
});

function handleEdit(data){
    unityContext3.send("Main Camera", "Change_Center_WebGL", data);
    unityContext3.send(data, "ChangeSpeed");
}
function handleSave(data){
    unityContext3.send(data, "SaveMesh");
}


function Area() {

    const [selectedRowKeys,setSelectedRowKeys]=useState([]);
    const [showModal,setShowModal]=useState(false);
    const [step,setStep]=useState(0);
    const [inputValue0, setInputValue0] = useState(0.008);
    const [inputValue1, setInputValue1] = useState(0.08);

    function handleTransform(){
        unityContext3.send('WhichNucleusBrush','TransformNucleus');
        setShowModal(false);
    }
    const handleOk = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const onSelectChange =(newSelectedRowKeys)=>{
        setSelectedRowKeys(newSelectedRowKeys);
        handleEdit(nucleusOptions[newSelectedRowKeys]);
    }
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        type:'radio'
    };
    const hasSelected = setSelectedRowKeys.length > 0;

    const onChange0 = (newValue) => {
        setInputValue0(newValue);
        unityContext3.send('WhichNucleusBrush', 'SetSize', newValue);
    };
    const onChange1 = (newValue) => {
        setInputValue1(newValue);
        unityContext3.send('WhichNucleus','BrushSetStrength',newValue);
    };

    const nucleusOptions={
        0:"Nucleus/Left Caudate Nucleus-11/2",
        1:"Nucleus/Right Putamen-51/7"
}

    const createtab=[
        {
            key: '0',
            label: "初步调整",
            children:
                <div>
                    <div className="construct-window">
                        尺寸调整
                        <Slider step={10} defaultValue={25} style={{marginLeft: "30px", width: "80%"}}/>
                    </div>
                    <div className="construct-window">
                        笔刷大小
                        <Slider step={10} defaultValue={25} style={{marginLeft: "30px", width: "80%"}}/>
                    </div>
                    <div className="construct-window">
                        笔刷力度
                        <Slider step={10} defaultValue={25} style={{marginLeft: "30px", width: "80%"}}/>
                    </div>
                    <div className="construct-window">
                        操作说明<img src={tips} style={{marginLeft: "28px", width: "380px"}}/>
                    </div>
                </div>
        },
        {
            key: '1',
            label: "微调",
            children: <div>
                <div className="construct-window">
                    笔刷大小
                    <Slider
                        min={0.008}
                        max={0.08}
                        onChange={onChange0}
                        value={typeof inputValue0 === 'number' ? inputValue0 : 0}
                        step={0.001} style={{marginLeft: "30px", width: "80%"}}
                    />
                </div>
                <div className="construct-window">
                    笔刷力度
                    <Slider
                        min={0.08}
                        max={0.5}
                        onChange={onChange1}
                        value={typeof inputValue1 === 'number' ? inputValue1 : 0}
                        step={0.01} style={{marginLeft: "30px", width: "80%"}}
                    />
                </div>
                <div className="construct-window">
                    操作说明<img src={tips1} style={{marginLeft: "28px", width: "380px"}}/>
                </div>
            </div>,
        },
    ]

    return (
        <Row gutter={12}>
            <Col span={6}>
                <Card className='body-card'
                      style={{height: `calc(100vh - 226px)`,  overflowY: "scroll"}}>

                    <div style={{width: '100%', height: `63vh`}}>
                        <div>
                            <div className="datalist-side-title" style={{fontSize:16,fontWeight:"bold"}}>核团AI标注
                            </div>
                            <div style={{margin:"10px 0px"}}>
                                <Search placeholder="搜索核团"></Search>
                            </div>
                            <Table
                                pagination={false}
                                size="small"
                                columns={operation_plan_area_columns}
                                dataSource={operation_plan_area_data}
                                rowSelection={rowSelection}
                                scroll={{y: "36vh"}}
                            />
                            <div>
                                <Typography.Text style={{
                                    marginTop: 2,
                                    fontSize: 10,
                                    color: "lightgrey"
                                }}>*AI标注功能以标准模版为依据并根据影像进行初步配准，若需提升标注精度请进行手动调整</Typography.Text>
                            </div>
                        </div>
                        <div style={{position: "absolute", bottom: 0, right: 0}}>
                            <Button disabled={!hasSelected} className="button" style={{background: "#52c41a", color: "white"}}
                                    onClick={() => {
                                        setShowModal(true)
                                    }}>手动调整</Button>
                            <Button style={{background: "#1890FF", color: "white"}} className="button" onClick={()=>{handleSave(nucleusOptions[selectedRowKeys])}}>保存</Button>
                        </div>
                        <Modal title="手动调整" open={showModal} onOk={handleOk} onCancel={handleCancel}
                               footer={[
                                   <Button  onClick={handleTransform} style={{background: "#52c41a", color: "white"}}>
                                       调整位置
                                   </Button>,
                                   <Button key="submit" type="primary" onClick={handleOk}>
                                       保存笔刷
                                   </Button>
                               ]}

                        >
                            <Tabs defaultActiveKey="0" items={createtab}>
                            </Tabs>
                        </Modal>
                    </div>
                </Card>
            </Col>
            <Col span={18}>
                <Unity style={{'width': '99%', height: `calc(100vh - 226px)`,}} unityContext={unityContext3}/>
            </Col>
        </Row>
    )
}


export default Area;
