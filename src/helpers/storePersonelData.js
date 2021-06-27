import isAuth from './isAuthenticated';

export const storeData = (age,gender) => {
    localStorage.setItem('age', age);
    localStorage.setItem('gender', gender);
};

export const Age = () => localStorage.getItem('age');
export const Gender = () => localStorage.getItem('gender');
export const Roles =()=> localStorage.getItem('roles');

const approvePostRoles=[
  "first_post_approver",
  "second_post_approver",
  "admin"]

const approveForumRoles=[
    "forum_approver",
    "admin"]

const EditPostRoles=[
      "creator",
      "admin"]  

const createPostRoles=[
        "creator",
        "first_post_approver",
        "admin"]        

const adminRoles=["admin"]
const secondApproverRoles=["second_post_approver"]  
    
// RBC, CHB, MINISANTE, INTRAHEALTH


export const checkApproveRight = () => {

    const userInfo = isAuth();
    const roles = Roles();
    if (userInfo && roles && roles!=undefined) {
    const checkView = approvePostRoles?.filter((role) =>
    roles.includes(role)
    );
    if (checkView.length===0) {
        return false;
      }
      return true;
    }
    return false;
  };

  export const checkEditRight = () => {
    const userInfo = isAuth();
    const roles = Roles();
    if (userInfo && roles && roles!=undefined) {
      const checkView =EditPostRoles?.filter((role) =>
      roles.includes(role)
      );
    if (checkView.length===0) {
        return false;
      }
      return true;
    }
    return false;
  };

  export const checkSecondApproverRight = () => {
    const userInfo = isAuth();
    const roles = Roles();
    if (userInfo && roles && roles!=undefined) {
      const checkView =secondApproverRoles?.filter((role) =>
      roles.includes(role)
      );
    if (checkView.length===0) {
        return false;
      }
      return true;
    }
    return false;
  };

  export const checkCreateRight = () => {
    const userInfo = isAuth();
    const roles = Roles();
    if (userInfo && roles && roles!=undefined) {
      const checkView =createPostRoles?.filter((role) =>
      roles.includes(role)
      );
    if (checkView.length===0) {
        return false;
      }
      return true;
    }
    return false;
  };

  export const approveForumPost = () => {
    const userInfo = isAuth();
    const roles = Roles();

    if (userInfo && roles && roles!=undefined) {
      const checkView = approveForumRoles.filter((role) =>
      roles.includes(role)
      );
    if (checkView.length===0) {
        return false;
      }
      return true;
    }
    return false;
  };

  export const checkAdminRight = () => {
    const userInfo = isAuth();
    const roles = Roles();

    if (userInfo && roles && roles!=undefined) {
      const checkView = adminRoles.filter((role) =>
      roles.includes(role)
      );
    if (checkView.length===0) {
        return false;
      }
      return true;
    }
    return false;
  };

  export const checkNormalUser = () => {
    const userInfo = isAuth();
    if (userInfo) {
      const roles = Roles();
    if (!roles || roles.length===0) {
        return true;
      }
      return false;
    }
    return false;
  };
