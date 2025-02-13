import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/forms/inputFiled';
import { migrateAccessToPsql } from '../components/apis/migrateApi';

const Home = () => {
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
    });

    const handleSubmit = async (values) => {
        console.log(values, 'xcbhxscv');

        // setloading(true);
        try {
            const response = await migrateAccessToPsql(values);

            if (response?.status === 200) {
                const successMessage = response?.data?.message || "Migration Successful!";
                alert(successMessage);
            } else {
                const errorMessage = response?.data?.message || "Something went wrong!";
                alert(errorMessage);
            }
        } catch (error) {
            console.error("Error occurred:", error);
            alert(error?.response?.data?.message || "Failed to submit request. Please try later.");
        }
    };

    return (
        <div className="flex w-full overflow-auto justify-center items-center h-[91.5vh] px-5">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ values, setFieldValue, errors, touched }) => (
                    <Form className="p-5 md:p-20 lg:p-20 w-full md:w-2/3 bg-white rounded-md shadow-2xl">
                        <InputField
                            label="Access DB Path:"
                            name="accessDbPath"
                            type="text"
                            placeholder="Enter Access DB Path"
                            value={values?.accessDbPath}
                        />
                        <InputField
                            label="SQL Sever Host:"
                            name="host"
                            type="text"
                            placeholder="Enter SQL Sever Host"
                            value={values?.host}
                        />
                        <InputField
                            label="SQL Server Database:"
                            name="database"
                            type="text"
                            placeholder="Enter SQL Server Database:"
                            value={values?.database}
                        />
                        <InputField
                            label="SQL Server Username:"
                            name="user"
                            type="text"
                            placeholder="Enter SQL Server Username:"
                            value={values?.user}
                        />
                        <InputField
                            label="SQL Server Password:"
                            name="password"
                            type="password"
                            placeholder="Enter SQL Server Password:"
                            value={values?.password}
                        />
                        <button
                            type="submit"
                            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-hover mt-4" >
                            Migrate
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};


export default Home;
