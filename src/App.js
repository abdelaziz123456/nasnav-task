import './app.scss'
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProductsList from './Components/ProductsList';



function App() {
  let productsList=[
    {
      image:'/img/products/1.png',
      discount:50,
      from:'Genena Mall',
      to:'Egypt',
      in:'2 Days',
      price:'9,999'
    },
    {
      image:'/img/products/2.png',
      from:'UK',
      to:'Egypt',
      in:'2 Days',
      price:'9,999'
     
    },
    {
      image:'/img/products/3.png',
      discount:30,
      from:'Genena Mall',
      to:'Egypt',
      in:'2 Days',
      price:'9,999'
    },
    {
      image:'/img/products/4.png',
      discount:70,
      from:'UK',
      to:'Egypt',
      in:'2 Days',
      price:'9,999'
    },
  ]
  return (
    <div className="App">
      <Header/>
  
   <ProductsList productsList={productsList}/>
   <Footer/>
    </div>
  );
}

export default App;
