import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import edit from "../images/file.png";
import remove from "../images/remove.png";
import tablet from "../images/tablet.png";
import powder from "../images/powder.png";
import doumble from "../images/doumble.png";
import aspire from "../images/aspire.png";
import files from "../images/edit.png";
import dis from "../images/dis.png";
import shelf from "../images/dis.png";
import quantity from "../images/dis.png";
import expiry from "../images/expiry.png";



function Table() {
    return (
        <div className={styles.container}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Medicine</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Type</th>
                        <th scope="col">Expiry date</th>
                        <th scope="col">Purchase date</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Shelf label</th>
                        <th scope="col">Distributor</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={tablet} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={powder} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={doumble} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={tablet} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={powder} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={doumble} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>


                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={tablet} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={powder} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={doumble} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={tablet} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={powder} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Synthroid</td>
                        <td>100</td>
                        <td><Image src={doumble} alt='img' /> </td>
                        <td>04-09-2022</td>
                        <td>04-09-2022</td>
                        <td>Bayer AG </td>
                        <td>SB-12</td>
                        <td>McKesson Corporation</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    
                  
                    
                </tbody>
            </table>

            

        </div>
    )
}

export default Table