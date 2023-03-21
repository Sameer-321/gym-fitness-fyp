import React from "react";
import "../../styles/Avatar.css"
export default function Avatar({ className, src, alt }) {
  return (
    <div>
      {src ? (
        <img className={`{defaultClass ${className}}`} src={src} alt={alt} />
      ) : (
        <img
          src={
            "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
          }
          alt={alt}
        />
      )}
    </div>
  );
}
