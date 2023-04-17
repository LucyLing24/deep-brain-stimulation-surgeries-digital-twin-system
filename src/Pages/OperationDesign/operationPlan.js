import React, {useEffect, useState} from "react";
import {Avatar, Button, Card, Col, Row, Segmented, Table, Tabs} from "antd";
import Vessel from "./PlanPage/vessel";
import Area from "./PlanPage/area";
import Point from "./PlanPage/point";
import Electricity from "./PlanPage/electricity";
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

// scene3 核团
function handleEditArea(data){
    unityContext3.send("Main Camera", "Change_Center_WebGL", data);
    unityContext3.send(data, "ChangeSpeed");
}
function handleSaveArea(data){
    unityContext3.send(data, "SaveMesh");
}
function handleBrushSizeArea(data){
    unityContext3.send('WhichNucleusBrush', 'SetSize', data);
}
function handleBrushStrengthArea(data){
    unityContext3.send('WhichNucleus','BrushSetStrength',data);
}
function handleTransformArea(){
    unityContext3.send('WhichNucleusBrush','TransformNucleus');
}


// scene3 血管
function handleShowVessel2(){
    unityContext3.send("ShowVessels", "Show2");
}
function handleShowVessel1(){
    unityContext3.send("ShowVessels", "Show1");
}
function handleShowVessel3(){
    unityContext3.send("ShowVessels", "Show3");
}

// scene4 靶点
function handleAddPoint() {
    unityContext4.send('AddTarget','AddTarget')
}
function handleTargetPoint1() {
    unityContext4.send('SetWhichTargetPos','ChangeTarget_WebGL','Target1')
}
function handleTargetPoint2() {
    unityContext4.send('SetWhichTargetPos','ChangeTarget_WebGL','Target2')
}

function FBsliderPoint(data) {
    unityContext4.send('SetWhichTargetPos','TargetPos_FB',data)
}
function HFsliderPoint(data) {
    unityContext4.send('SetWhichTargetPos','TargetPos_HF',data)
}
function LRsliderPoint(data) {
    unityContext4.send('SetWhichTargetPos','TargetPos_LR',data)
}

// scene4 电极
function handleShowElec() {
    unityContext4.send('ShowElectrodes','SetUpElectrode')
}
function handleTargetElec1() {
    unityContext4.send('SetWhichElectrodePos','ChangeElectrode_WebGL','Electrode1')
}
function handleTargetElec2() {
    unityContext4.send('SetWhichElectrodePos','ChangeElectrode_WebGL','Electrode2')
}
function FBsliderElec(data) {
    unityContext4.send('SetWhichElectrodePos','ElePos_FB',data)
}
function HFsliderElec(data) {
    unityContext4.send('SetWhichElectrodePos','ElePos_HF',data)
}
function LRsliderElec(data) {
    unityContext4.send('SetWhichElectrodePos','ElePos_LR',data)
}
function FBsliderElecAxle(data) {
    unityContext4.send('SetWhichElectrodePos','EleRot_FB',data)
}
function HFsliderElecAxle(data) {
    unityContext4.send('SetWhichElectrodePos','EleRot_HF',data)
}
function LRsliderElecAxle(data) {
    unityContext4.send('SetWhichElectrodePos','EleRot_LR',data)
}

const createtab=[
    {
        key: 0,
        label: "核团标注",
        children: <Area handleEdit={handleEditArea} handleSave={handleSaveArea} handleTransform={handleTransformArea}
                        handleBrushSize={handleBrushSizeArea} handleBrushStrength={handleBrushStrengthArea}
        />,
    },
    {
        key: 1,
        label: "血管标注",
        children: <Vessel handleShow2={handleShowVessel2} handleShow1={handleShowVessel1} handleShow3={handleShowVessel3}/>,
    },
    {
        key: 2,
        label: "靶点规划",
        children: <Point handleAdd={handleAddPoint} handleTarget1={handleTargetPoint1} handleTarget2={handleTargetPoint2}
                         FBslider={FBsliderPoint} HFslider={HFsliderPoint} LRslider={LRsliderPoint}
        />,
    },
    {
        key: 3,
        label: "电级通路",
        children: <Electricity handleShowElec={handleShowElec} handleTargetElec1={handleTargetElec1} handleTargetElec2={handleTargetElec2}
                               FBslider={FBsliderElec} HFslider={HFsliderElec} LRslider={LRsliderElec}
                               FBsliderAxle={FBsliderElecAxle} HFsliderAxle={HFsliderElecAxle} LRsliderAxle={LRsliderElecAxle}
        />,
    },
]

function OperationPlan() {
    const [tab,setTab]=useState(0)
    const [scene,setScene]=useState()
    const onChange = (key:number) => {
        setTab(key)
    };

    useEffect(()=>{
        if(tab===0 || tab ===1){
            setScene(3)
        }
        else{
            setScene(4)
        }
    },[tab])

    return (
        <div style={{ width: "100%",float:"right"}}>
            <Row gutter={10}>
                <Col span={6}>
                    <Tabs style={{height: "100%", marginLeft: 12}} defaultActiveKey={0}
                          type="card"
                          items={createtab}
                          onChange={onChange}
                    />
                </Col>
                <Col span={18}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'end',
                        marginBottom: " 0px",
                        width: "100%",
                        position: "absolute"
                    }}>
                        <Button style={{marginRight: "10px", color: "#F5222D", borderRadius: 0}} onClick={() => {
                            window.location.replace('operation')
                        }}>
                            取消
                        </Button>
                        <Button style={{
                            background: '#1890FF',
                            color: "white",
                            borderRadius: 0,
                            margin: '0px 24px 12px 0px'
                        }} onClick={() => {
                            window.location.replace('operation')
                        }}>
                            保存方案
                        </Button>
                    </div>
                    {
                        scene === 3 ?
                            <div>
                                <Unity
                                    style={{
                                        'width': '99%',
                                        height: `calc(100vh - 208px)`,
                                        marginTop: 40,
                                        marginRight: 12
                                    }}
                                    unityContext={unityContext3}/>
                            </div>
                            :null}
                    {
                        scene === 4 ?
                            <div>
                                <Unity
                                    style={{
                                        'width': '99%',
                                        height: `calc(100vh - 208px)`,
                                        marginTop: 40,
                                        marginRight: 12
                                    }}
                                    unityContext={unityContext4}/>
                            </div>:null}
                    }
                </Col>
            </Row>
        </div>
    )
}


export default OperationPlan;
