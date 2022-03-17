
   
import React from "react"
function Card(props){
    return(
<div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{props.data.grade}</h5>
            <h6 class="card-price text-center">${props.data.price}<span class="period">/month</span></h6>
            <hr></hr>
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.project}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.access}</li>
              {
                props.data.grade==="FREE"?<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.privateproject}</li>:<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.privateproject}</li>
              }
              {
              props.data.grade==="FREE"?<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.support}</li>:<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.support}</li>
              }
              {
                props.data.grade==="FREE"?<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.subdomain}</li>:<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.subdomain}</li>

              }
              {
                props.data.grade==="FREE"||props.data.grade==="PLUS"?<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.reports}</li>:<li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.reports}</li>

              }
    
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
   )
}

export default Card;