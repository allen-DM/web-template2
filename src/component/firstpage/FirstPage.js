<<<<<<< HEAD
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './FirstPage.css';
import { Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const FirstPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={isOpen}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                        nav 3
                     </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(isOpen ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => {
                            setIsOpen(!isOpen);
                          }
                    })}
                    sdfsdf
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
=======
import React from 'react';

const FirstPage=()=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:"#FF2E63",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第一頁</h1>
        </div>
>>>>>>> parent of dc45c60... add bootstrap
    )
}

export default FirstPage;