import PageHeader from "../../Components/PageHeader";
import {
    Button,
    Card,
    Cascader,
    Col,
    DatePicker,
    Form,
    Input,
    Modal,
    Row,
    Segmented,
    Slider,
    Table,
    Tag,
    Upload
} from "antd";
import {
    DeleteOutlined, EditOutlined,
    ExclamationCircleOutlined, EyeOutlined, FilterFilled,
    FundProjectionScreenOutlined, InboxOutlined, MenuOutlined,
    PlusCircleOutlined, PlusOutlined, WindowsOutlined
} from "@ant-design/icons";
import React, {useState} from "react";
import patientdetial from "../../Assets/PatientInfo/patientDetail.png";
import defaultpic0 from "../../Assets/PatientInfo/defaultpic0.png";
import defaultpic1 from "../../Assets/PatientInfo/defaultpic1.png";
import defaultpic2 from "../../Assets/defaultpic.jpg";
import TextArea from "antd/es/input/TextArea";
import Unity, {UnityContext} from "react-unity-webgl";

const unityContext = new UnityContext({
    loaderUrl: "Scene1_WebGL/Build/Scene1_WebGL.asm.loader.js",
    dataUrl: "Scene1_WebGL/Build/Scene1_WebGL.data",
    frameworkUrl: "Scene1_WebGL/Build/Scene1_WebGL.asm.framework.js",
    codeUrl: "Scene1_WebGL/Build/Scene1_WebGL.asm.js",
    memoryUrl:"Scene1_WebGL/Build/Scene1_WebGL.asm.mem",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "UnityVolumeRendering",
    productVersion: "0.1",
});

