import React from "react";
import "../../App.css";
import {useSelector} from 'react-redux';

export default function Footer(props) {
  const color = useSelector(state => state.setTheme.color);
  const user = useSelector(state => state.setName);
 
  return (
    
    <footer className={color} style={{position: "fixed", color:"white", height:"50px", textAlign:"center", bottom:"0px", left:"0px", right:"0px", marginBottom:"0px"}} >
      <div className="text-center">
        
        <p className="p-2">
          &copy; {new Date().getFullYear()} Copyright: Posts {typeof(user) !== "undefined" ? "for " + user : "" }
        </p>
      </div>
    </footer>
  );
}
