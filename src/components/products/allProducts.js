import React, { useEffect, useState } from "react"
// import MetaTags from 'react-meta-tags';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"
import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  Input,
  Label,
  Nav,
  NavItem,
  NavLink,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
} from "reactstrap"
import classnames from "classnames"
import { isEmpty, map } from "lodash"

//Import Star Ratings
import StarRatings from "react-star-ratings"

// RangeSlider
import Nouislider from "nouislider-react"
import "nouislider/distribute/nouislider.css"

//Import Product Images
import productImages  from "../../assets/images/product/img-1.png"
import productImages4  from "../../assets/images/product/img-4.png"
import productImages2  from "../../assets/images/product/img-2.png"
import productImages3  from "../../assets/images/product/img-3.png"
import productImages1  from "../../assets/images/product/img-5.png"
import productList from './productsData'

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Team from "../About/team"

//Import data
// import { discountData, productsData } from "common/data"

//Import actions
// import { getProducts } from "store/e-commerce/actions"

const Products = props => {
  const { history, onGetProducts } = props

  // eslint-disable-next-line no-unused-vars
  // const [productList, setProductList] = useState([])
  const [activeTab, setActiveTab] = useState("1")
  // eslint-disable-next-line no-unused-vars
  const [discountDataList, setDiscountDataList] = useState([])
  const [filters, setFilters] = useState({
    discount: [],
    price: { min: 0, max: 500 },
  })
  const [page, setPage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  
  const [totalPage, setTotalPage] = useState(5)
  // const products=[]

  // useEffect(() => {
  //   setProductList(products)
  //   onGetProducts()
  //   setDiscountDataList(discountData)
  // }, [])

  // useEffect(() => {
  //   if (!isEmpty(products)) setProductList(products)
  // }, [products])

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  

  // const onSelectDiscount = e => {
  //   const { value, checked } = e.target
  //   const { discount } = filters
  //   var existing = [...discount];
  //   if (checked) {
  //     existing = [...discount, value];
  //     setFilters({
  //       ...filters,
  //       discount: existing
  //     })
  //   } else {
  //     const unCheckedItem = discount.find(item => item === value);
  //     if (unCheckedItem) {
  //       existing = discount.filter(item => item !== value)
  //     }
  //   }
  //   setFilters({
  //     ...filters,
  //     discount: existing
  //   })
  //   // onFilterProducts(value, checked)

  //   // let filteredProducts = productsData
  //   if (checked && parseInt(value) === 0) {
  //     filteredProducts = productsData.filter(product => product.offer < 10)
  //   } else if (checked && existing.length > 0) {
  //     filteredProducts = productsData.filter(
  //       product => product.offer >= Math.min(...existing)
  //     )
  //   }
  //   setProductList(filteredProducts)
  // }
  // const onUpdate = (render, handle, value) => {
  //   setProductList(
  //     productsData.filter(
  //       product => product.newPrice >= value[0] && product.newPrice <= value[1]
  //     )
  //   )
  // }

  /*
  on change rating checkbox method
  */
  // const onChangeRating = value => {
  //   setProductList(productsData.filter(product => product.rating >= value))

  // }

  // const onSelectRating = value => {
  //   setProductList(productsData.filter(product => product.rating === value))
  // }

  // const onUncheckMark = () => {
  //   setProductList(productsData)
  // }

  const handlePageClick = page => {
    setPage(page)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        {/* <MetaTags>
          <title>Products | Skote - React Admin & Dashboard Template</title>
        </MetaTags> */}
        <Container fluid>
          <Breadcrumbs  breadcrumbItem="Products" />
          <Row>
            <Col lg="12">
              <Row className="mb-3">
                <Col xl="4" sm="6">
                  <div className="mt-2">
                    <h5>Our Products</h5>
                  </div>
                </Col>
                {/* <Col lg="8" sm="6">
                  <Form className="mt-4 mt-sm-0 float-sm-end d-flex align-items-center">
                    <div className="search-box me-2">
                      <div className="position-relative">
                        <Input
                          type="text"
                          className="form-control border-0"
                          placeholder="Search..."
                        />
                        <i className="bx bx-search-alt search-icon" />
                      </div>
                    </div>
                    <Nav className="product-view-nav" pills>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            toggleTab("1")
                          }}
                        >
                          <i className="bx bx-grid-alt" />
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "2",
                          })}
                          onClick={() => {
                            toggleTab("2")
                          }}
                        >
                          <i className="bx bx-list-ul" />
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Form>
                </Col> */}
              </Row>
              <Row>
                {!isEmpty(productList) &&
                  productList.map((product, key) => (
                    <Col xl="4" sm="6" lg="12" key={"_col_" + key}>
                      <Card
                        onClick={() =>
                          history.push(`/product/${product.id}`)
                        }
                      >
                        <CardBody>
                          <div className="product-img position-relative">
                            {product.isOffer ? (
                              <div className="avatar-sm product-ribbon">
                                <span className="avatar-title rounded-circle bg-primary">
                                  {`-${product.offer}%`}
                                </span>
                              </div>
                            ) : null}
                           
                            <img
                              src={product.image}
                              alt=""
                              className="img-fluid mx-auto d-block"
                              style={{height:'250px', width:"100%"}}
                            />
                          </div>
                          <div className="mt-4 text-center">
                            <h5 className="mb-3 text-truncate">
                              <Link
                                to={`/product/${product.id}`}
                                className="text-dark"
                              >
                                {product.name}{" "}
                              </Link>
                            </h5>
                            <div className="text-muted mb-3">
                              <StarRatings
                                rating={product.rating}
                                starRatedColor="#F1B44C"
                                starEmptyColor="#2D363F"
                                numberOfStars={5}
                                name="rating"
                                starDimension="14px"
                                starSpacing="3px"
                              />
                            </div>
                            <h5 className="my-0">
                              <span className="text-muted me-2">
                                <del>${product.oldPrice}</del>
                              </span>
                              <b>${product.newPrice}</b>
                            </h5>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  ))}
              </Row>
              <Row>
                <Col lg="12">
                  <Pagination className="pagination pagination-rounded justify-content-end mb-2">
                    <PaginationItem disabled={page === 1}>
                      <PaginationLink
                        previous
                        href="#"
                        onClick={() => handlePageClick(page - 1)}
                      />
                    </PaginationItem>
                    {map(Array(totalPage), (item, i) => (
                      <PaginationItem active={i + 1 === page} key={i}>
                        <PaginationLink
                          onClick={() => handlePageClick(i + 1)}
                          href="#"
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem disabled={page === totalPage}>
                      <PaginationLink
                        next
                        href="#"
                        onClick={() => handlePageClick(page + 1)}
                      />
                    </PaginationItem>
                  </Pagination>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Products.propTypes = {
  products: PropTypes.array,
  history: PropTypes.object,
  onGetProducts: PropTypes.func,
}

// const mapStateToProps = state => ({
//   products: state.ecommerce.products,
// })

// const mapDispatchToProps = dispatch => ({
//   onGetProducts: () => dispatch(getProducts()),
// })

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(withRouter(Products))
