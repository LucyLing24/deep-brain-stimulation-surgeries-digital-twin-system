import React, {useState} from "react";
import {Button, Card, Col, Row, Table, Tabs, Typography} from "antd";
import operation_plan_vessel_columns from "../../Const/operation_plan_vessel_columns";
import operation_plan_vessel_data from "../../Const/operation_plan_vessel_data";
import Search from "antd/es/input/Search";
import Unity, {UnityContext} from "react-unity-webgl";

const unityContext3 = new UnityContext({
    loaderUrl: "Scene3_WebGL/Build/Scene3_WebGL.asm.loader.js",
    dataUrl: "Scene3_WebGL/Build/Scene3_WebGL.data",
    frameworkUrl: "Scene3_WebGL/Build/Scene3_WebGL.asm.framework.js",
    codeUrl: "Scene3_WebGL/Build/Scene3_WebGL.asm.js",
    memoryUrl:"Scene3_WebGL/Build/Scene3_WebGL.asm.mem",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "DefaultCompany",
    productName: "UnityVolumeRendering",
    productVersion: "0.1",
});
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
        <Row gutter={12}>
            <Col span={6}>
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
            </Col>
            <Col span={18}>
                <Unity style={{'width': '99%', height: `calc(100vh - 226px)`}} unityContext={unityContext3}/>
            </Col>
        </Row>
    )
}


export default Vessel;
