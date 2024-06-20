import React, { useContext ,useEffect} from 'react'
// to get parameters here it is ID
import { json, useParams } from 'react-router-dom'
import { MyContext } from '../components/AppProvider'
import { Link } from "react-router-dom";


const ProductPage = () => {
    const {setFetchedProd, fetchedProd} = useContext(MyContext)
    const {productID} = useParams()
    // console.log(useParams());

    useEffect(() => {
        const fetchProd = async () => {
          const res = await fetch(`https://fakestoreapi.com/products/${productID}`);
          const data = await res.json();
          setFetchedProd(data);
        };
        fetchProd();
      }, []);

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row gx-5">
            <aside className="col-lg-6">
              <div className="border rounded-4 mb-3 d-flex justify-content-center">
                <Link
                  className="rounded-4"
                  target="_blank"
                  data-type="image"
                  href="https://mdbcdn.b-cdn.net/img/bootstrap-ecommerce/items/detail1/big.webp"
                >
                  <img
                    style={{
                      maxWidth: "80%",
                      maxHeight: "100vh",
                      margin: "auto",
                      }}
                    alt=""
                    className="rounded-4 fit"
                    src={fetchedProd.image}
                  />
                </Link>
              </div>
            </aside>
            <main className="col-lg-6">
              <div className="ps-lg-3">
                <h4 className="font-medium text-2xl">
                {fetchedProd.title}
                {/* <p>{JSON.stringify(fetchedProd)}</p> */}
                </h4>
                <div className="d-flex flex-row my-3">
                  <div className="text-warning mb-1 me-2">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span className="ms-1">{fetchedProd?.rating?.rate}</span>

                  </div>
                  <span className="text-muted">
                    <i className="fas fa-shopping-basket fa-sm mx-1" />
                    {fetchedProd?.rating?.count}
                  </span>
                  <span className="text-success ms-2">In stock</span>
                </div>
                <div className="mb-3">
                  <span className="h5">${fetchedProd.price}</span>
                  <span className="text-muted">/per box</span>
                </div>
                <p className="mb-4">
                  {fetchedProd.description}
                </p>
                <div className="row mb-4">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">Regular</dd>
                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>
                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans</dd>
                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook</dd>
                </div>
                <hr />
                <div className="row mb-4 mt-4">
                  <div className="col-md-4 col-6">
                    <label className="mb-2">Size</label>
                    <select
                      className="form-select border border-secondary"
                      style={{ height: 35 }}
                    >
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                    <label className="mb-2 d-block">Quantity</label>
                    <div className="input-group mb-3" style={{ width: 170 }}>
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon1"
                        data-mdb-ripple-color="dark"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="form-control text-center border border-secondary"
                        placeholder={14}
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-white border border-secondary px-3"
                        type="button"
                        id="button-addon2"
                        data-mdb-ripple-color="dark"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Link to="#" className="bg-blue-600 text-white px-4 py-2.5 rounded-md">
                    Buy now
                  </Link>
                  <Link to="#" className="bg-yellow-600 text-white px-4 py-2.5 rounded-md">
                    Add to cart
                  </Link>
                  <Link to="#" className="bg-pink-600 text-white px-4 py-2.5 rounded-md">
                    Like
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductPage