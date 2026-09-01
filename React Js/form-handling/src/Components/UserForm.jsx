import React, { useState } from 'react'
import { countries, states } from '../locationData'
import { toast } from 'react-toastify'

export default function UserForm({userData, setUserData}) {

    const [countryData, setCountryData] = useState(countries)
    const [stateData, setStateData] = useState([])

    const filterStates = (event) => {
        validateError(event);

        var filterStateData = states.filter((v,i) => {
            if(event.target.value == v.country_id){
                return v;
            }
        })

        setStateData([...filterStateData])
    }

    const [errors, setErrors] = useState([]);

    const formHandler = (e) => {
        e.preventDefault();

        var form = e.target;
        var validateForm = [];

        var getFields = form.querySelectorAll('input, select')

        getFields.forEach((v,i) => {
            if(v.value == ''){
                validateForm.push(v.name);
            }
        })

        setErrors([...validateForm])

        if(validateForm.length == 0){

            var checkEmail = userData.filter((v) => {
                if(v.email == e.target.email.value){
                    return v;
                }
            })

            if(checkEmail.length == 0){
                var data = {
                    name : e.target.name.value,
                    email : e.target.email.value,
                    mobile_number : e.target.mobile_number.value,
                    country_id : e.target.country_id.value,
                    state_id : e.target.state_id.value,
                }

                setUserData([data, ...userData]);
                localStorage.setItem('userInfos', JSON.stringify([data, ...userData]));
                e.target.reset();
                
                toast.success('Data added succussfully !');
                
                setStateData([])
            } else {
                toast.error('Account already exit with same email id !')
            }


            
        }
    }

    const validateError = (event) => {
        if(event.target.value){
            var finalError = errors.filter((v) => {
                if(v != event.target.name){
                    return v
                }
            })

            setErrors([...finalError])
        } else {
            setErrors([...errors, event.target.name])
        }
    }

    return (
        <>
            <form className="space-y-5" onSubmit={ formHandler } autoComplete='off'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            onKeyUp={ validateError }
                            name='name'
                            placeholder="Enter your name"
                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />

                        {
                            errors.includes('name')
                            ?
                            <p className='text-red-600'>Name Is required</p>
                            :
                            ''
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            onKeyUp={ validateError }
                            name='email'
                            placeholder="Enter your email"
                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {
                            errors.includes('email')
                            ?
                            <p className='text-red-600'>Email Is required</p>
                            :
                            ''
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            onKeyUp={ validateError }
                            pattern='[0-9]{8,15}'
                            name='mobile_number'
                            placeholder="Enter mobile number"
                            className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                        {
                            errors.includes('mobile_number')
                            ?
                            <p className='text-red-600'>Mobile Number Is required</p>
                            :
                            ''
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            Country
                        </label>
                        <select name='country_id' className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" onChange={ filterStates }>
                            <option value=''>Select Country</option>

                            {
                                countryData.map((v,i) => {
                                    return(
                                        <option key={i} value={v.id}>{v.name}</option>
                                    )
                                })
                            }
                        </select>

                        {
                            errors.includes('country_id')
                            ?
                            <p className='text-red-600'>Country Is required</p>
                            :
                            ''
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                            State
                        </label>
                        <select onChange={ validateError } name='state_id' className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                            <option value=''>Select state</option>
                            {
                                stateData.map((v,i) => {
                                    return(
                                        <option key={i} value={v.id}>{v.name}</option>
                                    )
                                })
                            }
                        </select>

                        {
                            errors.includes('state_id')
                            ?
                            <p className='text-red-600'>State Is required</p>
                            :
                            ''
                        }
                    </div>
                </div>

                <div className="pt-2 flex gap-3">
                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-lg shadow-sm transition-colors"
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium px-6 py-2.5 rounded-lg transition-colors"
                    >
                        Reset
                    </button>
                </div>
            </form>
        </>
    )
}
