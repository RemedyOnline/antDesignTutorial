import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

const navItems = [
    {
        key: "overview",
        label: "Overview",
        icon: <PieChartOutlined />
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
                key: "graph",
                label: "Graph Analysics"
            },
            {
                key: "column",
                label: "Bar Chart Analysics"
            },
            {
                key: "row",
                label: "Sales Trens"
            },
        ]
    }
]