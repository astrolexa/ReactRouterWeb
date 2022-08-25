import '../css/TourList.css';
import Loading from "./Loading";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { zipCode } from "../data/zipCode";

function TourList() {
  const [ zipIndex ] = useState(zipCode);
  const [ selectZip, setSelectZip ] = useState('');
  const [ data,setData ] = useState([]);
  const navigate = useNavigate();
  const [ loading, setLoading ] = useState(true);
  useEffect(()=>{
      
      fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
      .then(res=>res.json())
      .then(result=>{
          const newData = result.data.XML_Head.Infos.Info;
          setData(newData)
      })
      .catch(err =>{
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      })
  },[])
  return (
    loading? <Loading/>:
    <div>
      <main className="pt-5 pb-5">
        <h3 className="tourtitle">尋找高雄亮點新旅趣</h3>           
        <h2 className="mb-3">請選擇觀光地區</h2>
        <select defaultValue={'DEFAULT'} onChange={(e) => setSelectZip(e.target.value)} className="selector">
          <option className="hidden" value="DEFAULT" disabled>請選擇區域</option>
          {
            zipIndex.map((item,index)=>{
              return(
                <option key={index} value={item.zip} className="px-4 py-4 fw-bold">{ item.name}</option>
              )
            })
          }
        </select>        
        <ul class="auto-grid">
        {            
          data.filter((item)=> item.Zipcode === selectZip).map((i)=>{              
            return (
              <Link class="profile" to={`/tour/${i.Id}`}> 
                <li>                               
                    <h2 class="profile__name">{i.Name}</h2>                  
                    <img className="imgSize" alt={i.Name} src={i.Picture1}/>                                   
                </li>  
              </Link>              
            )
          })
        } 
        </ul>
      </main>
    </div>
  );
  }
export default TourList;
/*<ul className="outline">
{            
  data.filter((item)=> item.Zipcode === selectZip).map((i)=>{              
    return (
        <ol key={i.Id} className="oldiv" onClick={()=>{ navigate(`/tour/${i.Id}`) }} >    
        <div className="card" >
            <div className="imgDiv">
              <img src={i.Picture1} className="card-img-top" alt={i.Name}/>
            </div>                        
              <div class="card-body">
                <Link className="outline" class="btn" to={`/tour/${i.Id}`}>{i.Name}</Link> 
              </div>                            
            </div>
        </ol>
    )
  })
}
</ul> 
*/

