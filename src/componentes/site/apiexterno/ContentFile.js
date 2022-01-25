import React, {useContext, useEffect} from 'react';
import Spinner from "../layout/Spinner";
import ApiContext from '../../context/apicontext/apiContext';
import {Table} from 'react-bootstrap';

const ContentFile = ({match}) => {
    const apiContext = useContext(ApiContext)

    //parameters and functions context call
    const {getContentFile, loading, contentFile} = apiContext;

    useEffect(() => {
        getContentFile(match.params.filename); //call method
        //eslint-disable-next-line
    }, []);

    if (loading) return <Spinner/>

    return (
        <div>
            <form>
                <p/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>File Name</th>
                        <th>Text</th>
                        <th>Number</th>
                        <th>Hex</th>
                    </tr>
                    </thead>
                    <tbody>{contentFile.lines && contentFile.lines.map((row) => (
                        <tr key={row.hex}>
                            <td>{contentFile.file}</td>
                            <td>{row.text}</td>
                            <td>{row.number}</td>
                            <td>{row.hex}</td>
                        </tr>

                    ))}
                    </tbody>
                </Table>
            </form>
        </div>
    );
}

export default ContentFile;