import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getUserProfile } from "../../redux/actions/users/usersAction";
import { Link } from "react-router-dom";
import AddBoxIcon from '@mui/icons-material/AddBox';

const Bookslibrary = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const userProfile = useSelector((state) => state.userProfile);
    const { user } = userProfile;

    return (
        <section>
            <h3 className="userbooks">Click Here To Create New Books.....!     <i style={{ marginLeft: "10px", marginRight: "10px", fontSize: "35px", marginBottom: "10px" }} class="fas fa-hand-point-right"></i> <Link to="/addbook" className="btn btn-primary"> <AddBoxIcon /> Add Book</Link></h3>
            <div className="outerbody">
                {user?.books.map((book) => {
                    return (
                        <div className="Mainbody">
                            <div className="Bookdetail">
                                <img className="image" src={book.picurl} alt={book.title} />
                                <h5>
                                    <span style={{ color: "crimson" }}>Category:</span>{" "}
                                    {book.category}
                                </h5>
                                <h6 className="font">
                                    <span style={{ color: "crimson" }}>Title:</span> {book.title}
                                </h6>
                                <h6 className="font">
                                    <span style={{ color: "crimson" }}>Author:</span> {book.author}
                                </h6>
                                <h6 className="font">
                                    <span style={{ color: "crimson" }}>Language:</span>{" "}
                                    {book.language}
                                </h6>
                                <h6 className="font">
                                    <span style={{ color: "crimson" }}>Publication:</span>{" "}
                                    {book.publication}
                                </h6>
                                <h6 className="font">
                                    <span style={{ color: "crimson" }}>Publication Year:</span>{" "}
                                    {book.publicationyear}
                                </h6>
                                <h6 className="font">
                                    <span style={{ color: "crimson" }}>Pagecount:</span>{" "}
                                    {book.pagecount}
                                </h6>
                                <div className="icons">
                                    <span style={{ color: "green" }}>
                                        Edit Book:
                                        <EditIcon color="success" />
                                    </span>
                                    <span style={{ color: "red" }}>
                                        Delete Book:
                                        <DeleteIcon color="error" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export { Bookslibrary };
