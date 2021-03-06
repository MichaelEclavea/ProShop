import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Meta from '../components/Meta'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import ProductCarousel from '../components/ProductCarousel'
import Paginate from '../components/Paginate'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {listProducts} from '../actions/productActions'

const ShopScreen = ({ match }) => {
  const keyword = match.params.keyword
  const pageNumber = match.params.pageNumber || 1


  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const {loading, error, products, page, pages} = productList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
    <Meta/>
    {!keyword ? <ProductCarousel /> : <Link to='/shop' className='btn btn-light'>Go Back</Link> }
      <h1 className='title'>Products & Apparel</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
        <Row>
          {products.map((product, idx) => (
            <Col sm={12} md={6} lg={4} key={idx}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
      )}
    </>
  )
}

export default ShopScreen
