import React, {useState} from "react";
import {Container} from "react-bootstrap";
import MenuHeader from "../../Components/MenuHeader";
import {Card, Col, List, Pagination, Row, Segmented, Table} from "antd";
import {DatabaseOutlined, DesktopOutlined, InstagramOutlined, MenuOutlined, WindowsOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import _ from "lodash"

function Menu() {
    const [current, setCurrent] = useState(3);
    const [view, setView] = useState("card")
    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    const menu_card = [
        {
            icon: <DesktopOutlined/>,
            title: "患者数据管理",
            content: "查看患者状态，新增、修改、删除患者数据。患者信息统计看板。",
            route: "/datalist"
        },
        {
            icon: <DatabaseOutlined/>,
            title: "孪生模型构建",
            content: "管理患者医学影像与孪生模型数据。新建孪生大脑模型。",
            route: "/modelconstruct"
        },
        {
            icon: <InstagramOutlined/>,
            title: "模型查看器",
            content: "孪生模型3D交互式查看工具。",
            route: "/modelview"
        },
        {
            icon: <DesktopOutlined/>,
            title: "患者数据管理",
            content: "查看患者状态，新增、修改、删除患者数据。患者信息统计看板。",
            route: "/datalist"
        },
        {
            icon: <InstagramOutlined/>,
            title: "模型查看器",
            content: "孪生模型3D交互式查看工具。",
            route: "/modelview"
        },
        {
            icon: <DatabaseOutlined/>,
            title: "孪生模型构建",
            content: "管理患者医学影像与孪生模型数据。新建孪生大脑模型。",
            route: "/modelconstruct"
        },
        {
            icon: <InstagramOutlined/>,
            title: "模型查看器",
            content: "孪生模型3D交互式查看工具。",
            route: "/modelview"
        },
    ];

    const onSearch = (value: string) => {
    };

    return (
        <section className="menu">
            <Container>
                <MenuHeader/>
                <div className="menu-search">
                    <Search style={{width: '480px'}} placeholder="搜索" allowClear onSearch={onSearch}/>
                    <br/><br/>
                    <Segmented
                        className="menu-view"
                        options={
                            [{
                                label: '平铺视图',
                                value: 'card',
                                icon: <WindowsOutlined/>,
                            },
                                {
                                    label: '列表视图',
                                    value: 'list',
                                    icon: <MenuOutlined/>,
                                },

                            ]}
                        value={view} onChange={setView}
                    />
                    <br/><br/>
                    {view === "card" ?
                        <Card style={{
                            background: "transparent",
                            border: "none",
                            paddingLeft: "52px",
                            paddingRight: "52px"
                        }}>
                            <Row gutter={[24, 24]}>
                                {_.map(menu_card, (item, index) => {
                                    return (
                                        <Col span={6}>
                                            <Card className="menu-card"
                                                  onClick={() => {
                                                      const url = item.route;
                                                      window.open(url)
                                                  }}
                                                  style={{cursor: "pointer"}}
                                            >
                                                <div className="menu-card-title">
                                                    {item.icon}
                                                    {item.title}
                                                </div>
                                                <div className="menu-card-content">
                                                    {item.content}
                                                </div>
                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>
                            <Pagination current={current} onChange={onChange} total={50}/>
                        </Card> : null
                    }
                    {view === "list" ?

                        <div style={{width: "700px", paddingLeft: "400px"}}><br/>
                            <List
                                dataSource={menu_card}
                                renderItem={(item) =>
                                    <List.Item
                                        style={{color: "white", cursor: "pointer"}}
                                        onClick={() => {
                                            const url = item.route;
                                            window.open(url)
                                        }}
                                    >
                                        <div>
                                            {item.title}
                                        </div>
                                        <div>
                                            {item.content}
                                        </div>
                                    </List.Item>}
                            />
                            <Pagination current={current} onChange={onChange} total={50}/>
                        </div> : null
                    }
                </div>
            </Container>
        </section>
    );
}

export default Menu;
