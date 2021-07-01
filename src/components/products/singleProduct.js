import React, { useEffect, useState } from "react"
// import MetaTags from 'react-meta-tags';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {  useParams, Link } from "react-router-dom"
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap"
import classnames from "classnames"
import { isEmpty } from "lodash"

//Import Star Ratings
import StarRatings from "react-star-ratings"

//Import Product Images
import productImages  from "../../assets/images/product/img-1.png"
import productImages2  from "../../assets/images/product/img-2.png"
import productImages3  from "../../assets/images/product/img-3.png"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import actions
// import { getProductDetail } from "store/actions"
// import RecentProducts from "./RecentProducts"
// import Reviews from "./Reviews"
import productList from './productsData'

const ProductDetail = props => {
  const {
    // product,
    // match: { params },
    onGetProductDetail,
  } = props
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("1")

  // useEffect(() => {
  //   if (params && params.id) {
  //     onGetProductDetail(params.id)
  //   } else {
  //     onGetProductDetail(1)
  //   }
  // }, [onGetProductDetail, params])
  console.log('========>pruducting')

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const imageShow = (img, id) => {
    const expandImg = document.getElementById("expandedImg" + id)
    expandImg.src = img
  }

  // const product={ id: 1, name: "T-shirts", oldPrice: 1400,newPrice:1200, isOffer:true,offer:10};
    // { id: 2, name: "Shirts", oldPrice: 6400,newPrice:6000,isOffer:true,offer:10 },
    // { id: 3, name: "Jeans", oldPrice: 1500,newPrice:1200 ,isOffer:true,offer:10},
    // { id: 4, name: "Jackets", oldPrice: 4400 ,newPrice:4000, isOffer:true,offer:10},;
   const product= productList.find((product)=>product.id===Number(id));
   console.log('=====>product', product)
   console.log('=====>id', id)
  return (
    <React.Fragment>
      <div className="page-content">
        {/* <MetaTags>
          <title>Product Detail | Skote - React Admin & Dashboard Template</title>
        </MetaTags> */}
        <Container fluid>
          <Breadcrumbs title="Product Detail" breadcrumbItem={product.name} />
          {!isEmpty(product) && (
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <Row>
                      <Col xl="6">
                        <div className="product-detai-imgs">
                          <Row>
                            <Col md="2" xs="3">
                              <Nav className="flex-column" pills>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "1",
                                    })}
                                    onClick={() => {
                                      toggleTab("1")
                                    }}
                                  >
                                    <img
                                      src={product.image}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.image,
                                          1
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block rounded"
                                    />
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
                                    <img
                                      src={product.image}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.image,
                                          2
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                                <NavItem>
                                  <NavLink
                                    className={classnames({
                                      active: activeTab === "3",
                                    })}
                                    onClick={() => {
                                      toggleTab("3")
                                    }}
                                  >
                                    <img
                                      src={product.image}
                                      alt=""
                                      onClick={() => {
                                        imageShow(
                                          product.image,
                                          3
                                        )
                                      }}
                                      className="img-fluid mx-auto d-block rounded"
                                    />
                                  </NavLink>
                                </NavItem>
                              </Nav>
                            </Col>
                            <Col md={{ size: 7, offset: 1 }} xs="9">
                              <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                  <div>
                                    <img
                                      src={product.image}
                                      alt=""
                                      id="expandedImg1"
                                      className="img-fluid mx-auto d-block"
                                      style={{height:'300px', width:"100%"}} 
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="2">
                                  <div>
                                    <img
                                      src={product.image}
                                      id="expandedImg2"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                      style={{height:'300px', width:"100%"}} 
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="3">
                                  <div>
                                    <img
                                      src={product.image}
                                      id="expandedImg3"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                      style={{height:'300px', width:"100%"}} 
                                    />
                                  </div>
                                </TabPane>
                                <TabPane tabId="4">
                                  <div>
                                    <img
                                      src={product.image}
                                      id="expandedImg4"
                                      alt=""
                                      className="img-fluid mx-auto d-block"
                                      style={{height:'300px', width:"100%"}} 
                                    />
                                  </div>
                                </TabPane>
                              </TabContent>
                              <div className="text-center">
                                <Button
                                  type="button"
                                  color="primary"
                                  className="btn  mt-2 me-1 mr-2"
                                >
                                  <i className="bx bx-cart me-2" /> Add to cart
                                </Button>
                                <Button
                                  type="button"
                                  color="success"
                                  className="ms-1 btn mt-2"
                                >
                                  <i className="bx bx-shopping-bag me-2" />
                                  Buy now
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>

                      <Col xl="6">
                        <div className="mt-4 mt-xl-3">
                          <Link to="#" className="text-primary">
                            {product.category}
                          </Link>
                          <h4 className="mt-1 mb-3">{product.name}</h4>

                          <div className="text-muted float-start me-3">
                            <StarRatings
                              rating={4}
                              starRatedColor="#F1B44C"
                              starEmptyColor="#2D363F"
                              numberOfStars={5}
                              name="rating"
                              starDimension="14px"
                              starSpacing="3px"
                            />
                          </div>
                          <p className="text-muted mb-4">
                            ( {product.reviews} Customers Review )
                          </p>

                          {!!product.isOffer && (
                            <h6 className="text-success text-uppercase">
                              {product.offer} % Off
                            </h6>
                          )}
                          <h5 className="mb-4">
                            Price :{" "}
                            <span className="text-muted me-2">
                              <del>${product.oldPrice} Frw</del>
                            </span>{" "}
                            <b>${product.newPrice} Frw</b>
                          </h5>
                          <p className="text-muted mb-4">
                            To achieve this, it would be necessary to have
                            uniform grammar pronunciation and more common words
                            If several languages coalesce
                          </p>
                          <Row className="mb-3">
                            <Col md="6">
                              {product.features &&
                                product.features.map((item, i) => (
                                  <div key={i}>
                                    <p className="text-muted">
                                      <i
                                        className={classnames(
                                          item.icon,
                                          "font-size-16 align-middle text-primary me-2"
                                        )}
                                      />
                                      {item.type && `${item.type}: `}
                                      {item.value}
                                    </p>
                                  </div>
                                ))}
                            </Col>
                            <Col md="6">
                              {product.features &&
                                product.features.map((item, i) => (
                                  <div key={i}>
                                    <p className="text-muted">
                                      <i
                                        className={classnames(
                                          item.icon,
                                          "font-size-16 align-middle text-primary me-2"
                                        )}
                                      />
                                      {item.type && `${item.type}:`}
                                      {item.value}
                                    </p>
                                  </div>
                                ))}
                            </Col>
                          </Row>

                          <div className="product-color">
                            <h5 className="font-size-15">Color :</h5>
                            {/* {product.colorOptions &&
                              product.colorOptions.map((option, i) => ( */}
                                <Link to="#" className="active" key={1}>
                                  <div className="product-color-item border rounded">
                                    <img
                                      src={product.image}
                                      alt=""
                                      className="avatar-md"
                                    />
                                  </div>
                                  <p>blue</p>
                                </Link>
                                <Link to="#" className="active" key={2}>
                                  <div className="product-color-item border rounded">
                                    <img
                                      src={product.image}
                                      alt=""
                                      className="avatar-md"
                                    />
                                  </div>
                                  <p>black</p>
                                </Link>
                              {/* ))} */}
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <div className="mt-5">
                      <h5 className="mb-3">More Info :</h5>

                      <div className="table-responsive">
                        <Table className="table mb-0 table-bordered">
                          <tbody>
                            {/* {product.specification &&
                              product.specification.map((specification, i) => ( */}
                                <tr key={1}>
                                  <th
                                    scope="row"
                                    style={{ width: "400px" }}
                                    className={"text-capitalize"}
                                  >
                                   Category
                                  </th>
                                  <td>T-shirt</td>
                                </tr>
                                <tr key={2}>
                                  <th
                                    scope="row"
                                    style={{ width: "400px" }}
                                    className={"text-capitalize"}
                                  >
                                    Brand(Owner)
                                  </th>
                                  <td>Angelique Ltd</td>
                                </tr>
                                <tr key={3}>
                                  <th
                                    scope="row"
                                    style={{ width: "400px" }}
                                    className={"text-capitalize"}
                                  >
                                    Contact
                                  </th>
                                  <td>0786695959004040404</td>
                                </tr>
                              {/* ))} */}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                    {/* <Reviews comments={product.comments} /> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
          {/* <RecentProducts recentProducts={product.recentProducts} /> */}
        </Container>
      </div>
    </React.Fragment>
  )
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onGetProductDetail: PropTypes.func,
}

// const mapStateToProps = ({ ecommerce }) => ({
//   product: ecommerce.product,
// })

// const mapDispatchToProps = dispatch => ({
//   onGetProductDetail: id => dispatch(getProductDetail(id)),
// })

export default connect(
  // mapStateToProps,
  // mapDispatchToProps
)(ProductDetail)
