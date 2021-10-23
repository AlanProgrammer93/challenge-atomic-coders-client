import React, { useEffect, useState } from 'react'
import clientAxios from '../functions/Axios';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

const Modal = ({ DateSelected, onClose }) => {
    const [times, setTimes] = useState(null);
    const [loading, setLoading] = useState(true)

    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        getDate()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDate = async () => {
        const { data } = await clientAxios.post('/get', { DateSelected })
        setTimes(data.dates)
        setLoading(false)
    }

    const saveAppointment = async (time) => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await clientAxios.post(`/create`, { DateSelected, time }, {
                headers: {
                    token
                }
            });
            if (data.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Appointment Registered',
                    showConfirmButton: false,
                    timer: 1500
                })
                getDate()
            } else {
                Swal.fire('Error', 'Appointment not available', 'error');
            }

        } catch (error) {
            Swal.fire('Error', 'Log In', 'error');
        }
    }

    const searchTime = (value) => {
        return times.find(time => time.time === value);
    }

    const eliminar = async (time) => {
        const token = localStorage.getItem('token')
        try {
            const { data } = await clientAxios.post(`/delete`, { DateSelected, time }, {
                headers: {
                    token
                }
            });
            if (data.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Appointment Deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
                getDate()
            } else {
                Swal.fire('Error', 'Appointment not registered', 'error');
            }

        } catch (error) {
            Swal.fire('Error', 'Log In', 'error');
        }
    }

    return (
        <div className="modalMask">
            <button onClick={onClose} className="closeButton">
                X
            </button>
            {
                loading ? <p>Loading...</p>
                    : (
                        <div className="card">
                            <div className="fila">
                                {
                                    searchTime('8 am') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('8 am').patient.name} {searchTime('8 am').patient.lastName}</button>
                                            : searchTime('8 am').patient._id === user?._id ? <button onClick={() => eliminar('8 am')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button >8 am</button> : <button onClick={() => saveAppointment('8 am')} >8 am</button>
                                }
                                {
                                    searchTime('9 am') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('9 am').patient.name} {searchTime('9 am').patient.lastName}</button>
                                            : searchTime('9 am').patient._id === user?._id ? <button onClick={() => eliminar('9 am')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button >9 am</button> : <button onClick={() => saveAppointment('9 am')} >9 am</button>
                                }
                            </div>
                            <div className="fila">
                                {
                                    searchTime('10 am') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('10 am').patient.name} {searchTime('10 am').patient.lastName}</button>
                                            : searchTime('10 am').patient._id === user?._id ? <button onClick={() => eliminar('10 am')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button >10 am</button> : <button onClick={() => saveAppointment('10 am')} >10 am</button>
                                }
                                {
                                    searchTime('11 am') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('11 am').patient.name} {searchTime('11 am').patient.lastName}</button>
                                            : searchTime('11 am').patient._id === user?._id ? <button onClick={() => eliminar('11 am')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button >11 am</button> : <button onClick={() => saveAppointment('11 am')} >11 am</button>
                                }
                            </div>
                            <div className="fila">
                                {
                                    searchTime('12 am') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('12 am').patient.name} {searchTime('12 am').patient.lastName}</button>
                                            : searchTime('12 am').patient._id === user?._id ? <button onClick={() => eliminar('12 am')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button >12 am</button> : <button onClick={() => saveAppointment('12 am')} >12 am</button>
                                }
                                {
                                    searchTime('1 pm') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('1 pm').patient.name} {searchTime('1 pm').patient.lastName}</button>
                                            : searchTime('1 pm').patient._id === user?._id ? <button  onClick={() => eliminar('1 pm')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button >1 pm</button> : <button onClick={() => saveAppointment('1 pm')} >1 pm</button>
                                }
                            </div>
                            <div className="fila">
                            {
                                    searchTime('2 pm') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('2 pm').patient.name} {searchTime('2 pm').patient.lastName}</button>
                                            : searchTime('2 pm').patient._id === user?._id ? <button onClick={() => eliminar('2 pm')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button >2 pm</button> : <button onClick={() => saveAppointment('2 pm')} >2 pm</button>
                                }
                                {
                                    searchTime('3 pm') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('3 pm').patient.name} {searchTime('3 pm').patient.lastName}</button>
                                            : searchTime('3 pm').patient._id === user?._id ? <button onClick={() => eliminar('3 pm')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button >3 pm</button> :  <button onClick={() => saveAppointment('3 pm')} >3 pm</button>
                                }
                            </div>
                            <div className="fila">
                            {
                                    searchTime('4 pm') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('4 pm').patient.name} {searchTime('4 pm').patient.lastName}</button>
                                            : searchTime('4 pm').patient._id === user?._id ? <button onClick={() => eliminar('4 pm')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button >4 pm</button> :  <button onClick={() => saveAppointment('4 pm')} >4 pm</button>
                                }
                                {
                                    searchTime('5 pm') ?
                                        user?.role === 'doctor' ? <button style={{backgroundColor: 'green', color: 'white'}}>{searchTime('5 pm').patient.name} {searchTime('5 pm').patient.lastName}</button>
                                            : searchTime('5 pm').patient._id === user?._id ? <button onClick={() => eliminar('5 pm')} style={{backgroundColor: 'red', color: 'white'}}>Cancelar</button> 
                                            : <button style={{backgroundColor: 'green', color: 'white'}}>No disponible</button>
                                        : user?.role === 'doctor' ? <button>5 pm</button> :  <button onClick={() => saveAppointment('5 pm')} >5 pm</button>
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
}

export default Modal
