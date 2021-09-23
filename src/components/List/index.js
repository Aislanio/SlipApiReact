import React from 'react';
import {useState,useEffect} from 'react';
export default   function List(){
	const [contador,setContador] = useState(1);
	useEffect(()  =>{s
		setContador(10);
		alert(`contador:${contador}`)
	},[]);+

	return  <div>Contador:{contador}</div>;
}