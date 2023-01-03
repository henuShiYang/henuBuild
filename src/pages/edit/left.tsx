import allRegisterComponent from '../components/all-register-component';

const handleAllRegisterComponent = (allRegisterComponent: any) => {
  return Object.keys(allRegisterComponent).map((type) => {
    return {
      type,
      view: allRegisterComponent.view?.View,
    };
  });
};

const Index = () => {
  console.log(handleAllRegisterComponent(allRegisterComponent));

  return <>left</>;
};
export default Index;
