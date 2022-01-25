import React, {useContext, useEffect, useState} from 'react';
import Spinner from "../layout/Spinner";
import ApiContext from '../../context/apicontext/apiContext';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Files = () => {
    const apiContext = useContext(ApiContext)
    let [count, setCount] = useState(0);

    //parameters and functions context call
    const {getAllFiles, loading, files} = apiContext;

    useEffect(() => {
        getAllFiles(); //call method
        setCount(0); // begin zero the account
        //eslint-disable-next-line
    }, []);

    if (loading) return <Spinner />

    return (
        <div>
            <form>
                <p/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>{files.length}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {files && files.map((name) => (
                        <tr key={++count}>
                            <td>{count}</td>
                            <td>{name}</td>
                            <td> <Link to={`/files/data/${name}`}><div className="fas fa-search"></div></Link></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </form>
        </div>
    );
}

export default Files;