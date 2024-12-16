import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    userName: "",
    remark: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      userName: "",
      remark: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give a Comments!</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">userName</label>
        <input
          id="username"
          type="text"
          placeholder="userName"
          value={formData.userName}
          onChange={handleInputChange}
          name="userName"
        />
        <br /> <br />
        <label htmlFor="remark">Remark</label>
        <textarea
          id="remark"
          placeholder="Add few remarks"
          value={formData.remark}
          onChange={handleInputChange}
          name="remark"
        ></textarea>
        <br /> <br />
        <label htmlFor="ratting">Rating</label>
        <input
          id="ratting"
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
        />
        <br /> <br />
        <button>Add Comments</button>
      </form>
    </div>
  );
}