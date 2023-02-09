import React from 'react';
import Layout from "../components/layout";
import Judges from "../components/about-us-comp/judges";




export default function Example() {
    return (
        <Layout>
            <div>
                <div className= "flex items-center justify-center p-4">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl flex items-center">Meet the judges!</h2>
                </div>
                <Judges/>
            </div>
        </Layout>
    )
}