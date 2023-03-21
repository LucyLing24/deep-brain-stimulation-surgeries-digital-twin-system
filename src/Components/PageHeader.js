import React, { useState } from "react";
import {Header} from "antd/es/layout/layout";
import {Avatar, Breadcrumb, Dropdown} from "antd";
import logo from "../Assets/logo.svg";
import {CaretDownFilled, NotificationFilled, SettingFilled, UserOutlined} from '@ant-design/icons';
import Search from "antd/es/input/Search";
const items: MenuProps['items'] = [
    {
        key: '0',
        label: (
            <div onClick={()=>{
                window.location.replace('*')}}>
                切换账号
            </div>
        )
    },
    {
        key: '1',
        label: (
            <div onClick={()=>{
                window.location.replace('*')}}>
                退出登陆
            </div>
        ),
        danger:true
    }
];
function PageHeader() {

    const onSearch = (value: string) => console.log(value);

    return (
        <Header className="pageheader">
            <img
                src={logo}
                alt="logo"
                style={{width: '38px'}}
                onClick={()=>{
                    window.location.replace("menu")
                }}
            />
            <div>
                <div className="header-title1">
                    DT-DBS
                </div>
                <div className="header-title2">
                    DBS手术治疗数字孪生系统
                </div>
            </div>
            <Search placeholder="搜索" allowClear onSearch={onSearch} style={{ width: 200 }} />
            <Breadcrumb className="bread">
                <Breadcrumb.Item>患者数据管理</Breadcrumb.Item>
                {window.location.pathname === "/modelconstruct" ?
                    <Breadcrumb.Item>孪生模型构建</Breadcrumb.Item> : null}
            </Breadcrumb>
            <div className="header-icon">
                <SettingFilled/>
                <NotificationFilled/>
                <div className="header-user">
                    <Avatar style={{backgroundColor: '#bfbfbf'}} icon={<UserOutlined/>}/>
                    神经外科 王颖
                    <Dropdown menu={{items ,selectable: true,}} placement="bottomRight" arrow={{pointAtCenter: true}} >
                        <CaretDownFilled/>
                    </Dropdown>
                </div>
            </div>
        </Header>
    );
}

export default PageHeader;
