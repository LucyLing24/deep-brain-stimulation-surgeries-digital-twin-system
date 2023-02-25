import React from "react";
import {Badge, Typography} from "antd";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";

const operation_plan_vessel_columns = [

    {
        title: '血管名称',
        dataIndex: 'name',
        render: (text: string) => <Typography.Text ellipsis style={{width:120}}>{text}</Typography.Text>,
    },
    {
        title: '颜色',
        dataIndex: 'color',
        render: (color: string) => <Badge color={color}></Badge>,
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
    },
];

export default operation_plan_vessel_columns;
