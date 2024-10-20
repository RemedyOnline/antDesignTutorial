import {
    ContainerOutlined,
    DesktopOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    UserOutlined,
    SecurityScanOutlined,
    LikeOutlined,
    LikeFilled,
    BulbOutlined,
    LogoutOutlined,
    ShopOutlined,
    AccountBookFilled,
    DotChartOutlined,
    BarChartOutlined,
    AreaChartOutlined,
    LineChartOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import { icons } from 'antd/es/image/PreviewGroup';

const sideItems = [
    {
        key: 'sub1 - dashboard',
        label: 'Dashboard',
        icon: <DesktopOutlined />,
        children: [
            {
                key: 'g1',
                type: 'group',
                label: 'Analytics',
                icon: <PieChartOutlined />,
                children: [
                    {
                        key: 'overview:1-line',
                        label: 'Line Graph',
                        icon: <LineChartOutlined />
                    },
                    {
                        key: 'overview:2-bar',
                        label: 'Bar Graph',
                        icon: <BarChartOutlined />
                    }
                ]
            },
            {
                key: 'g2',
                type: 'group',
                label: 'Trends',
                icon: <ContainerOutlined />,
                children: [
                    {
                        key: 'overview:3-sales',
                        label: 'Sales Trends',
                        icon: <AreaChartOutlined />
                    },
                    {
                        key: 'overview:4-revenue',
                        label: 'Revenue Growth',
                        icon: <DotChartOutlined />
                    }
                ]
            }
        ]
    },
    {
        key: 'sub2 -user',
        label: 'My Account',
        icon: <MenuFoldOutlined />,
        children: [
            {
                type: 'group',
                label: 'Edit Account',
                icon: <AccountBookFilled />,
                children: [
                    {
                        key: 'user:1-dp',
                        label: 'Change Profile Picture',
                        icon: < UserOutlined />
                    },
                    {
                        key: 'user:2-settings',
                        label: 'Account Settings',
                        icon: <SettingOutlined />,
                        children: [
                            {
                                key: 'user:2-preferences',
                                label: 'Change Preferences',
                                icon: <LikeOutlined />
                            },
                            {
                                key: 'user:3-security',
                                label: 'Change Password',
                                icon: <SecurityScanOutlined />
                            }
                        ]
                    },
                ]
            },
            {
                type: 'group',
                label: 'Cart',
                icon: <ShopOutlined />,
                children: [
                    {
                        key: 'user:4-wishlist',
                        label: 'Wishlish',
                        icon: <LikeFilled />
                    },
                    {
                        key: 'user:5-checkout',
                        label: 'Checkout',
                        icon: <BulbOutlined />
                    }
                ]
            }
        ]
    },
    {
        type: 'divider'
    },
    {
        key: 'logout',
        label: 'Log out',
        icon: <LogoutOutlined />
    }
]

export default sideItems;