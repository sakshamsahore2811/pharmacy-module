

import React from 'react';
import styles from "./style.module.css";
import Image from 'next/image';
import edit from "../images/file.png";
import remove from "../images/delete.png";
import dleft from "../images/dleft.png"
import sleft from "../images/sleft.png"
import sright from "../images/sright.png"
import dright from "../images/dright.png"
import edits from "../images/edit.png";
import close from "../images/close.png";
import mail from "../images/email.png";
import call from "../images/phone.png"






function Table() {
    return (
        <div className={styles.container}>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Distributor’s name</th>
                        <th scope="col">Sales representative</th>
                        <th scope="col">Mobile number</th>
                        <th scope="col">DL no.</th>
                        <th scope="col">Food Lic no.</th>
                        <th className='ps-5' scope="col">Email</th>
                        <th scope="col">Awaiting PO</th>
                        <th scope="col">Delivered amount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>

                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                    <tr>
                        <td>Savannah Nguyen</td>
                        <td>Savannah Nguyen</td>
                        <td>9455575237 </td>
                        <td>9455575237</td>
                        <td>9455575237</td>
                        <td>sara.cruz@example.com</td>
                        <td>444</td>
                        <td>&#8377;444</td>
                        <td><span><Image src={edit} alt='img' /></span><span className='ms-3'><Image src={remove} alt='img' /> </span>  </td>
                    </tr>
                </tbody>
            </table>
            <div className={styles.bottom}>
                <span>1</span>
                <span>-</span>
                <span>50</span>
                <span className='ms-2'>off</span>
                <span className='ms-2'>650</span>
                <span className='ms-4'><Image src={dleft} alt='img' /></span>
                <span className='ms-4'><Image src={sleft} alt='img' /></span>
                <span className='ms-4'><Image src={sright} alt='img' /></span>
                <span className='ms-4'><Image src={dright} alt='img' /></span>
            </div>

            <div className={styles.mtable}>
                <div className={styles.top}>
                    <span>1.McKesson Corporation</span>
                    <span>
                        <Image src={edits} alt='img' />
                        <Image src={close} alt='img' />
                    </span>
                </div>
                <div className={styles.contact}>
                    <span>
                        <Image src={call} alt='img' />9455575237
                    </span>
                    <span>
                        <Image src={mail} alt='img' />sara@gmail.com
                    </span>
                </div>
                <div className='d-flex'>
                    <ul className={styles.left}>
                        <li>Sales representative</li>
                        <li>DL no.</li>
                        <li>Food lic no.</li>
                        <li>Awaiting PO</li>
                        <li>Delivered amount</li>
                    </ul>
                    <ul className={styles.right}>
                        <li>Savannah Nguyen</li>
                        <li>45544545554</li>
                        <li>45544545554</li>
                        <li>444</li>
                        <li>&#8377;444</li>
                    </ul>
                </div>
            </div>
            <div className={styles.mtable}>
                <div className={styles.top}>
                    <span>1.McKesson Corporation</span>
                    <span>
                        <Image src={edits} alt='img' />
                        <Image src={close} alt='img' />
                    </span>
                </div>
                <div className={styles.contact}>
                    <span>
                        <Image src={call} alt='img' />9455575237
                    </span>
                    <span>
                        <Image src={mail} alt='img' />sara@gmail.com
                    </span>
                </div>
                <div className='d-flex'>
                    <ul className={styles.left}>
                        <li>Sales representative</li>
                        <li>DL no.</li>
                        <li>Food lic no.</li>
                        <li>Awaiting PO</li>
                        <li>Delivered amount</li>
                    </ul>
                    <ul className={styles.right}>
                        <li>Savannah Nguyen</li>
                        <li>45544545554</li>
                        <li>45544545554</li>
                        <li>444</li>
                        <li>&#8377;444</li>
                    </ul>
                </div>
            </div>
            <div className={styles.mtable}>
                <div className={styles.top}>
                    <span>1.McKesson Corporation</span>
                    <span>
                        <Image src={edits} alt='img' />
                        <Image src={close} alt='img' />
                    </span>
                </div>
                <div className={styles.contact}>
                    <span>
                        <Image src={call} alt='img' />9455575237
                    </span>
                    <span>
                        <Image src={mail} alt='img' />sara@gmail.com
                    </span>
                </div>
                <div className='d-flex'>
                    <ul className={styles.left}>
                        <li>Sales representative</li>
                        <li>DL no.</li>
                        <li>Food lic no.</li>
                        <li>Awaiting PO</li>
                        <li>Delivered amount</li>
                    </ul>
                    <ul className={styles.right}>
                        <li>Savannah Nguyen</li>
                        <li>45544545554</li>
                        <li>45544545554</li>
                        <li>444</li>
                        <li>&#8377;444</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Table