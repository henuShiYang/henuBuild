import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate('/12232');
      }}>
      这是编辑器页面
    </div>
  );
};
export default Index;
