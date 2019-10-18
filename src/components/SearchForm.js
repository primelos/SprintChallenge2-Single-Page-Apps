import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     <form>
       <input type='text' placeholder='Search Here' value={props.val} onChange={props.change} tableindex='0' />
     </form>
    </section>
  );
}
