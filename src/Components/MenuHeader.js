import React, { useState } from "react";
import {Header} from "antd/es/layout/layout";
import {Avatar} from "antd";
import logo from "../Assets/logo.svg";
import {CaretDownFilled, NotificationFilled, SettingFilled, UserOutlined} from '@ant-design/icons';

function MenuHeader() {
    return (
        <Header className="header">
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

export default MenuHeader;
