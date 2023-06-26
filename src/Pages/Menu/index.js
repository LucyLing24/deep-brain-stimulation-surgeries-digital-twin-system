import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import MenuHeader from "../../Components/MenuHeader";
import {Card, Col, List, Pagination, Row, Segmented, Table} from "antd";
import {DatabaseOutlined, DesktopOutlined, InstagramOutlined, MenuOutlined, WindowsOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import _ from "lodash"
import p1 from "../../Assets/menu/1.png";
import p2 from "../../Assets/menu/2.png";
import p3 from "../../Assets/menu/3.png";
import p4 from "../../Assets/menu/4.png";
import p5 from "../../Assets/menu/5.png";
import p6 from "../../Assets/menu/6.png";

function Menu() {
    const [current, setCurrent] = useState(1);

    const [searchword, setSearchWord] = useState("")

    const [data, setData] = useState()
    const [view, setView] = useState("card")
    const onChange = (page) => {
        setCurrent(page);
    };

    const menu_card = [
        {
            title: "患者数据管理",
            img:p1,
            route: "/datalist"
        },
        {
            title: "孪生模型构建",
            img:p2,
            route: "/modelconstruct"
        },
        {
            title: "孪生模型查看",
            img:p3,
            route: "/modelview"
        },
        {
            title: "手术方案规划",
            img:p4,
            route: "/operation"
        },
        {
            title: "电刺激参数设定辅助",
            img:p5,
            route: "/assistance"
        },
        {
            title: "手术治疗决策建议与支持",
            img:p6,
            route: "/advise"
        },
    ];
    useEffect(() => {
        const data = _.map(menu_card, (item) => {
            if (item?.title.match(searchword)) {
                return item;
            }
        }).filter((i)=>{if(i!==undefined)return i})
        setData(data)
    }, [searchword])

    const onSearch = (value: string) => {
        setSearchWord(value)
    };

    return (
        <section className="menu" style={{overflow:'scroll'}}>
            <Container>
                <MenuHeader/>
                <div className="menu-search" >
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
                                {_.map(data, (item, index) => {
                                    return (
                                        <Col span={6}>
                                            <Card className="menu-card"
                                                  onClick={() => {
                                                      const url = item.route;
                                                      window.open(url)
                                                  }}
                                                  style={{cursor: "pointer"}}
                                            >
                                                <img
                                                    src={item.img}
                                                    style={{width: '36vh'}}
                                                />
                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>
                            <Pagination current={current} onChange={onChange} total={6} style={{marginTop:'5vh'}}/>
                        </Card> : null
                    }
                    {view === "list" ?
                        <div style={{width: "700px", paddingLeft: "400px"}}><br/>
                            <List
                                dataSource={data}
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
                            <Pagination current={current} onChange={onChange} total={6}  style={{marginTop:'5vh'}}/>
                        </div> : null
                    }
                </div>
            </Container>
        </section>
    );
}

export default Menu;
