import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import { icons } from 'antd/es/image/PreviewGroup';

const navItems = [
    {
        key: "overview",
        label: "Overview",
        icon: <ContainerOutlined />
    },
    {
        key: "orders",
        label: "Orders & Requests",
        icon: <DesktopOutlined />,
        disabled: true
    },
    {
        key: "analytics",
        label: "Analytics",
        icon: <PieChartOutlined />,
        children: [
            {
                type: 'group',
                label: "Graphs",
                children: [
                    {
                        key: "analytics:1-line",
                        label: "Line Graph"
                    },
                    {
                        key: "analytics:2-bar",
                        label: "Bar Graph"
                    },
                ]
            },
            {
                type: "group",
                label: "Charts",
                children: [
                    {
                        key: "analytics:3-column",
                        label: "Column Chart"
                    },
                    {
                        key: "nalytics:4-row",
                        label: "Row Chart"
                    },
                ]
            }
        ]
    },
    {
        key: "link",
        icon: <AppstoreOutlined />,
        label: (
            <a href='https://google.com' target='_blank'>Search on Google</a>
        )
    }
];

export default navItems;