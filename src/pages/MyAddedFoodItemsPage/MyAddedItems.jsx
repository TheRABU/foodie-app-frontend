import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthenticateProvider";

import Swal from "sweetalert2";
import AddItemCard from "./AddItemCard";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const MyAddedItems = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();

  // const url = `http://localhost:5000/myRequest/${user?.email}`;
  useEffect(() => {
    axiosPublic
      .get(`/myRequest/${user?.email}`)
      .then((response) => {
        setLoading(false);
        setMyItems(response.data);
      })
      .catch((error) => {
        console.log(
          "Error occurred during fetching your request",
          error.message
        );
      });
  }, [user?.email, axiosPublic]);

  // handleDeleteRequestedItem

  const handleDeleteRequestedItem = (_id) => {
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
          axiosPublic.delete(`/request/${_id}`).then((response) => {
            if (response.status === 200) {
              const remaining = myItems.filter((ord) => ord._id !== _id);
              setMyItems(remaining);
              Swal.fire("Deleted!", "Your order has been deleted.", "success");
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

  // GET REQUEST FROM DB BY USR EMAIL
  return (
    <>
      <Helmet>
        <title>Foodie Bite | My added items</title>
      </Helmet>
      {/* RIGHT SIDE CONTENT */}
      <div className="w-full px-5 h-full bg-[#ffffff]">
        <h2 className="text-center text-3xl ">My Added Custom food requests</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto px-3 lg:px-20">
          {myItems.map((item) => (
            <AddItemCard
              key={item._id}
              item={item}
              setMyItems={setMyItems}
              handleDeleteRequestedItem={handleDeleteRequestedItem}
              myItems={myItems}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default MyAddedItems;
