import React from "react";
import {EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import {Badge, Typography} from "antd";

const operation_plan_point_columns = [
    {
        title: '名称',
        dataIndex: 'name',
        render: (text: string) => <Typography.Text ellipsis style={{width:120}}>{text}</Typography.Text>,
    },
    {
        title: '类型',
        dataIndex: 'type',
        render: (text: string) => <Typography.Text ellipsis style={{width:120}}>{text}</Typography.Text>,
    },
    {
        title: '调整',
        dataIndex: 'manner',
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

export default operation_plan_point_columns;
