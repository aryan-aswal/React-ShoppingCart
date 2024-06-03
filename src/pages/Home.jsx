import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Products from '../components/Product';


const Home = () => {

  const api_url = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const fetchProducts = async () => {
    setLoading(true);

    try {

      const response = await fetch(api_url);
      const data = await response.json()
      setItems(data);

    } catch (error) {
      console.log(error);
      setItems([]);
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts();
  }, [])


  return (
    <div>
      {
        loading ?
          <Spinner />
          :
          (
            <div className='min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2'>
              {
                items.map((item) => {
                  return (
                    <Products item={item} key={item.id}></Products>
                  )
                })
              }
            </div>
          )
      }
    </div>
  )
}

export default Home