import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import { createBucket, getBuckets } from "./helper/coreapicalls";
import { isAuthenticate } from "../auth/index";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

toast.configure();

const Bucket = () => {
  const [buckets, setBuckets] = useState([]);
  const [name, setName] = useState("");
  const [reload, setReload] = useState(false)

  const { user, token } = isAuthenticate();

  const preLoad = (userId, token) => {
    getBuckets(userId, token).then((response) => {
      if (response.error) {
        console.log(response.error);
      } else {
        setBuckets(response);
      }
    });
  };

  useEffect(() => {
    preLoad(user.id, token);
  }, [reload]);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setName(value);
  };

  const onError = (error) => {
    toast.error(`${error}`);
  };

  const onSubmitHandler = (event) => {
      event.preventDefault()
      createBucket(user.id, token, { name }).then(response => {
          if(response.error){
            onError(response.error)
          }else{
              setName('')
              setReload(!reload)
          }
      })
  }

  const bucketForm = () => {
    return (
      <form className="create">
        <h3 className="fs-1">Create your bucket</h3>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={onChangeHandler}
          className="form-control"
          placeholder="Create your bucket"
          required
          autoFocus
        />
        <span className="btn btn-primary mt-2"onClick={onSubmitHandler}>Create</span>
        <h6 className='text-muted mt-2'>click your buckets to create todo's</h6>
      </form>
    );
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="bucket">YOUR BUCKETS</h1>
        <div className="col-3">
          <UserInfo />
        </div>
        <div className="col-6 buckets">
          {bucketForm()}
          {buckets.length === 0 ? (
            <h2 className="d-grid col-6 mb-2 create-btn">No buckets created</h2>
          ) : (
            buckets.map((bucket) => {
              return (
                <div key={bucket._id} className="d-grid col-6 mb-2 create-btn">
                  <button
                    className="btn btn-primary"
                    type="button"
                  >
                    <Link to={`/${bucket._id}`} className='text-light'>{bucket.name}</Link>
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Bucket;
