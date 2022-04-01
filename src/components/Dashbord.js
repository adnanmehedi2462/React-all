
import React from'react';
export default function Dashboard(){
    return(
        <div className="dashboard">
            <h1>This is a Dashboard  page</h1>
            <img src="https://www.hyperlinkcode.com/images/sample-image.jpg"  />
          
<form>
  <label for="fname">First name:</label><br/>
  <input type="text" id="fname" name="fname" value="John"/><br/>
  <label for="lname">Last name:</label><br/>
  <input type="text" id="lname" name="lname" value="Doe" />
</form>
        </div>
    )
}