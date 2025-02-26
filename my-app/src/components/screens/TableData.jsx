import React from 'react';
import { Container,Table} from 'react-bootstrap'

const TableData = () => {
  return (
    <Container>
       <Table className="my-5" responsive bordered>
        <thead>
            <tr>
            <th > Sl No. </th>
            <th colspan={2}> Subjets 
            <th > Code </th>
            <th style={{paddingLeft:"10rem",paddinhRight:"5rem"}}> Subject </th>
            </th>
            <th colspan={3}> Examination Marks Obtained
            <th style={{paddingLeft:"5px" }}> Max </th>
            <th style={{paddingLeft:"100px"}}> Min </th>
            <th style={{paddingLeft:"60px" }}> Obtained </th>
            </th>
            <th> Subject Result </th>
            </tr>
                
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>CSE001</td>
                <td>JaVA</td>
                <td>100</td>
                <td>35</td>
                <td>65</td>
                <td>Pass</td>
            </tr>

            <tr>
                <td>1</td>
                <td>CSE001</td>
                <td>JaVA</td>
                <td>100</td>
                <td>35</td>
                <td>65</td>
                <td>Pass</td>
            </tr>

            <tr>
                <td>1</td>
                <td>CSE001</td>
                <td>JaVA</td>
                <td>100</td>
                <td>35</td>
                <td>65</td>
                <td>Pass</td>
            </tr>

            <tr>
                <td>1</td>
                <td>CSE001</td>
                <td>JaVA</td>
                <td>100</td>
                <td>35</td>
                <td>65</td>
                <td>Pass</td>
            </tr>

        </tbody>
        <thead>
            <tr>
            <th colspan={3}>Grand Total: </th>
            <td>400</td>
            <td>140</td>
            <td>260</td>
            <td>Pass</td>
            </tr>
            
        </thead>
       </Table>
       <p><b>Total Marks Obtained [in words]</b>: Two Hundred and Sixty only</p>
       <br/>
       <p><b>Result Of Semester </b>: Pass</p>
       <p><b>Percentage </b>: 65%</p>
       <p><b>Date </b>: 05 Jan 2025</p>
    </Container>
  );
}

export default TableData