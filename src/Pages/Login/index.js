import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import logo from "../../Assets/logo.svg";
import {Button, Form, Input} from "antd";

function Login() {
    const [form] = Form.useForm();
    const onFinish = (values) => {
        window.location.replace('menu')
    };

    return (
        <section className="login">
            <Container className="login-form">
                <div>
                    <img
                        src={logo}
                        alt="logo"
                        style={{width: '66px'}}
                    />
                    <br/><br/>
                    <div style={{
                        color: "white",
                        fontWeight: '500',
                        fontSize: '28px'
                    }}>
                        DT-DBS <br/>
                    </div>
                    <div style={{color: "white"}}>
                        DBS手术治疗数字孪生系统
                    </div>
                </div>
                <div>
                    <Form
                        form={form}
                        layout={"vertical"}
                        onFinish={onFinish}
                    >
                        <Form.Item name="username" required label={<label style={{color: "white"}}>用户名</label>}>
                            <Input placeholder="请输入用户名或者邮箱"/>
                        </Form.Item>
                        <Form.Item name="password" required label={<label style={{color: "white"}}>密码</label>}>
                            <Input.Password placeholder="请输入密码"/>
                        </Form.Item>
                        <br/>
                        <Button block type="primary" htmlType="submit" style={{background: "#52C41A"}}>登陆</Button>
                    </Form>
                </div>

            </Container>
        </section>
    );
}

export default Login;
