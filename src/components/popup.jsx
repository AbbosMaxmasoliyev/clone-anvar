"use client"
import React, { useRef } from 'react';
import { MdClose, MdExitToApp } from 'react-icons/md';
import { Formik, Form, Field } from 'formik';
import { useRouter } from 'next/navigation';


const Popup = ({ isOpen, onClose }) => {
    const router = useRouter()
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 w-full min-h-screen">
            <button className="absolute top-[20px] right-[20px]" onClick={onClose}><MdClose color='#f1f1f1' className="text-2xl" /></button>
            <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-md">
                <h2 className="text-lg font-semibold mb-4 font-os">
                    "7 qadamda qimmat sotib oladigan mijozlarni jalb qilish" videosini olish uchun hoziroq quyidagi formani t&apos;ldiring!
                </h2>
                <Formik
                    initialValues={{ name: '', phone: '' }}
                    onSubmit={(values) => {
                        console.log(values); // Formadagi ma'lumotlar bu yerda olinadi
                        router.push("/half")
                    }}
                >
                    {() => (
                        <Form className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 font-os"
                                >
                                    Ismingizni kiriting
                                </label>
                                <Field
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm font-os focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Ismingiz"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700 font-os"
                                >
                                    Telefon raqamingiz
                                </label>
                                <div className="mt-1 flex">
                                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 font-os border-gray-300 bg-gray-50 text-gray-500">
                                        +998
                                    </span>
                                    <Field
                                        type="number"
                                        id="phone"
                                        name="phone"
                                        className="flex-1 min-w-0 block w-full px-3 py-2 border border-gray-300 rounded-r-md font-os shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="99-999-9999"
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-md shadow hover:bg-yellow-600 font-os focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                            >
                                YUBORISH
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Popup
