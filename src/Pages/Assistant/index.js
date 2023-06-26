import React, {useState} from "react";
import {
    Button,
    Card,
    Checkbox,
    Col, Form, Input, InputNumber, Modal, Radio,
    Row,
    Segmented,
    Slider,
    Table, Tabs,
} from "antd";

import PageHeader from "../../Components/PageHeader";
import patientdetial from "../../Assets/PatientInfo/patientDetail.png";
import tab2 from "../../Assets/assistant/tab2.png";
import tab3 from "../../Assets/assistant/tab3.png";
import tab4 from "../../Assets/assistant/tab4.png";
import info from "../../Assets/assistant/info.jpeg"
import Unity, {UnityContext} from "react-unity-webgl";
import assistant_data from "../Const/assistant_data";
import assistant_columns from "../Const/assistant_columns";



const unityContext5 = new UnityContext({
    loaderUrl: "Scene5/Build/Scene5.asm.loader.js",
    dataUrl: "Scene5/Build/Scene5.data",
    frameworkUrl: "Scene5/Build/Scene5.asm.framework.js",
    codeUrl: "Scene5/Build/Scene5.asm.js",
    memoryUrl:"Scene5/Build/Scene5.asm.mem",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "UnityVolumeRendering",
    productVersion: "0.1",
});


function handleSelectPart(data){
    unityContext5.send('SetWhichParticles', 'ChangeParticle_WebGL', data)
    unityContext5.send('ShowParticles', 'ThisParticle')
    unityContext5.send('ParticleController', 'ControlParticles')
}
function handleBegin (){
    unityContext5.send('ShowParticles','ShowPartcles')
}

