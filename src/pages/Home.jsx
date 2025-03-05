import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getALLPOST } from "../redux/features/post-reducer/action";

function Home(){
    const {posts,error,loading}=useSelector((state)=>state?.posts)

    const disPatch=useDispatch()
    useEffect(()=>{
      disPatch(getALLPOST()) 
    },[])



    // loading ...................................................
    if(loading){
        return <div>
            <h1>Loading.............</h1>
        </div>
    }

    // error ...................................................
    if(error){
        return <h1>Something went Wrong</h1>
    }

    
    return <div>
<ul>
{posts?.map(({id,title,body})=>{
    return <li key={body}>{id}- {title}</li>
})}
</ul>


    </div>
}

export default Home;