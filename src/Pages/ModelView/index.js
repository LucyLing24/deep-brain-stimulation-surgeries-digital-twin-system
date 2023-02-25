import React, {useState} from "react";
import {
    Button,
    Card,
    Checkbox,
    Col, Radio,
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


function ModelView() {
    const [view, setView] = useState("card")
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
            index:"0",
            block:"Skin",
            visible:true
        },
        {
            index:"1",
            block:"Left_hemisphere",
            visible:false
        },
        {
            index:"2",
            block:"Right_hemisphere",
            visible:true
        },{
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
    const marks= {
        0: '-1000',
        25: '-500',
        50: '0',
        75:'500',
        100: '1000+',
    };

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
            <PageHeader/>
            <img
                src={patientdetial}
                style={{width: "100%"}}
            />
            <Row gutter={12}>
                <Col span={6}>
                    <Card style={{height: "79.5vh", borderRadius: 0, marginLeft: "12px",overflowY:"scroll"}}>
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
                            <div className="construct-window">
                                显示范围
                                <Slider marks={marks} step={10} defaultValue={25} style={{marginLeft: "30px", width: "60%"}}/>
                            </div>
                            <Button style={{width:"100%"}} icon={<StockOutlined />}>高级设置</Button>
                        </div>
                        <div className="datalist-side-title" style={{marginTop:"10px",fontSize:"15px"}} >
                            分区可见性
                        </div>
                        <Table
                            pagination={false}
                            size="small"
                            columns={blockcolumns}
                            dataSource={blockdata}
                            rowSelection={rowSelection}
                            scroll={{y:"20vh"}}
                        />
                </Card>
                </Col>
                <Col span={18}>
                    <Card style={{height: "79.5vh", borderRadius: 0, background: "#000000"}}>
                        <img
                            src={nopic}
                            style={{height:"77.5vh"}}
                        />
                    </Card>
                </Col>
            </Row>
        </section>
    );
}

export default ModelView;
