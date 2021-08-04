import { useState } from "react";


const List2 = () => {
    const [name, setName] = useState("");
    const [checked, setChecked] = useState(false);
  
    return (
      <form>
       {/*  <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name"
          aria-label="fullname"
        />
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />{" "}
          Not a robot?
        </label>
        <input type="submit" value="Submit"></input> */}
      </form>
    );
  };
  
  export default List2;