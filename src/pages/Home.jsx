import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import Cards from "../components/Cards";
import { Button } from "react-bootstrap";


const Home = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    async function getData() {
        try {
            setLoading(true)
            const res = await axios.get('https://fakestoreapi.com/products')
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getData()
    }, [])


    function filterbycategory(cat){

     const result = products.filter(function(p){
         return p.category === cat
     })

     setProducts(result)

    }

    return (
        <div>

            <div className="w-50 mx-auto my-4">
                <h2 className="text-center">Welcome To ShoP World 😃</h2>
                <p className="text-center">Buy Anyting with flat 30% Discount</p>
            </div>

            <section className="w-50 mx-auto  d-flex flex-row justify-content-evenly py-2" >
                <Button onClick={()=>{getData}}  variant="outline-dark">All</Button> <Button onClick={()=>{filterbycategory(`men's clothing`)}} variant="outline-dark">MEN</Button><Button onClick={()=>{filterbycategory(`women's clothing`)}} variant="outline-dark">WOMEN</Button><Button variant="outline-dark">Jwellary</Button><Button variant="outline-dark">ElECTRONICS</Button>
            </section>

            <section>

                {loading ? <Spinner /> :


                    <div className="row gap-4 justify-content-center">
                        {
                            products.map((prod) => {

                                // console.log({...prod},"hello")

                                return <Cards key={prod.id} {...prod} />

                            })

                        }

                    </div>




                }

            </section>

        </div>
    )
}

export default Home