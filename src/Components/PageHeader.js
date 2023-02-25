import React, { useState } from "react";
import {Header} from "antd/es/layout/layout";
import {Avatar, Breadcrumb} from "antd";
import logo from "../Assets/logo.svg";
import {CaretDownFilled, NotificationFilled, SettingFilled, UserOutlined} from '@ant-design/icons';
import Search from "antd/es/input/Search";
import modelConstruct from "../Pages/ModelConstruct";

function PageHeader() {

    const onSearch = (value: string) => console.log(value);

    return (
        <Header className="pageheader">
            <img
                src={logo}
                alt="logo"
                style={{width: '38px'}}
                onClick={()=>{
                    window.location.replace("/")
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
                    username
                    <CaretDownFilled/>
                </div>
            </div>
        </Header>
    );
}

export default PageHeader;
