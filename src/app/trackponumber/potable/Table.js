import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import up from "../images/up.png";
import down from "../images/down.png";


const Table = () => {
    return (
        <div className={styles.container}>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Medicine</th>
                        <th scope="col">Distributor name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">MRP Price</th>
                        <th scope="col">GST%</th>
                        <th scope="col">Your Purchase Price</th>
                        <th scope="col">Market trend <br/> (in your area)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Synthroid</td>
                        <td>Annette Black</td>
                        <td>100</td>
                        <td>&#8377;50</td>
                        <td>10</td>
                        <td><input type='number' placeholder='&#8377;40' /><span style={{color:"#166534", fontStyle:"italic",fontSize:"12px",marginLeft:"0.5rem"}}>20% less</span> than MRP</td>
                        <td  style={{color:"#166534"}}>2% <span><Image src={up} alt="img" /></span></td>
                    </tr>
                    <tr>
                        <td>Pepto-Bismol</td>
                        <td>Ralph Edwards</td>
                        <td>100</td>
                        <td>&#8377;50</td>
                        <td>10</td>
                        <td><input type='number' placeholder='&#8377;40' /><span style={{color:"#166534", fontStyle:"italic",fontSize:"12px",marginLeft:"0.5rem"}}>20% less</span> than MRP</td>
                        <td style={{color:"#FF0000"}}>2% <span><Image src={down} alt="img" /></span></td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>Annette Black</td>
                        <td>100</td>
                        <td>&#8377;50</td>
                        <td>10</td>
                        <td><input type='number' placeholder='&#8377;40' /><span style={{color:"#166534", fontStyle:"italic",fontSize:"12px",marginLeft:"0.5rem"}}>20% less</span> than MRP</td>
                        <td  style={{color:"#166534"}}>2% <span><Image src={up} alt="img" /></span></td>
                    </tr>
                    <tr>
                        <td>Pepto-Bismol</td>
                        <td>Ralph Edwards</td>
                        <td>100</td>
                        <td>&#8377;50</td>
                        <td>10</td>
                        <td><input type='number' placeholder='&#8377;40' /><span style={{color:"#166534", fontStyle:"italic",fontSize:"12px",marginLeft:"0.5rem"}}>20% less</span> than MRP</td>
                        <td style={{color:"#FF0000"}}>2% <span><Image src={down} alt="img" /></span></td>
                    </tr>
                    <tr className='table-light'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='ps-5'> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Total price:</td>
                        <td>&#8377;1000</td>
                    </tr>
                    <tr className='table-light'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='ps-5'> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Cash discount:</td>
                        <td>&#8377;Nil</td>
                    </tr>
                    <tr className='table-light'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className='ps-5'> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b>Payable price</b></td>
                        <td><b>&#8377;969.95</b> </td>
                    </tr>
                    <tr className='table-light'>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td ></td>
                        <td><button>Pay</button></td>
                    </tr>
                </tbody>
            </table>
           
        </div>
    )
}

export default Table