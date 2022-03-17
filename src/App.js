
   
import logo from './logo.svg';
import './App.css';
import Card from './Card';

function App() {

  let details=[{
    grade:"FREE",
    price:0,
    period:"month",
    user:"Single User",
    storage:"5GB Storage",
    project:"Unlimited Public Projects",
    access:"Community Access",
    privateproject:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subdomain:"Free Subdomain",
    reports:"Monthly Status Reports"
  },
  {
    grade:"PLUS",
    price:9,
    user:"5 User",
    storage:"50GB Storage",
    project:"Unlimited Public Projects",
    access:"Community Access",
    privateproject:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subdomain:"Free Subdomain",
    reports:"Monthly Status Reports"
  },
{
    grade:"PRO",
    price:49,
    user:"Unlimited User",
    storage:"150GB Storage",
    project:"Unlimited Public Projects",
    access:"Community Access",
    privateproject:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subdomain:"Unlimited Free Subdomain",
    reports:"Monthly Status Reports"
  }]
  return (
  <section class="pricing py-5">
  <div class="container">
    <div class="row">
      {
       details.map((detail)=>{
          return <Card data={detail}></Card>
       })
       
      }
    
    </div>
  </div>
  </section>
  );
}

export default App;