import React, { useCallback, useEffect, useState } from "react";
import User from "../../components/Users/User";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as usersAction from "../../store/actions/admin_users";
import Loader from "react-loader-spinner";
import UserActionConfirmation from "../../components/userActionConfirmation/UserActionConfirmation";

const Users = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [userEmail, setUserEmail] = useState("");
  const [confirmationData, setConfirmationData] = useState({ status: false });

  const loadUsers = useCallback(() => {
    setError(null);
    setIsLoading(true);

    dispatch(usersAction.fetchUsers())
      .then((response) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [dispatch, setIsLoading, setError]);

  const userEmailChangeHandler = (e) => {
    setUserEmail(e.target.value.trim().toLowerCase());
  };

  const confirmationHandleClose = () => {
    setConfirmationData({ status: false });
  };

  useEffect(() => {
    loadUsers();
  }, [dispatch, loadUsers]);

  if (error) {
    history.replace(`${process.env.PUBLIC_URL}/500error`);
    return <React.Fragment />;
  }

  const filteredUsers = users.filter((user) => user.email.includes(userEmail));

  const onClickHandler = (id, isActive) => {
    setConfirmationData({ status: true, id: id, isActive: isActive });
  };

  const actionHandler = () => {
    dispatch(
      usersAction.postActiveStatus(
        confirmationData.id,
        !confirmationData.isActive
      )
    )
      .then((response) => {})
      .catch((err) => {
        setError(err.message);
      });
    confirmationHandleClose();
  };

  return (
    <React.Fragment>
      {confirmationData.status && (
        <UserActionConfirmation
          id={confirmationData.id}
          open={confirmationData.status}
          isActive={confirmationData.isActive}
          handleClose={confirmationHandleClose}
          actionHandler={actionHandler}
        />
      )}

      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 section-heading">
              <h2
                className="text-uppercase"
                data-aos={"fade-up"}
                data-aos-delay={100}
                data-aos-duration={700}
              >
                Users
              </h2>
              <h4
                className="text-uppercase"
                data-aos={"fade-up"}
                data-aos-delay={200}
                data-aos-duration={700}
              >
                - Search users -
              </h4>
              <div>
                <form action="/" method="get">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                    placeholder="User Email"
                    value={userEmail}
                    onChange={userEmailChangeHandler}
                  />
                </form>
              </div>
            </div>
          </div>

          {isLoading && (
            <div align="center">
              <Loader type="ThreeDots" color="green" height={100} width={100} />
            </div>
          )}
          {!isLoading && (
            <div className="row mt-20 mb-40">
              {filteredUsers.map((user, i) => (
                <User
                  user={user}
                  index={i}
                  key={i}
                  onClickHandler={onClickHandler}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Users;
