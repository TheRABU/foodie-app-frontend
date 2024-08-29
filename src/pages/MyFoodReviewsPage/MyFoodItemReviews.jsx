import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthenticateProvider";
import axios from "axios";
import Swal from "sweetalert2";
import MyFoodReviewCard from "./MyFoodReviewCard";
import { Helmet } from "react-helmet-async";

const MyFoodItemReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://foodie-app-backend-production.up.railway.app/myFoodReview/${user?.email}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        setMyReviews(response.data);
      })
      .catch((error) => {
        console.log("Error occurred during fetching your request", error);
      });
  }, [url]);

  const handleDeleteReview = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(
              `https://foodie-app-backend-production.up.railway.app/myFoodReview/${_id}`
            )
            .then((response) => {
              if (response.status === 200) {
                const remaining = myReviews.filter((ord) => ord._id !== _id);
                setMyReviews(remaining);
                Swal.fire(
                  "Deleted!",
                  "Your order has been deleted.",
                  "success"
                );
              } else {
                console.log("Failed to delete order");
              }
            });
        }
      })
      .catch((error) => {
        console.log("Sorry, could not delete", error);
      });
  };

  if (loading) {
    return (
      <div className="h-screen flex gap-4 p-4 flex-wrap justify-center items-center">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/474682/loading.svg"
          alt="Loading icon"
        />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Foodie Bite | My reviews of Food items</title>
      </Helmet>
      <h2 className="text-center text-3xl ">My Added Food Reviews</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-3 lg:px-20">
        {myReviews.map((oneReview) => (
          <MyFoodReviewCard
            key={oneReview._id}
            oneReview={oneReview}
            setMyReviews={setMyReviews}
            handleDeleteReview={handleDeleteReview}
          />
        ))}
      </section>
    </>
  );
};

export default MyFoodItemReviews;
