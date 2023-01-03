import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.less';

const { Header, Footer, Sider, Content } = Layout;

const Index = () => {
  const navigate = useNavigate();
  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === '2') {
      navigate('/edit');
    }
  };
  const items = [
    {
      label: '我的项目',
      key: '1',
    },
    {
      label: '新建项目',
      key: '2',
    },
  ];
  return (
    <Layout className={styles.henuBulider}>
      <Header className={styles.header}>HenuBuilder</Header>
      <Layout className={styles.contetnWrapper}>
        <Sider className={styles.sider}>
          <Menu
            onClick={handleMenuClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='inline'
            items={items}
          />
        </Sider>
        <Content>zhengwen</Content>
      </Layout>
      <Footer>推荐使用chrome以获取更快的响应速度</Footer>
    </Layout>
  );
};
export default Index;
