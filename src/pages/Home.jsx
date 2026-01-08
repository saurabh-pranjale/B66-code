import axios from "axios"
import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner';
import Cards from "../components/Cards";
import { Button } from "react-bootstrap";


const Home = () => {
    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState('')
    const [search, setSearch] = useState('')

    async function getData() {
        try {
            setLoading(true)
            const res = await axios.get('https://fakestoreapi.com/products')
            setProducts(res.data)
            setAllProducts(res.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    console.log(category)

    useEffect(function () {

        function filterbycategory() {



            let result = allProducts.filter(function (p) {

                console.log(p.category, category)

                return p.category === category
            })

            setProducts(result)

        }

        filterbycategory()

    }, [category])


        function filterSearch() {
            let result = allProducts.filter((p) => {

                return p.title.toLowerCase().includes(search.toLowerCase())

            })

            setProducts(result)
        }


    // useEffect(function () {

    

    //     filterSearch()

    // }, [search])





    return (
        <div>

            <div className="w-50 mx-auto my-4">
                <h2 className="text-center">Welcome To ShoP World 😃</h2>
                <input type="text" placeholder="search your product" onChange={(e) => setSearch(e.target.value)} /> <button onClick={()=>{filterSearch()}}>search</button>
            </div>

            <section className="w-50 mx-auto  d-flex flex-row justify-content-evenly py-2" >
                <Button onClick={() => { getData() }} variant="outline-dark">All</Button>
                <Button onClick={() => { setCategory(`men's clothing`) }} variant="outline-dark">MEN</Button>
                <Button onClick={() => { setCategory(`women's clothing`) }} variant="outline-dark">WOMEN</Button>
                <Button onClick={() => { setCategory(`jewelery`) }} variant="outline-dark">Jwellary</Button>
                <Button onClick={() => { setCategory(`electronics`) }} variant="outline-dark">ElECTRONICS</Button>
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