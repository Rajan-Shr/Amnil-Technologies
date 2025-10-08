import { useParams } from "react-router-dom";


function Company()
{   
    const params = useParams();
    return(
        <div>
            Company name is {params.companyname}
        </div>
    )
}

export default Company;