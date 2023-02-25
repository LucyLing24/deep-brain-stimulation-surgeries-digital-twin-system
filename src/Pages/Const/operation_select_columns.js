import React from "react";

const operation_select_columns = [

    {
        title: '序号',
        dataIndex: 'index',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: '文件名',
        dataIndex: 'file',
    }, {
        title: '日期',
        dataIndex: 'date',
    },
    {
        title: '治疗阶段',
        dataIndex: 'stage',
    }
];

export default operation_select_columns;
