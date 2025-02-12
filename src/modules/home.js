import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import InputField from '../components/forms/inputFiled';

const Home = () => {
    const initialValues = {
        access_db_path: '',
        sql_sever_host: '',
        sql_sever_database: '',
        sql_sever_username: '',
        sql_sever_password: '',
    };

    const validationSchema = Yup.object({
        access_db_path: Yup.string().required('Required!'),
        sql_sever_host: Yup.string().required('Required!'),
        sql_sever_database: Yup.string().required('Required!'),
        sql_sever_username: Yup.string().required('Required!'),
        sql_sever_password: Yup.string().required('Required!'),
    });

    const handleSubmit = (values) => {
        console.log('Form values:', values);
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
                            name="access_db_path"
                            type="text"
                            placeholder="Enter Access DB Path"
                            value={values?.access_db_path}
                        />
                        <InputField
                            label="SQL Sever Host:"
                            name="sql_sever_host"
                            type="text"
                            placeholder="Enter SQL Sever Host"
                            value={values?.sql_sever_host}
                        />
                        <InputField
                            label="SQL Server Database:"
                            name="sql_sever_database"
                            type="text"
                            placeholder="Enter SQL Server Database:"
                            value={values?.sql_sever_database}
                        />
                        <InputField
                            label="SQL Server Username:"
                            name="sql_sever_username"
                            type="text"
                            placeholder="Enter SQL Server Username:"
                            value={values?.sql_sever_username}
                        />
                        <InputField
                            label="SQL Server Password:"
                            name="sql_sever_password"
                            type="password"
                            placeholder="Enter SQL Server Password:"
                            value={values?.sql_sever_password}
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
