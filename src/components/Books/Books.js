import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksAction } from "../../redux/actions/books/bookAction";
import { Loading } from "../Loading/Loading";

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch action
    dispatch(fetchBooksAction());
  }, [dispatch]);

  //GRAB THE DATA FROM OUR STORE
  const { books, loading } = useSelector((state) => {
    return state.booksList;
  });
  console.log(books);
  console.log(loading);

  return (

    <div className="outerbody">
      {loading ? (
        <Loading />
      ) : (
        <>
          {books &&
            books.map((book) => {
              return (
                <div className="Mainbody">
                  <div className="Bookdetail">
                    <img
                      className="image"
                      src={book.picurl}
                      alt={book.title}
                    />
                    <h5>
                      <span style={{ color: "crimson" }}>Category:</span>{" "}
                      {book.category}
                    </h5>
                    <h6 className="font">
                      <span style={{ color: "crimson" }}>Title:</span>{" "}
                      {book.title}
                    </h6>
                   
                    <h6 className="font">
                      <span style={{ color: "crimson" }}>Language:</span>{" "}
                      {book.language}
                    </h6>
                    <h6 className="font">
                      <span style={{ color: "crimson" }}>Publication:</span>{" "}
                      {book.publication} - {book.publicationyear}
                    </h6>
                    <h6 className="font">
                      <span style={{ color: "crimson" }}>Author:</span>{" "}
                      {book.author}
                    </h6>
                    <div className="icons"></div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>

  );
};

export { Books };
