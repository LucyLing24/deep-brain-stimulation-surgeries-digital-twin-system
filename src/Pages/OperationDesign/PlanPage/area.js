import React, {useState} from "react";
import {Button, Card, Modal, Slider, Table, Tabs, Typography} from "antd";
import operation_plan_area_data from "../../Const/operation_plan_area_data";
import operation_plan_area_columns from "../../Const/operation_plan_area_columns";
import tips from "../../../Assets/tips.jpeg"
import tips1 from "../../../Assets/tips1.jpeg"
import Search from "antd/es/input/Search";

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
                <Slider step={10} defaultValue={25} style={{marginLeft: "30px", width: "80%"}}/>
            </div>
            <div className="construct-window">
                笔刷力度
                <Slider step={10} defaultValue={25} style={{marginLeft: "30px", width: "80%"}}/>
            </div>
            <div className="construct-window">
                操作说明<img src={tips1} style={{marginLeft: "28px", width: "380px"}}/>
            </div>
        </div>,
    },
]


function Area() {

    const [selectedRowKeys,setSelectedRowKeys]=useState([]);
    const [showModal,setShowModal]=useState(false);
    const [step,setStep]=useState(0);

    const handleOk = () => {
        setShowModal(false);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const onSelectChange =(newSelectedRowKeys)=>{
        console.log(123,newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    }
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = setSelectedRowKeys.length > 0;

    return (
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
                <Button style={{background: "#1890FF", color: "white"}} className="button" onClick={()=>window.location.reload()}>配准并导入</Button>
                <Button disabled={!hasSelected} className="button" style={{background: "#52c41a", color: "white"}}
                        onClick={() => {
                            setShowModal(true)
                        }}>手动调整</Button>
            </div>
            <Modal title="手动调整" open={showModal} onOk={handleOk} onCancel={handleCancel}>
               <Tabs defaultActiveKey="0" items={createtab}>
               </Tabs>
            </Modal>
        </div>
    )
}


export default Area;
