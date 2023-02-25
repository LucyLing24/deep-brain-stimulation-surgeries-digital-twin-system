import React from "react";

const operation_list_columns = [
    {
        title: '序号',
        dataIndex: 'index',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: '标记',
        dataIndex: 'star',
    },
    {
        title: '方案名称',
        dataIndex: 'name',
    }, {
        title: '创建日期',
        dataIndex: 'date',
    },
    {
        title: 'dbs电级数',
        dataIndex: 'enum',
    },
    {
        title: '靶点1',
        dataIndex: 'point1',
    },
    {
        title: '靶点1坐标(HF/LR/FB)',
        dataIndex: 'point1pos',
    },
    {
        title: '靶点2',
        dataIndex: 'point2',
    },
    {
        title: '靶点2坐标(HF/LR/FB)',
        dataIndex: 'point2pos',
    },
    {
        title: '靶点3',
        dataIndex: 'point3',
    },
    {
        title: '靶点3坐标(HF/LR/FB)',
        dataIndex: 'point3pos',
    }, {
        title: '靶点4',
        dataIndex: 'point4',
    },
    {
        title: '靶点4坐标(HF/LR/FB)',
        dataIndex: 'point4pos',
    },
    {
        title: '是否需要电级测试',
        dataIndex: 'test',
    },
];

export default operation_list_columns;
