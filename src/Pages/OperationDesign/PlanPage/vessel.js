import React, {useState} from "react";
import {Button, Card, Table, Tabs, Typography} from "antd";
import operation_plan_vessel_columns from "../../Const/operation_plan_vessel_columns";
import operation_plan_vessel_data from "../../Const/operation_plan_vessel_data";
import Search from "antd/es/input/Search";

function Vessel() {

    const [hasdata,setHasdata]=useState(false)
    const rowSelection = {
        onChange: () => {
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.name === 'Disabled User', // Column configuration not to be checked
            name: record.name,
        }),
    };

    return (
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
    )
}


export default Vessel;