function ModelConstruct() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [model, setModel] = useState(0);
    const [pic, setPic] = useState(0);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [view, setView] = useState("card")
    const columns= [
        {
            title: '序号',
            dataIndex: 'index',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: '文件名',
            dataIndex: 'file',
        },
        {
            title: '类型',
            dataIndex: 'type',
        },{
            title: '日期',
            dataIndex: 'date',
        },
    ];
    const data=[
        {
            key:0,
            index:"0",
            file:"Z...Brain CT024",
            type:"MRI",
            date:"11/12/2022"
        },
        {key:1,
            index:"1",
            file:"Z...Brain CT025",
            type:"EEG",
            date:"11/12/2022"
        },
        {key:2,
            index:"2",
            file:"Z...Brain CT026",
            type:"CT",
            date:"11/12/2022"
        },
        {key:3,
            index:"3",
            file:"Z...Brain CT027",
            type:"CT",
            date:"11/12/2022"
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
        {key:0,
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
                setPic(0)
            }else{
                setPic(1)
            }
        }
    };
    const rowSelection2 = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            if(selectedRowKeys.length===0){
                setModel(0)
            }else{
                setModel(1)
            }
            console.log(model)
        }
    };


    return (
        <section className="model">
            <Modal title="导入影像文件" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    layout="horizontal"
                >
                    <Form.Item label="上传" valuePropName="fileList">
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <InboxOutlined />
                                <div style={{ marginTop: 8 }}>上传影像文件</div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="文件名">
                        <Input placeholder="请输入文件名"/>
                    </Form.Item>
                    <Form.Item label="类型">
                        <Cascader
                            placeholder="请选择数据类型"
                            options={[
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                            value: 'hangzhou',
                                            label: 'Hangzhou',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="治疗阶段">
                        <Cascader
                            placeholder="请选择治疗阶段"
                            options={[
                                {
                                    value: 'zhejiang',
                                    label: 'Zhejiang',
                                    children: [
                                        {
                                            value: 'hangzhou',
                                            label: 'Hangzhou',
                                        },
                                    ],
                                },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item label="日期">
                        <DatePicker placeholder="请选择日期"/>
                    </Form.Item>
                    <Form.Item label="备注">
                        <TextArea rows={4} placeholder="请输入备注"/>
                    </Form.Item>
                </Form>
            </Modal>
            <PageHeader/>
            <img
                src={patientdetial}
                style={{width:"100%"}}
            />
            <Row gutter={12}>
                <Col span={6}>
                    <Card style={{height: `calc(100vh - 168px)`, borderRadius: 0, marginLeft: "12px",overflowY:"scroll"}}>
                        <div className="datalist-side-title" style={{gap:"36px"}}>
                            医疗影像数据库
                            <div>
                                <Button size="small" style={{marginRight:"5px"}} icon={<DeleteOutlined/>}>
                                    删除
                                </Button>
                                <Button onClick={showModal}  size="small" style={{background: '#1890FF', color: "white"}} icon={<PlusCircleOutlined/>}>
                                    导入
                                </Button>
                            </div>
                        </div>
                        <br/>
                        <div>
                            <Row  style={{display:"flex",
                                flexDirection: "row"}}>
                                <Col span={2}>
                                    <FilterFilled style={{color:"#1890FF",fontSize:"24px"}}/>
                                </Col>
                                <Col span={11} >
                                    类型{"\t"}
                                    <Cascader size="small" style={{width:"94px"}} placeholder="选择类型" />
                                </Col>
                                <Col span={11}>
                                    阶段{"\t"}
                                    <Cascader size="small" style={{width:"94px"}}  placeholder="患者治理阶段" />
                                </Col>
                            </Row>
                        </div><br/>
                        <Table
                            pagination={false}
                            size="small"
                            columns={columns}
                            dataSource={data}
                            rowSelection={{
                                type: "checkbox",
                                ...rowSelection1,
                            }}
                            scroll={{ x: 400 }}
                        /><br/>
                        <div className="datalist-side-title" style={{gap: "10px"}}>
                            影像预览窗口
                        </div>
                        <div className="construct-window" style={{marginTop:"10px"}}>
                            切片方向
                            <Cascader size="small" style={{marginLeft:"10px",width:"75%"}} placeholder="选择方向"></Cascader>
                        </div>
                        <div className="construct-window" style={{marginTop:"10px"}}>
                            位置(mm)
                            <Slider defaultValue={30} style={{marginLeft:"10px",width:"75%"}} />
                        </div>
                        {
                            pic===0?<img
                                src={defaultpic0}
                                style={{width:"95%",height:"200px"}}
                            />:<img
                                src={defaultpic2}
                                style={{width:"95%",height:"200px"}}
                            />
                        }


                    </Card>
                </Col>
                <Col span={12}>
                    {
                        model === 0 ?
                            <div style={{background: 'black'}}>
                                <img
                                    src={defaultpic1}
                                    style={{height: `calc(100vh - 170px)`, width: "100%"}}
                                />
                            </div>:
                            <Unity style={{'width': '99%', 'height': '99%'}} unityContext={unityContext}/>
                    }
                </Col>
                <Col span={6}>
                    <Card style={{height: `calc(100vh - 168px)`, borderRadius: 0, marginRight: "12px",overflowY:"scroll"}}>
                        <div className="datalist-side-title" style={{gap: "27px"}}>
                            孪生模型
                            <div>
                                <Button size="small" style={{marginRight:"5px"}} icon={<DeleteOutlined/>}>
                                    删除
                                </Button>
                                <Button size="small" style={{marginRight:"5px"}} icon={<EditOutlined />}>
                                    编辑
                                </Button>
                                <Button  size="small" style={{background: '#1890FF', color: "white"}} icon={<EyeOutlined />}>
                                    查看
                                </Button>
                            </div>
                        </div>
                        <Segmented
                            style={{margin:"15px 0px",float:"left"}}
                            options={
                                [{
                                    label: '列表视图',
                                    value: 'list',
                                    icon: <MenuOutlined/>,
                                },{
                                    label: '平铺视图',
                                    value: 'card',
                                    icon: <WindowsOutlined/>,
                                }

                                ]}
                            value={view} onChange={setView}
                        />
                        <Table
                            pagination={false}
                            size="small"
                            columns={columns1}
                            dataSource={data1}
                            rowSelection={rowSelection2}
                            scroll={{ x: 400 }}
                        /><br/>
                        <div className="datalist-side-title" style={{fontSize:"16px"}} >
                            新建孪生模型
                        </div><br />

                        <Form
                            labelCol={{ span: 4 }}
                            wrapperCol={{ span: 20 }}
                            layout="horizontal"
                        >
                            <Form.Item label="上传" valuePropName="fileList">
                                <Upload action="/upload.do" listType="picture-card" >
                                    <div>
                                        <InboxOutlined />
                                        <div style={{ marginTop: 8 }}>上传孪生模型</div>
                                    </div>
                                </Upload>
                            </Form.Item>
                            <Form.Item label="文件名">
                                <Input placeholder="请输入文件名"/>
                            </Form.Item>
                            <Form.Item label="类型">
                                <Cascader
                                    placeholder="请选择数据类型"
                                    options={[
                                        {
                                            value: 'zhejiang',
                                            label: 'Zhejiang',
                                            children: [
                                                {
                                                    value: 'hangzhou',
                                                    label: 'Hangzhou',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item label="阶段">
                                <Cascader
                                    placeholder="请选择治疗阶段"
                                    options={[
                                        {
                                            value: 'zhejiang',
                                            label: 'Zhejiang',
                                            children: [
                                                {
                                                    value: 'hangzhou',
                                                    label: 'Hangzhou',
                                                },
                                            ],
                                        },
                                    ]}
                                />
                            </Form.Item>
                            <Form.Item label="日期">
                                <DatePicker placeholder="请选择日期" style={{width:"100%"}}/>
                            </Form.Item>
                            <Form.Item label="备注">
                                <TextArea rows={4} placeholder="请输入备注"/>
                            </Form.Item>
                        </Form>
                        <Button type={"primary"} style={{width:"100%",marginBottom:20}}><PlusCircleOutlined/>新建</Button>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}

export default ModelConstruct;
