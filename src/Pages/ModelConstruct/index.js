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
    DeleteOutlined,
    ExclamationCircleOutlined, FilterFilled,
    FundProjectionScreenOutlined, InboxOutlined, MenuOutlined,
    PlusCircleOutlined, PlusOutlined, WindowsOutlined
} from "@ant-design/icons";
import React, {useState} from "react";
import patientdetial from "../../Assets/PatientInfo/patientDetail.png";
import defaultpic from "../../Assets/PatientInfo/defaultPic.png";
import nopic from "../../Assets/PatientInfo/noPic.png";
import TextArea from "antd/es/input/TextArea";

function ModelConstruct() {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
            index:"0",
            file:"Z...Brain CT024",
            type:"MRI",
            date:"11/12/2022"
        },
        {
            index:"1",
            file:"Z...Brain CT025",
            type:"EEG",
            date:"11/12/2022"
        },
        {
            index:"2",
            file:"Z...Brain CT026",
            type:"CT",
            date:"11/12/2022"
        },
        {
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
        {
            index:"0",
            file:"DT Model024",
            date:"11/12/2022",
            stage:"术前影像阶段"
        },
        {
            index:"1",
            file:"DT Model025",
            date:"11/12/2022",
            stage:"术前影像阶段"

        },
        {
            index:"2",
            file:"DT Model026",
            date:"11/12/2022",
            stage:"术前影像阶段"
        }
    ];

    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };



    return (
        <section className="model">
            <Modal title="导入影像文件" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
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
                    <Card style={{height: "79.5vh", borderRadius: 0, marginLeft: "12px", background: "#ffffff"}}>
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
                            rowSelection={rowSelection}
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
                        <img
                            src={defaultpic}
                            style={{width:"95%",height:"200px"}}
                        />

                    </Card>
                </Col>
                <Col span={12}>
                    <Card style={{height: "79.5vh", borderRadius: 0, background: "#000000"}}>
                        <img
                            src={nopic}
                            style={{height:"77.5vh"}}
                        />
                    </Card>
                </Col>
                <Col span={6}>
                    <Card style={{height: "79.5vh", borderRadius: 0,marginRight: "12px"}}>
                        <div className="datalist-side-title" style={{gap: "27px"}}>
                            孪生模型
                            <div>
                                <Button size="small" style={{marginRight:"5px"}} icon={<DeleteOutlined/>}>
                                    删除
                                </Button>
                                <Button size="small" style={{marginRight:"5px"}} icon={<DeleteOutlined/>}>
                                    编辑
                                </Button>
                                <Button  size="small" style={{background: '#1890FF', color: "white"}} icon={<PlusCircleOutlined/>}>
                                    查看
                                </Button>
                            </div>
                        </div>
                        <Segmented
                            style={{margin:"15px 0px",float:"left"}}
                            options={
                                [{
                                    label: '平铺视图',
                                    value: 'card',
                                    icon: <WindowsOutlined/>,
                                },
                                    {
                                        label: '列表视图',
                                        value: 'list',
                                        icon: <MenuOutlined/>,
                                    },

                                ]}
                            value={view} onChange={setView}
                        />
                        <Table
                            pagination={false}
                            size="small"
                            columns={columns1}
                            dataSource={data1}
                            rowSelection={rowSelection}
                            scroll={{ x: 400 }}
                        /><br/>
                        <div className="datalist-side-title" style={{fontSize:"16px"}} >
                            新建孪生模型
                        </div><br />
                        <Button onClick={showModal} style={{width:"100%"}}><PlusCircleOutlined/>新建</Button>
                    </Card>
                </Col>
            </Row>
        </section>
    );
}

export default ModelConstruct;
