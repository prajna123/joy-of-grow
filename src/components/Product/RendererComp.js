import { useHistory } from 'react-router-dom';


const RendererComp = (props) => {
    const history = useHistory();
    console.log(props);
    if(props.productId == 1){
        history.push('/investmentAdvisory');
    }
}


export default RendererComp;
