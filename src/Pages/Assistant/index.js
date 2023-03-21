import React, {useState} from "react";
import {
    Button,
    Card,
    Checkbox,
    Col, InputNumber, Radio,
    Row,
    Segmented,
    Slider,
    Table, Tabs,
} from "antd";
import {
    EyeInvisibleOutlined, EyeOutlined,
    MenuOutlined, StockOutlined,
    WindowsOutlined
} from "@ant-design/icons";
import PageHeader from "../../Components/PageHeader";
import patientdetial from "../../Assets/PatientInfo/patientDetail.png";
import info from "../../Assets/assistant/info.png"
import side from "../../Assets/assistant/side.png"
import nopic from "../../Assets/PatientInfo/noPic.png";
import mode0 from "../../Assets/hu/mode0.png"
import mode1 from "../../Assets/hu/mode1.png"
import mode2 from "../../Assets/hu/mode2.png"
import Unity, {UnityContext} from "react-unity-webgl";
import defaultpic1 from "../../Assets/PatientInfo/defaultpic1.png";
import Area from "../OperationDesign/PlanPage/area";
import Vessel from "../OperationDesign/PlanPage/vessel";
import Point from "../OperationDesign/PlanPage/point";
import Electricity from "../OperationDesign/PlanPage/electricity";

const unityContext4 = new UnityContext({
    loaderUrl: "Scene2_WebGL/Build/Scene2_WebGL.asm.loader.js",
    dataUrl: "Scene2_WebGL/Build/Scene2_WebGL.data",
    frameworkUrl: "Scene2_WebGL/Build/Scene2_WebGL.asm.framework.js",
    codeUrl: "Scene2_WebGL/Build/Scene2_WebGL.asm.js",
    memoryUrl: "Scene2_WebGL/Build/Scene2_WebGL.asm.mem",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "UnityVolumeRendering",
    productVersion: "0.1",
});


const onChange = (key: string) => {
};

function Assistant() {
    const [view, setView] = useState(0)
    const [model, setModel] = useState(0);
    const createtab=[
        {
            key: 0,
            label: "电刺激效果模拟",
            children: <Unity style={{'width': '99%', 'height': `calc(100vh - 274px)`,marginRight:12}} unityContext={unityContext4}/>,
        },
        {
            key: 1,
            label: "预测_DTI模型",
            children: <Unity style={{'width': '99%', 'height': `calc(100vh - 274px)`,marginRight:12}} unityContext={unityContext4}/>,
        },
        {
            key: 2,
            label: "预测_脑网络节点模型",
            children: <Unity style={{'width': '99%', 'height': `calc(100vh - 274px)`,marginRight:12}} unityContext={unityContext4}/>,
        },
        {
            key: 3,
            label: "预测_脑网络热力模型",
            children: <Unity style={{'width': '99%', 'height': `calc(100vh - 274px)`,marginRight:12}} unityContext={unityContext4}/>,
        },
    ]

    return (
        <section className="model">
            <PageHeader/>
            <img
                src={patientdetial}
                style={{width: "100%"}}
            />
            {view === 0 ?
                <div style={{marginLeft:12,marginRight:12,height:`calc( 100vh - 168px )`,overflowY:"scroll"}}>
                <img
                    src={info}
                    style={{width:"100%"}}
                    onClick={() => {
                        setView(1)
                    }}
                /></div> :
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
                    <Row gutter={12}>
                        <Col span={6}>
                            <div style={{
                                height: `calc(100vh - 218px)`,
                                borderRadius: 0,
                                overflowY: "scroll",
                                background: "white",
                                marginLeft: 12
                            }}>
                                <img
                                    src={side}
                                    style={{
                                        width: "100%",
                                    }}
                                    onClick={()=>{setModel(1)}}
                                />
                            </div>
                        </Col>
                        <Col span={18}>
                            {
                                model === 0 ?
                                    <div style={{background: 'black',marginRight:12}}>
                                        <img
                                            src={defaultpic1}
                                            style={{height: `calc(100vh - 218px)`}}
                                        />
                                    </div>:
                                    <Tabs style={{height: "100%",marginLeft:12}} defaultActiveKey={0}
                                          type="card"
                                          items={createtab}
                                          onChange={onChange}
                                    />
                            }
                        </Col>
                    </Row></div>}
        </section>
    );
}

export default Assistant;
