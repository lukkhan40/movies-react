import { Layout } from "antd";
import MenuTop from "components/MenuTop";

const PageContainer = ({ children }) => {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <MenuTop />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default PageContainer;
