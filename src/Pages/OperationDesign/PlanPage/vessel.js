import React, {useState} from "react";
import {Button, Card, Col, Row, Table, Tabs, Typography} from "antd";
import operation_plan_vessel_columns from "../../Const/operation_plan_vessel_columns";
import operation_plan_vessel_data from "../../Const/operation_plan_vessel_data";
import Search from "antd/es/input/Search";


function Vessel(props) {
    const {handleShow2,handleShow1,handleShow3}=props;

    const [hasdata,setHasdata]=useState(false)
    const rowSelection = {
        onChange: (newSelectedRowKeys)=>{
            if(newSelectedRowKeys.length===1){
                handleShow2();
            }
            if(newSelectedRowKeys.length===2){
                handleShow1();
            }
            if(newSelectedRowKeys.length>2){
                handleShow3();
            }
        }
    };

    return (
                <Card className='body-card'
                      style={{height: `calc(100vh - 226px)`, overflowY: "scroll"}}>
                    <div>
                        {hasdata === false ?
                            <div style={{marginTop: "250px"}}>
                                <Button onClick={() => setHasdata(true)}
                                        style={{background: '#1890FF', color: "white", borderRadius: 0}}>
                                    AI标注
                                </Button>
                            </div> :
                            <div>
                                <div className="datalist-side-title" style={{fontSize:16,fontWeight:"bold"}}>血管AI标注
                                </div>
                                <div style={{margin: "10px 0px"}}>
                                    <Search placeholder="搜索血管"></Search>
                                </div>
                                <Table
                                    pagination={false}
                                    size="small"
                                    columns={operation_plan_vessel_columns}
                                    dataSource={operation_plan_vessel_data}
                                    rowSelection={rowSelection}
                                    scroll={{y: "50vh"}}
                                />
                            </div>
                        }
                    </div>
                </Card>
    )
}


export default Vessel;
