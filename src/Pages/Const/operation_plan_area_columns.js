import React from "react";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {Badge, Typography} from "antd";

const operation_plan_area_columns = [
    {
        title: '核团名称',
        dataIndex: 'name',
        render: (text: string) => <Typography.Text ellipsis style={{width:120}}>{text}</Typography.Text>,
    },
    {
        title: '状态',
        dataIndex: 'status',
        render: (text: string) => <a>{text}</a>,
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
    }
];

export default operation_plan_area_columns;
