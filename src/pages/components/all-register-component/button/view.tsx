import { Button } from 'antd-mobile';

interface propsTypes {
  color: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  text: string;
}

const Index = (props: propsTypes) => {
  const { color = 'default', text } = props;
  return <Button color={color}>{text}</Button>;
};
export default Index;
