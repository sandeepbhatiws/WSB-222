import React from 'react'

export default function UserData() {
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
                        <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="px-4 py-3 text-slate-700">Himanshu Tiwari</td>
                            <td className="px-4 py-3 text-slate-700">himanshu@example.com</td>
                            <td className="px-4 py-3 text-slate-700">9876543210</td>
                            <td className="px-4 py-3 text-slate-700">India</td>
                            <td className="px-4 py-3 text-slate-700">Rajasthan</td>
                            <td className="px-4 py-3">
                                <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors">
                                    Delete
                                </button>
                            </td>
                        </tr>

                        <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="px-4 py-3 text-slate-700">Priya Sharma</td>
                            <td className="px-4 py-3 text-slate-700">priya@example.com</td>
                            <td className="px-4 py-3 text-slate-700">9123456780</td>
                            <td className="px-4 py-3 text-slate-700">India</td>
                            <td className="px-4 py-3 text-slate-700">Maharashtra</td>
                            <td className="px-4 py-3">
                                <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors">
                                    Delete
                                </button>
                            </td>
                        </tr>

                        <tr className="hover:bg-slate-50">
                            <td className="px-4 py-3 text-slate-700">John Doe</td>
                            <td className="px-4 py-3 text-slate-700">john@example.com</td>
                            <td className="px-4 py-3 text-slate-700">9988776655</td>
                            <td className="px-4 py-3 text-slate-700">United States</td>
                            <td className="px-4 py-3 text-slate-700">Delhi</td>
                            <td className="px-4 py-3">
                                <button className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-1.5 rounded-md transition-colors">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