function Assistant() {
    const [view, setView] = useState(0)
    const [tab, setTab] = useState(0)

    const [inputValueFreq, setInputValueFreq] = useState(0);
    const [inputValueIntensity, setInputValueIntensity] = useState(0);
    const [inputValueAmplitude, setInputValueAmplitude] = useState(0);

    const onChangeTab = (key: string) => {
        setTab(key)
    };


    const onChangeFreq = (newValue) => {
        setInputValueFreq(newValue);
        unityContext5.send('ParticleController','updatePinLv_WebGL',newValue)
    };
    const onChangeIntensity = (newValue) => {
        setInputValueIntensity(newValue);
        unityContext5.send('ParticleController','updateQiangdu_WebGL',newValue)
    };
    const onChangeAmplitude = (newValue) => {
        setInputValueAmplitude(newValue);
        unityContext5.send('ParticleController','updatFudu_WebGL',newValue)
        unityContext5.send('ParticleController','hetuansInfluence')
    };

    const createtab=[
        {
            key: 0,
            label: "电刺激效果模拟",
            children: '',
        },
        {
            key: 1,
            label: "预测_DTI模型",
            children:
                <div style={{marginRight:12}}>
                    <img
                        src={tab2}
                        style={{width: "100%", height: `calc(100vh - 274px)`}}
                    />
                </div>,
        },
        {
            key: 3,
            label: "预测_脑网络热力模型",
            children:
                <div style={{marginRight:12}}>
                    <img
                        src={tab4}
                        style={{width: "100%", height: `calc(100vh - 274px)`}}
                    />
                </div>,
        },
    ]


    const rowSelection = {
        type: 'radio',
        onChange: (newSelectedRowKeys) => {
            if (newSelectedRowKeys[0] === 0) {
                handleSelectPart('Electrode1')
            }
            if (newSelectedRowKeys[0] === 1) {
                handleSelectPart('Electrode2')
            }
            if (newSelectedRowKeys[0] === 2) {
                handleSelectPart('Electrode3')
            }
        }
    };

    return (
        <section className="model">
            <PageHeader/>
            <img
                src={patientdetial}
                style={{width: "100%"}}
            />
            {view === 0 ?
                <div style={{marginLeft:12,marginRight:12,height:`calc( 100vh - 168px )`,overflowY:"scroll"}}>
                    <div style={{padding:12,background:"white"}}>
                        <img
                            src={info}
                            style={{width:"100%"}}
                            onClick={() => {
                                setView(1)
                            }}
                        />

                    </div>
                </div> :
                <div>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'start',
                        marginBottom: " 0px",
                        width: "100%"
                    }}>
                        <Button style={{marginLeft: "12px",marginRight:12, color: "#F5222D", borderRadius: 0}} onClick={() => {
                            window.location.replace('assistance')
                        }}>
                            取消
                        </Button>
                        <Button onClick={() => {window.location.replace('assistance')}} style={{
                            background: '#1890FF',
                            color: "white",
                            borderRadius: 0,
                            margin: '0px 12px 12px 0px'

                        }}>
                            保存疗程
                        </Button>
                    </div>
                    <Row gutter={12} style={{height: '100%'}}>
                        <Col span={6}>
                            <Card className='body-card'
                                  style={{height: '100%', overflowY: "scroll",marginLeft:12}}>
                                <div>
                                    <div className="datalist-side-title" style={{fontSize:16,fontWeight:"bold",gap:"66px",marginBottom:10}}>
                                        DBS电极通路
                                    </div>
                                    <div>
                                        <Table
                                            pagination={false}
                                            size="small"
                                            columns={assistant_columns}
                                            dataSource={assistant_data}
                                            rowSelection={rowSelection}
                                            scroll={{y: "20vh"}}
                                        />
                                    </div>
                                    <div className="datalist-side-title" style={{fontSize:16,fontWeight:"bold",gap:"66px",marginTop:"2vh",marginBottom:10}}>
                                        通路详情
                                    </div>
                                    <div>
                                        <div className="construct-window" style={{marginBottom:10}}>
                                            频率(Hz)
                                            <Slider
                                                min={0}
                                                max={3}
                                                onChange={onChangeFreq}
                                                value={typeof inputValueFreq === 'number' ? inputValueFreq : 0}
                                                step={0.01}
                                                defaultValue={0} style={{marginLeft: "22px", width: "36%"}}
                                            /><br /><br />
                                            <InputNumber
                                                min={0}
                                                max={3}
                                                style={{ margin: '0 12px 0px 12px' }}
                                                step={0.01}
                                                value={inputValueFreq}
                                                onChange={onChangeFreq}
                                            />
                                        </div>
                                        <div className="construct-window" style={{marginBottom:10}}>
                                            强度(V)
                                            <Slider
                                                min={0}
                                                max={0.5}
                                                onChange={onChangeIntensity}
                                                value={typeof inputValueIntensity === 'number' ? inputValueIntensity : 0}
                                                step={0.01}
                                                defaultValue={0} style={{marginLeft: "30px", width: "36%"}}
                                            /><br /><br />
                                            <InputNumber
                                                min={0}
                                                max={0.5}
                                                style={{ margin: '0 12px 0px 12px' }}
                                                step={0.01}
                                                value={inputValueIntensity}
                                                onChange={onChangeIntensity}
                                            />
                                        </div>
                                        <div className="construct-window" style={{marginBottom:15}}>
                                            幅度(U)
                                            <Slider
                                                min={0}
                                                max={2.5}
                                                onChange={onChangeAmplitude}
                                                value={typeof inputValueAmplitude === 'number' ? inputValueAmplitude : 0}
                                                step={0.01}
                                                defaultValue={0} style={{marginLeft: "30px", width: "36%"}}
                                            /><br /><br />
                                            <InputNumber
                                                min={0}
                                                max={2.5}
                                                style={{ margin: '0 12px 0px 12px' }}
                                                step={0.01}
                                                value={inputValueAmplitude}
                                                onChange={onChangeAmplitude}
                                            />
                                        </div>
                                        <div style={{position: "absolute", bottom: 12, right: 12}}>
                                            <Button  className="button" style={{background: "#52c41a", color: "white"}}
                                                    onClick={() => {handleBegin()}}>开始模拟</Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col span={18}>
                            <div>
                                <Tabs style={{height: "100%"}} defaultActiveKey={0}
                                      type="card"
                                      items={createtab}
                                      onChange={onChangeTab}
                                />
                                {
                                    tab === 0 ?

                                        <Unity
                                            style={{
                                                width: '99%',
                                                height: `calc(100vh - 274px)`,
                                                marginRight: 12
                                            }}
                                            unityContext={unityContext5}/> : null
                                }
                            </div>
                        </Col>
                    </Row></div>}
        </section>
    );
}

export default Assistant;
