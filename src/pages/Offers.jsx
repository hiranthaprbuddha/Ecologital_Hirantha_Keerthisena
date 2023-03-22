import React, {useState} from "react";
import { FaEye, FaFilter } from "react-icons/fa";
import Modal from "../components/modal";

const Offers = () => {

    const [showModal, setShowModal] = useState(false);
    return(
       <div>
           <span className="breadcrum">INVENTORY /</span> <a className="offer">Offers</a> 
            <table className=" table-bordered" cellSpacing={15} width="100%">
	<thead>
		<tr>
            <th><input type="checkbox"/></th>
			<th>Promotion Name <FaFilter/></th>
			<th>Promotion Type <FaFilter/></th>
			<th>Price <FaFilter/></th>
			<th>Start Date <FaFilter/></th>
            <th>End Date <FaFilter/></th>
			<th>Qty <FaFilter/></th>
            <th>Min Saving <FaFilter/></th>
            <th>Max Saving <FaFilter/></th>
            <th>Actions <FaFilter/></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><button className="btn" onClick={()=> setShowModal(true)}><FaEye/></button></td>
            {showModal && (
                <Modal title={<p>Offer Overview</p>}
            Content={<h3>Sed Vestibulum Offer,<br/>All images and slider wiil showing here.</h3>}
            close={setShowModal}
            />
            )}
            
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>
        <tr>
			<td><input type="checkbox"/></td>
			<td>Promotion 1</td>
            <td>Prom_11_000</td>
            <td>$157</td>
			<td>25/01/2022</td>
            <td>25/01/2022</td>
			<td>157</td>
            <td>184,123</td>
            <td>184,126</td>
			<td><FaEye/></td>
		</tr>  
	</tbody>
            </table>
        </div>
    );
};

export default Offers;