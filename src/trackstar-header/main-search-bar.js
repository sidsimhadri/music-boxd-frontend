
function MainSearchBar() {
    function handleKeyDown(event) {
      if (event.keyCode === 13) {
        window.location.href = "/search";
      }
    }
  
    return (
      <span className="form-group float-left ms-3 me-4" style={{width: "60%"}}>
        <input type="text" className="form-control" placeholder="Search" id="inputDefault" onKeyDown={handleKeyDown} />
      </span>
    );
  };
  
  export default MainSearchBar;