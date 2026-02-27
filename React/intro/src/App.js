// import Header from './components/Header';
// import Content from './components/Content';
// import Footer from './components/Footer';
import './App.css';
import Card from './components/Card';
import CodeState from './components/hooks/CodeState';

const data = [

  {
    "id": 78,
    "title": "Apple MacBook Pro 14 Inch Space Grey",
    "price": 1999.99,
    "quantity": 2,
    "total": 3999.98,
    "discountPercentage": 18.52,
    "discountedTotal": 3259.18,
    "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
  },
  {
    "id": 183,
    "title": "Green Oval Earring",
    "price": 24.99,
    "quantity": 5,
    "total": 124.95,
    "discountPercentage": 6.28,
    "discountedTotal": 117.1,
    "thumbnail": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"
  },
  {
    "id": 100,
    "title": "Apple Airpods",
    "price": 129.99,
    "quantity": 5,
    "total": 649.95,
    "discountPercentage": 12.84,
    "discountedTotal": 566.5,
    "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"
  }
]

function App() {
  return (
    <div className="main-container">
      {/* BASICS ARRAY METHODS */}
      {/* {data.map((item)=>{
        return (
          <Card item={item}/>
        )
      })} */}

      {/* USESTATE */}
      <CodeState />
    </div>
  );
}

export default App;
