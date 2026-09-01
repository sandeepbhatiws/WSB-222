import React from 'react'
import { countries, states } from '../locationData'

export default function UserData({userData, setUserData}) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="px-4 py-3 text-sm font-semibold text-slate-600">Name</th>
                            <th className="px-4 py-3 text-sm font-semibold text-slate-600">Email</th>
                            <th className="px-4 py-3 text-sm font-semibold text-slate-600">Mobile Number</th>
                            <th className="px-4 py-3 text-sm font-semibold text-slate-600">Country</th>
                            <th className="px-4 py-3 text-sm font-semibold text-slate-600">State</th>
                            <th className="px-4 py-3 text-sm font-semibold text-slate-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.length > 0
                            ?
                            userData.map((v,i) => {

                                var filterCountryName = countries.filter((c) => {
                                    if(c.id == v.country_id){
                                        return c;
                                    }
                                })

                                var filterStateName = states.filter((c) => {
                                    if(c.id == v.state_id){
                                        return c;
                                    }
                                })

                                return(
                                    <tr className="border-b border-slate-100 hover:bg-slate-50" key={i}>
                                        <td className="px-4 py-3 text-slate-700">{v.name}</td>
                                        <td className="px-4 py-3 text-slate-700">{v.email}</td>
                                        <td className="px-4 py-3 text-slate-700">{v.mobile_number}</td>
                                        <td className="px-4 py-3 text-slate-700">{ filterCountryName[0]?.name }</td>
                                        <td className="px-4 py-3 text-slate-700">{ filterStateName[0]?.name }</td>
                                        <td className="px-4 py-3">
                                            <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            <tr className="border-b border-slate-100 hover:bg-slate-50">
                                <td colSpan={7} className="px-4 py-3 text-slate-700 text-center">No Record Founds !!</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
