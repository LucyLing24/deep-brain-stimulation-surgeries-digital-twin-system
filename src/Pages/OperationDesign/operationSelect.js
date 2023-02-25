import React, {useState} from "react";
import {Button, Card, Col, Row, Segmented, Table, Tabs} from "antd";
import {MenuOutlined, WindowsOutlined} from "@ant-design/icons";
import nopic from "../../Assets/defaultpic.jpg";
import operation_select_columns from "../Const/operation_select_columns";
import operation_select_data from "../Const/operation_select_data";

function OperationSelect(props) {
    const {setSelect} =props;
    const [nextButton, setNextButton] = useState(false)
    const [view, setView] = useState(false);

    const rowSelection = {
        onChange: () => {
            setNextButton(true)
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    console.log(operation_select_data,operation_select_columns)

    return (
        <Row gutter={12}>
            <Col span={6}>
                <Card className='body-card'
                      style={{height: `calc(100vh - 168px)`, marginLeft: 12, position: "relative"}}>
                    <div className="view-title">
                        选择孪生模型
                    </div>
                    <div>
                        <Segmented
                            style={{margin: "15px 0px", float: "left"}}
                            options={
                                [{
                                    label: '列表视图',
                                    value: 'list',
                                    icon: <MenuOutlined/>,
                                }, {
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
                            columns={operation_select_columns}
                            dataSource={operation_select_data}
                            rowSelection={rowSelection}
                            scroll={{x: 400}}
                        />
                    </div>
                    <div style={{position: "absolute", bottom: 0, right: 0, margin: 15}}>
                        <Button className="button">取消</Button>
                        <Button type='primary' className="button" disabled={!nextButton}
                                onClick={() => setSelect(true)}>下一步</Button>
                    </div>
                </Card>
                }
            </Col>
            <Col span={18}>
                <Card className='body-card'
                      style={{height: `calc(100vh - 168px)`, marginRight: 12, background: "#000000"}}>
                    <img
                        src={nopic}
                        style={{height: `calc(100vh - 200px)`}}
                    />
                </Card>
            </Col>
        </Row>
    )
}


export default OperationSelect;
