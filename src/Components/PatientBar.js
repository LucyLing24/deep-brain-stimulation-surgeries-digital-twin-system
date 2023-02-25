import React from "react";
import {Avatar, Card} from "antd";
import p0 from "../Assets/PatientInfo/patient0.png";
import {CaretDownFilled, UserOutlined} from "@ant-design/icons";


function PatientBar() {
    const mock_data = {
        id: 8990876,
        pic: p0,
        name: "张超英",
        age: 73,
        sex: "女",
        stage: "术前影像阶段",
        prob: "帕金森（pd）",
        phone: "12567896543",
        idCard: "320304195109182046",
        status: ["danger", "old"],
        model: [
            {
                time: "11/22/22",
                model: ""
            },
            {
                time: "11/22/22",
                model: ""
            },
        ],
    }

    return (
        <Card bordered={false} style={{margin: 12, borderRadius: 0}}>
            <Avatar style={{backgroundColor: '#bfbfbf', float: 'left'}} icon={<UserOutlined/>}/>
        </Card>
    );
}

export default PatientBar;
