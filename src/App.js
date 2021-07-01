import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// layouts Format
import HorizontalLayout from './components/HorizontalLayout';
import VerticalLayout from './components/VerticalLayout';
// Import scss
import './assets/scss/theme.scss';
import "./assets/scss/home.scss";

// Import Firebase Configuration file
import { initFirebaseBackend } from './helpers/firebase_helper';

import fakeBackend from './helpers/AuthType/fakeBackend';
// components

import Dashboard from './pages/Dashboard/index';
import UserHome from './components/Home/Home';
import SignUp from './components/Authentication/Signup';
import SignIn from './components/Authentication/signIn'
// import HomePosts from './components/Home/HomePosts';

// Activating fake backend
fakeBackend();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASEURL,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// init firebase backend
initFirebaseBackend(firebaseConfig);

const App = (props) => {
  function getLayout() {
    let layoutCls = VerticalLayout;

    switch (props.layout.layoutType) {
      case 'horizontal':
        layoutCls = HorizontalLayout;
        break;
      default:
        layoutCls = VerticalLayout;
        break;
    }
    return layoutCls;
  }

  const Layout = getLayout();
  return (
    <>
      <Router>
        <Switch>
		{/* <Route path="/logout" component={Logout} /> */}
		<Route path="/login" component={SignIn} />
		<Route path="/signup" component={SignUp} />
    <Route path="/" exact component={UserHome} />
    <Route path="/home" exact component={UserHome} />
    <Route path="/product/:id" exact component={UserHome} />
    <Route path="/products" exact component={UserHome} />
    {/* <Route path="/posts/:topicId" component={Home} />
    <Route path="/menstruation-cycle" exact component={Home} />
    <ProtectedRoute exact path="/menstruation-cycle/regular" component={Home} />
    <ProtectedRoute exact path="/menstruation-cycle/irregular" component={Home} />
    <Route path="/dashboard" component={SignUp} />
    <Route path="/locations-map" component={Home} />
    <ProtectedRoute path="/quiz/:topicId" exact={true} component={Home} />
    <ProtectedRoute path="/take-quiz/:id" exact={true} component={Home} />
    <ProtectedRoute path="/view-quiz-topics" exact component={Home} />
    <Route path="/community/chat" exact component={Home} />
    <Route path="/community/comments/:questionId" exact component={Home} /> */}
		<Layout>
          {/* <ProtectedRoute path="/create-post/:topicId" exact={true} component={CreatePost} />
          <ProtectedRoute path="/admin/post/:postId" exact={true} component={SinglePost} />
          <ProtectedRoute path="/create-topic" component={CreateTopic} />
		      <ProtectedRoute path="/admin/posts/:topicId" exact component={PublishedPosts} />
          <ProtectedRoute path="/topics/edit/:topicId" exact component={UpdateTopic} />
          <ProtectedRoute path="/post/edit/:postId" exact component={UpdatePost} />
          <ProtectedRoute path="/topics" exact={true} component={Topics} />
          <ProtectedRoute path="/posts" exact={true} component={AllPosts} />
          <ProtectedRoute path="/published-posts" exact={true} component={PublishedPosts} />
          <ProtectedRoute path="/locations" exact={true} component={LocationsList} />
          <ProtectedRoute path="/create-location" exact={true} component={CreateLocation} />
          <ProtectedRoute path="/rejected-posts" exact={true} component={RejectedPosts} />
          <ProtectedRoute path="/for-approval-posts" exact={true} component={PostsForApproval} />
          <ProtectedRoute path="/pending-posts" exact={true} component={PendingPosts} />
          <ProtectedRoute path="/create-post" exact={true} component={CreatePost} />
          <ProtectedRoute path="/create-user" exact={true} component={CreateUser} />
          <ProtectedRoute path="/create-quiz" exact={true} component={CreateQuiz} />
          <ProtectedRoute path="/quizes" exact={true} component={QuizList} />
          <ProtectedRoute path="/quiz/edit/:id" exact={true} component={UpdateQuiz} />
          <ProtectedRoute path="/create-question" exact={true} component={CreateQuestion} />
          <ProtectedRoute path="/quiz-results" exact={true} component={QuizResult} />
          <ProtectedRoute path="/view-quiz/:id" exact={true} component={SingleQuiz} />
          <ProtectedRoute path="/questions" exact={true} component={QuestionList} />
          <ProtectedRoute path="/question/edit/:id" exact component={UpdateQuestion} />
          <ProtectedRoute path="/users" exact={true} component={StaffList} />
          <ProtectedRoute path="/users/edit/:userId" exact component={UpdateUser} />
          <ProtectedRoute path="/requested-modification-posts" exact component={ModificationPosts} />
          <ProtectedRoute path="/chat" exact component={AdminChat} />
          <Route path="/admin/locations-map" component={locationsMap} />
          <Route path="/location/edit/:id" component={UpdateLocation} />
          <ProtectedRoute path="/admin/community/chat" exact component={CommunityChat} />
          <Route path="/admin/community/comments/:questionId" exact component={ForumComments} />
          <Route path="/admin/menstruation-cycle" exact component={MestruationCycle} />
          <Route path="/admin/menstruation-cycle/regular" exact component={RegularPeriod} />
          <Route path="/admin/menstruation-cycle/irregular" exact component={IrregularPeriod} /> */}
		</Layout>
        </Switch>
      </Router>
    </>
  );
};

const mapStateToProps = (state) => ({
  layout: state.Layout,
});

export default connect(mapStateToProps, null)(App);
