import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/forms/inputFiled';
import { migrateAccessToPsql } from '../components/apis/migrateApi';
import backgroundImage from '../assets/images/backgroundImg.webp';
import successToast from '../components/toasts/successToast';
import errorToast from '../components/toasts/errorToast';
import logo from '../assets/images/acumen_velocity_logo.jpg';

const Home = () => {
    const [loading, setLoading] = useState(false);
    const initialValues = {
        accessDbPath: '',
        host: '',
        database: '',
        user: '',
        password: '',
        port: 5432,
    };

    const validationSchema = Yup.object({
        accessDbPath: Yup.string().required('Required!'),
        host: Yup.string().required('Required!'),
        database: Yup.string().required('Required!'),
        user: Yup.string().required('Required!'),
        password: Yup.string().required('Required!'),
        port: Yup.string().required('Required!'),
    });

    const handleSubmit = async (values) => {
        console.log(values, 'Form values');
        setLoading(true);
        try {
            const response = await migrateAccessToPsql(values);
            const message = response?.data?.message || "Migration Successful!";
            if (response?.status === 200) {
                successToast(message);
            } else {
                errorToast(message);
            }
        } catch (error) {
            console.error("Error:", error);
            errorToast(error?.response?.data || "Failed to submit request. Please try later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen w-full">
            <div
                className="hidden md:block md:w-1/2 h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center p-5 h-screen bg-white bg-opacity-90 md:bg-opacity-100 md:bg-background">
                <header className="fixed top-0 w-full md:w-1/2 md:right-0 bg-gradient-to-l from-gradientColorFrom to-gradientColorTo border-b border-white-600 text-primaryText shadow-md p-4 z-40">
                    <div className="mx-auto flex items-center gap-5">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="object-cover rounded"
                            style={{ height: '40px', width: '40px' }}
                        />
                        <h1 className="text-xl lg:text-2xl font-bold">Microsoft Access Migrate</h1>
                    </div>
                </header>

                <div className="mt-16 w-full flex justify-center">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values }) => (
                            <Form className="p-5 w-full md:w-2/3 bg-white rounded-md shadow-2xl">
                                <InputField label="Access DB Path:" name="accessDbPath" type="text" placeholder="Enter Access DB Path" value={values.accessDbPath} />
                                <InputField label="PSQL Server Host:" name="host" type="text" placeholder="Enter PSQL Server Host" value={values.host} />
                                <InputField label="PSQL Server Database:" name="database" type="text" placeholder="Enter PSQL Server Database" value={values.database} />
                                <InputField label="PSQL Server Username:" name="user" type="text" placeholder="Enter PSQL Server Username" value={values.user} />
                                <InputField label="PSQL Server Password:" name="password" type="password" placeholder="Enter PSQL Server Password" value={values.password} />
                                <InputField label="Port Number:" name="port" type="number" disabled placeholder="Enter Port Number" value={values.port} />
                                <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-hover mt-4">
                                    {loading ? 'Migrating...' : 'Migrate'}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Home;
