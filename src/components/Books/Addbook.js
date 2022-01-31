import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createBookAction } from "../../redux/actions/books/bookAction";
import AddBoxIcon from '@mui/icons-material/AddBox';


const AddBook = () => {
  const [category, setCategory] = useState("");
  const [picurl, setPicurl] = useState("");
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pagecount, setPagecount] = useState("");
  const [publication, setPublication] = useState("");
  const [publicationyear, setPublicationyear] = useState("");

  // dispatch
  const dispatch = useDispatch();

  // Handle Form Submit

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const data = {
      category,
      title,
      author,
      picurl,
      language,
      pagecount,
      publication,
      publicationyear
    };

    dispatch(createBookAction(data));
  };

  return (
    <section>

      <div className="addbooks">
        <h4>WELCOME WE HELP YOU TO CREATE NEW BOOK </h4>
        <h5 style={{ fontSize: "50px", marginBottom: "10px" }}><i class="fas fa-hand-point-down"></i></h5>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <AddBoxIcon /> Click To Add Book
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Book
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h1 className="text-center">Add Book</h1>
                <form onSubmit={handleFormSubmit}>
                  <fieldset>
                    <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Category </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="custom-select"
                      >
                        <option defaultValue="Programming">Programming</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Arts and Science">Arts and Science</option>
                        <option value="Commerce">Commerce</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Author </label>
                      <input
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Author name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Title</label>
                      <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Book Title"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Book URL</label>
                      <input
                        value={picurl}
                        onChange={(e) => setPicurl(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Book Url"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Language</label>
                      <input
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="English"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Page Count</label>
                      <input
                        value={pagecount}
                        onChange={(e) => setPagecount(e.target.value)}
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="0"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Publication</label>
                      <input
                        value={publication}
                        onChange={(e) => setPublication(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Published By"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Publication Year</label>
                      <input
                        value={publicationyear}
                        onChange={(e) => setPublicationyear(e.target.value)}
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="xxxx"
                      />
                    </div>
                    <button type="submit" className="btn btn-warning m-auto">
                      Create Book
                    </button>
                  </fieldset>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            ©Bookkeeping Application | made with{" "}
            <span style={{ color: "red", fontSize: "30px" }}>♥</span> by
            S.KARTHICK RAJA
          </p>
        </div>
      </footer>
    </section>
  );
};

export { AddBook };
