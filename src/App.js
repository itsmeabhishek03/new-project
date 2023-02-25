import { useState } from "react";
import "./App.css";
import { Add, Close } from "@material-ui/icons";

import { TextField, MenuItem, Select, Dialog } from "@material-ui/core";

const room = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const [toggle, setToggle] = useState(false);
  const handleClickOpen = () => {
    setToggle(true);
  };

  const handleClose = () => {
    setToggle(false);
  };
  return (
    <div className="App">
      <button className="addButton" onClick={handleClickOpen}>
        {<Add className="addIcon" />} {"Add your own Hotel"}
      </button>

      {toggle && (
        <Dialog className="dialog" open={toggle} onClose={handleClose}>
          <div className="body scale-up-center">
            <form className="form" autoComplete="off">
              <h2 className="header">Add your own hotel</h2>
              <div className="line" />
              <div className="row1">
                <TextField
                  className="one"
                  required
                  id="outlined-basic"
                  label="Name of hotel"
                  variant="outlined"
                  size="small"
                  defaultValue=""
                  color="secondary"
                />

                <Select
                  className="two"
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  variant="outlined"
                  size="small"
                  defaultValue={1}
                >
                  {room.map((Option) => (
                    <MenuItem value={Option}>{Option} room</MenuItem>
                  ))}
                </Select>
              </div>
              <div className="row2">
                <TextField
                  className="three"
                  required
                  id="outlined-basic"
                  label="Hotel Rating"
                  variant="outlined"
                  size="small"
                  type="number"
                  color="secondary"
                />
                <TextField
                  className="four"
                  id="outlined-basic"
                  label="Type of room"
                  variant="outlined"
                  size="small"
                  defaultValue=" "
                />
              </div>
              <div className="row3">
                <textarea
                  className="textarea"
                  rows="5"
                  placeholder="Description"
                />
              </div>
              <div className="row4">
                <TextField
                  className="five"
                  required
                  id="outlined-basic"
                  label="Total price (USD)"
                  variant="outlined"
                  size="small"
                  type="number"
                  defaultValue={0}
                  color="secondary"
                />
              </div>
              <div className="row5">
                <button className="btn">{"Publish"}</button>
              </div>
              <Close className="close" onClick={handleClose} />
            </form>
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default App;
