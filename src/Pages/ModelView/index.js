import React, {useState} from "react";
import {
    Button,
    Card,
    Checkbox,
    Col, InputNumber, Radio,
    Row,
    Segmented,
    Slider,
    Table,
} from "antd";
import {
    EyeInvisibleOutlined, EyeOutlined,
    MenuOutlined, StockOutlined,
    WindowsOutlined
} from "@ant-design/icons";
import PageHeader from "../../Components/PageHeader";
import patientdetial from "../../Assets/PatientInfo/patientDetail.png";
import nopic from "../../Assets/PatientInfo/noPic.png";
import mode0 from "../../Assets/hu/mode0.png"
import mode1 from "../../Assets/hu/mode1.png"
import mode2 from "../../Assets/hu/mode2.png"
import Unity, {UnityContext} from "react-unity-webgl";
import defaultpic1 from "../../Assets/PatientInfo/defaultpic1.png";

const unityContext = new UnityContext({
    loaderUrl: "Scene2_WebGL/Build/Scene2_WebGL.asm.loader.js",
    dataUrl: "Scene2_WebGL/Build/Scene2_WebGL.data",
    frameworkUrl: "Scene2_WebGL/Build/Scene2_WebGL.asm.framework.js",
    codeUrl: "Scene2_WebGL/Build/Scene2_WebGL.asm.js",
    memoryUrl:"Scene2_WebGL/Build/Scene2_WebGL.asm.mem",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "UnityVolumeRendering",
    productVersion: "0.1",
});

function showModal(){
    unityContext.send("EditTrans", "Show");
}
function changeMax(data){
    unityContext.send("SetVisibilityMAX", "VisibilityMAXSet_ForWebGL",data);
}

function ModelView() {
    const [view, setView] = useState("list")
    const [inputValue, setInputValue] = useState(0.2);
    const [model, setModel] = useState(0);

    const onChange = (newValue) => {
        setInputValue(newValue);
        changeMax(newValue);
    };
    const blockcolumns = [
        {
            title: '序号',
            dataIndex: 'index',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: '区域',
            dataIndex: 'block',
        },
        {
            title: '可见性',
            dataIndex: 'visible',
            render: (flag) => {
                if(flag===true){
                    return <EyeOutlined style={{color:"#1890FF"}} />
                }
                else{
                    return <EyeInvisibleOutlined />
                }
            },
        }
    ];
    const blockdata=[
        {
            key:0,
            index:"0",
            block:"Skin",
            visible:true
        },
        {
            key:1,
            index:"1",
            block:"Left_hemisphere",
            visible:false
        },
        {
            key:2,
            index:"2",
            block:"Right_hemisphere",
            visible:true
        },{
            key:3,
            index:"3",
            block:"Cerebellum",
            visible:true
        },
    ];
    const columns1= [
        {
            title: '序号',
            dataIndex: 'index',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: '文件名',
            dataIndex: 'file',
        },{
            title: '日期',
            dataIndex: 'date',
        },
        {
            title: '治疗阶段',
            dataIndex: 'stage',
        },
    ];
    const data1=[
        {
            key:0,
            index:"0",
            file:"DT Model024",
            date:"11/12/2022",
            stage:"术前影像阶段"
        },
        {key:1,
            index:"1",
            file:"DT Model025",
            date:"11/12/2022",
            stage:"术前影像阶段"

        },
        {key:2,
            index:"2",
            file:"DT Model026",
            date:"11/12/2022",
            stage:"术前影像阶段"
        }
    ];

    const rowSelection1 = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            if(selectedRowKeys.length===0){
                setModel(0)
            }else{
                setModel(1)
            }
        }
    };
    const rowSelection2 = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        }
    };

    return (
        <section className="model">
            <PageHeader/>
            <img
                src={patientdetial}
                style={{width: "100%"}}
            />
            <Row gutter={12}>
                <Col span={6}>
                    <Card style={{height: `calc(100vh - 168px)`, borderRadius: 0, marginLeft: "12px",overflowY:"scroll"}}>
                        <div className="view-title">
                            孪生模型查看
                            <Button size="small" style={{background: '#1890FF', color: "white"}}>
                                选择孪生模型
                            </Button>
                        </div>
                        <div>
                            <Segmented
                                style={{margin: "10px 0px", float: "left"}}
                                options={
                                    [
                                        {
                                            label: '列表视图',
                                            value: 'list',
                                            icon: <MenuOutlined/>,
                                        },
                                        {
                                            label: '平铺视图',
                                            value: 'card',
                                            icon: <WindowsOutlined/>,
                                        },
                                    ]}
                                value={view} onChange={setView}
                            />
                            <Table

                                pagination={false}
                                size="small"
                                columns={columns1}
                                dataSource={data1}
                                rowSelection={rowSelection1}
                                scroll={{x: 400}}
                            />
                        </div>
                        <div className="datalist-side-title"
                             style={{marginTop:"10px",fontSize: "15px", justifyContent: "space-between"}}>
                            渲染模式
                            <Checkbox>隐藏颅外组织</Checkbox>
                        </div>
                        <div>
                            <div className="view-hu">
                                <img
                                    src={mode0}
                                    style={{width:"125px"}}
                                />
                                <Radio></Radio>
                            </div>
                            <div className="view-hu">
                                <img
                                    src={mode1}
                                    style={{width:"165px"}}
                                />
                                <Radio></Radio>
                            </div>
                            <div className="view-hu">
                                <img
                                    src={mode2}
                                    style={{width:"150px"}}
                                />
                                <Radio></Radio>
                            </div>
                        </div>
                        <div>
                            <div className="datalist-side-title" style={{marginTop:"10px",fontSize: "15px"}}>
                                HU值滤镜
                            </div>
                            <div className="construct-window" style={{marginBottom:10}}>
                                显示范围
                                <Slider
                                    min={0}
                                    max={0.8}
                                    onChange={onChange}
                                    value={typeof inputValue === 'number' ? inputValue : 0}
                                    step={0.01}
                                    defaultValue={0.4} style={{marginLeft: "30px", width: "30%"}}
                                />
                                <InputNumber
                                    min={0}
                                    max={0.8}
                                    style={{ margin: '0 12px' }}
                                    step={0.01}
                                    value={inputValue}
                                    onChange={onChange}
                                />
                            </div>
                            <Button style={{width:"100%"}} icon={<StockOutlined />} onClick={showModal}>高级设置</Button>
                        </div>
                        <div className="datalist-side-title" style={{marginTop:"10px",fontSize:"15px"}} >
                            分区可见性
                        </div>
                        <Table
                            pagination={false}
                            size="small"
                            columns={blockcolumns}
                            dataSource={blockdata}
                            rowSelection={rowSelection2}
                            scroll={{y:"20vh"}}
                        />
                </Card>
                </Col>
                <Col span={18}>
                    {
                        model === 0 ?
                            <div style={{background: 'black',marginRight:12}}>
                                <img
                                    src={defaultpic1}
                                    style={{height: `calc(100vh - 170px)`}}
                                />
                            </div>:
                            <Unity style={{'width': '99%', 'height': '99%'}} unityContext={unityContext}/>
                    }
                </Col>
            </Row>
        </section>
    );
}

export default ModelView;
