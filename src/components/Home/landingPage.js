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
import Portfolio from '../products/portfolio'
import Products from '../products/allProducts'

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Team from "../About/team"

//Import data
// import { discountData, productsData } from "common/data"

//Import actions
// import { getProducts } from "store/e-commerce/actions"

const Home = props => {
  
  return (
    <React.Fragment>
      <div className="page-content pt-2">
        {/* <MetaTags>
          <title>Products | Skote - React Admin & Dashboard Template</title>
        </MetaTags> */}
        <Container fluid>
             <Col>
             <Row>
             <Products />
            </Row>
              <Row>
              <Portfolio />
              </Row>
              <Row>
              <Team />
              </Row>
            </Col>
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
)(withRouter(Home))
