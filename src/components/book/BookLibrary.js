import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getUserProfile } from "../../redux/actions/users/usersAction";
import { Nobooks } from "../NoBooks/Nobooks";

const Bookslibrary = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    const userProfile = useSelector((state) => state.userProfile);
    const { user } = userProfile;

    return (
        <div className="outerbody">
            {(user?.books) ? (
                <>
                    {user?.books.map((book) => {
                        return (
                            <div className="Mainbody">
                                <div className="Bookdetail">
                                    <img
                                        className="image"
                                        src="https://48b6yd3iigex2rv7g41h5sts-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/memoir-definition.jpg"
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
                                        <span style={{ color: "crimson" }}>Author:</span>{" "}
                                        {book.author}
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
                </>
            ) : (<Nobooks />)}
        </div>
    );
};

export { Bookslibrary };
