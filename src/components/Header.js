import React, { Component } from 'react'
import './Header.css';
import { BsFillTelephoneInboundFill } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { ImLocation } from 'react-icons/im';
import { FaUserAlt } from 'react-icons/fa';


export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            soz: ""
        }
    }


    componentWillMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(v => v.json())
            .then((succsess) => {
                console.log(succsess);
                this.setState({ data: succsess })
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {

            // function Search(v) {
            //    this.setState({soz: v})
            // }

        return (
            <div className='todo_list'>
                <nav className='navbar'>
                    <h1 className="nav_logo">ToDo-List </h1>
                    <div className="nav_left">
                        <input type="text"  className="form p-2" placeholder='search...' onInput={(v) => this.setState({soz: v.target.value})} />
                        <button className="nav_button p-2 ms-2"  onClick={() => {
                            this.setState(this.data.soz.target.value)
                        }}>ADD</button>
                    </div>
                </nav>
                {
                    (this.state.data.length > 0) ? (
                        <table className='table'>
                            <thead>
                                <tr className='tr bg-black'>
                                    <th className='th fw-bold fs-4 text-light'>img</th>
                                    <th className='th fw-bold fs-4 text-light'>name <span className='website_icons ms-3 text-success'><FaUserAlt /></span></th>
                                    <th className='th fw-bold fs-4 text-light'>user name <span className='website_icons ms-3 text-success'><FaUserAlt /></span></th>
                                    <th className='th fw-bold fs-4 text-light'>address <span className='website_icons ms-3 text-success'><ImLocation /></span> </th>
                                    <th className='th fw-bold fs-4 text-light'>phone: <span className='phone_icons ms-3 fw-bold text-success'><BsFillTelephoneInboundFill /></span></th>
                                    <th className='th fw-bold fs-4 text-light'>website <span className='website_icons ms-3 text-success'><SiGmail /></span></th>
                                    <th className='th fw-bold fs-4 text-light'>Delete</th>

                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map((v, i) => {
                                    return <tr className='tr_bottom' key={i}>
                                        <td className='td_img'><img className='img bg-success' src="https://cdn3.vectorstock.com/i/1000x1000/46/42/person-gray-photo-placeholder-man-vector-22964642.jpg" alt="person" /></td>
                                        <td className='td fw-bolder bg-success text-warning'>{v.name}</td>
                                        <td className='td fw-bolder bg-success text-warning'>{v.username}</td>
                                        <td className='td fw-bolder bg-success text-warning'>{v.address.street}</td>
                                        <td className='td fw-bolder bg-success text-warning'>{v.phone}</td>
                                        <td className='td fw-bolder bg-success text-warning'>{v.website}</td>
                                        <td className='td fw-bolder bg-success text-warning'><button className='delete_icons fw-bold bg-success text-danger' onClick={() => {
                                            this.state.data.splice(i, 1)
                                            this.setState(this.state.data)
                                        }}><RiDeleteBin5Line /></button></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    ) : (<h1>malumot yoq</h1>)
                }

            </div>
        )
    }
}
