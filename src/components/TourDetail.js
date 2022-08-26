import '../css/TourDetail.css';
import Loading from "./Loading";
import { useState,useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function TourDetail() {
    const { Id } = useParams();
    const [data,setData] = useState({});
    const { Name, Toldescribe, Picture1 } = data;
    const [ loading, setLoading ] = useState(true);
    useEffect(()=>{
        fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
        .then(res=>res.json())
        .then(result=>{
            const newData = result.data.XML_Head.Infos.Info.filter(item=>item.Id===Id);
            setData({...newData[0]})
        })
        .catch(err =>{
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        })
    },[])
    const navigate = useNavigate();
    return loading? <Loading/>:(
      <>
        <main>
            <h2 className="titleTour">{Name}</h2>  
            <br />
            <img src={Picture1} alt={Name} />
          <div className="contentBox"> 
            <p className="content">{Toldescribe}</p>    
            <input type="button" className="btn" value="回列表" onClick={()=>{
                navigate(`/tour/`)
            }} />                 
          </div>
        </main>
      </>
    );
  }
export default TourDetail;

/*
<main>
    <h2 className="titleTour">{Name}</h2>            
    <input type="button" className="btn" value="回列表" onClick={()=>{
        navigate("/tour")
    }} />
    <br />
    <img src={Picture1} alt={Name} />
  <div className="contentBox">            
    <p className="content">{Toldescribe}</p>                     
  </div>
</main>
*/