import {Button, Card, Segmented, Table} from "antd";
import {DeleteOutlined, EyeOutlined, MenuOutlined, PlusCircleOutlined, WindowsOutlined} from "@ant-design/icons";
import operation_list_columns from "../Const/operation_list_columns";
import operation_list_data from "../Const/operation_list_data";
import React, {useState} from "react";

function OperationList(props) {
    const {setCreate}=props;
    const [hasData, setdata] = useState(true);
    const [view, setView] = useState(false);

    const rowSelection = {
        onChange: () => {
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    return (
        <>
            {hasData === false ?
                <Card className='body-card' style={{height: `calc(100vh - 168px)`, margin: "0px 12px"}}>
                    <div className="view-title">
                        手术方案列表
                        <div>
                            <Button disabled style={{marginRight: "5px"}} icon={<DeleteOutlined/>}>
                                删除方案
                            </Button>
                            <Button disabled icon={<EyeOutlined/>}>
                                查看方案
                            </Button>
                        </div>
                    </div>
                    <div style={{marginTop: "250px"}}>
                        <Button icon={<PlusCircleOutlined/>} style={{background: '#1890FF', color: "white"}}>
                            新增方案
                        </Button>
                    </div>
                </Card>
                :
                <Card className='body-card' style={{height: `calc(100vh - 168px)`, margin: "0px 12px"}}>
                    <div className="view-title">
                        手术方案列表
                        <div>
                            <Button style={{marginRight: "10px", borderRadius: 0}} icon={<DeleteOutlined/>}>
                                删除方案
                            </Button>
                            <Button style={{marginRight: "10px", borderRadius: 0}} icon={<EyeOutlined/>}>
                                查看方案
                            </Button>
                            <Button onClick={() => {
                                setCreate(true)
                            }} icon={<PlusCircleOutlined/>}
                                    style={{background: '#1890FF', color: "white", borderRadius: 0}}>
                                新增方案
                            </Button>
                        </div>
                    </div>
                    <br/>
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
                        columns={operation_list_columns}
                        dataSource={operation_list_data}
                        rowSelection={rowSelection}
                        scroll={{x: 400}}
                    />
                </Card>
            }
        </>
    )
}

export default OperationList;
